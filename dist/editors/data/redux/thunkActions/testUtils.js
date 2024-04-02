"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createTestFetcher = void 0;
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* eslint-disable import/no-extraneous-dependencies */ /* istanbul ignore file */
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk["default"]]);

/** createTestFetcher(mockedMethod, thunkAction, args, onDispatch)
 * Creates a testFetch method, which will test a given thunkAction of the form:
 *   ```
 *   const <thunkAction> = (<args>) => (dispatch, getState) => {
 *   ...
 *   return <mockedMethod>.then().catch();
 *   ```
 * The returned function will take a promise handler function, a list of expected actions
 * to have been dispatched (objects only), and an optional verifyFn method to be called after
 * the fetch has been completed.
 *
 * @param {fn} mockedMethod - already-mocked api method being exercised by the thunkAction.
 * @param {fn} thunkAction - thunkAction to call/test
 * @param {array} args - array of args to dispatch the thunkAction with
 * @param {[fn]} onDispatch - optional function to be called after dispatch
 *
 * @return {fn} testFetch method
 *   @param {fn} resolveFn - promise handler of the form (resolve, reject) => {}.
 *     should return a call to resolve or reject with response data.
 *   @param {object[]} expectedActions - array of action objects expected to have been dispatched
 *     will be verified after the thunkAction resolves
 *   @param {[fn]} verifyFn - optional function to be called after dispatch
 */
var createTestFetcher = exports.createTestFetcher = function createTestFetcher(mockedMethod, thunkAction, args, onDispatch) {
  return function (resolveFn, expectedActions) {
    var store = mockStore({});
    mockedMethod.mockReturnValue(new Promise(function (resolve) {
      resolve(new Promise(resolveFn));
    }));
    return store.dispatch(thunkAction.apply(void 0, _toConsumableArray(args))).then(function () {
      onDispatch();
      if (expectedActions !== undefined) {
        expect(store.getActions()).toEqual(expectedActions);
      }
    });
  };
};
var _default = exports["default"] = {
  createTestFetcher: createTestFetcher
};
//# sourceMappingURL=testUtils.js.map