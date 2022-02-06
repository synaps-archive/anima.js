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
          name: "credential",
          type: "string",
        },
        {
          name: "attributes",
          type: "Attributes",
        },
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
