"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.groupFeedbackRowHooks = exports.groupFeedbackCardHooks = void 0;
var _react = require("react");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _messages = _interopRequireDefault(require("./messages"));
var _module = _interopRequireWildcard(require("./hooks"));
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
  summary: function summary(val) {
    return (0, _react.useState)(val);
  }
};
var groupFeedbackCardHooks = exports.groupFeedbackCardHooks = function groupFeedbackCardHooks(groupFeedbacks, updateSettings, answerslist) {
  var _module$state$summary = _module.state.summary({
      message: _messages["default"].noGroupFeedbackSummary,
      values: {}
    }),
    _module$state$summary2 = _slicedToArray(_module$state$summary, 2),
    summary = _module$state$summary2[0],
    setSummary = _module$state$summary2[1];
  (0, _react.useEffect)(function () {
    if (groupFeedbacks.length === 0) {
      setSummary({
        message: _messages["default"].noGroupFeedbackSummary,
        values: {}
      });
    } else {
      var feedbacksInList = groupFeedbacks.map(function (_ref) {
        var answers = _ref.answers,
          feedback = _ref.feedback;
        var answerIDs = answerslist.map(function (a) {
          return a.id;
        });
        var answersString = answers.filter(function (value) {
          return answerIDs.includes(value);
        });
        return "".concat(answersString, " ").concat(feedback, "\n");
      });
      setSummary({
        message: _messages["default"].groupFeedbackSummary,
        values: {
          groupFeedback: feedbacksInList
        }
      });
    }
  }, [groupFeedbacks, answerslist]);
  var handleAdd = function handleAdd() {
    var newId = 0;
    if (!_lodashEs["default"].isEmpty(groupFeedbacks)) {
      newId = Math.max.apply(Math, _toConsumableArray(groupFeedbacks.map(function (feedback) {
        return feedback.id;
      }))) + 1;
    }
    var groupFeedback = {
      id: newId,
      answers: [],
      feedback: ''
    };
    var modifiedGroupFeedbacks = [].concat(_toConsumableArray(groupFeedbacks), [groupFeedback]);
    updateSettings({
      groupFeedbackList: modifiedGroupFeedbacks
    });
  };
  return {
    summary: summary,
    handleAdd: handleAdd
  };
};
var groupFeedbackRowHooks = exports.groupFeedbackRowHooks = function groupFeedbackRowHooks(_ref2) {
  var id = _ref2.id,
    groupFeedbacks = _ref2.groupFeedbacks,
    updateSettings = _ref2.updateSettings;
  // Hooks for the answers associated with a groupfeedback
  var addSelectedAnswer = function addSelectedAnswer(_ref3) {
    var value = _ref3.value;
    var oldGroupFeedback = groupFeedbacks.find(function (x) {
      return x.id === id;
    });
    var newAnswers = [].concat(_toConsumableArray(oldGroupFeedback.answers), [value]);
    var newFeedback = _objectSpread(_objectSpread({}, oldGroupFeedback), {}, {
      answers: newAnswers
    });
    var remainingFeedbacks = groupFeedbacks.filter(function (item) {
      return item.id !== id;
    });
    var updatedFeedbackList = [newFeedback].concat(_toConsumableArray(remainingFeedbacks)).sort(function (a, b) {
      return a.id - b.id;
    });
    updateSettings({
      groupFeedbackList: updatedFeedbackList
    });
  };
  var removedSelectedAnswer = function removedSelectedAnswer(_ref4) {
    var value = _ref4.value;
    var oldGroupFeedback = groupFeedbacks.find(function (x) {
      return x.id === id;
    });
    var newAnswers = oldGroupFeedback.answers.filter(function (item) {
      return item !== value;
    });
    var newFeedback = _objectSpread(_objectSpread({}, oldGroupFeedback), {}, {
      answers: newAnswers
    });
    var remainingFeedbacks = groupFeedbacks.filter(function (item) {
      return item.id !== id;
    });
    var updatedFeedbackList = [newFeedback].concat(_toConsumableArray(remainingFeedbacks)).sort(function (a, b) {
      return a.id - b.id;
    });
    updateSettings({
      groupFeedbackList: updatedFeedbackList
    });
  };
  var handleAnswersSelectedChange = function handleAnswersSelectedChange(event) {
    var _event$target = event.target,
      checked = _event$target.checked,
      value = _event$target.value;
    if (checked) {
      addSelectedAnswer({
        value: value
      });
    } else {
      removedSelectedAnswer({
        value: value
      });
    }
  };

  // Delete Button
  var handleDelete = function handleDelete() {
    var modifiedGroupFeedbacks = groupFeedbacks.filter(function (item) {
      return item.id !== id;
    });
    updateSettings({
      groupFeedbackList: modifiedGroupFeedbacks
    });
  };

  // Hooks for the feedback associated with a groupfeedback
  var handleFeedbackChange = function handleFeedbackChange(event) {
    var value = event.target.value;
    var modifiedGroupFeedback = groupFeedbacks.map(function (groupFeedback) {
      if (groupFeedback.id === id) {
        return _objectSpread(_objectSpread({}, groupFeedback), {}, {
          feedback: value
        });
      }
      return groupFeedback;
    });
    updateSettings({
      groupFeedbackList: modifiedGroupFeedback
    });
  };
  return {
    handleAnswersSelectedChange: handleAnswersSelectedChange,
    handleFeedbackChange: handleFeedbackChange,
    handleDelete: handleDelete
  };
};
//# sourceMappingURL=hooks.js.map