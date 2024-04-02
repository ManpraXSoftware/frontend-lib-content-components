"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseState = exports.fetchEditorContent = void 0;
require("tinymce");
var _ReactStateSettingsParser = _interopRequireDefault(require("../../data/ReactStateSettingsParser"));
var _ReactStateOLXParser = _interopRequireDefault(require("../../data/ReactStateOLXParser"));
var _hooks = require("../../../../sharedComponents/TinyMceWidget/hooks");
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
var fetchEditorContent = exports.fetchEditorContent = function fetchEditorContent(_ref) {
  var format = _ref.format;
  var editorObject = {
    hints: []
  };
  var EditorsArray = window.tinymce.editors;
  Object.entries(EditorsArray).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      id = _ref3[0],
      editor = _ref3[1];
    if (Number.isNaN(parseInt(id))) {
      if (id.startsWith('answer')) {
        var answers = editorObject.answers;
        var answerId = id.substring(id.indexOf('-') + 1);
        editorObject.answers = _objectSpread(_objectSpread({}, answers), {}, _defineProperty({}, answerId, editor.getContent({
          format: format
        })));
      } else if (id.includes('Feedback')) {
        var selectedFeedback = editorObject.selectedFeedback,
          unselectedFeedback = editorObject.unselectedFeedback,
          groupFeedback = editorObject.groupFeedback;
        var feedbackId = id.substring(id.indexOf('-') + 1);
        if (id.startsWith('selected')) {
          editorObject.selectedFeedback = _objectSpread(_objectSpread({}, selectedFeedback), {}, _defineProperty({}, feedbackId, editor.getContent({
            format: format
          })));
        }
        if (id.startsWith('unselected')) {
          editorObject.unselectedFeedback = _objectSpread(_objectSpread({}, unselectedFeedback), {}, _defineProperty({}, feedbackId, editor.getContent({
            format: format
          })));
        }
        if (id.startsWith('group')) {
          editorObject.groupFeedback = _objectSpread(_objectSpread({}, groupFeedback), {}, _defineProperty({}, feedbackId, editor.getContent({
            format: format
          })));
        }
      } else if (id.startsWith('hint')) {
        var hints = editorObject.hints;
        hints.push(editor.getContent({
          format: format
        }));
      } else {
        editorObject[id] = editor.getContent();
      }
    }
  });
  return editorObject;
};
var parseState = exports.parseState = function parseState(_ref4) {
  var problem = _ref4.problem,
    isAdvanced = _ref4.isAdvanced,
    ref = _ref4.ref,
    assets = _ref4.assets,
    lmsEndpointUrl = _ref4.lmsEndpointUrl;
  return function () {
    var _ref$current;
    var editorObject = fetchEditorContent({
      format: ''
    });
    var reactSettingsParser = new _ReactStateSettingsParser["default"](problem);
    var reactOLXParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: editorObject
    });
    var reactBuiltOlx = (0, _hooks.setAssetToStaticUrl)({
      editorValue: reactOLXParser.buildOLX(),
      assets: assets,
      lmsEndpointUrl: lmsEndpointUrl
    });
    var rawOLX = ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.state.doc.toString();
    return {
      settings: reactSettingsParser.getSettings(),
      olx: isAdvanced ? rawOLX : reactBuiltOlx
    };
  };
};
//# sourceMappingURL=hooks.js.map