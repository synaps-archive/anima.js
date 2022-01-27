import { Owner, Verifier } from "../types";
import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
import { Attribute } from "../types";

function IsInResourceAttributes(
  resourceAttributes: Attribute[],
  slug: string
): boolean {
  let found = false;
  resourceAttributes.forEach((attr) => {
    if (attr.name === slug) {
      found = true;
      return;
    }
  });
  return found;
}

function GetSharingType(
  resourceAttributes: Attribute[],
  requestedAttributes: { [key: string]: string }
): [Attribute[], string] {
  let regAttrs: { [key: string]: boolean } = {};

  Object.keys(requestedAttributes).forEach(function (slug) {
    const res = IsInResourceAttributes(resourceAttributes, slug);
    if (IsInResourceAttributes(resourceAttributes, slug) === true) {
      regAttrs[slug] = true;
    }
  });

  const documentAttrLen = resourceAttributes.length;

  let registeredAttrs: Attribute[] = [];
  Object.keys(regAttrs).forEach((key) => {
    registeredAttrs.push({
      name: key,
      type: "string",
    });
  });

  if (documentAttrLen === registeredAttrs.length) {
    return [registeredAttrs, "credential"];
  }
  return [registeredAttrs, "attributes"];
}

export function GetSharingRequest(
  resource: string,
  credential: string,
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

  if (Wallets.IsSupported(owner.wallet) === false) {
    throw Error("Wallet not supported");
  }

  const attrs = Resources.ResourceAttributes[resource];
  const [requestedAttributes, sharingType] = GetSharingType(attrs, attributes);
  if (sharingType === "") {
    throw Error("Invalid attributes sharing");
  }

  const message = {
    request: {
      resource: resource,
      shared_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      credential: credential,
      type: sharingType,
      attributes,
    },
    owner: {
      id: `anima:wallet:${owner.public_address}`,
      chain: owner.chain,
      wallet: owner.wallet,
      public_address: owner.public_address,
    },
    verifier: {
      public_address: verifier.public_address,
      challenge: verifier.chain,
      id: verifier.id,
    },
  };

  let challenge = {};

  switch (owner.chain) {
    case Chains.ETH:
      challenge = Ethereum.SharingRequest(message, requestedAttributes);
      break;

    default:
      throw "Unable to get sharing request";
  }

  return JSON.stringify(challenge);
}
