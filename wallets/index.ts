/* Anima Supported Wallets */
const METAMASK = "METAMASK";

const AnimaWallets = {
  [METAMASK]: true,
};

function IsAnimaWalletSupported(wallet: string): boolean {
  return AnimaWallets[wallet];
}

export { METAMASK, IsAnimaWalletSupported };
