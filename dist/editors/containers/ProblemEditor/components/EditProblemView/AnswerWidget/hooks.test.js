"use strict";

var _react = require("react");
var _reactRedux = require("react-redux");
var _redux = require("../../../../../data/redux");
var _testUtils = require("../../../../../../testUtils");
var _problem = require("../../../../../data/constants/problem");
var _module = _interopRequireWildcard(require("./hooks"));
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
jest.mock('react', function () {
  var updateState = jest.fn();
  return {
    useEffect: jest.fn(),
    useState: jest.fn(function (val) {
      return [{
        state: val
      }, function (newVal) {
        return updateState({
          val: val,
          newVal: newVal
        });
      }];
    })
  };
});
jest.mock('@edx/frontend-platform/i18n', function () {
  return {
    defineMessages: function defineMessages(m) {
      return m;
    }
  };
});
jest.mock('../../../../../data/redux', function () {
  return {
    actions: {
      problem: {
        deleteAnswer: function deleteAnswer(args) {
          return {
            deleteAnswer: args
          };
        },
        updateAnswer: function updateAnswer(args) {
          return {
            updateAnswer: args
          };
        }
      }
    }
  };
});
var state = new _testUtils.MockUseState(_module);
var output;
var answerWithOnlyFeedback = {
  id: 'A',
  title: 'Answer 1',
  correct: true,
  selectedFeedback: 'some feedback'
};
describe('Answer Options Hooks', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('state hooks', function () {
    state.testGetter(state.keys.isFeedbackVisible);
  });
  describe('removeAnswer', function () {
    test('it dispatches actions.problem.deleteAnswer', function () {
      var answer = {
        id: 'A',
        correct: false
      };
      var dispatch = (0, _reactRedux.useDispatch)();
      _module.removeAnswer({
        answer: answer,
        dispatch: dispatch
      })();
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.deleteAnswer({
        id: answer.id,
        correct: answer.correct
      }));
    });
  });
  describe('setAnswer', function () {
    test('it dispatches actions.problem.updateAnswer', function () {
      var answer = {
        id: 'A'
      };
      var hasSingleAnswer = false;
      var dispatch = (0, _reactRedux.useDispatch)();
      var payload = {
        random: 'string'
      };
      _module.setAnswer({
        answer: answer,
        hasSingleAnswer: hasSingleAnswer,
        dispatch: dispatch
      })(payload);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer(_objectSpread({
        id: answer.id,
        hasSingleAnswer: hasSingleAnswer
      }, payload)));
    });
  });
  describe('setAnswerTitle', function () {
    test('it dispatches actions.problem.updateAnswer for numeric problem', function () {
      var answer = {
        id: 'A'
      };
      var hasSingleAnswer = false;
      var dispatch = (0, _reactRedux.useDispatch)();
      var updatedTitle = {
        target: {
          value: 'string'
        }
      };
      var problemType = 'numericalresponse';
      _module.setAnswerTitle({
        answer: answer,
        hasSingleAnswer: hasSingleAnswer,
        dispatch: dispatch,
        problemType: problemType
      })(updatedTitle);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer: hasSingleAnswer,
        title: updatedTitle.target.value
      }));
    });
    test('it dispatches actions.problem.updateAnswer for single select problem', function () {
      var answer = {
        id: 'A'
      };
      var hasSingleAnswer = false;
      var dispatch = (0, _reactRedux.useDispatch)();
      var updatedTitle = 'string';
      var problemType = 'multiplechoiceresponse';
      _module.setAnswerTitle({
        answer: answer,
        hasSingleAnswer: hasSingleAnswer,
        dispatch: dispatch,
        problemType: problemType
      })(updatedTitle);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer: hasSingleAnswer,
        title: updatedTitle
      }));
    });
  });
  describe('setSelectedFeedback', function () {
    test('it dispatches actions.problem.updateAnswer', function () {
      var answer = {
        id: 'A'
      };
      var hasSingleAnswer = false;
      var dispatch = (0, _reactRedux.useDispatch)();
      var e = {
        target: {
          value: 'string'
        }
      };
      _module.setSelectedFeedback({
        answer: answer,
        hasSingleAnswer: hasSingleAnswer,
        dispatch: dispatch
      })(e);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer: hasSingleAnswer,
        selectedFeedback: e.target.value
      }));
    });
  });
  describe('setUnselectedFeedback', function () {
    test('it dispatches actions.problem.updateAnswer', function () {
      var answer = {
        id: 'A'
      };
      var hasSingleAnswer = false;
      var dispatch = (0, _reactRedux.useDispatch)();
      var e = {
        target: {
          value: 'string'
        }
      };
      _module.setUnselectedFeedback({
        answer: answer,
        hasSingleAnswer: hasSingleAnswer,
        dispatch: dispatch
      })(e);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer: hasSingleAnswer,
        unselectedFeedback: e.target.value
      }));
    });
  });
  describe('useFeedback hook', function () {
    beforeEach(function () {
      state.mock();
    });
    afterEach(function () {
      state.restore();
    });
    test('test default state is false', function () {
      output = _module.useFeedback(answerWithOnlyFeedback);
      expect(output.isFeedbackVisible).toBeFalsy();
    });
    test('when useEffect triggers, isFeedbackVisible is set to true', function () {
      var key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      expect(state.setState[key]).not.toHaveBeenCalled();
      var _useEffect$mock$calls = _slicedToArray(_react.useEffect.mock.calls[0], 1),
        cb = _useEffect$mock$calls[0];
      cb();
      expect(state.setState[key]).toHaveBeenCalledWith(true);
    });
    test('test toggleFeedback with selected feedback', function () {
      var key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      window.tinymce.editors = {
        'selectedFeedback-A': {
          getContent: function getContent() {
            return 'string';
          }
        }
      };
      output.toggleFeedback(false);
      expect(state.setState[key]).toHaveBeenCalledWith(true);
    });
    test('test toggleFeedback with unselected feedback', function () {
      var key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      window.tinymce.editors = {
        'unselectedFeedback-A': {
          getContent: function getContent() {
            return 'string';
          }
        }
      };
      output.toggleFeedback(false);
      expect(state.setState[key]).toHaveBeenCalledWith(true);
    });
    test('test toggleFeedback with unselected feedback', function () {
      var key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      window.tinymce.editors = {
        'answer-A': {
          getContent: function getContent() {
            return 'string';
          }
        }
      };
      output.toggleFeedback(false);
      expect(state.setState[key]).toHaveBeenCalledWith(false);
    });
  });
  describe('isSingleAnswerProblem()', function () {
    test('singleSelect', function () {
      expect(_module.isSingleAnswerProblem(_problem.ProblemTypeKeys.SINGLESELECT)).toBe(false);
    });
    test('multiSelect', function () {
      expect(_module.isSingleAnswerProblem(_problem.ProblemTypeKeys.MULTISELECT)).toBe(false);
    });
    test('dropdown', function () {
      expect(_module.isSingleAnswerProblem(_problem.ProblemTypeKeys.DROPDOWN)).toBe(true);
    });
  });
});
//# sourceMappingURL=hooks.test.js.map