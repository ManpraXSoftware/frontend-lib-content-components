"use strict";

var _ = require("..");
var _utils = require("../../../utils");
var thunkActions = _interopRequireWildcard(require("./app"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
jest.mock('./requests', function () {
  return {
    fetchBlock: function fetchBlock(args) {
      return {
        fetchBlock: args
      };
    },
    fetchUnit: function fetchUnit(args) {
      return {
        fetchUnit: args
      };
    },
    saveBlock: function saveBlock(args) {
      return {
        saveBlock: args
      };
    },
    uploadAsset: function uploadAsset(args) {
      return {
        uploadAsset: args
      };
    },
    fetchStudioView: function fetchStudioView(args) {
      return {
        fetchStudioView: args
      };
    },
    fetchAssets: function fetchAssets(args) {
      return {
        fetchAssets: args
      };
    },
    fetchCourseDetails: function fetchCourseDetails(args) {
      return {
        fetchCourseDetails: args
      };
    }
  };
});
jest.mock('../../../utils', function () {
  return _objectSpread({
    camelizeKeys: function camelizeKeys(args) {
      return [{
        camelizeKeys: args
      }];
    }
  }, jest.requireActual('../../../utils'));
});
var testValue = {
  data: {
    assets: 'test VALUE'
  }
};
describe('app thunkActions', function () {
  var dispatch;
  var dispatchedAction;
  beforeEach(function () {
    dispatch = jest.fn(function (action) {
      return {
        dispatch: action
      };
    });
  });
  describe('fetchBlock', function () {
    beforeEach(function () {
      thunkActions.fetchBlock()(dispatch);
      var _dispatch$mock$calls = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls$ = _slicedToArray(_dispatch$mock$calls[0], 1);
      dispatchedAction = _dispatch$mock$calls$[0];
    });
    it('dispatches fetchBlock action', function () {
      expect(dispatchedAction.fetchBlock).not.toEqual(undefined);
    });
    it('dispatches actions.app.setBlockValue on success', function () {
      dispatch.mockClear();
      dispatchedAction.fetchBlock.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setBlockValue(testValue));
    });
  });
  describe('fetchStudioView', function () {
    beforeEach(function () {
      thunkActions.fetchStudioView()(dispatch);
      var _dispatch$mock$calls2 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls3 = _slicedToArray(_dispatch$mock$calls2[0], 1);
      dispatchedAction = _dispatch$mock$calls3[0];
    });
    it('dispatches fetchStudioView action', function () {
      expect(dispatchedAction.fetchStudioView).not.toEqual(undefined);
    });
    it('dispatches actions.app.setStudioViewe on success', function () {
      dispatch.mockClear();
      dispatchedAction.fetchStudioView.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setStudioView(testValue));
    });
    it('dispatches setStudioView on failure', function () {
      dispatch.mockClear();
      dispatchedAction.fetchStudioView.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setStudioView(testValue));
    });
  });
  describe('fetchUnit', function () {
    beforeEach(function () {
      thunkActions.fetchUnit()(dispatch);
      var _dispatch$mock$calls4 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls5 = _slicedToArray(_dispatch$mock$calls4[0], 1);
      dispatchedAction = _dispatch$mock$calls5[0];
    });
    it('dispatches fetchUnit action', function () {
      expect(dispatchedAction.fetchUnit).not.toEqual(undefined);
    });
    it('dispatches actions.app.setUnitUrl on success', function () {
      dispatch.mockClear();
      dispatchedAction.fetchUnit.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setUnitUrl(testValue));
    });
    it('dispatches actions.app.setUnitUrl on failure', function () {
      dispatch.mockClear();
      dispatchedAction.fetchUnit.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setUnitUrl(testValue));
    });
  });
  describe('fetchCourseDetails', function () {
    beforeEach(function () {
      thunkActions.fetchCourseDetails()(dispatch);
      var _dispatch$mock$calls6 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls7 = _slicedToArray(_dispatch$mock$calls6[0], 1);
      dispatchedAction = _dispatch$mock$calls7[0];
    });
    it('dispatches fetchUnit action', function () {
      expect(dispatchedAction.fetchCourseDetails).not.toEqual(undefined);
    });
    it('dispatches actions.app.setUnitUrl on success', function () {
      dispatch.mockClear();
      dispatchedAction.fetchCourseDetails.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setCourseDetails(testValue));
    });
    it('dispatches actions.app.setUnitUrl on failure', function () {
      dispatch.mockClear();
      dispatchedAction.fetchCourseDetails.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setCourseDetails(testValue));
    });
  });
  describe('initialize', function () {
    it('dispatches actions.app.initialize, and then fetches both block and unit', function () {
      var fetchBlock = thunkActions.fetchBlock,
        fetchUnit = thunkActions.fetchUnit,
        fetchStudioView = thunkActions.fetchStudioView,
        fetchAssets = thunkActions.fetchAssets,
        fetchCourseDetails = thunkActions.fetchCourseDetails;
      thunkActions.fetchBlock = function () {
        return 'fetchBlock';
      };
      thunkActions.fetchUnit = function () {
        return 'fetchUnit';
      };
      thunkActions.fetchStudioView = function () {
        return 'fetchStudioView';
      };
      thunkActions.fetchAssets = function () {
        return 'fetchAssets';
      };
      thunkActions.fetchCourseDetails = function () {
        return 'fetchCourseDetails';
      };
      thunkActions.initialize(testValue)(dispatch);
      expect(dispatch.mock.calls).toEqual([[_.actions.app.initialize(testValue)], [thunkActions.fetchBlock()], [thunkActions.fetchUnit()], [thunkActions.fetchStudioView()], [thunkActions.fetchAssets()], [thunkActions.fetchCourseDetails()]]);
      thunkActions.fetchBlock = fetchBlock;
      thunkActions.fetchUnit = fetchUnit;
      thunkActions.fetchStudioView = fetchStudioView;
      thunkActions.fetchAssets = fetchAssets;
      thunkActions.fetchCourseDetails = fetchCourseDetails;
    });
  });
  describe('saveBlock', function () {
    var returnToUnit;
    var calls;
    beforeEach(function () {
      returnToUnit = jest.fn();
      thunkActions.saveBlock({
        content: testValue,
        returnToUnit: returnToUnit
      })(dispatch);
      calls = dispatch.mock.calls;
    });
    it('dispatches actions.app.setBlockContent with content, before dispatching saveBlock', function () {
      expect(calls[0]).toEqual([_.actions.app.setBlockContent(testValue)]);
      var saveCall = calls[1][0];
      expect(saveCall.saveBlock).not.toEqual(undefined);
    });
    it('dispatches saveBlock with passed content', function () {
      expect(calls[1][0].saveBlock.content).toEqual(testValue);
    });
    it('dispatches actions.app.setSaveResponse with response and then calls returnToUnit', function () {
      dispatch.mockClear();
      var response = 'testRESPONSE';
      calls[1][0].saveBlock.onSuccess(response);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setSaveResponse(response));
      expect(returnToUnit).toHaveBeenCalled();
    });
  });
  describe('fetchAssets', function () {
    it('dispatches fetchAssets action with setAssets for onSuccess param', function () {
      var response = {
        data: {
          assets: 'testRESPONSE'
        }
      };
      thunkActions.fetchAssets()(dispatch);
      var _dispatch$mock$calls8 = _slicedToArray(dispatch.mock.calls, 1),
        _dispatch$mock$calls9 = _slicedToArray(_dispatch$mock$calls8[0], 1),
        dispatchCall = _dispatch$mock$calls9[0];
      dispatchCall.fetchAssets.onSuccess(response);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setAssets(response));
    });
  });
  describe('uploadImage', function () {
    var setSelection = jest.fn();
    beforeEach(function () {
      thunkActions.uploadImage({
        file: testValue,
        setSelection: setSelection
      })(dispatch);
      var _dispatch$mock$calls10 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls11 = _slicedToArray(_dispatch$mock$calls10[0], 1);
      dispatchedAction = _dispatch$mock$calls11[0];
    });
    it('dispatches uploadAsset action', function () {
      expect(dispatchedAction.uploadAsset).not.toBe(undefined);
    });
    test('passes file as image prop', function () {
      expect(dispatchedAction.uploadAsset.asset).toEqual(testValue);
    });
    test('onSuccess: calls setSelection with camelized response.data.asset', function () {
      dispatchedAction.uploadAsset.onSuccess({
        data: {
          asset: testValue
        }
      });
      expect(setSelection).toHaveBeenCalledWith((0, _utils.camelizeKeys)(testValue));
    });
  });
});
//# sourceMappingURL=app.test.js.map