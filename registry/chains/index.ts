/* Anima Supported Wallets */
const ETH = "ETH";

const AnimaChains = {
  [ETH]: true,
};

export function IsAnimaChainSupported(chain: string): boolean {
  return AnimaChains[chain];
}

export default {
  ETH,
  IsAnimaChainSupported,
};
