"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.parseHandoutName = exports.fileSizeError = exports.fileInput = exports["default"] = exports.checkValidFileSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../../../../data/redux");
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
var parseHandoutName = exports.parseHandoutName = function parseHandoutName(_ref) {
  var handout = _ref.handout;
  if (handout) {
    var handoutName = handout.slice(handout.lastIndexOf('@') + 1);
    return handoutName;
  }
  return 'None';
};
var checkValidFileSize = exports.checkValidFileSize = function checkValidFileSize(_ref2) {
  var file = _ref2.file,
    onSizeFail = _ref2.onSizeFail;
  // Check if the file size is greater than 20 MB, upload size limit
  if (file.size > 20000000) {
    onSizeFail();
    return false;
  }
  return true;
};
var fileInput = exports.fileInput = function fileInput(_ref3) {
  var fileSizeError = _ref3.fileSizeError;
  var dispatch = (0, _reactRedux.useDispatch)();
  var ref = _react["default"].useRef();
  var click = function click() {
    return ref.current.click();
  };
  var addFile = function addFile(e) {
    var file = e.target.files[0];
    if (file && _module.checkValidFileSize({
      file: file,
      onSizeFail: function onSizeFail() {
        fileSizeError.set();
      }
    })) {
      dispatch(_redux.thunkActions.video.uploadHandout({
        file: file
      }));
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
var _default = exports["default"] = {
  fileInput: fileInput,
  fileSizeError: fileSizeError,
  parseHandoutName: parseHandoutName
};
//# sourceMappingURL=hooks.js.map