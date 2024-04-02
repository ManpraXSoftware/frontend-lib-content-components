"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.ShowAnswerCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _SettingsOption = _interopRequireDefault(require("../SettingsOption"));
var _problem = require("../../../../../../data/constants/problem");
var _redux = require("../../../../../../data/redux");
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
var ShowAnswerCard = exports.ShowAnswerCard = function ShowAnswerCard(_ref) {
  var showAnswer = _ref.showAnswer,
    updateSettings = _ref.updateSettings,
    defaultValue = _ref.defaultValue,
    intl = _ref.intl,
    studioEndpointUrl = _ref.studioEndpointUrl,
    learningContextId = _ref.learningContextId;
  var _useAnswerSettings = (0, _hooks.useAnswerSettings)(showAnswer, updateSettings),
    handleShowAnswerChange = _useAnswerSettings.handleShowAnswerChange,
    handleAttemptsChange = _useAnswerSettings.handleAttemptsChange,
    showAttempts = _useAnswerSettings.showAttempts;
  var showAnswerSection = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pb-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].showAnswerSettingText))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pb-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: "".concat(studioEndpointUrl, "/settings/advanced/").concat(learningContextId, "#showanswer"),
        target: "_blank",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].advancedSettingsLinkText))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
      className: "pb-0 mb-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        as: "select",
        value: showAnswer.on,
        onChange: handleShowAnswerChange,
        children: Object.values(_problem.ShowAnswerTypesKeys).map(function (answerType) {
          var optionDisplayName = _problem.ShowAnswerTypes[answerType];
          if (answerType === defaultValue) {
            optionDisplayName = _objectSpread(_objectSpread({}, optionDisplayName), {}, {
              defaultMessage: "".concat(optionDisplayName.defaultMessage, " (Default)")
            });
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: answerType,
            children: intl.formatMessage(optionDisplayName)
          }, answerType);
        })
      })
    }), showAttempts && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
      className: "pb-0 mb-0 mt-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        type: "number",
        value: showAnswer.afterAttempts,
        onChange: handleAttemptsChange,
        floatingLabel: intl.formatMessage(_messages["default"].showAnswerAttemptsInputLabel)
      })
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SettingsOption["default"], {
    title: intl.formatMessage(_messages["default"].showAnswerSettingsTitle),
    summary: intl.formatMessage(_problem.ShowAnswerTypes[showAnswer.on]),
    children: showAnswerSection
  });
};
ShowAnswerCard.propTypes = {
  intl: _i18n.intlShape.isRequired,
  // eslint-disable-next-line
  showAnswer: _propTypes["default"].any.isRequired,
  solutionExplanation: _propTypes["default"].string,
  updateSettings: _propTypes["default"].func.isRequired,
  studioEndpointUrl: _propTypes["default"].string.isRequired,
  learningContextId: _propTypes["default"].string.isRequired,
  defaultValue: _propTypes["default"].string.isRequired
};
ShowAnswerCard.defaultProps = {
  solutionExplanation: ''
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(state),
    learningContextId: _redux.selectors.app.learningContextId(state)
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShowAnswerCard));
//# sourceMappingURL=ShowAnswerCard.js.map