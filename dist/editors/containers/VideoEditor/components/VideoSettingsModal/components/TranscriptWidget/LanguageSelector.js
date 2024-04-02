"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports["default"] = exports.LanguageSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../../data/redux");
var _video = require("../../../../../../data/constants/video");
var _FileInput = require("../../../../../../sharedComponents/FileInput");
var _messages = _interopRequireDefault(require("./messages"));
var _module = _interopRequireWildcard(require("./LanguageSelector"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var hooks = exports.hooks = {
  onSelectLanguage: function onSelectLanguage(_ref) {
    var dispatch = _ref.dispatch,
      languageBeforeChange = _ref.languageBeforeChange,
      triggerupload = _ref.triggerupload,
      setLocalLang = _ref.setLocalLang;
    return function (_ref2) {
      var newLang = _ref2.newLang;
      // IF Language is unset, set language and begin upload prompt.
      setLocalLang(newLang);
      if (languageBeforeChange === '') {
        triggerupload();
        return;
      }
      // Else: update language
      dispatch(_redux.thunkActions.video.updateTranscriptLanguage({
        newLanguageCode: newLang,
        languageBeforeChange: languageBeforeChange
      }));
    };
  },
  addFileCallback: function addFileCallback(_ref3) {
    var dispatch = _ref3.dispatch,
      localLang = _ref3.localLang;
    return function (file) {
      dispatch(_redux.thunkActions.video.uploadTranscript({
        file: file,
        filename: file.name,
        language: localLang
      }));
    };
  }
};
var LanguageSelector = exports.LanguageSelector = function LanguageSelector(_ref4) {
  var index = _ref4.index,
    language = _ref4.language,
    openLanguages = _ref4.openLanguages,
    intl = _ref4.intl;
  var _React$useState = _react["default"].useState(language),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    localLang = _React$useState2[0],
    setLocalLang = _React$useState2[1];
  var input = (0, _FileInput.fileInput)({
    onAddFile: hooks.addFileCallback({
      dispatch: (0, _reactRedux.useDispatch)(),
      localLang: localLang
    })
  });
  var onLanguageChange = _module.hooks.onSelectLanguage({
    dispatch: (0, _reactRedux.useDispatch)(),
    languageBeforeChange: localLang,
    setLocalLang: setLocalLang,
    triggerupload: input.click
  });
  var getTitle = function getTitle() {
    if (Object.prototype.hasOwnProperty.call(_video.videoTranscriptLanguages, language)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [_video.videoTranscriptLanguages[language], /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          className: "text-primary-500",
          src: _icons.Check
        })]
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      children: [intl.formatMessage(_messages["default"].languageSelectPlaceholder), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
      className: "w-100 mb-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Toggle, {
        iconAs: _paragon.Button,
        "aria-label": intl.formatMessage(_messages["default"].languageSelectLabel),
        block: true,
        id: "selectLanguage-form-".concat(index),
        className: "w-100",
        variant: "outline-primary",
        children: getTitle()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Menu, {
        children: Object.entries(_video.videoTranscriptLanguages).map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            lang = _ref6[0],
            text = _ref6[1];
          if (language === lang) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Item, {
              children: [text, /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
                className: "text-primary-500",
                src: _icons.Check
              })]
            });
          }
          if (openLanguages.some(function (row) {
            return row.includes(lang);
          })) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
              onClick: function onClick() {
                return onLanguageChange({
                  newLang: lang
                });
              },
              children: text
            });
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
            className: "disabled",
            children: text
          });
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput.FileInput, {
      fileInput: input,
      acceptedFiles: ".srt"
    })]
  });
};
LanguageSelector.defaultProps = {
  openLanguages: []
};
LanguageSelector.propTypes = {
  openLanguages: _propTypes["default"].arrayOf(_propTypes["default"].string),
  index: _propTypes["default"].number.isRequired,
  language: _propTypes["default"].string.isRequired,
  intl: _i18n.intlShape.isRequired
};
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    openLanguages: _redux.selectors.video.openLanguages(state)
  };
};
var mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports["default"] = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LanguageSelector));
//# sourceMappingURL=LanguageSelector.js.map