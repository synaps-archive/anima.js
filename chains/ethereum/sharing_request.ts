import { Attribute } from "../../types";

export function SharingRequest(message: any, attributes: Attribute[]): object {
  const challenge = {
    domain: {
      name: "anima",
      version: "1.0",
      chainId: "1",
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
