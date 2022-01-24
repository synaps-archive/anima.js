"use strict";
exports.__esModule = true;
exports.GetIssuingRequest = void 0;
var moment_1 = require("moment");
var chains_1 = require("../chains");
var index_1 = require("../resources/index");
var index_2 = require("../chains/ethereum/index");
function GetIssuingRequest(resource, fields, owner, issuer) {
    if (index_1["default"].IsSupported(resource) === false) {
        throw Error("Resource not supported");
    }
    if (chains_1["default"].IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    var message = {
        request: {
            resource: resource,
            requested_at: (0, moment_1["default"])().utc().format("YYYY-MM-DD HH:mm:ss"),
            fields: fields
        },
        owner: {
            chain: owner.chain,
            public_address: owner.public_address,
            public_key_encryption: owner.public_key_encryption
        },
        issuer: {
            public_address: issuer.public_address,
            id: issuer.id
        }
    };
    var challenge = {};
    switch (owner.chain) {
        case chains_1["default"].ETH:
            challenge = index_2["default"].IssuingRequest(resource, message);
            break;
        default:
            throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
exports.GetIssuingRequest = GetIssuingRequest;
