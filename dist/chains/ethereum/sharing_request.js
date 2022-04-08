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
    var ethAttributesType = [];
    Object.keys(attributes).forEach(function (key) {
        ethAttributesType.push({
            name: key,
            type: "string",
        });
    });
    var challenge = {
        domain: {
            name: "anima",
            version: "1.0",
            chainId: 0x01,
        },
        message: __assign(__assign({}, message), { authorization: __assign({}, message.authorization) }),
        primaryType: "Main",
        types: {
            Main: [
                { name: "authorization", type: "Authorization" },
                { name: "verifier", type: "Verifier" },
                { name: "owner", type: "Owner" },
            ],
            Authorization: [
                { name: "specs", type: "string" },
                { name: "shared_at", type: "uint64" },
                { name: "source", type: "Source" },
                { name: "attributes", type: "Attributes" },
            ],
            Source: [
                { name: "id", type: "string" },
                { name: "specs", type: "string" }
            ],
            Owner: [
                { name: "id", type: "string" },
                { name: "public_address", type: "address" },
                { name: "chain", type: "string" },
                { name: "wallet", type: "string" },
            ],
            Verifier: [
                { name: "id", type: "string" },
                { name: "public_address", type: "address" },
                { name: "chain", type: "string" },
            ],
            Attributes: ethAttributesType,
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
