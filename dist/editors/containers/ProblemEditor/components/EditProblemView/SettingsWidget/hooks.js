"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnswerSettings = exports.typeRowHooks = exports.timerCardHooks = exports.state = exports.showFullCard = exports.showAdvancedSettingsCards = exports.scoringCardHooks = exports.resetCardHooks = exports.matlabCardHooks = exports.hintsRowHooks = exports.hintsCardHooks = exports.confirmSwitchToAdvancedEditor = void 0;
var _react = require("react");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _module = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _problem = require("../../../../../data/constants/problem");
var _hooks2 = require("../hooks");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var state = exports.state = {
  showAdvanced: function showAdvanced(val) {
    return (0, _react.useState)(val);
  },
  cardCollapsed: function cardCollapsed(val) {
    return (0, _react.useState)(val);
  },
  summary: function summary(val) {
    return (0, _react.useState)(val);
  },
  showAttempts: function showAttempts(val) {
    return (0, _react.useState)(val);
  },
  attemptDisplayValue: function attemptDisplayValue(val) {
    return (0, _react.useState)(val);
  }
};
var showAdvancedSettingsCards = exports.showAdvancedSettingsCards = function showAdvancedSettingsCards() {
  var _module$state$showAdv = _module.state.showAdvanced(false),
    _module$state$showAdv2 = _slicedToArray(_module$state$showAdv, 2),
    isAdvancedCardsVisible = _module$state$showAdv2[0],
    setIsAdvancedCardsVisible = _module$state$showAdv2[1];
  return {
    isAdvancedCardsVisible: isAdvancedCardsVisible,
    showAdvancedCards: function showAdvancedCards() {
      return setIsAdvancedCardsVisible(true);
    }
  };
};
var showFullCard = exports.showFullCard = function showFullCard(hasExpandableTextArea) {
  var _module$state$cardCol = _module.state.cardCollapsed(hasExpandableTextArea),
    _module$state$cardCol2 = _slicedToArray(_module$state$cardCol, 2),
    isCardCollapsibleOpen = _module$state$cardCol2[0],
    setIsCardCollapsibleOpen = _module$state$cardCol2[1];
  return {
    isCardCollapsibleOpen: isCardCollapsibleOpen,
    toggleCardCollapse: function toggleCardCollapse() {
      if (hasExpandableTextArea) {
        setIsCardCollapsibleOpen(true);
      } else {
        setIsCardCollapsibleOpen(!isCardCollapsibleOpen);
      }
    }
  };
};
var hintsCardHooks = exports.hintsCardHooks = function hintsCardHooks(hints, updateSettings) {
  var _module$state$summary = _module.state.summary({
      message: _messages["default"].noHintSummary,
      values: {}
    }),
    _module$state$summary2 = _slicedToArray(_module$state$summary, 2),
    summary = _module$state$summary2[0],
    setSummary = _module$state$summary2[1];
  (0, _react.useEffect)(function () {
    var hintsNumber = hints.length;
    if (hintsNumber === 0) {
      setSummary({
        message: _messages["default"].noHintSummary,
        values: {}
      });
    } else {
      setSummary({
        message: _messages["default"].hintSummary,
        values: {
          hint: hints[0].value,
          count: hintsNumber - 1
        }
      });
    }
  }, [hints]);
  var handleAdd = function handleAdd() {
    var newId = 0;
    if (!_lodashEs["default"].isEmpty(hints)) {
      newId = Math.max.apply(Math, _toConsumableArray(hints.map(function (hint) {
        return hint.id;
      }))) + 1;
    }
    var hint = {
      id: newId,
      value: ''
    };
    var modifiedHints = [].concat(_toConsumableArray(hints), [hint]);
    updateSettings({
      hints: modifiedHints
    });
  };
  return {
    summary: summary,
    handleAdd: handleAdd
  };
};
var hintsRowHooks = exports.hintsRowHooks = function hintsRowHooks(id, hints, updateSettings) {
  var handleChange = function handleChange(value) {
    var modifiedHints = hints.map(function (hint) {
      if (hint.id === id) {
        return _objectSpread(_objectSpread({}, hint), {}, {
          value: value
        });
      }
      return hint;
    });
    updateSettings({
      hints: modifiedHints
    });
  };
  var handleDelete = function handleDelete() {
    var modifiedHints = hints.filter(function (hint) {
      return hint.id !== id;
    });
    updateSettings({
      hints: modifiedHints
    });
  };
  return {
    handleChange: handleChange,
    handleDelete: handleDelete
  };
};
var matlabCardHooks = exports.matlabCardHooks = function matlabCardHooks(matLabApiKey, updateSettings) {
  var _module$state$summary3 = _module.state.summary({
      message: '',
      values: {},
      intl: false
    }),
    _module$state$summary4 = _slicedToArray(_module$state$summary3, 2),
    summary = _module$state$summary4[0],
    setSummary = _module$state$summary4[1];
  (0, _react.useEffect)(function () {
    if (_lodashEs["default"].isEmpty(matLabApiKey)) {
      setSummary({
        message: _messages["default"].matlabNoKeySummary,
        values: {},
        intl: true
      });
    } else {
      setSummary({
        message: matLabApiKey,
        values: {},
        intl: false
      });
    }
  }, [matLabApiKey]);
  var handleChange = function handleChange(event) {
    updateSettings({
      matLabApiKey: event.target.value
    });
  };
  return {
    summary: summary,
    handleChange: handleChange
  };
};
var resetCardHooks = exports.resetCardHooks = function resetCardHooks(updateSettings) {
  var setReset = function setReset(value) {
    updateSettings({
      showResetButton: value
    });
  };
  return {
    setResetTrue: function setResetTrue() {
      return setReset(true);
    },
    setResetFalse: function setResetFalse() {
      return setReset(false);
    }
  };
};
var scoringCardHooks = exports.scoringCardHooks = function scoringCardHooks(scoring, updateSettings, defaultValue) {
  var loadedAttemptsNumber = scoring.attempts.number === defaultValue ? "".concat(scoring.attempts.number, " (Default)") : scoring.attempts.number;
  var _module$state$attempt = _module.state.attemptDisplayValue(loadedAttemptsNumber),
    _module$state$attempt2 = _slicedToArray(_module$state$attempt, 2),
    attemptDisplayValue = _module$state$attempt2[0],
    setAttemptDisplayValue = _module$state$attempt2[1];
  var handleUnlimitedChange = function handleUnlimitedChange(event) {
    var isUnlimited = event.target.checked;
    if (isUnlimited) {
      setAttemptDisplayValue('');
      updateSettings({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: '',
            unlimited: true
          }
        })
      });
    } else {
      setAttemptDisplayValue("".concat(defaultValue, " (Default)"));
      updateSettings({
        scoring: _objectSpread(_objectSpread({}, scoring), {}, {
          attempts: {
            number: defaultValue,
            unlimited: false
          }
        })
      });
    }
  };
  var handleMaxAttemptChange = function handleMaxAttemptChange(event) {
    var unlimitedAttempts = false;
    var attemptNumber = parseInt(event.target.value);
    var value = event.target.value;
    if (_lodashEs["default"].isNaN(attemptNumber)) {
      if (value === '') {
        attemptNumber = defaultValue;
        setAttemptDisplayValue("".concat(defaultValue, " (Default)"));
      } else {
        attemptNumber = '';
        unlimitedAttempts = true;
      }
    } else if (attemptNumber <= 0) {
      attemptNumber = 0;
    } else if (attemptNumber === defaultValue) {
      var attemptNumberStr = value.replace(' (Default)');
      attemptNumber = parseInt(attemptNumberStr);
    }
    updateSettings({
      scoring: _objectSpread(_objectSpread({}, scoring), {}, {
        attempts: {
          number: attemptNumber,
          unlimited: unlimitedAttempts
        }
      })
    });
  };
  var handleOnChange = function handleOnChange(event) {
    var newMaxAttempt = parseInt(event.target.value);
    if (newMaxAttempt === defaultValue) {
      newMaxAttempt = "".concat(defaultValue, " (Default)");
    } else if (_lodashEs["default"].isNaN(newMaxAttempt)) {
      newMaxAttempt = '';
    } else if (newMaxAttempt < 0) {
      newMaxAttempt = 0;
    }
    setAttemptDisplayValue(newMaxAttempt);
  };
  var handleWeightChange = function handleWeightChange(event) {
    var weight = parseFloat(event.target.value);
    if (_lodashEs["default"].isNaN(weight)) {
      weight = 0;
    }
    updateSettings({
      scoring: _objectSpread(_objectSpread({}, scoring), {}, {
        weight: weight
      })
    });
  };
  return {
    attemptDisplayValue: attemptDisplayValue,
    handleUnlimitedChange: handleUnlimitedChange,
    handleMaxAttemptChange: handleMaxAttemptChange,
    handleOnChange: handleOnChange,
    handleWeightChange: handleWeightChange
  };
};
var useAnswerSettings = exports.useAnswerSettings = function useAnswerSettings(showAnswer, updateSettings) {
  var _module$state$showAtt = _module.state.showAttempts(false),
    _module$state$showAtt2 = _slicedToArray(_module$state$showAtt, 2),
    showAttempts = _module$state$showAtt2[0],
    setShowAttempts = _module$state$showAtt2[1];
  var numberOfAttemptsChoice = [_problem.ShowAnswerTypesKeys.AFTER_SOME_NUMBER_OF_ATTEMPTS, _problem.ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS, _problem.ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS_OR_CORRECT];
  (0, _react.useEffect)(function () {
    setShowAttempts(_lodashEs["default"].includes(numberOfAttemptsChoice, showAnswer.on));
  }, [showAttempts]);
  var handleShowAnswerChange = function handleShowAnswerChange(event) {
    var value = event.target.value;
    setShowAttempts(_lodashEs["default"].includes(numberOfAttemptsChoice, value));
    updateSettings({
      showAnswer: _objectSpread(_objectSpread({}, showAnswer), {}, {
        on: value
      })
    });
  };
  var handleAttemptsChange = function handleAttemptsChange(event) {
    var attempts = parseInt(event.target.value);
    if (_lodashEs["default"].isNaN(attempts)) {
      attempts = 0;
    }
    updateSettings({
      showAnswer: _objectSpread(_objectSpread({}, showAnswer), {}, {
        afterAttempts: attempts
      })
    });
  };
  return {
    handleShowAnswerChange: handleShowAnswerChange,
    handleAttemptsChange: handleAttemptsChange,
    showAttempts: showAttempts
  };
};
var timerCardHooks = exports.timerCardHooks = function timerCardHooks(updateSettings) {
  return {
    handleChange: function handleChange(event) {
      var time = parseInt(event.target.value);
      if (_lodashEs["default"].isNaN(time)) {
        time = 0;
      }
      updateSettings({
        timeBetween: time
      });
    }
  };
};
var typeRowHooks = exports.typeRowHooks = function typeRowHooks(_ref) {
  var answers = _ref.answers,
    blockTitle = _ref.blockTitle,
    correctAnswerCount = _ref.correctAnswerCount,
    problemType = _ref.problemType,
    setBlockTitle = _ref.setBlockTitle,
    typeKey = _ref.typeKey,
    updateField = _ref.updateField,
    updateAnswer = _ref.updateAnswer;
  var richTextProblems = [_problem.ProblemTypeKeys.SINGLESELECT, _problem.ProblemTypeKeys.MULTISELECT];
  var clearPreviouslySelectedAnswers = function clearPreviouslySelectedAnswers() {
    var currentAnswerTitles;
    if (richTextProblems.includes(problemType)) {
      currentAnswerTitles = (0, _hooks2.fetchEditorContent)({
        format: 'text'
      }).answers;
    }
    answers.forEach(function (answer) {
      var _currentAnswerTitles;
      var title = ((_currentAnswerTitles = currentAnswerTitles) === null || _currentAnswerTitles === void 0 ? void 0 : _currentAnswerTitles[answer.id]) || answer.title;
      if (answer.correct) {
        updateAnswer(_objectSpread(_objectSpread({}, answer), {}, {
          title: title,
          correct: false
        }));
      } else {
        updateAnswer(_objectSpread(_objectSpread({}, answer), {}, {
          title: title
        }));
      }
    });
  };
  var updateAnswersToCorrect = function updateAnswersToCorrect() {
    var currentAnswerTitles;
    if (richTextProblems.includes(problemType)) {
      currentAnswerTitles = (0, _hooks2.fetchEditorContent)({
        format: 'text'
      }).answers;
    }
    answers.forEach(function (answer) {
      var title = currentAnswerTitles ? currentAnswerTitles[answer.id] : answer.title;
      updateAnswer(_objectSpread(_objectSpread({}, answer), {}, {
        title: title,
        correct: true
      }));
    });
  };
  var convertToPlainText = function convertToPlainText() {
    var currentAnswerTitles = (0, _hooks2.fetchEditorContent)({
      format: 'text'
    }).answers;
    answers.forEach(function (answer) {
      updateAnswer(_objectSpread(_objectSpread({}, answer), {}, {
        title: currentAnswerTitles[answer.id]
      }));
    });
  };
  var onClick = function onClick() {
    // Numeric, text, and dropdowns cannot render HTML as answer values, so if switching from a single select
    // or multi-select problem the rich text needs to covert to plain text
    if (typeKey === _problem.ProblemTypeKeys.TEXTINPUT && richTextProblems.includes(problemType)) {
      convertToPlainText();
    }
    // Dropdown problems can only have one correct answer. When there is more than one correct answer
    // from a previous problem type, the correct attribute for selected answers need to be set to false.
    if (typeKey === _problem.ProblemTypeKeys.DROPDOWN) {
      if (correctAnswerCount > 1) {
        clearPreviouslySelectedAnswers();
      } else if (richTextProblems.includes(problemType)) {
        convertToPlainText();
      }
    }
    // Numeric input problems can only have correct answers. Switch all answers to correct when switching
    // to numeric input.
    if (typeKey === _problem.ProblemTypeKeys.NUMERIC) {
      updateAnswersToCorrect();
    }
    if (blockTitle === _problem.ProblemTypes[problemType].title) {
      setBlockTitle(_problem.ProblemTypes[typeKey].title);
    }
    updateField({
      problemType: typeKey
    });
  };
  return {
    onClick: onClick
  };
};
var confirmSwitchToAdvancedEditor = exports.confirmSwitchToAdvancedEditor = function confirmSwitchToAdvancedEditor(_ref2) {
  var switchToAdvancedEditor = _ref2.switchToAdvancedEditor,
    setConfirmOpen = _ref2.setConfirmOpen;
  switchToAdvancedEditor();
  setConfirmOpen(false);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
//# sourceMappingURL=hooks.js.map