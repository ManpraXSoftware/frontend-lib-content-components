"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.actions = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _initialState;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var initialState = exports.initialState = (_initialState = {}, _defineProperty(_initialState, _requests.RequestKeys.fetchUnit, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.fetchBlock, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.fetchStudioView, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.saveBlock, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.uploadAsset, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.allowThumbnailUpload, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.uploadThumbnail, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.uploadTranscript, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.deleteTranscript, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.fetchCourseDetails, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.fetchAssets, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.checkTranscriptsForImport, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.importTranscript, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.fetchVideoFeatures, {
  status: _requests.RequestStates.inactive
}), _defineProperty(_initialState, _requests.RequestKeys.fetchAdvancedSettings, {
  status: _requests.RequestStates.inactive
}), _initialState);

// eslint-disable-next-line no-unused-vars
var requests = (0, _toolkit.createSlice)({
  name: 'requests',
  initialState: initialState,
  reducers: {
    startRequest: function startRequest(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, payload, {
        status: _requests.RequestStates.pending
      }));
    },
    completeRequest: function completeRequest(state, _ref2) {
      var payload = _ref2.payload;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, payload.requestKey, {
        status: _requests.RequestStates.completed,
        response: payload.response
      }));
    },
    failRequest: function failRequest(state, _ref3) {
      var payload = _ref3.payload;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, payload.requestKey, {
        status: _requests.RequestStates.failed,
        error: payload.error
      }));
    },
    clearRequest: function clearRequest(state, _ref4) {
      var payload = _ref4.payload;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, payload.requestKey, {}));
    }
  }
});
var actions = exports.actions = (0, _utils.StrictDict)(requests.actions);
var reducer = exports.reducer = requests.reducer;
//# sourceMappingURL=reducer.js.map