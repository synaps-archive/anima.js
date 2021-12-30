/* Anima Supported Wallets */
const METAMASK = "METAMASK";

const AnimaWallets: { [key: string]: boolean } = {
  [METAMASK]: true,
};

function IsAnimaWalletSupported(wallet: string): boolean {
  return AnimaWallets[wallet];
}

export default { METAMASK, IsAnimaWalletSupported };
