"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _api = _interopRequireDefault(require("../../services/cms/api"));
var requests = _interopRequireWildcard(require("./requests"));
var _index = require("../index");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var testState = {
  some: 'data'
};
jest.mock('../app/selectors', function () {
  return {
    simpleSelectors: {
      studioEndpointUrl: function studioEndpointUrl(state) {
        return {
          studioEndpointUrl: state
        };
      },
      blockId: function blockId(state) {
        return {
          blockId: state
        };
      }
    },
    studioEndpointUrl: function studioEndpointUrl(state) {
      return {
        studioEndpointUrl: state
      };
    },
    blockId: function blockId(state) {
      return {
        blockId: state
      };
    },
    blockType: function blockType(state) {
      return {
        blockType: state
      };
    },
    learningContextId: function learningContextId(state) {
      return {
        learningContextId: state
      };
    },
    blockTitle: function blockTitle(state) {
      return {
        title: state
      };
    }
  };
});
jest.mock('../../services/cms/api', function () {
  return {
    fetchBlockById: function fetchBlockById(_ref) {
      var id = _ref.id,
        url = _ref.url;
      return {
        id: id,
        url: url
      };
    },
    fetchStudioView: function fetchStudioView(_ref2) {
      var id = _ref2.id,
        url = _ref2.url;
      return {
        id: id,
        url: url
      };
    },
    fetchByUnitId: function fetchByUnitId(_ref3) {
      var id = _ref3.id,
        url = _ref3.url;
      return {
        id: id,
        url: url
      };
    },
    fetchCourseDetails: function fetchCourseDetails(args) {
      return args;
    },
    saveBlock: function saveBlock(args) {
      return args;
    },
    fetchAssets: function fetchAssets(_ref4) {
      var id = _ref4.id,
        url = _ref4.url;
      return {
        id: id,
        url: url
      };
    },
    uploadAsset: function uploadAsset(args) {
      return args;
    },
    loadImages: jest.fn(),
    uploadThumbnail: function uploadThumbnail(args) {
      return args;
    },
    uploadTranscript: function uploadTranscript(args) {
      return args;
    },
    deleteTranscript: function deleteTranscript(args) {
      return args;
    },
    getTranscript: function getTranscript(args) {
      return args;
    },
    checkTranscriptsForImport: function checkTranscriptsForImport(args) {
      return args;
    },
    importTranscript: function importTranscript(args) {
      return args;
    },
    fetchVideoFeatures: function fetchVideoFeatures(args) {
      return args;
    }
  };
});
var apiKeys = (0, _utils.keyStore)(_api["default"]);
var dispatch;
var onSuccess;
var onFailure;
var fetchParams = {
  fetchParam1: 'param1',
  fetchParam2: 'param2'
};
describe('requests thunkActions module', function () {
  beforeEach(function () {
    dispatch = jest.fn();
    onSuccess = jest.fn();
    onFailure = jest.fn();
  });
  describe('networkRequest', function () {
    var requestKey = 'test-request';
    var testData = {
      some: 'test data'
    };
    var resolveFn;
    var rejectFn;
    describe('without success and failure handlers', function () {
      beforeEach(function () {
        requests.networkRequest({
          requestKey: requestKey,
          promise: new Promise(function (resolve, reject) {
            resolveFn = resolve;
            rejectFn = reject;
          })
        })(dispatch);
      });
      test('calls startRequest action with requestKey', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)]]);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));
      describe('on success', function () {
        beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return resolveFn(testData);
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
        it('dispatches completeRequest', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.completeRequest({
                  requestKey: requestKey,
                  response: testData
                })]]);
              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        })));
      });
      describe('on failure', function () {
        beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return rejectFn(testData);
              case 2:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })));
        test('dispatches completeRequest', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.failRequest({
                  requestKey: requestKey,
                  error: testData
                })]]);
              case 1:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        })));
      });
    });
    describe('with handlers', function () {
      beforeEach(function () {
        onSuccess = jest.fn();
        onFailure = jest.fn();
        requests.networkRequest({
          requestKey: requestKey,
          promise: new Promise(function (resolve, reject) {
            resolveFn = resolve;
            rejectFn = reject;
          }),
          onSuccess: onSuccess,
          onFailure: onFailure
        })(dispatch);
      });
      test('calls startRequest action with requestKey', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)]]);
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      })));
      describe('on success', function () {
        beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return resolveFn(testData);
              case 2:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        })));
        it('dispatches completeRequest', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.completeRequest({
                  requestKey: requestKey,
                  response: testData
                })]]);
              case 1:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        })));
        it('calls onSuccess with response', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                expect(onSuccess).toHaveBeenCalledWith(testData);
                expect(onFailure).not.toHaveBeenCalled();
              case 2:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        })));
      });
      describe('on failure', function () {
        beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return rejectFn(testData);
              case 2:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        })));
        test('dispatches completeRequest', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.failRequest({
                  requestKey: requestKey,
                  error: testData
                })]]);
              case 1:
              case "end":
                return _context11.stop();
            }
          }, _callee11);
        })));
        test('calls onFailure with response', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                expect(onFailure).toHaveBeenCalledWith(testData);
                expect(onSuccess).not.toHaveBeenCalled();
              case 2:
              case "end":
                return _context12.stop();
            }
          }, _callee12);
        })));
      });
    });
  });
  var testNetworkRequestAction = function testNetworkRequestAction(_ref17) {
    var action = _ref17.action,
      args = _ref17.args,
      expectedData = _ref17.expectedData,
      expectedString = _ref17.expectedString;
    var dispatchedAction;
    beforeEach(function () {
      action(_objectSpread(_objectSpread({}, args), {}, {
        onSuccess: onSuccess,
        onFailure: onFailure
      }))(dispatch, function () {
        return testState;
      });
      var _dispatch$mock$calls = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls$ = _slicedToArray(_dispatch$mock$calls[0], 1);
      dispatchedAction = _dispatch$mock$calls$[0];
    });
    it('dispatches networkRequest', function () {
      expect(dispatchedAction.networkRequest).not.toEqual(undefined);
    });
    test('forwards onSuccess and onFailure', function () {
      expect(dispatchedAction.networkRequest.onSuccess).toEqual(onSuccess);
      expect(dispatchedAction.networkRequest.onFailure).toEqual(onFailure);
    });
    test(expectedString, function () {
      expect(dispatchedAction.networkRequest).toEqual(_objectSpread(_objectSpread({}, expectedData), {}, {
        onSuccess: onSuccess,
        onFailure: onFailure
      }));
    });
  };
  describe('network request actions', function () {
    beforeEach(function () {
      requests.networkRequest = jest.fn(function (args) {
        return {
          networkRequest: args
        };
      });
    });
    describe('fetchBlock', function () {
      testNetworkRequestAction({
        action: requests.fetchBlock,
        args: fetchParams,
        expectedString: 'with fetchBlock promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchBlock,
          promise: _api["default"].fetchBlockById({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            blockId: _index.selectors.app.blockId(testState)
          })
        })
      });
    });
    describe('fetchUnit', function () {
      testNetworkRequestAction({
        action: requests.fetchUnit,
        args: fetchParams,
        expectedString: 'with fetchUnit promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchUnit,
          promise: _api["default"].fetchByUnitId({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            blockId: _index.selectors.app.blockId(testState)
          })
        })
      });
    });
    describe('fetchStudioView', function () {
      testNetworkRequestAction({
        action: requests.fetchStudioView,
        args: fetchParams,
        expectedString: 'with fetchStudioView promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchStudioView,
          promise: _api["default"].fetchStudioView({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            blockId: _index.selectors.app.blockId(testState)
          })
        })
      });
    });
    describe('fetchCourseDetails', function () {
      testNetworkRequestAction({
        action: requests.fetchCourseDetails,
        args: fetchParams,
        expectedString: 'with fetchCourseDetails promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchCourseDetails,
          promise: _api["default"].fetchCourseDetails({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            learningContextId: _index.selectors.app.learningContextId(testState)
          })
        })
      });
    });
    describe('fetchAssets', function () {
      var fetchAssets;
      var loadImages;
      var dispatchedAction;
      var expectedArgs = {
        studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
        learningContextId: _index.selectors.app.learningContextId(testState)
      };
      beforeEach(function () {
        fetchAssets = jest.fn(function (args) {
          return new Promise(function (resolve) {
            resolve({
              data: {
                assets: {
                  fetchAssets: args
                }
              }
            });
          });
        });
        jest.spyOn(_api["default"], apiKeys.fetchAssets).mockImplementationOnce(fetchAssets);
        loadImages = jest.spyOn(_api["default"], apiKeys.loadImages).mockImplementationOnce(function () {
          return {};
        });
        requests.fetchAssets(_objectSpread(_objectSpread({}, fetchParams), {}, {
          onSuccess: onSuccess,
          onFailure: onFailure
        }))(dispatch, function () {
          return testState;
        });
        var _dispatch$mock$calls2 = _slicedToArray(dispatch.mock.calls, 1);
        var _dispatch$mock$calls3 = _slicedToArray(_dispatch$mock$calls2[0], 1);
        dispatchedAction = _dispatch$mock$calls3[0];
      });
      it('dispatches networkRequest', function () {
        expect(dispatchedAction.networkRequest).not.toEqual(undefined);
      });
      test('forwards onSuccess and onFailure', function () {
        expect(dispatchedAction.networkRequest.onSuccess).toEqual(onSuccess);
        expect(dispatchedAction.networkRequest.onFailure).toEqual(onFailure);
      });
      test('api.fetchAssets promise called with studioEndpointUrl and learningContextId', function () {
        expect(fetchAssets).toHaveBeenCalledWith(expectedArgs);
      });
      test('promise is chained with api.loadImages', function () {
        expect(loadImages).toHaveBeenCalledWith({
          fetchAssets: expectedArgs
        });
      });
    });
    describe('saveBlock', function () {
      var content = 'SoME HtMl CoNtent As String';
      testNetworkRequestAction({
        action: requests.saveBlock,
        args: _objectSpread({
          content: content
        }, fetchParams),
        expectedString: 'with saveBlock promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.saveBlock,
          promise: _api["default"].saveBlock({
            blockId: _index.selectors.app.blockId(testState),
            blockType: _index.selectors.app.blockType(testState),
            learningContextId: _index.selectors.app.learningContextId(testState),
            content: content,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            title: _index.selectors.app.blockTitle(testState)
          })
        })
      });
    });
    describe('uploadAsset', function () {
      var asset = 'SoME iMage CoNtent As String';
      testNetworkRequestAction({
        action: requests.uploadAsset,
        args: _objectSpread({
          asset: asset
        }, fetchParams),
        expectedString: 'with uploadAsset promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.uploadAsset,
          promise: _api["default"].uploadAsset({
            learningContextId: _index.selectors.app.learningContextId(testState),
            asset: asset,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('uploadThumbnail', function () {
      var thumbnail = 'SoME tHumbNAil CoNtent As String';
      var videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.uploadThumbnail,
        args: _objectSpread({
          thumbnail: thumbnail,
          videoId: videoId
        }, fetchParams),
        expectedString: 'with uploadThumbnail promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.uploadThumbnail,
          promise: _api["default"].uploadThumbnail({
            learningContextId: _index.selectors.app.learningContextId(testState),
            thumbnail: thumbnail,
            videoId: videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('deleteTranscript', function () {
      var language = 'SoME laNGUage CoNtent As String';
      var videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.deleteTranscript,
        args: _objectSpread({
          language: language,
          videoId: videoId
        }, fetchParams),
        expectedString: 'with deleteTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.deleteTranscript,
          promise: _api["default"].deleteTranscript({
            blockId: _index.selectors.app.blockId(testState),
            language: language,
            videoId: videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('checkTranscriptsForImport', function () {
      var youTubeId = 'SoME yOUtUbEiD As String';
      var videoId = 'SoME VidEOid As String';
      testNetworkRequestAction({
        action: requests.checkTranscriptsForImport,
        args: _objectSpread({
          youTubeId: youTubeId,
          videoId: videoId
        }, fetchParams),
        expectedString: 'with checkTranscriptsForImport promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.checkTranscriptsForImport,
          promise: _api["default"].checkTranscriptsForImport({
            blockId: _index.selectors.app.blockId(testState),
            youTubeId: youTubeId,
            videoId: videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('importTranscript', function () {
      var youTubeId = 'SoME yOUtUbEiD As String';
      testNetworkRequestAction({
        action: requests.importTranscript,
        args: _objectSpread({
          youTubeId: youTubeId
        }, fetchParams),
        expectedString: 'with importTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.importTranscript,
          promise: _api["default"].importTranscript({
            blockId: _index.selectors.app.blockId(testState),
            youTubeId: youTubeId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('getTranscriptFile', function () {
      var language = 'SoME laNGUage CoNtent As String';
      var videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.getTranscriptFile,
        args: _objectSpread({
          language: language,
          videoId: videoId
        }, fetchParams),
        expectedString: 'with getTranscriptFile promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.getTranscriptFile,
          promise: _api["default"].getTranscript({
            blockId: _index.selectors.app.blockId(testState),
            language: language,
            videoId: videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('updateTranscriptLanguage', function () {
      var languageBeforeChange = 'SoME laNGUage CoNtent As String';
      var newLanguageCode = 'SoME NEW laNGUage CoNtent As String';
      var videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.updateTranscriptLanguage,
        args: _objectSpread({
          languageBeforeChange: languageBeforeChange,
          newLanguageCode: newLanguageCode,
          videoId: videoId
        }, fetchParams),
        expectedString: 'with uploadTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.updateTranscriptLanguage,
          promise: _api["default"].uploadTranscript({
            blockId: _index.selectors.app.blockId(testState),
            videoId: videoId,
            language: languageBeforeChange,
            newLanguage: newLanguageCode,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('uploadTranscript', function () {
      var language = 'SoME laNGUage CoNtent As String';
      var videoId = 'SoME VidEOid CoNtent As String';
      var transcript = 'SoME tRANscRIPt CoNtent As String';
      testNetworkRequestAction({
        action: requests.uploadTranscript,
        args: _objectSpread({
          transcript: transcript,
          language: language,
          videoId: videoId
        }, fetchParams),
        expectedString: 'with uploadTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.uploadTranscript,
          promise: _api["default"].uploadTranscript({
            blockId: _index.selectors.app.blockId(testState),
            transcript: transcript,
            videoId: videoId,
            language: language,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('fetchVideoFeatures', function () {
      testNetworkRequestAction({
        action: requests.fetchVideoFeatures,
        args: _objectSpread({}, fetchParams),
        expectedString: 'with fetchVideoFeatures promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchVideoFeatures,
          promise: _api["default"].fetchVideoFeatures({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            learningContextId: _index.selectors.app.learningContextId(testState)
          })
        })
      });
    });
  });
});
//# sourceMappingURL=requests.test.js.map