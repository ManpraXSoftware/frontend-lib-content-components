"use strict";

var _utils = require("../../../utils");
var urls = _interopRequireWildcard(require("../../services/cms/urls"));
var selectors = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
jest.mock('../../services/cms/urls', function () {
  return {
    returnUrl: function returnUrl(args) {
      return {
        returnUrl: args
      };
    }
  };
});
var testState = {
  some: 'arbitraryValue'
};
var testValue = 'my VALUE';
describe('app selectors unit tests', function () {
  var appSelector = selectors.appSelector,
    simpleSelectors = selectors.simpleSelectors;
  describe('appSelector', function () {
    it('returns the app data', function () {
      expect(appSelector(_objectSpread(_objectSpread({}, testState), {}, {
        app: testValue
      }))).toEqual(testValue);
    });
  });
  describe('simpleSelectors', function () {
    var testSimpleSelector = function testSimpleSelector(key) {
      test("".concat(key, " simpleSelector returns its value from the app store"), function () {
        var _simpleSelectors$key = simpleSelectors[key],
          preSelectors = _simpleSelectors$key.preSelectors,
          cb = _simpleSelectors$key.cb;
        expect(preSelectors).toEqual([appSelector]);
        expect(cb(_objectSpread(_objectSpread({}, testState), {}, _defineProperty({}, key, testValue)))).toEqual(testValue);
      });
    };
    var simpleKeys = (0, _utils.keyStore)(simpleSelectors);
    describe('simple selectors link their values from app store', function () {
      [simpleKeys.blockContent, simpleKeys.blockId, simpleKeys.blockTitle, simpleKeys.blockType, simpleKeys.blockValue, simpleKeys.learningContextId, simpleKeys.editorInitialized, simpleKeys.saveResponse, simpleKeys.lmsEndpointUrl, simpleKeys.studioEndpointUrl, simpleKeys.unitUrl, simpleKeys.blockTitle, simpleKeys.studioView, simpleKeys.assets].map(testSimpleSelector);
    });
  });
  describe('returnUrl', function () {
    it('is memoized based on unitUrl and studioEndpointUrl', function () {
      expect(selectors.returnUrl.preSelectors).toEqual([simpleSelectors.unitUrl, simpleSelectors.studioEndpointUrl, simpleSelectors.learningContextId]);
    });
    it('returns urls.returnUrl with the returnUrl', function () {
      var cb = selectors.returnUrl.cb;
      var studioEndpointUrl = 'baseURL';
      var unitUrl = 'some unit url';
      var learningContextId = 'some learning context';
      expect(cb(unitUrl, studioEndpointUrl, learningContextId)).toEqual(urls.returnUrl({
        unitUrl: unitUrl,
        studioEndpointUrl: studioEndpointUrl,
        learningContextId: learningContextId
      }));
    });
  });
  describe('isInitialized selector', function () {
    it('is memoized based on unitUrl, editorInitialized, and blockValue', function () {
      expect(selectors.isInitialized.preSelectors).toEqual([simpleSelectors.unitUrl, simpleSelectors.blockValue]);
    });
    it('returns true iff unitUrl, blockValue, and editorInitialized are all truthy', function () {
      var cb = selectors.isInitialized.cb;
      var truthy = {
        url: {
          url: 'data'
        },
        blockValue: {
          block: 'value'
        }
      };
      [[[null, truthy.blockValue], false], [[truthy.url, null], false], [[truthy.url, truthy.blockValue], true]].map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          args = _ref2[0],
          expected = _ref2[1];
        return expect(cb.apply(void 0, _toConsumableArray(args))).toEqual(expected);
      });
    });
  });
  describe('displayTitle', function () {
    var title = 'tItLe';
    it('is memoized based on blockType and blockTitle', function () {
      expect(selectors.displayTitle.preSelectors).toEqual([simpleSelectors.blockType, simpleSelectors.blockTitle]);
    });
    it('returns null if blockType is null', function () {
      expect(selectors.displayTitle.cb(null, title)).toEqual(null);
    });
    it('returns blockTitle if blockTitle is not null', function () {
      expect(selectors.displayTitle.cb('html', title)).toEqual(title);
    });
    it('returns Text if the blockType is html', function () {
      expect(selectors.displayTitle.cb('html', null)).toEqual('Text');
    });
    it('returns the blockType capitalized if not html', function () {
      expect(selectors.displayTitle.cb('video', null)).toEqual('Video');
      expect(selectors.displayTitle.cb('random', null)).toEqual('Random');
    });
  });
  describe('isRaw', function () {
    var studioViewRaw = {
      data: {
        html: 'data-editor="raw"'
      }
    };
    var studioViewVisual = {
      data: {
        html: 'sOmEthIngElse'
      }
    };
    it('is memoized based on studioView', function () {
      expect(selectors.isRaw.preSelectors).toEqual([simpleSelectors.studioView]);
    });
    it('returns null if studioView is null', function () {
      expect(selectors.isRaw.cb(null)).toEqual(null);
    });
    it('returns true if studioView is raw', function () {
      expect(selectors.isRaw.cb(studioViewRaw)).toEqual(true);
    });
    it('returns false if the studioView is not Raw', function () {
      expect(selectors.isRaw.cb(studioViewVisual)).toEqual(false);
    });
  });
  describe('isLibrary', function () {
    var learningContextIdLibrary = 'library-v1:name';
    var learningContextIdCourse = 'course-v1:name';
    it('is memoized based on studioView', function () {
      expect(selectors.isLibrary.preSelectors).toEqual([simpleSelectors.learningContextId]);
    });
    it('returns null if blockId is null', function () {
      expect(selectors.isLibrary.cb(null)).toEqual(null);
    });
    it('returns true if blockId starts with lib', function () {
      expect(selectors.isLibrary.cb(learningContextIdLibrary)).toEqual(true);
    });
    it('returns false if the blockId does not start with lib', function () {
      expect(selectors.isLibrary.cb(learningContextIdCourse)).toEqual(false);
    });
  });
});
//# sourceMappingURL=selectors.test.js.map