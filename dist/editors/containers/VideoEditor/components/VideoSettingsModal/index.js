"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VideoSettingsModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _ErrorSummary = _interopRequireDefault(require("./ErrorSummary"));
var _DurationWidget = _interopRequireDefault(require("./components/DurationWidget"));
var _HandoutWidget = _interopRequireDefault(require("./components/HandoutWidget"));
var _LicenseWidget = _interopRequireDefault(require("./components/LicenseWidget"));
var _ThumbnailWidget = _interopRequireDefault(require("./components/ThumbnailWidget"));
var _TranscriptWidget = _interopRequireDefault(require("./components/TranscriptWidget"));
var _VideoSourceWidget = _interopRequireDefault(require("./components/VideoSourceWidget"));
var _VideoPreviewWidget = _interopRequireDefault(require("./components/VideoPreviewWidget"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import VideoPreview from './components/VideoPreview';

var VideoSettingsModal = exports.VideoSettingsModal = function VideoSettingsModal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorSummary["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoPreviewWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoSourceWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThumbnailWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TranscriptWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DurationWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HandoutWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LicenseWidget["default"], {})]
  });
};
var _default = exports["default"] = VideoSettingsModal;
//# sourceMappingURL=index.js.map