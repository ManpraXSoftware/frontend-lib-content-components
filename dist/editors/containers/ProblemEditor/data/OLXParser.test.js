"use strict";

var _OLXParser = require("./OLXParser");
var _olxTestData = require("./mockData/olxTestData");
var _problem = require("../../../data/constants/problem");
describe('Check OLXParser problem type', function () {
  test('Test checkbox with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.MULTISELECT);
  });
  test('Test numeric problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithFeedbackAndHintsOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.NUMERIC);
  });
  test('Test dropdown with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.DROPDOWN);
  });
  test('Test multiple choice with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.SINGLESELECT);
  });
  test('Test textual problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.TEXTINPUT);
  });
  test('Test Advanced Problem Type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.advancedProblemOlX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.ADVANCED);
  });
  test('Test Advanced Problem Type by multiples', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleProblemOlX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.ADVANCED);
  });
  test('Test Advanced Problem Type by multiples, second example', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleProblemTwoOlX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.ADVANCED);
  });
  test('Test Advanced Problem Type by multiples, third example', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleProblemThreeOlX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(_problem.ProblemTypeKeys.ADVANCED);
  });
  test('Test Blank Problem Type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.blankProblemOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    expect(problemType).toBe(null);
  });
});
describe('OLX Parser settings attributes on problem tags', function () {
  test('OLX with attributes on the problem tags should error out', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.labelDescriptionQuestionOLX.rawOLX);
    try {
      olxparser.getParsedOLXData();
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe('Misc Attributes asscoiated with problem, opening in advanced editor');
    }
  });
});
describe('Check OLXParser hints', function () {
  test('Test checkbox hints', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
    var hints = olxparser.getHints();
    expect(hints).toEqual(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.hints);
  });
  test('Test numeric hints', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithFeedbackAndHintsOLX.rawOLX);
    var hints = olxparser.getHints();
    expect(hints).toEqual(_olxTestData.numericInputWithFeedbackAndHintsOLX.hints);
  });
  test('Test dropdown with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.rawOLX);
    var hints = olxparser.getHints();
    expect(hints).toEqual(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.hints);
  });
  test('Test multiple choice with feedback and hints problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
    var hints = olxparser.getHints();
    expect(hints).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.hints);
  });
  test('Test textual problem type', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLX.rawOLX);
    var hints = olxparser.getHints();
    expect(hints).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.hints);
  });
});
describe('Check OLXParser for answer parsing', function () {
  test('Test check single select with empty answers', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithoutAnswers.rawOLX);
    var answer = olxparser.parseMultipleChoiceAnswers('multiplechoiceresponse', 'choicegroup', 'choice');
    expect(answer).toEqual(_olxTestData.multipleChoiceWithoutAnswers.data);
  });
  test('Test checkbox answer', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
    var answer = olxparser.parseMultipleChoiceAnswers('choiceresponse', 'checkboxgroup', 'choice');
    expect(answer).toEqual(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.data);
  });
  test('Test checkbox answer', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
    var answer = olxparser.parseMultipleChoiceAnswers('choiceresponse', 'checkboxgroup', 'choice');
    expect(answer).toEqual(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.data);
  });
  test('Test checkboxs with extraneous tags error out', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.shuffleProblemOLX.rawOLX);
    try {
      olxparser.parseMultipleChoiceAnswers('choiceresponse', 'checkboxgroup', 'choice');
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe('Misc Tags, reverting to Advanced Editor');
    }
  });
  test('Test dropdown answer', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.rawOLX);
    var answer = olxparser.parseMultipleChoiceAnswers('optionresponse', 'optioninput', 'option');
    expect(answer).toEqual(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.data);
  });
  test('Test multiple choice single select', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
    var answer = olxparser.parseMultipleChoiceAnswers('multiplechoiceresponse', 'choicegroup', 'choice');
    expect(answer).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.data);
  });
  test('Test string response answers', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLX.rawOLX);
    var answer = olxparser.parseStringResponse();
    expect(answer).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.data);
  });
  test('Test string response answers with multiple answers', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.rawOLX);
    var answer = olxparser.parseStringResponse();
    expect(answer).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.data);
  });
  test('Test numerical response answers', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithFeedbackAndHintsOLX.rawOLX);
    var answer = olxparser.parseNumericResponse();
    expect(answer).toEqual(_olxTestData.numericInputWithFeedbackAndHintsOLX.data);
  });
});
describe('Check OLXParser for question parsing', function () {
  test('Test checkbox question', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
    var question = olxparser.parseQuestions('choiceresponse');
    expect(question).toEqual(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.question);
  });
  test('Test dropdown question', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.rawOLX);
    var question = olxparser.parseQuestions('optionresponse');
    expect(question).toEqual(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.question);
  });
  test('Test multiple choice single select question', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
    var question = olxparser.parseQuestions('multiplechoiceresponse');
    expect(question).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.question);
  });
  test('Test string response question', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLX.rawOLX);
    var question = olxparser.parseQuestions('stringresponse');
    expect(question).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.question);
  });
  test('Test numerical response question', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithFeedbackAndHintsOLX.rawOLX);
    var question = olxparser.parseQuestions('numericalresponse');
    expect(question).toEqual(_olxTestData.numericInputWithFeedbackAndHintsOLX.question);
  });
  test('Test Advanced Problem Type by script tag', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.scriptProblemOlX.rawOLX);
    expect(function () {
      return olxparser.parseQuestions('numericalresponse');
    }).toThrow(new Error('Script Tag, reverting to Advanced Editor'));
  });
  test('Test OLX with no question content should have empty string for question', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.blankQuestionOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    var question = olxparser.parseQuestions(problemType);
    expect(question).toBe(_olxTestData.blankQuestionOLX.question);
  });
  test('Test OLX question content with styling should parse/build with correct styling', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.styledQuestionOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    var question = olxparser.parseQuestions(problemType);
    expect(question).toBe(_olxTestData.styledQuestionOLX.question);
  });
  test('Test OLX content with labels and descriptions inside reponse tag should parse correctly, appending the label/description to the question', function () {
    var olxparser = new _OLXParser.OLXParser(_olxTestData.labelDescriptionQuestionOLX.rawOLX);
    var problemType = olxparser.getProblemType();
    var question = olxparser.parseQuestions(problemType);
    expect(question).toBe(_olxTestData.labelDescriptionQuestionOLX.question);
  });
});
describe('OLXParser for problem with solution tag', function () {
  describe('for checkbox questions', function () {
    test('should parse text in p tags', function () {
      var _getCheckboxesOLXWith = (0, _olxTestData.getCheckboxesOLXWithFeedbackAndHintsOLX)(),
        rawOLX = _getCheckboxesOLXWith.rawOLX;
      var olxparser = new _OLXParser.OLXParser(rawOLX);
      var problemType = olxparser.getProblemType();
      var explanation = olxparser.getSolutionExplanation(problemType);
      var expected = (0, _olxTestData.getCheckboxesOLXWithFeedbackAndHintsOLX)().solutionExplanation;
      expect(explanation.replace(/\s/g, '')).toBe(expected.replace(/\s/g, ''));
    });
  });
});
//# sourceMappingURL=OLXParser.test.js.map