"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useArrowNav = exports.state = exports.selectHooks = exports.onSelect = exports["default"] = void 0;
var _react = require("react");
var _problem = require("../../../../data/constants/problem");
var _utils = require("../../../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
var _problem2 = require("../../../../data/redux/thunkActions/problem");
var _excluded = ["settings"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var state = exports.state = (0, _utils.StrictDict)({
  selected: function selected(val) {
    return (0, _react.useState)(val);
  }
});
var selectHooks = exports.selectHooks = function selectHooks() {
  var _module$state$selecte = _module.state.selected(_problem.ProblemTypeKeys.SINGLESELECT),
    _module$state$selecte2 = _slicedToArray(_module$state$selecte, 2),
    selected = _module$state$selecte2[0],
    setSelected = _module$state$selecte2[1];
  return {
    selected: selected,
    setSelected: setSelected
  };
};
var onSelect = exports.onSelect = function onSelect(_ref) {
  var selected = _ref.selected,
    updateField = _ref.updateField,
    setBlockTitle = _ref.setBlockTitle;
  return function () {
    if (Object.values(_problem.AdvanceProblemKeys).includes(selected)) {
      updateField({
        problemType: _problem.ProblemTypeKeys.ADVANCED,
        rawOLX: _problem.AdvanceProblems[selected].template
      });
      setBlockTitle(_problem.AdvanceProblems[selected].title);
    } else {
      var newOLX = _problem.ProblemTypes[selected].template;
      var _getDataFromOlx = (0, _problem2.getDataFromOlx)({
          rawOLX: newOLX,
          rawSettings: {}
        }),
        settings = _getDataFromOlx.settings,
        newState = _objectWithoutProperties(_getDataFromOlx, _excluded);
      updateField(_objectSpread({}, newState));
      setBlockTitle(_problem.ProblemTypes[selected].title);
    }
  };
};
var useArrowNav = exports.useArrowNav = function useArrowNav(selected, setSelected) {
  var detectKeyDown = function detectKeyDown(e) {
    var problemTypeValues = Object.values(_problem.ProblemTypeKeys);
    switch (e.key) {
      case 'ArrowUp':
        if (problemTypeValues.includes(selected) && _problem.ProblemTypes[selected].prev) {
          setSelected(_problem.ProblemTypes[selected].prev);
          document.getElementById(_problem.ProblemTypes[selected].prev).focus();
        }
        break;
      case 'ArrowDown':
        if (problemTypeValues.includes(selected) && _problem.ProblemTypes[selected].next) {
          setSelected(_problem.ProblemTypes[selected].next);
          document.getElementById(_problem.ProblemTypes[selected].next).focus();
        }
        break;
      default:
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', detectKeyDown, true);
    return function () {
      document.removeEventListener('keydown', detectKeyDown, true);
    };
  }, [selected, setSelected]);
};
var _default = exports["default"] = {
  state: state,
  selectHooks: selectHooks,
  onSelect: onSelect,
  useArrowNav: useArrowNav
};
//# sourceMappingURL=hooks.js.map