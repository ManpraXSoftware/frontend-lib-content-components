"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImage = exports.saveBlock = exports.initialize = exports.fetchVideos = exports.fetchUnit = exports.fetchStudioView = exports.fetchCourseDetails = exports.fetchBlock = exports.fetchAssets = exports["default"] = void 0;
var _utils = require("../../../utils");
var _ = require("..");
var requests = _interopRequireWildcard(require("./requests"));
var _module = _interopRequireWildcard(require("./app"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var fetchBlock = exports.fetchBlock = function fetchBlock() {
  return function (dispatch) {
    dispatch(requests.fetchBlock({
      onSuccess: function onSuccess(response) {
        return dispatch(_.actions.app.setBlockValue(response));
      },
      // eslint-disable-next-line
      onFailure: function onFailure(e) {
        return console.log({
          fetchFailure: e
        });
      }
    }));
  };
};
var fetchStudioView = exports.fetchStudioView = function fetchStudioView() {
  return function (dispatch) {
    dispatch(requests.fetchStudioView({
      onSuccess: function onSuccess(response) {
        return dispatch(_.actions.app.setStudioView(response));
      },
      onFailure: function onFailure(e) {
        return dispatch(_.actions.app.setStudioView(e));
      }
    }));
  };
};
var fetchUnit = exports.fetchUnit = function fetchUnit() {
  return function (dispatch) {
    dispatch(requests.fetchUnit({
      onSuccess: function onSuccess(response) {
        return dispatch(_.actions.app.setUnitUrl(response));
      },
      onFailure: function onFailure(e) {
        return dispatch(_.actions.app.setUnitUrl(e));
      }
    }));
  };
};
var fetchAssets = exports.fetchAssets = function fetchAssets() {
  return function (dispatch) {
    dispatch(requests.fetchAssets({
      onSuccess: function onSuccess(response) {
        return dispatch(_.actions.app.setAssets(response));
      }
    }));
  };
};
var fetchCourseDetails = exports.fetchCourseDetails = function fetchCourseDetails() {
  return function (dispatch) {
    dispatch(requests.fetchCourseDetails({
      onSuccess: function onSuccess(response) {
        return dispatch(_.actions.app.setCourseDetails(response));
      },
      onFailure: function onFailure(e) {
        return dispatch(_.actions.app.setCourseDetails(e));
      }
    }));
  };
};

/**
 * @param {string} studioEndpointUrl
 * @param {string} blockId
 * @param {string} learningContextId
 * @param {string} blockType
 */
var initialize = exports.initialize = function initialize(data) {
  return function (dispatch) {
    dispatch(_.actions.app.initialize(data));
    dispatch(_module.fetchBlock());
    dispatch(_module.fetchUnit());
    dispatch(_module.fetchStudioView());
    dispatch(_module.fetchAssets());
    dispatch(_module.fetchCourseDetails());
  };
};

/**
 * @param {func} onSuccess
 */
var saveBlock = exports.saveBlock = function saveBlock(_ref) {
  var content = _ref.content,
    returnToUnit = _ref.returnToUnit;
  return function (dispatch) {
    dispatch(_.actions.app.setBlockContent(content));
    dispatch(requests.saveBlock({
      content: content,
      onSuccess: function onSuccess(response) {
        dispatch(_.actions.app.setSaveResponse(response));
        returnToUnit();
      }
    }));
  };
};
var uploadImage = exports.uploadImage = function uploadImage(_ref2) {
  var file = _ref2.file,
    setSelection = _ref2.setSelection;
  return function (dispatch) {
    dispatch(requests.uploadAsset({
      asset: file,
      onSuccess: function onSuccess(response) {
        return setSelection((0, _utils.camelizeKeys)(response.data.asset));
      }
    }));
  };
};
var fetchVideos = exports.fetchVideos = function fetchVideos(_ref3) {
  var onSuccess = _ref3.onSuccess;
  return function (dispatch) {
    dispatch(requests.fetchAssets({
      onSuccess: onSuccess
    }));
    // onSuccess(mockData.mockVideoData);
  };
};
var _default = exports["default"] = (0, _utils.StrictDict)({
  fetchBlock: fetchBlock,
  fetchCourseDetails: fetchCourseDetails,
  fetchStudioView: fetchStudioView,
  fetchUnit: fetchUnit,
  fetchVideos: fetchVideos,
  initialize: initialize,
  saveBlock: saveBlock,
  fetchAssets: fetchAssets,
  uploadImage: uploadImage
});
//# sourceMappingURL=app.js.map