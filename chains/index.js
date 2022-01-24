"use strict";
var _a;
exports.__esModule = true;
/* Anima Supported Chains */
var ETH = "ETH";
var AnimaChains = (_a = {},
    _a[ETH] = true,
    _a);
function IsSupported(chain) {
    return AnimaChains[chain];
}
exports["default"] = { ETH: ETH, IsSupported: IsSupported };
