export function SharingRequest(message: any): object {
  const challenge = {
    domain: {
      name: "anima",
      version: "1.0",
      chainId: 1,
    },
    message: {
      ...message,
      request: {
        schema: "anima:schema:eth_sharing",
        ...message.request,
      },
    },
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
