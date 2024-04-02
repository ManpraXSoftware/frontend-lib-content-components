"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = exports.deleteObject = exports.client = void 0;
var _auth = require("@edx/frontend-platform/auth");
/**
 * get(url)
 * simple wrapper providing an authenticated Http client get action
 * @param {string} url - target url
 */
var get = exports.get = function get() {
  var _getAuthenticatedHttp;
  return (_getAuthenticatedHttp = (0, _auth.getAuthenticatedHttpClient)()).get.apply(_getAuthenticatedHttp, arguments);
};
/**
 * post(url, data)
 * simple wrapper providing an authenticated Http client post action
 * @param {string} url - target url
 * @param {object|string} data - post payload
 */
var post = exports.post = function post() {
  var _getAuthenticatedHttp2;
  return (_getAuthenticatedHttp2 = (0, _auth.getAuthenticatedHttpClient)()).post.apply(_getAuthenticatedHttp2, arguments);
};
/**
 * delete(url, data)
 * simple wrapper providing an authenticated Http client delete action
 * @param {string} url - target url
 * @param {object|string} data - delete payload
 */
var deleteObject = exports.deleteObject = function deleteObject() {
  var _getAuthenticatedHttp3;
  return (_getAuthenticatedHttp3 = (0, _auth.getAuthenticatedHttpClient)())["delete"].apply(_getAuthenticatedHttp3, arguments);
};
var client = exports.client = _auth.getAuthenticatedHttpClient;
//# sourceMappingURL=utils.js.map