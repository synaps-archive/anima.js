import moment from "moment";
import Chains from "../chains";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
function IsInResourceAttributes(resourceAttributes, slug) {
    var found = false;
    resourceAttributes.forEach(function (attr) {
        if (attr.name === slug) {
            found = true;
            return;
        }
    });
    return found;
}
function GetSharingType(resourceAttributes, requestedAttributes) {
    var regAttrs = {};
    Object.keys(requestedAttributes).forEach(function (slug) {
        var res = IsInResourceAttributes(resourceAttributes, slug);
        if (IsInResourceAttributes(resourceAttributes, slug) === true) {
            regAttrs[slug] = true;
        }
    });
    var documentAttrLen = resourceAttributes.length;
    var registeredAttrs = [];
    Object.keys(regAttrs).forEach(function (key) {
        registeredAttrs.push(key);
    });
    if (documentAttrLen === registeredAttrs.length) {
        return "document";
    }
    return "attribtues";
}
export function GetSharingRequest(resource, attributes, owner, verifier) {
    if (Resources.IsSupported(resource) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    var attrs = Resources.ResourceAttributes[resource];
    var sharingType = GetSharingType(attrs, attributes);
    if (sharingType === "") {
        throw Error("Invalid attributes sharing");
    }
    var message = {
        request: {
            resource: resource,
            shared_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
            type: sharingType,
            attributes: attributes,
        },
        owner: {
            chain: owner.chain,
            public_address: owner.public_address,
        },
        verifier: {
            public_address: verifier.public_address,
            id: verifier.id,
        },
    };
    var challenge = {};
    switch (owner.chain) {
        case Chains.ETH:
            challenge = Ethereum.SharingRequest(message);
            break;
        default:
            throw "Unable to get sharing request";
    }
    return JSON.stringify(challenge);
}
