"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.actions = void 0;
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _toolkit = require("@reduxjs/toolkit");
var _OLXParser = require("../../../containers/ProblemEditor/data/OLXParser");
var _utils = require("../../../utils");
var _problem = require("../../constants/problem");
var _constants = require("../../../containers/ProblemEditor/components/EditProblemView/SettingsWidget/settingsComponents/Tolerance/constants");
var _excluded = ["id", "hasSingleAnswer"],
  _excluded2 = ["scoring", "showAnswer"],
  _excluded3 = ["settings"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var nextAlphaId = function nextAlphaId(lastId) {
  return String.fromCharCode(lastId.charCodeAt(0) + 1);
};
var initialState = exports.initialState = {
  rawOLX: '',
  problemType: null,
  question: '',
  answers: [],
  correctAnswerCount: 0,
  groupFeedbackList: [],
  generalFeedback: '',
  additionalAttributes: {},
  defaultSettings: {},
  settings: {
    randomization: null,
    scoring: {
      weight: 1,
      attempts: {
        unlimited: true,
        number: ''
      }
    },
    hints: [],
    timeBetween: 0,
    matLabApiKey: '',
    showAnswer: {
      on: _problem.ShowAnswerTypesKeys.FINISHED,
      afterAttempts: 0
    },
    showResetButton: false,
    solutionExplanation: '',
    tolerance: {
      value: null,
      type: _constants.ToleranceTypes.none.type
    }
  }
};

// eslint-disable-next-line no-unused-vars
var problem = (0, _toolkit.createSlice)({
  name: 'problem',
  initialState: initialState,
  reducers: {
    updateField: function updateField(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    updateQuestion: function updateQuestion(state, _ref2) {
      var payload = _ref2.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        question: payload
      });
    },
    updateAnswer: function updateAnswer(state, _ref3) {
      var payload = _ref3.payload;
      var id = payload.id,
        hasSingleAnswer = payload.hasSingleAnswer,
        answer = _objectWithoutProperties(payload, _excluded);
      var correctAnswerCount = state.correctAnswerCount;
      var answers = state.answers.map(function (obj) {
        if (obj.id === id) {
          if (_lodashEs["default"].has(answer, 'correct') && payload.correct) {
            correctAnswerCount += 1;
            return _objectSpread(_objectSpread({}, obj), answer);
          }
          if (_lodashEs["default"].has(answer, 'correct') && payload.correct === false) {
            correctAnswerCount -= 1;
            return _objectSpread(_objectSpread({}, obj), answer);
          }
          return _objectSpread(_objectSpread({}, obj), answer);
        }
        // set other answers as incorrect if problem only has one answer correct
        // and changes object include correct key change
        if (hasSingleAnswer && _lodashEs["default"].has(answer, 'correct') && obj.correct) {
          return _objectSpread(_objectSpread({}, obj), {}, {
            correct: false
          });
        }
        return obj;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        correctAnswerCount: correctAnswerCount,
        answers: answers
      });
    },
    deleteAnswer: function deleteAnswer(state, _ref4) {
      var payload = _ref4.payload;
      var id = payload.id,
        correct = payload.correct;
      if (state.answers.length <= 1) {
        if (state.answers.length > 0 && state.answers[0].isAnswerRange) {
          return _objectSpread(_objectSpread({}, state), {}, {
            correctAnswerCount: 1,
            answers: [{
              id: 'A',
              title: '',
              selectedFeedback: '',
              unselectedFeedback: '',
              correct: state.problemType === _problem.ProblemTypeKeys.NUMERIC,
              isAnswerRange: false
            }]
          });
        }
        return state;
      }
      var correctAnswerCount = state.correctAnswerCount;
      if (correct) {
        correctAnswerCount -= 1;
      }
      var answers = state.answers.filter(function (obj) {
        return obj.id !== id;
      }).map(function (answer, index) {
        var newId = _OLXParser.indexToLetterMap[index];
        if (answer.id === newId) {
          return answer;
        }
        return _objectSpread(_objectSpread({}, answer), {}, {
          id: newId
        });
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        correctAnswerCount: correctAnswerCount,
        answers: answers
      });
    },
    addAnswer: function addAnswer(state) {
      var currAnswers = state.answers;
      if (currAnswers.length >= _OLXParser.indexToLetterMap.length) {
        return state;
      }
      var newOption = {
        id: currAnswers.length ? nextAlphaId(currAnswers[currAnswers.length - 1].id) : 'A',
        title: '',
        selectedFeedback: '',
        unselectedFeedback: '',
        correct: state.problemType === _problem.ProblemTypeKeys.NUMERIC,
        isAnswerRange: false
      };
      var correctAnswerCount = state.correctAnswerCount;
      if (state.problemType === _problem.ProblemTypeKeys.NUMERIC) {
        correctAnswerCount += 1;
      }
      var answers = [].concat(_toConsumableArray(currAnswers), [newOption]);
      return _objectSpread(_objectSpread({}, state), {}, {
        correctAnswerCount: correctAnswerCount,
        answers: answers
      });
    },
    addAnswerRange: function addAnswerRange(state) {
      // As you may only have one answer range at a time, overwrite the answer object.
      var newOption = {
        id: 'A',
        title: '',
        selectedFeedback: '',
        unselectedFeedback: '',
        correct: state.problemType === _problem.ProblemTypeKeys.NUMERIC,
        isAnswerRange: true
      };
      var correctAnswerCount = 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        correctAnswerCount: correctAnswerCount,
        answers: [newOption]
      });
    },
    updateSettings: function updateSettings(state, _ref5) {
      var payload = _ref5.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), payload)
      });
    },
    load: function load(state, _ref6) {
      var _ref6$payload = _ref6.payload,
        _ref6$payload$setting = _ref6$payload.settings,
        scoring = _ref6$payload$setting.scoring,
        showAnswer = _ref6$payload$setting.showAnswer,
        settings = _objectWithoutProperties(_ref6$payload$setting, _excluded2),
        payload = _objectWithoutProperties(_ref6$payload, _excluded3);
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          scoring: _objectSpread(_objectSpread({}, state.settings.scoring), scoring),
          showAnswer: _objectSpread(_objectSpread({}, state.settings.showAnswer), showAnswer)
        }, settings)
      }, payload);
    },
    setEnableTypeSelection: function setEnableTypeSelection(state, _ref7) {
      var payload = _ref7.payload;
      var maxAttempts = payload.maxAttempts,
        showanswer = payload.showanswer,
        showResetButton = payload.showResetButton;
      var attempts = {
        number: maxAttempts,
        unlimited: false
      };
      if (!maxAttempts) {
        attempts.unlimited = true;
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          scoring: _objectSpread(_objectSpread({}, state.settings.scoring), {}, {
            attempts: attempts
          }),
          showAnswer: _objectSpread(_objectSpread({}, state.settings.showAnswer), {}, {
            on: showanswer
          })
        }, showResetButton),
        problemType: null
      });
    }
  }
});
var actions = exports.actions = (0, _utils.StrictDict)(problem.actions);
var reducer = exports.reducer = problem.reducer;
//# sourceMappingURL=reducers.js.map