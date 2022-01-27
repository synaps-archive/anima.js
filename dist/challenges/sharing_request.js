import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
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
        registeredAttrs.push({
            name: key,
            type: "string",
        });
    });
    if (documentAttrLen === registeredAttrs.length) {
        return [registeredAttrs, "credential"];
    }
    return [registeredAttrs, "attributes"];
}
export function GetSharingRequest(resource, credential, attributes, owner, verifier) {
    if (Resources.IsSupported(resource) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }
    var attrs = Resources.ResourceAttributes[resource];
    var _a = GetSharingType(attrs, attributes), requestedAttributes = _a[0], sharingType = _a[1];
    if (sharingType === "") {
        throw Error("Invalid attributes sharing");
    }
    var message = {
        request: {
            resource: resource,
            shared_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
            credential: credential,
            type: sharingType,
            attributes: attributes,
        },
        owner: {
            id: "anima:wallet:".concat(owner.public_address),
            public_address: owner.public_address,
            chain: owner.chain,
            wallet: owner.wallet,
        },
        verifier: {
            id: verifier.id,
            public_address: verifier.public_address,
            chain: verifier.chain,
        },
    };
    var challenge = {};
    switch (owner.chain) {
        case Chains.ETH:
            challenge = Ethereum.SharingRequest(message, requestedAttributes);
            break;
        default:
            throw "Unable to get sharing request";
    }
    return JSON.stringify(challenge);
}
