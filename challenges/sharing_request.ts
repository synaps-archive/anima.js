import { Owner, Verifier } from "../types";
import moment from "moment";
import Chains from "../chains";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
import { Attribute, IssuingRequestField } from "../types";

function IsInResourceAttributes(
  resourceAttributes: Attribute[],
  slug: string
): boolean {
  resourceAttributes.forEach((attr) => {
    if (attr.name === slug) {
      return true;
    }
  });
  return false;
}

function GetSharingType(
  resourceAttributes: Attribute[],
  requestedAttributes: { [key: string]: string }
): string {
  let regAttrs: { [key: string]: boolean } = {};

  Object.keys(requestedAttributes).forEach(function (slug) {
    if (IsInResourceAttributes(resourceAttributes, slug) === true) {
      regAttrs[slug] = true;
    }
  });

  const documentAttrLen = resourceAttributes.length;

  let registeredAttrs = [];
  Object.keys(regAttrs).forEach((key) => {
    registeredAttrs.push(key);
  });

  console.log(`Doc len : ${documentAttrLen}`);
  console.log(`Reg len : ${registeredAttrs.length}`);

  if (documentAttrLen === registeredAttrs.length) {
    return "document";
  }
  return "attribtues";
}

export function GetSharingRequest(
  resource: string,
  attributes: { [key: string]: string },
  owner: Owner,
  verifier: Verifier
): string {
  if (Resources.IsSupported(resource) === false) {
    throw Error("Resource not supported");
  }

  if (Chains.IsSupported(owner.chain) === false) {
    throw Error("Chain not supported");
  }

  const attrs = Resources.ResourceAttributes[resource];
  const sharingType = GetSharingType(attrs, attributes);
  if (sharingType === "") {
    throw Error("Invalid attributes sharing");
  }

  const message = {
    request: {
      resource: resource,
      shared_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      type: sharingType, // or attributes
      attributes,
    },
    owner: {
      chain: owner.chain,
      public_address: owner.public_address,
    },
    verifier: {
      public_address: verifier.public_address,
      id: verifier.id,
    },
  };

  let challenge = {};

  switch (owner.chain) {
    case Chains.ETH:
      challenge = Ethereum.SharingRequest(message);
      break;

    default:
      throw "Unable to get sharing request";
  }

  return JSON.stringify(challenge);
}
