"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _SettingsParser = require("./SettingsParser");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ReactStateSettingsParser = /*#__PURE__*/function () {
  function ReactStateSettingsParser(problemState) {
    _classCallCheck(this, ReactStateSettingsParser);
    this.problemState = problemState;
  }
  _createClass(ReactStateSettingsParser, [{
    key: "getSettings",
    value: function getSettings() {
      var settings = {};
      var stateSettings = this.problemState.settings;
      settings = (0, _SettingsParser.popuplateItem)(settings, 'matLabApiKey', 'matlab_api_key', stateSettings);
      settings = (0, _SettingsParser.popuplateItem)(settings, 'number', 'max_attempts', stateSettings.scoring.attempts);
      settings = (0, _SettingsParser.popuplateItem)(settings, 'weight', 'weight', stateSettings.scoring);
      settings = (0, _SettingsParser.popuplateItem)(settings, 'on', 'showanswer', stateSettings.showAnswer);
      settings = (0, _SettingsParser.popuplateItem)(settings, 'afterAttempts', 'attempts_before_showanswer_button', stateSettings.showAnswer);
      settings = (0, _SettingsParser.popuplateItem)(settings, 'showResetButton', 'show_reset_button', stateSettings);
      settings = (0, _SettingsParser.popuplateItem)(settings, 'timeBetween', 'submission_wait_seconds', stateSettings);
      settings = (0, _SettingsParser.popuplateItem)(settings, 'randomization', 'rerandomize', stateSettings);
      return settings;
    }
  }]);
  return ReactStateSettingsParser;
}();
var _default = exports["default"] = ReactStateSettingsParser;
//# sourceMappingURL=ReactStateSettingsParser.js.map