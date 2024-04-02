"use strict";

var _reducer = require("./reducer");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var testingState = _objectSpread(_objectSpread({}, _reducer.initialState), {}, {
  arbitraryField: 'arbitrary'
});
describe('app reducer', function () {
  it('has initial state', function () {
    expect((0, _reducer.reducer)(undefined, {})).toEqual(_reducer.initialState);
  });
  var testValue = 'roll for initiative';
  describe('handling actions', function () {
    describe('initialize', function () {
      it('loads initial input fields into the store', function () {
        var data = {
          studioEndpointUrl: 'testURL',
          lmsEndpointUrl: 'sOmEOtherTestuRl',
          blockId: 'anID',
          learningContextId: 'OTHERid',
          blockType: 'someTYPE'
        };
        expect((0, _reducer.reducer)(testingState, _reducer.actions.initialize(_objectSpread(_objectSpread({}, data), {}, {
          other: 'field'
        })))).toEqual(_objectSpread(_objectSpread({}, testingState), data));
      });
    });
    var setterTest = function setterTest(action, target) {
      describe(action, function () {
        it("load ".concat(target, " from payload"), function () {
          expect((0, _reducer.reducer)(testingState, _reducer.actions[action](testValue))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, _defineProperty({}, target, testValue)));
        });
      });
    };
    [['setUnitUrl', 'unitUrl'], ['setStudioView', 'studioView'], ['setBlockContent', 'blockContent'], ['setBlockTitle', 'blockTitle'], ['setSaveResponse', 'saveResponse'], ['setAssets', 'assets'], ['setCourseDetails', 'courseDetails']].map(function (args) {
      return setterTest.apply(void 0, _toConsumableArray(args));
    });
    describe('setBlockValue', function () {
      it('sets blockValue, as well as setting the blockTitle from data.display_name', function () {
        var blockValue = {
          data: {
            display_name: 'my test name'
          },
          other: 'data'
        };
        expect((0, _reducer.reducer)(testingState, _reducer.actions.setBlockValue(blockValue))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          blockValue: blockValue,
          blockTitle: blockValue.data.display_name
        }));
      });
    });
    describe('initializeEditor', function () {
      it('sets editorInitialized to true', function () {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.initializeEditor())).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          editorInitialized: true
        }));
      });
    });
  });
});
//# sourceMappingURL=reducer.test.js.map