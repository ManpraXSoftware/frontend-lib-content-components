"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.SwitchToAdvancedEditorCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _messages = _interopRequireDefault(require("../messages"));
var _redux = require("../../../../../../data/redux");
var _BaseModal = _interopRequireDefault(require("../../../../../../sharedComponents/BaseModal"));
var _Button = _interopRequireDefault(require("../../../../../../sharedComponents/Button"));
var _hooks = require("../hooks");
var _problem = require("../../../../../../data/constants/problem");
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
var SwitchToAdvancedEditorCard = exports.SwitchToAdvancedEditorCard = function SwitchToAdvancedEditorCard(_ref) {
  var problemType = _ref.problemType,
    switchToAdvancedEditor = _ref.switchToAdvancedEditor;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isConfirmOpen = _React$useState2[0],
    setConfirmOpen = _React$useState2[1];
  if (problemType === _problem.ProblemTypeKeys.ADVANCED) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card, {
    className: "border border-light-700 shadow-none",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal["default"], {
      isOpen: isConfirmOpen,
      close: function close() {
        setConfirmOpen(false);
      },
      title: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].ConfirmSwitchMessageTitle)),
      confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        onClick: function onClick() {
          return (0, _hooks.confirmSwitchToAdvancedEditor)({
            switchToAdvancedEditor: switchToAdvancedEditor,
            setConfirmOpen: setConfirmOpen
          });
        },
        variant: "primary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].ConfirmSwitchButtonLabel))
      }),
      size: "md",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].ConfirmSwitchMessage))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      className: "my-3 ml-2 py-0",
      variant: "link",
      size: "sm",
      onClick: function onClick() {
        setConfirmOpen(true);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].SwitchButtonLabel))
    })]
  });
};
SwitchToAdvancedEditorCard.propTypes = {
  switchToAdvancedEditor: _propTypes["default"].func.isRequired,
  problemType: _propTypes["default"].string.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps() {
  return {};
};
var mapDispatchToProps = exports.mapDispatchToProps = {
  switchToAdvancedEditor: _redux.thunkActions.problem.switchToAdvancedEditor
};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SwitchToAdvancedEditorCard));
//# sourceMappingURL=SwitchToAdvancedEditorCard.js.map