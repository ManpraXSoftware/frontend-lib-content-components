"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onValue = exports.onEvent = exports.onChecked = exports.handleIndexTransformEvent = exports.handleIndexEvent = void 0;
/**
 * handleIndexEvent({ handler, transform })
 * return a method that takes an index and returns an event handler of the given type
 * that calls a transform with the given index and the incoming value.
 * @param {func} handler - event handler (onValue, onChecked, etc)
 * @param {func} transform - transform method taking an index and a new value
 * @return {func} - event handler creator for index-tied values
 */
var handleIndexEvent = exports.handleIndexEvent = function handleIndexEvent(_ref) {
  var handler = _ref.handler,
    transform = _ref.transform;
  return function (index) {
    return handler(function (val) {
      return transform(index, val);
    });
  };
};

/**
 * handleIndexTransformEvent({ handler, setter, local, transform })
 * return a method that takes an index and returns an event handler of the given type
 * that calls a transform with the given index and the incoming value.
 * @param {func} handler - event handler (onValue, onChecked, etc)
 * @param {string|number|object} local - local hook values
 * @param {func} setter - method that updates models based on event
 * @param {func} transform - transform method taking an index and a new value
 * @return {func} - event handler creator for index-tied values with separate setter and transforms
 */
var handleIndexTransformEvent = exports.handleIndexTransformEvent = function handleIndexTransformEvent(_ref2) {
  var handler = _ref2.handler,
    local = _ref2.local,
    setter = _ref2.setter,
    transform = _ref2.transform;
  return function (index) {
    return handler(function (val) {
      return setter(transform(local, index, val));
    });
  };
};

/**
 * onValue(handler)
 * returns an event handler that calls the given method with the event target value
 * Intended for most basic input types.
 * @param {func} handler - callback to receive the event value
 * @return - event handler that calls passed handler with event.target.value
 */
var onValue = exports.onValue = function onValue(handler) {
  return function (e) {
    return handler(e.target.value);
  };
};

/**
 * onValue(handler)
 * returns an event handler that calls the given method with the event target value
 * Intended for checkbox input types.
 * @param {func} handler - callback to receive the event value
 * @return - event handler that calls passed handler with event.target.checked
 */
var onChecked = exports.onChecked = function onChecked(handler) {
  return function (e) {
    return handler(e.target.checked);
  };
};

/**
 * onEvent(handler)
 * returns an event handler that calls the given method with the event
 * Intended for most basic input types.
 * @param {func} handler - callback to receive the event value
 * @return - event handler that calls passed handler with event
 */
var onEvent = exports.onEvent = function onEvent(handler) {
  return function (e) {
    return handler(e);
  };
};
//# sourceMappingURL=handlers.js.map