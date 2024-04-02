"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GalleryCard = exports.GalleryCard = function GalleryCard(_ref) {
  var img = _ref.img;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SelectableBox, {
    className: "card bg-white",
    type: "radio",
    value: img.id,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "card-div d-flex flex-row flex-nowrap",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
        style: {
          width: '100px',
          height: '100px'
        },
        src: img.externalUrl
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "img-text p-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: img.displayName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread(_objectSpread({}, _messages["default"].addedDate), {}, {
            values: {
              date: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedDate, {
                value: img.dateAdded
              }),
              time: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedTime, {
                value: img.dateAdded
              })
            }
          }))
        })]
      })]
    })
  }, img.externalUrl);
};
GalleryCard.propTypes = {
  img: _propTypes["default"].shape({
    contentType: _propTypes["default"].string,
    displayName: _propTypes["default"].string,
    externalUrl: _propTypes["default"].string,
    id: _propTypes["default"].string,
    dateAdded: _propTypes["default"].number,
    locked: _propTypes["default"].bool,
    portableUrl: _propTypes["default"].string,
    thumbnail: _propTypes["default"].string,
    url: _propTypes["default"].string
  }).isRequired
};
var _default = exports["default"] = GalleryCard;
//# sourceMappingURL=GalleryCard.js.map