var _a, _b;
import { PassportIssuingRequestFields, PassportAttributes } from "./passport";
import { NationalIdAttributes, NationalIdIssuingRequestFields, } from "./national_id";
import { DriverLicenseAttributes, DriverLicenseIssuingRequestFields, } from "./driver_license";
import { ResidentPermitAttributes, ResidentPermitIssuingRequestFields, } from "./resident_permit";
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
function IsSupported(resource) {
    return AnimaResources[resource];
}
/* Ethereum chain */
var IssuingRequestFields = (_a = {},
    _a[PASSPORT] = PassportIssuingRequestFields,
    _a[NATIONAL_ID] = NationalIdIssuingRequestFields,
    _a[DRIVER_LICENSE] = DriverLicenseIssuingRequestFields,
    _a[RESIDENT_PERMIT] = ResidentPermitIssuingRequestFields,
    _a);
var ResourceAttributes = (_b = {},
    _b[PASSPORT] = PassportAttributes,
    _b[NATIONAL_ID] = NationalIdAttributes,
    _b[DRIVER_LICENSE] = DriverLicenseAttributes,
    _b[RESIDENT_PERMIT] = ResidentPermitAttributes,
    _b);
export default {
    PASSPORT: PASSPORT,
    NATIONAL_ID: NATIONAL_ID,
    DRIVER_LICENSE: DRIVER_LICENSE,
    RESIDENT_PERMIT: RESIDENT_PERMIT,
    IsSupported: IsSupported,
    IssuingRequestFields: IssuingRequestFields,
    ResourceAttributes: ResourceAttributes,
};
