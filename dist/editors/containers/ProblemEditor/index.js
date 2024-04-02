"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.ProblemEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _SelectTypeModal = _interopRequireDefault(require("./components/SelectTypeModal"));
var _EditProblemView = _interopRequireDefault(require("./components/EditProblemView"));
var _redux = require("../../data/redux");
var _requests = require("../../data/constants/requests");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProblemEditor = exports.ProblemEditor = function ProblemEditor(_ref) {
  var onClose = _ref.onClose,
    problemType = _ref.problemType,
    blockFinished = _ref.blockFinished,
    blockFailed = _ref.blockFailed,
    studioViewFinished = _ref.studioViewFinished,
    blockValue = _ref.blockValue,
    initializeProblemEditor = _ref.initializeProblemEditor,
    assetsFinished = _ref.assetsFinished,
    advancedSettingsFinished = _ref.advancedSettingsFinished;
  _react["default"].useEffect(function () {
    if (blockFinished && studioViewFinished && assetsFinished && !blockFailed) {
      initializeProblemEditor(blockValue);
    }
  }, [blockFinished, studioViewFinished, assetsFinished, blockFailed]);
  if (!blockFinished || !studioViewFinished || !assetsFinished || !advancedSettingsFinished) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-center p-6",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
        animation: "border",
        className: "m-3",
        screenreadertext: "Loading Problem Editor"
      })
    });
  }
  if (blockFailed) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-center p-6",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].blockFailed))
    });
  }
  if (problemType === null) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectTypeModal["default"], {
      onClose: onClose
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditProblemView["default"], {
    onClose: onClose
  });
};
ProblemEditor.defaultProps = {
  assetsFinished: null
};
ProblemEditor.propTypes = {
  onClose: _propTypes["default"].func.isRequired,
  // redux
  assetsFinished: _propTypes["default"].bool,
  advancedSettingsFinished: _propTypes["default"].bool.isRequired,
  blockFinished: _propTypes["default"].bool.isRequired,
  blockFailed: _propTypes["default"].bool.isRequired,
  studioViewFinished: _propTypes["default"].bool.isRequired,
  problemType: _propTypes["default"].string.isRequired,
  initializeProblemEditor: _propTypes["default"].func.isRequired,
  blockValue: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    blockFinished: _redux.selectors.requests.isFinished(state, {
      requestKey: _requests.RequestKeys.fetchBlock
    }),
    blockFailed: _redux.selectors.requests.isFailed(state, {
      requestKey: _requests.RequestKeys.fetchBlock
    }),
    studioViewFinished: _redux.selectors.requests.isFinished(state, {
      requestKey: _requests.RequestKeys.fetchStudioView
    }),
    problemType: _redux.selectors.problem.problemType(state),
    blockValue: _redux.selectors.app.blockValue(state),
    assetsFinished: _redux.selectors.requests.isFinished(state, {
      requestKey: _requests.RequestKeys.fetchAssets
    }),
    advancedSettingsFinished: _redux.selectors.requests.isFinished(state, {
      requestKey: _requests.RequestKeys.fetchAdvancedSettings
    })
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {
  initializeProblemEditor: _redux.thunkActions.problem.initializeProblem
};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProblemEditor));
//# sourceMappingURL=index.js.map