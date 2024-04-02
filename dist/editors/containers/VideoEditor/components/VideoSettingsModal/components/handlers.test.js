"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var handlers = _interopRequireWildcard(require("./handlers"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var handler = jest.fn(function (cb) {
  return {
    handler: cb
  };
});
var transform = jest.fn(function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return {
    transform: args
  };
});
var setter = jest.fn(function (val) {
  return {
    setter: val
  };
});
var index = 'test-index';
var val = 'TEST value';
var local = 'local-test-value';
describe('Video Settings Modal event handler methods', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('handleIndexEvent', function () {
    describe('returned method', function () {
      it('takes index and calls handler with transform handler based on index', function () {
        expect(handlers.handleIndexEvent({
          handler: handler,
          transform: transform
        })(index).handler(val)).toEqual(transform(index, val));
      });
    });
  });
  describe('handleIndexTransformEvent', function () {
    describe('returned method', function () {
      it('takes index and calls handler with setter(transform(local, index, val))', function () {
        expect(handlers.handleIndexTransformEvent({
          handler: handler,
          setter: setter,
          local: local,
          transform: transform
        })(index).handler(val)).toEqual(setter(transform(local, index, val)));
      });
    });
  });
  describe('onValue', function () {
    describe('returned method', function () {
      it('calls handler with event.target.value', function () {
        expect(handlers.onValue(handler)({
          target: {
            value: val
          }
        })).toEqual(handler(val));
      });
    });
  });
  describe('onChecked', function () {
    describe('returned method', function () {
      it('calls handler with event.target.checked', function () {
        expect(handlers.onChecked(handler)({
          target: {
            checked: val
          }
        })).toEqual(handler(val));
      });
    });
  });
  describe('onEvent', function () {
    describe('returned method', function () {
      it('calls handler with event', function () {
        expect(handlers.onEvent(handler)(val)).toEqual(handler(val));
      });
    });
  });
});
//# sourceMappingURL=handlers.test.js.map