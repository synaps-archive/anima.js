import { Owner, Verifier } from "../types";
import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";

export function GetSharingRequest(
  resource: string,
  attributes: { [key: string]: any },
  owner: Owner,
  verifier: Verifier
) {
  if (Resources.IsSupported(resource) === false) {
    throw Error("Resource not supported");
  }

  if (Wallets.IsSupported(owner.wallet) === false) {
    throw Error("Wallet not supported");
  }

  if (Chains.IsSupported(owner.chain) === false) {
    throw Error("Chain not supported");
  }

  const message = {
    request: {
      resource: resource,
      shared_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      attributes,
    },
    owner: {
      chain: owner.chain,
      wallet: owner.wallet,
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
