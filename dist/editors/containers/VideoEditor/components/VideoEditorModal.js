"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _redux = require("../../../data/redux");
var _VideoSettingsModal = _interopRequireDefault(require("./VideoSettingsModal"));
var _module = _interopRequireWildcard(require("./VideoEditorModal"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import SelectVideoModal from './SelectVideoModal';

var hooks = exports.hooks = {
  initialize: function initialize(dispatch) {
    _react["default"].useEffect(function () {
      dispatch(_redux.thunkActions.video.loadVideoData());
    }, []);
  }
};
var VideoEditorModal = function VideoEditorModal(_ref) {
  var close = _ref.close,
    isOpen = _ref.isOpen;
  var dispatch = (0, _reactRedux.useDispatch)();
  _module.hooks.initialize(dispatch);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoSettingsModal["default"], {
    close: close,
    isOpen: isOpen
  });
  // TODO: add logic to show SelectVideoModal if no selection
};
VideoEditorModal.defaultProps = {};
VideoEditorModal.propTypes = {
  close: _propTypes["default"].func.isRequired,
  isOpen: _propTypes["default"].bool.isRequired
};
var _default = exports["default"] = VideoEditorModal;
//# sourceMappingURL=VideoEditorModal.js.map