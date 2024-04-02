"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.onSaveClick = exports.onInputChange = exports.onCheckboxChange = exports.getValidDimensions = exports.findGcd = exports.dimensionLockHooks = exports.dimensionHooks = exports.dimKeys = exports["default"] = exports.checkFormValidation = exports.altTextHooks = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
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
// Simple wrappers for useState to allow easy mocking for tests.
var state = exports.state = {
  altText: function altText(val) {
    return _react["default"].useState(val);
  },
  dimensions: function dimensions(val) {
    return _react["default"].useState(val);
  },
  showAltTextDismissibleError: function showAltTextDismissibleError(val) {
    return _react["default"].useState(val);
  },
  showAltTextSubmissionError: function showAltTextSubmissionError(val) {
    return _react["default"].useState(val);
  },
  isDecorative: function isDecorative(val) {
    return _react["default"].useState(val);
  },
  isLocked: function isLocked(val) {
    return _react["default"].useState(val);
  },
  local: function local(val) {
    return _react["default"].useState(val);
  },
  lockDims: function lockDims(val) {
    return _react["default"].useState(val);
  },
  lockInitialized: function lockInitialized(val) {
    return _react["default"].useState(val);
  }
};
var dimKeys = exports.dimKeys = (0, _utils.StrictDict)({
  height: 'height',
  width: 'width'
});

/**
 * findGcd(numerator, denominator)
 * Find the greatest common denominator of a ratio or fraction.
 * @param {number} numerator - ratio numerator
 * @param {number} denominator - ratio denominator
 * @return {number} - ratio greatest common denominator
 */
var findGcd = exports.findGcd = function findGcd(a, b) {
  return b ? findGcd(b, a % b) : a;
};
var checkEqual = function checkEqual(d1, d2) {
  return d1.height === d2.height && d1.width === d2.width;
};

/**
 * getValidDimensions({ dimensions, local, locked })
 * Find valid ending dimensions based on start state, request, and lock state
 * @param {obj} dimensions - current stored dimensions
 * @param {obj} local - local (active) dimensions in the inputs
 * @param {obj} locked - locked dimensions
 * @return {obj} - output dimensions after move ({ height, width })
 */
var getValidDimensions = exports.getValidDimensions = function getValidDimensions(_ref) {
  var dimensions = _ref.dimensions,
    local = _ref.local,
    isLocked = _ref.isLocked,
    lockDims = _ref.lockDims;
  if (!isLocked || checkEqual(local, dimensions)) {
    return local;
  }
  var out = {};
  var iter;
  var isMin = dimensions.height === lockDims.height;
  var keys = local.height !== dimensions.height ? {
    changed: dimKeys.height,
    other: dimKeys.width
  } : {
    changed: dimKeys.width,
    other: dimKeys.height
  };
  var direction = local[keys.changed] > dimensions[keys.changed] ? 1 : -1;

  // don't move down if already at minimum size
  if (direction < 0 && isMin) {
    return dimensions;
  }
  // find closest valid iteration of the changed field
  iter = Math.max(Math.round(local[keys.changed] / lockDims[keys.changed]), 1);
  // if closest valid iteration is current iteration, move one iteration in the change direction
  if (iter === dimensions[keys.changed] / lockDims[keys.changed]) {
    iter += direction;
  }
  out[keys.changed] = Math.round(iter * lockDims[keys.changed]);
  out[keys.other] = Math.round(out[keys.changed] * (lockDims[keys.other] / lockDims[keys.changed]));
  return out;
};

/**
 * dimensionLockHooks({ dimensions })
 * Returns a set of hooks pertaining to the dimension locks.
 * Locks the dimensions initially, on lock initialization.
 * @param {obj} dimensions - current stored dimensions
 * @return {obj} - dimension lock hooks
 *   {func} initializeLock - enable the lock mechanism
 *   {bool} isLocked - are dimensions locked?
 *   {obj} lockDims - image dimensions ({ height, width })
 *   {func} lock - lock the dimensions
 *   {func} unlock - unlock the dimensions
 */
var dimensionLockHooks = exports.dimensionLockHooks = function dimensionLockHooks() {
  var _module$state$lockDim = _module.state.lockDims(null),
    _module$state$lockDim2 = _slicedToArray(_module$state$lockDim, 2),
    lockDims = _module$state$lockDim2[0],
    setLockDims = _module$state$lockDim2[1];
  var _module$state$isLocke = _module.state.isLocked(true),
    _module$state$isLocke2 = _slicedToArray(_module$state$isLocke, 2),
    isLocked = _module$state$isLocke2[0],
    setIsLocked = _module$state$isLocke2[1];
  var initializeLock = function initializeLock(_ref2) {
    var width = _ref2.width,
      height = _ref2.height;
    // find minimum viable increment
    var gcd = _module.findGcd(width, height);
    if ([width, height].some(function (v) {
      return !Number.isInteger(v / gcd);
    })) {
      gcd = 1;
    }
    setLockDims({
      width: width / gcd,
      height: height / gcd
    });
  };
  return {
    initializeLock: initializeLock,
    isLocked: isLocked,
    lock: function lock() {
      return setIsLocked(true);
    },
    lockDims: lockDims,
    unlock: function unlock() {
      return setIsLocked(false);
    }
  };
};

