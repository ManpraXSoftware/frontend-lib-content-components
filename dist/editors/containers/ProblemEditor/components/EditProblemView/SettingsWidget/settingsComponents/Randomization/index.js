"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RandomizationCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SettingsOption = _interopRequireDefault(require("../../SettingsOption"));
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = require("./hooks");
var _problem = require("../../../../../../../data/constants/problem");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RandomizationCard = exports.RandomizationCard = function RandomizationCard(_ref) {
  var randomization = _ref.randomization,
    updateSettings = _ref.updateSettings,
    intl = _ref.intl;
  var _useRandomizationSett = (0, _hooks.useRandomizationSettingStatus)({
      randomization: randomization,
      updateSettings: updateSettings
    }),
    summary = _useRandomizationSett.summary,
    handleChange = _useRandomizationSett.handleChange;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsOption["default"], {
    title: intl.formatMessage(_messages["default"].randomizationSettingTitle),
    summary: intl.formatMessage(summary.message),
    none: !randomization,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "halfSpacedMessage",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].randomizationSettingText))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        as: "select",
        value: randomization,
        onChange: handleChange,
        children: Object.values(_problem.RandomizationTypesKeys).map(function (randomizationType) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: randomizationType,
            children: intl.formatMessage(_problem.RandomizationTypes[randomizationType])
          }, randomizationType);
        })
      })
    })]
  });
};
RandomizationCard.propTypes = {
  randomization: _propTypes["default"].string.isRequired,
  updateSettings: _propTypes["default"].func.isRequired,
  intl: _i18n.intlShape.isRequired
};
var _default = exports["default"] = (0, _i18n.injectIntl)(RandomizationCard);
//# sourceMappingURL=index.js.map