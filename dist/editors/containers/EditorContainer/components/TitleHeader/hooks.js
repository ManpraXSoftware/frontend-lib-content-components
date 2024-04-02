"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.navigateCallback = exports.localTitleHooks = exports.hooks = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../../data/redux");
var textEditorHooks = _interopRequireWildcard(require("../../hooks"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var navigateCallback = exports.navigateCallback = textEditorHooks.navigateCallback;
var state = exports.state = {
  localTitle: function localTitle(args) {
    return _react["default"].useState(args);
  }
};
var hooks = exports.hooks = {
  isEditing: function isEditing() {
    var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isEditing = _React$useState2[0],
      setIsEditing = _React$useState2[1];
    return {
      isEditing: isEditing,
      startEditing: function startEditing() {
        return setIsEditing(true);
      },
      stopEditing: function stopEditing() {
        return setIsEditing(false);
      }
    };
  },
  localTitle: function localTitle(_ref) {
    var dispatch = _ref.dispatch,
      stopEditing = _ref.stopEditing;
    var title = (0, _reactRedux.useSelector)(_redux.selectors.app.displayTitle);
    var _module$state$localTi = _module.state.localTitle(title),
      _module$state$localTi2 = _slicedToArray(_module$state$localTi, 2),
      localTitle = _module$state$localTi2[0],
      setLocalTitle = _module$state$localTi2[1];
    return {
      updateTitle: function updateTitle(e) {
        if (localTitle.length <= 0) {
          setLocalTitle(title);
          stopEditing();
        } else if (!e.currentTarget.contains(e.relatedTarget)) {
          dispatch(_redux.actions.app.setBlockTitle(localTitle));
          stopEditing();
        }
      },
      handleChange: function handleChange(e) {
        return setLocalTitle(e.target.value);
      },
      cancelEdit: function cancelEdit() {
        setLocalTitle(title);
        stopEditing();
      },
      localTitle: localTitle
    };
  }
};
var localTitleHooks = exports.localTitleHooks = function localTitleHooks(_ref2) {
  var dispatch = _ref2.dispatch;
  var _module$hooks$isEditi = _module.hooks.isEditing(),
    isEditing = _module$hooks$isEditi.isEditing,
    startEditing = _module$hooks$isEditi.startEditing,
    stopEditing = _module$hooks$isEditi.stopEditing;
  var _module$hooks$localTi = _module.hooks.localTitle({
      dispatch: dispatch,
      stopEditing: stopEditing
    }),
    localTitle = _module$hooks$localTi.localTitle,
    handleChange = _module$hooks$localTi.handleChange,
    updateTitle = _module$hooks$localTi.updateTitle,
    cancelEdit = _module$hooks$localTi.cancelEdit;
  return {
    isEditing: isEditing,
    startEditing: startEditing,
    stopEditing: stopEditing,
    cancelEdit: cancelEdit,
    localTitle: localTitle,
    updateTitle: updateTitle,
    handleChange: handleChange,
    inputRef: /*#__PURE__*/_react["default"].createRef()
  };
};
//# sourceMappingURL=hooks.js.map