var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { MetamaskIssuingRequestFields } from "../../resources/index";
export function IssuingRequest(resource, message) {
    var challenge = __assign(__assign({ domain: {
            name: "anima",
            version: "1.0",
            chainId: 1,
        } }, message), { primaryType: "Main", types: {
            Main: [
                { name: "request", type: "Request" },
                { name: "issuer", type: "Issuer" },
                { name: "owner", type: "Owner" },
            ],
            Fields: MetamaskIssuingRequestFields[resource],
            Request: [
                {
                    name: "resource",
                    type: "string",
                },
                {
                    name: "requested_at",
                    type: "string",
                },
                { name: "fields", type: "Fields" },
            ],
            Owner: [
                {
                    name: "chain",
                    type: "string",
                },
                {
                    name: "wallet",
                    type: "string",
                },
                { name: "public_address", type: "string" },
                { name: "public_key_encryption", type: "string" },
            ],
            Issuer: [
                { name: "public_address", type: "string" },
                { name: "id", type: "string" },
            ],
        } });
    return JSON.stringify(challenge);
}
