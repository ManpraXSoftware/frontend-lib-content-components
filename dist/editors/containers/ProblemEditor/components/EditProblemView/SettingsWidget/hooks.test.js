"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = require("react");
var _testUtils = require("../../../../../../testUtils");
var _messages = _interopRequireDefault(require("./messages"));
var _utils = require("../../../../../utils");
var hooks = _interopRequireWildcard(require("./hooks"));
var _problem = require("../../../../../data/constants/problem");
var editHooks = _interopRequireWildcard(require("../hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
jest.mock('react', function () {
  var updateState = jest.fn();
  return {
    updateState: updateState,
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
        updateSettings: function updateSettings(args) {
          return {
            updateSettings: args
          };
        },
        updateField: function updateField(args) {
          return {
            updateField: args
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
var state = new _testUtils.MockUseState(hooks);
var moduleKeys = (0, _utils.keyStore)(editHooks);
describe('Problem settings hooks', function () {
  var output;
  var updateSettings;
  beforeEach(function () {
    updateSettings = jest.fn();
    state.mock();
  });
  afterEach(function () {
    state.restore();
    _react.useEffect.mockClear();
  });
  describe('Show advanced settings', function () {
    beforeEach(function () {
      output = hooks.showAdvancedSettingsCards();
    });
    test('test default state is false', function () {
      expect(output.isAdvancedCardsVisible).toBeFalsy();
    });
    test('test showAdvancedCards sets state to true', function () {
      output.showAdvancedCards();
      expect(state.setState[state.keys.showAdvanced]).toHaveBeenCalledWith(true);
    });
  });
  describe('Show full card', function () {
    beforeEach(function () {
      output = hooks.showFullCard();
    });
    test('test default state is false', function () {
      expect(output.isCardCollapsibleOpen).toBeFalsy();
    });
    test('test toggleCardCollapse to true', function () {
      output.toggleCardCollapse();
      expect(state.setState[state.keys.cardCollapsed]).toHaveBeenCalledWith(true);
    });
    test('test toggleCardCollapse to true', function () {
      output = hooks.showFullCard(true);
      output.toggleCardCollapse();
      expect(state.setState[state.keys.cardCollapsed]).toHaveBeenCalledWith(true);
    });
  });
  describe('Hint card hooks', function () {
    test('test useEffect triggers set hints summary no hint', function () {
      var hints = [];
      hooks.hintsCardHooks(hints, updateSettings);
      expect(state.setState[state.keys.summary]).not.toHaveBeenCalled();
      var _useEffect$mock$calls = _slicedToArray(_react.useEffect.mock.calls[0], 2),
        cb = _useEffect$mock$calls[0],
        prereqs = _useEffect$mock$calls[1];
      expect(prereqs).toStrictEqual([[]]);
      cb();
      expect(state.setState[state.keys.summary]).toHaveBeenCalledWith({
        message: _messages["default"].noHintSummary,
        values: {}
      });
    });
    test('test useEffect triggers set hints summary', function () {
      var hints = [{
        id: 1,
        value: 'hint1'
      }];
      output = hooks.hintsCardHooks(hints, updateSettings);
      expect(state.setState[state.keys.summary]).not.toHaveBeenCalled();
      var _useEffect$mock$calls2 = _slicedToArray(_react.useEffect.mock.calls[0], 2),
        cb = _useEffect$mock$calls2[0],
        prereqs = _useEffect$mock$calls2[1];
      expect(prereqs).toStrictEqual([[{
        id: 1,
        value: 'hint1'
      }]]);
      cb();
      expect(state.setState[state.keys.summary]).toHaveBeenCalledWith({
        message: _messages["default"].hintSummary,
        values: {
          hint: hints[0].value,
          count: hints.length - 1
        }
      });
    });
    test('test handleAdd triggers updateSettings', function () {
      var hint1 = {
        id: 1,
        value: 'hint1'
      };
      var hint2 = {
        id: 2,
        value: ''
      };
      var hints = [hint1];
      output = hooks.hintsCardHooks(hints, updateSettings);
      output.handleAdd();
      expect(updateSettings).toHaveBeenCalledWith({
        hints: [hint1, hint2]
      });
    });
  });
  describe('Hint rows hooks', function () {
    var hint1 = {
      id: 1,
      value: 'hint1'
    };
    var hint2 = {
      id: 2,
      value: ''
    };
    var value = 'modifiedHint';
    var modifiedHint = {
      id: 2,
      value: value
    };
    var hints = [hint1, hint2];
    beforeEach(function () {
      output = hooks.hintsRowHooks(2, hints, updateSettings);
    });
    test('test handleChange', function () {
      output.handleChange(value);
      expect(updateSettings).toHaveBeenCalledWith({
        hints: [hint1, modifiedHint]
      });
    });
    test('test handleDelete', function () {
      output.handleDelete();
      expect(updateSettings).toHaveBeenCalledWith({
        hints: [hint1]
      });
    });
  });
  describe('Matlab card hooks', function () {
    test('test useEffect triggers set summary', function () {
      var apiKey = 'matlab_api_key';
      hooks.matlabCardHooks(apiKey, updateSettings);
      expect(state.setState[state.keys.summary]).not.toHaveBeenCalled();
      var _useEffect$mock$calls3 = _slicedToArray(_react.useEffect.mock.calls[0], 2),
        cb = _useEffect$mock$calls3[0],
        prereqs = _useEffect$mock$calls3[1];
      expect(prereqs).toStrictEqual([apiKey]);
      cb();
      expect(state.setState[state.keys.summary]).toHaveBeenCalledWith({
        message: apiKey,
        values: {},
        intl: false
      });
    });
    test('test useEffect triggers set summary no key', function () {
      hooks.matlabCardHooks('', updateSettings);
      expect(state.setState[state.keys.summary]).not.toHaveBeenCalled();
      var _useEffect$mock$calls4 = _slicedToArray(_react.useEffect.mock.calls[0], 2),
        cb = _useEffect$mock$calls4[0],
        prereqs = _useEffect$mock$calls4[1];
      expect(prereqs).toStrictEqual(['']);
      cb();
      expect(state.setState[state.keys.summary]).toHaveBeenCalledWith({
        message: _messages["default"].matlabNoKeySummary,
        values: {},
        intl: true
      });
    });
    test('test handleChange', function () {
      var apiKey = 'matlab_api_key';
      var value = 'new_matlab_api_key';
      output = hooks.matlabCardHooks(apiKey, updateSettings);
      output.handleChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        matLabApiKey: value
      });
    });
  });
  describe('Reset card hooks', function () {
    beforeEach(function () {
      output = hooks.resetCardHooks(updateSettings);
    });
    test('test setResetTrue', function () {
      output.setResetTrue();
      expect(updateSettings).toHaveBeenCalledWith({
        showResetButton: true
      });
    });
    test('test setResetFalse', function () {
      output.setResetFalse();
      expect(updateSettings).toHaveBeenCalledWith({
        showResetButton: false
      });
    });
  });
  describe('Scoring card hooks', function () {
    var scoring = {
      weight: 1.5,
      attempts: {
        unlimited: false,
        number: 5
      }
    };
    var defaultValue = 1;
    beforeEach(function () {
      output = hooks.scoringCardHooks(scoring, updateSettings, defaultValue);
    });
    test('test handleUnlimitedChange sets attempts.unlimited to true when checked', function () {
      output.handleUnlimitedChange({
        target: {
          checked: true
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith('');
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: '',
            unlimited: true
          }
        })
      });
    });
    test('test handleUnlimitedChange sets attempts.unlimited to false when unchecked', function () {
      output.handleUnlimitedChange({
        target: {
          checked: false
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith("".concat(defaultValue, " (Default)"));
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: defaultValue,
            unlimited: false
          }
        })
      });
    });
    test('test handleMaxAttemptChange', function () {
      var value = 6;
      output.handleMaxAttemptChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: value,
            unlimited: false
          }
        })
      });
    });
    test('test handleMaxAttemptChange set attempts to zero', function () {
      var value = 0;
      output.handleMaxAttemptChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: value,
            unlimited: false
          }
        })
      });
    });
    test('test handleMaxAttemptChange set attempts to null value', function () {
      var value = null;
      output.handleMaxAttemptChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: '',
            unlimited: true
          }
        })
      });
    });
    test('test handleMaxAttemptChange set attempts to default value', function () {
      var value = '1 (Default)';
      output.handleMaxAttemptChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: 1,
            unlimited: false
          }
        })
      });
    });
    test('test handleMaxAttemptChange set attempts to non-numeric value', function () {
      var value = 'abc';
      output.handleMaxAttemptChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: '',
            unlimited: true
          }
        })
      });
    });
    test('test handleMaxAttemptChange set attempts to empty value', function () {
      var value = '';
      output.handleMaxAttemptChange({
        target: {
          value: value
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith("".concat(defaultValue, " (Default)"));
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: 1,
            unlimited: false
          }
        })
      });
    });
    test('test handleMaxAttemptChange set attempts to negative value', function () {
      var value = -1;
      output.handleMaxAttemptChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: 0,
            unlimited: false
          }
        })
      });
    });
    test('test handleOnChange', function () {
      var value = 6;
      output.handleOnChange({
        target: {
          value: value
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith(value);
    });
    test('test handleOnChange set attempts to zero', function () {
      var value = 0;
      output.handleOnChange({
        target: {
          value: value
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith(value);
    });
    test('test handleOnChange set attempts to default value from empty string', function () {
      var value = '';
      output.handleOnChange({
        target: {
          value: value
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith('');
    });
    test('test handleOnChange set attempts to default value', function () {
      var value = 1;
      output.handleOnChange({
        target: {
          value: value
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith('1 (Default)');
    });
    test('test handleOnChange set attempts to non-numeric value', function () {
      var value = '';
      output.handleOnChange({
        target: {
          value: value
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith(value);
    });
    test('test handleOnChange set attempts to negative value', function () {
      var value = -1;
      output.handleOnChange({
        target: {
          value: value
        }
      });
      expect(state.setState[state.keys.attemptDisplayValue]).toHaveBeenCalledWith(0);
    });
    test('test handleWeightChange', function () {
      var value = 2;
      output.handleWeightChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          weight: parseFloat(value)
        })
      });
    });
  });
  describe('Show answer card hooks', function () {
    var showAnswer = {
      on: 'after_attempts',
      afterAttempts: 5
    };
    beforeEach(function () {
      output = hooks.useAnswerSettings(showAnswer, updateSettings);
    });
    test('test handleShowAnswerChange', function () {
      var value = 'always';
      output.handleShowAnswerChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        showAnswer: _objectSpread(_objectSpread({}, showAnswer), {}, {
          on: value
        })
      });
    });
    test('test handleAttemptsChange', function () {
      var value = 3;
      output.handleAttemptsChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        showAnswer: _objectSpread(_objectSpread({}, showAnswer), {}, {
          afterAttempts: parseInt(value)
        })
      });
    });
  });
  describe('Timer card hooks', function () {
    test('test handleChange', function () {
      output = hooks.timerCardHooks(updateSettings);
      var value = 5;
      output.handleChange({
        target: {
          value: value
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        timeBetween: value
      });
    });
  });
  describe('Type row hooks', function () {
    var typeRowProps = {
      problemType: _problem.ProblemTypeKeys.MULTISELECT,
      typeKey: _problem.ProblemTypeKeys.DROPDOWN,
      blockTitle: _problem.ProblemTypes[_problem.ProblemTypeKeys.MULTISELECT].title,
      setBlockTitle: jest.fn(),
      updateField: jest.fn(),
      updateAnswer: jest.fn(),
      correctAnswerCount: 2,
      answers: [{
        correct: true,
        id: 'a',
        title: '<p>testA</p>'
      }, {
        correct: true,
        id: 'b',
        title: '<p>testB</p>'
      }, {
        correct: false,
        id: 'c',
        title: '<p>testC</p>'
      }]
    };
    var fetchEditorContent = function fetchEditorContent() {
      return {
        answers: {
          a: 'testA',
          b: 'testB',
          c: 'testC'
        }
      };
    };
    beforeEach(function () {
      jest.clearAllMocks();
      jest.spyOn(editHooks, moduleKeys.fetchEditorContent).mockImplementationOnce(fetchEditorContent);
    });
    test('test onClick Multi-select to Dropdown', function () {
      output = hooks.typeRowHooks(typeRowProps);
      output.onClick();
      expect(typeRowProps.setBlockTitle).toHaveBeenCalledWith(_problem.ProblemTypes[_problem.ProblemTypeKeys.DROPDOWN].title);
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(1, _objectSpread(_objectSpread({}, typeRowProps.answers[0]), {}, {
        correct: false,
        title: 'testA'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(2, _objectSpread(_objectSpread({}, typeRowProps.answers[1]), {}, {
        correct: false,
        title: 'testB'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(3, _objectSpread(_objectSpread({}, typeRowProps.answers[2]), {}, {
        correct: false,
        title: 'testC'
      }));
      expect(typeRowProps.updateField).toHaveBeenCalledWith({
        problemType: _problem.ProblemTypeKeys.DROPDOWN
      });
    });
    test('test onClick Multi-select to Dropdown with one correct answer', function () {
      var oneAnswerTypeRowProps = _objectSpread(_objectSpread({}, typeRowProps), {}, {
        correctAnswerCount: 1,
        answers: [{
          correct: true,
          id: 'a',
          title: '<p>testA</p>'
        }, {
          correct: false,
          id: 'b',
          title: '<p>testB</p>'
        }, {
          correct: false,
          id: 'c',
          title: '<p>testC</p>'
        }]
      });
      output = hooks.typeRowHooks(oneAnswerTypeRowProps);
      output.onClick();
      expect(typeRowProps.setBlockTitle).toHaveBeenCalledWith(_problem.ProblemTypes[_problem.ProblemTypeKeys.DROPDOWN].title);
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(1, _objectSpread(_objectSpread({}, oneAnswerTypeRowProps.answers[0]), {}, {
        title: 'testA'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(2, _objectSpread(_objectSpread({}, oneAnswerTypeRowProps.answers[1]), {}, {
        title: 'testB'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(3, _objectSpread(_objectSpread({}, oneAnswerTypeRowProps.answers[2]), {}, {
        title: 'testC'
      }));
      expect(typeRowProps.updateField).toHaveBeenCalledWith({
        problemType: _problem.ProblemTypeKeys.DROPDOWN
      });
    });
    test('test onClick Multi-select to Numeric', function () {
      output = hooks.typeRowHooks(_objectSpread(_objectSpread({}, typeRowProps), {}, {
        typeKey: _problem.ProblemTypeKeys.NUMERIC
      }));
      output.onClick();
      expect(typeRowProps.setBlockTitle).toHaveBeenCalledWith(_problem.ProblemTypes[_problem.ProblemTypeKeys.NUMERIC].title);
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(1, _objectSpread(_objectSpread({}, typeRowProps.answers[0]), {}, {
        correct: true,
        title: 'testA'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(2, _objectSpread(_objectSpread({}, typeRowProps.answers[1]), {}, {
        correct: true,
        title: 'testB'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(3, _objectSpread(_objectSpread({}, typeRowProps.answers[2]), {}, {
        correct: true,
        title: 'testC'
      }));
      expect(typeRowProps.updateField).toHaveBeenCalledWith({
        problemType: _problem.ProblemTypeKeys.NUMERIC
      });
    });
    test('test onClick Multi-select to Text Input', function () {
      output = hooks.typeRowHooks(_objectSpread(_objectSpread({}, typeRowProps), {}, {
        typeKey: _problem.ProblemTypeKeys.TEXTINPUT
      }));
      output.onClick();
      expect(typeRowProps.setBlockTitle).toHaveBeenCalledWith(_problem.ProblemTypes[_problem.ProblemTypeKeys.TEXTINPUT].title);
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(1, _objectSpread(_objectSpread({}, typeRowProps.answers[0]), {}, {
        title: 'testA'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(2, _objectSpread(_objectSpread({}, typeRowProps.answers[1]), {}, {
        title: 'testB'
      }));
      expect(typeRowProps.updateAnswer).toHaveBeenNthCalledWith(3, _objectSpread(_objectSpread({}, typeRowProps.answers[2]), {}, {
        title: 'testC'
      }));
      expect(typeRowProps.updateField).toHaveBeenCalledWith({
        problemType: _problem.ProblemTypeKeys.TEXTINPUT
      });
    });
  });
  test('test confirmSwitchToAdvancedEditor hook', function () {
    var switchToAdvancedEditor = jest.fn();
    var setConfirmOpen = jest.fn();
    window.scrollTo = jest.fn();
    hooks.confirmSwitchToAdvancedEditor({
      switchToAdvancedEditor: switchToAdvancedEditor,
      setConfirmOpen: setConfirmOpen
    });
    expect(switchToAdvancedEditor).toHaveBeenCalled();
    expect(setConfirmOpen).toHaveBeenCalledWith(false);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
//# sourceMappingURL=hooks.test.js.map