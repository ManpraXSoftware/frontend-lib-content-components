"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processVideoIds = exports.processLicense = exports.parseYoutubeId = exports.loadImages = exports.loadImage = exports.isEdxVideo = exports["default"] = exports.checkMockApi = exports.apiMethods = void 0;
var _utils = require("../../../utils");
var urls = _interopRequireWildcard(require("./urls"));
var _utils2 = require("./utils");
var _module = _interopRequireWildcard(require("./api"));
var mockApi = _interopRequireWildcard(require("./mockApi"));
var _hooks = require("../../../containers/VideoEditor/components/VideoSettingsModal/components/DurationWidget/hooks");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var apiMethods = exports.apiMethods = {
  fetchBlockById: function fetchBlockById(_ref) {
    var blockId = _ref.blockId,
      studioEndpointUrl = _ref.studioEndpointUrl;
    return (0, _utils2.get)(urls.block({
      blockId: blockId,
      studioEndpointUrl: studioEndpointUrl
    }));
  },
  fetchByUnitId: function fetchByUnitId(_ref2) {
    var blockId = _ref2.blockId,
      studioEndpointUrl = _ref2.studioEndpointUrl;
    return (0, _utils2.get)(urls.blockAncestor({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId
    }));
  },
  fetchStudioView: function fetchStudioView(_ref3) {
    var blockId = _ref3.blockId,
      studioEndpointUrl = _ref3.studioEndpointUrl;
    return (0, _utils2.get)(urls.blockStudioView({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId
    }));
  },
  fetchAssets: function fetchAssets(_ref4) {
    var learningContextId = _ref4.learningContextId,
      studioEndpointUrl = _ref4.studioEndpointUrl;
    return (0, _utils2.get)(urls.courseAssets({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId
    }));
  },
  fetchCourseDetails: function fetchCourseDetails(_ref5) {
    var studioEndpointUrl = _ref5.studioEndpointUrl,
      learningContextId = _ref5.learningContextId;
    return (0, _utils2.get)(urls.courseDetailsUrl({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId
    }));
  },
  fetchAdvancedSettings: function fetchAdvancedSettings(_ref6) {
    var studioEndpointUrl = _ref6.studioEndpointUrl,
      learningContextId = _ref6.learningContextId;
    return (0, _utils2.get)(urls.courseAdvanceSettings({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId
    }));
  },
  uploadAsset: function uploadAsset(_ref7) {
    var learningContextId = _ref7.learningContextId,
      studioEndpointUrl = _ref7.studioEndpointUrl,
      asset = _ref7.asset;
    var data = new FormData();
    data.append('file', asset);
    return (0, _utils2.post)(urls.courseAssets({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId
    }), data);
  },
  uploadThumbnail: function uploadThumbnail(_ref8) {
    var studioEndpointUrl = _ref8.studioEndpointUrl,
      learningContextId = _ref8.learningContextId,
      videoId = _ref8.videoId,
      thumbnail = _ref8.thumbnail;
    var data = new FormData();
    data.append('file', thumbnail);
    return (0, _utils2.post)(urls.thumbnailUpload({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId,
      videoId: videoId
    }), data);
  },
  checkTranscriptsForImport: function checkTranscriptsForImport(_ref9) {
    var studioEndpointUrl = _ref9.studioEndpointUrl,
      blockId = _ref9.blockId,
      youTubeId = _ref9.youTubeId,
      videoId = _ref9.videoId;
    var getJSON = "{\"locator\":\"".concat(blockId, "\",\"videos\":[{\"mode\":\"youtube\",\"video\":\"").concat(youTubeId, "\",\"type\":\"youtube\"},{\"mode\":\"edx_video_id\",\"type\":\"edx_video_id\",\"video\":\"").concat(videoId, "\"}]}");
    return (0, _utils2.get)(urls.checkTranscriptsForImport({
      studioEndpointUrl: studioEndpointUrl,
      parameters: encodeURIComponent(getJSON)
    }));
  },
  importTranscript: function importTranscript(_ref10) {
    var studioEndpointUrl = _ref10.studioEndpointUrl,
      blockId = _ref10.blockId,
      youTubeId = _ref10.youTubeId;
    var getJSON = "{\"locator\":\"".concat(blockId, "\",\"videos\":[{\"mode\":\"youtube\",\"video\":\"").concat(youTubeId, "\",\"type\":\"youtube\"}]}");
    return (0, _utils2.get)(urls.replaceTranscript({
      studioEndpointUrl: studioEndpointUrl,
      parameters: encodeURIComponent(getJSON)
    }));
  },
  getTranscript: function getTranscript(_ref11) {
    var studioEndpointUrl = _ref11.studioEndpointUrl,
      language = _ref11.language,
      blockId = _ref11.blockId,
      videoId = _ref11.videoId;
    var getJSON = {
      data: {
        lang: language,
        edx_video_id: videoId
      }
    };
    return (0, _utils2.get)("".concat(urls.videoTranscripts({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId
    }), "?language_code=").concat(language), getJSON);
  },
  deleteTranscript: function deleteTranscript(_ref12) {
    var studioEndpointUrl = _ref12.studioEndpointUrl,
      language = _ref12.language,
      blockId = _ref12.blockId,
      videoId = _ref12.videoId;
    var deleteJSON = {
      data: {
        lang: language,
        edx_video_id: videoId
      }
    };
    return (0, _utils2.deleteObject)(urls.videoTranscripts({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId
    }), deleteJSON);
  },
  uploadTranscript: function uploadTranscript(_ref13) {
    var blockId = _ref13.blockId,
      studioEndpointUrl = _ref13.studioEndpointUrl,
      transcript = _ref13.transcript,
      videoId = _ref13.videoId,
      language = _ref13.language,
      _ref13$newLanguage = _ref13.newLanguage,
      newLanguage = _ref13$newLanguage === void 0 ? null : _ref13$newLanguage;
    var data = new FormData();
    data.append('file', transcript);
    data.append('edx_video_id', videoId);
    data.append('language_code', language);
    data.append('new_language_code', newLanguage || language);
    return (0, _utils2.post)(urls.videoTranscripts({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId
    }), data);
  },
  normalizeContent: function normalizeContent(_ref14) {
    var blockId = _ref14.blockId,
      blockType = _ref14.blockType,
      content = _ref14.content,
      learningContextId = _ref14.learningContextId,
      title = _ref14.title;
    var response = {};
    if (blockType === 'html') {
      response = {
        category: blockType,
        courseKey: learningContextId,
        data: content,
        has_changes: true,
        id: blockId,
        metadata: {
          display_name: title
        }
      };
    } else if (blockType === 'problem') {
      response = {
        data: content.olx,
        category: blockType,
        couseKey: learningContextId,
        has_changes: true,
        id: blockId,
        metadata: _objectSpread({
          display_name: title
        }, content.settings)
      };
    } else if (blockType === 'video') {
      var _module$processVideoI = _module.processVideoIds({
          videoId: content.videoId,
          videoUrl: content.videoSource,
          fallbackVideos: content.fallbackVideos
        }),
        html5Sources = _module$processVideoI.html5Sources,
        edxVideoId = _module$processVideoI.edxVideoId,
        youtubeId = _module$processVideoI.youtubeId;
      response = {
        category: blockType,
        courseKey: learningContextId,
        display_name: title,
        id: blockId,
        metadata: {
          display_name: title,
          download_video: content.allowVideoDownloads,
          public_access: content.allowVideoSharing,
          edx_video_id: edxVideoId,
          html5_sources: html5Sources,
          youtube_id_1_0: youtubeId,
          thumbnail: content.thumbnail,
          download_track: content.allowTranscriptDownloads,
          track: '',
          // TODO Downloadable Transcript URL. Backend expects a file name, for example: "something.srt"
          show_captions: content.showTranscriptByDefault,
          handout: content.handout,
          start_time: (0, _hooks.durationStringFromValue)(content.duration.startTime),
          end_time: (0, _hooks.durationStringFromValue)(content.duration.stopTime),
          license: _module.processLicense(content.licenseType, content.licenseDetails)
        }
      };
    } else {
      throw new TypeError("No Block in V2 Editors named /\"".concat(blockType, "/\", Cannot Save Content."));
    }
    return _objectSpread({}, response);
  },
  saveBlock: function saveBlock(_ref15) {
    var blockId = _ref15.blockId,
      blockType = _ref15.blockType,
      content = _ref15.content,
      learningContextId = _ref15.learningContextId,
      studioEndpointUrl = _ref15.studioEndpointUrl,
      title = _ref15.title;
    return (0, _utils2.post)(urls.block({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId
    }), _module.apiMethods.normalizeContent({
      blockType: blockType,
      content: content,
      blockId: blockId,
      learningContextId: learningContextId,
      title: title
    }));
  },
  fetchVideoFeatures: function fetchVideoFeatures(_ref16) {
    var studioEndpointUrl = _ref16.studioEndpointUrl,
      learningContextId = _ref16.learningContextId;
    return (0, _utils2.get)(urls.videoFeatures({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId
    }));
  }
};
var loadImage = exports.loadImage = function loadImage(imageData) {
  return _objectSpread(_objectSpread({}, imageData), {}, {
    dateAdded: new Date(imageData.dateAdded.replace(' at', '')).getTime()
  });
};
var loadImages = exports.loadImages = function loadImages(rawImages) {
  return (0, _utils.camelizeKeys)(rawImages).reduce(function (obj, image) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, image.id, _module.loadImage(image)));
  }, {});
};
var processVideoIds = exports.processVideoIds = function processVideoIds(_ref17) {
  var videoId = _ref17.videoId,
    videoUrl = _ref17.videoUrl,
    fallbackVideos = _ref17.fallbackVideos;
  var youtubeId = '';
  var html5Sources = [];
  if (videoUrl) {
    if (_module.parseYoutubeId(videoUrl)) {
      youtubeId = _module.parseYoutubeId(videoUrl);
    } else {
      html5Sources.push(videoUrl);
    }
  }
  if (fallbackVideos) {
    fallbackVideos.forEach(function (src) {
      return src ? html5Sources.push(src) : null;
    });
  }
  return {
    edxVideoId: videoId,
    html5Sources: html5Sources,
    youtubeId: youtubeId
  };
};
var isEdxVideo = exports.isEdxVideo = function isEdxVideo(src) {
  var uuid4Regex = new RegExp(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
  if (src && src.match(uuid4Regex)) {
    return true;
  }
  return false;
};
var parseYoutubeId = exports.parseYoutubeId = function parseYoutubeId(src) {
  var youtubeRegex = new RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/);
  if (!src.match(youtubeRegex)) {
    return null;
  }
  return src.match(youtubeRegex)[5];
};
var processLicense = exports.processLicense = function processLicense(licenseType, licenseDetails) {
  if (licenseType === 'creative-commons') {
    return 'creative-commons: ver=4.0'.concat(licenseDetails.attribution ? ' BY' : '', licenseDetails.noncommercial ? ' NC' : '', licenseDetails.noDerivatives ? ' ND' : '', licenseDetails.shareAlike ? ' SA' : '');
  }
  if (licenseType === 'all-rights-reserved') {
    return 'all-rights-reserved';
  }
  return '';
};
var checkMockApi = exports.checkMockApi = function checkMockApi(key) {
  if (process.env.REACT_APP_DEVGALLERY) {
    return mockApi[key];
  }
  return _module.apiMethods[key];
};
var _default = exports["default"] = Object.keys(apiMethods).reduce(function (obj, key) {
  return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, checkMockApi(key)));
}, {});
//# sourceMappingURL=api.js.map