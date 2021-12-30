var _a;
/* Anima Supported Wallets */
var METAMASK = "METAMASK";
var AnimaWallets = (_a = {},
    _a[METAMASK] = true,
    _a);
function IsAnimaWalletSupported(wallet) {
    return AnimaWallets[wallet];
}
export default { METAMASK: METAMASK, IsAnimaWalletSupported: IsAnimaWalletSupported };
