"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TextEditor = _interopRequireDefault(require("./containers/TextEditor"));
var _VideoEditor = _interopRequireDefault(require("./containers/VideoEditor"));
var _ProblemEditor = _interopRequireDefault(require("./containers/ProblemEditor"));
var _app = require("./data/constants/app");
var _supportedEditors;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // ADDED_EDITOR_IMPORTS GO HERE
var supportedEditors = (_supportedEditors = {}, _defineProperty(_supportedEditors, _app.blockTypes.html, _TextEditor["default"]), _defineProperty(_supportedEditors, _app.blockTypes.video, _VideoEditor["default"]), _defineProperty(_supportedEditors, _app.blockTypes.problem, _ProblemEditor["default"]), _supportedEditors);
var _default = exports["default"] = supportedEditors;
//# sourceMappingURL=supportedEditors.js.map