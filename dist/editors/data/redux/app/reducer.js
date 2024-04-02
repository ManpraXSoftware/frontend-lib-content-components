"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.actions = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _utils = require("../../../utils");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var initialState = exports.initialState = {
  blockValue: null,
  unitUrl: null,
  blockContent: null,
  studioView: null,
  saveResponse: null,
  blockId: null,
  blockTitle: null,
  blockType: null,
  learningContextId: null,
  editorInitialized: false,
  studioEndpointUrl: null,
  lmsEndpointUrl: null,
  assets: {},
  courseDetails: {}
};

// eslint-disable-next-line no-unused-vars
var app = (0, _toolkit.createSlice)({
  name: 'app',
  initialState: initialState,
  reducers: {
    initialize: function initialize(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        studioEndpointUrl: payload.studioEndpointUrl,
        lmsEndpointUrl: payload.lmsEndpointUrl,
        blockId: payload.blockId,
        learningContextId: payload.learningContextId,
        blockType: payload.blockType
      });
    },
    setUnitUrl: function setUnitUrl(state, _ref2) {
      var payload = _ref2.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        unitUrl: payload
      });
    },
    setBlockValue: function setBlockValue(state, _ref3) {
      var payload = _ref3.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        blockValue: payload,
        blockTitle: payload.data.display_name
      });
    },
    setStudioView: function setStudioView(state, _ref4) {
      var payload = _ref4.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        studioView: payload
      });
    },
    setBlockContent: function setBlockContent(state, _ref5) {
      var payload = _ref5.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        blockContent: payload
      });
    },
    setBlockTitle: function setBlockTitle(state, _ref6) {
      var payload = _ref6.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        blockTitle: payload
      });
    },
    setSaveResponse: function setSaveResponse(state, _ref7) {
      var payload = _ref7.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        saveResponse: payload
      });
    },
    initializeEditor: function initializeEditor(state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        editorInitialized: true
      });
    },
    setAssets: function setAssets(state, _ref8) {
      var payload = _ref8.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        assets: payload
      });
    },
    setCourseDetails: function setCourseDetails(state, _ref9) {
      var payload = _ref9.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        courseDetails: payload
      });
    }
  }
});
var actions = exports.actions = (0, _utils.StrictDict)(app.actions);
var reducer = exports.reducer = app.reducer;
//# sourceMappingURL=reducer.js.map