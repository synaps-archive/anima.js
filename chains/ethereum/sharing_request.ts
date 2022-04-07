import { Attribute } from "../../types";

export function SharingRequest(
  message: any,
  attributes: { [key: string]: string }
): object {
  const ethAttributesType: Attribute[] = [];
  Object.keys(attributes).forEach((key) => {
    ethAttributesType.push({
      name: key,
      type: "string",
    });
  });

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
        { name: "verifier", type: "Verifier" },
        { name: "owner", type: "Owner" },
      ],
      Authorization: [
        { name: "specs", type: "string" },
        { name: "shared_at", type: "string" },
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
