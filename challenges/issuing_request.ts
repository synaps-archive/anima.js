import { Owner, Issuer } from "../types";
import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";

export function GetIssuingRequest(
  resource: string,
  fields: any,
  owner: Owner,
  issuer: Issuer
) {
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
      requested_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      fields,
    },
    owner: {
      id: `anima:owner:${owner.public_address}`,
      chain: owner.chain,
      wallet: owner.wallet,
      public_address: owner.public_address,
      public_key_encryption: owner.public_key_encryption,
    },
    issuer: {
      public_address: issuer.public_address,
      chain: issuer.chain,
      id: issuer.id,
    },
  };

  let challenge = {};

  switch (owner.chain) {
    case Chains.ETH:
      challenge = Ethereum.IssuingRequest(resource, message);
      break;

    default:
      throw "Unable to get issuing request";
  }

  return JSON.stringify(challenge);
}
