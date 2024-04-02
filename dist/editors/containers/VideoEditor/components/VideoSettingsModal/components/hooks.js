"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgetValues = exports.valueHooks = exports.updatedObject = exports.updatedArray = exports.updateFormField = exports.state = exports.selectorKeys = exports.objectWidget = exports.genericWidget = exports["default"] = exports.arrayWidget = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _utils = require("../../../../../utils");
var _redux = require("../../../../../data/redux");
var _handlers = require("./handlers");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var selectorKeys = exports.selectorKeys = (0, _utils.keyStore)(_redux.selectors.video);
var state = exports.state = (0, _utils.StrictDict)([selectorKeys.videoSource, selectorKeys.videoId, selectorKeys.fallbackVideos, selectorKeys.allowVideoDownloads, selectorKeys.allowVideoSharing, selectorKeys.thumbnail, selectorKeys.transcripts, selectorKeys.allowTranscriptDownloads, selectorKeys.showTranscriptByDefault, selectorKeys.duration, selectorKeys.handout, selectorKeys.licenseType, selectorKeys.licenseDetails].reduce(function (obj, key) {
  return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, function (val) {
    return (0, _react.useState)(val);
  }));
}, {}));

/**
 * updateArray(array, index, val)
 * Returns a new array with the element at <index> replaced with <val>
 * @param {any[]} array - array of values
 * @param {number} index - array index to replace
 * @param {any} val - new value
 * @return {any[]} - new array with element at index replaced with val
 */
var updatedArray = exports.updatedArray = function updatedArray(array, index, val) {
  var newArray = _toConsumableArray(array);
  newArray.splice(index, 1, val);
  return newArray;
};

/**
 * updateObject(object, index, val)
 * Returns a new object with the element at <index> replaced with <val>
 * @param {object} object - object of values
 * @param {string} index - object index to replace
 * @param {any} val - new value
 * @return {any[]} - new object with element at index replaced with val
 */
var updatedObject = exports.updatedObject = function updatedObject(obj, index, val) {
  return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, index, val));
};

/**
 * updateFormField({ dispatch, key })(val)
 * Creates a callback to update a given form field based on an incoming value.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - form key
 * @return {func} - callback taking a value and updating the video redux field
 */
var updateFormField = exports.updateFormField = function updateFormField(_ref) {
  var dispatch = _ref.dispatch,
    key = _ref.key;
  return (0, _react.useCallback)(function (val) {
    return dispatch(_redux.actions.video.updateField(_defineProperty({}, key, val)));
  }, []);
};

/**
 * valueHooks({ dispatch, key })
 * returns local and redux state associated with the given data key, as well as methods
 * to update either or both of those.
 * @param {string} key - redux video state key
 * @param {func} dispatch - redux dispatch method
 * @return {object} - hooks based on the local and redux value associated with the given key
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 */
var valueHooks = exports.valueHooks = function valueHooks(_ref2) {
  var dispatch = _ref2.dispatch,
    key = _ref2.key;
  var formValue = (0, _reactRedux.useSelector)(_redux.selectors.video[key]);
  var _module$state$key = _module.state[key](formValue),
    _module$state$key2 = _slicedToArray(_module$state$key, 2),
    local = _module$state$key2[0],
    setLocal = _module$state$key2[1];
  var setFormValue = _module.updateFormField({
    dispatch: dispatch,
    key: key
  });
  (0, _react.useEffect)(function () {
    setLocal(formValue);
  }, [formValue]);
  var setAll = (0, _react.useCallback)(function (val) {
    setLocal(val);
    setFormValue(val);
  }, [setLocal, setFormValue]);
  return {
    formValue: formValue,
    local: local,
    setLocal: setLocal,
    setFormValue: setFormValue,
    setAll: setAll
  };
};

/**
 * genericWidget({ dispatch, key })
 * Returns the value-tied hooks for inputs associated with a flat value in redux
 * Tied to redux video shape based on data key
 * includes onChange, onBlur, and onCheckedChange methods.  blur and checked change
 * instantly affect both redux and local, while change (while typing) only affects
 * the local component.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - redux video shape key
 * @return {object} - state hooks
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 *   onChange - handle input change by updating local state
 *   onCheckedChange - handle checked change by updating local and redux state
 *   onBlur - handle input blur by updating local and redux states
 */
