"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
var httpHeaders_1 = require("./httpHeaders");
/**
 * An individual HTTP request that can be sent with a HttpClient.
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(_httpMethod, _url, headers, _body) {
        this._httpMethod = _httpMethod;
        this._url = _url;
        this._body = _body;
        if (!this._url) {
            var urlString = (this._url === undefined || this._url === null ? this._url : "\"" + this._url + "\"");
            throw new Error(urlString + " is not a valid URL for a HttpRequest.");
        }
        this._headers = (headers instanceof httpHeaders_1.HttpHeaders ? headers : new httpHeaders_1.HttpHeaders(headers));
    }
    Object.defineProperty(HttpRequest.prototype, "httpMethod", {
        /**
         * Get the HTTP method that this request will use.
         */
        get: function () {
            return this._httpMethod;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpRequest.prototype, "url", {
        /**
         * Get the URL that this request will be sent to.
         */
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpRequest.prototype, "headers", {
        /**
         * Get the HTTP headers that will be sent with this request.
         */
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpRequest.prototype, "body", {
        /**
         * Get the body that will be sent with this request.
         */
        get: function () {
            return this._body;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create a deep clone/copy of this HttpRequest.
     */
    HttpRequest.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=httpRequest.js.map