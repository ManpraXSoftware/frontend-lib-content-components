"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadTranscript = exports.uploadThumbnail = exports.uploadHandout = exports.updateTranscriptLanguage = exports.saveVideoData = exports.replaceTranscript = exports.parseTranscripts = exports.parseLicense = exports.loadVideoData = exports.importTranscript = exports.determineVideoSources = exports.deleteTranscript = exports["default"] = void 0;
var _ = require("..");
var _utils = require("../../../utils");
var requests = _interopRequireWildcard(require("./requests"));
var _module = _interopRequireWildcard(require("./video"));
var _hooks = require("../../../containers/VideoEditor/components/VideoSettingsModal/components/DurationWidget/hooks");
var _api = require("../../services/cms/api");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var loadVideoData = exports.loadVideoData = function loadVideoData() {
  return function (dispatch, getState) {
    var _state$app$studioView;
    var state = getState();
    var rawVideoData = state.app.blockValue.data.metadata ? state.app.blockValue.data.metadata : {};
    var courseLicenseData = state.app.courseDetails.data ? state.app.courseDetails.data : {};
    var studioView = (_state$app$studioView = state.app.studioView) === null || _state$app$studioView === void 0 || (_state$app$studioView = _state$app$studioView.data) === null || _state$app$studioView === void 0 ? void 0 : _state$app$studioView.html;
    var _module$determineVide = _module.determineVideoSources({
        edxVideoId: rawVideoData.edx_video_id,
        youtubeId: rawVideoData.youtube_id_1_0,
        html5Sources: rawVideoData.html5_sources
      }),
      videoId = _module$determineVide.videoId,
      videoUrl = _module$determineVide.videoUrl,
      fallbackVideos = _module$determineVide.fallbackVideos;
    var _module$parseLicense = _module.parseLicense({
        licenseData: studioView,
        level: 'block'
      }),
      _module$parseLicense2 = _slicedToArray(_module$parseLicense, 2),
      licenseType = _module$parseLicense2[0],
      licenseOptions = _module$parseLicense2[1];
    var transcripts = _module.parseTranscripts({
      transcriptsData: studioView
    });
    var _module$parseLicense3 = _module.parseLicense({
        licenseData: courseLicenseData.license,
        level: 'course'
      }),
      _module$parseLicense4 = _slicedToArray(_module$parseLicense3, 2),
      courseLicenseType = _module$parseLicense4[0],
      courseLicenseDetails = _module$parseLicense4[1];
    dispatch(_.actions.video.load({
      videoSource: videoUrl || '',
      videoId: videoId,
      fallbackVideos: fallbackVideos,
      allowVideoDownloads: rawVideoData.download_video,
      allowVideoSharing: rawVideoData.public_access,
      transcripts: transcripts,
      allowTranscriptDownloads: rawVideoData.download_track,
      showTranscriptByDefault: rawVideoData.show_captions,
      duration: {
        // TODO duration is not always sent so they should be calculated.
        startTime: (0, _hooks.valueFromDuration)(rawVideoData.start_time || '00:00:00'),
        stopTime: (0, _hooks.valueFromDuration)(rawVideoData.end_time || '00:00:00'),
        total: 0 // TODO can we get total duration? if not, probably dropping from widget
      },
      handout: rawVideoData.handout,
      licenseType: licenseType,
      licenseDetails: {
        attribution: licenseOptions.by,
        noncommercial: licenseOptions.nc,
        noDerivatives: licenseOptions.nd,
        shareAlike: licenseOptions.sa
      },
      courseLicenseType: courseLicenseType,
      courseLicenseDetails: {
        attribution: courseLicenseDetails.by,
        noncommercial: courseLicenseDetails.nc,
        noDerivatives: courseLicenseDetails.nd,
        shareAlike: courseLicenseDetails.sa
      },
      thumbnail: rawVideoData.thumbnail
    }));
    dispatch(requests.fetchVideoFeatures({
      onSuccess: function onSuccess(response) {
        return dispatch(_.actions.video.updateField({
          allowThumbnailUpload: response.data.allowThumbnailUpload,
          videoSharingEnabledForCourse: response.data.videoSharingEnabled
        }));
      }
    }));
    var youTubeId = (0, _api.parseYoutubeId)(videoUrl);
    if (youTubeId) {
      dispatch(requests.checkTranscriptsForImport({
        videoId: videoId,
        youTubeId: youTubeId,
        onSuccess: function onSuccess(response) {
          if (response.data.command === 'import') {
            dispatch(_.actions.video.updateField({
              allowTranscriptImport: true
            }));
          }
        }
      }));
    }
  };
};
var determineVideoSources = exports.determineVideoSources = function determineVideoSources(_ref) {
  var edxVideoId = _ref.edxVideoId,
    youtubeId = _ref.youtubeId,
    html5Sources = _ref.html5Sources;
  var youtubeUrl = "https://youtu.be/".concat(youtubeId);
  var videoUrl;
  var fallbackVideos;
  if (youtubeId) {
    videoUrl = youtubeUrl;
    fallbackVideos = html5Sources;
  } else if (Array.isArray(html5Sources) && html5Sources[0]) {
    var _ref2 = [html5Sources[0], html5Sources.slice(1)];
    videoUrl = _ref2[0];
    fallbackVideos = _ref2[1];
  }
  return {
    videoId: edxVideoId || '',
    videoUrl: videoUrl || '',
    fallbackVideos: fallbackVideos || []
  };
};
var parseTranscripts = exports.parseTranscripts = function parseTranscripts(_ref3) {
  var transcriptsData = _ref3.transcriptsData;
  if (!transcriptsData) {
    return [];
  }
  var cleanedStr = transcriptsData.replace(/&#34;/g, '"');
  var startString = '"transcripts": ';
  var endString = ', "youtube_id_0_75": ';
  var transcriptsJson = cleanedStr.substring(cleanedStr.indexOf(startString) + startString.length, cleanedStr.indexOf(endString));
  // const transcriptsObj = JSON.parse(transcriptsJson);
  try {
    var transcriptsObj = JSON.parse(transcriptsJson);
    return Object.keys(transcriptsObj.value);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Invalid JSON:', error.message);
    } else {
      throw error;
    }
    return [];
  }
};

