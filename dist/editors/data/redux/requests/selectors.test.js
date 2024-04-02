"use strict";

var _requests3 = require("../../constants/requests");
var selectors = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // import * in order to mock in-file references
jest.mock('reselect', function () {
  return {
    createSelector: jest.fn(function (preSelectors, cb) {
      return {
        preSelectors: preSelectors,
        cb: cb
      };
    })
  };
});
var testValue = 'my test VALUE';
var testKey = 'MY test key';
describe('request selectors', function () {
  describe('basic selectors', function () {
    describe('requestStatus', function () {
      it('returns the state associated with the given requestKey', function () {
        expect(selectors.requestStatus({
          requests: _defineProperty({}, testKey, testValue)
        }, {
          requestKey: testKey
        })).toEqual(testValue);
      });
    });
    describe('statusSelector', function () {
      it('returns a state selector that applies a fn against request state by requestKey', function () {
        var myMethod = function myMethod(_ref) {
          var data = _ref.data;
          return {
            myData: data
          };
        };
        expect(selectors.statusSelector(myMethod)({
          requests: _defineProperty({}, testKey, {
            data: testValue
          })
        }, {
          requestKey: testKey
        })).toEqual({
          myData: testValue
        });
      });
    });
    describe('state selectors', function () {
      var testStateSelector = function testStateSelector(selector, expected) {
        describe(selector, function () {
          it("returns true iff the request status equals ".concat(expected), function () {
            expect(selectors[selector]({
              status: expected
            })).toEqual(true);
            expect(selectors[selector]({
              status: 'other'
            })).toEqual(false);
          });
        });
      };
      testStateSelector('isInactive', _requests3.RequestStates.inactive);
      testStateSelector('isPending', _requests3.RequestStates.pending);
      testStateSelector('isCompleted', _requests3.RequestStates.completed);
      testStateSelector('isFailed', _requests3.RequestStates.failed);
      describe('isFinished', function () {
        it('returns true iff the request is completed or failed', function () {
          expect(selectors.isFinished({
            status: _requests3.RequestStates.completed
          })).toEqual(true);
          expect(selectors.isFinished({
            status: _requests3.RequestStates.failed
          })).toEqual(true);
          expect(selectors.isFinished({
            status: 'other'
          })).toEqual(false);
        });
      });
    });
    describe('error selectors', function () {
      describe('error', function () {
        it('returns the error for the request', function () {
          expect(selectors.error({
            error: testValue
          })).toEqual(testValue);
        });
      });
      describe('errorStatus', function () {
        it('returns the status the error response iff one exists', function () {
          expect(selectors.errorStatus({})).toEqual(undefined);
          expect(selectors.errorStatus({
            error: {}
          })).toEqual(undefined);
          expect(selectors.errorStatus({
            error: {
              response: {}
            }
          })).toEqual(undefined);
          expect(selectors.errorStatus({
            error: {
              response: {
                status: testValue
              }
            }
          })).toEqual(testValue);
        });
      });
      describe('errorCode', function () {
        it('returns the status the error code iff one exists', function () {
          expect(selectors.errorCode({})).toEqual(undefined);
          expect(selectors.errorCode({
            error: {}
          })).toEqual(undefined);
          expect(selectors.errorCode({
            error: {
              response: {}
            }
          })).toEqual(undefined);
          expect(selectors.errorCode({
            error: {
              response: {
                data: testValue
              }
            }
          })).toEqual(testValue);
        });
      });
    });
    describe('data', function () {
      it('returns the data from the request', function () {
        expect(selectors.data({
          data: testValue
        })).toEqual(testValue);
      });
    });
  });
  describe('exported selectors', function () {
    test('requestStatus forwards basic selector', function () {
      expect(selectors["default"].requestStatus).toEqual(selectors.requestStatus);
    });
    describe('statusSelector selectors', function () {
      var statusSelector;
      var connectedSelectors;
      beforeEach(function () {
        statusSelector = selectors.statusSelector;
        selectors.statusSelector = jest.fn(function (key) {
          return {
            statusSelector: key
          };
        });
        connectedSelectors = selectors.connectedStatusSelectors();
      });
      afterEach(function () {
        selectors.statusSelector = statusSelector;
      });
      var testStatusSelector = function testStatusSelector(name) {
        describe(name, function () {
          it("returns a status selector keyed to the ".concat(name, " selector"), function () {
            expect(connectedSelectors[name].statusSelector).toEqual(selectors[name]);
          });
        });
      };
      ['isInactive', 'isPending', 'isCompleted', 'isFailed', 'error', 'errorCode', 'errorStatus', 'data'].map(testStatusSelector);
    });
  });
});
//# sourceMappingURL=selectors.test.js.map