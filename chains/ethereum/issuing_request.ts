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
      authorization: {
        ...message.authorization,
      },
    },

    primaryType: "Main",
    types: {
      Main: [
        { name: "authorization", type: "Authorization" },
        { name: "issuer", type: "Issuer" },
        { name: "owner", type: "Owner" },
      ],
      Authorization: [
        { name: "specs", type: "string" },
        { name: "requested_at", type: "uint64" },
        { name: "fields", type: "Fields" },
        { name: "attributes", type: "string[]" }
      ],
      Fields: Resources.IssuingRequestFields[resource],
      Owner: [
        { name: "id", type: "string" },
        { name: "public_address", type: "address" },
        { name: "chain", type: "string" },
        { name: "wallet", type: "string" },
        { name: "public_key_encryption", type: "string" },
      ],
      Issuer: [
        { name: "id", type: "string" },
        { name: "public_address", type: "address" },
        { name: "chain", type: "string" },
      ],
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "version", type: "string" },
      ],
    },
  };
  return challenge;
}
