import { PassportIssuingRequestFields, PassportAttributes } from "./passport";
import { Attribute, IssuingRequestField } from "../types";
import {
  NationalIdAttributes,
  NationalIdIssuingRequestFields,
} from "./national_id";

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
};

const ResourceAttributes: { [key: string]: Attribute[] } = {
  [PASSPORT]: PassportAttributes,
  [NATIONAL_ID]: NationalIdAttributes,
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
