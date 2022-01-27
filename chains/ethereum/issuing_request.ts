import Resources from "../../resources/index";

export function IssuingRequest(resource: string, message: any): object {
  const challenge = {
    domain: {
      name: "anima",
      version: "1.0",
      chainId: "1",
    },
    message: {
      ...message,
      request: {
        schema: "anima:schema:eth_issuing",
        ...message.request,
      },
    },

    primaryType: "Main",
    types: {
      Main: [
        { name: "request", type: "Request" },
        { name: "issuer", type: "Issuer" },
        { name: "owner", type: "Owner" },
      ],
      Fields: Resources.IssuingRequestFields[resource],
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
        { name: "public_address", type: "address" },
        { name: "wallet", type: "string" },
        { name: "public_key_encryption", type: "string" },
      ],
      Issuer: [
        { name: "public_address", type: "address" },
        { name: "chain", type: "string" },
        { name: "id", type: "string" },
      ],
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
