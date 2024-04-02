"use strict";

var _reducers = require("./reducers");
var _problem = require("../../constants/problem");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var testingState = _objectSpread(_objectSpread({}, _reducers.initialState), {}, {
  arbitraryField: 'arbitrary'
});
describe('problem reducer', function () {
  it('has initial state', function () {
    expect((0, _reducers.reducer)(undefined, {})).toEqual(_reducers.initialState);
  });
  var testValue = 'roll for initiative';
  describe('handling actions', function () {
    var setterTest = function setterTest(action, target) {
      describe(action, function () {
        it("load ".concat(target, " from payload"), function () {
          expect((0, _reducers.reducer)(testingState, _reducers.actions[action](testValue))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, _defineProperty({}, target, testValue)));
        });
      });
    };
    [['updateQuestion', 'question']].map(function (args) {
      return setterTest.apply(void 0, _toConsumableArray(args));
    });
    describe('setEnableTypeSelection', function () {
      it('sets given problemType to null', function () {
        var payload = {
          maxAttempts: 1,
          showanswer: 'finished',
          showResetButton: false
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.setEnableTypeSelection(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          settings: _objectSpread(_objectSpread({}, testingState.settings), {}, {
            scoring: _objectSpread(_objectSpread({}, testingState.settings.scoring), {}, {
              attempts: {
                number: 1,
                unlimited: false
              }
            }),
            showAnswer: _objectSpread(_objectSpread({}, testingState.settings.showAnswer), {}, {
              on: payload.showanswer
            })
          }, payload.showResetButton),
          problemType: null
        }));
      });
    });
    describe('load', function () {
      it('sets answers', function () {
        var answer = {
          id: 'A',
          correct: false,
          selectedFeedback: '',
          title: '',
          isAnswerRange: false,
          unselectedFeedback: ''
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.addAnswer(answer))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          answers: [answer]
        }));
      });
    });
    describe('updateField', function () {
      it('sets given parameter', function () {
        var payload = {
          problemType: 'soMePRoblEMtYPe'
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.updateField(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), payload));
      });
    });
    describe('updateSettings', function () {
      it('sets given settings parameter', function () {
        var payload = {
          hints: ['soMehInt']
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.updateSettings(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          settings: _objectSpread(_objectSpread({}, testingState.settings), payload)
        }));
      });
    });
    describe('addAnswer', function () {
      var answer = {
        id: 'A',
        correct: false,
        selectedFeedback: '',
        title: '',
        isAnswerRange: false,
        unselectedFeedback: ''
      };
      it('sets answers', function () {
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: 'choiceresponse'
        }), _reducers.actions.addAnswer())).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: 'choiceresponse',
          answers: [answer]
        }));
      });
      it('sets answers for numeric input', function () {
        var numericTestState = _objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          correctAnswerCount: 0
        });
        expect((0, _reducers.reducer)(numericTestState, _reducers.actions.addAnswer())).toEqual(_objectSpread(_objectSpread({}, numericTestState), {}, {
          correctAnswerCount: 1,
          answers: [_objectSpread(_objectSpread({}, answer), {}, {
            correct: true
          })]
        }));
      });
    });
    describe('addAnswerRange', function () {
      var answerRange = {
        id: 'A',
        correct: true,
        selectedFeedback: '',
        title: '',
        isAnswerRange: true,
        unselectedFeedback: ''
      };
      it('sets answerRange', function () {
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC
        }), _reducers.actions.addAnswerRange())).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          answers: [answerRange]
        }));
      });
    });
    describe('updateAnswer', function () {
      it('sets answers, as well as setting the correctAnswerCount ', function () {
        var answer = {
          id: 'A',
          correct: true
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          answers: [{
            id: 'A',
            correct: false
          }]
        }), _reducers.actions.updateAnswer(answer))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: true
          }]
        }));
      });
    });
    describe('deleteAnswer', function () {
      it('sets answers, as well as setting the correctAnswerCount ', function () {
        var answer = {
          id: 'A',
          correct: false
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: false
          }, {
            id: 'B',
            correct: true
          }]
        }), _reducers.actions.deleteAnswer(answer))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: true
          }]
        }));
      });
      it('if you delete an answer range, it will be replaced with a blank answer', function () {
        var answer = {
          id: 'A',
          correct: true,
          selectedFeedback: '',
          title: '',
          isAnswerRange: false,
          unselectedFeedback: ''
        };
        var answerRange = {
          id: 'A',
          correct: false,
          selectedFeedback: '',
          title: '',
          isAnswerRange: true,
          unselectedFeedback: ''
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          correctAnswerCount: 1,
          answers: [_objectSpread({}, answerRange)]
        }), _reducers.actions.deleteAnswer(answer))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          correctAnswerCount: 1,
          answers: [_objectSpread({}, answer)]
        }));
      });
    });
  });
});
//# sourceMappingURL=reducers.test.js.map