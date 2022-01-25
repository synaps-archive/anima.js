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
export function SharingRequest(message, attributes) {
    var challenge = {
        domain: {
            name: "anima",
            version: "1.0",
            chainId: "1",
        },
        message: __assign(__assign({}, message), { request: __assign({ schema: "anima:schema:eth_sharing" }, message.request) }),
        primaryType: "Main",
        types: {
            Main: [
                { name: "request", type: "Request" },
                { name: "verifier", type: "Verifier" },
                { name: "owner", type: "Owner" },
            ],
            Request: [
                {
                    name: "schema",
                    type: "string",
                },
                {
                    name: "resource",
                    type: "string",
                },
                {
                    name: "shared_at",
                    type: "string",
                },
                {
                    name: "type",
                    type: "string",
                },
                {
                    name: "attributes",
                    type: "Attributes",
                },
            ],
            Owner: [
                {
                    name: "chain",
                    type: "string",
                },
                { name: "public_address", type: "address" },
            ],
            Verifier: [
                { name: "public_address", type: "address" },
                { name: "id", type: "string" },
            ],
            Attributes: attributes,
            EIP712Domain: [
                {
                    name: "name",
                    type: "string",
                },
                {
                    name: "chainId",
                    type: "uint256",
                },
                {
                    name: "version",
                    type: "string",
                },
            ],
        },
    };
    return challenge;
}
