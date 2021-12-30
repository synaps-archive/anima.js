import { MetamaskPassportIssuingRequestFields } from "../registry/resources/passport";
import AnimaResources from "./resources/index";

/* Metamask Issuing Request Fields */
export const MetamaskIssuingRequestFields = {
  [AnimaResources.PASSPORT]: MetamaskPassportIssuingRequestFields,
  [AnimaResources.NATIONAL_ID]: MetamaskPassportIssuingRequestFields,
  [AnimaResources.DRIVER_LICENSE]: MetamaskPassportIssuingRequestFields,
  [AnimaResources.RESIDENT_PERMIT]: MetamaskPassportIssuingRequestFields,
};
