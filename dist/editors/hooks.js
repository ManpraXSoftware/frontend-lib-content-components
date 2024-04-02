"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveBlock = exports.nullMethod = exports.navigateTo = exports.navigateCallback = exports.initializeApp = exports.clearSaveError = void 0;
var _react = require("react");
var _analytics = require("@edx/frontend-platform/analytics");
var _analyticsEvt = _interopRequireDefault(require("./data/constants/analyticsEvt"));
var _redux = require("./data/redux");
var _module = _interopRequireWildcard(require("./hooks"));
var _requests = require("./data/constants/requests");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var initializeApp = exports.initializeApp = function initializeApp(_ref) {
  var dispatch = _ref.dispatch,
    data = _ref.data;
  return (0, _react.useEffect)(function () {
    return dispatch(_redux.thunkActions.app.initialize(data));
  }, [data]);
};
var navigateTo = exports.navigateTo = function navigateTo(destination) {
  window.location.assign(destination);
};
var navigateCallback = exports.navigateCallback = function navigateCallback(_ref2) {
  var destination = _ref2.destination,
    analyticsEvent = _ref2.analyticsEvent,
    analytics = _ref2.analytics;
  return function () {
    if (process.env.NODE_ENV !== 'development' && analyticsEvent && analytics) {
      (0, _analytics.sendTrackEvent)(analyticsEvent, analytics);
    }
    _module.navigateTo(destination);
  };
};
var nullMethod = exports.nullMethod = function nullMethod() {
  return {};
};
var saveBlock = exports.saveBlock = function saveBlock(_ref3) {
  var analytics = _ref3.analytics,
    content = _ref3.content,
    destination = _ref3.destination,
    dispatch = _ref3.dispatch,
    validateEntry = _ref3.validateEntry;
  var attemptSave = false;
  if (validateEntry) {
    if (validateEntry()) {
      attemptSave = true;
    }
  } else {
    attemptSave = true;
  }
  if (attemptSave) {
    dispatch(_redux.thunkActions.app.saveBlock({
      returnToUnit: _module.navigateCallback({
        destination: destination,
        analyticsEvent: _analyticsEvt["default"].editorSaveClick,
        analytics: analytics
      }),
      content: content
    }));
  }
};
var clearSaveError = exports.clearSaveError = function clearSaveError(_ref4) {
  var dispatch = _ref4.dispatch;
  return function () {
    return dispatch(_redux.actions.requests.clearRequest({
      requestKey: _requests.RequestKeys.saveBlock
    }));
  };
};
//# sourceMappingURL=hooks.js.map