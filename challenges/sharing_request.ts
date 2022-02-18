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

  const message = {
    request: {
      resource: resource,
      shared_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      credential,
      attributes,
    },
    owner: {
      id: `anima:wallet:${owner.public_address}`,
      public_address: owner.public_address,
      chain: owner.chain,
      wallet: owner.wallet,
    },
    verifier: {
      id: verifier.id,
      public_address: verifier.public_address,
      chain: verifier.chain,
    },
  };

  let challenge = {};

  switch (owner.chain) {
    case Chains.ETH:
      challenge = Ethereum.SharingRequest(message, attributes);
      break;

    default:
      throw "Unable to get sharing request";
  }

  return JSON.stringify(challenge);
}
