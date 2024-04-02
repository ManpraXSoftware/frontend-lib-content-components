"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../../data/redux");
var _testUtils = require("../../../../../testUtils");
var hooks = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('react', function () {
  var updateState = jest.fn();
  return {
    updateState: updateState,
    useState: jest.fn(function (val) {
      return [{
        state: val
      }, function (newVal) {
        return updateState({
          val: val,
          newVal: newVal
        });
      }];
    }),
    createRef: jest.fn(function (val) {
      return {
        ref: val
      };
    })
  };
});
jest.mock('../../hooks', function () {
  return {
    navigateCallback: function navigateCallback(args) {
      return {
        navigateCallback: args
      };
    }
  };
});
jest.mock('../../../../data/redux', function () {
  return {
    actions: {
      app: {
        setBlockTitle: function setBlockTitle(args) {
          return {
            setBlockTitle: args
          };
        }
      }
    },
    selectors: {
      app: {
        displayTitle: function displayTitle(state) {
          return {
            displayTitle: state
          };
        }
      }
    }
  };
});
var state = new _testUtils.MockUseState(hooks);
describe('TitleHeader hooks', function () {
  var output;
  var dispatch;
  beforeEach(function () {
    dispatch = jest.fn();
  });
  describe('state hooks', function () {
    state.testGetter(state.keys.localTitle);
  });
  describe('non-state hooks', function () {
    beforeEach(function () {
      state.mock();
    });
    afterEach(function () {
      state.restore();
    });
    describe('isEditing', function () {
      beforeEach(function () {
        output = hooks.hooks.isEditing();
      });
      test('returns isEditing field, defaulted to false', function () {
        expect(output.isEditing).toEqual({
          state: false
        });
      });
      test('startEditing calls the setter function with true', function () {
        output.startEditing();
        expect(_react["default"].updateState).toHaveBeenCalledWith({
          val: false,
          newVal: true
        });
      });
      test('stopEditing calls the setter function with false', function () {
        output.stopEditing();
        expect(_react["default"].updateState).toHaveBeenCalledWith({
          val: false,
          newVal: false
        });
      });
    });
    describe('localTitle', function () {
      var stopEditing;
      beforeEach(function () {
        stopEditing = jest.fn();
        output = hooks.hooks.localTitle({
          dispatch: dispatch,
          stopEditing: stopEditing
        });
      });
      test('returns the state value for localTitle, defaulted to displayTitle', function () {
        expect(output.localTitle).toEqual((0, _reactRedux.useSelector)(_redux.selectors.app.displayTitle));
      });
      describe('updateTitle hook', function () {
        it('calls setBlockTitle with localTitle, and stopEditing', function () {
          var div = document.createElement('div');
          var mockEvent = {
            currentTarget: div
          };
          output.updateTitle(mockEvent);
          expect(dispatch).toHaveBeenCalledWith(_redux.actions.app.setBlockTitle(output.localTitle));
          expect(stopEditing).toHaveBeenCalled();
        });
      });
      describe('handleChange', function () {
        it('calls setLocalTitle with the event target value', function () {
          var value = 'SOME VALUe';
          output.handleChange({
            target: {
              value: value
            }
          });
          expect(state.setState[state.keys.localTitle]).toHaveBeenCalledWith(value);
        });
      });
      describe('cancelEdit', function () {
        it('calls setLocalTitle with previously stored title, and stopEditing', function () {
          output.cancelEdit();
          expect(state.setState[state.keys.localTitle]).toHaveBeenCalledWith((0, _reactRedux.useSelector)(_redux.selectors.app.displayTitle));
          expect(stopEditing).toHaveBeenCalled();
        });
      });
    });
    describe('local title hooks', function () {
      var oldHooks;
      var values = {
        isEditing: 'ISeDITING',
        startEditing: 'STARTeDITING',
        stopEditing: 'STOPeDITING',
        handleChange: 'HANDLEcHANGE',
        localTitle: 'LOCALtITLE',
        cancelEdit: 'CANCelEDit'
      };
      var newHooks = {
        isEditing: function isEditing() {
          return {
            isEditing: values.isEditing,
            startEditing: values.startEditing,
            stopEditing: values.stopEditing
          };
        },
        localTitle: jest.fn(function (args) {
          return {
            updateTitle: args,
            handleChange: values.handleChange,
            localTitle: values.localTitle,
            cancelEdit: values.cancelEdit
          };
        }),
        handleKeyDown: jest.fn(function (args) {
          return {
            handleKeyDown: args
          };
        })
      };
      beforeEach(function () {
        oldHooks = hooks.hooks;
        hooks.hooks.isEditing = newHooks.isEditing;
        hooks.hooks.localTitle = newHooks.localTitle;
        hooks.hooks.handleKeyDown = newHooks.handleKeyDown;
        output = hooks.localTitleHooks({
          dispatch: dispatch
        });
      });
      afterEach(function () {
        hooks.hooks = oldHooks;
      });
      it('returns isEditing, startEditing, and stopEditing, tied to the isEditing hook', function () {
        expect(output.isEditing).toEqual(values.isEditing);
        expect(output.startEditing).toEqual(values.startEditing);
        expect(output.stopEditing).toEqual(values.stopEditing);
      });
      it('returns localTitle, updateTitle, handleChange, and cancelEdit tied to the localTitle hook', function () {
        expect(output.updateTitle).toEqual({
          dispatch: dispatch,
          stopEditing: values.stopEditing
        });
        expect(output.handleChange).toEqual(values.handleChange);
        expect(output.localTitle).toEqual(values.localTitle);
        expect(output.cancelEdit).toEqual(values.cancelEdit);
      });
      it('returns a new ref for inputRef', function () {
        expect(output.inputRef).toEqual({
          ref: undefined
        });
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map