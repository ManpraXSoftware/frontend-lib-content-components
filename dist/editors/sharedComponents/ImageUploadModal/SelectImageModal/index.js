"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.SelectImageModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../data/redux");
var _requests = require("../../../data/constants/requests");
var _utils = require("./utils");
var _hooks = _interopRequireDefault(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _BaseModal = _interopRequireDefault(require("../../BaseModal"));
var _SearchSort = _interopRequireDefault(require("./SearchSort"));
var _Gallery = _interopRequireDefault(require("./Gallery"));
var _FileInput = _interopRequireDefault(require("../../FileInput"));
var _FetchErrorAlert = _interopRequireDefault(require("../../ErrorAlerts/FetchErrorAlert"));
var _UploadErrorAlert = _interopRequireDefault(require("../../ErrorAlerts/UploadErrorAlert"));
var _ErrorAlert = _interopRequireDefault(require("../../ErrorAlerts/ErrorAlert"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SelectImageModal = exports.SelectImageModal = function SelectImageModal(_ref) {
  var isOpen = _ref.isOpen,
    close = _ref.close,
    setSelection = _ref.setSelection,
    clearSelection = _ref.clearSelection,
    images = _ref.images,
    intl = _ref.intl,
    inputIsLoading = _ref.inputIsLoading;
  var _hooks$imgHooks = _hooks["default"].imgHooks({
      setSelection: setSelection,
      clearSelection: clearSelection,
      images: images
    }),
    galleryError = _hooks$imgHooks.galleryError,
    inputError = _hooks$imgHooks.inputError,
    fileInput = _hooks$imgHooks.fileInput,
    galleryProps = _hooks$imgHooks.galleryProps,
    searchSortProps = _hooks$imgHooks.searchSortProps,
    selectBtnProps = _hooks$imgHooks.selectBtnProps;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_BaseModal["default"], {
    close: close,
    confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, _objectSpread(_objectSpread({}, selectBtnProps), {}, {
      variant: "primary",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].nextButtonLabel))
    })),
    isOpen: isOpen,
    footerAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      iconBefore: _icons.Add,
      onClick: fileInput.click,
      variant: "link",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].uploadButtonLabel))
    }),
    title: intl.formatMessage(_messages["default"].titleLabel),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FetchErrorAlert["default"], {
      message: _messages["default"].fetchImagesError
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploadErrorAlert["default"], {
      message: _messages["default"].uploadImageError
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert["default"], {
      dismissError: inputError.dismiss,
      hideHeading: true,
      isError: inputError.show,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].fileSizeError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert["default"], {
      dismissError: galleryError.dismiss,
      hideHeading: true,
      isError: galleryError.show,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].selectImageError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchSort["default"], _objectSpread({}, searchSortProps)), !inputIsLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Gallery["default"], _objectSpread({}, galleryProps)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
        animation: "border",
        className: "mie-3",
        screenReaderText: intl.formatMessage(_messages["default"].loading)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput["default"], {
        fileInput: fileInput,
        acceptedFiles: Object.values(_utils.acceptedImgKeys).join()
      })]
    })]
  });
};
SelectImageModal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  close: _propTypes["default"].func.isRequired,
  setSelection: _propTypes["default"].func.isRequired,
  clearSelection: _propTypes["default"].func.isRequired,
  images: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  inputIsLoading: _propTypes["default"].bool.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    inputIsLoading: _redux.selectors.requests.isPending(state, {
      requestKey: _requests.RequestKeys.uploadAsset
    })
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectImageModal));
//# sourceMappingURL=index.js.map