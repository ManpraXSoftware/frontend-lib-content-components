"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowAnswerTypesKeys = exports.ShowAnswerTypes = exports.RandomizationTypesKeys = exports.RandomizationTypes = exports.ProblemTypes = exports.ProblemTypeKeys = exports.AdvanceProblems = exports.AdvanceProblemKeys = void 0;
var _utils = require("../../utils");
var _singleSelect = _interopRequireDefault(require("../images/singleSelect.png"));
var _multiSelect = _interopRequireDefault(require("../images/multiSelect.png"));
var _dropdown = _interopRequireDefault(require("../images/dropdown.png"));
var _numericalInput = _interopRequireDefault(require("../images/numericalInput.png"));
var _textInput = _interopRequireDefault(require("../images/textInput.png"));
var _advancedOlxTemplates = _interopRequireDefault(require("./advancedOlxTemplates"));
var _basicOlxTemplates = _interopRequireDefault(require("./basicOlxTemplates"));
var _StrictDict, _StrictDict2, _StrictDict3, _StrictDict4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProblemTypeKeys = exports.ProblemTypeKeys = (0, _utils.StrictDict)({
  SINGLESELECT: 'multiplechoiceresponse',
  MULTISELECT: 'choiceresponse',
  DROPDOWN: 'optionresponse',
  NUMERIC: 'numericalresponse',
  TEXTINPUT: 'stringresponse',
  ADVANCED: 'advanced'
});
var ProblemTypes = exports.ProblemTypes = (0, _utils.StrictDict)((_StrictDict = {}, _defineProperty(_StrictDict, ProblemTypeKeys.SINGLESELECT, {
  title: 'Single select',
  preview: _singleSelect["default"],
  previewDescription: 'Learners must select the correct answer from a list of possible options.',
  description: 'Enter your single select answers below and select which choice is correct',
  helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/multiple_choice.html',
  prev: ProblemTypeKeys.TEXTINPUT,
  next: ProblemTypeKeys.MULTISELECT,
  template: _basicOlxTemplates["default"].singleSelect
}), _defineProperty(_StrictDict, ProblemTypeKeys.MULTISELECT, {
  title: 'Multi-select',
  preview: _multiSelect["default"],
  previewDescription: 'Learners must select all correct answers from a list of possible options.',
  description: 'Enter your multi-select answers below and select which choices are correct',
  helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/checkbox.html',
  next: ProblemTypeKeys.DROPDOWN,
  prev: ProblemTypeKeys.SINGLESELECT,
  template: _basicOlxTemplates["default"].multiSelect
}), _defineProperty(_StrictDict, ProblemTypeKeys.DROPDOWN, {
  title: 'Dropdown',
  preview: _dropdown["default"],
  previewDescription: 'Learners must select the correct answer from a list of possible options',
  description: 'Enter your dropdown answers below and select which choice is correct',
  helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/dropdown.html',
  next: ProblemTypeKeys.NUMERIC,
  prev: ProblemTypeKeys.MULTISELECT,
  template: _basicOlxTemplates["default"].dropdown
}), _defineProperty(_StrictDict, ProblemTypeKeys.NUMERIC, {
  title: 'Numerical input',
  preview: _numericalInput["default"],
  previewDescription: 'Specify one or more correct numeric answers, submitted in a response field.',
  description: 'Enter correct numerical input answers below',
  helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/numerical_input.html',
  next: ProblemTypeKeys.TEXTINPUT,
  prev: ProblemTypeKeys.DROPDOWN,
  template: _basicOlxTemplates["default"].numeric
}), _defineProperty(_StrictDict, ProblemTypeKeys.TEXTINPUT, {
  title: 'Text input',
  preview: _textInput["default"],
  previewDescription: 'Specify one or more correct text answers, including numbers and special characters, submitted in a response field.',
  description: 'Enter your text input answers below and select which choices are correct',
  helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/text_input.html',
  prev: ProblemTypeKeys.NUMERIC,
  next: ProblemTypeKeys.SINGLESELECT,
  template: _basicOlxTemplates["default"].textInput
}), _defineProperty(_StrictDict, ProblemTypeKeys.ADVANCED, {
  title: 'Advanced Problem',
  preview: '<div />',
  description: 'An Advanced Problem Type',
  helpLink: 'something.com'
}), _StrictDict));
var AdvanceProblemKeys = exports.AdvanceProblemKeys = (0, _utils.StrictDict)({
  BLANK: 'blankadvanced',
  CIRCUITSCHEMATIC: 'circuitschematic',
  JSINPUT: 'jsinputresponse',
  CUSTOMGRADER: 'customgrader',
  IMAGE: 'imageresponse',
  FORMULA: 'formularesponse',
  PROBLEMWITHHINT: 'problemwithhint'
});
var AdvanceProblems = exports.AdvanceProblems = (0, _utils.StrictDict)((_StrictDict2 = {}, _defineProperty(_StrictDict2, AdvanceProblemKeys.BLANK, {
  title: 'Blank advanced problem',
  status: '',
  template: '<problem></problem>'
}), _defineProperty(_StrictDict2, AdvanceProblemKeys.CIRCUITSCHEMATIC, {
  title: 'Circuit schematic builder',
  status: 'Not supported',
  template: _advancedOlxTemplates["default"].circuitSchematic
}), _defineProperty(_StrictDict2, AdvanceProblemKeys.JSINPUT, {
  title: 'Custom JavaScript display and grading',
  status: '',
  template: _advancedOlxTemplates["default"].jsInputResponse
}), _defineProperty(_StrictDict2, AdvanceProblemKeys.CUSTOMGRADER, {
  title: 'Custom Python-evaluated input',
  status: 'Provisional',
  template: _advancedOlxTemplates["default"].customGrader
}), _defineProperty(_StrictDict2, AdvanceProblemKeys.IMAGE, {
  title: 'Image mapped input',
  status: 'Not supported',
  template: _advancedOlxTemplates["default"].imageResponse
}), _defineProperty(_StrictDict2, AdvanceProblemKeys.FORMULA, {
  title: 'Math expression input',
  status: '',
  template: _advancedOlxTemplates["default"].formulaResponse
}), _defineProperty(_StrictDict2, AdvanceProblemKeys.PROBLEMWITHHINT, {
  title: 'Problem with adaptive hint',
  status: 'Not supported',
  template: _advancedOlxTemplates["default"].problemWithHint
}), _StrictDict2));
var ShowAnswerTypesKeys = exports.ShowAnswerTypesKeys = (0, _utils.StrictDict)({
  ALWAYS: 'always',
  ANSWERED: 'answered',
  ATTEMPTED: 'attempted',
  CLOSED: 'closed',
  FINISHED: 'finished',
  CORRECT_OR_PAST_DUE: 'correct_or_past_due',
  PAST_DUE: 'past_due',
  NEVER: 'never',
  AFTER_SOME_NUMBER_OF_ATTEMPTS: 'after_attempts',
  AFTER_ALL_ATTEMPTS: 'after_all_attempts',
  AFTER_ALL_ATTEMPTS_OR_CORRECT: 'after_all_attempts_or_correct',
  ATTEMPTED_NO_PAST_DUE: 'attempted_no_past_due'
});
var ShowAnswerTypes = exports.ShowAnswerTypes = (0, _utils.StrictDict)((_StrictDict3 = {}, _defineProperty(_StrictDict3, ShowAnswerTypesKeys.ALWAYS, {
  id: 'authoring.problemeditor.settings.showanswertype.always',
  defaultMessage: 'Always'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.ANSWERED, {
  id: 'authoring.problemeditor.settings.showanswertype.answered',
  defaultMessage: 'Answered'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.ATTEMPTED, {
  id: 'authoring.problemeditor.settings.showanswertype.attempted',
  defaultMessage: 'Attempted or Past Due'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.CLOSED, {
  id: 'authoring.problemeditor.settings.showanswertype.closed',
  defaultMessage: 'Closed'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.FINISHED, {
  id: 'authoring.problemeditor.settings.showanswertype.finished',
  defaultMessage: 'Finished'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.CORRECT_OR_PAST_DUE, {
  id: 'authoring.problemeditor.settings.showanswertype.correct_or_past_due',
  defaultMessage: 'Correct or Past Due'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.PAST_DUE, {
  id: 'authoring.problemeditor.settings.showanswertype.past_due',
  defaultMessage: 'Past Due'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.NEVER, {
  id: 'authoring.problemeditor.settings.showanswertype.never',
  defaultMessage: 'Never'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.AFTER_SOME_NUMBER_OF_ATTEMPTS, {
  id: 'authoring.problemeditor.settings.showanswertype.after_attempts',
  defaultMessage: 'After Some Number of Attempts'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS, {
  id: 'authoring.problemeditor.settings.showanswertype.after_all_attempts',
  defaultMessage: 'After All Attempts'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS_OR_CORRECT, {
  id: 'authoring.problemeditor.settings.showanswertype.after_all_attempts_or_correct',
  defaultMessage: 'After All Attempts or Correct'
}), _defineProperty(_StrictDict3, ShowAnswerTypesKeys.ATTEMPTED_NO_PAST_DUE, {
  id: 'authoring.problemeditor.settings.showanswertype.attempted_no_past_due',
  defaultMessage: 'Attempted'
}), _StrictDict3));
var RandomizationTypesKeys = exports.RandomizationTypesKeys = (0, _utils.StrictDict)({
  ALWAYS: 'always',
  NEVER: 'never',
  ONRESET: 'on_reset',
  PERSTUDENT: 'per_student'
});
var RandomizationTypes = exports.RandomizationTypes = (0, _utils.StrictDict)((_StrictDict4 = {}, _defineProperty(_StrictDict4, RandomizationTypesKeys.ALWAYS, {
  id: 'authoring.problemeditor.settings.RandomizationTypes.always',
  defaultMessage: 'Always'
}), _defineProperty(_StrictDict4, RandomizationTypesKeys.NEVER, {
  id: 'authoring.problemeditor.settings.RandomizationTypes.never',
  defaultMessage: 'Never'
}), _defineProperty(_StrictDict4, RandomizationTypesKeys.ONRESET, {
  id: 'authoring.problemeditor.settings.RandomizationTypes.onreset',
  defaultMessage: 'On Reset'
}), _defineProperty(_StrictDict4, RandomizationTypesKeys.PERSTUDENT, {
  id: 'authoring.problemeditor.settings.RandomizationTypes.perstudent',
  defaultMessage: 'Per Student'
}), _StrictDict4));
//# sourceMappingURL=problem.js.map