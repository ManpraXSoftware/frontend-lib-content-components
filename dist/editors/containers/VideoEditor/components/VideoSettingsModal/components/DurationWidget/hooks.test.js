"use strict";

var _react = _interopRequireDefault(require("react"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("../messages"));
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('react', function () {
  var updateState = jest.fn();
  return _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
    updateState: updateState,
    useState: jest.fn(function (val) {
      return [{
        state: val
      }, function (newVal) {
        return updateState({
          val: val,
          newVal: newVal
        });
      }];
    }),
    useCallback: function useCallback(cb, prereqs) {
      return {
        useCallback: {
          cb: cb,
          prereqs: prereqs
        }
      };
    },
    useEffect: jest.fn()
  });
});
var testMethod;
var intl = {
  formatMessage: jest.fn(function (val) {
    return val;
  })
};
var h = 3600000,
  m = 60000,
  s = 1000;
var durationPairs = [[0, '00:00:00'], [5000, '00:00:05'], [60000, '00:01:00'], [3600000, '01:00:00'], [3665000, '01:01:05']];
var trickyDurations = [['10:00', 600000], ['23', 23000], ['99:99:99', 99 * (m + s + h)], ['23:42:81', 23 * h + 42 * m + 81 * s]];
var props;
var e = {
  target: {
    value: 'vAlUE'
  }
};
describe('Video Settings DurationWidget hooks', function () {
  afterEach(function () {
    jest.restoreAllMocks();
  });
  describe('durationWidget', function () {
    var duration = {
      startTime: '00:00:00',
      stopTime: '00:00:10'
    };
    var updateField = jest.fn();
    beforeEach(function () {
      testMethod = hooks.durationWidget({
        duration: duration,
        updateField: updateField
      });
    });
    describe('behavior', function () {
      describe('initialization', function () {
        test('useEffect memoized on duration', function () {
          hooks.durationWidget({
            duration: duration,
            updateField: updateField
          });
          expect(_react["default"].useEffect).toHaveBeenCalled();
          expect(_react["default"].useEffect.mock.calls[0][1]).toEqual([duration]);
        });
        test('calls setUnsavedDuration with durationString(duration)', function () {
          hooks.durationWidget({
            duration: duration,
            updateField: updateField
          });
          _react["default"].useEffect.mock.calls[0][0]();
          expect(_react["default"].updateState).toHaveBeenCalled();
        });
      });
    });
    describe('returns', function () {
      testMethod = hooks.durationWidget({
        duration: duration,
        updateField: updateField
      });
      afterEach(function () {
        jest.restoreAllMocks();
      });
      describe('unsavedDuration, defaulted to duration', function () {
        expect(testMethod.unsavedDuration).toEqual({
          state: hooks.durationString(duration)
        });
      });
      describe('onBlur, calls updateDuration', function () {
        jest.spyOn(hooks, 'updateDuration').mockImplementation(jest.fn());
        testMethod.onBlur('IndEX')(e);
        expect(hooks.updateDuration).toHaveBeenCalled();
      });
      describe('onChange', function () {
        testMethod.onChange('IndEX')(e);
        expect(_react["default"].updateState).toHaveBeenCalled();
      });
      describe('onKeyDown', function () {
        testMethod.onKeyDown('iNDex')(e);
        expect(_react["default"].updateState).toHaveBeenCalled();
      });
      describe('getTotalLabel', function () {
        describe('returns fullVideoLength message when no startTime and no stop Time are set', function () {
          expect(testMethod.getTotalLabel({
            durationString: {},
            subtitle: true,
            intl: intl
          })).toEqual(_messages["default"].fullVideoLength);
        });
        describe('returns startAt message for subtitle when only startTime is set', function () {
          expect(testMethod.getTotalLabel({
            durationString: {
              startTime: '00:00:00'
            },
            subtitle: true,
            intl: intl
          })).toEqual(_messages["default"].startsAt);
        });
        describe('returns null for widget (not subtitle) when there only startTime is set', function () {
          expect(testMethod.getTotalLabel({
            durationString: {
              startTime: '00:00:00'
            },
            subtitle: false,
            intl: intl
          })).toEqual(null);
        });
        describe('returns total message when at least stopTime is set', function () {
          expect(testMethod.getTotalLabel({
            durationString: {
              startTime: '00:00:00',
              stopTime: '00:00:10'
            },
            subtitle: false,
            intl: intl
          })).toEqual(_messages["default"].total);
        });
        describe('returns custom message when at least stopTime is set and subtitle is true', function () {
          expect(testMethod.getTotalLabel({
            durationString: {
              startTime: '00:00:00',
              stopTime: '00:00:10'
            },
            subtitle: true,
            intl: intl
          })).toEqual(_messages["default"].custom);
        });
      });
    });
  });
  describe('durationString', function () {
    beforeEach(function () {
      testMethod = hooks.durationString;
    });
    it('returns an object that maps durationStringFromValue to the passed duration keys', function () {
      var testDuration = {
        startTime: 1000,
        stopTime: 2000,
        other: 'values'
      };
      expect(testMethod(testDuration)).toEqual({
        startTime: '00:00:01',
        stopTime: '00:00:02'
      });
    });
  });
  describe('durationStringFromValue', function () {
    beforeEach(function () {
      testMethod = hooks.durationStringFromValue;
    });
    it('returns 00:00:00 if given a bad value', function () {
      var badChecks = ['a', '', null, -1];
      badChecks.forEach(function (val) {
        return expect(testMethod(val)).toEqual('00:00:00');
      });
    });
    it('translates milliseconds into hh:mm:ss format', function () {
      durationPairs.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          val = _ref2[0],
          dur = _ref2[1];
        return expect(testMethod(val)).toEqual(dur);
      });
    });
  });
  describe('updateDuration', function () {
    var testValidIndex = 'startTime';
    var testStopIndex = 'stopTime';
    var testValidDuration = '00:00:00';
    var testValidValue = 0;
    var testInvalidDuration = 'abc';
    beforeEach(function () {
      testMethod = hooks.updateDuration;
      props = {
        duration: {
          startTime: 23000,
          stopTime: 600000
        },
        unsavedDuration: {
          startTime: '00:00:23',
          stopTime: '00:10:00'
        },
        setDuration: jest.fn(),
        setUnsavedDuration: jest.fn(),
        index: 'startTime',
        inputString: '01:23:45'
      };
    });
    describe('if the passed durationString is valid', function () {
      it('sets the unsavedDuration to updated strings and duration to new timestamp value', function () {
        testMethod(_objectSpread(_objectSpread({}, props), {}, {
          index: testValidIndex,
          inputString: testValidDuration
        }));
        expect(props.setUnsavedDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.unsavedDuration), {}, _defineProperty({}, testValidIndex, testValidDuration)));
        expect(props.setDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.duration), {}, _defineProperty({}, testValidIndex, testValidValue)));
      });
    });
    describe('if the passed durationString is not valid', function () {
      it('updates unsavedDuration values to 0 (the default)', function () {
        testMethod(_objectSpread(_objectSpread({}, props), {}, {
          index: testValidIndex,
          inputString: testInvalidDuration
        }));
        expect(props.setUnsavedDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.unsavedDuration), {}, _defineProperty({}, testValidIndex, testValidDuration)));
        expect(props.setDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.duration), {}, _defineProperty({}, testValidIndex, testValidValue)));
      });
    });
    describe('if the passed startTime is after (or equal to) the stored non-zero stopTime', function () {
      it('updates unsavedDuration startTime values to 1 second before stopTime', function () {
        testMethod(_objectSpread(_objectSpread({}, props), {}, {
          index: testValidIndex,
          inputString: '00:10:00'
        }));
        expect(props.setUnsavedDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.unsavedDuration), {}, _defineProperty({}, testValidIndex, '00:09:59')));
        expect(props.setDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.duration), {}, _defineProperty({}, testValidIndex, 599000)));
      });
    });
    describe('if the passed stopTime is before (or equal to) the stored startTime', function () {
      it('updates unsavedDuration stopTime values to 1 second after startTime', function () {
        testMethod(_objectSpread(_objectSpread({}, props), {}, {
          index: testStopIndex,
          inputString: '00:00:22'
        }));
        expect(props.setUnsavedDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.unsavedDuration), {}, _defineProperty({}, testStopIndex, '00:00:24')));
        expect(props.setDuration).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, props.duration), {}, _defineProperty({}, testStopIndex, 24000)));
      });
    });
  });
  describe('onDurationChange', function () {
    beforeEach(function () {
      props = {
        duration: {
          startTime: '00:00:00'
        },
        index: 'startTime',
        val: 'vAl'
      };
      testMethod = hooks.onDurationChange;
    });
    it('returns duration with no change if duration[index] does not match HH:MM:SS format', function () {
      var badChecks = ['ab:cd:ef',
      // non-digit characters
      '12:34:567' // characters past max length
      ];
      badChecks.forEach(function (val) {
        return expect(testMethod(props.duration, props.index, val)).toEqual(props.duration);
      });
    });
    it('returns duration with an added \':\' after 2 characters when caret is at end', function () {
      props.duration = {
        startTime: '0'
      };
      props.val = '00';
      document.activeElement.selectionStart = props.duration[props.index].length + 1;
      expect(testMethod(props.duration, props.index, props.val)).toEqual({
        startTime: '00:'
      });
    });
    it('returns duration with an added \':\' after 5 characters when caret is at end', function () {
      props.duration = {
        startTime: '00:0'
      };
      props.val = '00:00';
      document.activeElement.selectionStart = props.duration[props.index].length + 1;
      expect(testMethod(props.duration, props.index, props.val)).toEqual({
        startTime: '00:00:'
      });
    });
  });
  describe('onDurationKeyDown', function () {
    beforeEach(function () {
      props = {
        duration: {
          startTime: '00:00:00'
        },
        index: 'startTime',
        event: 'eVeNt'
      };
      testMethod = hooks.onDurationKeyDown;
    });
    it('enter event: calls blur()', function () {
      props.event = {
        key: 'Enter'
      };
      var blurSpy = jest.spyOn(document.activeElement, 'blur');
      testMethod(props.duration, props.index, props.event);
      expect(blurSpy).toHaveBeenCalled();
    });
    it('backspace event: returns duration with deleted end character when that character is \':\' and caret is at end', function () {
      props.duration = {
        startTime: '00:'
      };
      props.event = {
        key: 'Backspace'
      };
      document.activeElement.selectionStart = props.duration[props.index].length;
      expect(testMethod(props.duration, props.index, props.event)).toEqual({
        startTime: '00'
      });
    });
  });
  describe('valueFromDuration', function () {
    beforeEach(function () {
      testMethod = hooks.valueFromDuration;
    });
    it('returns 0 if given a bad duration string', function () {
      var badChecks = ['a', '00:00:1f', '0adg:00:04'];
      badChecks.forEach(function (dur) {
        return expect(testMethod(dur)).toEqual(0);
      });
    });
    it('returns simple durations', function () {
      durationPairs.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          val = _ref4[0],
          dur = _ref4[1];
        return expect(testMethod(dur)).toEqual(val);
      });
    });
    it('returns tricky durations, prepending zeros and expanding out sections', function () {
      trickyDurations.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          dur = _ref6[0],
          val = _ref6[1];
        return expect(testMethod(dur)).toEqual(val);
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map