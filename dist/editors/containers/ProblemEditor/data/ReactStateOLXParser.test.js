"use strict";

var _OLXParser = require("./OLXParser");
var _olxTestData = require("./mockData/olxTestData");
var _editorTestData = require("./mockData/editorTestData");
var _ReactStateOLXParser = _interopRequireDefault(require("./ReactStateOLXParser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Check React Sate OLXParser problem', function () {
  test('Test checkbox with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
    var problem = olxparser.getParsedOLXData();
    var stateParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: _editorTestData.checkboxesWithFeedbackAndHints
    });
    var buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toBe(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test dropdown with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.rawOLX);
    var problem = olxparser.getParsedOLXData();
    var stateParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: _editorTestData.dropdownWithFeedbackAndHints
    });
    var buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test string response with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLX.rawOLX);
    var problem = olxparser.getParsedOLXData();
    var stateParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: _editorTestData.textInputWithFeedbackAndHints
    });
    var buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test multiple choice with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
    var problem = olxparser.getParsedOLXData();
    var stateParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: _editorTestData.multipleChoiceWithFeedbackAndHints
    });
    var buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test numerical response with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithFeedbackAndHintsOLX.rawOLX);
    var problem = olxparser.getParsedOLXData();
    var stateParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: _editorTestData.numericInputWithFeedbackAndHints
    });
    var buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.numericInputWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test numerical response with isAnswerRange true', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithAnswerRangeOLX.rawOLX);
    var problem = olxparser.getParsedOLXData();
    var stateParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: _editorTestData.numericInputWithAnswerRange
    });
    var buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.numericInputWithAnswerRangeOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test string response with feedback and hints, multiple answers', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.rawOLX);
    var problem = olxparser.getParsedOLXData();
    var stateParser = new _ReactStateOLXParser["default"]({
      problem: problem,
      editorObject: _editorTestData.textInputWithFeedbackAndHintsWithMultipleAnswers
    });
    var buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.buildOLX.replace(/\s/g, ''));
  });
});
//# sourceMappingURL=ReactStateOLXParser.test.js.map