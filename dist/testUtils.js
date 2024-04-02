"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockNestedComponents = exports.mockNestedComponent = exports.formatMessage = exports.MockUseState = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("./editors/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); } /* istanbul ignore file */
/**
 * Mocked formatMessage provided by react-intl
 */
var formatMessage = exports.formatMessage = function formatMessage(msg, values) {
  var message = msg.defaultMessage;
  if (values === undefined) {
    return message;
  }
  Object.keys(values).forEach(function (key) {
    // eslint-disable-next-line
    message = message.replace("{".concat(key, "}"), values[key]);
  });
  return message;
};

/**
 * Mock a single component, or a nested component so that its children render nicely
 * in snapshots.
 * @param {string} name - parent component name
 * @param {obj} contents - object of child components with intended component
 *   render name.
 * @return {func} - mock component with nested children.
 *
 * usage:
 *   mockNestedComponent('Card', { Body: 'Card.Body', Form: { Control: { Feedback: 'Form.Control.Feedback' }}... });
 *   mockNestedComponent('IconButton', 'IconButton');
 */
var mockNestedComponent = exports.mockNestedComponent = function mockNestedComponent(name, contents) {
  if (_typeof(contents) !== 'object') {
    return contents;
  }
  var fn = function fn() {
    return name;
  };
  Object.defineProperty(fn, 'name', {
    value: name
  });
  Object.keys(contents).forEach(function (nestedName) {
    var value = contents[nestedName];
    fn[nestedName] = _typeof(value) !== 'object' ? value : mockNestedComponent("".concat(name, ".").concat(nestedName), value);
  });
  return fn;
};

/**
 * Mock a module of components.  nested components will be rendered nicely in snapshots.
 * @param {obj} mapping - component module mock config.
 * @return {obj} - module of flat and nested components that will render nicely in snapshots.
 * usage:
 *   mockNestedComponents({
 *     Card: { Body: 'Card.Body' },
 *     IconButton: 'IconButton',
 *   })
 */
var mockNestedComponents = exports.mockNestedComponents = function mockNestedComponents(mapping) {
  return Object.entries(mapping).reduce(function (obj, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      value = _ref2[1];
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, name, mockNestedComponent(name, value)));
  }, {});
};

/**
 * Mock utility for working with useState in a hooks module.
 * Expects/requires an object containing the state object in order to ensure
 * the mock behavior works appropriately.
 *
 * Expected format:
 *   hooks = { state: { <key>: (val) => React.createRef(val), ... } }
 *
 * Returns a utility for mocking useState and providing access to specific state values
 * and setState methods, as well as allowing per-test configuration of useState value returns.
 *
 * Example usage:
 *   // hooks.js
 *   import * as module from './hooks';
 *   const state = {
 *     isOpen: (val) => React.useState(val),
 *     hasDoors: (val) => React.useState(val),
 *     selected: (val) => React.useState(val),
 *   };
 *   ...
 *   export const exampleHook = () => {
 *     const [isOpen, setIsOpen] = module.state.isOpen(false);
 *     if (!isOpen) { return null; }
 *     return { isOpen, setIsOpen };
 *   }
 *   ...
 *
 *   // hooks.test.js
 *   import * as hooks from './hooks';
 *   const state = new MockUseState(hooks)
 *   ...
 *   describe('state hooks', () => {
 *     state.testGetter(state.keys.isOpen);
 *     state.testGetter(state.keys.hasDoors);
 *     state.testGetter(state.keys.selected);
 *   });
 *   describe('exampleHook', () => {
 *     beforeEach(() => { state.mock(); });
 *     it('returns null if isOpen is default value', () => {
 *       expect(hooks.exampleHook()).toEqual(null);
 *     });
 *     it('returns isOpen and setIsOpen if isOpen is not null', () => {
 *       state.mockVal(state.keys.isOpen, true);
 *       expect(hooks.exampleHook()).toEqual({
 *         isOpen: true,
 *         setIsOpen: state.setState[state.keys.isOpen],
 *       });
 *     });
 *     afterEach(() => { state.restore(); });
 *   });
 *
 * @param {obj} hooks - hooks module containing a 'state' object
 */
var MockUseState = exports.MockUseState = /*#__PURE__*/function () {
  function MockUseState(hooks) {
    _classCallCheck(this, MockUseState);
    this.hooks = hooks;
    this.oldState = null;
    this.setState = {};
    this.stateVals = {};
    this.mock = this.mock.bind(this);
    this.restore = this.restore.bind(this);
    this.mockVal = this.mockVal.bind(this);
    this.testGetter = this.testGetter.bind(this);
  }

  /**
   * @return {object} - StrictDict of state object keys
   */
  _createClass(MockUseState, [{
    key: "keys",
    get: function get() {
      return (0, _utils.StrictDict)(Object.keys(this.hooks.state).reduce(function (obj, key) {
        return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, key));
      }, {}));
    }

    /**
     * Replace the hook module's state object with a mocked version, initialized to default values.
     */
  }, {
    key: "mock",
    value: function mock() {
      var _this = this;
      this.oldState = this.hooks.state;
      Object.keys(this.keys).forEach(function (key) {
        _this.hooks.state[key] = jest.fn(function (val) {
          _this.stateVals[key] = val;
          return [val, _this.setState[key]];
        });
      });
      this.setState = Object.keys(this.keys).reduce(function (obj, key) {
        return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, jest.fn(function (val) {
          _this.hooks.state[key] = val;
        })));
      }, {});
    }

    /**
     * Restore the hook module's state object to the actual code.
     */
  }, {
    key: "restore",
    value: function restore() {
      this.hooks.state = this.oldState;
    }

    /**
     * Mock the state getter associated with a single key to return a specific value one time.
     * @param {string} key - state key (from this.keys)
     * @param {any} val - new value to be returned by the useState call.
     */
  }, {
    key: "mockVal",
    value: function mockVal(key, val) {
      this.hooks.state[key].mockReturnValueOnce([val, this.setState[key]]);
    }
  }, {
    key: "testGetter",
    value: function testGetter(key) {
      var _this2 = this;
      test("".concat(key, " state getter should return useState passthrough"), function () {
        var testValue = 'some value';
        var useState = function useState(val) {
          return {
            useState: val
          };
        };
        jest.spyOn(_react["default"], 'useState').mockImplementationOnce(useState);
        expect(_this2.hooks.state[key](testValue)).toEqual(useState(testValue));
      });
    }
  }]);
  return MockUseState;
}();
//# sourceMappingURL=testUtils.js.map