"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nullMethod = exports.navigateTo = exports.navigateCallback = exports.getContent = void 0;
var appHooks = _interopRequireWildcard(require("../../hooks"));
var _hooks2 = require("../../sharedComponents/TinyMceWidget/hooks");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var nullMethod = exports.nullMethod = appHooks.nullMethod,
  navigateCallback = exports.navigateCallback = appHooks.navigateCallback,
  navigateTo = exports.navigateTo = appHooks.navigateTo;
var getContent = exports.getContent = function getContent(_ref) {
  var editorRef = _ref.editorRef,
    isRaw = _ref.isRaw,
    assets = _ref.assets;
  return function () {
    var _editorRef$current;
    var content = isRaw && editorRef && editorRef.current ? editorRef.current.state.doc.toString() : (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.getContent();
    return (0, _hooks2.setAssetToStaticUrl)({
      editorValue: content,
      assets: assets
    });
  };
};
//# sourceMappingURL=hooks.js.map