import { MetamaskPassportIssuingRequestFields } from "./passport";

/* Anima Resources */
const PASSPORT = "anima:resource:passport";
const NATIONAL_ID = "anima:resource:national_id";
const DRIVER_LICENSE = "anima:resource:driver_license";
const RESIDENT_PERMIT = "anima:resource:resident_permit";

/* Anima Supported Resources */
const AnimaResources = {
  PASSPORT: true,
  NATIONAL_ID: true,
  DRIVER_LICENSE: true,
  RESIDENT_PERMIT: true,
};

function IsAnimaResourceSupported(resource: string): boolean {
  return AnimaResources[resource];
}

/* Metamask Wallet */
const MetamaskIssuingRequestFields = {
  [PASSPORT]: MetamaskPassportIssuingRequestFields,
};

export {
  PASSPORT,
  NATIONAL_ID,
  DRIVER_LICENSE,
  RESIDENT_PERMIT,
  IsAnimaResourceSupported,
  MetamaskIssuingRequestFields,
};
