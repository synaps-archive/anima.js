import { PassportIssuingRequestFields, PassportAttributes } from "./passport";
import { Attribute, IssuingRequestField } from "../types";
import {
  NationalIdAttributes,
  NationalIdIssuingRequestFields,
} from "./national_id";
import {
  DriverLicenseAttributes,
  DriverLicenseIssuingRequestFields,
} from "./driver_license";
import {
  ResidentPermitAttributes,
  ResidentPermitIssuingRequestFields,
} from "./resident_permit";

/* Anima Resources */
const PASSPORT = "anima:resource:passport";
const NATIONAL_ID = "anima:resource:national_id";
const DRIVER_LICENSE = "anima:resource:driver_license";
const RESIDENT_PERMIT = "anima:resource:resident_permit";

/* Anima Supported Resources */
const AnimaResources: { [key: string]: boolean } = {
  PASSPORT: true,
  NATIONAL_ID: true,
  DRIVER_LICENSE: true,
  RESIDENT_PERMIT: true,
};

function IsSupported(resource: string): boolean {
  return AnimaResources[resource];
}

/* Ethereum chain */
const IssuingRequestFields: { [key: string]: IssuingRequestField[] } = {
  [PASSPORT]: PassportIssuingRequestFields,
  [NATIONAL_ID]: NationalIdIssuingRequestFields,
  [DRIVER_LICENSE]: DriverLicenseIssuingRequestFields,
  [RESIDENT_PERMIT]: ResidentPermitIssuingRequestFields,
};

const ResourceAttributes: { [key: string]: Attribute[] } = {
  [PASSPORT]: PassportAttributes,
  [NATIONAL_ID]: NationalIdAttributes,
  [DRIVER_LICENSE]: DriverLicenseAttributes,
  [RESIDENT_PERMIT]: ResidentPermitAttributes,
};

export default {
  PASSPORT,
  NATIONAL_ID,
  DRIVER_LICENSE,
  RESIDENT_PERMIT,
  IsSupported,
  IssuingRequestFields,
  ResourceAttributes,
};
