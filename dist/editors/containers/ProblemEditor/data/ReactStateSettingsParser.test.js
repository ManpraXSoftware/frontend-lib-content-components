"use strict";

var _ReactStateSettingsParser = _interopRequireDefault(require("./ReactStateSettingsParser"));
var _problemTestData = require("./mockData/problemTestData");
var _excluded = ["markdown"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
describe('Test State to Settings Parser', function () {
  test('Test settings parsed from react state', function () {
    var settings = new _ReactStateSettingsParser["default"](_problemTestData.checklistWithFeebackHints.state).getSettings();
    var _checklistWithFeeback = _problemTestData.checklistWithFeebackHints.metadata,
      markdown = _checklistWithFeeback.markdown,
      settingsPayload = _objectWithoutProperties(_checklistWithFeeback, _excluded);
    expect(settings).toStrictEqual(settingsPayload);
  });
});
//# sourceMappingURL=ReactStateSettingsParser.test.js.map