"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareSourceCodeModal = exports.getSaveBtnProps = exports["default"] = void 0;
var _react = require("react");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getSaveBtnProps = exports.getSaveBtnProps = function getSaveBtnProps(_ref) {
  var editorRef = _ref.editorRef,
    ref = _ref.ref,
    close = _ref.close;
  return {
    onClick: function onClick() {
      if (editorRef && editorRef.current && ref && ref.current) {
        var content = ref.current.state.doc.toString();
        editorRef.current.setContent(content);
        close();
      }
    }
  };
};
var prepareSourceCodeModal = exports.prepareSourceCodeModal = function prepareSourceCodeModal(_ref2) {
  var editorRef = _ref2.editorRef,
    close = _ref2.close;
  var ref = (0, _react.useRef)();
  var saveBtnProps = _module.getSaveBtnProps({
    editorRef: editorRef,
    ref: ref,
    close: close
  });
  if (editorRef && editorRef.current && typeof editorRef.current.getContent === 'function') {
    var _editorRef$current;
    var value = editorRef === null || editorRef === void 0 || (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.getContent();
    return {
      saveBtnProps: saveBtnProps,
      value: value,
      ref: ref
    };
  }
  return {
    saveBtnProps: saveBtnProps,
    value: null,
    ref: ref
  };
};
var _default = exports["default"] = {
  prepareSourceCodeModal: prepareSourceCodeModal
};
//# sourceMappingURL=hooks.js.map