"use strict";

var _react = _interopRequireDefault(require("react"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('react', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
    useRef: jest.fn(function (val) {
      return {
        current: val
      };
    }),
    useEffect: jest.fn(),
    useCallback: function useCallback(cb, prereqs) {
      return {
        cb: cb,
        prereqs: prereqs
      };
    }
  });
});
describe('SourceCodeModal hooks', function () {
  var mockContent = 'sOmEMockHtML';
  var mockSetContent = jest.fn();
  var mockEditorRef = {
    current: {
      setContent: mockSetContent,
      getContent: jest.fn(function () {
        return mockContent;
      })
    }
  };
  var mockClose = jest.fn();
  test('getSaveBtnProps', function () {
    var mockRef = {
      current: {
        state: {
          doc: mockContent
        }
      }
    };
    var input = {
      ref: mockRef,
      editorRef: mockEditorRef,
      close: mockClose
    };
    var resultProps = _module.getSaveBtnProps(input);
    resultProps.onClick();
    expect(mockSetContent).toHaveBeenCalledWith(mockContent);
    expect(mockClose).toHaveBeenCalled();
  });
  test('prepareSourceCodeModal', function () {
    var props = {
      close: mockClose,
      editorRef: mockEditorRef
    };
    var mockRef = {
      current: 'rEf'
    };
    var spyRef = jest.spyOn(_react["default"], 'useRef').mockReturnValueOnce(mockRef);
    var mockButton = 'mOcKBuTton';
    var spyButtons = jest.spyOn(_module, 'getSaveBtnProps').mockImplementation(function () {
      return mockButton;
    });
    var result = _module.prepareSourceCodeModal(props);
    expect(spyRef).toHaveBeenCalled();
    expect(spyButtons).toHaveBeenCalled();
    expect(result).toStrictEqual({
      saveBtnProps: mockButton,
      value: mockEditorRef.current.getContent(),
      ref: mockRef
    });
  });
});
//# sourceMappingURL=hooks.test.js.map