"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFeedback = exports.useAnswerContainer = exports.state = exports.setUnselectedFeedback = exports.setSelectedFeedback = exports.setAnswerTitle = exports.setAnswer = exports.removeAnswer = exports.isSingleAnswerProblem = exports["default"] = void 0;
var _react = require("react");
var _utils = require("../../../../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
var _redux = require("../../../../../data/redux");
var _problem = require("../../../../../data/constants/problem");
var _hooks2 = require("../hooks");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  isFeedbackVisible: function isFeedbackVisible(val) {
    return (0, _react.useState)(val);
  }
});
var removeAnswer = exports.removeAnswer = function removeAnswer(_ref) {
  var answer = _ref.answer,
    dispatch = _ref.dispatch;
  return function () {
    dispatch(_redux.actions.problem.deleteAnswer({
      id: answer.id,
      correct: answer.correct
    }));
  };
};
var setAnswer = exports.setAnswer = function setAnswer(_ref2) {
  var answer = _ref2.answer,
    hasSingleAnswer = _ref2.hasSingleAnswer,
    dispatch = _ref2.dispatch;
  return function (payload) {
    dispatch(_redux.actions.problem.updateAnswer(_objectSpread({
      id: answer.id,
      hasSingleAnswer: hasSingleAnswer
    }, payload)));
  };
};
var setAnswerTitle = exports.setAnswerTitle = function setAnswerTitle(_ref3) {
  var answer = _ref3.answer,
    hasSingleAnswer = _ref3.hasSingleAnswer,
    dispatch = _ref3.dispatch,
    problemType = _ref3.problemType;
  return function (updatedTitle) {
    var title = updatedTitle;
    if ([_problem.ProblemTypeKeys.TEXTINPUT, _problem.ProblemTypeKeys.NUMERIC, _problem.ProblemTypeKeys.DROPDOWN].includes(problemType)) {
      title = updatedTitle.target.value;
    }
    dispatch(_redux.actions.problem.updateAnswer({
      id: answer.id,
      hasSingleAnswer: hasSingleAnswer,
      title: title
    }));
  };
};
var setSelectedFeedback = exports.setSelectedFeedback = function setSelectedFeedback(_ref4) {
  var answer = _ref4.answer,
    hasSingleAnswer = _ref4.hasSingleAnswer,
    dispatch = _ref4.dispatch;
  return function (e) {
    dispatch(_redux.actions.problem.updateAnswer({
      id: answer.id,
      hasSingleAnswer: hasSingleAnswer,
      selectedFeedback: e.target.value
    }));
  };
};
var setUnselectedFeedback = exports.setUnselectedFeedback = function setUnselectedFeedback(_ref5) {
  var answer = _ref5.answer,
    hasSingleAnswer = _ref5.hasSingleAnswer,
    dispatch = _ref5.dispatch;
  return function (e) {
    dispatch(_redux.actions.problem.updateAnswer({
      id: answer.id,
      hasSingleAnswer: hasSingleAnswer,
      unselectedFeedback: e.target.value
    }));
  };
};
var useFeedback = exports.useFeedback = function useFeedback(answer) {
  var _module$state$isFeedb = _module.state.isFeedbackVisible(false),
    _module$state$isFeedb2 = _slicedToArray(_module$state$isFeedb, 2),
    isFeedbackVisible = _module$state$isFeedb2[0],
    setIsFeedbackVisible = _module$state$isFeedb2[1];
  (0, _react.useEffect)(function () {
    // Show feedback fields if feedback is present
    var isVisible = !!answer.selectedFeedback || !!answer.unselectedFeedback;
    setIsFeedbackVisible(isVisible);
  }, []);
  var toggleFeedback = function toggleFeedback(open) {
    // Do not allow to hide if feedback is added
    var _fetchEditorContent = (0, _hooks2.fetchEditorContent)({
        format: ''
      }),
      selectedFeedback = _fetchEditorContent.selectedFeedback,
      unselectedFeedback = _fetchEditorContent.unselectedFeedback;
    if (!!(selectedFeedback !== null && selectedFeedback !== void 0 && selectedFeedback[answer.id]) || !!(unselectedFeedback !== null && unselectedFeedback !== void 0 && unselectedFeedback[answer.id])) {
      setIsFeedbackVisible(true);
      return;
    }
    setIsFeedbackVisible(open);
  };
  return {
    isFeedbackVisible: isFeedbackVisible,
    toggleFeedback: toggleFeedback
  };
};
var isSingleAnswerProblem = exports.isSingleAnswerProblem = function isSingleAnswerProblem(problemType) {
  return problemType === _problem.ProblemTypeKeys.DROPDOWN;
};
var useAnswerContainer = exports.useAnswerContainer = function useAnswerContainer(_ref6) {
  var answers = _ref6.answers,
    updateField = _ref6.updateField;
  (0, _react.useEffect)(function () {
    var answerCount = 0;
    answers.forEach(function (answer) {
      if (answer.correct) {
        answerCount += 1;
      }
    });
    updateField({
      correctAnswerCount: answerCount
    });
  }, []);
};
var _default = exports["default"] = {
  state: state,
  removeAnswer: removeAnswer,
  setAnswer: setAnswer,
  setAnswerTitle: setAnswerTitle,
  useFeedback: useFeedback,
  isSingleAnswerProblem: isSingleAnswerProblem,
  useAnswerContainer: useAnswerContainer
};
//# sourceMappingURL=hooks.js.map