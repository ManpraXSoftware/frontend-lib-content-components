"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TitleHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../data/redux");
var _hooks = require("./hooks");
var _messages = _interopRequireDefault(require("./messages"));
var _EditableHeader = _interopRequireDefault(require("./EditableHeader"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TitleHeader = exports.TitleHeader = function TitleHeader(_ref) {
  var isInitialized = _ref.isInitialized,
    intl = _ref.intl;
  if (!isInitialized) {
    return intl.formatMessage(_messages["default"].loading);
  }
  var dispatch = (0, _reactRedux.useDispatch)();
  var title = (0, _reactRedux.useSelector)(_redux.selectors.app.displayTitle);
  var _localTitleHooks = (0, _hooks.localTitleHooks)({
      dispatch: dispatch
    }),
    inputRef = _localTitleHooks.inputRef,
    isEditing = _localTitleHooks.isEditing,
    handleChange = _localTitleHooks.handleChange,
    handleKeyDown = _localTitleHooks.handleKeyDown,
    localTitle = _localTitleHooks.localTitle,
    startEditing = _localTitleHooks.startEditing,
    cancelEdit = _localTitleHooks.cancelEdit,
    updateTitle = _localTitleHooks.updateTitle;
  if (isEditing) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditableHeader["default"], {
      inputRef: inputRef,
      handleChange: handleChange,
      handleKeyDown: handleKeyDown,
      localTitle: localTitle,
      updateTitle: updateTitle,
      cancelEdit: cancelEdit
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-row align-items-center",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Truncate, {
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
      alt: intl.formatMessage(_messages["default"].editTitleLabel),
      iconAs: _paragon.Icon,
      className: "mx-2",
      onClick: startEditing,
      size: "sm",
      src: _icons.EditOutline
    })]
  });
};
TitleHeader.defaultProps = {};
TitleHeader.propTypes = {
  isInitialized: _propTypes["default"].bool.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports["default"] = (0, _i18n.injectIntl)(TitleHeader);
//# sourceMappingURL=index.js.map