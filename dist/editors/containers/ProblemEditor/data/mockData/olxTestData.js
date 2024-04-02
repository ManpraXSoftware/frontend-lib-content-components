"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textInputWithFeedbackAndHintsOLXWithMultipleAnswers = exports.textInputWithFeedbackAndHintsOLX = exports.styledQuestionOLX = exports.shuffleProblemOLX = exports.scriptProblemOlX = exports.numericInputWithFeedbackAndHintsOLX = exports.numericInputWithAnswerRangeOLX = exports.multipleProblemTwoOlX = exports.multipleProblemThreeOlX = exports.multipleProblemOlX = exports.multipleChoiceWithoutAnswers = exports.multipleChoiceWithFeedbackAndHintsOLX = exports.labelDescriptionQuestionOLX = exports.getCheckboxesOLXWithFeedbackAndHintsOLX = exports.dropdownOLXWithFeedbackAndHintsOLX = exports.checkboxesOLXWithFeedbackAndHintsOLX = exports.blankQuestionOLX = exports.blankProblemOLX = exports.advancedProblemOlX = void 0;
var getCheckboxesOLXWithFeedbackAndHintsOLX = exports.getCheckboxesOLXWithFeedbackAndHintsOLX = function getCheckboxesOLXWithFeedbackAndHintsOLX() {
  return {
    rawOLX: "<problem>\n  <choiceresponse>\n    <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n  <label>Add the question text, or prompt, here. This text is required.</label>\n  <description>You can add an optional tip or note related to the prompt like this.</description>\n  <checkboxgroup>\n      <choice correct=\"true\"><p>a correct answer</p>\n        <choicehint selected=\"true\"><p>You can specify optional feedback that appears after the learner selects and submits this answer.</p></choicehint>\n        <choicehint selected=\"false\"><p>You can specify optional feedback that appears after the learner clears and submits this answer.</p></choicehint>\n  </choice>\n      <choice correct=\"false\"><p>an incorrect answer</p></choice>\n      <choice correct=\"false\"><p>an incorrect answer</p>\n        <choicehint selected=\"true\"><p>You can specify optional feedback for none, all, or a subset of the answers.</p></choicehint>\n        <choicehint selected=\"false\"><p>You can specify optional feedback for selected answers, cleared answers, or both.</p></choicehint>\n  </choice>\n      <choice correct=\"true\"><p>a correct answer</p></choice>\n      <compoundhint value=\"A B D\">You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted.</compoundhint>\n      <compoundhint value=\"A B C D\">You can specify optional feedback for one, several, or all answer combinations.</compoundhint>\n    </checkboxgroup>\n    <solution>\n        <div class=\"detailed-solution\">\n            <p>Explanation</p>\n            <p>\n                You can form a voltage divider that evenly divides the input\n                voltage with two identically valued resistors, with the sampled\n                voltage taken in between the two.\n            </p>\n            <p><img src=\"/static/images/voltage_divider.png\" alt=\"\"></img></p>\n         </div>\n      </solution>\n  </choiceresponse>\n  <demandhint>\n    <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n    <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n  </demandhint>\n  </problem>",
    hints: [{
      id: 0,
      value: '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>'
    }, {
      id: 1,
      value: '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>'
    }],
    solutionExplanation: "\n  <p>\n      You can form a voltage divider that evenly divides the input\n      voltage with two identically valued resistors, with the sampled\n      voltage taken in between the two.\n  </p>\n  <p><img src=\"/static/images/voltage_divider.png\" alt=\"\"></img></p>",
    data: {
      answers: [{
        id: 'A',
        title: '<p>a correct answer</p>',
        correct: true,
        selectedFeedback: '<p>You can specify optional feedback that appears after the learner selects and submits this answer.</p>',
        unselectedFeedback: '<p>You can specify optional feedback that appears after the learner clears and submits this answer.</p>'
      }, {
        id: 'B',
        title: '<p>an incorrect answer</p>',
        correct: false
      }, {
        id: 'C',
        title: '<p>an incorrect answer</p>',
        correct: false,
        selectedFeedback: '<p>You can specify optional feedback for none, all, or a subset of the answers.</p>',
        unselectedFeedback: '<p>You can specify optional feedback for selected answers, cleared answers, or both.</p>'
      }, {
        id: 'D',
        title: '<p>a correct answer</p>',
        correct: true
      }],
      groupFeedbackList: [{
        id: 0,
        answers: ['A', 'B', 'D'],
        feedback: 'You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted.'
      }, {
        id: 1,
        answers: ['A', 'B', 'C', 'D'],
        feedback: 'You can specify optional feedback for one, several, or all answer combinations.'
      }]
    },
    question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
    buildOLX: "<problem>\n  <choiceresponse>\n    <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n    <label>Add the question text, or prompt, here. This text is required.</label>\n    <em>You can add an optional tip or note related to the prompt like this.</em>\n    <checkboxgroup>\n      <choice correct=\"true\">\n<p>a correct answer </p>       <choicehint selected=\"true\"><p>You can specify optional feedback that appears after the learner selects and submits this answer.</p></choicehint>\n        <choicehint selected=\"false\"><p>You can specify optional feedback that appears after the learner clears and submits this answer.</p></choicehint>\n      </choice>\n      <choice correct=\"false\"><p>an incorrect answer</p></choice>\n      <choice correct=\"false\">\n<p>an incorrect answer</p>        <choicehint selected=\"true\"><p>You can specify optional feedback for none, all, or a subset of the answers.</p></choicehint>\n        <choicehint selected=\"false\"><p>You can specify optional feedback for selected answers, cleared answers, or both.</p></choicehint>\n      </choice>\n      <choice correct=\"true\"><p>a correct answer</p></choice>\n      <compoundhint value=\"A B D\">You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted.</compoundhint>\n      <compoundhint value=\"A B C D\">You can specify optional feedback for one, several, or all answer combinations.</compoundhint>\n    </checkboxgroup>\n      <solution>\n      <div class=\"detailed-solution\">\n      <p>Explanation</p>\n      <p>\n          You can form a voltage divider that evenly divides the input\n          voltage with two identically valued resistors, with the sampled\n          voltage taken in between the two.\n      </p>\n      <p><img src=\"/static/images/voltage_divider.png\" alt=\"\"></img></p>\n    </div>\n      </solution>\n  </choiceresponse>\n  <demandhint>\n    <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n    <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n  </demandhint>\n</problem>\n"
  };
};
var checkboxesOLXWithFeedbackAndHintsOLX = exports.checkboxesOLXWithFeedbackAndHintsOLX = getCheckboxesOLXWithFeedbackAndHintsOLX({});
var multipleChoiceWithoutAnswers = exports.multipleChoiceWithoutAnswers = {
  rawOLX: "<problem>\n  <multiplechoiceresponse>\n    <choicegroup>\n  </choicegroup>\n  </multiplechoiceresponse>\n  <demandhint></demandhint>\n  <solution></solution>\n  </problem>",
  data: {
    answers: [{
      id: 'A',
      title: '',
      correct: true
    }]
  }
};
var dropdownOLXWithFeedbackAndHintsOLX = exports.dropdownOLXWithFeedbackAndHintsOLX = {
  rawOLX: "<problem>\n<optionresponse>\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<label>Add the question text, or prompt, here. This text is required.</label>\n<description>You can add an optional tip or note related to the prompt like this. </description>\n<optioninput>\n    <option correct=\"false\">an incorrect answer <optionhint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></optionhint>\n</option>\n    <option correct=\"true\">the correct answer</option>\n    <option correct=\"false\">an incorrect answer <optionhint><p>You can specify optional feedback for none, a subset, or all of the answers.</p></optionhint>\n</option>\n  </optioninput>\n</optionresponse>\n<demandhint>\n  <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n  <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n</demandhint>\n</problem>",
  hints: [{
    id: 0,
    value: '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>'
  }, {
    id: 1,
    value: '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>'
  }],
  data: {
    answers: [{
      id: 'A',
      title: 'an incorrect answer',
      correct: false,
      selectedFeedback: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>'
    }, {
      id: 'B',
      title: 'the correct answer',
      correct: true
    }, {
      id: 'C',
      title: 'an incorrect answer',
      correct: false,
      selectedFeedback: '<p>You can specify optional feedback for none, a subset, or all of the answers.</p>'
    }]
  },
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  buildOLX: "<problem>\n  <optionresponse>\n    <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n    <label>Add the question text, or prompt, here. This text is required.</label>\n    <em>You can add an optional tip or note related to the prompt like this.</em>\n    <optioninput>\n      <option correct=\"false\">\nan incorrect answer        <optionhint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></optionhint>\n      </option>\n      <option correct=\"true\">the correct answer</option>\n      <option correct=\"false\">\nan incorrect answer        <optionhint><p>You can specify optional feedback for none, a subset, or all of the answers.</p></optionhint>\n      </option>\n    </optioninput>\n  </optionresponse>\n  <demandhint>\n    <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n    <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n  </demandhint>\n</problem>\n"
};
var multipleChoiceWithFeedbackAndHintsOLX = exports.multipleChoiceWithFeedbackAndHintsOLX = {
  rawOLX: "<problem>\n<multiplechoiceresponse>\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<label>Add the question text, or prompt, here. This text is required.</label>\n<description>You can add an optional tip or note related to the prompt like this. </description>\n<choicegroup type=\"MultipleChoice\">\n    <choice correct=\"false\"><p>an incorrect answer</p><choicehint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></choicehint>\n</choice>\n    <choice correct=\"true\"><p>the correct answer</p></choice>\n    <choice correct=\"false\"><p>an incorrect answer</p><choicehint><p>You can specify optional feedback for none, a subset, or all of the answers.</></choicehint>\n</choice>\n  </choicegroup>\n  <solution>\n    <p>You can add a solution</p>\n  </solution>\n</multiplechoiceresponse>\n<demandhint>\n  <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n  <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n</demandhint>\n</problem>",
  hints: [{
    id: 0,
    value: '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>'
  }, {
    id: 1,
    value: '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>'
  }],
  solutionExplanation: '<p>You can add a solution</p>',
  data: {
    answers: [{
      id: 'A',
      title: '<p>an incorrect answer</p>',
      correct: false,
      selectedFeedback: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>'
    }, {
      id: 'B',
      title: '<p>the correct answer</p>',
      correct: true
    }, {
      id: 'C',
      title: '<p>an incorrect answer</p>',
      correct: false,
      selectedFeedback: '<p>You can specify optional feedback for none, a subset, or all of the answers.</p>'
    }]
  },
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  buildOLX: "<problem>\n  <multiplechoiceresponse>\n    <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n    <label>Add the question text, or prompt, here. This text is required.</label>\n    <em>You can add an optional tip or note related to the prompt like this.</em>\n    <choicegroup>\n      <choice correct=\"false\">\n<p>an incorrect answer</p>        <choicehint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></choicehint>\n      </choice>\n      <choice correct=\"true\"><p>the correct answer</p></choice>\n      <choice correct=\"false\">\n<p>an incorrect answer </p>       <choicehint><p>You can specify optional feedback for none, a subset, or all of the answers.</p></choicehint>\n      </choice>\n    </choicegroup>\n    <solution>\n    <div class=\"detailed-solution\">\n  <p>Explanation</p>\n  <p>You can add a solution</p>\n</div>\n</solution>\n  </multiplechoiceresponse>\n  <demandhint>\n    <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n    <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n  </demandhint>\n</problem>\n"
};
var numericInputWithFeedbackAndHintsOLX = exports.numericInputWithFeedbackAndHintsOLX = {
  rawOLX: "<problem>\n<numericalresponse answer=\"100\">\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<label>Add the question text, or prompt, here. This text is required.</label>\n<description>You can add an optional tip or note related to the prompt like this. </description>\n<responseparam type=\"tolerance\" default=\"5\"/>\n  <formulaequationinput/>\n  <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n  <additional_answer answer=\"200\"><correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint></additional_answer>\n</numericalresponse>\n<demandhint>\n  <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n  <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n</demandhint>\n</problem>",
  hints: [{
    id: 0,
    value: '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>'
  }, {
    id: 1,
    value: '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>'
  }],
  data: {
    answers: [{
      id: 'A',
      title: '100',
      correct: true,
      selectedFeedback: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
      isAnswerRange: false,
      tolerance: '5'
    }, {
      id: 'B',
      title: '200',
      correct: true,
      isAnswerRange: false,
      selectedFeedback: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>'
    }]
  },
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  buildOLX: "<problem>\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n  <label>Add the question text, or prompt, here. This text is required.</label>\n  <em>You can add an optional tip or note related to the prompt like this.</em>\n  <numericalresponse answer=\"100\">\n    <responseparam type=\"tolerance\" default=\"5\"></responseparam>\n    <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n    <additional_answer answer=\"200\">\n      <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n    </additional_answer>\n    <formulaequationinput></formulaequationinput>\n  </numericalresponse>\n  <demandhint>\n    <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n    <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n  </demandhint>\n</problem>\n"
};
var numericInputWithAnswerRangeOLX = exports.numericInputWithAnswerRangeOLX = {
  rawOLX: "<problem>\n<numericalresponse answer=\"[3/2,-1.3)\">\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<label>Add the question text, or prompt, here. This text is required.</label>\n<description>You can add an optional tip or note related to the prompt like this. </description>\n  <formulaequationinput/></numericalresponse>\n</problem>",
  data: {
    answers: [{
      id: 'A',
      title: '[32,-1.3)',
      correct: true,
      selectedFeedback: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>',
      isAnswerRange: true
    }]
  },
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  buildOLX: "<problem>\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n  <label>Add the question text, or prompt, here. This text is required.</label>\n  <em>You can add an optional tip or note related to the prompt like this.</em>\n  <numericalresponse answer=\"(-1.3,3/2]\">\n    <formulaequationinput></formulaequationinput>\n  </numericalresponse>\n</problem>\n"
};
var textInputWithFeedbackAndHintsOLX = exports.textInputWithFeedbackAndHintsOLX = {
  rawOLX: "<problem>\n<stringresponse answer=\"the correct answer\" type=\"ci\">\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<label>Add the question text, or prompt, here. This text is required.</label>\n<description>You can add an optional tip or note related to the prompt like this. </description>\n<correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n  <additional_answer answer=\"optional acceptable variant of the correct answer\"/>\n  <stringequalhint answer=\"optional incorrect answer such as a frequent misconception\"><p>You can specify optional feedback for none, a subset, or all of the answers.</p></stringequalhint>\n  <textline size=\"20\"/>\n</stringresponse>\n<demandhint>\n  <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n  <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n</demandhint>\n</problem>",
  hints: [{
    id: 0,
    value: '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>'
  }, {
    id: 1,
    value: '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>'
  }],
  data: {
    answers: [{
      id: 'A',
      title: 'the correct answer',
      correct: true,
      selectedFeedback: '<p>You can specify optional feedback like this, which appears after this answer is submitted.</p>'
    }, {
      id: 'B',
      title: 'optional acceptable variant of the correct answer',
      correct: true,
      selectedFeedback: ''
    }, {
      id: 'C',
      title: 'optional incorrect answer such as a frequent misconception',
      correct: false,
      selectedFeedback: '<p>You can specify optional feedback for none, a subset, or all of the answers.</p>'
    }],
    additionalStringAttributes: {
      type: 'ci',
      textline: {
        size: '20'
      }
    }
  },
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  buildOLX: "<problem>\n  <stringresponse answer=\"the correct answer\" type=\"ci\">\n    <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n    <label>Add the question text, or prompt, here. This text is required.</label>\n    <em>You can add an optional tip or note related to the prompt like this.</em>\n    <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n    <additional_answer answer=\"optional acceptable variant of the correct answer\"></additional_answer>\n    <stringequalhint answer=\"optional incorrect answer such as a frequent misconception\"><p>You can specify optional feedback for none, a subset, or all of the answers.</p></stringequalhint>\n    <textline size=\"20\"></textline>\n  </stringresponse>\n  <demandhint>\n    <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n    <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n  </demandhint>\n</problem>\n"
};
var textInputWithFeedbackAndHintsOLXWithMultipleAnswers = exports.textInputWithFeedbackAndHintsOLXWithMultipleAnswers = {
  rawOLX: "<problem>\n<stringresponse answer=\"the correct answer\" type=\"ci\">\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<label>Add the question text, or prompt, here. This text is required.</label>\n<description>You can add an optional tip or note related to the prompt like this. </description>\n<correcthint>You can specify optional feedback like this, which appears after this answer is submitted.</correcthint>\n  <additional_answer answer=\"300\"><correcthint>You can specify optional feedback like this, which appears after this answer is submitted.</correcthint> </additional_answer>\n  <additional_answer answer=\"400\"><correcthint>You can specify optional feedback like this, which appears after this answer is submitted.</correcthint> </additional_answer>\n  <stringequalhint answer=\"optional incorrect answer such as a frequent misconception\">You can specify optional feedback for none, a subset, or all of the answers.</stringequalhint>\n  <textline size=\"20\"/>\n</stringresponse>\n<demandhint>\n  <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n  <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n</demandhint>\n</problem>",
  hints: [{
    id: 0,
    value: '<p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p>'
  }, {
    id: 1,
    value: '<p>If you add more than one hint, a different hint appears each time learners select the hint button.</p>'
  }],
  data: {
    answers: [{
      id: 'A',
      title: 'the correct answer',
      correct: true,
      selectedFeedback: 'You can specify optional feedback like this, which appears after this answer is submitted.'
    }, {
      id: 'B',
      title: '300',
      correct: true,
      selectedFeedback: 'You can specify optional feedback like this, which appears after this answer is submitted.'
    }, {
      correct: true,
      selectedFeedback: 'You can specify optional feedback like this, which appears after this answer is submitted.',
      id: 'C',
      title: '400'
    }, {
      id: 'D',
      title: 'optional incorrect answer such as a frequent misconception',
      correct: false,
      selectedFeedback: 'You can specify optional feedback for none, a subset, or all of the answers.'
    }],
    additionalStringAttributes: {
      type: 'ci',
      textline: {
        size: '20'
      }
    }
  },
  question: '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p><label>Add the question text, or prompt, here. This text is required.</label><em>You can add an optional tip or note related to the prompt like this.</em>',
  buildOLX: "<problem>\n  <stringresponse answer=\"the correct answer\" type=\"ci\">\n    <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n    <label>Add the question text, or prompt, here. This text is required.</label>\n    <em>You can add an optional tip or note related to the prompt like this.</em>\n    <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n    <additional_answer answer=\"300\">\n      <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n    </additional_answer>\n    <additional_answer answer=\"400\">\n      <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n    </additional_answer>\n    <stringequalhint answer=\"optional incorrect answer such as a frequent misconception\"><p>You can specify optional feedback for none, a subset, or all of the answers.</p></stringequalhint>\n    <textline size=\"20\"></textline>\n  </stringresponse>\n  <demandhint>\n    <hint><p>You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.</p></hint>\n    <hint><p>If you add more than one hint, a different hint appears each time learners select the hint button.</p></hint>\n  </demandhint>\n</problem>\n"
};
var advancedProblemOlX = exports.advancedProblemOlX = {
  rawOLX: "<problem>\n  <formularesponse type=\"ci\" samples=\"R_1,R_2,R_3@1,2,3:3,4,5#10\" answer=\"R_1*R_2/R_3\">\n      <p>You can use this template as a guide to the OLX markup to use for math expression problems. Edit this component to replace the example with your own assessment.</p>\n      <label>Add the question text, or prompt, here. This text is required. Example: Write an expression for the product of R_1, R_2, and the inverse of R_3.</label>\n      <description>You can add an optional tip or note related to the prompt like this. Example: To test this example, the correct answer is R_1*R_2/R_3</description>\n      <responseparam type=\"tolerance\" default=\"0.00001\"/>\n      <formulaequationinput size=\"40\"/>\n  </formularesponse>\n</problem>"
};
var scriptProblemOlX = exports.scriptProblemOlX = {
  rawOLX: "<problem>\n    <script>\n      some code\n    </script>\n  <numericalresponse answer=\"100\">\n  <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<label>Add the question text, or prompt, here. This text is required.</label>\n<description>You can add an optional tip or note related to the prompt like this. </description>\n<responseparam type=\"tolerance\" default=\"5\"/>\n  <formulaequationinput/>\n  <correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint>\n  <additional_answer answer=\"200\"><correcthint><p>You can specify optional feedback like this, which appears after this answer is submitted.</p></correcthint></additional_answer>\n</numericalresponse>\n</problem>"
};
var multipleProblemOlX = exports.multipleProblemOlX = {
  rawOLX: "<problem>\n  <stringresponse answer=\"correct answer\">\n    <textline size=\"20\"/>\n  </stringresponse>\n  <stringresponse answer=\"other correct answer\">\n    <textline size=\"20\"/>\n  </stringresponse>\n</problem>"
};
var multipleProblemTwoOlX = exports.multipleProblemTwoOlX = {
  rawOLX: "<problem>\n  <numericalresponse answer=\"100\">\n    <formulaequationinput></formulaequationinput>\n  </numericalresponse>\n  <numericalresponse answer=\"200\">\n    <formulaequationinput></formulaequationinput>\n  </numericalresponse>\n</problem>"
};
var multipleProblemThreeOlX = exports.multipleProblemThreeOlX = {
  rawOLX: "<problem>\n  <stringresponse answer=\"correct answer\">\n    <textline size=\"20\"/>\n  </stringresponse>\n  <numericalresponse answer=\"200\">\n    <formulaequationinput></formulaequationinput>\n  </numericalresponse>\n</problem>"
};
var blankProblemOLX = exports.blankProblemOLX = {
  rawOLX: '<problem></problem>'
};
var blankQuestionOLX = exports.blankQuestionOLX = {
  rawOLX: "<problem>\n  <stringresponse type=\"ci\">\n    <additional_answer />\n    <textline size=\"20\"/>\n  </stringresponse>\n</problem>",
  question: ''
};
var styledQuestionOLX = exports.styledQuestionOLX = {
  rawOLX: "<problem>\n  <p>\n    <strong>\n      <span style=\"background-color: #e03e2d;\">\n        test\n      </span>\n    </strong>\n  </p>\n  <stringresponse type=\"ci\">\n    <additional_answer />\n    <textline size=\"20\"/>\n  </stringresponse>\n</problem>",
  question: '<p><strong><span style="background-color: #e03e2d;">test</span></strong></p>'
};
var shuffleProblemOLX = exports.shuffleProblemOLX = {
  rawOLX: "<problem>\n  <multiplechoiceresponse>\n    <label>What Apple device competed with the portable CD player?</label>\n    <choicegroup type=\"MultipleChoice\" shuffle=\"true\">\n      <choice correct=\"false\">The iPad</choice>\n      <choice correct=\"false\">Napster</choice>\n      <choice correct=\"true\">The iPod</choice>\n      <choice correct=\"false\">The vegetable peeler</choice>\n    </choicegroup>\n  </multiplechoiceresponse>\n</problem>"
};
var labelDescriptionQuestionOLX = exports.labelDescriptionQuestionOLX = {
  rawOLX: "<problem display_name=\"Eggs b) - Choosing a System\" markdown=\"null\" max_attempts=\"3\" weight=\"0.5\">\n  <p style=\"text-align: center;\"><img height=\"274\" width=\"\" src=\"/static/boiling_eggs_water_system.png\" alt=\"boiling eggs: water system\"/></p>\n  <multiplechoiceresponse>\n  <label>Taking the system as just the <b>water</b>, as indicated by the red dashed line, what would be the correct expression for the first law of thermodynamics applied to this system?</label>\n  <description>Watch out, boiling water is hot</description>\n  <choicegroup type=\"MultipleChoice\">\n    <choice correct=\"true\">( Delta E_text{water} = Q )</choice>\n    <choice correct=\"false\">( Delta E_text{water} = - W )</choice>\n    <choice correct=\"false\">( Delta E_text{water} = 0 )</choice>\n  </choicegroup>\n  </multiplechoiceresponse>\n  <solution>\n    <div class=\"detailed-solution\">\n      <h2>Explanation</h2>\n    </div>\n  </solution>\n</problem>",
  question: '<p style="text-align: center;"><img height="274" width="" src="/static/boiling_eggs_water_system.png" alt="boiling eggs: water system"></img></p><label>Taking the system as just the<b>water</b>, as indicated by the red dashed line, what would be the correct expression for the first law of thermodynamics applied to this system?</label><em>Watch out, boiling water is hot</em>'
};
//# sourceMappingURL=olxTestData.js.map