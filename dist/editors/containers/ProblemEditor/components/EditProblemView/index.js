"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports["default"] = exports.EditProblemView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _paragon = require("@edx/paragon");
var _AnswerWidget = _interopRequireDefault(require("./AnswerWidget"));
var _SettingsWidget = _interopRequireDefault(require("./SettingsWidget"));
var _QuestionWidget = _interopRequireDefault(require("./QuestionWidget"));
var _EditorContainer = _interopRequireDefault(require("../../../EditorContainer"));
var _redux = require("../../../../data/redux");
var _RawEditor = _interopRequireDefault(require("../../../../sharedComponents/RawEditor"));
var _problem = require("../../../../data/constants/problem");
var _hooks = require("./hooks");
require("./index.scss");
var _ExplanationWidget = _interopRequireDefault(require("./ExplanationWidget"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var EditProblemView = exports.EditProblemView = function EditProblemView(_ref) {
  var problemType = _ref.problemType,
    problemState = _ref.problemState,
    assets = _ref.assets,
    lmsEndpointUrl = _ref.lmsEndpointUrl;
  var editorRef = (0, _react.useRef)(null);
  var isAdvancedProblemType = problemType === _problem.ProblemTypeKeys.ADVANCED;
  var getContent = (0, _hooks.parseState)({
    problem: problemState,
    isAdvanced: isAdvancedProblemType,
    ref: editorRef,
    assets: assets,
    lmsEndpointUrl: lmsEndpointUrl
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditorContainer["default"], {
    getContent: getContent,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "editProblemView d-flex flex-row flex-nowrap justify-content-end",
      children: [isAdvancedProblemType ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
        fluid: true,
        className: "advancedEditorTopMargin p-0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RawEditor["default"], {
          editorRef: editorRef,
          lang: "xml",
          content: problemState.rawOLX
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "flex-grow-1 mb-5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_QuestionWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExplanationWidget["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnswerWidget["default"], {
          problemType: problemType
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "editProblemView-settingsColumn",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SettingsWidget["default"], {
          problemType: problemType
        })
      })]
    })
  });
};
EditProblemView.defaultProps = {
  assets: null,
  lmsEndpointUrl: null
};
EditProblemView.propTypes = {
  problemType: _propTypes["default"].string.isRequired,
  // eslint-disable-next-line
  problemState: _propTypes["default"].any.isRequired,
  assets: _propTypes["default"].shape({}),
  lmsEndpointUrl: _propTypes["default"].string
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    assets: _redux.selectors.app.assets(state),
    lmsEndpointUrl: _redux.selectors.app.lmsEndpointUrl(state),
    problemType: _redux.selectors.problem.problemType(state),
    problemState: _redux.selectors.problem.completeState(state)
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps)(EditProblemView);
//# sourceMappingURL=index.js.map