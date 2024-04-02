"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.fetchVideoContent = exports.errorsHook = exports.ErrorContext = void 0;
var _react = require("react");
var _redux = require("../../data/redux");
var _utils = require("../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ErrorContext = exports.ErrorContext = /*#__PURE__*/(0, _react.createContext)();
var state = exports.state = (0, _utils.StrictDict)({
  durationErrors: function durationErrors(val) {
    return (0, _react.useState)(val);
  },
  handoutErrors: function handoutErrors(val) {
    return (0, _react.useState)(val);
  },
  licenseErrors: function licenseErrors(val) {
    return (0, _react.useState)(val);
  },
  thumbnailErrors: function thumbnailErrors(val) {
    return (0, _react.useState)(val);
  },
  transcriptsErrors: function transcriptsErrors(val) {
    return (0, _react.useState)(val);
  },
  videoSourceErrors: function videoSourceErrors(val) {
    return (0, _react.useState)(val);
  }
});
var errorsHook = exports.errorsHook = function errorsHook() {
  var _module$state$duratio = _module.state.durationErrors({}),
    _module$state$duratio2 = _slicedToArray(_module$state$duratio, 2),
    durationErrors = _module$state$duratio2[0],
    setDurationErrors = _module$state$duratio2[1];
  var _module$state$handout = _module.state.handoutErrors({}),
    _module$state$handout2 = _slicedToArray(_module$state$handout, 2),
    handoutErrors = _module$state$handout2[0],
    setHandoutErrors = _module$state$handout2[1];
  var _module$state$license = _module.state.licenseErrors({}),
    _module$state$license2 = _slicedToArray(_module$state$license, 2),
    licenseErrors = _module$state$license2[0],
    setLicenseErrors = _module$state$license2[1];
  var _module$state$thumbna = _module.state.thumbnailErrors({}),
    _module$state$thumbna2 = _slicedToArray(_module$state$thumbna, 2),
    thumbnailErrors = _module$state$thumbna2[0],
    setThumbnailErrors = _module$state$thumbna2[1];
  var _module$state$transcr = _module.state.transcriptsErrors({}),
    _module$state$transcr2 = _slicedToArray(_module$state$transcr, 2),
    transcriptsErrors = _module$state$transcr2[0],
    setTranscriptsErrors = _module$state$transcr2[1];
  var _module$state$videoSo = _module.state.videoSourceErrors({}),
    _module$state$videoSo2 = _slicedToArray(_module$state$videoSo, 2),
    videoSourceErrors = _module$state$videoSo2[0],
    setVideoSourceErrors = _module$state$videoSo2[1];
  return {
    error: {
      duration: [durationErrors, setDurationErrors],
      handout: [handoutErrors, setHandoutErrors],
      license: [licenseErrors, setLicenseErrors],
      thumbnail: [thumbnailErrors, setThumbnailErrors],
      transcripts: [transcriptsErrors, setTranscriptsErrors],
      videoSource: [videoSourceErrors, setVideoSourceErrors]
    },
    validateEntry: function validateEntry() {
      if (Object.keys(durationErrors).length > 0) {
        return false;
      }
      if (Object.keys(handoutErrors).length > 0) {
        return false;
      }
      if (Object.keys(licenseErrors).length > 0) {
        return false;
      }
      if (Object.keys(thumbnailErrors).length > 0) {
        return false;
      }
      if (Object.keys(transcriptsErrors).length > 0) {
        return false;
      }
      if (Object.keys(videoSourceErrors).length > 0) {
        return false;
      }
      return true;
    }
  };
};
var fetchVideoContent = exports.fetchVideoContent = function fetchVideoContent() {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    return dispatch(_redux.thunkActions.video.saveVideoData());
  };
};
//# sourceMappingURL=hooks.js.map