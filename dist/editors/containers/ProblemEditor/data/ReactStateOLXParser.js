"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _fastXmlParser = require("fast-xml-parser");
var _problem = require("../../../data/constants/problem");
var _constants = require("../components/EditProblemView/SettingsWidget/settingsComponents/Tolerance/constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ReactStateOLXParser = /*#__PURE__*/function () {
  function ReactStateOLXParser(problemState) {
    _classCallCheck(this, ReactStateOLXParser);
    var parserOptions = {
      ignoreAttributes: false,
      alwaysCreateTextNode: true
    };
    var questionParserOptions = {
      ignoreAttributes: false,
      alwaysCreateTextNode: true,
      preserveOrder: true
    };
    var questionBuilderOptions = {
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      suppressBooleanAttributes: false,
      format: true,
      preserveOrder: true
    };
    var builderOptions = {
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      suppressBooleanAttributes: false,
      format: true
    };
    this.questionParser = new _fastXmlParser.XMLParser(questionParserOptions);
    this.parser = new _fastXmlParser.XMLParser(parserOptions);
    this.builder = new _fastXmlParser.XMLBuilder(builderOptions);
    this.questionBuilder = new _fastXmlParser.XMLBuilder(questionBuilderOptions);
    this.editorObject = problemState.editorObject;
    this.problemState = problemState.problem;
  }
  _createClass(ReactStateOLXParser, [{
    key: "addHints",
    value: function addHints() {
      var _this = this;
      var hintsArray = [];
      var hints = this.editorObject.hints;
      if (hints.length < 1) {
        return {};
      }
      hints.forEach(function (hint) {
        if (hint.length > 0) {
          var parsedHint = _this.parser.parse(hint);
          hintsArray.push(_objectSpread({}, parsedHint));
        }
      });
      var demandhint = {
        demandhint: {
          hint: hintsArray
        }
      };
      return demandhint;
    }
  }, {
    key: "addSolution",
    value: function addSolution() {
      var solution = this.editorObject.solution;
      if (!solution || solution.length <= 0) {
        return {};
      }
      var solutionTitle = {
        '#text': 'Explanation'
      };
      var parsedSolution = this.parser.parse(solution);
      var paragraphs = parsedSolution.p;
      var withWrapper = _lodashEs["default"].isArray(paragraphs) ? [solutionTitle].concat(_toConsumableArray(paragraphs)) : [solutionTitle, paragraphs];
      var solutionObject = {
        solution: {
          div: {
            '@_class': 'detailed-solution',
            p: withWrapper
          }
        }
      };
      return solutionObject;
    }
  }, {
    key: "addMultiSelectAnswers",
    value: function addMultiSelectAnswers(option) {
      var _this$editorObject,
        _this2 = this;
      var choice = [];
      var compoundhint = [];
      var widget = {};
      // eslint-disable-next-line prefer-const
      var _this$problemState = this.problemState,
        answers = _this$problemState.answers,
        problemType = _this$problemState.problemType;
      var answerTitles = (_this$editorObject = this.editorObject) === null || _this$editorObject === void 0 ? void 0 : _this$editorObject.answers;
      var _this$editorObject2 = this.editorObject,
        selectedFeedback = _this$editorObject2.selectedFeedback,
        unselectedFeedback = _this$editorObject2.unselectedFeedback;
      /* todo */
      /*
        * the logic for general  feedback is ot current being used.
        * when component is updated will need to return to this code.
        * general feedback replaces selected feedback if all incorrect selected feedback is the same.
        * ******************************************
      if (generalFeedback !== ''
      && answers.every(
        answer => (
          answer.correct
            ? true
            : answer?.selectedFeedback === answers.find(a => a.correct === false).selectedFeedback
        ),
      )) {
        answers = answers.map(answer => (!answer?.correct
          ? { ...answer, selectedFeedback: generalFeedback }
          : answer));
      }
      */
      answers.forEach(function (answer) {
        var feedback = [];
        var singleAnswer = {};
        var title = answerTitles ? _this2.parser.parse(answerTitles[answer.id]) : {
          '#text': answer.title
        };
        var currentSelectedFeedback = (selectedFeedback === null || selectedFeedback === void 0 ? void 0 : selectedFeedback[answer.id]) || null;
        var currentUnselectedFeedback = (unselectedFeedback === null || unselectedFeedback === void 0 ? void 0 : unselectedFeedback[answer.id]) || null;
        var isEmpty;
        if (answerTitles) {
          var _Object$keys;
          isEmpty = ((_Object$keys = Object.keys(title)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) <= 0;
        } else {
          var _title$Text;
          isEmpty = ((_title$Text = title['#text']) === null || _title$Text === void 0 ? void 0 : _title$Text.length) <= 0;
        }
        if (title && !isEmpty) {
          if (currentSelectedFeedback && problemType === _problem.ProblemTypeKeys.MULTISELECT) {
            var parsedSelectedFeedback = _this2.parser.parse(currentSelectedFeedback);
            feedback.push(_objectSpread(_objectSpread({}, parsedSelectedFeedback), {}, {
              '@_selected': true
            }));
          }
          if (currentSelectedFeedback && problemType !== _problem.ProblemTypeKeys.MULTISELECT) {
            var _parsedSelectedFeedback = _this2.parser.parse(currentSelectedFeedback);
            feedback.push(_objectSpread({}, _parsedSelectedFeedback));
          }
          if (currentUnselectedFeedback && problemType === _problem.ProblemTypeKeys.MULTISELECT) {
            var parsedUnselectedFeedback = _this2.parser.parse(currentUnselectedFeedback);
            feedback.push(_objectSpread(_objectSpread({}, parsedUnselectedFeedback), {}, {
              '@_selected': false
            }));
          }
          if (feedback.length) {
            singleAnswer["".concat(option, "hint")] = feedback;
          }
          singleAnswer = _objectSpread(_objectSpread({
            '@_correct': answer.correct
          }, title), singleAnswer);
          choice.push(singleAnswer);
        }
      });
      widget = _defineProperty({}, option, choice);
      if (_lodashEs["default"].has(this.problemState, 'groupFeedbackList') && problemType === _problem.ProblemTypeKeys.MULTISELECT) {
        compoundhint = this.addGroupFeedbackList();
        widget = _objectSpread(_objectSpread({}, widget), {}, {
          compoundhint: compoundhint
        });
      }
      return widget;
    }
  }, {
    key: "addGroupFeedbackList",
    value: function addGroupFeedbackList() {
      var compoundhint = [];
      var groupFeedbackList = this.problemState.groupFeedbackList;
      groupFeedbackList.forEach(function (element) {
        compoundhint.push({
          '#text': element.feedback,
          '@_value': element.answers.join(' ')
        });
      });
      return compoundhint;
    }
  }, {
    key: "addQuestion",
    value: function addQuestion() {
      var question = this.editorObject.question;
      var questionObject = this.questionParser.parse(question);
      return questionObject;
    }
  }, {
    key: "buildMultiSelectProblem",
    value: function buildMultiSelectProblem(problemType, widget, option) {
      var question = this.addQuestion();
      var widgetObject = this.addMultiSelectAnswers(option);
      var demandhint = this.addHints();
      var solution = this.addSolution();
      var problemObject = {
        problem: _objectSpread(_defineProperty({}, problemType, _objectSpread(_defineProperty({}, widget, widgetObject), solution)), demandhint)
      };
      var problem = this.builder.build(problemObject);
      var questionString = this.questionBuilder.build(question);
      var problemTypeTag;
      switch (problemType) {
        case _problem.ProblemTypeKeys.MULTISELECT:
          var _problem$match = problem.match(/<choiceresponse>|<choiceresponse.[^>]+>/);
          var _problem$match2 = _slicedToArray(_problem$match, 1);
          problemTypeTag = _problem$match2[0];
          break;
        case _problem.ProblemTypeKeys.DROPDOWN:
          var _problem$match3 = problem.match(/<optionresponse>|<optionresponse.[^>]+>/);
          var _problem$match4 = _slicedToArray(_problem$match3, 1);
          problemTypeTag = _problem$match4[0];
          break;
        case _problem.ProblemTypeKeys.SINGLESELECT:
          var _problem$match5 = problem.match(/<multiplechoiceresponse>|<multiplechoiceresponse.[^>]+>/);
          var _problem$match6 = _slicedToArray(_problem$match5, 1);
          problemTypeTag = _problem$match6[0];
          break;
        default:
          break;
      }
      var updatedString = "".concat(problemTypeTag, "\n").concat(questionString);
      var problemString = problem.replace(problemTypeTag, updatedString);
      return problemString;
    }
  }, {
    key: "buildTextInput",
    value: function buildTextInput() {
      var question = this.addQuestion();
      var demandhint = this.addHints();
      var answerObject = this.buildTextInputAnswersFeedback();
      var solution = this.addSolution();
      var problemObject = {
        problem: _objectSpread(_defineProperty({}, _problem.ProblemTypeKeys.TEXTINPUT, _objectSpread(_objectSpread({}, answerObject), solution)), demandhint)
      };
      var problem = this.builder.build(problemObject);
      var questionString = this.questionBuilder.build(question);
      var _problem$match7 = problem.match(/<stringresponse>|<stringresponse.[^>]+>/),
        _problem$match8 = _slicedToArray(_problem$match7, 1),
        problemTypeTag = _problem$match8[0];
      var updatedString = "".concat(problemTypeTag, "\n").concat(questionString);
      var problemString = problem.replace(problemTypeTag, updatedString);
      return problemString;
    }
  }, {
    key: "buildTextInputAnswersFeedback",
    value: function buildTextInputAnswersFeedback() {
      var _this3 = this;
      var answers = this.problemState.answers;
      var selectedFeedback = this.editorObject.selectedFeedback;
      var answerObject = {};
      var additionAnswers = [];
      var wrongAnswers = [];
      var firstCorrectAnswerParsed = false;
      answers.forEach(function (answer) {
        var correcthint = _this3.getAnswerHints(selectedFeedback === null || selectedFeedback === void 0 ? void 0 : selectedFeedback[answer.id]);
        if (_this3.hasAttributeWithValue(answer, 'title')) {
          if (answer.correct && firstCorrectAnswerParsed) {
            additionAnswers.push(_objectSpread({
              '@_answer': answer.title
            }, correcthint));
          } else if (answer.correct && !firstCorrectAnswerParsed) {
            firstCorrectAnswerParsed = true;
            answerObject = _objectSpread({
              '@_answer': answer.title
            }, correcthint);
          } else if (!answer.correct) {
            var wronghint = correcthint.correcthint;
            wrongAnswers.push(_objectSpread({
              '@_answer': answer.title
            }, wronghint));
          }
        }
      });
      answerObject = _objectSpread(_objectSpread({}, answerObject), {}, {
        additional_answer: additionAnswers,
        stringequalhint: wrongAnswers,
        '@_type': _lodashEs["default"].get(this.problemState, 'additionalAttributes.type', 'ci'),
        textline: {
          '@_size': _lodashEs["default"].get(this.problemState, 'additionalAttributes.textline.size', 20)
        }
      });
      return answerObject;
    }
  }, {
    key: "buildNumericInput",
    value: function buildNumericInput() {
      var question = this.addQuestion();
      var demandhint = this.addHints();
      var answerObject = this.buildNumericalResponse();
      var solution = this.addSolution();
      var problemObject = {
        problem: _objectSpread(_defineProperty({}, _problem.ProblemTypeKeys.NUMERIC, _objectSpread(_objectSpread({}, answerObject), solution)), demandhint)
      };
      var problem = this.builder.build(problemObject);
      var questionString = this.questionBuilder.build(question);
      var _problem$match9 = problem.match(/<numericalresponse>|<numericalresponse.[^>]+>/),
        _problem$match10 = _slicedToArray(_problem$match9, 1),
        problemTypeTag = _problem$match10[0];
      var updatedString = "".concat(questionString, "\n").concat(problemTypeTag);
      var problemString = problem.replace(problemTypeTag, updatedString);
      return problemString;
    }
  }, {
    key: "buildNumericalResponse",
    value: function buildNumericalResponse() {
      var _this4 = this;
      var answers = this.problemState.answers;
      var tolerance = this.problemState.settings.tolerance;
      var selectedFeedback = this.editorObject.selectedFeedback;
      var answerObject = {};
      var additionalAnswers = [];
      var firstCorrectAnswerParsed = false;
      answers.forEach(function (answer) {
        var correcthint = _this4.getAnswerHints(selectedFeedback === null || selectedFeedback === void 0 ? void 0 : selectedFeedback[answer.id]);
        if (_this4.hasAttributeWithValue(answer, 'title')) {
          var title = answer.title;
          if (title.startsWith('(') || title.startsWith('[')) {
            var parsedRange = title.split(',');
            var _parsedRange = _slicedToArray(parsedRange, 2),
              rawLowerBound = _parsedRange[0],
              rawUpperBound = _parsedRange[1];
            var lowerBoundInt;
            var lowerBoundFraction;
            var upperBoundInt;
            var upperBoundFraction;
            if (rawLowerBound.includes('/')) {
              lowerBoundFraction = rawLowerBound.replace(/[^0-9-/]/gm, '');
              var _lowerBoundFraction$s = lowerBoundFraction.split('/'),
                _lowerBoundFraction$s2 = _slicedToArray(_lowerBoundFraction$s, 2),
                numerator = _lowerBoundFraction$s2[0],
                denominator = _lowerBoundFraction$s2[1];
              var lowerBoundFloat = Number(numerator) / Number(denominator);
              lowerBoundInt = lowerBoundFloat;
            } else {
              // these regex replaces remove everything that is not a decimal or positive/negative numer
              lowerBoundInt = Number(rawLowerBound.replace(/[^0-9-.]/gm, ''));
            }
            if (rawUpperBound.includes('/')) {
              upperBoundFraction = rawUpperBound.replace(/[^0-9-/]/gm, '');
              var _upperBoundFraction$s = upperBoundFraction.split('/'),
                _upperBoundFraction$s2 = _slicedToArray(_upperBoundFraction$s, 2),
                _numerator = _upperBoundFraction$s2[0],
                _denominator = _upperBoundFraction$s2[1];
              var upperBoundFloat = Number(_numerator) / Number(_denominator);
              upperBoundInt = upperBoundFloat;
            } else {
              // these regex replaces remove everything that is not a decimal or positive/negative numer
              upperBoundInt = Number(rawUpperBound.replace(/[^0-9-.]/gm, ''));
            }
            if (lowerBoundInt > upperBoundInt) {
              var lowerBoundChar = rawUpperBound[rawUpperBound.length - 1] === ']' ? '[' : '(';
              var upperBoundChar = rawLowerBound[0] === '[' ? ']' : ')';
              if (lowerBoundFraction) {
                lowerBoundInt = lowerBoundFraction;
              }
              if (upperBoundFraction) {
                upperBoundInt = upperBoundFraction;
              }
              title = "".concat(lowerBoundChar).concat(upperBoundInt, ",").concat(lowerBoundInt).concat(upperBoundChar);
            }
          }
          if (answer.correct && !firstCorrectAnswerParsed) {
            firstCorrectAnswerParsed = true;
            var responseParam = {};
            if (tolerance !== null && tolerance !== void 0 && tolerance.value) {
              responseParam = {
                responseparam: {
                  '@_type': 'tolerance',
                  '@_default': "".concat(tolerance.value).concat(tolerance.type === _constants.ToleranceTypes.number.type ? '' : '%')
                }
              };
            }
            answerObject = _objectSpread(_objectSpread({
              '@_answer': title
            }, responseParam), correcthint);
          } else if (answer.correct && firstCorrectAnswerParsed) {
            additionalAnswers.push(_objectSpread({
              '@_answer': title
            }, correcthint));
          }
        }
      });
      answerObject = _objectSpread(_objectSpread({}, answerObject), {}, {
        additional_answer: additionalAnswers,
        formulaequationinput: {
          '#text': ''
        }
      });
      return answerObject;
    }
  }, {
    key: "getAnswerHints",
    value: function getAnswerHints(feedback) {
      var correcthint = {};
      if (feedback !== undefined && feedback !== '') {
        var parsedFeedback = this.parser.parse(feedback);
        correcthint = {
          correcthint: _objectSpread({}, parsedFeedback)
        };
      }
      return correcthint;
    }
  }, {
    key: "hasAttributeWithValue",
    value: function hasAttributeWithValue(obj, attr) {
      return _lodashEs["default"].has(obj, attr) && _lodashEs["default"].get(obj, attr, '').toString().trim() !== '';
    }
  }, {
    key: "buildOLX",
    value: function buildOLX() {
      var problemType = this.problemState.problemType;
      var problemString = '';
      switch (problemType) {
        case _problem.ProblemTypeKeys.MULTISELECT:
          problemString = this.buildMultiSelectProblem(_problem.ProblemTypeKeys.MULTISELECT, 'checkboxgroup', 'choice');
          break;
        case _problem.ProblemTypeKeys.DROPDOWN:
          problemString = this.buildMultiSelectProblem(_problem.ProblemTypeKeys.DROPDOWN, 'optioninput', 'option');
          break;
        case _problem.ProblemTypeKeys.SINGLESELECT:
          problemString = this.buildMultiSelectProblem(_problem.ProblemTypeKeys.SINGLESELECT, 'choicegroup', 'choice');
          break;
        case _problem.ProblemTypeKeys.TEXTINPUT:
          problemString = this.buildTextInput();
          break;
        case _problem.ProblemTypeKeys.NUMERIC:
          problemString = this.buildNumericInput();
          break;
        default:
          break;
      }
      return problemString;
    }
  }]);
  return ReactStateOLXParser;
}();
var _default = exports["default"] = ReactStateOLXParser;
//# sourceMappingURL=ReactStateOLXParser.js.map