"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.searchAndSortHooks = exports.imgListHooks = exports.imgHooks = exports.filteredList = exports.fileInputHooks = exports.displayList = exports["default"] = exports.checkValidFileSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../data/redux");
var _module = _interopRequireWildcard(require("./hooks"));
var _utils = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var state = exports.state = {
  highlighted: function highlighted(val) {
    return _react["default"].useState(val);
  },
  showSelectImageError: function showSelectImageError(val) {
    return _react["default"].useState(val);
  },
  searchString: function searchString(val) {
    return _react["default"].useState(val);
  },
  sortBy: function sortBy(val) {
    return _react["default"].useState(val);
  },
  showSizeError: function showSizeError(val) {
    return _react["default"].useState(val);
  }
};
var searchAndSortHooks = exports.searchAndSortHooks = function searchAndSortHooks() {
  var _module$state$searchS = _module.state.searchString(''),
    _module$state$searchS2 = _slicedToArray(_module$state$searchS, 2),
    searchString = _module$state$searchS2[0],
    setSearchString = _module$state$searchS2[1];
  var _module$state$sortBy = _module.state.sortBy(_utils.sortKeys.dateNewest),
    _module$state$sortBy2 = _slicedToArray(_module$state$sortBy, 2),
    sortBy = _module$state$sortBy2[0],
    setSortBy = _module$state$sortBy2[1];
  return {
    searchString: searchString,
    onSearchChange: function onSearchChange(e) {
      return setSearchString(e.target.value);
    },
    clearSearchString: function clearSearchString() {
      return setSearchString('');
    },
    sortBy: sortBy,
    onSortClick: function onSortClick(key) {
      return function () {
        return setSortBy(key);
      };
    }
  };
};
var filteredList = exports.filteredList = function filteredList(_ref) {
  var searchString = _ref.searchString,
    imageList = _ref.imageList;
  return imageList.filter(function (_ref2) {
    var displayName = _ref2.displayName;
    return displayName.toLowerCase().includes(searchString.toLowerCase());
  });
};
var displayList = exports.displayList = function displayList(_ref3) {
  var sortBy = _ref3.sortBy,
    searchString = _ref3.searchString,
    images = _ref3.images;
  return _module.filteredList({
    searchString: searchString,
    imageList: images
  }).sort(_utils.sortFunctions[sortBy in _utils.sortKeys ? _utils.sortKeys[sortBy] : _utils.sortKeys.dateNewest]);
};
var imgListHooks = exports.imgListHooks = function imgListHooks(_ref4) {
  var searchSortProps = _ref4.searchSortProps,
    setSelection = _ref4.setSelection,
    images = _ref4.images;
  var _module$state$highlig = _module.state.highlighted(null),
    _module$state$highlig2 = _slicedToArray(_module$state$highlig, 2),
    highlighted = _module$state$highlig2[0],
    setHighlighted = _module$state$highlig2[1];
  var _module$state$showSel = _module.state.showSelectImageError(false),
    _module$state$showSel2 = _slicedToArray(_module$state$showSel, 2),
    showSelectImageError = _module$state$showSel2[0],
    setShowSelectImageError = _module$state$showSel2[1];
  var _module$state$showSiz = _module.state.showSizeError(false),
    _module$state$showSiz2 = _slicedToArray(_module$state$showSiz, 2),
    showSizeError = _module$state$showSiz2[0],
    setShowSizeError = _module$state$showSiz2[1];
  var list = _module.displayList(_objectSpread(_objectSpread({}, searchSortProps), {}, {
    images: images
  }));
  return {
    galleryError: {
      show: showSelectImageError,
      set: function set() {
        return setShowSelectImageError(true);
      },
      dismiss: function dismiss() {
        return setShowSelectImageError(false);
      }
    },
    inputError: {
      show: showSizeError,
      set: function set() {
        return setShowSizeError(true);
      },
      dismiss: function dismiss() {
        return setShowSizeError(false);
      }
    },
    images: images,
    galleryProps: {
      galleryIsEmpty: Object.keys(images).length === 0,
      searchIsEmpty: list.length === 0,
      displayList: list,
      highlighted: highlighted,
      onHighlightChange: function onHighlightChange(e) {
        return setHighlighted(e.target.value);
      }
    },
    // highlight by id
    selectBtnProps: {
      onClick: function onClick() {
        if (highlighted) {
          var highlightedImage = images.find(function (image) {
            return image.id === highlighted;
          });
          setSelection(highlightedImage);
        } else {
          setShowSelectImageError(true);
        }
      }
    }
  };
};
var checkValidFileSize = exports.checkValidFileSize = function checkValidFileSize(_ref5) {
  var selectedFile = _ref5.selectedFile,
    clearSelection = _ref5.clearSelection,
    onSizeFail = _ref5.onSizeFail;
  // Check if the file size is greater than 10 MB, upload size limit
  if (selectedFile.size > 10000000) {
    clearSelection();
    onSizeFail();
    return false;
  }
  return true;
};
var fileInputHooks = exports.fileInputHooks = function fileInputHooks(_ref6) {
  var setSelection = _ref6.setSelection,
    clearSelection = _ref6.clearSelection,
    imgList = _ref6.imgList;
  var dispatch = (0, _reactRedux.useDispatch)();
  var ref = _react["default"].useRef();
  var click = function click() {
    return ref.current.click();
  };
  var addFile = function addFile(e) {
    var selectedFile = e.target.files[0];
    if (selectedFile && _module.checkValidFileSize({
      selectedFile: selectedFile,
      clearSelection: clearSelection,
      onSizeFail: function onSizeFail() {
        imgList.inputError.set();
      }
    })) {
      dispatch(_redux.thunkActions.app.uploadImage({
        file: selectedFile,
        setSelection: setSelection
      }));
    }
  };
  return {
    click: click,
    addFile: addFile,
    ref: ref
  };
};
var imgHooks = exports.imgHooks = function imgHooks(_ref7) {
  var setSelection = _ref7.setSelection,
    clearSelection = _ref7.clearSelection,
    images = _ref7.images;
  var searchSortProps = _module.searchAndSortHooks();
  var imgList = _module.imgListHooks({
    setSelection: setSelection,
    searchSortProps: searchSortProps,
    images: images
  });
  var fileInput = _module.fileInputHooks({
    setSelection: setSelection,
    clearSelection: clearSelection,
    imgList: imgList
  });
  var galleryError = imgList.galleryError,
    galleryProps = imgList.galleryProps,
    inputError = imgList.inputError,
    selectBtnProps = imgList.selectBtnProps;
  return {
    galleryError: galleryError,
    inputError: inputError,
    fileInput: fileInput,
    galleryProps: galleryProps,
    searchSortProps: searchSortProps,
    selectBtnProps: selectBtnProps
  };
};
var _default = exports["default"] = {
  imgHooks: imgHooks
};
//# sourceMappingURL=hooks.js.map