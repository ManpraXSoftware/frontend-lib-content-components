"use strict";

var _reducer = require("./reducer");
var _requests = require("../../constants/requests");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
describe('requests reducer', function () {
  test('intial state generated on create', function () {
    expect((0, _reducer.reducer)(undefined, {})).toEqual(_reducer.initialState);
  });
  describe('handling actions', function () {
    var arbitraryKey = 'ArbItrAryKey';
    var requestsList = [_requests.RequestKeys.fetchUnit, _requests.RequestKeys.fetchBlock, _requests.RequestKeys.saveBlock, arbitraryKey];
    requestsList.forEach(function (requestKey) {
      describe("".concat(requestKey, " lifecycle"), function () {
        var testAction = function testAction(action, args, expected) {
          var testingState = _objectSpread(_objectSpread({}, _reducer.initialState), {}, _defineProperty({
            arbitraryField: 'arbitrary'
          }, requestKey, {
            arbitrary: 'state'
          }));
          expect((0, _reducer.reducer)(testingState, _reducer.actions[action](args))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, _defineProperty({}, requestKey, expected)));
        };
        test('startRequest sets pending status', function () {
          testAction('startRequest', requestKey, {
            status: _requests.RequestStates.pending
          });
        });
        test('completeRequest sets completed status and loads response', function () {
          testAction('completeRequest', {
            requestKey: requestKey
          }, {
            status: _requests.RequestStates.completed
          });
        });
        test('failRequest sets failed state and loads error', function () {
          testAction('failRequest', {
            requestKey: requestKey
          }, {
            status: _requests.RequestStates.failed
          });
        });
        test('clearRequest clears request state', function () {
          testAction('clearRequest', {
            requestKey: requestKey
          }, {});
        });
      });
    });
  });
});
//# sourceMappingURL=reducer.test.js.map