"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports["default"] = exports.TranscriptWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _redux = require("../../../../../../data/redux");
var _messages = _interopRequireDefault(require("./messages"));
var _requests = require("../../../../../../data/constants/requests");
var _video = require("../../../../../../data/constants/video");
var _ErrorAlert = _interopRequireDefault(require("../../../../../../sharedComponents/ErrorAlerts/ErrorAlert"));
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _ImportTranscriptCard = _interopRequireDefault(require("./ImportTranscriptCard"));
var _Transcript = _interopRequireDefault(require("./Transcript"));
var _hooks = require("../../../../hooks");
var _module = _interopRequireWildcard(require("./index"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
  updateErrors: function updateErrors(_ref) {
    var isUploadError = _ref.isUploadError,
      isDeleteError = _ref.isDeleteError;
    var _React$useContext$tra = _slicedToArray(_react["default"].useContext(_hooks.ErrorContext).transcripts, 2),
      error = _React$useContext$tra[0],
      setError = _React$useContext$tra[1];
    if (isUploadError) {
      setError(_objectSpread(_objectSpread({}, error), {}, {
        uploadError: _messages["default"].uploadTranscriptError.defaultMessage
      }));
    }
    if (isDeleteError) {
      setError(_objectSpread(_objectSpread({}, error), {}, {
        deleteError: _messages["default"].deleteTranscriptError.defaultMessage
      }));
    }
  },
  transcriptLanguages: function transcriptLanguages(transcripts, intl) {
    var languages = [];
    if (transcripts && transcripts.length > 0) {
      var fullTextTranslatedStrings = (0, _video.in8lTranscriptLanguages)(intl);
      transcripts.forEach(function (transcript) {
        if (!(transcript === '')) {
          languages.push(fullTextTranslatedStrings[transcript]);
        }
      });
      return languages.join(', ');
    }
    return 'None';
  },
  hasTranscripts: function hasTranscripts(transcripts) {
    if (transcripts && transcripts.length > 0) {
      return true;
    }
    return false;
  },
  onAddNewTranscript: function onAddNewTranscript(_ref2) {
    var transcripts = _ref2.transcripts,
      updateField = _ref2.updateField;
    // keep blank lang code for now, will be updated once lang is selected.
    if (!transcripts) {
      updateField({
        transcripts: ['']
      });
      return;
    }
    var newTranscripts = [].concat(_toConsumableArray(transcripts), ['']);
    updateField({
      transcripts: newTranscripts
    });
  }
};

/**
 * Collapsible Form widget controlling video transcripts
 */
var TranscriptWidget = exports.TranscriptWidget = function TranscriptWidget(_ref3) {
  var transcripts = _ref3.transcripts,
    allowTranscriptDownloads = _ref3.allowTranscriptDownloads,
    showTranscriptByDefault = _ref3.showTranscriptByDefault,
    allowTranscriptImport = _ref3.allowTranscriptImport,
    updateField = _ref3.updateField,
    isUploadError = _ref3.isUploadError,
    isDeleteError = _ref3.isDeleteError,
    intl = _ref3.intl;
  var _React$useContext$tra2 = _slicedToArray(_react["default"].useContext(_hooks.ErrorContext).transcripts, 1),
    error = _React$useContext$tra2[0];
  var _React$useState = _react["default"].useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showImportCard = _React$useState2[0],
    setShowImportCard = _React$useState2[1];
  var fullTextLanguages = _module.hooks.transcriptLanguages(transcripts, intl);
  var hasTranscripts = _module.hooks.hasTranscripts(transcripts);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget["default"], {
    fontSize: "x-small",
    isError: Object.keys(error).length !== 0,
    subtitle: fullTextLanguages,
    title: intl.formatMessage(_messages["default"].title),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert["default"], {
      hideHeading: true,
      isError: isUploadError,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].uploadTranscriptError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert["default"], {
      hideHeading: true,
      isError: isDeleteError,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].deleteTranscriptError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 3,
      children: [hasTranscripts ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
        className: "border-primary-100 border-bottom",
        children: [transcripts.map(function (language, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transcript["default"], {
            language: language,
            index: index
          });
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
          className: "mt-3.5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
            checked: allowTranscriptDownloads,
            className: "decorative-control-label",
            onChange: function onChange(e) {
              return updateField({
                allowTranscriptDownloads: e.target.checked
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "small text-gray-700",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].allowDownloadCheckboxLabel))
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.OverlayTrigger, {
            placement: "top",
            overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Tooltip, {
              id: "tooltip-top",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].tooltipMessage))
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
              src: _icons.InfoOutline,
              style: {
                height: '16px',
                width: '16px'
              }
            })
          }, "top"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
          checked: showTranscriptByDefault,
          className: "mt-3 decorative-control-label",
          onChange: function onChange(e) {
            return updateField({
              showTranscriptByDefault: e.target.checked
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "small text-gray-700",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].showByDefaultCheckboxLabel))
          })
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].addFirstTranscript)), showImportCard && allowTranscriptImport ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImportTranscriptCard["default"], {
          setOpen: setShowImportCard
        }) : null]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          className: "text-primary-500 font-weight-bold justify-content-start pl-0",
          size: "sm",
          iconBefore: _icons.Add,
          variant: "link",
          onClick: function onClick() {
            return _module.hooks.onAddNewTranscript({
              transcripts: transcripts,
              updateField: updateField
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages["default"].uploadButtonLabel))
        })
      })]
    })]
  });
};
TranscriptWidget.defaultProps = {};
TranscriptWidget.propTypes = {
  // redux
  transcripts: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  allowTranscriptDownloads: _propTypes["default"].bool.isRequired,
  showTranscriptByDefault: _propTypes["default"].bool.isRequired,
  allowTranscriptImport: _propTypes["default"].bool.isRequired,
  updateField: _propTypes["default"].func.isRequired,
  isUploadError: _propTypes["default"].bool.isRequired,
  isDeleteError: _propTypes["default"].bool.isRequired,
  intl: _propTypes["default"].shape(_i18n.intlShape).isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    transcripts: _redux.selectors.video.transcripts(state),
    allowTranscriptDownloads: _redux.selectors.video.allowTranscriptDownloads(state),
    showTranscriptByDefault: _redux.selectors.video.showTranscriptByDefault(state),
    allowTranscriptImport: _redux.selectors.video.allowTranscriptImport(state),
    isUploadError: _redux.selectors.requests.isFailed(state, {
      requestKey: _requests.RequestKeys.uploadTranscript
    }),
    isDeleteError: _redux.selectors.requests.isFailed(state, {
      requestKey: _requests.RequestKeys.deleteTranscript
    })
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateField: function updateField(stateUpdate) {
      return dispatch(_redux.actions.video.updateField(stateUpdate));
    }
  };
};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TranscriptWidget));
//# sourceMappingURL=index.js.map