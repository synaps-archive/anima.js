import moment from "moment";
import Chains from "../chains";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
function IsInResourceAttributes(resourceAttributes, slug) {
    resourceAttributes.forEach(function (attr) {
        if (attr.name === slug) {
            return true;
        }
    });
    return false;
}
function GetSharingType(resourceAttributes, requestedAttributes) {
    var registeredAttrs = {};
    Object.keys(requestedAttributes).forEach(function (slug) {
        if (IsInResourceAttributes(resourceAttributes, slug) === false) {
            return "";
        }
        registeredAttrs[slug] = true;
    });
    var documentAttrLen = resourceAttributes.length;
    var registeredAttrLen = 0;
    Object.keys(registeredAttrs).forEach(function () {
        registeredAttrLen++;
    });
    if (documentAttrLen === registeredAttrLen) {
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
