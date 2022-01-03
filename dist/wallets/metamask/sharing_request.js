export function SharingRequest(message) {
    var challenge = {
        domain: {
            name: "anima",
            version: "1.0",
            chainId: 1,
        },
        message: message,
        primaryType: "Main",
        types: {
            Main: [
                { name: "share", type: "Share" },
                { name: "verifier", type: "Verifier" },
                { name: "owner", type: "Owner" },
            ],
            Share: [
                {
                    name: "resource",
                    type: "string",
                },
                {
                    name: "shared_at",
                    type: "string",
                },
                { name: "attributes", type: "object" },
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
            ],
            Verifier: [
                { name: "public_address", type: "string" },
                { name: "id", type: "string" },
            ],
        },
    };
    return challenge;
}
