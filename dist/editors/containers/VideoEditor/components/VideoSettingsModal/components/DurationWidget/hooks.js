"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromDuration = exports.updateDuration = exports.onDurationKeyDown = exports.onDurationChange = exports.durationWidget = exports.durationStringFromValue = exports.durationString = exports["default"] = void 0;
var _react = require("react");
var _messages = _interopRequireDefault(require("../messages"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var durationMatcher = /^(\d{0,2}):?(\d{0,2})?:?(\d{0,2})?$/i;
var durationWidget = exports.durationWidget = function durationWidget(_ref) {
  var duration = _ref.duration,
    updateField = _ref.updateField;
  var setDuration = function setDuration(val) {
    return updateField({
      duration: val
    });
  };
  var initialState = _module.durationString(duration);
  var _useState = (0, _react.useState)(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    unsavedDuration = _useState2[0],
    setUnsavedDuration = _useState2[1];
  (0, _react.useEffect)(function () {
    setUnsavedDuration(_module.durationString(duration));
  }, [duration]);
  return {
    unsavedDuration: unsavedDuration,
    onBlur: function onBlur(index) {
      return function (e) {
        return _module.updateDuration({
          duration: duration,
          setDuration: setDuration,
          unsavedDuration: unsavedDuration,
          setUnsavedDuration: setUnsavedDuration,
          index: index,
          inputString: e.target.value
        });
      };
    },
    onChange: function onChange(index) {
      return function (e) {
        return setUnsavedDuration(_module.onDurationChange(unsavedDuration, index, e.target.value));
      };
    },
    onKeyDown: function onKeyDown(index) {
      return function (e) {
        return setUnsavedDuration(_module.onDurationKeyDown(unsavedDuration, index, e));
      };
    },
    getTotalLabel: function getTotalLabel(_ref2) {
      var durationString = _ref2.durationString,
        subtitle = _ref2.subtitle,
        intl = _ref2.intl;
      if (!durationString.stopTime) {
        if (!durationString.startTime) {
          return intl.formatMessage(_messages["default"].fullVideoLength);
        }
        if (subtitle) {
          return intl.formatMessage(_messages["default"].startsAt, {
            startTime: _module.durationStringFromValue(durationString.startTime)
          });
        }
        return null;
      }
      var total = durationString.stopTime - (durationString.startTime || 0);
      return intl.formatMessage(subtitle ? _messages["default"].custom : _messages["default"].total, {
        total: _module.durationStringFromValue(total)
      });
    }
  };
};

/**
 * durationString(duration)
 * Returns the display value for embedded start and stop times
 * @param {object} duration - object containing startTime and stopTime millisecond values
 * @return {object} - start and stop time from incoming object mapped to duration strings.
 */
var durationString = exports.durationString = function durationString(duration) {
  return {
    startTime: _module.durationStringFromValue(duration.startTime),
    stopTime: _module.durationStringFromValue(duration.stopTime)
  };
};

/**
 * durationStringFromValue(value)
 * Returns a duration string in 'hh:mm:ss' format from the given ms value
 * @param {number} value - duration (in milliseconds)
 * @return {string} - duration in 'hh:mm:ss' format
 */
var durationStringFromValue = exports.durationStringFromValue = function durationStringFromValue(value) {
  // return 'why';
  if (!value || typeof value !== 'number' || value <= 0) {
    return '00:00:00';
  }
  var seconds = Math.floor(value / 1000 % 60);
  var minutes = Math.floor(value / 60000 % 60);
  var hours = Math.floor(value / 3600000 % 60);
  var zeroPad = function zeroPad(num) {
    return String(num).padStart(2, '0');
  };
  return [hours, minutes, seconds].map(zeroPad).join(':');
};

/**
 * updateDuration({ duration, unsavedDuration, setUnsavedDuration, setDuration })
 * Returns a memoized callback based on inputs that updates unsavedDuration value and form value
 * if the new string is valid (duration stores a number, unsavedDuration stores a string).
 * If the duration string is invalid, resets the unsavedDuration value to the latest good value.
 * @param {object} duration - redux-stored durations in milliseconds
 * @param {object} unsavedDuration - hook-stored duration in 'hh:mm:ss' format
 * @param {func} setDuration - set form value
 * @param {func} setUnsavedDuration - set unsavedDuration object
 * @param {string} index - startTime or stopTime
 * @param {string} inputString - string value of user input for either the start or stop time fields
 * @return {func} - callback to update duration unsavedDurationly and in redux
 *   updateDuration(args)(index, durationString)
 */
var updateDuration = exports.updateDuration = function updateDuration(_ref3) {
  var duration = _ref3.duration,
    unsavedDuration = _ref3.unsavedDuration,
    setDuration = _ref3.setDuration,
    setUnsavedDuration = _ref3.setUnsavedDuration,
    index = _ref3.index,
    inputString = _ref3.inputString;
  var newDurationString = inputString;
  var newValue = _module.valueFromDuration(newDurationString);
  // maxTime is 23:59:59 or 86399 seconds
  if (newValue > 86399000) {
    newValue = 86399000;
  }
  // stopTime must be at least 1 second, if not zero
  if (index === 'stopTime' && newValue > 0 && newValue < 1000) {
    newValue = 1000;
  }
  // stopTime must be at least 1 second after startTime, except 0 means no custom stopTime
  if (index === 'stopTime' && newValue > 0 && newValue < duration.startTime + 1000) {
    newValue = duration.startTime + 1000;
  }
  // startTime must be at least 1 second before stopTime, except when stopTime is less than a second
  // (stopTime should only be less than a second if it's zero, but we're being paranoid)
  if (index === 'startTime' && duration.stopTime >= 1000 && newValue > duration.stopTime - 1000) {
    newValue = duration.stopTime - 1000;
  }
  newDurationString = _module.durationStringFromValue(newValue);
  setUnsavedDuration(_objectSpread(_objectSpread({}, unsavedDuration), {}, _defineProperty({}, index, newDurationString)));
  setDuration(_objectSpread(_objectSpread({}, duration), {}, _defineProperty({}, index, newValue)));
};

/**
 * onDurationChange(duration)
 * Returns a new duration value based on onChange event
 * @param {object} duration - object containing startTime and stopTime millisecond values
 * @param {string} index - 'startTime or 'stopTime'
 * @param {string} val - duration in 'hh:mm:ss' format
 * @return {object} duration - object containing startTime and stopTime millisecond values
 */
var onDurationChange = exports.onDurationChange = function onDurationChange(duration, index, val) {
  var match = val.trim().match(durationMatcher);
  if (!match) {
    return duration;
  }
  var caretPos = document.activeElement.selectionStart;
  var newDuration = val;
  if (caretPos === newDuration.length && (newDuration.length === 2 || newDuration.length === 5)) {
    newDuration += ':';
  }
  return _objectSpread(_objectSpread({}, duration), {}, _defineProperty({}, index, newDuration));
};

/**
 * onDurationKeyDown(duration)
 * Returns a new duration value based on onKeyDown event
 * @param {object} duration - object containing startTime and stopTime millisecond values
 * @param {string} index - 'startTime or 'stopTime'
 * @param {Event} event - event from onKeyDown
 * @return {object} duration - object containing startTime and stopTime millisecond values
 */
var onDurationKeyDown = exports.onDurationKeyDown = function onDurationKeyDown(duration, index, event) {
  var caretPos = document.activeElement.selectionStart;
  var newDuration = duration[index];
  switch (event.key) {
    case 'Enter':
      document.activeElement.blur();
      break;
    case 'Backspace':
      if (caretPos === newDuration.length && newDuration.slice(-1) === ':') {
        newDuration = newDuration.slice(0, -1);
      }
      break;
    default:
      break;
  }
  return _objectSpread(_objectSpread({}, duration), {}, _defineProperty({}, index, newDuration));
};

/**
 * valueFromDuration(duration)
 * Returns a millisecond duration value from the given 'hh:mm:ss' format string
 * @param {string} duration - duration in 'hh:mm:ss' format
 * @return {number} - duration in milliseconds. Returns null if duration is invalid.
 */
var valueFromDuration = exports.valueFromDuration = function valueFromDuration(duration) {
  var matches = duration.trim().match(durationMatcher);
  if (!matches) {
    return 0;
  }
  matches = matches.slice(1).filter(function (v) {
    return v !== undefined;
  });
  if (matches.length < 3) {
    for (var i = 0; i <= 3 - matches.length; i++) {
      matches.unshift(0);
    }
  }
  var _matches$map = matches.map(function (x) {
      return parseInt(x, 10) || 0;
    }),
    _matches$map2 = _slicedToArray(_matches$map, 3),
    hours = _matches$map2[0],
    minutes = _matches$map2[1],
    seconds = _matches$map2[2];
  return ((hours * 60 + minutes) * 60 + seconds) * 1000;
};
var _default = exports["default"] = {
  durationWidget: durationWidget,
  durationString: durationString,
  durationStringFromValue: durationStringFromValue,
  updateDuration: updateDuration,
  onDurationChange: onDurationChange,
  onDurationKeyDown: onDurationKeyDown,
  valueFromDuration: valueFromDuration
};
//# sourceMappingURL=hooks.js.map