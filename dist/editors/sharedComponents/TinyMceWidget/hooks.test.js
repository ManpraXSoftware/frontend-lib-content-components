"use strict";

var _testUtils = require("../../../testUtils");
var _tinyMCE = _interopRequireDefault(require("../../data/constants/tinyMCE"));
var _utils = require("../../utils");
var _pluginConfig = _interopRequireDefault(require("./pluginConfig"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('react', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
    createRef: jest.fn(function (val) {
      return {
        ref: val
      };
    }),
    useRef: jest.fn(function (val) {
      return {
        current: val
      };
    }),
    useEffect: jest.fn(),
    useCallback: function useCallback(cb, prereqs) {
      return {
        cb: cb,
        prereqs: prereqs
      };
    }
  });
});
var state = new _testUtils.MockUseState(_module);
var moduleKeys = (0, _utils.keyStore)(_module);
var hook;
var output;
var mockNode = {
  src: 'sOmEuRl.cOm',
  alt: 'aLt tExt',
  width: 2022,
  height: 1619
};
describe('TinyMceEditor hooks', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('state hooks', function () {
    state.testGetter(state.keys.isImageModalOpen);
    state.testGetter(state.keys.isSourceCodeModalOpen);
    state.testGetter(state.keys.imageSelection);
  });
  describe('non-state hooks', function () {
    beforeEach(function () {
      state.mock();
    });
    afterEach(function () {
      state.restore();
    });
    describe('setupCustomBehavior', function () {
      test('It calls addButton and addToggleButton in the editor, but openModal is not called', function () {
        var addButton = jest.fn();
        var addIcon = jest.fn();
        var addToggleButton = jest.fn();
        var openImgModal = jest.fn();
        var openSourceCodeModal = jest.fn();
        var setImage = jest.fn();
        var updateContent = jest.fn();
        var editorType = 'SOmeEDitor';
        var lmsEndpointUrl = 'sOmEvaLue.cOm';
        var editor = {
          ui: {
            registry: {
              addButton: addButton,
              addToggleButton: addToggleButton,
              addIcon: addIcon
            }
          },
          on: jest.fn()
        };
        var mockOpenModalWithImage = function mockOpenModalWithImage(args) {
          return {
            openModalWithSelectedImage: args
          };
        };
        var expectedSettingsAction = mockOpenModalWithImage({
          editor: editor,
          setImage: setImage,
          openImgModal: openImgModal
        });
        var toggleCodeFormatting = expect.any(Function);
        var toggleLabelFormatting = expect.any(Function);
        var setupCodeFormatting = expect.any(Function);
        jest.spyOn(_module, moduleKeys.openModalWithSelectedImage).mockImplementationOnce(mockOpenModalWithImage);
        output = _module.setupCustomBehavior({
          editorType: editorType,
          updateContent: updateContent,
          openImgModal: openImgModal,
          openSourceCodeModal: openSourceCodeModal,
          setImage: setImage,
          lmsEndpointUrl: lmsEndpointUrl
        })(editor);
        expect(addIcon.mock.calls).toEqual([['textToSpeech', _tinyMCE["default"].textToSpeechIcon]]);
        expect(addButton.mock.calls).toEqual([[_tinyMCE["default"].buttons.imageUploadButton, {
          icon: 'image',
          tooltip: 'Add Image',
          onAction: openImgModal
        }], [_tinyMCE["default"].buttons.editImageSettings, {
          icon: 'image',
          tooltip: 'Edit Image Settings',
          onAction: expectedSettingsAction
        }], [_tinyMCE["default"].buttons.code, {
          text: 'HTML',
          tooltip: 'Source code',
          onAction: openSourceCodeModal
        }], ['customLabelButton', {
          icon: 'textToSpeech',
          text: 'Label',
          tooltip: 'Apply a "Question" label to specific text, recognized by screen readers. Recommended to improve accessibility.',
          onAction: toggleLabelFormatting
        }]]);
        expect(addToggleButton.mock.calls).toEqual([[_tinyMCE["default"].buttons.codeBlock, {
          icon: 'sourcecode',
          tooltip: 'Code Block',
          onAction: toggleCodeFormatting,
          onSetup: setupCodeFormatting
        }]]);
        expect(openImgModal).not.toHaveBeenCalled();
      });
    });
    describe('parseContentForLabels', function () {
      test('it calls getContent and updateQuestion for some content', function () {
        var editor = {
          getContent: jest.fn(function () {
            return '<p><label>Some question label</label></p><p>some content <label>around a label</label> followed by more text</p><img src="/static/soMEImagEURl1.jpeg"/>';
          })
        };
        var updateContent = jest.fn();
        var content = '<p><label>Some question label</label></p><p>some content </p><p><label>around a label</label></p><p> followed by more text</p><img src="/static/soMEImagEURl1.jpeg"/>';
        _module.parseContentForLabels({
          editor: editor,
          updateContent: updateContent
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(updateContent).toHaveBeenCalledWith(content);
      });
      test('it calls getContent and updateQuestion for empty content', function () {
        var editor = {
          getContent: jest.fn(function () {
            return '';
          })
        };
        var updateContent = jest.fn();
        var content = '';
        _module.parseContentForLabels({
          editor: editor,
          updateContent: updateContent
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(updateContent).toHaveBeenCalledWith(content);
      });
    });
    describe('replaceStaticwithAsset', function () {
      test('it calls getContent and setContent for text editor', function () {
        var editor = {
          getContent: jest.fn(function () {
            return '<img src="/static/soMEImagEURl1.jpeg"/>';
          }),
          setContent: jest.fn()
        };
        var imageUrls = [{
          staticFullUrl: '/assets/soMEImagEURl1.jpeg',
          displayName: 'soMEImagEURl1.jpeg'
        }];
        var lmsEndpointUrl = 'sOmEvaLue.cOm';
        _module.replaceStaticwithAsset({
          editor: editor,
          imageUrls: imageUrls,
          lmsEndpointUrl: lmsEndpointUrl
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(editor.setContent).toHaveBeenCalled();
      });
      test('it calls getContent and updateContent for expandable editor', function () {
        var editor = {
          getContent: jest.fn(function () {
            return '<img src="/static/soMEImagEURl1.jpeg"/>';
          })
        };
        var imageUrls = [{
          staticFullUrl: '/assets/soMEImagEURl1.jpeg',
          displayName: 'soMEImagEURl1.jpeg'
        }];
        var lmsEndpointUrl = 'sOmEvaLue.cOm';
        var editorType = 'expandable';
        var updateContent = jest.fn();
        _module.replaceStaticwithAsset({
          editor: editor,
          imageUrls: imageUrls,
          editorType: editorType,
          lmsEndpointUrl: lmsEndpointUrl,
          updateContent: updateContent
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(updateContent).toHaveBeenCalled();
      });
    });
    describe('setAssetToStaticUrl', function () {
      it('returns content with updated img links', function () {
        var editorValue = '<img src="/asset@asset-block/soME_ImagE_URl1"/> <a href="/asset@soMEImagEURl">testing link</a>';
        var assets = [{
          portableUrl: '/static/soMEImagEURl',
          displayName: 'soMEImagEURl'
        }, {
          portableUrl: '/static/soME_ImagE_URl1',
          displayName: 'soME ImagE URl1'
        }];
        var lmsEndpointUrl = 'sOmEvaLue.cOm';
        var content = _module.setAssetToStaticUrl({
          editorValue: editorValue,
          assets: assets,
          lmsEndpointUrl: lmsEndpointUrl
        });
        expect(content).toEqual('<img src="/static/soME_ImagE_URl1"/> <a href="/static/soMEImagEURl">testing link</a>');
      });
    });
    describe('editorConfig', function () {
      var props = {
        textValue: null,
        editorType: 'text',
        lmsEndpointUrl: 'sOmEuRl.cOm',
        studioEndpointUrl: 'sOmEoThEruRl.cOm',
        images: [{
          staTICUrl: '/assets/sOmEuiMAge'
        }],
        isLibrary: false
      };
      var evt = 'fakeEvent';
      var editor = 'myEditor';
      var setupCustomBehavior = function setupCustomBehavior(args) {
        return {
          setupCustomBehavior: args
        };
      };
      beforeEach(function () {
        props.setEditorRef = jest.fn();
        props.openImgModal = jest.fn();
        props.openSourceCodeModal = jest.fn();
        props.initializeEditor = jest.fn();
        props.updateContent = jest.fn();
        jest.spyOn(_module, moduleKeys.setupCustomBehavior).mockImplementationOnce(setupCustomBehavior);
        output = _module.editorConfig(props);
      });
      describe('text editor plugins and toolbar', function () {
        test('It configures plugins and toolbars correctly', function () {
          var pluginProps = {
            isLibrary: props.isLibrary,
            editorType: props.editorType
          };
          expect(output.init.plugins).toEqual((0, _pluginConfig["default"])(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).toolbar);
          Object.keys((0, _pluginConfig["default"])(pluginProps).config).forEach(function (key) {
            expect(output.init[key]).toEqual((0, _pluginConfig["default"])(pluginProps).config[key]);
          });
          // Commented out as we investigate whether this is only needed for image proxy
          // expect(output.init.imagetools_cors_hosts).toMatchObject([props.lmsEndpointUrl]);
        });
      });
      describe('text editor plugins and toolbar for content library', function () {
        test('It configures plugins and toolbars correctly', function () {
          var pluginProps = {
            isLibrary: true,
            editorType: props.editorType
          };
          output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
            isLibrary: true
          }));
          expect(output.init.plugins).toEqual((0, _pluginConfig["default"])(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).toolbar);
          expect(output.init.quickbars_insert_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).quickbarsInsertToolbar);
          expect(output.init.quickbars_selection_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).quickbarsSelectionToolbar);
          Object.keys((0, _pluginConfig["default"])(pluginProps).config).forEach(function (key) {
            expect(output.init[key]).toEqual((0, _pluginConfig["default"])(pluginProps).config[key]);
          });
        });
      });
      describe('problem editor question plugins and toolbar', function () {
        test('It configures plugins and toolbars correctly', function () {
          var pluginProps = {
            isLibrary: props.isLibrary,
            editorType: 'question',
            placeholder: 'soMEtExT'
          };
          output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
            editorType: 'question',
            placeholder: 'soMEtExT'
          }));
          expect(output.init.plugins).toEqual((0, _pluginConfig["default"])(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).toolbar);
          expect(output.init.quickbars_insert_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).quickbarsInsertToolbar);
          expect(output.init.quickbars_selection_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).quickbarsSelectionToolbar);
          Object.keys((0, _pluginConfig["default"])(pluginProps).config).forEach(function (key) {
            expect(output.init[key]).toEqual((0, _pluginConfig["default"])(pluginProps).config[key]);
          });
        });
      });
      describe('expandable text area plugins and toolbar', function () {
        test('It configures plugins, toolbars, and quick toolbars correctly', function () {
          var pluginProps = {
            isLibrary: props.isLibrary,
            editorType: 'expandable',
            placeholder: 'soMEtExT'
          };
          output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
            editorType: 'expandable',
            placeholder: 'soMEtExT'
          }));
          expect(output.init.plugins).toEqual((0, _pluginConfig["default"])(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).toolbar);
          expect(output.init.quickbars_insert_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).quickbarsInsertToolbar);
          expect(output.init.quickbars_selection_toolbar).toEqual((0, _pluginConfig["default"])(pluginProps).quickbarsSelectionToolbar);
          Object.keys((0, _pluginConfig["default"])(pluginProps).config).forEach(function (key) {
            expect(output.init[key]).toEqual((0, _pluginConfig["default"])(pluginProps).config[key]);
          });
        });
      });
      test('It creates an onInit which calls initializeEditor and setEditorRef', function () {
        output.onInit(evt, editor);
        expect(props.setEditorRef).toHaveBeenCalledWith(editor);
        expect(props.initializeEditor).toHaveBeenCalled();
      });
      test('It sets the blockvalue to be empty string by default', function () {
        expect(output.initialValue).toBe('');
      });
      test('It sets the blockvalue to be the blockvalue if nonempty', function () {
        var textValue = 'SomE hTML content';
        output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
          textValue: textValue
        }));
        expect(output.initialValue).toBe(textValue);
      });
      it('calls setupCustomBehavior on setup', function () {
        expect(output.init.setup).toEqual(setupCustomBehavior({
          editorType: props.editorType,
          updateContent: props.updateContent,
          openImgModal: props.openImgModal,
          openSourceCodeModal: props.openSourceCodeModal,
          setImage: props.setSelection,
          imageUrls: _module.fetchImageUrls(props.images),
          lmsEndpointUrl: props.lmsEndpointUrl
        }));
      });
    });
    describe('filterAssets', function () {
      var emptyAssets = {};
      var assets = {
        sOmEaSsET: {
          contentType: 'image/'
        }
      };
      test('returns an empty array', function () {
        var emptyFilterAssets = _module.filterAssets({
          assets: emptyAssets
        });
        expect(emptyFilterAssets).toEqual([]);
      });
      test('returns filtered array of images', function () {
        var FilteredAssets = _module.filterAssets({
          assets: assets
        });
        expect(FilteredAssets).toEqual([{
          contentType: 'image/'
        }]);
      });
    });
    describe('imgModalToggle', function () {
      var hookKey = state.keys.isImageModalOpen;
      beforeEach(function () {
        hook = _module.imgModalToggle();
      });
      test('isOpen: state value', function () {
        expect(hook.isImgOpen).toEqual(state.stateVals[hookKey]);
      });
      test('openModal: calls setter with true', function () {
        hook.openImgModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(true);
      });
      test('closeModal: calls setter with false', function () {
        hook.closeImgModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(false);
      });
    });
    describe('sourceCodeModalToggle', function () {
      var editorRef = {
        current: {
          focus: jest.fn()
        }
      };
      var hookKey = state.keys.isSourceCodeModalOpen;
      beforeEach(function () {
        hook = _module.sourceCodeModalToggle(editorRef);
      });
      test('isOpen: state value', function () {
        expect(hook.isSourceCodeOpen).toEqual(state.stateVals[hookKey]);
      });
      test('openModal: calls setter with true', function () {
        hook.openSourceCodeModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(true);
      });
      test('closeModal: calls setter with false', function () {
        hook.closeSourceCodeModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(false);
      });
    });
    describe('openModalWithSelectedImage', function () {
      test('image is set to be value stored in editor, modal is opened', function () {
        var setImage = jest.fn();
        var openImgModal = jest.fn();
        var editor = {
          selection: {
            getNode: function getNode() {
              return mockNode;
            }
          }
        };
        _module.openModalWithSelectedImage({
          editor: editor,
          openImgModal: openImgModal,
          setImage: setImage
        })();
        expect(setImage).toHaveBeenCalledWith({
          externalUrl: mockNode.src,
          altText: mockNode.alt,
          width: mockNode.width,
          height: mockNode.height
        });
        expect(openImgModal).toHaveBeenCalled();
      });
    });
    describe('selectedImage hooks', function () {
      var val = {
        a: 'VaLUe'
      };
      beforeEach(function () {
        hook = _module.selectedImage(val);
      });
      test('selection: state value', function () {
        expect(hook.selection).toEqual(state.stateVals[state.keys.imageSelection]);
      });
      test('setSelection: setter for value', function () {
        expect(hook.setSelection).toEqual(state.setState[state.keys.imageSelection]);
      });
      test('clearSelection: calls setter with null', function () {
        expect(hook.setSelection).not.toHaveBeenCalled();
        hook.clearSelection();
        expect(hook.setSelection).toHaveBeenCalledWith(null);
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map