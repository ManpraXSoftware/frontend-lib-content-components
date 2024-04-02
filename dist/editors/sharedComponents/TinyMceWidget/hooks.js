"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.sourceCodeModalToggle = exports.setupCustomBehavior = exports.setAssetToStaticUrl = exports.selectedImage = exports.replaceStaticwithAsset = exports.removeProtocolFromUrl = exports.prepareEditorRef = exports.parseContentForLabels = exports.openModalWithSelectedImage = exports.imgModalToggle = exports.filterAssets = exports.fetchImageUrls = exports.editorConfig = void 0;
var _react = require("react");
var _tinyMCEStyles = _interopRequireDefault(require("../../data/constants/tinyMCEStyles"));
var _utils = require("../../utils");
var _pluginConfig2 = _interopRequireDefault(require("./pluginConfig"));
var _module = _interopRequireWildcard(require("./hooks"));
var _tinyMCE = _interopRequireDefault(require("../../data/constants/tinyMCE"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var state = exports.state = (0, _utils.StrictDict)({
  isImageModalOpen: function isImageModalOpen(val) {
    return (0, _react.useState)(val);
  },
  isSourceCodeModalOpen: function isSourceCodeModalOpen(val) {
    return (0, _react.useState)(val);
  },
  imageSelection: function imageSelection(val) {
    return (0, _react.useState)(val);
  },
  refReady: function refReady(val) {
    return (0, _react.useState)(val);
  }
});
var parseContentForLabels = exports.parseContentForLabels = function parseContentForLabels(_ref) {
  var _content;
  var editor = _ref.editor,
    updateContent = _ref.updateContent;
  var content = editor.getContent();
  if (content && ((_content = content) === null || _content === void 0 ? void 0 : _content.length) > 0) {
    var parsedLabels = content.split(/<label>|<\/label>/gm);
    var updatedContent;
    parsedLabels.forEach(function (label, i) {
      if (!label.startsWith('<') && !label.endsWith('>')) {
        var previousLabel = parsedLabels[i - 1];
        var nextLabel = parsedLabels[i + 1];
        if (!previousLabel.endsWith('<p>')) {
          previousLabel = "".concat(previousLabel, "</p><p>");
          updatedContent = content.replace(parsedLabels[i - 1], previousLabel);
          content = updatedContent;
          updateContent(content);
        }
        if (!nextLabel.startsWith('</p>')) {
          nextLabel = "</p><p>".concat(nextLabel);
          updatedContent = content.replace(parsedLabels[i + 1], nextLabel);
          content = updatedContent;
          updateContent(content);
        }
      }
    });
  } else {
    updateContent(content);
  }
};
var replaceStaticwithAsset = exports.replaceStaticwithAsset = function replaceStaticwithAsset(_ref2) {
  var editor = _ref2.editor,
    imageUrls = _ref2.imageUrls,
    editorType = _ref2.editorType,
    lmsEndpointUrl = _ref2.lmsEndpointUrl,
    updateContent = _ref2.updateContent;
  var content = editor.getContent();
  var imageSrcs = content.split('src="');
  imageSrcs.forEach(function (src) {
    var currentContent = content;
    var staticFullUrl;
    var isStatic = src.startsWith('/static/');
    var isExpandableAsset = src.startsWith('/assets/') && editorType === 'expandable';
    if ((isStatic || isExpandableAsset) && imageUrls.length > 0) {
      var assetSrc = src.substring(0, src.indexOf('"'));
      var assetName = assetSrc.replace(/\/assets\/.+[^/]\//g, '');
      var staticName = assetSrc.substring(8);
      imageUrls.forEach(function (url) {
        if (isExpandableAsset && assetName === url.displayName) {
          staticFullUrl = "".concat(lmsEndpointUrl).concat(url.staticFullUrl);
        } else if (staticName === url.displayName) {
          staticFullUrl = url.staticFullUrl;
          if (isExpandableAsset) {
            staticFullUrl = "".concat(lmsEndpointUrl).concat(url.staticFullUrl);
          }
        }
      });
      if (staticFullUrl) {
        var currentSrc = src.substring(0, src.indexOf('"'));
        content = currentContent.replace(currentSrc, staticFullUrl);
        if (editorType === 'expandable') {
          updateContent(content);
        } else {
          editor.setContent(content);
        }
      }
    }
  });
};
var setupCustomBehavior = exports.setupCustomBehavior = function setupCustomBehavior(_ref3) {
  var updateContent = _ref3.updateContent,
    openImgModal = _ref3.openImgModal,
    openSourceCodeModal = _ref3.openSourceCodeModal,
    setImage = _ref3.setImage,
    editorType = _ref3.editorType,
    imageUrls = _ref3.imageUrls,
    lmsEndpointUrl = _ref3.lmsEndpointUrl;
  return function (editor) {
    // image upload button
    editor.ui.registry.addButton(_tinyMCE["default"].buttons.imageUploadButton, {
      icon: 'image',
      tooltip: 'Add Image',
      onAction: openImgModal
    });
    // editing an existing image
    editor.ui.registry.addButton(_tinyMCE["default"].buttons.editImageSettings, {
      icon: 'image',
      tooltip: 'Edit Image Settings',
      onAction: _module.openModalWithSelectedImage({
        editor: editor,
        setImage: setImage,
        openImgModal: openImgModal
      })
    });
    // overriding the code plugin's icon with 'HTML' text
    editor.ui.registry.addButton(_tinyMCE["default"].buttons.code, {
      text: 'HTML',
      tooltip: 'Source code',
      onAction: openSourceCodeModal
    });
    // add a custom simple inline code block formatter.
    var setupCodeFormatting = function setupCodeFormatting(api) {
      editor.formatter.formatChanged('code', function (active) {
        return api.setActive(active);
      });
    };
    var toggleCodeFormatting = function toggleCodeFormatting() {
      editor.formatter.toggle('code');
      editor.undoManager.add();
      editor.focus();
    };
    editor.ui.registry.addToggleButton(_tinyMCE["default"].buttons.codeBlock, {
      icon: 'sourcecode',
      tooltip: 'Code Block',
      onAction: toggleCodeFormatting,
      onSetup: setupCodeFormatting
    });
    // add a custom simple inline label formatter.
    var toggleLabelFormatting = function toggleLabelFormatting() {
      editor.execCommand('mceToggleFormat', false, 'label');
    };
    editor.ui.registry.addIcon('textToSpeech', _tinyMCE["default"].textToSpeechIcon);
    editor.ui.registry.addButton('customLabelButton', {
      icon: 'textToSpeech',
      text: 'Label',
      tooltip: 'Apply a "Question" label to specific text, recognized by screen readers. Recommended to improve accessibility.',
      onAction: toggleLabelFormatting
    });
    if (editorType === 'expandable') {
      editor.on('init', function () {
        _module.replaceStaticwithAsset({
          editor: editor,
          imageUrls: imageUrls,
          editorType: editorType,
          lmsEndpointUrl: lmsEndpointUrl,
          updateContent: updateContent
        });
      });
    }
    editor.on('ExecCommand', function (e) {
      if (editorType === 'text' && e.command === 'mceFocus') {
        _module.replaceStaticwithAsset({
          editor: editor,
          imageUrls: imageUrls
        });
      }
      if (e.command === 'RemoveFormat') {
        editor.formatter.remove('blockquote');
        editor.formatter.remove('label');
      }
    });
  };
};

// imagetools_cors_hosts needs a protocol-sanatized url
var removeProtocolFromUrl = exports.removeProtocolFromUrl = function removeProtocolFromUrl(url) {
  return url.replace(/^https?:\/\//, '');
};
var editorConfig = exports.editorConfig = function editorConfig(_ref4) {
  var editorType = _ref4.editorType,
    setEditorRef = _ref4.setEditorRef,
    textValue = _ref4.textValue,
    images = _ref4.images,
    lmsEndpointUrl = _ref4.lmsEndpointUrl,
    studioEndpointUrl = _ref4.studioEndpointUrl,
    isLibrary = _ref4.isLibrary,
    placeholder = _ref4.placeholder,
    initializeEditor = _ref4.initializeEditor,
    openImgModal = _ref4.openImgModal,
    openSourceCodeModal = _ref4.openSourceCodeModal,
    setSelection = _ref4.setSelection,
    updateContent = _ref4.updateContent,
    minHeight = _ref4.minHeight;
  var _pluginConfig = (0, _pluginConfig2["default"])({
      isLibrary: isLibrary,
      placeholder: placeholder,
      editorType: editorType
    }),
    toolbar = _pluginConfig.toolbar,
    config = _pluginConfig.config,
    plugins = _pluginConfig.plugins,
    imageToolbar = _pluginConfig.imageToolbar,
    quickbarsInsertToolbar = _pluginConfig.quickbarsInsertToolbar,
    quickbarsSelectionToolbar = _pluginConfig.quickbarsSelectionToolbar;
  return {
    onInit: function onInit(evt, editor) {
      setEditorRef(editor);
      if (editorType === 'text') {
        initializeEditor();
      }
    },
    initialValue: textValue || '',
    init: _objectSpread(_objectSpread({}, config), {}, {
      skin: false,
      content_css: false,
      content_style: _tinyMCEStyles["default"],
      min_height: minHeight,
      contextmenu: 'link table',
      document_base_url: lmsEndpointUrl,
      imagetools_cors_hosts: [removeProtocolFromUrl(lmsEndpointUrl), removeProtocolFromUrl(studioEndpointUrl)],
      imagetools_toolbar: imageToolbar,
      formats: {
        label: {
          inline: 'label'
        }
      },
      setup: _module.setupCustomBehavior({
        editorType: editorType,
        updateContent: updateContent,
        openImgModal: openImgModal,
        openSourceCodeModal: openSourceCodeModal,
        lmsEndpointUrl: lmsEndpointUrl,
        setImage: setSelection,
        imageUrls: _module.fetchImageUrls(images)
      }),
      quickbars_insert_toolbar: quickbarsInsertToolbar,
      quickbars_selection_toolbar: quickbarsSelectionToolbar,
      quickbars_image_toolbar: false,
      toolbar: toolbar,
      plugins: plugins,
      valid_children: '+body[style]',
      valid_elements: '*[*]',
      entity_encoding: 'utf-8',
      toolbar_sticky: false
    })
  };
};
var prepareEditorRef = exports.prepareEditorRef = function prepareEditorRef() {
  var editorRef = (0, _react.useRef)(null);
  var setEditorRef = (0, _react.useCallback)(function (ref) {
    editorRef.current = ref;
  }, []);
  var _module$state$refRead = _module.state.refReady(false),
    _module$state$refRead2 = _slicedToArray(_module$state$refRead, 2),
    refReady = _module$state$refRead2[0],
    setRefReady = _module$state$refRead2[1];
  (0, _react.useEffect)(function () {
    return setRefReady(true);
  }, []);
  return {
    editorRef: editorRef,
    refReady: refReady,
    setEditorRef: setEditorRef
  };
};
var imgModalToggle = exports.imgModalToggle = function imgModalToggle() {
  var _module$state$isImage = _module.state.isImageModalOpen(false),
    _module$state$isImage2 = _slicedToArray(_module$state$isImage, 2),
    isImgOpen = _module$state$isImage2[0],
    setIsOpen = _module$state$isImage2[1];
  return {
    isImgOpen: isImgOpen,
    openImgModal: function openImgModal() {
      return setIsOpen(true);
    },
    closeImgModal: function closeImgModal() {
      return setIsOpen(false);
    }
  };
};
var sourceCodeModalToggle = exports.sourceCodeModalToggle = function sourceCodeModalToggle(editorRef) {
  var _module$state$isSourc = _module.state.isSourceCodeModalOpen(false),
    _module$state$isSourc2 = _slicedToArray(_module$state$isSourc, 2),
    isSourceCodeOpen = _module$state$isSourc2[0],
    setIsOpen = _module$state$isSourc2[1];
  return {
    isSourceCodeOpen: isSourceCodeOpen,
    openSourceCodeModal: function openSourceCodeModal() {
      return setIsOpen(true);
    },
    closeSourceCodeModal: function closeSourceCodeModal() {
      setIsOpen(false);
      editorRef.current.focus();
    }
  };
};
var openModalWithSelectedImage = exports.openModalWithSelectedImage = function openModalWithSelectedImage(_ref5) {
  var editor = _ref5.editor,
    setImage = _ref5.setImage,
    openImgModal = _ref5.openImgModal;
  return function () {
    var imgHTML = editor.selection.getNode();
    setImage({
      externalUrl: imgHTML.src,
      altText: imgHTML.alt,
      width: imgHTML.width,
      height: imgHTML.height
    });
    openImgModal();
  };
};
var filterAssets = exports.filterAssets = function filterAssets(_ref6) {
  var assets = _ref6.assets;
  var images = [];
  var assetsList = Object.values(assets);
  if (assetsList.length > 0) {
    images = assetsList.filter(function (asset) {
      var _asset$contentType;
      return asset === null || asset === void 0 || (_asset$contentType = asset.contentType) === null || _asset$contentType === void 0 ? void 0 : _asset$contentType.startsWith('image/');
    });
  }
  return images;
};
var setAssetToStaticUrl = exports.setAssetToStaticUrl = function setAssetToStaticUrl(_ref7) {
  var editorValue = _ref7.editorValue,
    assets = _ref7.assets,
    lmsEndpointUrl = _ref7.lmsEndpointUrl;
  /* For assets to remain usable across course instances, we convert their url to be course-agnostic.
   * For example, /assets/course/<asset hash>/filename gets converted to /static/filename. This is
   * important for rerunning courses and importing/exporting course as the /static/ part of the url
   * allows the asset to be mapped to the new course run.
  */

  // TODO: should probably move this to when the assets are being looped through in the off chance that
  // some of the text in the editor contains the lmsEndpointUrl
  var regExLmsEndpointUrl = RegExp(lmsEndpointUrl, 'g');
  var content = editorValue.replace(regExLmsEndpointUrl, '');
  var assetUrls = [];
  var assetsList = Object.values(assets);
  assetsList.forEach(function (asset) {
    assetUrls.push({
      portableUrl: asset.portableUrl,
      displayName: asset.displayName
    });
  });
  var assetSrcs = typeof content === 'string' ? content.split(/(src="|src=&quot;|href="|href=&quot)/g) : [];
  assetSrcs.forEach(function (src) {
    if (src.startsWith('/asset') && assetUrls.length > 0) {
      var assetBlockName = src.substring(src.indexOf('@') + 1, src.search(/("|&quot;)/));
      var nameFromEditorSrc = assetBlockName.substring(assetBlockName.indexOf('@') + 1);
      var nameFromStudioSrc = assetBlockName.substring(assetBlockName.indexOf('/') + 1);
      var portableUrl;
      assetUrls.forEach(function (url) {
        var displayName = url.displayName.replace(/\s/g, '_');
        if (displayName === nameFromEditorSrc || displayName === nameFromStudioSrc) {
          portableUrl = url.portableUrl;
        }
      });
      if (portableUrl) {
        var currentSrc = src.substring(0, src.search(/("|&quot;)/));
        var updatedContent = content.replace(currentSrc, portableUrl);
        content = updatedContent;
      }
    }
  });
  return content;
};
var fetchImageUrls = exports.fetchImageUrls = function fetchImageUrls(images) {
  var imageUrls = [];
  images.forEach(function (image) {
    imageUrls.push({
      staticFullUrl: image.staticFullUrl,
      displayName: image.displayName
    });
  });
  return imageUrls;
};
var selectedImage = exports.selectedImage = function selectedImage(val) {
  var _module$state$imageSe = _module.state.imageSelection(val),
    _module$state$imageSe2 = _slicedToArray(_module$state$imageSe, 2),
    selection = _module$state$imageSe2[0],
    setSelection = _module$state$imageSe2[1];
  return {
    clearSelection: function clearSelection() {
      return setSelection(null);
    },
    selection: selection,
    setSelection: setSelection
  };
};
//# sourceMappingURL=hooks.js.map