import moment from "moment";
import Chains from "../chains";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
export function GetIssuingRequest(resource, fields, owner, issuer) {
    if (Resources.IsSupported(resource) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    var message = {
        request: {
            resource: resource,
            requested_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
            fields: fields,
        },
        owner: {
            chain: owner.chain,
            public_address: owner.public_address,
            public_key_encryption: owner.public_key_encryption,
        },
        issuer: {
            public_address: issuer.public_address,
            id: issuer.id,
        },
    };
    var challenge = {};
    switch (owner.chain) {
        case Chains.ETH:
            challenge = Ethereum.IssuingRequest(resource, message);
            break;
        default:
            throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
