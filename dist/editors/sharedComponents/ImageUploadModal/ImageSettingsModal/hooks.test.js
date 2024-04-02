"use strict";

var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../utils");
var _testUtils = require("../../../../testUtils");
var hooks = _interopRequireWildcard(require("./hooks"));
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
  return _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
    useEffect: jest.fn(),
    useState: function useState(val) {
      return {
        useState: val
      };
    }
  });
});
var simpleDims = {
  width: 3,
  height: 4
};
var reducedDims = {
  width: 7,
  height: 13
};
var gcd = 7;
var multiDims = {
  width: reducedDims.width * gcd,
  height: reducedDims.height * gcd
};
var state = new _testUtils.MockUseState(hooks);
var hookKeys = (0, _utils.StrictDict)(Object.keys(hooks).reduce(function (obj, key) {
  return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, key));
}, {}));
var hook;
var testVal = 'MY test VALUE';
describe('state values', function () {
  var testStateMethod = function testStateMethod(key) {
    expect(hooks.state[key](testVal)).toEqual(_react["default"].useState(testVal));
  };
  test('provides altText state value', function () {
    return testStateMethod(state.keys.altText);
  });
  test('provides dimensions state value', function () {
    return testStateMethod(state.keys.dimensions);
  });
  test('provides showAltTextDismissibleError state value', function () {
    return testStateMethod(state.keys.showAltTextDismissibleError);
  });
  test('provides showAltTextSubmissionError state value', function () {
    return testStateMethod(state.keys.showAltTextSubmissionError);
  });
  test('provides isDecorative state value', function () {
    return testStateMethod(state.keys.isDecorative);
  });
  test('provides isLocked state value', function () {
    return testStateMethod(state.keys.isLocked);
  });
  test('provides local state value', function () {
    return testStateMethod(state.keys.local);
  });
  test('provides lockDims state value', function () {
    return testStateMethod(state.keys.lockDims);
  });
  test('provides lockInitialized state value', function () {
    return testStateMethod(state.keys.lockInitialized);
  });
});
describe('ImageSettingsModal hooks', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('dimensions-related hooks', function () {
    describe('getValidDimensions', function () {
      it('returns local dimensions if not locked', function () {
        expect(hooks.getValidDimensions({
          dimensions: simpleDims,
          local: reducedDims,
          isLocked: false,
          lockDims: simpleDims
        })).toEqual(reducedDims);
      });
      it('returns local dimensions if the same as stored', function () {
        expect(hooks.getValidDimensions({
          dimensions: simpleDims,
          local: simpleDims,
          isLocked: true,
          lockDims: reducedDims
        })).toEqual(simpleDims);
      });
      describe('decreasing change when at minimum valid increment', function () {
        it('returns current dimensions', function () {
          var dimensions = _objectSpread({}, reducedDims);
          var lockDims = _objectSpread({}, dimensions);
          var local = _objectSpread(_objectSpread({}, dimensions), {}, {
            width: dimensions.width - 1
          });
          expect(hooks.getValidDimensions({
            dimensions: dimensions,
            isLocked: true,
            local: local,
            lockDims: lockDims
          })).toEqual(dimensions);
          local = _objectSpread(_objectSpread({}, dimensions), {}, {
            height: dimensions.height - 1
          });
          expect(hooks.getValidDimensions({
            dimensions: dimensions,
            isLocked: true,
            local: local,
            lockDims: lockDims
          })).toEqual(dimensions);
        });
      });
      describe('valid change', function () {
        it('returns the nearest valid pair of dimensions in the change direction', function () {
          var w = 7,
            h = 13;
          var values = [
          // bumps up if direction is up but nearest is current
          [[w + 1, h], [w * 2, h * 2]], [[w + 1, h], [w * 2, h * 2]],
          // bumps up if just below next
          [[w, 2 * h - 1], [w * 2, h * 2]], [[w, 2 * h - 1], [w * 2, h * 2]],
          // rounds down to next if that is closest
          [[w, 2 * h + 1], [w * 2, h * 2]], [[w, 2 * h + 1], [w * 2, h * 2]],
          // ensure is not locked to second iteration, by getting close to 3rd
          [[w, 3 * h - 1], [w * 3, h * 3]], [[w, 3 * h - 1], [w * 3, h * 3]]];
          values.forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              local = _ref2[0],
              expected = _ref2[1];
            var dimensions = {
              width: w,
              height: h
            };
            expect(hooks.getValidDimensions({
              dimensions: dimensions,
              local: {
                width: local[0],
                height: local[1]
              },
              lockDims: _objectSpread({}, dimensions),
              isLocked: true
            })).toEqual({
              width: expected[0],
              height: expected[1]
            });
          });
        });
      });
    });
    describe('dimensionLockHooks', function () {
      beforeEach(function () {
        state.mock();
        hook = hooks.dimensionLockHooks({
          dimensions: simpleDims
        });
      });
      afterEach(function () {
        state.restore();
      });
      test('lockDims defaults to null', function () {
        expect(hook.lockDims).toEqual(null);
      });
      test('isLocked defaults to true', function () {
        expect(hook.isLocked).toEqual(true);
      });
      describe('initializeLock', function () {
        it('calls setLockDims with the passed dimensions divided by their gcd', function () {
          hook.initializeLock(multiDims);
          expect(state.setState.lockDims).toHaveBeenCalledWith(reducedDims);
        });
        it('returns the values themselves if they have no gcd', function () {
          jest.spyOn(hooks, hookKeys.findGcd).mockReturnValueOnce(2);
          hook.initializeLock(simpleDims);
          expect(state.setState.lockDims).toHaveBeenCalledWith(simpleDims);
        });
      });
      test('lock sets isLocked to true', function () {
        hook = hooks.dimensionLockHooks({
          dimensions: simpleDims
        });
        hook.lock();
        expect(state.setState.isLocked).toHaveBeenCalledWith(true);
      });
      test('unlock sets locked to null', function () {
        hook = hooks.dimensionLockHooks({
          dimensions: simpleDims
        });
        hook.unlock();
        expect(state.setState.isLocked).toHaveBeenCalledWith(false);
      });
    });
    describe('dimensionHooks', function () {
      var lockHooks;
      beforeEach(function () {
        state.mock();
        lockHooks = {
          initializeLock: jest.fn(),
          lock: jest.fn(),
          unlock: jest.fn(),
          locked: _objectSpread({}, reducedDims)
        };
        jest.spyOn(hooks, hookKeys.dimensionLockHooks).mockReturnValueOnce(lockHooks);
        hook = hooks.dimensionHooks();
      });
      afterEach(function () {
        state.restore();
      });
      it('initializes dimension lock hooks with incoming dimension value', function () {
        state.mockVal(state.keys.dimensions, reducedDims);
        hook = hooks.dimensionHooks();
        expect(hooks.dimensionLockHooks).toHaveBeenCalledWith({
          dimensions: reducedDims
        });
      });
      test('value is tied to local state', function () {
        state.mockVal(state.keys.local, simpleDims);
        hook = hooks.dimensionHooks();
        expect(hook.value).toEqual(simpleDims);
      });
      describe('onImgLoad', function () {
        var img = {
          naturalHeight: 200,
          naturalWidth: 345
        };
        var evt = {
          target: img
        };
        it('calls initializeDimensions with selection dimensions if passed', function () {
          hook.onImgLoad(simpleDims)(evt);
          expect(state.setState.dimensions).toHaveBeenCalledWith(simpleDims);
          expect(state.setState.local).toHaveBeenCalledWith(simpleDims);
        });
        it('calls initializeDimensions with target image dimensions if no selection', function () {
          hook.onImgLoad({})(evt);
          var expected = {
            width: img.naturalWidth,
            height: img.naturalHeight
          };
          expect(state.setState.dimensions).toHaveBeenCalledWith(expected);
          expect(state.setState.local).toHaveBeenCalledWith(expected);
        });
        it('calls initializeLock', function () {
          var initializeDimensions = jest.fn();
          hook.onImgLoad(initializeDimensions, simpleDims)(evt);
          expect(lockHooks.initializeLock).toHaveBeenCalled();
        });
      });
      describe('setHeight', function () {
        it('sets local height to int value of argument', function () {
          state.mockVal(state.keys.local, simpleDims);
          hooks.dimensionHooks().setHeight('23.4');
          expect(state.setState.local).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, simpleDims), {}, {
            height: 23
          }));
        });
      });
      describe('setWidth', function () {
        it('sets local width to int value of argument', function () {
          state.mockVal(state.keys.local, simpleDims);
          hooks.dimensionHooks().setWidth('34.5');
          expect(state.setState.local).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, simpleDims), {}, {
            width: 34
          }));
        });
      });
      describe('updateDimensions', function () {
        it('sets local and stored dimensions to newDimensions output', function () {
          // store values we care about under height or width, and add junk data to be stripped out.
          var testDims = function testDims(args) {
            return _objectSpread(_objectSpread({}, simpleDims), {}, {
              height: args
            });
          };
          var getValidDimensions = function getValidDimensions(args) {
            return _objectSpread(_objectSpread({}, testDims(args)), {}, {
              junk: 'data'
            });
          };
          state.mockVal(state.keys.isLocked, true);
          state.mockVal(state.keys.dimensions, simpleDims);
          state.mockVal(state.keys.lockDims, reducedDims);
          state.mockVal(state.keys.local, multiDims);
          jest.spyOn(hooks, hookKeys.getValidDimensions).mockImplementationOnce(getValidDimensions);
          hook = hooks.dimensionHooks();
          hook.updateDimensions();
          var expected = testDims({
            dimensions: simpleDims,
            lockDims: reducedDims,
            local: multiDims,
            isLocked: true
          });
          expect(state.setState.local).toHaveBeenCalledWith(expected);
          expect(state.setState.dimensions).toHaveBeenCalledWith(expected);
        });
      });
    });
  });
  describe('altTextHooks', function () {
    var value = 'myVAL';
    var isDecorative = true;
    var showAltTextDismissibleError = 'dismiSSiBLE';
    var showAltTextSubmissionError = 'subMISsion';
    beforeEach(function () {
      state.mock();
      hook = hooks.altTextHooks();
    });
    afterEach(function () {
      state.restore();
    });
    it('returns value and isDecorative', function () {
      state.mockVal(state.keys.altText, value);
      state.mockVal(state.keys.isDecorative, isDecorative);
      hook = hooks.altTextHooks();
      expect(hook.value).toEqual(value);
      expect(hook.isDecorative).toEqual(isDecorative);
    });
    test('setValue sets value', function () {
      state.mockVal(state.keys.altText, value);
      hook = hooks.altTextHooks();
      hook.setValue(value);
      expect(state.setState.altText).toHaveBeenCalledWith(value);
    });
    test('setIsDecorative sets isDecorative', function () {
      state.mockVal(state.keys.altText, value);
      hook = hooks.altTextHooks();
      hook.setIsDecorative(value);
      expect(state.setState.isDecorative).toHaveBeenCalledWith(value);
    });
    describe('error', function () {
      test('show is initialized to false and returns properly', function () {
        expect(hook.error.show).toEqual(false);
        state.mockVal(state.keys.showAltTextDismissibleError, showAltTextDismissibleError);
        hook = hooks.altTextHooks();
        expect(hook.error.show).toEqual(showAltTextDismissibleError);
      });
      test('set sets showAltTextDismissibleError to true', function () {
        hook.error.set();
        expect(state.setState.showAltTextDismissibleError).toHaveBeenCalledWith(true);
      });
      test('dismiss sets showAltTextDismissibleError to false', function () {
        hook.error.dismiss();
        expect(state.setState.showAltTextDismissibleError).toHaveBeenCalledWith(false);
      });
    });
    describe('validation', function () {
      test('show is initialized to false and returns properly', function () {
        expect(hook.validation.show).toEqual(false);
        state.mockVal(state.keys.showAltTextSubmissionError, showAltTextSubmissionError);
        hook = hooks.altTextHooks();
        expect(hook.validation.show).toEqual(showAltTextSubmissionError);
      });
      test('set sets showAltTextSubmissionError to true', function () {
        hook.validation.set();
        expect(state.setState.showAltTextSubmissionError).toHaveBeenCalledWith(true);
      });
      test('dismiss sets showAltTextSubmissionError to false', function () {
        hook.validation.dismiss();
        expect(state.setState.showAltTextSubmissionError).toHaveBeenCalledWith(false);
      });
    });
  });
  describe('onInputChange', function () {
    it('calls handleValue with event value prop', function () {
      var value = 'TEST value';
      var onChange = jest.fn();
      hooks.onInputChange(onChange)({
        target: {
          value: value
        }
      });
      expect(onChange).toHaveBeenCalledWith(value);
    });
  });
  describe('onCheckboxChange', function () {
    it('calls handleValue with event checked prop', function () {
      var checked = 'TEST value';
      var onChange = jest.fn();
      hooks.onCheckboxChange(onChange)({
        target: {
          checked: checked
        }
      });
      expect(onChange).toHaveBeenCalledWith(checked);
    });
  });
  describe('checkFormValidation', function () {
    var props = {
      onAltTextFail: jest.fn().mockName('onAltTextFail')
    };
    beforeEach(function () {
      props.altText = '';
      props.isDecorative = false;
    });
    it('calls onAltTextFail when isDecorative is false and altText is an empty string', function () {
      hooks.checkFormValidation(_objectSpread({}, props));
      expect(props.onAltTextFail).toHaveBeenCalled();
    });
    it('returns false when isDeocrative is false and altText is an empty string', function () {
      expect(hooks.checkFormValidation(_objectSpread({}, props))).toEqual(false);
    });
    it('returns true when isDecorative is true', function () {
      props.isDecorative = true;
      expect(hooks.checkFormValidation(_objectSpread({}, props))).toEqual(true);
    });
  });
  describe('onSaveClick', function () {
    var props = {
      altText: {
        error: {
          show: true,
          set: jest.fn(),
          dismiss: jest.fn()
        },
        validation: {
          show: true,
          set: jest.fn(),
          dismiss: jest.fn()
        }
      },
      dimensions: simpleDims,
      saveToEditor: jest.fn().mockName('saveToEditor')
    };
    beforeEach(function () {
      props.altText.value = 'What is this?';
      props.isDecorative = false;
    });
    it('calls checkFormValidation', function () {
      jest.spyOn(hooks, hookKeys.checkFormValidation);
      hooks.onSaveClick(_objectSpread({}, props))();
      expect(hooks.checkFormValidation).toHaveBeenCalled();
    });
    it('calls saveToEditor with dimensions, altText and isDecorative when checkFormValidation is true', function () {
      jest.spyOn(hooks, hookKeys.checkFormValidation).mockReturnValueOnce(true);
      hooks.onSaveClick(_objectSpread({}, props))();
      expect(props.saveToEditor).toHaveBeenCalledWith({
        altText: props.altText.value,
        dimensions: props.dimensions,
        isDecorative: props.isDecorative
      });
    });
    it('calls dismissError and sets showAltTextSubmissionError to false when checkFormValidation is true', function () {
      jest.spyOn(hooks, hookKeys.checkFormValidation).mockReturnValueOnce(true);
      hooks.onSaveClick(_objectSpread({}, props))();
      expect(props.altText.error.dismiss).toHaveBeenCalled();
      expect(props.altText.validation.dismiss).toHaveBeenCalled();
    });
    it('does not call saveEditor when checkFormValidation is false', function () {
      jest.spyOn(hooks, hookKeys.checkFormValidation).mockReturnValueOnce(false);
      hooks.onSaveClick(_objectSpread({}, props))();
      expect(props.saveToEditor).not.toHaveBeenCalled();
    });
  });
});
//# sourceMappingURL=hooks.test.js.map