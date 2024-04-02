"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.HandoutWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../../data/redux");
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _FileInput = _interopRequireDefault(require("../../../../../../sharedComponents/FileInput"));
var _ErrorAlert = require("../../../../../../sharedComponents/ErrorAlerts/ErrorAlert");
var _UploadErrorAlert = require("../../../../../../sharedComponents/ErrorAlerts/UploadErrorAlert");
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _hooks2 = require("../../../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /**
 * Collapsible Form widget controlling video handouts
 */
var HandoutWidget = exports.HandoutWidget = function HandoutWidget(_ref) {
  var intl = _ref.intl,
    isLibrary = _ref.isLibrary,
    handout = _ref.handout,
    getHandoutDownloadUrl = _ref.getHandoutDownloadUrl,
    updateField = _ref.updateField;
  var _React$useContext$han = _slicedToArray(_react["default"].useContext(_hooks2.ErrorContext).handout, 1),
    error = _React$useContext$han[0];
  var _hooks$fileSizeError = hooks.fileSizeError(),
    fileSizeError = _hooks$fileSizeError.fileSizeError;
  var fileInput = hooks.fileInput({
    fileSizeError: fileSizeError
  });
  var handoutName = hooks.parseHandoutName({
    handout: handout
  });
  var downloadLink = getHandoutDownloadUrl({
    handout: handout
  });
  return !isLibrary ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget["default"], {
    fontSize: "x-small",
    isError: Object.keys(error).length !== 0,
    title: intl.formatMessage(_messages["default"].titleLabel),
    subtitle: handoutName,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.ErrorAlert, {
      dismissError: fileSizeError.dismiss,
      hideHeading: true,
      isError: fileSizeError.show,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].fileSizeError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploadErrorAlert.UploadErrorAlert, {
      message: _messages["default"].uploadHandoutError
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput["default"], {
      fileInput: fileInput
    }), handout ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        className: "border border-gray-300 rounded px-3 py-2",
        children: [handoutName, /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Toggle, {
            id: "dropdown-toggle-with-iconbutton-video-transcript-widget",
            as: _paragon.IconButton,
            src: _icons.MoreHoriz,
            iconAs: _paragon.Icon,
            variant: "primary",
            alt: "Actions dropdown"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Menu, {
            className: "video_handout Action Menu",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
              onClick: fileInput.click,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].replaceHandout))
            }, "handout-actions-replace"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
              target: "_blank",
              href: downloadLink,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].downloadHandout))
            }, "handout-actions-download"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
              onClick: function onClick() {
                return updateField({
                  handout: null
                });
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].deleteHandout))
            }, "handout-actions-delete")]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].handoutHelpMessage))]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addHandoutMessage)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        className: "text-primary-500 font-weight-bold justify-content-start pl-0",
        size: "sm",
        iconBefore: _icons.FileUpload,
        onClick: fileInput.click,
        variant: "link",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].uploadButtonLabel))
      })]
    })]
  }) : null;
};
HandoutWidget.propTypes = {
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  isLibrary: _propTypes["default"].bool.isRequired,
  handout: _propTypes["default"].shape({}).isRequired,
  updateField: _propTypes["default"].func.isRequired,
  isUploadError: _propTypes["default"].bool.isRequired,
  getHandoutDownloadUrl: _propTypes["default"].func.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    isLibrary: _redux.selectors.app.isLibrary(state),
    handout: _redux.selectors.video.handout(state),
    getHandoutDownloadUrl: _redux.selectors.video.getHandoutDownloadUrl(state)
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateField: function updateField(payload) {
      return dispatch(_redux.actions.video.updateField(payload));
    }
  };
};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HandoutWidget));
//# sourceMappingURL=index.js.map