var genericWidget = exports.genericWidget = function genericWidget(_ref3) {
  var dispatch = _ref3.dispatch,
    key = _ref3.key;
  var _module$valueHooks = _module.valueHooks({
      dispatch: dispatch,
      key: key
    }),
    formValue = _module$valueHooks.formValue,
    local = _module$valueHooks.local,
    setLocal = _module$valueHooks.setLocal,
    setFormValue = _module$valueHooks.setFormValue,
    setAll = _module$valueHooks.setAll;
  return {
    formValue: formValue,
    local: local,
    setLocal: setLocal,
    setAll: setAll,
    setFormValue: setFormValue,
    onChange: (0, _handlers.onValue)(setLocal),
    onCheckedChange: (0, _handlers.onChecked)(setAll),
    onBlur: (0, _handlers.onValue)(setAll)
  };
};

/**
 * arrayWidget({ dispatch, key })
 * Returns the value-tied hooks for inputs associated with a value in an array in the
 * video redux shape.
 * Tied to redux video shape based on data key
 * includes onChange, onBlur, and onClear methods.  blur changes local and redux state,
 * on change affects only local state, and onClear sets both to an empty string.
 * The creators from this widget will require an index to provide the final event-handler.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - redux video shape key
 * @return {object} - state hooks
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 *   onChange(index) - handle input change by updating local state
 *   onBlur(index) - handle input blur by updating local and redux states
 *   onClear(index) - handle clear event by setting value to empty string
 */
var arrayWidget = exports.arrayWidget = function arrayWidget(_ref4) {
  var dispatch = _ref4.dispatch,
    key = _ref4.key;
  var widget = _module.valueHooks({
    dispatch: dispatch,
    key: key
  });
  return _objectSpread(_objectSpread({}, widget), {}, {
    onBlur: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setAll,
      transform: _module.updatedArray,
      local: widget.local
    }),
    onChange: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setLocal,
      transform: _module.updatedArray,
      local: widget.local
    }),
    onClear: function onClear(index) {
      return function () {
        return widget.setAll(_module.updatedArray(widget.local, index, ''));
      };
    }
  });
};

/**
 * objectWidget({ dispatch, key })
 * Returns the value-tied hooks for inputs associated with a value in an object in the
 * video redux shape.
 * Tied to redux video shape based on data key
 * includes onChange and onBlur methods.  blur changes local and redux state,
 * on change affects only local state.
 * The creators from this widget will require an index to provide the final event-handler.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - redux video shape key
 * @return {object} - state hooks
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 *   onChange(index) - handle input change by updating local state
 *   onBlur(index) - handle input blur by updating local and redux states
 *   onClear(index) - handle clear event by setting value to empty string
 */
var objectWidget = exports.objectWidget = function objectWidget(_ref5) {
  var dispatch = _ref5.dispatch,
    key = _ref5.key;
  var widget = _module.valueHooks({
    dispatch: dispatch,
    key: key
  });
  return _objectSpread(_objectSpread({}, widget), {}, {
    onChange: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setLocal,
      transform: _module.updatedObject,
      local: widget.local
    }),
    onBlur: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setAll,
      transform: _module.updatedObject,
      local: widget.local
    })
  });
};

/**
 * widgetValues({ fields, dispatch })
 * widget value populator, that takes a fields mapping (dataKey: widgetFn) and dispatch
 * method, and returns object of widget values.
 * @param {object} fields - object with video data keys for keys and widget methods for values
 * @param {func} dispatch - redux dispatch method
 * @return {object} - { <key>: <widgetFn({ key, dispatch })> }
 */
var widgetValues = exports.widgetValues = function widgetValues(_ref6) {
  var fields = _ref6.fields,
    dispatch = _ref6.dispatch;
  return Object.keys(fields).reduce(function (obj, key) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, fields[key]({
      key: key,
      dispatch: dispatch
    })));
  }, {});
};
var _default = exports["default"] = {
  arrayWidget: arrayWidget,
  genericWidget: genericWidget,
  objectWidget: objectWidget,
  selectorKeys: selectorKeys,
  widgetValues: widgetValues
};
//# sourceMappingURL=hooks.js.map