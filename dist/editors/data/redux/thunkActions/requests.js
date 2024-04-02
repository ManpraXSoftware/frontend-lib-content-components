"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadTranscript = exports.uploadThumbnail = exports.uploadAsset = exports.updateTranscriptLanguage = exports.saveBlock = exports.networkRequest = exports.importTranscript = exports.getTranscriptFile = exports.fetchVideoFeatures = exports.fetchUnit = exports.fetchStudioView = exports.fetchCourseDetails = exports.fetchBlock = exports.fetchAssets = exports.fetchAdvancedSettings = exports.deleteTranscript = exports["default"] = exports.checkTranscriptsForImport = exports.allowThumbnailUpload = void 0;
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _ = require("..");
var _api = _interopRequireWildcard(require("../../services/cms/api"));
var _module = _interopRequireWildcard(require("./requests"));
var _excluded = ["content"],
  _excluded2 = ["asset"],
  _excluded3 = ["thumbnail", "videoId"],
  _excluded4 = ["videoId", "youTubeId"],
  _excluded5 = ["youTubeId"],
  _excluded6 = ["language", "videoId"],
  _excluded7 = ["transcript", "videoId", "language"],
  _excluded8 = ["file", "languageBeforeChange", "newLanguageCode", "videoId"],
  _excluded9 = ["language", "videoId"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Wrapper around a network request promise, that sends actions to the redux store to
 * track the state of that promise.
 * Tracks the promise by requestKey, and sends an action when it is started, succeeds, or
 * fails.  It also accepts onSuccess and onFailure methods to be called with the output
 * of failure or success of the promise.
 * @param {string} requestKey - request tracking identifier
 * @param {Promise} promise - api event promise
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
var networkRequest = exports.networkRequest = function networkRequest(_ref) {
  var requestKey = _ref.requestKey,
    promise = _ref.promise,
    onSuccess = _ref.onSuccess,
    onFailure = _ref.onFailure;
  return function (dispatch) {
    dispatch(_.actions.requests.startRequest(requestKey));
    return promise.then(function (response) {
      if (onSuccess) {
        onSuccess(response);
      }
      dispatch(_.actions.requests.completeRequest({
        requestKey: requestKey,
        response: response
      }));
    })["catch"](function (error) {
      if (onFailure) {
        onFailure(error);
      }
      dispatch(_.actions.requests.failRequest({
        requestKey: requestKey,
        error: error
      }));
    });
  };
};

/**
 * Tracked fetchByBlockId api method.
 * Tracked to the `fetchBlock` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
var fetchBlock = exports.fetchBlock = function fetchBlock(_ref2) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchBlock,
      promise: _api["default"].fetchBlockById({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState())
      })
    }, rest)));
  };
};

/**

 * Tracked fetchStudioView api method.
 * Tracked to the `fetchBlock` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
var fetchStudioView = exports.fetchStudioView = function fetchStudioView(_ref3) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchStudioView,
      promise: _api["default"].fetchStudioView({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState())
      })
    }, rest)));
  };
};

/**
 * Tracked fetchByUnitId api method.
 * Tracked to the `fetchUnit` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
var fetchUnit = exports.fetchUnit = function fetchUnit(_ref4) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchUnit,
      promise: _api["default"].fetchByUnitId({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState())
      })
    }, rest)));
  };
};

/**
 * Tracked saveBlock api method.  Tracked to the `saveBlock` request key.
 * @param {string} content
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
var saveBlock = exports.saveBlock = function saveBlock(_ref5) {
  var content = _ref5.content,
    rest = _objectWithoutProperties(_ref5, _excluded);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.saveBlock,
      promise: _api["default"].saveBlock({
        blockId: _.selectors.app.blockId(getState()),
        blockType: _.selectors.app.blockType(getState()),
        learningContextId: _.selectors.app.learningContextId(getState()),
        content: content,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        title: _.selectors.app.blockTitle(getState())
      })
    }, rest)));
  };
};
var uploadAsset = exports.uploadAsset = function uploadAsset(_ref6) {
  var asset = _ref6.asset,
    rest = _objectWithoutProperties(_ref6, _excluded2);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.uploadAsset,
      promise: _api["default"].uploadAsset({
        learningContextId: _.selectors.app.learningContextId(getState()),
        asset: asset,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
var fetchAssets = exports.fetchAssets = function fetchAssets(_ref7) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref7), _ref7));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchAssets,
      promise: _api["default"].fetchAssets({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      }).then(function (response) {
        return (0, _api.loadImages)(response.data.assets);
      })
    }, rest)));
  };
};
var allowThumbnailUpload = exports.allowThumbnailUpload = function allowThumbnailUpload(_ref8) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref8), _ref8));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.allowThumbnailUpload,
      promise: _api["default"].allowThumbnailUpload({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
var uploadThumbnail = exports.uploadThumbnail = function uploadThumbnail(_ref9) {
  var thumbnail = _ref9.thumbnail,
    videoId = _ref9.videoId,
    rest = _objectWithoutProperties(_ref9, _excluded3);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.uploadThumbnail,
      promise: _api["default"].uploadThumbnail({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState()),
        thumbnail: thumbnail,
        videoId: videoId
      })
    }, rest)));
  };
};
var checkTranscriptsForImport = exports.checkTranscriptsForImport = function checkTranscriptsForImport(_ref10) {
  var videoId = _ref10.videoId,
    youTubeId = _ref10.youTubeId,
    rest = _objectWithoutProperties(_ref10, _excluded4);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.checkTranscriptsForImport,
      promise: _api["default"].checkTranscriptsForImport({
        blockId: _.selectors.app.blockId(getState()),
        videoId: videoId,
        youTubeId: youTubeId,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
var importTranscript = exports.importTranscript = function importTranscript(_ref11) {
  var youTubeId = _ref11.youTubeId,
    rest = _objectWithoutProperties(_ref11, _excluded5);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.importTranscript,
      promise: _api["default"].importTranscript({
        blockId: _.selectors.app.blockId(getState()),
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        youTubeId: youTubeId
      })
    }, rest)));
  };
};
var deleteTranscript = exports.deleteTranscript = function deleteTranscript(_ref12) {
  var language = _ref12.language,
    videoId = _ref12.videoId,
    rest = _objectWithoutProperties(_ref12, _excluded6);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.deleteTranscript,
      promise: _api["default"].deleteTranscript({
        blockId: _.selectors.app.blockId(getState()),
        language: language,
        videoId: videoId,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
var uploadTranscript = exports.uploadTranscript = function uploadTranscript(_ref13) {
  var transcript = _ref13.transcript,
    videoId = _ref13.videoId,
    language = _ref13.language,
    rest = _objectWithoutProperties(_ref13, _excluded7);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.uploadTranscript,
      promise: _api["default"].uploadTranscript({
        blockId: _.selectors.app.blockId(getState()),
        transcript: transcript,
        videoId: videoId,
        language: language,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
var updateTranscriptLanguage = exports.updateTranscriptLanguage = function updateTranscriptLanguage(_ref14) {
  var file = _ref14.file,
    languageBeforeChange = _ref14.languageBeforeChange,
    newLanguageCode = _ref14.newLanguageCode,
    videoId = _ref14.videoId,
    rest = _objectWithoutProperties(_ref14, _excluded8);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.updateTranscriptLanguage,
      promise: _api["default"].uploadTranscript({
        blockId: _.selectors.app.blockId(getState()),
        transcript: file,
        videoId: videoId,
        language: languageBeforeChange,
        newLanguage: newLanguageCode,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
var getTranscriptFile = exports.getTranscriptFile = function getTranscriptFile(_ref15) {
  var language = _ref15.language,
    videoId = _ref15.videoId,
    rest = _objectWithoutProperties(_ref15, _excluded9);
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.getTranscriptFile,
      promise: _api["default"].getTranscript({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState()),
        videoId: videoId,
        language: language
      })
    }, rest)));
  };
};
var fetchCourseDetails = exports.fetchCourseDetails = function fetchCourseDetails(_ref16) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref16), _ref16));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchCourseDetails,
      promise: _api["default"].fetchCourseDetails({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      })
    }, rest)));
  };
};
var fetchAdvancedSettings = exports.fetchAdvancedSettings = function fetchAdvancedSettings(_ref17) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref17), _ref17));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchAdvancedSettings,
      promise: _api["default"].fetchAdvancedSettings({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      })
    }, rest)));
  };
};
var fetchVideoFeatures = exports.fetchVideoFeatures = function fetchVideoFeatures(_ref18) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref18), _ref18));
  return function (dispatch, getState) {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchVideoFeatures,
      promise: _api["default"].fetchVideoFeatures({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      })
    }, rest)));
  };
};
var _default = exports["default"] = (0, _utils.StrictDict)({
  fetchBlock: fetchBlock,
  fetchStudioView: fetchStudioView,
  fetchUnit: fetchUnit,
  saveBlock: saveBlock,
  fetchAssets: fetchAssets,
  uploadAsset: uploadAsset,
  allowThumbnailUpload: allowThumbnailUpload,
  uploadThumbnail: uploadThumbnail,
  deleteTranscript: deleteTranscript,
  uploadTranscript: uploadTranscript,
  updateTranscriptLanguage: updateTranscriptLanguage,
  fetchCourseDetails: fetchCourseDetails,
  getTranscriptFile: getTranscriptFile,
  checkTranscriptsForImport: checkTranscriptsForImport,
  importTranscript: importTranscript,
  fetchAdvancedSettings: fetchAdvancedSettings,
  fetchVideoFeatures: fetchVideoFeatures
});
//# sourceMappingURL=requests.js.map