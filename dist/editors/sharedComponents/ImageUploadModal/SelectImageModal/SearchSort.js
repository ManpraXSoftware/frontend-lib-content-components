"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SearchSort = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _utils = require("./utils");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SearchSort = exports.SearchSort = function SearchSort(_ref) {
  var searchString = _ref.searchString,
    onSearchChange = _ref.onSearchChange,
    clearSearchString = _ref.clearSearchString,
    sortBy = _ref.sortBy,
    onSortClick = _ref.onSortClick,
    intl = _ref.intl;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
      style: {
        margin: 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        autoFocus: true,
        onChange: onSearchChange,
        placeholder: intl.formatMessage(_messages["default"].searchPlaceholder),
        trailingElement: searchString ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
          iconAs: _paragon.Icon,
          invertColors: true,
          isActive: true,
          onClick: clearSearchString,
          size: "sm",
          src: _icons.Close
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          src: _icons.Search
        }),
        value: searchString
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Toggle, {
        id: "img-sort-button",
        variant: "tertiary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _utils.sortMessages[sortBy]))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Menu, {
        children: Object.keys(_utils.sortKeys).map(function (key) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
            onClick: onSortClick(key),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _utils.sortMessages[key]))
          }, key);
        })
      })]
    })]
  });
};
SearchSort.propTypes = {
  searchString: _propTypes["default"].string.isRequired,
  onSearchChange: _propTypes["default"].func.isRequired,
  clearSearchString: _propTypes["default"].func.isRequired,
  sortBy: _propTypes["default"].string.isRequired,
  onSortClick: _propTypes["default"].func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports["default"] = (0, _i18n.injectIntl)(SearchSort);
//# sourceMappingURL=SearchSort.js.map