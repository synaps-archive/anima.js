"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.IssuingRequest = void 0;
var index_1 = require("../../resources/index");
function IssuingRequest(resource, message) {
    var challenge = {
        domain: {
            name: "anima",
            version: "1.0",
            chainId: "1"
        },
        message: __assign(__assign({}, message), { request: __assign({ schema: "anima:schema:eth_issuing" }, message.request) }),
        primaryType: "Main",
        types: {
            Main: [
                { name: "request", type: "Request" },
                { name: "issuer", type: "Issuer" },
                { name: "owner", type: "Owner" },
            ],
            Fields: index_1["default"].IssuingRequestFields[resource],
            Request: [
                {
                    name: "schema",
                    type: "string"
                },
                {
                    name: "resource",
                    type: "string"
                },
                {
                    name: "requested_at",
                    type: "string"
                },
                { name: "fields", type: "Fields" },
            ],
            Owner: [
                {
                    name: "chain",
                    type: "string"
                },
                {
                    name: "wallet",
                    type: "string"
                },
                { name: "public_address", type: "string" },
                { name: "public_key_encryption", type: "string" },
            ],
            Issuer: [
                { name: "public_address", type: "string" },
                { name: "id", type: "string" },
            ],
            EIP712Domain: [
                {
                    name: "name",
                    type: "string"
                },
                {
                    name: "chainId",
                    type: "uint256"
                },
                {
                    name: "version",
                    type: "string"
                },
            ]
        }
    };
    return challenge;
}
exports.IssuingRequest = IssuingRequest;