"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSelectLicense = exports.determineText = exports.determineLicense = exports["default"] = void 0;
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _redux = require("../../../../../../data/redux");
var _licenses = require("../../../../../../data/constants/licenses");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var determineLicense = exports.determineLicense = function determineLicense(_ref) {
  var isLibrary = _ref.isLibrary,
    licenseType = _ref.licenseType,
    licenseDetails = _ref.licenseDetails,
    courseLicenseType = _ref.courseLicenseType,
    courseLicenseDetails = _ref.courseLicenseDetails;
  var level = _licenses.LicenseLevel.course;
  if (licenseType) {
    if (isLibrary) {
      level = _licenses.LicenseLevel.library;
    } else {
      level = _licenses.LicenseLevel.block;
    }
  }
  return {
    license: licenseType || courseLicenseType,
    details: licenseType ? licenseDetails : courseLicenseDetails,
    level: level
  };
};
var determineText = exports.determineText = function determineText(_ref2) {
  var level = _ref2.level;
  var levelDescription = '';
  var licenseDescription = '';
  switch (level) {
    case _licenses.LicenseLevel.course:
      levelDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].courseLevelDescription));
      licenseDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].courseLicenseDescription));
      break;
    case _licenses.LicenseLevel.library:
      levelDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].libraryLevelDescription));
      licenseDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].libraryLicenseDescription));
      break;
    default:
      // default to block
      levelDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].defaultLevelDescription));
      licenseDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].defaultLicenseDescription));
      break;
  }
  return {
    levelDescription: levelDescription,
    licenseDescription: licenseDescription
  };
};
var onSelectLicense = exports.onSelectLicense = function onSelectLicense(_ref3) {
  var dispatch = _ref3.dispatch;
  return function (license) {
    switch (license) {
      case _licenses.LicenseTypes.allRightsReserved:
        dispatch(_redux.actions.video.updateField({
          licenseType: _licenses.LicenseTypes.allRightsReserved,
          licenseDetails: {}
        }));
        break;
      case _licenses.LicenseTypes.creativeCommons:
        dispatch(_redux.actions.video.updateField({
          licenseType: _licenses.LicenseTypes.creativeCommons,
          licenseDetails: {
            attribution: true,
            noncommercial: true,
            noDerivatives: true,
            shareAlike: false
          }
        }));
        break;
      default:
        dispatch(_redux.actions.video.updateField({
          licenseType: _licenses.LicenseTypes.select
        }));
        break;
    }
  };
};
var _default = exports["default"] = {
  determineLicense: determineLicense,
  determineText: determineText,
  onSelectLicense: onSelectLicense
};
//# sourceMappingURL=hooks.js.map