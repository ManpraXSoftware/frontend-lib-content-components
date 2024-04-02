"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.ThumbnailWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _redux = require("../../../../../../data/redux");
var _api = require("../../../../../../data/services/cms/api");
var _constants = require("./constants");
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _FileInput = _interopRequireDefault(require("../../../../../../sharedComponents/FileInput"));
var _ErrorAlert = _interopRequireDefault(require("../../../../../../sharedComponents/ErrorAlerts/ErrorAlert"));
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
 * Collapsible Form widget controlling video thumbnail
 */
var ThumbnailWidget = exports.ThumbnailWidget = function ThumbnailWidget(_ref) {
  var intl = _ref.intl,
    isLibrary = _ref.isLibrary,
    allowThumbnailUpload = _ref.allowThumbnailUpload,
    thumbnail = _ref.thumbnail,
    videoId = _ref.videoId;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _React$useContext$thu = _slicedToArray(_react["default"].useContext(_hooks2.ErrorContext).thumbnail, 1),
    error = _React$useContext$thu[0];
  var imgRef = _react["default"].useRef();
  var _React$useState = _react["default"].useState(thumbnail),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    thumbnailSrc = _React$useState2[0],
    setThumbnailSrc = _React$useState2[1];
  var _hooks$fileSizeError = hooks.fileSizeError(),
    fileSizeError = _hooks$fileSizeError.fileSizeError;
  var fileInput = hooks.fileInput({
    setThumbnailSrc: setThumbnailSrc,
    imgRef: imgRef,
    fileSizeError: fileSizeError
  });
  var edxVideo = (0, _api.isEdxVideo)(videoId);
  var deleteThumbnail = hooks.deleteThumbnail({
    dispatch: dispatch
  });
  var getSubtitle = function getSubtitle() {
    if (edxVideo) {
      if (thumbnail) {
        return intl.formatMessage(_messages["default"].yesSubtitle);
      }
      return intl.formatMessage(_messages["default"].noneSubtitle);
    }
    return intl.formatMessage(_messages["default"].unavailableSubtitle);
  };
  return !isLibrary ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget["default"], {
    fontSize: "x-small",
    isError: Object.keys(error).length !== 0,
    title: intl.formatMessage(_messages["default"].title),
    subtitle: getSubtitle(),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert["default"], {
      dismissError: fileSizeError.dismiss,
      hideHeading: true,
      isError: fileSizeError.show,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].fileSizeError))
    }), edxVideo ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert, {
      variant: "light",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].unavailableMessage))
    }), thumbnail ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      direction: "horizontal",
      gap: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
        thumbnail: true,
        fluid: true,
        className: "w-75",
        ref: imgRef,
        src: thumbnailSrc || thumbnail,
        alt: intl.formatMessage(_messages["default"].thumbnailAltText)
      }), allowThumbnailUpload && edxVideo ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButtonWithTooltip, {
        tooltipPlacement: "top",
        tooltipContent: intl.formatMessage(_messages["default"].deleteThumbnail),
        iconAs: _paragon.Icon,
        src: _icons.DeleteOutline,
        onClick: deleteThumbnail
      }) : null]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 4,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addThumbnail)), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-primary-300",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].aspectRequirements))
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput["default"], {
        fileInput: fileInput,
        acceptedFiles: Object.values(_constants.acceptedImgKeys).join()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        className: "text-primary-500 font-weight-bold justify-content-start pl-0",
        size: "sm",
        iconBefore: _icons.FileUpload,
        onClick: fileInput.click,
        variant: "link",
        disabled: !edxVideo,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].uploadButtonLabel))
      })]
    })]
  }) : null;
};
ThumbnailWidget.propTypes = {
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  isLibrary: _propTypes["default"].bool.isRequired,
  allowThumbnailUpload: _propTypes["default"].bool.isRequired,
  thumbnail: _propTypes["default"].string.isRequired,
  videoId: _propTypes["default"].string.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    isLibrary: _redux.selectors.app.isLibrary(state),
    allowThumbnailUpload: _redux.selectors.video.allowThumbnailUpload(state),
    thumbnail: _redux.selectors.video.thumbnail(state),
    videoId: _redux.selectors.video.videoId(state)
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ThumbnailWidget));
//# sourceMappingURL=index.js.map