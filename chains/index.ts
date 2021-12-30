/* Anima Supported Wallets */
const ETH = "ETH";

const AnimaChains = {
  [ETH]: true,
};

function IsAnimaChainSupported(chain: string): boolean {
  return AnimaChains[chain];
}

export { ETH, IsAnimaChainSupported };
