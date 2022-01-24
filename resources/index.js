"use strict";
var _a, _b;
exports.__esModule = true;
var passport_1 = require("./passport");
/* Anima Resources */
var PASSPORT = "anima:resource:passport";
var NATIONAL_ID = "anima:resource:national_id";
var DRIVER_LICENSE = "anima:resource:driver_license";
var RESIDENT_PERMIT = "anima:resource:resident_permit";
/* Anima Supported Resources */
var AnimaResources = {
    PASSPORT: true,
    NATIONAL_ID: true,
    DRIVER_LICENSE: true,
    RESIDENT_PERMIT: true
};
function IsSupported(resource) {
    return AnimaResources[resource];
}
/* Ethereum chain */
var IssuingRequestFields = (_a = {},
    _a[PASSPORT] = passport_1.PassportIssuingRequestFields,
    _a);
var ResourceAttributes = (_b = {},
    _b[PASSPORT] = passport_1.PassportAttributes,
    _b);
exports["default"] = {
    PASSPORT: PASSPORT,
    NATIONAL_ID: NATIONAL_ID,
    DRIVER_LICENSE: DRIVER_LICENSE,
    RESIDENT_PERMIT: RESIDENT_PERMIT,
    IsSupported: IsSupported,
    IssuingRequestFields: IssuingRequestFields,
    ResourceAttributes: ResourceAttributes
};
