"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports["default"] = exports.SelectVideoModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _redux = require("../../../data/redux");
var _BaseModal = _interopRequireDefault(require("./BaseModal"));
var _module = _interopRequireWildcard(require("./SelectVideoModal"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var hooks = exports.hooks = {
  videoList: function videoList(_ref) {
    var fetchVideos = _ref.fetchVideos;
    var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      videos = _React$useState2[0],
      setVideos = _React$useState2[1];
    _react["default"].useEffect(function () {
      fetchVideos({
        onSuccess: setVideos
      });
    }, []);
    return videos;
  },
  onSelectClick: function onSelectClick(_ref2) {
    var setSelection = _ref2.setSelection,
      videos = _ref2.videos;
    return function () {
      return setSelection(videos[0]);
    };
  }
};
var SelectVideoModal = exports.SelectVideoModal = function SelectVideoModal(_ref3) {
  var fetchVideos = _ref3.fetchVideos,
    isOpen = _ref3.isOpen,
    close = _ref3.close,
    setSelection = _ref3.setSelection;
  var videos = _module.hooks.videoList({
    fetchVideos: fetchVideos
  });
  var onSelectClick = _module.hooks.onSelectClick({
    setSelection: setSelection,
    videos: videos
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal["default"], {
    isOpen: isOpen,
    close: close,
    title: "Add a video",
    confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: onSelectClick,
      children: "Next"
    }),
    children: videos && videos.map(function (img) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}, img.externalUrl);
    })
  });
};
SelectVideoModal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  close: _propTypes["default"].func.isRequired,
  setSelection: _propTypes["default"].func.isRequired,
  // redux
  fetchVideos: _propTypes["default"].func.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps() {
  return {};
};
var mapDispatchToProps = exports.mapDispatchToProps = {
  fetchVideos: _redux.thunkActions.app.fetchVideos
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectVideoModal);
//# sourceMappingURL=SelectVideoModal.js.map