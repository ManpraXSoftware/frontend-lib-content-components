"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.ScoringCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _redux = require("../../../../../../data/redux");
var _SettingsOption = _interopRequireDefault(require("../SettingsOption"));
var _messages = _interopRequireDefault(require("../messages"));
var _hooks = require("../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ScoringCard = exports.ScoringCard = function ScoringCard(_ref) {
  var scoring = _ref.scoring,
    defaultValue = _ref.defaultValue,
    updateSettings = _ref.updateSettings,
    intl = _ref.intl,
    studioEndpointUrl = _ref.studioEndpointUrl,
    learningContextId = _ref.learningContextId;
  var _scoringCardHooks = (0, _hooks.scoringCardHooks)(scoring, updateSettings, defaultValue),
    handleUnlimitedChange = _scoringCardHooks.handleUnlimitedChange,
    handleMaxAttemptChange = _scoringCardHooks.handleMaxAttemptChange,
    handleWeightChange = _scoringCardHooks.handleWeightChange,
    handleOnChange = _scoringCardHooks.handleOnChange,
    attemptDisplayValue = _scoringCardHooks.attemptDisplayValue;
  var getScoringSummary = function getScoringSummary(weight, attempts, unlimited) {
    var summary = intl.formatMessage(_messages["default"].weightSummary, {
      weight: weight
    });
    summary += " ".concat(String.fromCharCode(183), " ");
    summary += unlimited ? intl.formatMessage(_messages["default"].unlimitedAttemptsSummary) : intl.formatMessage(_messages["default"].attemptsSummary, {
      attempts: attempts
    });
    return summary;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsOption["default"], {
    title: intl.formatMessage(_messages["default"].scoringSettingsTitle),
    summary: getScoringSummary(scoring.weight, scoring.attempts.number, scoring.attempts.unlimited),
    className: "scoringCard",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
      className: "mb-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].scoringSettingsLabel))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        type: "number",
        value: scoring.weight,
        onChange: handleWeightChange,
        floatingLabel: intl.formatMessage(_messages["default"].scoringWeightInputLabel)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].weightHint))
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        value: attemptDisplayValue,
        onChange: handleOnChange,
        onBlur: handleMaxAttemptChange,
        floatingLabel: intl.formatMessage(_messages["default"].scoringAttemptsInputLabel),
        disabled: scoring.attempts.unlimited
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].attemptsHint))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
        className: "mt-3 decoration-control-label",
        checked: scoring.attempts.unlimited,
        onChange: handleUnlimitedChange,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "small",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].unlimitedAttemptsCheckboxLabel))
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
      destination: "".concat(studioEndpointUrl, "/settings/advanced/").concat(learningContextId, "#max_attempts"),
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].advancedSettingsLinkText))
    })]
  });
};
ScoringCard.propTypes = {
  intl: _i18n.intlShape.isRequired,
  // eslint-disable-next-line
  scoring: _propTypes["default"].any.isRequired,
  updateSettings: _propTypes["default"].func.isRequired,
  defaultValue: _propTypes["default"].number.isRequired,
  // redux
  studioEndpointUrl: _propTypes["default"].string.isRequired,
  learningContextId: _propTypes["default"].string.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(state),
    learningContextId: _redux.selectors.app.learningContextId(state)
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ScoringCard));
//# sourceMappingURL=ScoringCard.js.map