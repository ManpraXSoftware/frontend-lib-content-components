"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.VideoEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../data/redux");
var _requests = require("../../data/constants/requests");
var _EditorContainer = _interopRequireDefault(require("../EditorContainer"));
var _VideoEditorModal = _interopRequireDefault(require("./components/VideoEditorModal"));
var _hooks = require("./hooks");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var VideoEditor = exports.VideoEditor = function VideoEditor(_ref) {
  var onClose = _ref.onClose,
    intl = _ref.intl,
    studioViewFinished = _ref.studioViewFinished;
  var _errorsHook = (0, _hooks.errorsHook)(),
    error = _errorsHook.error,
    validateEntry = _errorsHook.validateEntry;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_hooks.ErrorContext.Provider, {
    value: error,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditorContainer["default"], {
      getContent: (0, _hooks.fetchVideoContent)(),
      onClose: onClose,
      validateEntry: validateEntry,
      children: studioViewFinished ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "video-editor",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoEditorModal["default"], {})
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
        animation: "border",
        className: "m-3",
        screenreadertext: intl.formatMessage(_messages["default"].spinnerScreenReaderText)
      })
    })
  });
};
VideoEditor.defaultProps = {
  onClose: null
};
VideoEditor.propTypes = {
  onClose: _propTypes["default"].func,
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  studioViewFinished: _propTypes["default"].bool.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    studioViewFinished: _redux.selectors.requests.isFinished(state, {
      requestKey: _requests.RequestKeys.fetchStudioView
    })
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VideoEditor));
//# sourceMappingURL=index.js.map