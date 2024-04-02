"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _i18n = require("@edx/frontend-platform/i18n");
var messages = (0, _i18n.defineMessages)({
  advanceProblemButtonLabel: {
    id: 'authoring.problemEditor.problemSelect.advanceButton.label',
    defaultMessage: 'Advanced problem types',
    description: 'Button label for advance problem types option'
  },
  advanceMenuTitle: {
    id: 'authoring.problemEditor.advanceProblem.menu.title',
    defaultMessage: 'Advanced problems',
    description: 'Title for advanced problem menu'
  },
  advanceProblemTypeLabel: {
    id: 'authoring.problemEditor.advanceProblem.problemType.label',
    defaultMessage: '{problemType}',
    description: 'Label for advance problem type radio select'
  },
  problemSupportStatus: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus',
    defaultMessage: '{supportStatus}',
    description: 'Text for advance problem type\'s support status'
  },
  supportStatusTooltipMessage: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus.tooltipMessage',
    defaultMessage: "{supportStatus,  select,\n      Provisional {Provisionally supported tools might lack the robustness of functionality\n        that your courses require. edX does not have control over the quality of the software,\n        or of the content that can be provided using these tools.\n        \n \n\n        Test these tools thoroughly before using them in your course, especially in graded\n        sections. Complete documentstion might not be available for provisionally supported\n        tools, or documentation might be available from sources other than edX.}\n      Not_supported {Tools with no support are not maintained by edX, and might be deprecated\n        in the future. They are not recommened for use in courses due to non-compliance with one\n        or more of the base requirements, such as testing, accessibility, internationalization,\n        and documentation.}\n      other { } \n    }",
    description: 'Message for support status tooltip'
  },
  previewTitle: {
    id: 'authoring.problemEditor.preview.title',
    defaultMessage: '{previewTitle} problem',
    description: 'Title for the problem preview column'
  },
  previewAltText: {
    id: 'authoring.problemEditor.preview.altText',
    defaultMessage: "A preview illustration of a {problemType, select,\n      multiplechoiceresponse {single select}\n      stringreponse {text input}\n      numericalresponse {numerical input}\n      optionresponse {dropdown}\n      choiceresponse {multiple select}\n      other {null}\n    } problem",
    description: 'Alt text for the illustration of the problem preview'
  },
  previewDescription: {
    id: 'authoring.problemEditor.preview.description',
    defaultMessage: '{previewDescription}',
    description: 'Description of the selected problem type'
  },
  learnMoreButtonLabel: {
    id: 'authoring.problemEditor.learnMoreButtonLabel.label',
    defaultMessage: 'Learn more',
    description: 'Label for Learn more button'
  },
  learnMoreAdvancedButtonLabel: {
    id: 'authoring.problemEditor.advanceProblem.learnMoreButtonLabel.label',
    defaultMessage: 'Learn more about advanced problem types',
    description: 'Label for Learn more about advanced problem types button'
  }
});
var _default = exports["default"] = messages;
//# sourceMappingURL=messages.js.map