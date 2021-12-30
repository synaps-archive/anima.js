var _a;
/* Anima Supported Wallets */
var ETH = "ETH";
var AnimaChains = (_a = {},
    _a[ETH] = true,
    _a);
function IsSupported(chain) {
    return AnimaChains[chain];
}
export default { ETH: ETH, IsSupported: IsSupported };
