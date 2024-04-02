"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsString = exports.imgProps = exports.hooks = exports["default"] = exports.ImageUploadModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _tinyMCE = _interopRequireDefault(require("../../data/constants/tinyMCE"));
var _ImageSettingsModal = _interopRequireDefault(require("./ImageSettingsModal"));
var _SelectImageModal = _interopRequireDefault(require("./SelectImageModal"));
var _module = _interopRequireWildcard(require("."));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var propsString = exports.propsString = function propsString(props) {
  return Object.keys(props).map(function (key) {
    return "".concat(key, "=\"").concat(props[key], "\"");
  }).join(' ');
};
var imgProps = exports.imgProps = function imgProps(_ref) {
  var settings = _ref.settings,
    selection = _ref.selection,
    lmsEndpointUrl = _ref.lmsEndpointUrl,
    editorType = _ref.editorType;
  var url = selection.externalUrl;
  if (url.startsWith(lmsEndpointUrl) && editorType !== 'expandable') {
    var sourceEndIndex = lmsEndpointUrl.length;
    url = url.substring(sourceEndIndex);
  }
  return {
    src: url,
    alt: settings.isDecorative ? '' : settings.altText,
    width: settings.dimensions.width,
    height: settings.dimensions.height
  };
};
var hooks = exports.hooks = {
  createSaveCallback: function createSaveCallback(_ref2) {
    var close = _ref2.close,
      editorRef = _ref2.editorRef,
      editorType = _ref2.editorType,
      setSelection = _ref2.setSelection,
      selection = _ref2.selection,
      lmsEndpointUrl = _ref2.lmsEndpointUrl;
    return function (settings) {
      editorRef.current.execCommand(_tinyMCE["default"].commands.insertContent, false, _module.hooks.imgTag({
        settings: settings,
        selection: selection,
        lmsEndpointUrl: lmsEndpointUrl,
        editorType: editorType
      }));
      setSelection(null);
      close();
    };
  },
  onClose: function onClose(_ref3) {
    var clearSelection = _ref3.clearSelection,
      close = _ref3.close;
    return function () {
      clearSelection();
      close();
    };
  },
  imgTag: function imgTag(_ref4) {
    var settings = _ref4.settings,
      selection = _ref4.selection,
      lmsEndpointUrl = _ref4.lmsEndpointUrl,
      editorType = _ref4.editorType;
    var props = _module.imgProps({
      settings: settings,
      selection: selection,
      lmsEndpointUrl: lmsEndpointUrl,
      editorType: editorType
    });
    return "<img ".concat(propsString(props), " />");
  }
};
var ImageUploadModal = exports.ImageUploadModal = function ImageUploadModal(_ref5) {
  var editorRef = _ref5.editorRef,
    isOpen = _ref5.isOpen,
    close = _ref5.close,
    clearSelection = _ref5.clearSelection,
    selection = _ref5.selection,
    setSelection = _ref5.setSelection,
    images = _ref5.images,
    editorType = _ref5.editorType,
    lmsEndpointUrl = _ref5.lmsEndpointUrl;
  if (selection) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageSettingsModal["default"], {
      isOpen: isOpen,
      close: _module.hooks.onClose({
        clearSelection: clearSelection,
        close: close
      }),
      selection: selection,
      saveToEditor: _module.hooks.createSaveCallback({
        close: close,
        editorRef: editorRef,
        editorType: editorType,
        selection: selection,
        setSelection: setSelection,
        lmsEndpointUrl: lmsEndpointUrl
      }),
      returnToSelection: clearSelection
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectImageModal["default"], {
    isOpen: isOpen,
    close: close,
    setSelection: setSelection,
    clearSelection: clearSelection,
    images: images
  });
};
ImageUploadModal.defaultProps = {
  editorRef: null,
  editorType: null,
  selection: null
};
ImageUploadModal.propTypes = {
  clearSelection: _propTypes["default"].func.isRequired,
  close: _propTypes["default"].func.isRequired,
  editorRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  isOpen: _propTypes["default"].bool.isRequired,
  selection: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    externalUrl: _propTypes["default"].string,
    altText: _propTypes["default"].bool
  }),
  setSelection: _propTypes["default"].func.isRequired,
  images: _propTypes["default"].shape({}).isRequired,
  lmsEndpointUrl: _propTypes["default"].string.isRequired,
  editorType: _propTypes["default"].string
};
var _default = exports["default"] = (0, _i18n.injectIntl)(ImageUploadModal);
//# sourceMappingURL=index.js.map