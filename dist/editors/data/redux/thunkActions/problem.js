"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchToAdvancedEditor = exports.loadProblem = exports.isBlankProblem = exports.initializeProblem = exports.getDataFromOlx = exports.fetchAdvancedSettings = exports["default"] = void 0;
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _2 = require("..");
var requests = _interopRequireWildcard(require("./requests"));
var _OLXParser = require("../../../containers/ProblemEditor/data/OLXParser");
var _SettingsParser = require("../../../containers/ProblemEditor/data/SettingsParser");
var _problem = require("../../constants/problem");
var _ReactStateOLXParser = _interopRequireDefault(require("../../../containers/ProblemEditor/data/ReactStateOLXParser"));
var _olxTestData = require("../../../containers/ProblemEditor/data/mockData/olxTestData");
var _utils = require("../../../utils");
var _hooks = require("../../../containers/ProblemEditor/components/EditProblemView/hooks");
var _excluded = ["settings"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var switchToAdvancedEditor = exports.switchToAdvancedEditor = function switchToAdvancedEditor() {
  return function (dispatch, getState) {
    var state = getState();
    var editorObject = (0, _hooks.fetchEditorContent)({
      format: ''
    });
    var reactOLXParser = new _ReactStateOLXParser["default"]({
      problem: state.problem,
      editorObject: editorObject
    });
    var rawOLX = reactOLXParser.buildOLX();
    dispatch(_2.actions.problem.updateField({
      problemType: _problem.ProblemTypeKeys.ADVANCED,
      rawOLX: rawOLX
    }));
  };
};
var isBlankProblem = exports.isBlankProblem = function isBlankProblem(_ref) {
  var rawOLX = _ref.rawOLX;
  if (rawOLX === _olxTestData.blankProblemOLX.rawOLX) {
    return true;
  }
  return false;
};
var getDataFromOlx = exports.getDataFromOlx = function getDataFromOlx(_ref2) {
  var _parsedProblem;
  var rawOLX = _ref2.rawOLX,
    rawSettings = _ref2.rawSettings;
  var olxParser;
  var parsedProblem;
  try {
    olxParser = new _OLXParser.OLXParser(rawOLX);
    parsedProblem = olxParser.getParsedOLXData();
  } catch (error) {
    console.error('The Problem Could Not Be Parsed from OLX. redirecting to Advanced editor.', error);
    return {
      problemType: _problem.ProblemTypeKeys.ADVANCED,
      rawOLX: rawOLX,
      settings: (0, _SettingsParser.parseSettings)(rawSettings)
    };
  }
  if (((_parsedProblem = parsedProblem) === null || _parsedProblem === void 0 ? void 0 : _parsedProblem.problemType) === _problem.ProblemTypeKeys.ADVANCED) {
    return {
      problemType: _problem.ProblemTypeKeys.ADVANCED,
      rawOLX: rawOLX,
      settings: (0, _SettingsParser.parseSettings)(rawSettings)
    };
  }
  var _parsedProblem2 = parsedProblem,
    settings = _parsedProblem2.settings,
    data = _objectWithoutProperties(_parsedProblem2, _excluded);
  var parsedSettings = _objectSpread(_objectSpread({}, settings), (0, _SettingsParser.parseSettings)(rawSettings));
  if (!_lodashEs["default"].isEmpty(rawOLX) && !_lodashEs["default"].isEmpty(data)) {
    return _objectSpread(_objectSpread({}, data), {}, {
      rawOLX: rawOLX,
      settings: parsedSettings
    });
  }
  return {};
};
var loadProblem = exports.loadProblem = function loadProblem(_ref3) {
  var rawOLX = _ref3.rawOLX,
    rawSettings = _ref3.rawSettings,
    defaultSettings = _ref3.defaultSettings;
  return function (dispatch) {
    if (isBlankProblem({
      rawOLX: rawOLX
    })) {
      dispatch(_2.actions.problem.setEnableTypeSelection((0, _utils.camelizeKeys)(defaultSettings)));
    } else {
      dispatch(_2.actions.problem.load(getDataFromOlx({
        rawOLX: rawOLX,
        rawSettings: rawSettings
      })));
    }
  };
};
var fetchAdvancedSettings = exports.fetchAdvancedSettings = function fetchAdvancedSettings(_ref4) {
  var rawOLX = _ref4.rawOLX,
    rawSettings = _ref4.rawSettings;
  return function (dispatch) {
    var advancedProblemSettingKeys = ['max_attempts', 'showanswer', 'show_reset_button'];
    dispatch(requests.fetchAdvancedSettings({
      onSuccess: function onSuccess(response) {
        var defaultSettings = {};
        Object.entries(response.data).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];
          if (advancedProblemSettingKeys.includes(key)) {
            defaultSettings[key] = value.value;
          }
        });
        dispatch(_2.actions.problem.updateField({
          defaultSettings: (0, _utils.camelizeKeys)(defaultSettings)
        }));
        loadProblem({
          rawOLX: rawOLX,
          rawSettings: rawSettings,
          defaultSettings: defaultSettings
        })(dispatch);
      },
      onFailure: function onFailure() {
        loadProblem({
          rawOLX: rawOLX,
          rawSettings: rawSettings,
          defaultSettings: {}
        })(dispatch);
      }
    }));
  };
};
var initializeProblem = exports.initializeProblem = function initializeProblem(blockValue) {
  return function (dispatch) {
    var rawOLX = _lodashEs["default"].get(blockValue, 'data.data', {});
    var rawSettings = _lodashEs["default"].get(blockValue, 'data.metadata', {});
    dispatch(fetchAdvancedSettings({
      rawOLX: rawOLX,
      rawSettings: rawSettings
    }));
  };
};
var _default = exports["default"] = {
  initializeProblem: initializeProblem,
  switchToAdvancedEditor: switchToAdvancedEditor,
  fetchAdvancedSettings: fetchAdvancedSettings
};
//# sourceMappingURL=problem.js.map