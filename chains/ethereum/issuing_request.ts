import Resources from "../../resources/index";

export function IssuingRequest(resource: string, message: any): object {
  const challenge = {
    domain: {
      name: "anima",
      version: "1.0",
      chainId: 1,
    },
    message,
    primaryType: "Main",
    types: {
      Main: [
        { name: "request", type: "Request" },
        { name: "issuer", type: "Issuer" },
        { name: "owner", type: "Owner" },
      ],
      Fields: Resources.ETH_IssuingRequestFields[resource],
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
    },
  };
  return challenge;
}
