"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports["default"] = exports.ExplanationWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../data/redux");
var _messages = _interopRequireDefault(require("./messages"));
var _TinyMceWidget = _interopRequireDefault(require("../../../../../sharedComponents/TinyMceWidget"));
var _hooks = require("../../../../../sharedComponents/TinyMceWidget/hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ExplanationWidget = exports.ExplanationWidget = function ExplanationWidget(_ref) {
  var settings = _ref.settings,
    intl = _ref.intl;
  var _prepareEditorRef = (0, _hooks.prepareEditorRef)(),
    editorRef = _prepareEditorRef.editorRef,
    refReady = _prepareEditorRef.refReady,
    setEditorRef = _prepareEditorRef.setEditorRef;
  if (!refReady) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tinyMceWidget mt-4 text-primary-500",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h4 mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].solutionWidgetTitle))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "small mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].solutionDescriptionText))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TinyMceWidget["default"], {
      id: "solution",
      editorType: "solution",
      editorRef: editorRef,
      textValue: settings === null || settings === void 0 ? void 0 : settings.solutionExplanation,
      setEditorRef: setEditorRef,
      minHeight: 150,
      placeholder: intl.formatMessage(_messages["default"].placeholder)
    })]
  });
};
ExplanationWidget.propTypes = {
  // redux
  // eslint-disable-next-line
  settings: _propTypes["default"].any.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    settings: _redux.selectors.problem.settings(state)
  };
};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(ExplanationWidget));
//# sourceMappingURL=index.js.map