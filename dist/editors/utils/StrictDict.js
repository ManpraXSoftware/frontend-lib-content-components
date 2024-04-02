"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable no-console */
var strictGet = function strictGet(target, name) {
  if (name === Symbol.toStringTag) {
    return target;
  }
  if (name in target || name === '_reactFragment') {
    return target[name];
  }
  if (name === '$$typeof') {
    return _typeof(target);
  }
  console.log(name.toString());
  console.error({
    target: target,
    name: name
  });
  var e = Error("invalid property \"".concat(name.toString(), "\""));
  console.error(e.stack);
  return undefined;
};
var StrictDict = function StrictDict(dict) {
  return new Proxy(dict, {
    get: strictGet
  });
};
var _default = exports["default"] = StrictDict;
//# sourceMappingURL=StrictDict.js.map