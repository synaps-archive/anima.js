"use strict";
exports.__esModule = true;
exports.GetSharingRequest = void 0;
var moment_1 = require("moment");
var chains_1 = require("../chains");
var index_1 = require("../resources/index");
var index_2 = require("../chains/ethereum/index");
function IsInResourceAttributes(resourceAttributes, slug) {
    resourceAttributes.forEach(function (attr) {
        if (attr.name === slug) {
            return true;
        }
    });
    return false;
}
function GetSharingType(resourceAttributes, requestedAttributes) {
    var registeredAttrs;
    Object.keys(requestedAttributes).forEach(function (slug) {
        if (IsInResourceAttributes(resourceAttributes, slug) === false) {
            return "";
        }
        registeredAttrs[slug] = true;
    });
    var documentAttrLen = resourceAttributes.length;
    var registeredAttrLen = 0;
    Object.keys(registeredAttrs).forEach(function () {
        registeredAttrLen++;
    });
    if (documentAttrLen === registeredAttrLen) {
        return "document";
    }
    return "attribtues";
}
function GetSharingRequest(resource, attributes, owner, verifier) {
    if (index_1["default"].IsSupported(resource) === false) {
        throw Error("Resource not supported");
    }
    if (chains_1["default"].IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    var attrs = index_1["default"].ResourceAttributes[resource];
    var sharingType = GetSharingType(attrs, attributes);
    if (sharingType === "") {
        throw Error("Invalid attributes sharing");
    }
    var message = {
        request: {
            resource: resource,
            shared_at: (0, moment_1["default"])().utc().format("YYYY-MM-DD HH:mm:ss"),
            type: sharingType,
            attributes: attributes
        },
        owner: {
            chain: owner.chain,
            public_address: owner.public_address
        },
        verifier: {
            public_address: verifier.public_address,
            id: verifier.id
        }
    };
    var challenge = {};
    switch (owner.chain) {
        case chains_1["default"].ETH:
            challenge = index_2["default"].SharingRequest(message);
            break;
        default:
            throw "Unable to get sharing request";
    }
    return JSON.stringify(challenge);
}
exports.GetSharingRequest = GetSharingRequest;
