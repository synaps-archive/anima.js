import { IssuingRequestField } from "../types";

export interface Passport {
  filename: string;
  lastname: string;
  birth_date: string;
  nationality: string;
  document_country: string;
  document_number: string;
  document_expiration: string;
  passport_page: string;
  liveness_photo: string;
}

export const MetamaskPassportIssuingRequestFields: IssuingRequestField[] = [
  {
    name: "passport_page",
    type: "string",
  },
  {
    name: "liveness_photo",
    type: "string",
  },
];
