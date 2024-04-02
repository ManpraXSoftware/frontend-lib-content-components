"use strict";

var _SettingsParser = require("./SettingsParser");
var _problemTestData = require("./mockData/problemTestData");
var _excluded = ["hints"],
  _excluded2 = ["hints"],
  _excluded3 = ["randomization", "matLabApiKey"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
describe('Test Settings to State Parser', function () {
  test('Test all fields populated', function () {
    var settings = (0, _SettingsParser.parseSettings)(_problemTestData.checklistWithFeebackHints.metadata);
    var _checklistWithFeeback = _problemTestData.checklistWithFeebackHints.state.settings,
      hints = _checklistWithFeeback.hints,
      settingsPayload = _objectWithoutProperties(_checklistWithFeeback, _excluded);
    expect(settings).toStrictEqual(settingsPayload);
  });
  test('Test partial fields populated', function () {
    var settings = (0, _SettingsParser.parseSettings)(_problemTestData.dropdownWithFeedbackHints.metadata);
    var _dropdownWithFeedback = _problemTestData.dropdownWithFeedbackHints.state.settings,
      hints = _dropdownWithFeedback.hints,
      settingsPayload = _objectWithoutProperties(_dropdownWithFeedback, _excluded2);
    expect(settings).not.toStrictEqual(settingsPayload);
    var randomization = settingsPayload.randomization,
      matLabApiKey = settingsPayload.matLabApiKey,
      settingsPayloadPartial = _objectWithoutProperties(settingsPayload, _excluded3);
    expect(settings).toStrictEqual(settingsPayloadPartial);
  });
  test('Test score settings', function () {
    var scoreSettings = (0, _SettingsParser.parseScoringSettings)(_problemTestData.checklistWithFeebackHints.metadata);
    expect(scoreSettings).toStrictEqual(_problemTestData.checklistWithFeebackHints.state.settings.scoring);
  });
  test('Test score settings zero attempts', function () {
    var scoreSettings = (0, _SettingsParser.parseScoringSettings)(_problemTestData.numericWithHints.metadata);
    expect(scoreSettings).toStrictEqual(_problemTestData.numericWithHints.state.settings.scoring);
  });
  test('Test score settings attempts missing', function () {
    var scoreSettings = (0, _SettingsParser.parseScoringSettings)(_problemTestData.singleSelectWithHints.metadata);
    expect(scoreSettings.attempts).toStrictEqual(_problemTestData.singleSelectWithHints.state.settings.scoring.attempts);
  });
  test('Test negative attempts in score', function () {
    var scoreSettings = (0, _SettingsParser.parseScoringSettings)(_problemTestData.negativeAttempts.metadata);
    expect(scoreSettings.attempts).toStrictEqual(_problemTestData.negativeAttempts.state.settings.scoring.attempts);
  });
  test('Test score settings missing', function () {
    var settings = (0, _SettingsParser.parseSettings)(_problemTestData.singleSelectWithHints.metadata);
    expect(settings.scoring).toStrictEqual(_problemTestData.singleSelectWithHints.state.settings.scoring);
  });
  test('Test invalid randomization', function () {
    var settings = (0, _SettingsParser.parseSettings)(_problemTestData.numericWithHints.metadata);
    expect(settings.randomization).toBeUndefined();
  });
  test('Test invalid show answer', function () {
    var showAnswerSettings = (0, _SettingsParser.parseShowAnswer)(_problemTestData.numericWithHints.metadata);
    expect(showAnswerSettings.on).toBeUndefined();
  });
  test('Test show answer settings missing', function () {
    var settings = (0, _SettingsParser.parseShowAnswer)(_problemTestData.textInputWithHints.metadata);
    expect(settings.showAnswer).toBeUndefined();
  });
  test('Test empty metadata', function () {
    var scoreSettings = (0, _SettingsParser.parseSettings)({});
    expect(scoreSettings).toStrictEqual({});
  });
  test('Test null metadata', function () {
    var scoreSettings = (0, _SettingsParser.parseSettings)(null);
    expect(scoreSettings).toStrictEqual({});
  });
});
//# sourceMappingURL=SettingsParser.test.js.map