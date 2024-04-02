"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EditorPage = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("./data/store"));
var _Editor = _interopRequireDefault(require("./Editor"));
var _ErrorBoundary = _interopRequireDefault(require("./sharedComponents/ErrorBoundary"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EditorPage = exports.EditorPage = function EditorPage(_ref) {
  var courseId = _ref.courseId,
    blockType = _ref.blockType,
    blockId = _ref.blockId,
    lmsEndpointUrl = _ref.lmsEndpointUrl,
    studioEndpointUrl = _ref.studioEndpointUrl,
    onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorBoundary["default"], {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
      store: _store["default"],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Editor["default"], {
        onClose: onClose,
        learningContextId: courseId,
        blockType: blockType,
        blockId: blockId,
        lmsEndpointUrl: lmsEndpointUrl,
        studioEndpointUrl: studioEndpointUrl
      })
    })
  });
};
EditorPage.defaultProps = {
  blockId: null,
  courseId: null,
  lmsEndpointUrl: null,
  onClose: null,
  studioEndpointUrl: null
};
EditorPage.propTypes = {
  blockId: _propTypes["default"].string,
  blockType: _propTypes["default"].string.isRequired,
  courseId: _propTypes["default"].string,
  lmsEndpointUrl: _propTypes["default"].string,
  onClose: _propTypes["default"].func,
  studioEndpointUrl: _propTypes["default"].string
};
var _default = exports["default"] = EditorPage;
//# sourceMappingURL=EditorPage.js.map