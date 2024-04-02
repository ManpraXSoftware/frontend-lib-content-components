"use strict";

var _react = _interopRequireDefault(require("react"));
var _testUtils = require("../../../../../testUtils");
var _module = _interopRequireWildcard(require("./hooks"));
var _problem = require("../../../../data/constants/problem");
var _OLXParser = require("../../data/OLXParser");
var _excluded = ["settings"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable prefer-destructuring */
jest.mock('react', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
    useState: function useState(val) {
      return {
        useState: val
      };
    },
    useEffect: jest.fn()
  });
});
var state = new _testUtils.MockUseState(_module);
var mockUpdateField = jest.fn().mockName('updateField');
var mockSelected = 'multiplechoiceresponse';
var mockAdvancedSelected = 'circuitschematic';
var mockSetSelected = jest.fn().mockName('setSelected');
var mocksetBlockTitle = jest.fn().mockName('setBlockTitle');
var hook;
describe('SelectTypeModal hooks', function () {
  beforeEach(function () {
    state.mock();
  });
  afterEach(function () {
    state.restore();
    jest.clearAllMocks();
  });
  describe('selectHooks', function () {
    beforeEach(function () {
      hook = _module.selectHooks();
    });
    test('selected defaults to SINGLESELECT', function () {
      expect(hook.selected).toEqual(_problem.ProblemTypeKeys.SINGLESELECT);
    });
    test('setSelected sets state as expected', function () {
      var expectedArg = 'neWvAl';
      state.mockVal(state.keys.selected, 'mOcKvAl');
      hook.setSelected(expectedArg);
      expect(state.setState.selected).toHaveBeenCalledWith(expectedArg);
    });
  });
  describe('onSelect', function () {
    test('updateField is called with selected templated if selected is an Advanced Problem', function () {
      _module.onSelect({
        selected: mockAdvancedSelected,
        updateField: mockUpdateField,
        setBlockTitle: mocksetBlockTitle
      })();
      expect(mockUpdateField).toHaveBeenCalledWith({
        problemType: _problem.ProblemTypeKeys.ADVANCED,
        rawOLX: _problem.AdvanceProblems[mockAdvancedSelected].template
      });
      expect(mocksetBlockTitle).toHaveBeenCalledWith(_problem.AdvanceProblems[mockAdvancedSelected].title);
    });
    test('updateField is called with selected on visual propblems', function () {
      _module.onSelect({
        selected: mockSelected,
        updateField: mockUpdateField,
        setBlockTitle: mocksetBlockTitle
      })();
      var testOlXParser = new _OLXParser.OLXParser(_problem.ProblemTypes[mockSelected].template);
      var _testOlXParser$getPar = testOlXParser.getParsedOLXData(),
        settings = _testOlXParser$getPar.settings,
        testState = _objectWithoutProperties(_testOlXParser$getPar, _excluded);
      expect(mockUpdateField).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, testState), {}, {
        rawOLX: _problem.ProblemTypes[mockSelected].template
      }));
      expect(mocksetBlockTitle).toHaveBeenCalledWith(_problem.ProblemTypes[mockSelected].title);
    });
  });
  describe('useArrowNav', function () {
    document.body.innerHTML = "\n      <div id=\"multiplechoiceresponse\" />\n      <div id=\"choiceresponse\" />\n      <div id=\"optionresponse\" />\n      <div id=\"numericalresponse\" />\n      <div id=\"stringresponse\" />\n    ";
    var mockKeyUp = new KeyboardEvent('keydown', {
      key: 'ArrowUp'
    });
    var mockKeyDown = new KeyboardEvent('keydown', {
      key: 'ArrowDown'
    });
    var cb;
    var prereqs;
    describe('SINGLESELECT', function () {
      beforeEach(function () {
        _module.useArrowNav(_problem.ProblemTypeKeys.SINGLESELECT, mockSetSelected);
        var _React$useEffect$mock = _slicedToArray(_react["default"].useEffect.mock.calls[0], 2);
        cb = _React$useEffect$mock[0];
        prereqs = _React$useEffect$mock[1];
        cb();
      });
      test('pressing up arrow sets MULTISELECT', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.SINGLESELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.TEXTINPUT);
      });
      test('pressing down arrow sets MULTISELECT', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.SINGLESELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.MULTISELECT);
      });
    });
    describe('MULTISELECT', function () {
      beforeEach(function () {
        _module.useArrowNav(_problem.ProblemTypeKeys.MULTISELECT, mockSetSelected);
        var _React$useEffect$mock2 = _slicedToArray(_react["default"].useEffect.mock.calls[0], 2);
        cb = _React$useEffect$mock2[0];
        prereqs = _React$useEffect$mock2[1];
        cb();
      });
      test('pressing up arrow sets SINGLESELECT', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.MULTISELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.SINGLESELECT);
      });
      test('pressing down arrow sets DROPDOWN', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.MULTISELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.DROPDOWN);
      });
    });
    describe('DROPDOWN', function () {
      beforeEach(function () {
        _module.useArrowNav(_problem.ProblemTypeKeys.DROPDOWN, mockSetSelected);
        var _React$useEffect$mock3 = _slicedToArray(_react["default"].useEffect.mock.calls[0], 2);
        cb = _React$useEffect$mock3[0];
        prereqs = _React$useEffect$mock3[1];
        cb();
      });
      test('pressing up arrow sets MULTISELECT', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.DROPDOWN, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.MULTISELECT);
      });
      test('pressing down arrow sets NUMERIC', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.DROPDOWN, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.NUMERIC);
      });
    });
    describe('NUMERIC', function () {
      beforeEach(function () {
        _module.useArrowNav(_problem.ProblemTypeKeys.NUMERIC, mockSetSelected);
        var _React$useEffect$mock4 = _slicedToArray(_react["default"].useEffect.mock.calls[0], 2);
        cb = _React$useEffect$mock4[0];
        prereqs = _React$useEffect$mock4[1];
        cb();
      });
      test('pressing up arrow sets DROPDOWN', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.NUMERIC, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.DROPDOWN);
      });
      test('pressing down arrow sets TEXTINPUT', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.NUMERIC, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.TEXTINPUT);
      });
    });
    describe('TEXTINPUT', function () {
      beforeEach(function () {
        _module.useArrowNav(_problem.ProblemTypeKeys.TEXTINPUT, mockSetSelected);
        var _React$useEffect$mock5 = _slicedToArray(_react["default"].useEffect.mock.calls[0], 2);
        cb = _React$useEffect$mock5[0];
        prereqs = _React$useEffect$mock5[1];
        cb();
      });
      test('pressing up arrow sets NUMERIC', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.TEXTINPUT, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.NUMERIC);
      });
      test('pressing down arrow sets SINGLESELECT', function () {
        expect(_react["default"].useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.TEXTINPUT, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.SINGLESELECT);
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map