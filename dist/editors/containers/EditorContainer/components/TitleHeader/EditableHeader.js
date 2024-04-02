"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EditableHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _EditConfirmationButtons = _interopRequireDefault(require("./EditConfirmationButtons"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EditableHeader = exports.EditableHeader = function EditableHeader(_ref) {
  var handleChange = _ref.handleChange,
    updateTitle = _ref.updateTitle,
    handleKeyDown = _ref.handleKeyDown,
    inputRef = _ref.inputRef,
    localTitle = _ref.localTitle,
    cancelEdit = _ref.cancelEdit;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
    style: {
      width: '90%'
    },
    onBlur: function onBlur(e) {
      return updateTitle(e);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
      style: {
        paddingInlineEnd: 'calc(1rem + 84px)'
      },
      autoFocus: true,
      trailingElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditConfirmationButtons["default"], {
        updateTitle: updateTitle,
        cancelEdit: cancelEdit
      }),
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      placeholder: "Title",
      ref: inputRef,
      value: localTitle
    })
  });
};
EditableHeader.defaultProps = {
  inputRef: null
};
EditableHeader.propTypes = {
  inputRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  handleChange: _propTypes["default"].func.isRequired,
  updateTitle: _propTypes["default"].func.isRequired,
  handleKeyDown: _propTypes["default"].func.isRequired,
  localTitle: _propTypes["default"].string.isRequired,
  cancelEdit: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = EditableHeader;
//# sourceMappingURL=EditableHeader.js.map