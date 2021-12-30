var _a;
import { MetamaskPassportIssuingRequestFields } from "./passport";
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
    RESIDENT_PERMIT: true,
};
function IsAnimaResourceSupported(resource) {
    return AnimaResources[resource];
}
/* Metamask Wallet */
var MetamaskIssuingRequestFields = (_a = {},
    _a[PASSPORT] = MetamaskPassportIssuingRequestFields,
    _a);
export default {
    PASSPORT: PASSPORT,
    NATIONAL_ID: NATIONAL_ID,
    DRIVER_LICENSE: DRIVER_LICENSE,
    RESIDENT_PERMIT: RESIDENT_PERMIT,
    IsAnimaResourceSupported: IsAnimaResourceSupported,
    MetamaskIssuingRequestFields: MetamaskIssuingRequestFields,
};
