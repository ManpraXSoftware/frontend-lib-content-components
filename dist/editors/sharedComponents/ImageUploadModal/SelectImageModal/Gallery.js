"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports["default"] = exports.Gallery = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../data/redux");
var _requests = require("../../../data/constants/requests");
var _messages = _interopRequireDefault(require("./messages"));
var _GalleryCard = _interopRequireDefault(require("./GalleryCard"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Gallery = exports.Gallery = function Gallery(_ref) {
  var galleryIsEmpty = _ref.galleryIsEmpty,
    searchIsEmpty = _ref.searchIsEmpty,
    displayList = _ref.displayList,
    highlighted = _ref.highlighted,
    onHighlightChange = _ref.onHighlightChange,
    intl = _ref.intl,
    isLoaded = _ref.isLoaded;
  if (!isLoaded) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
      animation: "border",
      className: "mie-3",
      screenReaderText: intl.formatMessage(_messages["default"].loading)
    });
  }
  if (galleryIsEmpty) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "gallery p-4 bg-gray-100",
      style: {
        height: '375px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].emptyGalleryLabel))
    });
  }
  if (searchIsEmpty) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "gallery p-4 bg-gray-100",
      style: {
        height: '375px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].emptySearchLabel))
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Scrollable, {
    className: "gallery bg-gray-100",
    style: {
      height: '375px'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "p-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SelectableBox.Set, {
        columns: 1,
        name: "images",
        onChange: onHighlightChange,
        type: "radio",
        value: highlighted,
        children: displayList.map(function (img) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GalleryCard["default"], {
            img: img
          }, img.id);
        })
      })
    })
  });
};
Gallery.defaultProps = {
  highlighted: ''
};
Gallery.propTypes = {
  galleryIsEmpty: _propTypes["default"].bool.isRequired,
  searchIsEmpty: _propTypes["default"].bool.isRequired,
  displayList: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  highlighted: _propTypes["default"].string,
  onHighlightChange: _propTypes["default"].func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  isLoaded: _propTypes["default"].bool.isRequired
};
var requestKey = _requests.RequestKeys.fetchAssets;
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    isLoaded: _redux.selectors.requests.isFinished(state, {
      requestKey: requestKey
    })
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gallery));
//# sourceMappingURL=Gallery.js.map