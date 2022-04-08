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
export function GetSharingRequest(specs, source, attributes, owner, verifier) {
    if (Resources.IsSupported(source.specs) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }
    Object.keys(attributes).forEach(function (attribute) {
        attributes[attribute] = "anima:credential:".concat(attributes[attribute]);
    });
    var message = {
        authorization: {
            specs: specs,
            shared_at: moment().utc().unix(),
            source: source,
            attributes: attributes,
        },
        owner: {
            id: "anima:owner:".concat(owner.public_address),
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
            challenge = Ethereum.SharingRequest(message, attributes);
            break;
        default:
            throw "Unable to get sharing request";
    }
    return JSON.stringify(challenge);
}
