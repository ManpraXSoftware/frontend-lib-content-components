"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.saveFailed = exports.saveBlock = exports.nullMethod = exports.navigateCallback = exports.isInitialized = exports.handleSaveClicked = exports.handleCancel = exports.clearSaveError = exports.cancelConfirmModalToggle = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _analyticsEvt = _interopRequireDefault(require("../../data/constants/analyticsEvt"));
var _requests = require("../../data/constants/requests");
var _redux = require("../../data/redux");
var _utils = require("../../utils");
var appHooks = _interopRequireWildcard(require("../../hooks"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var clearSaveError = exports.clearSaveError = appHooks.clearSaveError,
  navigateCallback = exports.navigateCallback = appHooks.navigateCallback,
  nullMethod = exports.nullMethod = appHooks.nullMethod,
  saveBlock = exports.saveBlock = appHooks.saveBlock;
var state = exports.state = (0, _utils.StrictDict)({
  isCancelConfirmModalOpen: function isCancelConfirmModalOpen(val) {
    return (0, _react.useState)(val);
  }
});
var handleSaveClicked = exports.handleSaveClicked = function handleSaveClicked(_ref) {
  var dispatch = _ref.dispatch,
    getContent = _ref.getContent,
    validateEntry = _ref.validateEntry;
  var destination = (0, _reactRedux.useSelector)(_redux.selectors.app.returnUrl);
  var analytics = (0, _reactRedux.useSelector)(_redux.selectors.app.analytics);
  return function () {
    return saveBlock({
      analytics: analytics,
      content: getContent({
        dispatch: dispatch
      }),
      destination: destination,
      dispatch: dispatch,
      validateEntry: validateEntry
    });
  };
};
var cancelConfirmModalToggle = exports.cancelConfirmModalToggle = function cancelConfirmModalToggle() {
  var _module$state$isCance = _module.state.isCancelConfirmModalOpen(false),
    _module$state$isCance2 = _slicedToArray(_module$state$isCance, 2),
    isCancelConfirmOpen = _module$state$isCance2[0],
    setIsOpen = _module$state$isCance2[1];
  return {
    isCancelConfirmOpen: isCancelConfirmOpen,
    openCancelConfirmModal: function openCancelConfirmModal() {
      return setIsOpen(true);
    },
    closeCancelConfirmModal: function closeCancelConfirmModal() {
      return setIsOpen(false);
    }
  };
};
var handleCancel = exports.handleCancel = function handleCancel(_ref2) {
  var onClose = _ref2.onClose;
  if (onClose) {
    return onClose;
  }
  return navigateCallback({
    destination: (0, _reactRedux.useSelector)(_redux.selectors.app.returnUrl),
    analyticsEvent: _analyticsEvt["default"].editorCancelClick,
    analytics: (0, _reactRedux.useSelector)(_redux.selectors.app.analytics)
  });
};
var isInitialized = exports.isInitialized = function isInitialized() {
  return (0, _reactRedux.useSelector)(_redux.selectors.app.isInitialized);
};
var saveFailed = exports.saveFailed = function saveFailed() {
  return (0, _reactRedux.useSelector)(function (rootState) {
    return _redux.selectors.requests.isFailed(rootState, {
      requestKey: _requests.RequestKeys.saveBlock
    });
  });
};
//# sourceMappingURL=hooks.js.map