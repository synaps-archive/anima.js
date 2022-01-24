"use strict";
exports.__esModule = true;
exports.PassportAttributes = exports.PassportIssuingRequestFields = void 0;
exports.PassportIssuingRequestFields = [
    {
        name: "passport_page",
        type: "string"
    },
    {
        name: "liveness_photo",
        type: "string"
    },
];
exports.PassportAttributes = [
    {
        name: "firstname",
        type: "string"
    },
    {
        name: "lastname",
        type: "string"
    },
    {
        name: "birth_date",
        type: "string"
    },
    {
        name: "nationality",
        type: "string"
    },
    {
        name: "document_country",
        type: "string"
    },
    {
        name: "document_number",
        type: "string"
    },
    {
        name: "document_expiration",
        type: "string"
    },
    {
        name: "passport_page",
        type: "file"
    },
    {
        name: "liveness_photo",
        type: "file"
    },
];
