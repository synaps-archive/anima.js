/* Anima Supported Wallets */
const METAMASK = "METAMASK";

const AnimaWallets = {
  [METAMASK]: true,
};

export function IsAnimaWalletSupported(wallet: string): boolean {
  return AnimaWallets[wallet];
}

export default {
  METAMASK,
  IsAnimaWalletSupported,
};
