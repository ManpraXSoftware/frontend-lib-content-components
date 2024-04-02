"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = require("react");
var _testUtils = require("../../../../../../../../testUtils");
var _messages = _interopRequireDefault(require("./messages"));
var hooks = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('react', function () {
  var updateState = jest.fn();
  return {
    updateState: updateState,
    useEffect: jest.fn(),
    useState: jest.fn(function (val) {
      return [{
        state: val
      }, function (newVal) {
        return updateState({
          val: val,
          newVal: newVal
        });
      }];
    })
  };
});
jest.mock('@edx/frontend-platform/i18n', function () {
  return {
    defineMessages: function defineMessages(m) {
      return m;
    }
  };
});
var state = new _testUtils.MockUseState(hooks);
describe('Problem settings hooks', function () {
  var output;
  var updateSettings;
  var generalFeedback;
  beforeEach(function () {
    updateSettings = jest.fn();
    generalFeedback = 'sOmE_vAlUe';
    state.mock();
  });
  afterEach(function () {
    state.restore();
    _react.useEffect.mockClear();
  });
  describe('Show advanced settings', function () {
    beforeEach(function () {
      output = hooks.generalFeedbackHooks(generalFeedback, updateSettings);
    });
    test('test default state is false', function () {
      expect(output.summary.message).toEqual(_messages["default"].noGeneralFeedbackSummary);
    });
    test('test showAdvancedCards sets state to true', function () {
      var mockEvent = {
        target: {
          value: 'sOmE_otheR_ValUe'
        }
      };
      output.handleChange(mockEvent);
      expect(updateSettings).toHaveBeenCalledWith({
        generalFeedback: mockEvent.target.value
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map