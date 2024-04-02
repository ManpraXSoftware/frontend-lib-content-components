"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HintRow = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _messages = _interopRequireDefault(require("../messages"));
var _ExpandableTextArea = _interopRequireDefault(require("../../../../../../sharedComponents/ExpandableTextArea"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HintRow = exports.HintRow = function HintRow(_ref) {
  var value = _ref.value,
    handleChange = _ref.handleChange,
    handleDelete = _ref.handleDelete,
    id = _ref.id,
    intl = _ref.intl;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
    className: "mb-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
      fluid: true,
      className: "p-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableTextArea["default"], {
        value: value,
        setContent: handleChange,
        placeholder: intl.formatMessage(_messages["default"].hintInputLabel),
        id: "hint-".concat(id)
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
      src: _icons.DeleteOutline,
      iconAs: _paragon.Icon,
      alt: intl.formatMessage(_messages["default"].settingsDeleteIconAltText),
      onClick: handleDelete
    })]
  });
};
HintRow.propTypes = {
  value: _propTypes["default"].string.isRequired,
  handleChange: _propTypes["default"].func.isRequired,
  handleDelete: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].string.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports["default"] = (0, _i18n.injectIntl)(HintRow);
//# sourceMappingURL=HintRow.js.map