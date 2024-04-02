"use strict";

var _react = require("react");
var _reactRedux = require("react-redux");
var _utils = require("../../../../../utils");
var _redux = require("../../../../../data/redux");
var _testUtils = require("../../../../../../testUtils");
var handlers = _interopRequireWildcard(require("./handlers"));
var hooks = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('react', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
    useState: function useState(val) {
      return {
        useState: val
      };
    },
    useEffect: jest.fn(),
    useCallback: jest.fn(function (cb, prereqs) {
      return {
        useCallback: {
          cb: cb,
          prereqs: prereqs
        }
      };
    }),
    useMemo: jest.fn(function (cb, prereqs) {
      return {
        useMemo: {
          cb: cb,
          prereqs: prereqs
        }
      };
    })
  });
});
jest.mock('./handlers', function () {
  return {
    handleIndexEvent: jest.fn(function (args) {
      return {
        handleIndexEvent: args
      };
    }),
    handleIndexTransformEvent: jest.fn(function (args) {
      return {
        handleIndexTransformEvent: args
      };
    }),
    onValue: jest.fn(function (cb) {
      return {
        onValue: cb
      };
    }),
    onChecked: jest.fn(function (cb) {
      return {
        onChecked: cb
      };
    }),
    onEvent: jest.fn(function (cb) {
      return {
        onEvent: cb
      };
    })
  };
});
jest.mock('../../../../../data/redux', function () {
  return {
    actions: {
      video: {
        updateField: function updateField(val) {
          return {
            updateField: val
          };
        }
      }
    },
    selectors: {
      video: {
        videoSource: function videoSource(state) {
          return {
            videoSource: state
          };
        },
        fallbackVideos: function fallbackVideos(state) {
          return {
            fallbackVideos: state
          };
        },
        allowVideoDownloads: function allowVideoDownloads(state) {
          return {
            allowVideoDownloads: state
          };
        },
        allowVideoSharing: function allowVideoSharing(state) {
          return {
            allowVideoSharing: state
          };
        },
        thumbnail: function thumbnail(state) {
          return {
            thumbnail: state
          };
        },
        transcripts: function transcripts(state) {
          return {
            transcripts: state
          };
        },
        allowTranscriptDownloads: function allowTranscriptDownloads(state) {
          return {
            allowTranscriptDownloads: state
          };
        },
        showTranscriptByDefault: function showTranscriptByDefault(state) {
          return {
            showTranscriptByDefault: state
          };
        },
        duration: function duration(state) {
          return {
            duration: state
          };
        },
        handout: function handout(state) {
          return {
            handout: state
          };
        },
        licenseType: function licenseType(state) {
          return {
            licenseType: state
          };
        },
        licenseDetails: function licenseDetails(state) {
          return {
            licenseDetails: state
          };
        }
      }
    }
  };
});
var keys = {
  hooks: (0, _utils.keyStore)(hooks),
  selectors: hooks.selectorKeys
};
var state = new _testUtils.MockUseState(hooks);
var testValue = 'my-test-value';
var testValue2 = 'my-test-value-2';
var testKey = keys.selectors.handout;
var dispatch = jest.fn(function (val) {
  return {
    dispatch: val
  };
});
var out;
describe('Video Settings modal hooks', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('state hooks', function () {
    state.testGetter(state.keys.videoSource);
    state.testGetter(state.keys.fallbackVideos);
    state.testGetter(state.keys.allowVideoDownloads);
    state.testGetter(state.keys.allowVideoSharing);
    state.testGetter(state.keys.thumbnail);
    state.testGetter(state.keys.transcripts);
    state.testGetter(state.keys.allowTranscriptDownloads);
    state.testGetter(state.keys.showTranscriptByDefault);
    state.testGetter(state.keys.duration);
    state.testGetter(state.keys.handout);
    state.testGetter(state.keys.licenseType);
    state.testGetter(state.keys.licenseDetails);
  });
  describe('non-state hooks', function () {
    beforeEach(function () {
      return state.mock();
    });
    afterEach(function () {
      return state.restore();
    });
    describe('updatedArray', function () {
      it('returns a new array with the given index replaced', function () {
        var testArray = ['0', '1', '2', '3', '4'];
        var oldArray = [].concat(testArray);
        expect(hooks.updatedArray(testArray, 3, testValue)).toEqual(['0', '1', '2', testValue, '4']);
        expect(testArray).toEqual(oldArray);
      });
    });
    describe('updatedObject', function () {
      it('returns a new object with the given index replaced', function () {
        var testObj = _defineProperty({
          some: 'data'
        }, testKey, testValue);
        var oldObj = _objectSpread({}, testObj);
        expect(hooks.updatedObject(testObj, testKey, testValue2)).toEqual(_objectSpread(_objectSpread({}, testObj), {}, _defineProperty({}, testKey, testValue2)));
        expect(testObj).toEqual(oldObj);
      });
    });
    describe('updateFormField', function () {
      it('returns a memoized callback that is only created once', function () {
        expect(hooks.updateFormField({
          dispatch: dispatch,
          key: testKey
        }).useCallback.prereqs).toEqual([]);
      });
      it('returns memoized callback that dispaches updateField with val on the given key', function () {
        hooks.updateFormField({
          dispatch: dispatch,
          key: testKey
        }).useCallback.cb(testValue);
        expect(dispatch).toHaveBeenCalledWith(_redux.actions.video.updateField(_defineProperty({}, testKey, testValue)));
      });
    });
    describe('valueHooks', function () {
      var formValue;
      beforeEach(function () {
        formValue = (0, _reactRedux.useSelector)(_redux.selectors.video[testKey]);
      });
      describe('behavior', function () {
        describe('initialization', function () {
          test('useEffect memoized on formValue', function () {
            hooks.valueHooks({
              dispatch: dispatch,
              key: testKey
            });
            expect(_react.useEffect).toHaveBeenCalled();
            expect(_react.useEffect.mock.calls[0][1]).toEqual([formValue]);
          });
          test('calls setLocal with formValue by default', function () {
            hooks.valueHooks({
              dispatch: dispatch,
              key: testKey
            });
            _react.useEffect.mock.calls[0][0]();
            expect(state.setState[testKey]).toHaveBeenCalledWith(formValue);
          });
        });
      });
      describe('returned object', function () {
        var mockUpdateFormField = function mockUpdateFormField(args) {
          return jest.fn(function (val) {
            return {
              updateFormField: {
                args: args,
                val: val
              }
            };
          });
        };
        beforeEach(function () {
          jest.spyOn(hooks, keys.hooks.updateFormField).mockImplementationOnce(mockUpdateFormField);
          out = hooks.valueHooks({
            dispatch: dispatch,
            key: testKey
          });
        });
        test('formValue from selectors.video[key]', function () {
          expect(out.formValue).toEqual((0, _reactRedux.useSelector)(_redux.selectors.video[testKey]));
        });
        describe('local and setLocal', function () {
          test('keyed to state, initialized with formValue', function () {
            var _out = out,
              local = _out.local,
              setLocal = _out.setLocal;
            expect(local).toEqual(formValue);
            setLocal(testValue);
            expect(state.setState[testKey]).toHaveBeenCalledWith(testValue);
          });
        });
        test('setFormValue forwarded from module', function () {
          expect(out.setFormValue(testValue)).toEqual(mockUpdateFormField({
            dispatch: dispatch,
            key: testKey
          })(testValue));
        });
        describe('setAll', function () {
          it('returns a memoized callback based on setLocal and setFormValue', function () {
            expect(out.setAll.useCallback.prereqs).toEqual([out.setLocal, out.setFormValue]);
          });
          it('calls setLocal and setFormValue with the passed value', function () {
            out.setAll.useCallback.cb(testValue);
            expect(out.setLocal).toHaveBeenCalledWith(testValue);
            expect(out.setFormValue).toHaveBeenCalledWith(testValue);
          });
        });
      });
    });
    describe('genericWidget', function () {
      var valueProps = {
        formValue: '123',
        local: 23,
        setLocal: jest.fn(),
        setFormValue: jest.fn(),
        setAll: jest.fn()
      };
      beforeEach(function () {
        jest.spyOn(hooks, keys.hooks.valueHooks).mockReturnValueOnce(valueProps);
        out = hooks.genericWidget({
          dispatch: dispatch,
          key: testKey
        });
      });
      describe('returned object', function () {
        it('forwards formValue and local from valueHooks', function () {
          expect(hooks.valueHooks).toHaveBeenCalledWith({
            dispatch: dispatch,
            key: testKey
          });
          expect(out.formValue).toEqual(valueProps.formValue);
          expect(out.local).toEqual(valueProps.local);
        });
        test('setFormValue mapped to valueHooks.setFormValue', function () {
          expect(out.setFormValue).toEqual(valueProps.setFormValue);
        });
        test('onChange mapped to handlers.onValue(valueHooks.setLocal)', function () {
          expect(out.onChange).toEqual(handlers.onValue(valueProps.setLocal));
        });
        test('onCheckedChange mapped to handlers.onChecked(valueHooks.setAll)', function () {
          expect(out.onCheckedChange).toEqual(handlers.onChecked(valueProps.setAll));
        });
        test('onBlur mapped to handlers.onValue(valueHooks.setAll)', function () {
          expect(out.onBlur).toEqual(handlers.onValue(valueProps.setAll));
        });
      });
    });
    describe('non-generic widgets', function () {
      var widgetValues = {
        formValue: '123',
        local: 23,
        setLocal: jest.fn(),
        setFormValue: jest.fn(),
        setAll: jest.fn()
      };
      var valueHooksSpy;
      beforeEach(function () {
        valueHooksSpy = jest.spyOn(hooks, keys.hooks.valueHooks).mockReturnValue(widgetValues);
      });
      afterEach(function () {
        valueHooksSpy.mockRestore();
      });
      describe('arrayWidget', function () {
        var mockUpdatedArray = function mockUpdatedArray() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return {
            updatedArray: args
          };
        };
        var arraySpy;
        beforeEach(function () {
          arraySpy = jest.spyOn(hooks, keys.hooks.updatedArray).mockImplementation(mockUpdatedArray);
          out = hooks.arrayWidget({
            dispatch: dispatch,
            key: testKey
          });
        });
        afterEach(function () {
          arraySpy.mockRestore();
        });
        it('forwards widget values', function () {
          expect(out.formValue).toEqual(widgetValues.formValue);
          expect(out.local).toEqual(widgetValues.local);
        });
        it('overrides onChange with handleIndexTransformEvent', function () {
          expect(out.onChange).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setLocal,
            transform: arraySpy,
            local: widgetValues.local
          }));
        });
        it('overrides onBlur with handleIndexTransformEvent', function () {
          expect(out.onBlur).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setAll,
            transform: arraySpy,
            local: widgetValues.local
          }));
        });
        it('adds onClear event that calls setAll with empty string', function () {
          out.onClear(testKey)();
          expect(widgetValues.setAll).toHaveBeenCalledWith(arraySpy(widgetValues.local, testKey, ''));
        });
      });
      describe('objectWidget', function () {
        beforeEach(function () {
          out = hooks.objectWidget({
            dispatch: dispatch,
            key: testKey
          });
        });
        it('forwards widget values', function () {
          expect(out.formValue).toEqual(widgetValues.formValue);
          expect(out.local).toEqual(widgetValues.local);
        });
        it('overrides onChange with handleIndexTransformEvent', function () {
          expect(out.onChange).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setLocal,
            transform: hooks.updatedObject,
            local: widgetValues.local
          }));
        });
        it('overrides onBlur with handleIndexTransformEvent', function () {
          expect(out.onBlur).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setAll,
            transform: hooks.updatedObject,
            local: widgetValues.local
          }));
        });
      });
    });
    describe('widgetValues', function () {
      describe('returned object', function () {
        test('shaped to the fields object, where each value is called with key and dispatch', function () {
          var testKeys = ['1', '24', '23gsa'];
          var fieldMethods = [jest.fn(function (v) {
            return {
              v1: v
            };
          }), jest.fn(function (v) {
            return {
              v2: v
            };
          }), jest.fn(function (v) {
            return {
              v3: v
            };
          })];
          var fields = testKeys.reduce(function (obj, key, index) {
            return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, fieldMethods[index]));
          }, {});
          var expected = testKeys.reduce(function (obj, key, index) {
            return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, fieldMethods[index]({
              key: key,
              dispatch: dispatch
            })));
          }, {});
          expect(hooks.widgetValues({
            fields: fields,
            dispatch: dispatch
          })).toMatchObject(expected);
        });
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map