"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoIdChangeAlert = exports.state = exports.sourceHooks = exports.fallbackHooks = exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _redux = require("../../../../../../data/redux");
var _api = require("../../../../../../data/services/cms/api");
var requests = _interopRequireWildcard(require("../../../../../../data/redux/thunkActions/requests"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var state = exports.state = {
  showVideoIdChangeAlert: function showVideoIdChangeAlert(args) {
    return _react["default"].useState(args);
  }
};
var sourceHooks = exports.sourceHooks = function sourceHooks(_ref) {
  var dispatch = _ref.dispatch,
    previousVideoId = _ref.previousVideoId,
    setAlert = _ref.setAlert;
  return {
    updateVideoURL: function updateVideoURL(e, videoId) {
      var videoUrl = e.target.value;
      dispatch(_redux.actions.video.updateField({
        videoSource: videoUrl
      }));
      var youTubeId = (0, _api.parseYoutubeId)(videoUrl);
      if (youTubeId) {
        dispatch(requests.checkTranscriptsForImport({
          videoId: videoId,
          youTubeId: youTubeId,
          onSuccess: function onSuccess(response) {
            if (response.data.command === 'import') {
              dispatch(_redux.actions.video.updateField({
                allowTranscriptImport: true
              }));
            }
          }
        }));
      }
    },
    updateVideoId: function updateVideoId(e) {
      var updatedVideoId = e.target.value;
      if (previousVideoId !== updatedVideoId && updatedVideoId) {
        setAlert();
      }
      dispatch(_redux.actions.video.updateField({
        videoId: updatedVideoId
      }));
    }
  };
};
var fallbackHooks = exports.fallbackHooks = function fallbackHooks(_ref2) {
  var fallbackVideos = _ref2.fallbackVideos,
    dispatch = _ref2.dispatch;
  return {
    addFallbackVideo: function addFallbackVideo() {
      return dispatch(_redux.actions.video.updateField({
        fallbackVideos: [].concat(_toConsumableArray(fallbackVideos), [''])
      }));
    },
    deleteFallbackVideo: function deleteFallbackVideo(videoUrl) {
      var updatedFallbackVideos = fallbackVideos.splice(fallbackVideos.indexOf(videoUrl), 1);
      dispatch(_redux.actions.video.updateField({
        fallbackVideos: updatedFallbackVideos
      }));
    }
  };
};
var videoIdChangeAlert = exports.videoIdChangeAlert = function videoIdChangeAlert() {
  var _state$showVideoIdCha = state.showVideoIdChangeAlert(false),
    _state$showVideoIdCha2 = _slicedToArray(_state$showVideoIdCha, 2),
    showVideoIdChangeAlert = _state$showVideoIdCha2[0],
    setShowVideoIdChangeAlert = _state$showVideoIdCha2[1];
  return {
    videoIdChangeAlert: {
      show: showVideoIdChangeAlert,
      set: function set() {
        return setShowVideoIdChangeAlert(true);
      },
      dismiss: function dismiss() {
        return setShowVideoIdChangeAlert(false);
      }
    }
  };
};
var _default = exports["default"] = {
  videoIdChangeAlert: videoIdChangeAlert,
  sourceHooks: sourceHooks,
  fallbackHooks: fallbackHooks
};
//# sourceMappingURL=hooks.js.map