"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _ = require("..");
var _module = _interopRequireWildcard(require("./problem"));
var _olxTestData = require("../../../containers/ProblemEditor/data/mockData/olxTestData");
var _problem2 = require("../../constants/problem");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var mockOlx = 'SOmEVALue';
var mockBuildOlx = jest.fn(function () {
  return mockOlx;
});
jest.mock('../../../containers/ProblemEditor/data/ReactStateOLXParser', function () {
  return jest.fn().mockImplementation(function () {
    return {
      buildOLX: mockBuildOlx
    };
  });
});
jest.mock('..', function () {
  return {
    actions: {
      problem: {
        load: function load() {},
        setEnableTypeSelection: function setEnableTypeSelection() {},
        updateField: function updateField(args) {
          return args;
        }
      }
    }
  };
});
jest.mock('./requests', function () {
  return {
    fetchAdvancedSettings: function fetchAdvancedSettings(args) {
      return {
        fetchAdvanceSettings: args
      };
    }
  };
});
var blockValue = {
  data: {
    data: _olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX,
    metadata: {}
  }
};
var rawOLX = blockValue.data.data;
var rawSettings = {};
var defaultSettings = {
  max_attempts: 1
};
describe('problem thunkActions', function () {
  var dispatch;
  var getState;
  var dispatchedAction;
  beforeEach(function () {
    dispatch = jest.fn(function (action) {
      return {
        dispatch: action
      };
    });
    getState = jest.fn(function () {
      return {
        problem: {}
      };
    });
  });
  afterEach(function () {
    jest.restoreAllMocks();
  });
  test('initializeProblem visual Problem :', function () {
    _module.initializeProblem(blockValue)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('switchToAdvancedEditor visual Problem', function () {
    _module.switchToAdvancedEditor()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(_.actions.problem.updateField({
      problemType: _problem2.ProblemTypeKeys.ADVANCED,
      rawOLX: mockOlx
    }));
  });
  describe('fetchAdvanceSettings', function () {
    it('dispatches fetchAdvanceSettings action', function () {
      _module.fetchAdvancedSettings({
        rawOLX: rawOLX,
        rawSettings: rawSettings
      })(dispatch);
      var _dispatch$mock$calls = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls$ = _slicedToArray(_dispatch$mock$calls[0], 1);
      dispatchedAction = _dispatch$mock$calls$[0];
      expect(dispatchedAction.fetchAdvanceSettings).not.toEqual(undefined);
    });
    it('dispatches actions.problem.updateField and loadProblem on success', function () {
      dispatch.mockClear();
      _module.fetchAdvancedSettings({
        rawOLX: rawOLX,
        rawSettings: rawSettings
      })(dispatch);
      var _dispatch$mock$calls2 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls3 = _slicedToArray(_dispatch$mock$calls2[0], 1);
      dispatchedAction = _dispatch$mock$calls3[0];
      dispatchedAction.fetchAdvanceSettings.onSuccess({
        data: {
          key: 'test',
          max_attempts: 1
        }
      });
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.load());
    });
    it('calls loadProblem on failure', function () {
      dispatch.mockClear();
      _module.fetchAdvancedSettings({
        rawOLX: rawOLX,
        rawSettings: rawSettings
      })(dispatch);
      var _dispatch$mock$calls4 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls5 = _slicedToArray(_dispatch$mock$calls4[0], 1);
      dispatchedAction = _dispatch$mock$calls5[0];
      dispatchedAction.fetchAdvanceSettings.onFailure();
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.load());
    });
  });
  describe('loadProblem', function () {
    test('initializeProblem advanced Problem', function () {
      rawOLX = _olxTestData.advancedProblemOlX.rawOLX;
      _module.loadProblem({
        rawOLX: rawOLX,
        rawSettings: rawSettings,
        defaultSettings: defaultSettings
      })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.load());
    });
    test('initializeProblem blank Problem', function () {
      rawOLX = _olxTestData.blankProblemOLX.rawOLX;
      _module.loadProblem({
        rawOLX: rawOLX,
        rawSettings: rawSettings,
        defaultSettings: defaultSettings
      })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.setEnableTypeSelection());
    });
  });
});
//# sourceMappingURL=problem.test.js.map