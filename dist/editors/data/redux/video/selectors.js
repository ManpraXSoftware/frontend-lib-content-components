"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoSettings = exports.video = exports.simpleSelectors = exports.openLanguages = exports.getTranscriptDownloadUrl = exports.getHandoutDownloadUrl = exports["default"] = void 0;
var _reselect = require("reselect");
var _utils = require("../../../utils");
var _video = require("../../constants/video");
var _reducer = require("./reducer");
var _module = _interopRequireWildcard(require("./selectors"));
var AppSelectors = _interopRequireWildcard(require("../app/selectors"));
var _urls = require("../../services/cms/urls");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var stateKeys = (0, _utils.keyStore)(_reducer.initialState);
var video = exports.video = function video(state) {
  return state.video;
};
var simpleSelectors = exports.simpleSelectors = [stateKeys.videoSource, stateKeys.videoId, stateKeys.fallbackVideos, stateKeys.allowVideoDownloads, stateKeys.videoSharingEnabledForCourse, stateKeys.allowVideoSharing, stateKeys.thumbnail, stateKeys.transcripts, stateKeys.allowTranscriptDownloads, stateKeys.duration, stateKeys.showTranscriptByDefault, stateKeys.handout, stateKeys.licenseType, stateKeys.licenseDetails, stateKeys.courseLicenseType, stateKeys.courseLicenseDetails, stateKeys.allowThumbnailUpload, stateKeys.allowTranscriptImport].reduce(function (obj, key) {
  return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, function (state) {
    return state.video[key];
  }));
}, {});
var openLanguages = exports.openLanguages = (0, _reselect.createSelector)([_module.simpleSelectors.transcripts], function (transcripts) {
  if (!transcripts) {
    return _video.videoTranscriptLanguages;
  }
  var open = Object.keys(_video.videoTranscriptLanguages).filter(function (lang) {
    return !transcripts.includes(lang);
  });
  return open;
});
var getTranscriptDownloadUrl = exports.getTranscriptDownloadUrl = (0, _reselect.createSelector)([AppSelectors.simpleSelectors.studioEndpointUrl, AppSelectors.simpleSelectors.blockId], function (studioEndpointUrl, blockId) {
  return function (_ref) {
    var language = _ref.language;
    return (0, _urls.downloadVideoTranscriptURL)({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId,
      language: language
    });
  };
});
var getHandoutDownloadUrl = exports.getHandoutDownloadUrl = (0, _reselect.createSelector)([AppSelectors.simpleSelectors.studioEndpointUrl], function (studioEndpointUrl) {
  return function (_ref2) {
    var handout = _ref2.handout;
    return (0, _urls.downloadVideoHandoutUrl)({
      studioEndpointUrl: studioEndpointUrl,
      handout: handout
    });
  };
});
var videoSettings = exports.videoSettings = (0, _reselect.createSelector)([_module.simpleSelectors.videoSource, _module.simpleSelectors.videoId, _module.simpleSelectors.fallbackVideos, _module.simpleSelectors.allowVideoDownloads, _module.simpleSelectors.allowVideoSharing, _module.simpleSelectors.thumbnail, _module.simpleSelectors.transcripts, _module.simpleSelectors.allowTranscriptDownloads, _module.simpleSelectors.duration, _module.simpleSelectors.showTranscriptByDefault, _module.simpleSelectors.handout, _module.simpleSelectors.licenseType, _module.simpleSelectors.licenseDetails], function (videoSource, videoId, fallbackVideos, allowVideoDownloads, allowVideoSharing, thumbnail, transcripts, allowTranscriptDownloads, duration, showTranscriptByDefault, handout, licenseType, licenseDetails) {
  return {
    videoSource: videoSource,
    videoId: videoId,
    fallbackVideos: fallbackVideos,
    allowVideoDownloads: allowVideoDownloads,
    allowVideoSharing: allowVideoSharing,
    thumbnail: thumbnail,
    transcripts: transcripts,
    allowTranscriptDownloads: allowTranscriptDownloads,
    duration: duration,
    showTranscriptByDefault: showTranscriptByDefault,
    handout: handout,
    licenseType: licenseType,
    licenseDetails: licenseDetails
  };
});
var _default = exports["default"] = _objectSpread(_objectSpread({}, simpleSelectors), {}, {
  openLanguages: openLanguages,
  getTranscriptDownloadUrl: getTranscriptDownloadUrl,
  getHandoutDownloadUrl: getHandoutDownloadUrl,
  videoSettings: videoSettings
});
//# sourceMappingURL=selectors.js.map