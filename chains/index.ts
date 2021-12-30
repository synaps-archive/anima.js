/* Anima Supported Wallets */
const ETH = "ETH";

const AnimaChains: { [key: string]: boolean } = {
  [ETH]: true,
};

function IsAnimaChainSupported(chain: string): boolean {
  return AnimaChains[chain];
}

export default { ETH, IsAnimaChainSupported };
