"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.resampleImage = exports.fileSizeError = exports.fileInput = exports.deleteThumbnail = exports["default"] = exports.createResampledFile = exports.checkValidSize = exports.checkValidDimensions = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../../../../data/redux");
var constants = _interopRequireWildcard(require("./constants"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var state = exports.state = {
  showSizeError: function showSizeError(args) {
    return _react["default"].useState(args);
  }
};

/** resampledFile({ canvasUrl, filename, mimeType })
 * resampledFile takes a canvasUrl, filename, and a valid mimeType. The
 * canvasUrl is parsed and written to an 8-bit array of unsigned integers. The
 * new array is saved to  a new file with the same filename as the original image.
 * @param {string} canvasUrl - string of base64 URL for new image canvas
 * @param {string} filename - string of the original image's filename
 * @param {string} mimeType - string of mimeType for the canvas
 * @return {File} new File object
 */
var createResampledFile = exports.createResampledFile = function createResampledFile(_ref) {
  var canvasUrl = _ref.canvasUrl,
    filename = _ref.filename,
    mimeType = _ref.mimeType;
  var arr = canvasUrl.split(',');
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {
    type: mimeType
  });
};

/** resampleImage({ image, filename })
 * resampledImage takes a canvasUrl, filename, and a valid mimeType. The
 * canvasUrl is parsed and written to an 8-bit array of unsigned integers. The
 * new array is saved to  a new file with the same filename as the original image.
 * @param {File} canvasUrl - string of base64 URL for new image canvas
 * @param {string} filename - string of the image's filename
 * @return {array} array containing the base64 URL for the resampled image and the file containing the resampled image
 */
var resampleImage = exports.resampleImage = function resampleImage(_ref2) {
  var image = _ref2.image,
    filename = _ref2.filename;
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  // Determine new dimensions for image
  if (image.naturalWidth > constants.MAX_WIDTH) {
    // Set dimensions to the maximum size
    canvas.width = constants.MAX_WIDTH;
    canvas.height = constants.MAX_HEIGHT;
  } else if (image.naturalWidth < constants.MIN_WIDTH) {
    // Set dimensions to the minimum size
    canvas.width = constants.MIN_WIDTH;
    canvas.height = constants.MIN_HEIGHT;
  } else {
    // Set dimensions to the closest 16:9 ratio
    var heightRatio = 9 / 16;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalWidth * heightRatio;
  }
  var cropLeft = (image.naturalWidth - canvas.width) / 2;
  var cropTop = (image.naturalHeight - canvas.height) / 2;
  ctx.drawImage(image, cropLeft, cropTop, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  var resampledFile = _module.createResampledFile({
    canvasUrl: canvas.toDataURL(),
    filename: filename,
    mimeType: 'image/png'
  });
  return [canvas.toDataURL(), resampledFile];
};
var checkValidDimensions = exports.checkValidDimensions = function checkValidDimensions(_ref3) {
  var width = _ref3.width,
    height = _ref3.height;
  if (width < constants.MIN_WIDTH || height < height.MIN_WIDTH) {
    return false;
  }
  var imageAspectRatio = Math.abs(width / height - constants.ASPECT_RATIO);
  if (imageAspectRatio >= constants.ASPECT_RATIO_ERROR_MARGIN) {
    return false;
  }
  return true;
};
var checkValidSize = exports.checkValidSize = function checkValidSize(_ref4) {
  var file = _ref4.file,
    onSizeFail = _ref4.onSizeFail;
  // Check if the file size is greater than 2 MB, upload size maximum, or
  // if the file size is greater than 2 KB, upload size minimum
  if (file.size > constants.MAX_FILE_SIZE_MB || file.size < constants.MIN_FILE_SIZE_KB) {
    onSizeFail();
    return false;
  }
  return true;
};
var fileInput = exports.fileInput = function fileInput(_ref5) {
  var setThumbnailSrc = _ref5.setThumbnailSrc,
    imgRef = _ref5.imgRef,
    fileSizeError = _ref5.fileSizeError;
  var dispatch = (0, _reactRedux.useDispatch)();
  var ref = _react["default"].useRef();
  var click = function click() {
    return ref.current.click();
  };
  var addFile = function addFile(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    if (file && _module.checkValidSize({
      file: file,
      onSizeFail: function onSizeFail() {
        fileSizeError.set();
      }
    })) {
      reader.onload = function () {
        setThumbnailSrc(reader.result);
        var image = imgRef.current;
        image.onload = function () {
          if (!_module.checkValidDimensions({
            width: image.naturalWidth,
            height: image.naturalHeight
          })) {
            var _module$resampleImage = _module.resampleImage({
                image: image,
                filename: file.name
              }),
              _module$resampleImage2 = _slicedToArray(_module$resampleImage, 2),
              resampledUrl = _module$resampleImage2[0],
              resampledFile = _module$resampleImage2[1];
            setThumbnailSrc(resampledUrl);
            dispatch(_redux.thunkActions.video.uploadThumbnail({
              thumbnail: resampledFile
            }));
            dispatch(_redux.actions.video.updateField({
              thumbnail: resampledUrl
            }));
            return;
          }
          dispatch(_redux.thunkActions.video.uploadThumbnail({
            thumbnail: file
          }));
          dispatch(_redux.actions.video.updateField({
            thumbnail: reader.result
          }));
        };
      };
      dispatch(_redux.actions.video.updateField({
        thumbnail: ' '
      }));
      reader.readAsDataURL(file);
    }
  };
  return {
    click: click,
    addFile: addFile,
    ref: ref
  };
};
var fileSizeError = exports.fileSizeError = function fileSizeError() {
  var _module$state$showSiz = _module.state.showSizeError(false),
    _module$state$showSiz2 = _slicedToArray(_module$state$showSiz, 2),
    showSizeError = _module$state$showSiz2[0],
    setShowSizeError = _module$state$showSiz2[1];
  return {
    fileSizeError: {
      show: showSizeError,
      set: function set() {
        return setShowSizeError(true);
      },
      dismiss: function dismiss() {
        return setShowSizeError(false);
      }
    }
  };
};
var deleteThumbnail = exports.deleteThumbnail = function deleteThumbnail(_ref6) {
  var dispatch = _ref6.dispatch;
  return function () {
    dispatch(_redux.actions.video.updateField({
      thumbnail: null
    }));
    var emptyCanvas = document.createElement('canvas');
    var ctx = emptyCanvas.getContext('2d');
    emptyCanvas.width = constants.MAX_WIDTH;
    emptyCanvas.height = constants.MAX_HEIGHT;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, emptyCanvas.width, emptyCanvas.height);
    var file = createResampledFile({
      canvasUrl: emptyCanvas.toDataURL(),
      filename: 'blankThumbnail.png',
      mimeType: 'image/png'
    });
    dispatch(_redux.thunkActions.video.uploadThumbnail({
      thumbnail: file,
      emptyCanvas: emptyCanvas
    }));
  };
};
var _default = exports["default"] = {
  fileInput: fileInput,
  fileSizeError: fileSizeError,
  deleteThumbnail: deleteThumbnail
};
//# sourceMappingURL=hooks.js.map