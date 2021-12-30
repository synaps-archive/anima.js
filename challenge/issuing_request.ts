import { Owner, Issuer } from "../types";
import moment from "moment";
import { IsAnimaWalletSupported, METAMASK } from "../wallets";
import { IsAnimaChainSupported } from "../chains";
import { IsAnimaResourceSupported } from "../resources/index";
import Metamask from "../wallets/metamask/index";

export function GetIssuingRequest(
  resource: string,
  fields: any,
  owner: Owner,
  issuer: Issuer
) {
  if (IsAnimaResourceSupported(resource) === false) {
    throw Error("Resource not supported");
  }

  if (IsAnimaWalletSupported(owner.wallet) === false) {
    throw Error("Wallet not supported");
  }

  if (IsAnimaChainSupported(owner.chain) === false) {
    throw Error("Chain not supported");
  }

  const message = {
    request: {
      resource: resource,
      requested_at: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      fields,
    },
    owner: {
      chain: owner.chain,
      wallet: owner.wallet,
      public_address: owner.public_address,
      public_key_encryption: owner.public_key_encryption,
    },
    issuer: {
      public_address: issuer.public_address,
      id: issuer.id,
    },
  };

  let challenge = "";

  switch (owner.wallet) {
    case METAMASK:
      challenge = Metamask.IssuingRequest(resource, message);
      break;

    default:
      throw "Unable to get issuing request";
  }

  return JSON.stringify(challenge);
}
