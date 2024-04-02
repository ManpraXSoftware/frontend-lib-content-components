"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.prepareShowBtnEscapeHTML = exports.escapeHTMLSpecialChars = exports.createCodeMirrorDomNode = exports.cleanHTML = void 0;
var _react = _interopRequireWildcard(require("react"));
var _codemirror = require("codemirror");
var _state = require("@codemirror/state");
var _view = require("@codemirror/view");
var _langHtml = require("@codemirror/lang-html");
var _langXml = require("@codemirror/lang-xml");
var _constants = _interopRequireDefault(require("./constants"));
require("./index.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CODEMIRROR_LANGUAGES = {
  HTML: 'html',
  XML: 'xml'
};
var state = exports.state = {
  showBtnEscapeHTML: function showBtnEscapeHTML(val) {
    return _react["default"].useState(val);
  }
};
var prepareShowBtnEscapeHTML = exports.prepareShowBtnEscapeHTML = function prepareShowBtnEscapeHTML() {
  var _state$showBtnEscapeH = state.showBtnEscapeHTML(true),
    _state$showBtnEscapeH2 = _slicedToArray(_state$showBtnEscapeH, 2),
    visibility = _state$showBtnEscapeH2[0],
    setVisibility = _state$showBtnEscapeH2[1];
  var hide = function hide() {
    return setVisibility(false);
  };
  return {
    showBtnEscapeHTML: visibility,
    hideBtn: hide
  };
};
var cleanHTML = exports.cleanHTML = function cleanHTML(_ref) {
  var initialText = _ref.initialText;
  var translateRegex = new RegExp("&(".concat(Object.keys(_constants["default"]).join('|'), ");"), 'g');
  var translator = function translator($0, $1) {
    return _constants["default"][$1];
  };
  return initialText.replace(translateRegex, translator);
};
var createCodeMirrorDomNode = exports.createCodeMirrorDomNode = function createCodeMirrorDomNode(_ref2) {
  var ref = _ref2.ref,
    initialText = _ref2.initialText,
    upstreamRef = _ref2.upstreamRef,
    lang = _ref2.lang;
  (0, _react.useEffect)(function () {
    var languageExtension = lang === CODEMIRROR_LANGUAGES.HTML ? (0, _langHtml.html)() : (0, _langXml.xml)();
    var cleanText = cleanHTML({
      initialText: initialText
    });
    var newState = _state.EditorState.create({
      doc: cleanText,
      extensions: [_codemirror.basicSetup, languageExtension, _view.EditorView.lineWrapping]
    });
    var view = new _view.EditorView({
      state: newState,
      parent: ref.current
    });
    // eslint-disable-next-line no-param-reassign
    upstreamRef.current = view;
    view.focus();
    return function () {
      // called on cleanup
      view.destroy();
    };
  }, []);
};
var escapeHTMLSpecialChars = exports.escapeHTMLSpecialChars = function escapeHTMLSpecialChars(_ref3) {
  var ref = _ref3.ref,
    hideBtn = _ref3.hideBtn;
  var text = ref.current.state.doc.toString();
  var pos = 0;
  var changes = [];
  Object.keys(_constants["default"]).forEach(function (escapedKeyword) {
    // eslint-disable-next-line no-cond-assign
    for (var next; (next = text.indexOf(_constants["default"][escapedKeyword], pos)) > -1;) {
      changes.push({
        from: next,
        to: next + 1,
        insert: "&".concat(escapedKeyword, ";")
      });
      pos = next + 1;
    }
  });
  ref.current.dispatch({
    changes: changes
  });
  hideBtn();
};
//# sourceMappingURL=hooks.js.map