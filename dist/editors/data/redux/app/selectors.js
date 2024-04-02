"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleSelectors = exports.returnUrl = exports.isRaw = exports.isLibrary = exports.isInitialized = exports.displayTitle = exports["default"] = exports.appSelector = exports.analytics = void 0;
var _reselect = require("reselect");
var _app = require("../../constants/app");
var urls = _interopRequireWildcard(require("../../services/cms/urls"));
var _module = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var appSelector = exports.appSelector = function appSelector(state) {
  return state.app;
};
var mkSimpleSelector = function mkSimpleSelector(cb) {
  return (0, _reselect.createSelector)([_module.appSelector], cb);
};

// top-level app data selectors
var simpleSelectors = exports.simpleSelectors = {
  blockContent: mkSimpleSelector(function (app) {
    return app.blockContent;
  }),
  blockId: mkSimpleSelector(function (app) {
    return app.blockId;
  }),
  blockType: mkSimpleSelector(function (app) {
    return app.blockType;
  }),
  blockValue: mkSimpleSelector(function (app) {
    return app.blockValue;
  }),
  studioView: mkSimpleSelector(function (app) {
    return app.studioView;
  }),
  learningContextId: mkSimpleSelector(function (app) {
    return app.learningContextId;
  }),
  editorInitialized: mkSimpleSelector(function (app) {
    return app.editorInitialized;
  }),
  saveResponse: mkSimpleSelector(function (app) {
    return app.saveResponse;
  }),
  lmsEndpointUrl: mkSimpleSelector(function (app) {
    return app.lmsEndpointUrl;
  }),
  studioEndpointUrl: mkSimpleSelector(function (app) {
    return app.studioEndpointUrl;
  }),
  unitUrl: mkSimpleSelector(function (app) {
    return app.unitUrl;
  }),
  blockTitle: mkSimpleSelector(function (app) {
    return app.blockTitle;
  }),
  assets: mkSimpleSelector(function (app) {
    return app.assets;
  })
};
var returnUrl = exports.returnUrl = (0, _reselect.createSelector)([_module.simpleSelectors.unitUrl, _module.simpleSelectors.studioEndpointUrl, _module.simpleSelectors.learningContextId], function (unitUrl, studioEndpointUrl, learningContextId) {
  return urls.returnUrl({
    studioEndpointUrl: studioEndpointUrl,
    unitUrl: unitUrl,
    learningContextId: learningContextId
  });
});
var isInitialized = exports.isInitialized = (0, _reselect.createSelector)([_module.simpleSelectors.unitUrl, _module.simpleSelectors.blockValue], function (unitUrl, blockValue) {
  return !!(unitUrl && blockValue);
});
var displayTitle = exports.displayTitle = (0, _reselect.createSelector)([_module.simpleSelectors.blockType, _module.simpleSelectors.blockTitle], function (blockType, blockTitle) {
  if (blockType === null) {
    return null;
  }
  if (blockTitle !== null) {
    return blockTitle;
  }
  return blockType === _app.blockTypes.html ? 'Text' : blockType[0].toUpperCase() + blockType.substring(1);
});
var analytics = exports.analytics = (0, _reselect.createSelector)([_module.simpleSelectors.blockId, _module.simpleSelectors.blockType, _module.simpleSelectors.learningContextId], function (blockId, blockType, learningContextId) {
  return {
    blockId: blockId,
    blockType: blockType,
    learningContextId: learningContextId
  };
});
var isRaw = exports.isRaw = (0, _reselect.createSelector)([_module.simpleSelectors.studioView], function (studioView) {
  if (!studioView || !studioView.data || !studioView.data.html) {
    return null;
  }
  if (studioView.data.html.includes('data-editor="raw"')) {
    return true;
  }
  return false;
});
var isLibrary = exports.isLibrary = (0, _reselect.createSelector)([_module.simpleSelectors.learningContextId], function (learningContextId) {
  if (!learningContextId) {
    return null;
  }
  if (learningContextId && learningContextId.startsWith('library-v1')) {
    return true;
  }
  return false;
});
var _default = exports["default"] = _objectSpread(_objectSpread({}, simpleSelectors), {}, {
  isInitialized: isInitialized,
  returnUrl: returnUrl,
  displayTitle: displayTitle,
  analytics: analytics,
  isRaw: isRaw,
  isLibrary: isLibrary
});
//# sourceMappingURL=selectors.js.map