/**
 * dimensionHooks()
 * Returns an object of dimension-focused react hooks.
 * @return {obj} - dimension hooks
 *   {func} onImgLoad - initializes image dimension fields
 *     @param {object} selection - selected image object with possible override dimensions.
 *     @return {callback} - image load event callback that loads dimensions.
 *   {object} locked - current locked state
 *   {func} lock - lock current dimensions
 *   {func} unlock - unlock dimensions
 *   {object} value - current dimension values
 *   {func} setHeight - set height
 *     @param {string} - new height string
 *   {func} setWidth - set width
 *     @param {string} - new width string
 *   {func} updateDimensions - set dimensions based on state
 *   {obj} errorProps - props for user feedback error
 *     {bool} isError - true if dimensions are blank
 *     {func} setError - sets isError to true
 *     {func} dismissError - sets isError to false
 *     {bool} isHeightValid - true if height field is ready to save
 *     {func} setHeightValid - sets isHeightValid to true
 *     {func} setHeightNotValid - sets isHeightValid to false
 *     {bool} isWidthValid - true if width field is ready to save
 *     {func} setWidthValid - sets isWidthValid to true
 *     {func} setWidthNotValid - sets isWidthValid to false
 */
var dimensionHooks = exports.dimensionHooks = function dimensionHooks(altTextHook) {
  var _module$state$dimensi = _module.state.dimensions(null),
    _module$state$dimensi2 = _slicedToArray(_module$state$dimensi, 2),
    dimensions = _module$state$dimensi2[0],
    setDimensions = _module$state$dimensi2[1];
  var _module$state$local = _module.state.local(null),
    _module$state$local2 = _slicedToArray(_module$state$local, 2),
    local = _module$state$local2[0],
    setLocal = _module$state$local2[1];
  var setAll = function setAll(_ref3) {
    var height = _ref3.height,
      width = _ref3.width,
      altText = _ref3.altText;
    if (altText === '' || altText) {
      if (altText === '') {
        altTextHook.setIsDecorative(true);
      }
      altTextHook.setValue(altText);
    }
    setDimensions({
      height: height,
      width: width
    });
    setLocal({
      height: height,
      width: width
    });
  };
  var _module$dimensionLock = _module.dimensionLockHooks({
      dimensions: dimensions
    }),
    initializeLock = _module$dimensionLock.initializeLock,
    isLocked = _module$dimensionLock.isLocked,
    lock = _module$dimensionLock.lock,
    lockDims = _module$dimensionLock.lockDims,
    unlock = _module$dimensionLock.unlock;
  return {
    onImgLoad: function onImgLoad(selection) {
      return function (_ref4) {
        var img = _ref4.target;
        var imageDims = {
          height: img.naturalHeight,
          width: img.naturalWidth
        };
        setAll(selection.height ? selection : imageDims);
        initializeLock(imageDims);
      };
    },
    isLocked: isLocked,
    lock: lock,
    unlock: unlock,
    value: local,
    setHeight: function setHeight(height) {
      if (height.match(/[0-9]+[%]{1}/)) {
        var heightPercent = height.match(/[0-9]+[%]{1}/)[0];
        setLocal(_objectSpread(_objectSpread({}, local), {}, {
          height: heightPercent
        }));
      } else if (height.match(/[0-9]/)) {
        setLocal(_objectSpread(_objectSpread({}, local), {}, {
          height: parseInt(height, 10)
        }));
      }
    },
    setWidth: function setWidth(width) {
      if (width.match(/[0-9]+[%]{1}/)) {
        var widthPercent = width.match(/[0-9]+[%]{1}/)[0];
        setLocal(_objectSpread(_objectSpread({}, local), {}, {
          width: widthPercent
        }));
      } else if (width.match(/[0-9]/)) {
        setLocal(_objectSpread(_objectSpread({}, local), {}, {
          width: parseInt(width, 10)
        }));
      }
    },
    updateDimensions: function updateDimensions() {
      return setAll(_module.getValidDimensions({
        dimensions: dimensions,
        local: local,
        isLocked: isLocked,
        lockDims: lockDims
      }));
    }
  };
};

/**
 * altTextHooks(savedText)
 * Returns a set of react hooks focused around alt text
 * @return {obj} - alt text hooks
 *   {string} value - alt text value
 *   {func} setValue - set alt test value
 *     @param {string} - new alt text
 *   {bool} isDecorative - is the image decorative?
 *   {func} setIsDecorative - set isDecorative field
 *   {obj} error - error at top of page
 *     {bool} show - is error being displayed?
 *     {func} set - set show to true
 *     {func} dismiss - set show to false
 *   {obj} validation - local alt text error
 *     {bool} show - is validation error being displayed?
 *     {func} set - set validation to true
 *     {func} dismiss - set validation to false
 */
