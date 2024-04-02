"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = exports["default"] = exports.ErrorAlert = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var hooks = exports.hooks = {
  state: {
    isDismissed: function isDismissed(val) {
      return _react["default"].useState(val);
    }
  },
  dismissalHooks: function dismissalHooks(_ref) {
    var dismissError = _ref.dismissError,
      isError = _ref.isError;
    var _hooks$state$isDismis = hooks.state.isDismissed(false),
      _hooks$state$isDismis2 = _slicedToArray(_hooks$state$isDismis, 2),
      isDismissed = _hooks$state$isDismis2[0],
      setIsDismissed = _hooks$state$isDismis2[1];
    _react["default"].useEffect(function () {
      setIsDismissed(isDismissed && !isError);
    }, [isError]);
    return {
      isDismissed: isDismissed,
      dismissAlert: function dismissAlert() {
        setIsDismissed(true);
        if (dismissError) {
          dismissError();
        }
      }
    };
  }
};
var ErrorAlert = exports.ErrorAlert = function ErrorAlert(_ref2) {
  var dismissError = _ref2.dismissError,
    hideHeading = _ref2.hideHeading,
    isError = _ref2.isError,
    children = _ref2.children;
  var _hooks$dismissalHooks = hooks.dismissalHooks({
      dismissError: dismissError,
      isError: isError
    }),
    isDismissed = _hooks$dismissalHooks.isDismissed,
    dismissAlert = _hooks$dismissalHooks.dismissAlert;
  if (!isError || isDismissed) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Alert, {
    variant: "danger",
    icon: _icons.Outline,
    dismissible: true,
    onClose: dismissAlert,
    children: [!hideHeading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Heading, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].errorTitle))
    }), children]
  });
};
ErrorAlert.defaultProps = {
  dismissError: null,
  hideHeading: false
};
ErrorAlert.propTypes = {
  dismissError: _propTypes["default"].func,
  hideHeading: _propTypes["default"].bool,
  isError: _propTypes["default"].bool.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
var _default = exports["default"] = ErrorAlert;
//# sourceMappingURL=ErrorAlert.js.map