import moment from "moment";
import Wallets from "../wallets";
import Chains from "../chains";
import Resources from "../resources/index";
import Metamask from "../wallets/metamask/index";
export function GetSharingRequest(resource, attributes, owner, verifier) {
    if (Resources.IsSupported(resource) === false) {
        throw Error("Resource not supported");
    }
    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    var message = {
        share: {
            resource: resource,
            shared_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
            attributes: attributes,
        },
        owner: {
            chain: owner.chain,
            wallet: owner.wallet,
            public_address: owner.public_address,
        },
        verifier: {
            public_address: verifier.public_address,
            id: verifier.id,
        },
    };
    var challenge = {};
    switch (owner.wallet) {
        case Wallets.METAMASK:
            challenge = Metamask.SharingRequest(message);
            break;
        default:
            throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
