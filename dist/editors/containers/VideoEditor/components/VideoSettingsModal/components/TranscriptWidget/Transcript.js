"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports["default"] = exports.Transcript = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../../data/redux");
var _TranscriptActionMenu = _interopRequireDefault(require("./TranscriptActionMenu"));
var _LanguageSelector = _interopRequireDefault(require("./LanguageSelector"));
var _module = _interopRequireWildcard(require("./Transcript"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var hooks = exports.hooks = {
  state: {
    inDeleteConfirmation: function inDeleteConfirmation(args) {
      return _react["default"].useState(args);
    }
  },
  setUpDeleteConfirmation: function setUpDeleteConfirmation() {
    var _module$hooks$state$i = _module.hooks.state.inDeleteConfirmation(false),
      _module$hooks$state$i2 = _slicedToArray(_module$hooks$state$i, 2),
      inDeleteConfirmation = _module$hooks$state$i2[0],
      setInDeleteConfirmation = _module$hooks$state$i2[1];
    return {
      inDeleteConfirmation: inDeleteConfirmation,
      launchDeleteConfirmation: function launchDeleteConfirmation() {
        return setInDeleteConfirmation(true);
      },
      cancelDelete: function cancelDelete() {
        return setInDeleteConfirmation(false);
      }
    };
  }
};
var Transcript = exports.Transcript = function Transcript(_ref) {
  var index = _ref.index,
    language = _ref.language,
    deleteTranscript = _ref.deleteTranscript;
  var _module$hooks$setUpDe = _module.hooks.setUpDeleteConfirmation(),
    inDeleteConfirmation = _module$hooks$setUpDe.inDeleteConfirmation,
    launchDeleteConfirmation = _module$hooks$setUpDe.launchDeleteConfirmation,
    cancelDelete = _module$hooks$setUpDe.cancelDelete;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: inDeleteConfirmation ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card, {
      className: "mb-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Card.Header, {
        title: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].deleteConfirmationHeader))
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card.Body, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Card.Section, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].deleteConfirmationMessage))
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card.Footer, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            variant: "tertiary",
            className: "mb-2 mb-sm-0",
            onClick: cancelDelete,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].cancelDeleteLabel))
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            variant: "danger",
            className: "mb-2 mb-sm-0",
            onClick: function onClick() {
              deleteTranscript({
                language: language
              });
              // stop showing the card
              cancelDelete();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].confirmDeleteLabel))
          })]
        })]
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LanguageSelector["default"], {
        title: index,
        language: language
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), language === '' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
        iconAs: _paragon.Icon,
        src: _icons.DeleteOutline,
        onClick: function onClick() {
          return launchDeleteConfirmation();
        }
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TranscriptActionMenu["default"], {
        index: index,
        language: language,
        launchDeleteConfirmation: launchDeleteConfirmation
      })]
    })
  });
};
Transcript.propTypes = {
  index: _propTypes["default"].number.isRequired,
  language: _propTypes["default"].string.isRequired,
  deleteTranscript: _propTypes["default"].func.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps() {
  return {};
};
var mapDispatchToProps = exports.mapDispatchToProps = {
  deleteTranscript: _redux.thunkActions.video.deleteTranscript
};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Transcript));
//# sourceMappingURL=Transcript.js.map