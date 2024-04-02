"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripNonTextTags = exports.responseKeys = exports.nonQuestionKeys = exports.indexToLetterMap = exports.OLXParser = void 0;
var _fastXmlParser = require("fast-xml-parser");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _problem = require("../../../data/constants/problem");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // Parse OLX to JavaScript objects.
/* eslint no-eval: 0 */
var indexToLetterMap = exports.indexToLetterMap = _toConsumableArray(Array(26)).map(function (val, i) {
  return String.fromCharCode(i + 65);
});
var nonQuestionKeys = exports.nonQuestionKeys = ['@_answer', '@_type', 'additional_answer', 'checkboxgroup', 'choicegroup', 'choiceresponse', 'correcthint', 'demandhint', 'formulaequationinput', 'multiplechoiceresponse', 'numericalresponse', 'optioninput', 'optionresponse', 'responseparam', 'solution', 'stringequalhint', 'stringresponse', 'textline'];
var responseKeys = exports.responseKeys = ['multiplechoiceresponse', 'numericalresponse', 'optionresponse', 'stringresponse', 'choiceresponse', 'multiplechoiceresponse', 'truefalseresponse', 'optionresponse', 'numericalresponse', 'stringresponse', 'customresponse', 'symbolicresponse', 'coderesponse', 'externalresponse', 'formularesponse', 'schematicresponse', 'imageresponse', 'annotationresponse', 'choicetextresponse'];
var stripNonTextTags = exports.stripNonTextTags = function stripNonTextTags(_ref) {
  var input = _ref.input,
    tag = _ref.tag;
  var stripedTags = {};
  Object.entries(input).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    if (key !== tag) {
      stripedTags[key] = value;
    }
  });
  return stripedTags;
};
var OLXParser = exports.OLXParser = /*#__PURE__*/function () {
  function OLXParser(olxString) {
    _classCallCheck(this, OLXParser);
    this.problem = {};
    this.questionData = {};
    var questionOptions = {
      ignoreAttributes: false,
      alwaysCreateTextNode: true,
      preserveOrder: true
    };
    var parserOptions = {
      ignoreAttributes: false,
      alwaysCreateTextNode: true
    };
    var builderOptions = {
      ignoreAttributes: false
    };
    // There are two versions of the parsed XLM because the question requires the order of the
    // parsed data to be preserved. However, all the other widgets need the data grouped by
    // the wrapping tag.
    var questionParser = new _fastXmlParser.XMLParser(questionOptions);
    var parser = new _fastXmlParser.XMLParser(parserOptions);
    this.builder = new _fastXmlParser.XMLBuilder(builderOptions);
    this.parsedOLX = parser.parse(olxString);
    this.parsedQuestionOLX = questionParser.parse(olxString);
    if (_lodashEs["default"].has(this.parsedOLX, 'problem')) {
      this.problem = this.parsedOLX.problem;
      this.questionData = this.parsedQuestionOLX[0].problem;
    }
  }
  _createClass(OLXParser, [{
    key: "parseMultipleChoiceAnswers",
    value: function parseMultipleChoiceAnswers(problemType, widgetName, option) {
      var _this = this;
      var answers = [];
      var data = {};
      var widget = _lodashEs["default"].get(this.problem, "".concat(problemType, ".").concat(widgetName));
      var permissableTags = ['choice', '@_type', 'compoundhint', 'option', '#text'];
      if (_lodashEs["default"].keys(widget).some(function (tag) {
        return !permissableTags.includes(tag);
      })) {
        throw new Error('Misc Tags, reverting to Advanced Editor');
      }
      var choice = _lodashEs["default"].get(widget, option);
      var isComplexAnswer = [_problem.ProblemTypeKeys.SINGLESELECT, _problem.ProblemTypeKeys.MULTISELECT].includes(problemType);
      if (_lodashEs["default"].isEmpty(choice)) {
        answers.push({
          id: indexToLetterMap[answers.length],
          title: '',
          correct: true
        });
      } else if (_lodashEs["default"].isArray(choice)) {
        choice.forEach(function (element, index) {
          var title = element['#text'];
          if (isComplexAnswer) {
            var answerTitle = stripNonTextTags({
              input: element,
              tag: "".concat(option, "hint")
            });
            title = _this.builder.build(answerTitle);
          }
          var correct = eval(element['@_correct'].toLowerCase());
          var id = indexToLetterMap[index];
          var feedback = _this.getAnswerFeedback(element, "".concat(option, "hint"));
          answers.push(_objectSpread({
            id: id,
            correct: correct,
            title: title
          }, feedback));
        });
      } else {
        var title = choice['#text'];
        if (isComplexAnswer) {
          var answerTitle = stripNonTextTags({
            input: choice,
            tag: "".concat(option, "hint")
          });
          title = this.builder.build(answerTitle);
        }
        var feedback = this.getAnswerFeedback(choice, "".concat(option, "hint"));
        answers.push(_objectSpread({
          correct: eval(choice['@_correct'].toLowerCase()),
          id: indexToLetterMap[answers.length],
          title: title
        }, feedback));
      }
      data = {
        answers: answers
      };
      var groupFeedbackList = this.getGroupedFeedback(widget);
      if (groupFeedbackList.length) {
        data = _objectSpread(_objectSpread({}, data), {}, {
          groupFeedbackList: groupFeedbackList
        });
      }
      return data;
    }
  }, {
    key: "getAnswerFeedback",
    value: function getAnswerFeedback(choice, hintKey) {
      var _this2 = this;
      var feedback = {};
      var feedbackKeys = 'selectedFeedback';
      if (_lodashEs["default"].has(choice, hintKey)) {
        var answerFeedback = choice[hintKey];
        if (_lodashEs["default"].isArray(answerFeedback)) {
          answerFeedback.forEach(function (element) {
            if (_lodashEs["default"].has(element, '@_selected')) {
              feedbackKeys = eval(element['@_selected'].toLowerCase()) ? 'selectedFeedback' : 'unselectedFeedback';
            }
            feedback = _objectSpread(_objectSpread({}, feedback), {}, _defineProperty({}, feedbackKeys, _this2.builder.build(element)));
          });
        } else {
          if (_lodashEs["default"].has(answerFeedback, '@_selected')) {
            feedbackKeys = eval(answerFeedback['@_selected'].toLowerCase()) ? 'selectedFeedback' : 'unselectedFeedback';
          }
          feedback = _defineProperty({}, feedbackKeys, this.builder.build(answerFeedback));
        }
      }
      return feedback;
    }
  }, {
    key: "getGroupedFeedback",
    value: function getGroupedFeedback(choices) {
      var _this3 = this;
      var groupFeedback = [];
      if (_lodashEs["default"].has(choices, 'compoundhint')) {
        var groupFeedbackArray = choices.compoundhint;
        if (_lodashEs["default"].isArray(groupFeedbackArray)) {
          groupFeedbackArray.forEach(function (element) {
            var parsedFeedback = stripNonTextTags({
              input: element,
              tag: '@_value'
            });
            groupFeedback.push({
              id: groupFeedback.length,
              answers: element['@_value'].split(' '),
              feedback: _this3.builder.build(parsedFeedback)
            });
          });
        } else {
          var parsedFeedback = stripNonTextTags({
            input: groupFeedbackArray,
            tag: '@_value'
          });
          groupFeedback.push({
            id: groupFeedback.length,
            answers: groupFeedbackArray['@_value'].split(' '),
            feedback: this.builder.build(parsedFeedback)
          });
        }
      }
      return groupFeedback;
    }
  }, {
    key: "parseStringResponse",
    value: function parseStringResponse() {
      var _this4 = this;
      var stringresponse = this.problem.stringresponse;
      var answers = [];
      var answerFeedback = '';
      var additionalStringAttributes = {};
      var data = {};
      var feedback = this.getFeedback(stringresponse);
      answers.push({
        id: indexToLetterMap[answers.length],
        title: stringresponse['@_answer'],
        correct: true,
        selectedFeedback: feedback
      });

      // Parsing additional_answer for string response.
      var additionalAnswer = _lodashEs["default"].get(stringresponse, 'additional_answer', []);
      if (_lodashEs["default"].isArray(additionalAnswer)) {
        additionalAnswer.forEach(function (newAnswer) {
          answerFeedback = _this4.getFeedback(newAnswer);
          answers.push({
            id: indexToLetterMap[answers.length],
            title: newAnswer['@_answer'],
            correct: true,
            selectedFeedback: answerFeedback
          });
        });
      } else {
        answerFeedback = this.getFeedback(additionalAnswer);
        answers.push({
          id: indexToLetterMap[answers.length],
          title: additionalAnswer['@_answer'],
          correct: true,
          selectedFeedback: answerFeedback
        });
      }

      // Parsing stringequalhint for string response.
      var stringEqualHint = _lodashEs["default"].get(stringresponse, 'stringequalhint', []);
      if (_lodashEs["default"].isArray(stringEqualHint)) {
        stringEqualHint.forEach(function (newAnswer) {
          var parsedFeedback = stripNonTextTags({
            input: newAnswer,
            tag: '@_answer'
          });
          answerFeedback = _this4.builder.build(parsedFeedback);
          answers.push({
            id: indexToLetterMap[answers.length],
            title: newAnswer['@_answer'],
            correct: false,
            selectedFeedback: answerFeedback
          });
        });
      } else {
        var parsedFeedback = stripNonTextTags({
          input: stringEqualHint,
          tag: '@_answer'
        });
        answerFeedback = this.builder.build(parsedFeedback);
        answers.push({
          id: indexToLetterMap[answers.length],
          title: stringEqualHint['@_answer'],
          correct: false,
          selectedFeedback: answerFeedback
        });
      }

      // TODO: Support multiple types.
      additionalStringAttributes = {
        type: _lodashEs["default"].get(stringresponse, '@_type'),
        textline: {
          size: _lodashEs["default"].get(stringresponse, 'textline.@_size')
        }
      };
      data = {
        answers: answers,
        additionalStringAttributes: additionalStringAttributes
      };
      return data;
    }
  }, {
    key: "parseNumericResponse",
    value: function parseNumericResponse() {
      var _this5 = this;
      var numericalresponse = this.problem.numericalresponse;
      var answerFeedback = '';
      var answers = [];
      var responseParam = {};
      var feedback = this.getFeedback(numericalresponse);
      if (_lodashEs["default"].has(numericalresponse, 'responseparam')) {
        var type = _lodashEs["default"].get(numericalresponse, 'responseparam.@_type');
        var defaultValue = _lodashEs["default"].get(numericalresponse, 'responseparam.@_default');
        responseParam = _defineProperty({}, type, defaultValue);
      }
      var isAnswerRange = /[([]\d*,\d*[)\]]/gm.test(numericalresponse['@_answer']);
      answers.push(_objectSpread({
        id: indexToLetterMap[answers.length],
        title: numericalresponse['@_answer'],
        correct: true,
        selectedFeedback: feedback,
        isAnswerRange: isAnswerRange
      }, responseParam));

      // Parsing additional_answer for numerical response.
      var additionalAnswer = _lodashEs["default"].get(numericalresponse, 'additional_answer', []);
      if (_lodashEs["default"].isArray(additionalAnswer)) {
        additionalAnswer.forEach(function (newAnswer) {
          answerFeedback = _this5.getFeedback(newAnswer);
          answers.push({
            id: indexToLetterMap[answers.length],
            title: newAnswer['@_answer'],
            correct: true,
            selectedFeedback: answerFeedback
          });
        });
      } else {
        answerFeedback = this.getFeedback(additionalAnswer);
        answers.push({
          id: indexToLetterMap[answers.length],
          title: additionalAnswer['@_answer'],
          correct: true,
          selectedFeedback: answerFeedback,
          isAnswerRange: false
        });
      }
      return {
        answers: answers
      };
    }
  }, {
    key: "parseQuestions",
    value: function parseQuestions(problemType) {
      var options = {
        ignoreAttributes: false,
        preserveOrder: true
      };
      var builder = new _fastXmlParser.XMLBuilder(options);
      var problemArray = _lodashEs["default"].get(this.questionData[0], problemType) || this.questionData;
      var questionArray = [];
      problemArray.forEach(function (tag) {
        var tagName = Object.keys(tag)[0];
        if (!nonQuestionKeys.includes(tagName)) {
          if (tagName === 'script') {
            throw new Error('Script Tag, reverting to Advanced Editor');
          }
          questionArray.push(tag);
        } else if (responseKeys.includes(tagName)) {
          /* <label> and <description> tags often are both valid olx as siblings or children of response type tags.
           They, however, do belong in the question, so we append them to the question.
          */
          tag[tagName].forEach(function (subTag) {
            var subTagName = Object.keys(subTag)[0];
            if (subTagName === 'label' || subTagName === 'description') {
              questionArray.push(subTag);
            }
          });
        }
      });
      var questionString = builder.build(questionArray);
      return questionString.replace(/<description>/gm, '<em>').replace(/<\/description>/gm, '</em>');
    }
  }, {
    key: "getHints",
    value: function getHints() {
      var _this6 = this;
      var hintsObject = [];
      if (_lodashEs["default"].has(this.problem, 'demandhint.hint')) {
        var hint = _lodashEs["default"].get(this.problem, 'demandhint.hint');
        if (_lodashEs["default"].isArray(hint)) {
          hint.forEach(function (element) {
            var hintValue = _this6.builder.build(element);
            hintsObject.push({
              id: hintsObject.length,
              value: hintValue
            });
          });
        } else {
          var hintValue = this.builder.build(hint);
          hintsObject.push({
            id: hintsObject.length,
            value: hintValue
          });
        }
      }
      return hintsObject;
    }
  }, {
    key: "getSolutionExplanation",
    value: function getSolutionExplanation(problemType) {
      if (!_lodashEs["default"].has(this.problem, "".concat(problemType, ".solution")) && !_lodashEs["default"].has(this.problem, 'solution')) {
        return null;
      }
      var solution = _lodashEs["default"].get(this.problem, "".concat(problemType, ".solution"), null) || _lodashEs["default"].get(this.problem, 'solution', null);
      var wrapper = Object.keys(solution)[0];
      if (Object.keys(solution).length === 1 && wrapper === 'div') {
        var parsedSolution = {};
        Object.entries(solution.div).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];
          if (key.indexOf('@_' === -1)) {
            // The redundant "explanation" title should be removed.
            if ((key === 'p' || key === 'h2') && (value['#text'] === 'Explanation' || value[0]['#text'] === 'Explanation')) {
              if (_lodashEs["default"].isArray(value)) {
                value.shift();
                parsedSolution[key] = value;
              }
            } else {
              parsedSolution[key] = value;
            }
          }
        });
        solution = parsedSolution;
      }
      var solutionString = this.builder.build(solution);
      return solutionString;
    }
  }, {
    key: "getFeedback",
    value: function getFeedback(xmlElement) {
      if (!_lodashEs["default"].has(xmlElement, 'correcthint')) {
        return '';
      }
      var feedback = _lodashEs["default"].get(xmlElement, 'correcthint');
      var feedbackString = this.builder.build(feedback);
      return feedbackString;
    }
  }, {
    key: "getProblemType",
    value: function getProblemType() {
      var problemKeys = Object.keys(this.problem);
      var problemTypeKeys = problemKeys.filter(function (key) {
        return Object.values(_problem.ProblemTypeKeys).indexOf(key) !== -1;
      });
      if (problemTypeKeys.length === 0) {
        // a blank problem is a problem which contains only `<problem></problem>` as it's olx.
        // blank problems are not given types, so that a type may be selected.
        if (problemKeys.length === 1 && problemKeys[0] === '#text' && this.problem[problemKeys[0]] === '') {
          return null;
        }
        // if we have no matching problem type, the problem is advanced.
        return _problem.ProblemTypeKeys.ADVANCED;
      }
      // make sure compound problems are treated as advanced
      if (problemTypeKeys.length > 1 || _lodashEs["default"].isArray(this.problem[problemTypeKeys[0]]) && this.problem[problemTypeKeys[0]].length > 1) {
        return _problem.ProblemTypeKeys.ADVANCED;
      }
      var problemType = problemTypeKeys[0];
      return problemType;
    }
  }, {
    key: "getGeneralFeedback",
    value: function getGeneralFeedback(_ref6) {
      var answers = _ref6.answers,
        problemType = _ref6.problemType;
      /* Feedback is Generalized for a Problem IFF:
      1. The problem is of Types: Single Select or Dropdown.
      2. All the problem's incorrect, if Selected answers are equivalent strings, and there is no other feedback.
      */
      if (problemType === _problem.ProblemTypeKeys.SINGLESELECT || problemType === _problem.ProblemTypeKeys.DROPDOWN) {
        var _answers$find;
        var firstIncorrectAnswerText = (_answers$find = answers.find(function (answer) {
          return answer.correct === false;
        })) === null || _answers$find === void 0 ? void 0 : _answers$find.selectedFeedback;
        var isAllIncorrectSelectedFeedbackTheSame = answers.every(function (answer) {
          return answer.correct ? true : (answer === null || answer === void 0 ? void 0 : answer.selectedFeedback) === firstIncorrectAnswerText;
        });
        if (isAllIncorrectSelectedFeedbackTheSame) {
          return firstIncorrectAnswerText;
        }
      }
      return '';
    }
  }, {
    key: "getParsedOLXData",
    value: function getParsedOLXData() {
      if (_lodashEs["default"].isEmpty(this.problem)) {
        return {};
      }
      if (Object.keys(this.problem).some(function (key) {
        return key.indexOf('@_') !== -1;
      })) {
        throw new Error('Misc Attributes asscoiated with problem, opening in advanced editor');
      }
      var answersObject = {};
      var additionalAttributes = {};
      var groupFeedbackList = [];
      var problemType = this.getProblemType();
      var hints = this.getHints();
      var question = this.parseQuestions(problemType);
      var solutionExplanation = this.getSolutionExplanation(problemType);
      switch (problemType) {
        case _problem.ProblemTypeKeys.DROPDOWN:
          answersObject = this.parseMultipleChoiceAnswers(_problem.ProblemTypeKeys.DROPDOWN, 'optioninput', 'option');
          break;
        case _problem.ProblemTypeKeys.TEXTINPUT:
          answersObject = this.parseStringResponse();
          break;
        case _problem.ProblemTypeKeys.NUMERIC:
          answersObject = this.parseNumericResponse();
          break;
        case _problem.ProblemTypeKeys.MULTISELECT:
          answersObject = this.parseMultipleChoiceAnswers(_problem.ProblemTypeKeys.MULTISELECT, 'checkboxgroup', 'choice');
          break;
        case _problem.ProblemTypeKeys.SINGLESELECT:
          answersObject = this.parseMultipleChoiceAnswers(_problem.ProblemTypeKeys.SINGLESELECT, 'choicegroup', 'choice');
          break;
        case _problem.ProblemTypeKeys.ADVANCED:
          return {
            problemType: problemType,
            settings: {}
          };
        default:
          // if problem is unset, return null
          return {};
      }
      var generalFeedback = this.getGeneralFeedback({
        answers: answersObject.answers,
        problemType: problemType
      });
      if (_lodashEs["default"].has(answersObject, 'additionalStringAttributes')) {
        additionalAttributes = _objectSpread({}, answersObject.additionalStringAttributes);
      }
      if (_lodashEs["default"].has(answersObject, 'groupFeedbackList')) {
        groupFeedbackList = answersObject.groupFeedbackList;
      }
      var _answersObject = answersObject,
        answers = _answersObject.answers;
      var settings = {
        hints: hints
      };
      if (_problem.ProblemTypeKeys.NUMERIC === problemType && _lodashEs["default"].has(answers[0], 'tolerance')) {
        var toleranceValue = answers[0].tolerance;
        if (!toleranceValue || toleranceValue.length === 0) {
          settings.tolerance = {
            value: null,
            type: 'None'
          };
        } else if (toleranceValue.includes('%')) {
          settings.tolerance = {
            value: parseInt(toleranceValue.slice(0, -1)),
            type: 'Percent'
          };
        } else {
          settings.tolerance = {
            value: parseInt(toleranceValue),
            type: 'Number'
          };
        }
      }
      if (solutionExplanation) {
        settings.solutionExplanation = solutionExplanation;
      }
      return {
        question: question,
        settings: settings,
        answers: answers,
        problemType: problemType,
        additionalAttributes: additionalAttributes,
        generalFeedback: generalFeedback,
        groupFeedbackList: groupFeedbackList
      };
    }
  }]);
  return OLXParser;
}();
//# sourceMappingURL=OLXParser.js.map