// partially copied from frontend-app-learning/src/courseware/course/course-license/CourseLicense.jsx
var parseLicense = exports.parseLicense = function parseLicense(_ref4) {
  var licenseData = _ref4.licenseData,
    level = _ref4.level;
  if (!licenseData) {
    return [null, {}];
  }
  var license = licenseData;
  if (level === 'block') {
    var metadataArr = licenseData.split('data-metadata');
    metadataArr.forEach(function (arr) {
      var parsedStr = arr.replace(/&#34;/g, '"');
      if (parsedStr.includes('license')) {
        license = parsedStr.substring(parsedStr.indexOf('"value"'), parsedStr.indexOf(', "type"')).replace(/"value": |"/g, '');
      }
    });
  }
  if (!license || license.includes('null')) {
    return [null, {}];
  }
  if (license === 'all-rights-reserved') {
    // no options, so the entire thing is the license type
    return [license, {}];
  }
  // Search for a colon character denoting the end
  // of the license type and start of the options
  var colonIndex = license.lastIndexOf(':');
  // Split the license on the colon
  var licenseType = license.slice(0, colonIndex).trim();
  var optionStr = license.slice(colonIndex + 1).trim();
  var options = {};
  var version = '';

  // Set the defaultVersion to 4.0
  var defaultVersion = '4.0';
  optionStr.split(' ').forEach(function (option) {
    // Split the option into key and value
    // Default the value to `true` if no value
    var key = '';
    var value = '';
    if (option.indexOf('=') !== -1) {
      var _option$split = option.split('=');
      var _option$split2 = _slicedToArray(_option$split, 2);
      key = _option$split2[0];
      value = _option$split2[1];
    } else {
      key = option;
      value = true;
    }

    // Check for version
    if (key === 'ver') {
      version = value;
    } else {
      // Set the option key to lowercase to make
      // it easier to query
      options[key.toLowerCase()] = value;
    }
  });

  // Set the version to whatever was included,
  // using `defaultVersion` as a fallback if unset
  version = version || defaultVersion;
  return [licenseType, options, version];
};
var saveVideoData = exports.saveVideoData = function saveVideoData() {
  return function (dispatch, getState) {
    var state = getState();
    return _.selectors.video.videoSettings(state);
  };
};
var uploadThumbnail = exports.uploadThumbnail = function uploadThumbnail(_ref5) {
  var thumbnail = _ref5.thumbnail,
    emptyCanvas = _ref5.emptyCanvas;
  return function (dispatch, getState) {
    var state = getState();
    var videoId = state.video.videoId;
    var studioEndpointUrl = state.app.studioEndpointUrl;
    dispatch(requests.uploadThumbnail({
      thumbnail: thumbnail,
      videoId: videoId,
      onSuccess: function onSuccess(response) {
        var thumbnailUrl;
        if (response.data.image_url.startsWith('/')) {
          // in local environments, image_url is a relative path
          thumbnailUrl = studioEndpointUrl + response.data.image_url;
        } else {
          // in stage and production, image_url is an absolute path to the image
          thumbnailUrl = response.data.image_url;
        }
        if (!emptyCanvas) {
          dispatch(_.actions.video.updateField({
            thumbnail: thumbnailUrl
          }));
        }
      },
      onFailure: function onFailure(e) {
        return console.log({
          UploadFailure: e
        }, 'Resampling thumbnail upload');
      }
    }));
  };
};

// Handout Thunks:

var uploadHandout = exports.uploadHandout = function uploadHandout(_ref6) {
  var file = _ref6.file;
  return function (dispatch) {
    dispatch(requests.uploadAsset({
      asset: file,
      onSuccess: function onSuccess(response) {
        var handout = response.data.asset.url;
        dispatch(_.actions.video.updateField({
          handout: handout
        }));
      }
    }));
  };
};

// Transcript Thunks:

var importTranscript = exports.importTranscript = function importTranscript() {
  return function (dispatch, getState) {
    var state = getState();
    var _state$video = state.video,
      transcripts = _state$video.transcripts,
      videoSource = _state$video.videoSource;
    // Remove the placeholder '' from the unset language from the list of transcripts.
    var transcriptsPlaceholderRemoved = transcripts === [] ? transcripts : (0, _utils.removeItemOnce)(transcripts, '');
    dispatch(requests.importTranscript({
      youTubeId: (0, _api.parseYoutubeId)(videoSource),
      onSuccess: function onSuccess(response) {
        dispatch(_.actions.video.updateField({
          transcripts: [].concat(_toConsumableArray(transcriptsPlaceholderRemoved), ['en'])
        }));
        if (_.selectors.video.videoId(state) === '') {
          dispatch(_.actions.video.updateField({
            videoId: response.data.edx_video_id
          }));
        }
      }
    }));
  };
};
var uploadTranscript = exports.uploadTranscript = function uploadTranscript(_ref7) {
  var language = _ref7.language,
    file = _ref7.file;
  return function (dispatch, getState) {
    var state = getState();
    var _state$video2 = state.video,
      transcripts = _state$video2.transcripts,
      videoId = _state$video2.videoId;
    // Remove the placeholder '' from the unset language from the list of transcripts.
    var transcriptsPlaceholderRemoved = transcripts === [] ? transcripts : (0, _utils.removeItemOnce)(transcripts, '');
    dispatch(requests.uploadTranscript({
      language: language,
      videoId: videoId,
      transcript: file,
      onSuccess: function onSuccess(response) {
        // if we aren't replacing, add the language to the redux store.
        if (!transcriptsPlaceholderRemoved.includes(language)) {
          dispatch(_.actions.video.updateField({
            transcripts: [].concat(_toConsumableArray(transcriptsPlaceholderRemoved), [language])
          }));
        }
        if (_.selectors.video.videoId(state) === '') {
          dispatch(_.actions.video.updateField({
            videoId: response.data.edx_video_id
          }));
        }
      }
    }));
  };
};
var deleteTranscript = exports.deleteTranscript = function deleteTranscript(_ref8) {
  var language = _ref8.language;
  return function (dispatch, getState) {
    var state = getState();
    var _state$video3 = state.video,
      transcripts = _state$video3.transcripts,
      videoId = _state$video3.videoId;
    dispatch(requests.deleteTranscript({
      language: language,
      videoId: videoId,
      onSuccess: function onSuccess() {
        var updatedTranscripts = transcripts.filter(function (langCode) {
          return langCode !== language;
        });
        dispatch(_.actions.video.updateField({
          transcripts: updatedTranscripts
        }));
      }
    }));
  };
};
var updateTranscriptLanguage = exports.updateTranscriptLanguage = function updateTranscriptLanguage(_ref9) {
  var newLanguageCode = _ref9.newLanguageCode,
    languageBeforeChange = _ref9.languageBeforeChange;
  return function (dispatch, getState) {
    var state = getState();
    var _state$video4 = state.video,
      transcripts = _state$video4.transcripts,
      videoId = _state$video4.videoId;
    _.selectors.video.getTranscriptDownloadUrl(state);
    dispatch(requests.getTranscriptFile({
      videoId: videoId,
      language: languageBeforeChange,
      onSuccess: function onSuccess(response) {
        dispatch(requests.updateTranscriptLanguage({
          languageBeforeChange: languageBeforeChange,
          file: new File([new Blob([response.data], {
            type: 'text/plain'
          })], "".concat(videoId, "_").concat(newLanguageCode, ".srt"), {
            type: 'text/plain'
          }),
          newLanguageCode: newLanguageCode,
          videoId: videoId,
          onSuccess: function onSuccess() {
            var newTranscripts = transcripts.filter(function (transcript) {
              return transcript !== languageBeforeChange;
            });
            newTranscripts.push(newLanguageCode);
            dispatch(_.actions.video.updateField({
              transcripts: newTranscripts
            }));
          }
        }));
      }
    }));
  };
};
var replaceTranscript = exports.replaceTranscript = function replaceTranscript(_ref10) {
  var newFile = _ref10.newFile,
    newFilename = _ref10.newFilename,
    language = _ref10.language;
  return function (dispatch, getState) {
    var state = getState();
    var videoId = state.video.videoId;
    dispatch(requests.deleteTranscript({
      language: language,
      videoId: videoId,
      onSuccess: function onSuccess() {
        dispatch(uploadTranscript({
          language: language,
          file: newFile,
          filename: newFilename
        }));
      }
    }));
  };
};
var _default = exports["default"] = {
  loadVideoData: loadVideoData,
  determineVideoSources: determineVideoSources,
  parseLicense: parseLicense,
  saveVideoData: saveVideoData,
  uploadThumbnail: uploadThumbnail,
  importTranscript: importTranscript,
  uploadTranscript: uploadTranscript,
  deleteTranscript: deleteTranscript,
  updateTranscriptLanguage: updateTranscriptLanguage,
  replaceTranscript: replaceTranscript,
  uploadHandout: uploadHandout
};
//# sourceMappingURL=video.js.map