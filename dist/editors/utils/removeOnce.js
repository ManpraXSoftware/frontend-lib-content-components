"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var removeItemOnce = function removeItemOnce(arr, value) {
  // create a deep copy as array.splice doesn't work if the array has been dereferenced.
  // structuredClone works in node >11, and we are on node 16.
  // eslint-disable-next-line
  var deepCopy = structuredClone(arr);
  var index = deepCopy.indexOf(value);
  if (index > -1) {
    deepCopy.splice(index, 1);
  }
  return deepCopy;
};
var _default = exports["default"] = removeItemOnce;
//# sourceMappingURL=removeOnce.js.map