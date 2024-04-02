"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.AnswersContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = require("./hooks");
var _redux = require("../../../../../data/redux");
var _types = require("../../../../../data/services/cms/types");
var _AnswerOption = _interopRequireDefault(require("./AnswerOption"));
var _Button = _interopRequireDefault(require("../../../../../sharedComponents/Button"));
var _problem = require("../../../../../data/constants/problem");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AnswersContainer = exports.AnswersContainer = function AnswersContainer(_ref) {
  var problemType = _ref.problemType,
    answers = _ref.answers,
    addAnswer = _ref.addAnswer,
    addAnswerRange = _ref.addAnswerRange,
    updateField = _ref.updateField;
  var hasSingleAnswer = (0, _hooks.isSingleAnswerProblem)(problemType);
  (0, _hooks.useAnswerContainer)({
    answers: answers,
    problemType: problemType,
    updateField: updateField
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "answers-container border border-light-700 rounded py-4 pl-4 pr-3",
    children: [answers.map(function (answer) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnswerOption["default"], {
        hasSingleAnswer: hasSingleAnswer,
        answer: answer
      }, answer.id);
    }), problemType !== _problem.ProblemTypeKeys.NUMERIC ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      variant: "add",
      onClick: addAnswer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addAnswerButtonText))
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Toggle, {
        id: "Add-Answer-Or-Answer-Range",
        variant: "tertiary",
        className: "pl-0",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          src: _icons.Add
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addAnswerButtonText))]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Menu, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
          onClick: addAnswer,
          className: "AddAnswerRange ".concat(answers.length === 1 && answers[0].isAnswerRange ? 'disabled' : ''),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addAnswerButtonText))
        }, "add-answer"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
          onClick: addAnswerRange,
          className: "AddAnswerRange ".concat(answers.length > 1 || answers.length === 1 && answers[0].isAnswerRange ? 'disabled' : ''),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addAnswerRangeButtonText))
        }, "add-answer-range")]
      })]
    })]
  });
};
AnswersContainer.propTypes = {
  problemType: _propTypes["default"].string.isRequired,
  answers: _propTypes["default"].arrayOf(_types.answerOptionProps).isRequired,
  addAnswer: _propTypes["default"].func.isRequired,
  addAnswerRange: _propTypes["default"].func.isRequired,
  updateField: _propTypes["default"].func.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    answers: _redux.selectors.problem.answers(state)
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {
  addAnswer: _redux.actions.problem.addAnswer,
  addAnswerRange: _redux.actions.problem.addAnswerRange,
  updateField: _redux.actions.problem.updateField
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AnswersContainer);
//# sourceMappingURL=AnswersContainer.js.map