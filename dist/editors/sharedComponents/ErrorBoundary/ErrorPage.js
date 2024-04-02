"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ErrorPage = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * An error page that displays a generic message for unexpected errors.  Also contains a "Try
 * Again" button to refresh the page.
 */
var ErrorPage = exports.ErrorPage = function ErrorPage(_ref) {
  var message = _ref.message,
    intl = _ref.intl;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
    fluid: true,
    className: "py-5 justify-content-center align-items-start text-center",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Col, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-muted",
          children: intl.formatMessage(_messages["default"].unexpectedError)
        }), message && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          role: "alert",
          className: "my-4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: message
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          onClick: global.location.reload(),
          children: intl.formatMessage(_messages["default"].unexpectedErrorButtonLabel)
        })]
      })
    })
  });
};
ErrorPage.propTypes = {
  message: _propTypes["default"].string,
  // injected
  intl: _i18n.intlShape.isRequired
};
ErrorPage.defaultProps = {
  message: null
};
var _default = exports["default"] = (0, _i18n.injectIntl)(ErrorPage);
//# sourceMappingURL=ErrorPage.js.map