var altTextHooks = exports.altTextHooks = function altTextHooks(savedText) {
  var _module$state$altText = _module.state.altText(savedText || ''),
    _module$state$altText2 = _slicedToArray(_module$state$altText, 2),
    value = _module$state$altText2[0],
    _setValue = _module$state$altText2[1];
  var _module$state$isDecor = _module.state.isDecorative(false),
    _module$state$isDecor2 = _slicedToArray(_module$state$isDecor, 2),
    isDecorative = _module$state$isDecor2[0],
    _setIsDecorative = _module$state$isDecor2[1];
  var _module$state$showAlt = _module.state.showAltTextDismissibleError(false),
    _module$state$showAlt2 = _slicedToArray(_module$state$showAlt, 2),
    showAltTextDismissibleError = _module$state$showAlt2[0],
    setShowAltTextDismissibleError = _module$state$showAlt2[1];
  var _module$state$showAlt3 = _module.state.showAltTextSubmissionError(false),
    _module$state$showAlt4 = _slicedToArray(_module$state$showAlt3, 2),
    showAltTextSubmissionError = _module$state$showAlt4[0],
    setShowAltTextSubmissionError = _module$state$showAlt4[1];
  var validateAltText = function validateAltText(newVal, newDecorative) {
    if (showAltTextSubmissionError) {
      if (newVal || newDecorative) {
        setShowAltTextSubmissionError(false);
      }
    }
  };
  return {
    value: value,
    setValue: function setValue(val) {
      _setValue(val);
      validateAltText(val, null);
    },
    isDecorative: isDecorative,
    setIsDecorative: function setIsDecorative(decorative) {
      _setIsDecorative(decorative);
      validateAltText(null, decorative);
    },
    error: {
      show: showAltTextDismissibleError,
      set: function set() {
        return setShowAltTextDismissibleError(true);
      },
      dismiss: function dismiss() {
        return setShowAltTextDismissibleError(false);
      }
    },
    validation: {
      show: showAltTextSubmissionError,
      set: function set() {
        return setShowAltTextSubmissionError(true);
      },
      dismiss: function dismiss() {
        return setShowAltTextSubmissionError(false);
      }
    }
  };
};

/**
 * onInputChange(handleValue)
 * Simple event handler forwarding the event target value to a given callback
 * @param {func} handleValue - event value handler
 * @return {func} - evt callback that will call handleValue with the event target value.
 */
var onInputChange = exports.onInputChange = function onInputChange(handleValue) {
  return function (e) {
    return handleValue(e.target.value);
  };
};

/**
 * onCheckboxChange(handleValue)
 * Simple event handler forwarding the event target checked prop to a given callback
 * @param {func} handleValue - event value handler
 * @return {func} - evt callback that will call handleValue with the event target checked prop.
 */
var onCheckboxChange = exports.onCheckboxChange = function onCheckboxChange(handleValue) {
  return function (e) {
    return handleValue(e.target.checked);
  };
};

/**
 * checkFormValidation({ altText, isDecorative, onAltTextFail })
 * Handle saving the image context to the text editor
 * @param {string} altText - image alt text
 * @param {bool} isDecorative - is the image decorative?
 * @param {func} onAltTextFail - called if alt text validation fails
 */
var checkFormValidation = exports.checkFormValidation = function checkFormValidation(_ref5) {
  var altText = _ref5.altText,
    isDecorative = _ref5.isDecorative,
    onAltTextFail = _ref5.onAltTextFail;
  if (!isDecorative && altText === '') {
    onAltTextFail();
    return false;
  }
  return true;
};

/**
 * onSave({ altText, dimensions, isDecorative, saveToEditor })
 * Handle saving the image context to the text editor
 * @param {string} altText - image alt text
 * @param {object} dimensions - image dimensions ({ width, height })
 * @param {bool} isDecorative - is the image decorative?
 * @param {func} saveToEditor - save method for submitting image settings.
 */
var onSaveClick = exports.onSaveClick = function onSaveClick(_ref6) {
  var altText = _ref6.altText,
    dimensions = _ref6.dimensions,
    isDecorative = _ref6.isDecorative,
    saveToEditor = _ref6.saveToEditor;
  return function () {
    if (_module.checkFormValidation({
      altText: altText.value,
      isDecorative: isDecorative,
      onAltTextFail: function onAltTextFail() {
        altText.error.set();
        altText.validation.set();
      }
    })) {
      altText.error.dismiss();
      altText.validation.dismiss();
      saveToEditor({
        altText: altText.value,
        dimensions: dimensions,
        isDecorative: isDecorative
      });
    }
  };
};
var _default = exports["default"] = {
  altText: altTextHooks,
  dimensions: dimensionHooks,
  onCheckboxChange: onCheckboxChange,
  onInputChange: onInputChange,
  onSaveClick: onSaveClick,
  checkFormValidation: checkFormValidation
};
//# sourceMappingURL=hooks.js.map