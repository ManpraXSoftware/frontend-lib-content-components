"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports["default"] = exports.VideoSourceWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var widgetHooks = _interopRequireWildcard(require("../hooks"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _redux = require("../../../../../../data/redux");
var _ErrorAlert = require("../../../../../../sharedComponents/ErrorAlerts/ErrorAlert");
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
 * Collapsible Form widget controlling video source as well as fallback sources
 */
var VideoSourceWidget = exports.VideoSourceWidget = function VideoSourceWidget(_ref) {
  var _fields;
  var intl = _ref.intl,
    videoSharingEnabledForCourse = _ref.videoSharingEnabledForCourse;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _widgetHooks$widgetVa = widgetHooks.widgetValues({
      dispatch: dispatch,
      fields: (_fields = {}, _defineProperty(_fields, widgetHooks.selectorKeys.videoSource, widgetHooks.genericWidget), _defineProperty(_fields, widgetHooks.selectorKeys.videoId, widgetHooks.genericWidget), _defineProperty(_fields, widgetHooks.selectorKeys.fallbackVideos, widgetHooks.arrayWidget), _defineProperty(_fields, widgetHooks.selectorKeys.allowVideoDownloads, widgetHooks.genericWidget), _defineProperty(_fields, widgetHooks.selectorKeys.allowVideoSharing, widgetHooks.genericWidget), _fields)
    }),
    videoId = _widgetHooks$widgetVa.videoId,
    source = _widgetHooks$widgetVa.videoSource,
    fallbackVideos = _widgetHooks$widgetVa.fallbackVideos,
    allowDownload = _widgetHooks$widgetVa.allowVideoDownloads,
    allowSharing = _widgetHooks$widgetVa.allowVideoSharing;
  var _hooks$videoIdChangeA = hooks.videoIdChangeAlert(),
    videoIdChangeAlert = _hooks$videoIdChangeA.videoIdChangeAlert;
  var _hooks$sourceHooks = hooks.sourceHooks({
      dispatch: dispatch,
      previousVideoId: videoId.formValue,
      setAlert: videoIdChangeAlert.set
    }),
    updateVideoId = _hooks$sourceHooks.updateVideoId,
    updateVideoURL = _hooks$sourceHooks.updateVideoURL;
  var _hooks$fallbackHooks = hooks.fallbackHooks({
      fallbackVideos: fallbackVideos.formValue,
      dispatch: dispatch
    }),
    addFallbackVideo = _hooks$fallbackHooks.addFallbackVideo,
    deleteFallbackVideo = _hooks$fallbackHooks.deleteFallbackVideo;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget["default"], {
    fontSize: "x-small",
    title: intl.formatMessage(_messages["default"].titleLabel),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.ErrorAlert, {
      dismissError: videoIdChangeAlert.dismiss,
      hideHeading: true,
      isError: videoIdChangeAlert.show,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].videoIdChangeAlert))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "border-primary-100 border-bottom pb-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
          floatingLabel: intl.formatMessage(_messages["default"].videoIdLabel),
          onChange: videoId.onChange,
          onBlur: updateVideoId,
          value: videoId.local
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
          className: "text-primary-300 mb-4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].videoIdFeedback))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
          floatingLabel: intl.formatMessage(_messages["default"].videoUrlLabel),
          onChange: source.onChange,
          onBlur: function onBlur(e) {
            return updateVideoURL(e, videoId.local);
          },
          value: source.local
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
          className: "text-primary-300",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].videoUrlFeedback))
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].fallbackVideoTitle))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].fallbackVideoMessage))
      }), fallbackVideos.formValue.length > 0 ? fallbackVideos.formValue.map(function (videoUrl, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Row, {
          className: "mt-3.5 mx-0 flex-nowrap",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
            floatingLabel: intl.formatMessage(_messages["default"].fallbackVideoLabel),
            onChange: fallbackVideos.onChange(index),
            value: fallbackVideos.local[index],
            onBlur: fallbackVideos.onBlur(index)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButtonWithTooltip, {
            tooltipPlacement: "top",
            tooltipContent: intl.formatMessage(_messages["default"].deleteFallbackVideo),
            src: _icons.DeleteOutline,
            iconAs: _paragon.Icon,
            alt: intl.formatMessage(_messages["default"].deleteFallbackVideo),
            onClick: function onClick() {
              return deleteFallbackVideo(videoUrl);
            }
          }, "top-delete-".concat(videoUrl))]
        });
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        className: "mt-4.5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
          checked: allowDownload.local,
          className: "decorative-control-label",
          onChange: allowDownload.onCheckedChange,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "small text-gray-700",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].allowDownloadCheckboxLabel))
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.OverlayTrigger, {
          placement: "top",
          overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Tooltip, {
            id: "tooltip-top",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].allowDownloadTooltipMessage))
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
            src: _icons.InfoOutline,
            style: {
              height: '16px',
              width: '16px'
            }
          })
        }, "top"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
      }), videoSharingEnabledForCourse && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        className: "mt-4.5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
          checked: allowSharing.local,
          className: "decorative-control-label",
          onChange: allowSharing.onCheckedChange,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "small text-gray-700",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].allowVideoSharingCheckboxLabel))
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.OverlayTrigger, {
          placement: "top",
          overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Tooltip, {
            id: "tooltip-top-allow-sharing",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].allowVideoSharingTooltipMessage))
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
            src: _icons.InfoOutline,
            style: {
              height: '16px',
              width: '16px'
            }
          })
        }, "top-allow-sharing"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "my-4 border-primary-100 border-bottom"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      className: "text-primary-500 font-weight-bold pl-0",
      size: "sm",
      iconBefore: _icons.Add,
      variant: "link",
      onClick: function onClick() {
        return addFallbackVideo();
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addButtonLabel))
    })]
  });
};
VideoSourceWidget.propTypes = {
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  videoSharingEnabledForCourse: _propTypes["default"].bool.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    videoSharingEnabledForCourse: _redux.selectors.video.videoSharingEnabledForCourse(state)
  };
};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, {})(VideoSourceWidget));
//# sourceMappingURL=index.js.map