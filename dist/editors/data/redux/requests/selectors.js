"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusSelector = exports.requestStatus = exports.isPending = exports.isInactive = exports.isFinished = exports.isFailed = exports.isCompleted = exports.errorStatus = exports.errorCode = exports.error = exports["default"] = exports.data = exports.connectedStatusSelectors = void 0;
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _module = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var requestStatus = exports.requestStatus = function requestStatus(state, _ref) {
  var requestKey = _ref.requestKey;
  return state.requests[requestKey];
};
var statusSelector = exports.statusSelector = function statusSelector(fn) {
  return function (state, _ref2) {
    var requestKey = _ref2.requestKey;
    return fn(state.requests[requestKey]);
  };
};
var isInactive = exports.isInactive = function isInactive(_ref3) {
  var status = _ref3.status;
  return status === _requests.RequestStates.inactive;
};
var isPending = exports.isPending = function isPending(_ref4) {
  var status = _ref4.status;
  return status === _requests.RequestStates.pending;
};
var isCompleted = exports.isCompleted = function isCompleted(_ref5) {
  var status = _ref5.status;
  return status === _requests.RequestStates.completed;
};
var isFailed = exports.isFailed = function isFailed(_ref6) {
  var status = _ref6.status;
  return status === _requests.RequestStates.failed;
};
var isFinished = exports.isFinished = function isFinished(_ref7) {
  var status = _ref7.status;
  return [_requests.RequestStates.failed, _requests.RequestStates.completed].includes(status);
};
var error = exports.error = function error(request) {
  return request.error;
};
var errorStatus = exports.errorStatus = function errorStatus(request) {
  var _request$error;
  return (_request$error = request.error) === null || _request$error === void 0 || (_request$error = _request$error.response) === null || _request$error === void 0 ? void 0 : _request$error.status;
};
var errorCode = exports.errorCode = function errorCode(request) {
  var _request$error2;
  return (_request$error2 = request.error) === null || _request$error2 === void 0 || (_request$error2 = _request$error2.response) === null || _request$error2 === void 0 ? void 0 : _request$error2.data;
};
var data = exports.data = function data(request) {
  return request.data;
};
var connectedStatusSelectors = exports.connectedStatusSelectors = function connectedStatusSelectors() {
  return {
    isInactive: _module.statusSelector(isInactive),
    isPending: _module.statusSelector(isPending),
    isCompleted: _module.statusSelector(isCompleted),
    isFailed: _module.statusSelector(isFailed),
    isFinished: _module.statusSelector(isFinished),
    error: _module.statusSelector(error),
    errorCode: _module.statusSelector(errorCode),
    errorStatus: _module.statusSelector(errorStatus),
    data: _module.statusSelector(data)
  };
};
var _default = exports["default"] = (0, _utils.StrictDict)(_objectSpread({
  requestStatus: requestStatus
}, _module.connectedStatusSelectors()));
//# sourceMappingURL=selectors.js.map