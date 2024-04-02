"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _testUtils = require("../../../../testUtils");
var _utils = require("../../../utils");
var _redux = require("../../../data/redux");
var hooks = _interopRequireWildcard(require("./hooks"));
var _utils2 = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
jest.mock('react-redux', function () {
  var dispatchFn = jest.fn();
  return _objectSpread(_objectSpread({}, jest.requireActual('react-redux')), {}, {
    dispatch: dispatchFn,
    useDispatch: jest.fn(function () {
      return dispatchFn;
    })
  });
});
jest.mock('../../../data/redux', function () {
  return {
    thunkActions: {
      app: {
        uploadImage: jest.fn()
      }
    }
  };
});
var state = new _testUtils.MockUseState(hooks);
var hookKeys = (0, _utils.keyStore)(hooks);
var hook;
var testValue = 'testVALUEVALIDIMAGE';
var testValueInvalidImage = {
  value: 'testVALUEVALIDIMAGE',
  size: 90000000
};
describe('SelectImageModal hooks', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('state hooks', function () {
    state.testGetter(state.keys.highlighted);
    state.testGetter(state.keys.showSelectImageError);
    state.testGetter(state.keys.searchString);
    state.testGetter(state.keys.sortBy);
    state.testGetter(state.keys.showSizeError);
  });
  describe('using state', function () {
    beforeEach(function () {
      state.mock();
    });
    afterEach(function () {
      state.restore();
    });
    describe('searchAndSortHooks', function () {
      beforeEach(function () {
        hook = hooks.searchAndSortHooks();
      });
      it('returns searchString value, initialized to an empty string', function () {
        expect(state.stateVals.searchString).toEqual(hook.searchString);
        expect(state.stateVals.searchString).toEqual('');
      });
      it('returns highlighted value, initialized to dateNewest', function () {
        expect(state.stateVals.sortBy).toEqual(hook.sortBy);
        expect(state.stateVals.sortBy).toEqual(_utils2.sortKeys.dateNewest);
      });
      test('onSearchChange sets searchString with event target value', function () {
        hook.onSearchChange({
          target: {
            value: testValue
          }
        });
        expect(state.setState.searchString).toHaveBeenCalledWith(testValue);
      });
      test('clearSearchString sets search string to empty string', function () {
        hook.clearSearchString();
        expect(state.setState.searchString).toHaveBeenCalledWith('');
      });
      test('onSortClick takes a key and returns callback to set sortBY to that key', function () {
        hook.onSortClick(testValue);
        expect(state.setState.sortBy).not.toHaveBeenCalled();
        hook.onSortClick(testValue)();
        expect(state.setState.sortBy).toHaveBeenCalledWith(testValue);
      });
    });
    describe('filteredList', function () {
      var matching = ['test', 'TEst', 'eeees', 'essSSSS'];
      var notMatching = ['bad', 'other', 'bad stuff'];
      var searchString = 'eS';
      test('returns list filtered lowercase by displayName', function () {
        var filter = jest.fn(function (cb) {
          return {
            filter: cb
          };
        });
        hook = hooks.filteredList({
          searchString: searchString,
          imageList: {
            filter: filter
          }
        });
        expect(filter).toHaveBeenCalled();
        var _filter$mock$calls = _slicedToArray(filter.mock.calls, 1),
          _filter$mock$calls$ = _slicedToArray(_filter$mock$calls[0], 1),
          filterCb = _filter$mock$calls$[0];
        matching.forEach(function (val) {
          return expect(filterCb({
            displayName: val
          })).toEqual(true);
        });
        notMatching.forEach(function (val) {
          return expect(filterCb({
            displayName: val
          })).toEqual(false);
        });
      });
    });
    describe('displayList', function () {
      var props = {
        images: ['data1', 'data2', 'other distinct data'],
        sortBy: _utils2.sortKeys.dateNewest,
        searchString: 'test search string'
      };
      var load = function load() {
        var loadProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        jest.spyOn(hooks, hookKeys.filteredList).mockImplementationOnce(function (_ref) {
          var searchString = _ref.searchString,
            imageList = _ref.imageList;
          return {
            sort: function sort(cb) {
              return {
                filteredList: {
                  searchString: searchString,
                  imageList: imageList
                },
                sort: {
                  cb: cb
                }
              };
            }
          };
        });
        hook = hooks.displayList(_objectSpread(_objectSpread({}, props), loadProps));
      };
      it('returns a sorted filtered list, based on the searchString and imageList values', function () {
        load();
        expect(hook.filteredList.searchString).toEqual(props.searchString);
        expect(hook.filteredList.imageList).toEqual(Object.values(props.images));
      });
      describe('sort behavior', function () {
        Object.keys(_utils2.sortKeys).forEach(function (key) {
          test("it sorts by ".concat(key, " when selected"), function () {
            load({
              sortBy: _utils2.sortKeys[key]
            });
            expect(hook.sort).toEqual({
              cb: _utils2.sortFunctions[key]
            });
          });
        });
        test('defaults to sorting by dateNewest', function () {
          load();
          expect(hook.sort).toEqual({
            cb: _utils2.sortFunctions.dateNewest
          });
        });
      });
    });
    describe('imgListHooks outputs', function () {
      var props = {
        setSelection: jest.fn(),
        searchSortProps: {
          searchString: 'Es',
          sortBy: _utils2.sortKeys.dateNewest
        },
        images: [{
          displayName: 'sOmEuiMAge',
          staTICUrl: '/assets/sOmEuiMAge',
          id: 'sOmEuiMAgeURl'
        }]
      };
      var displayList = function displayList(args) {
        return {
          displayList: args
        };
      };
      var load = function load() {
        jest.spyOn(hooks, hookKeys.displayList).mockImplementationOnce(displayList);
        hook = hooks.imgListHooks(props);
      };
      beforeEach(function () {
        load();
      });
      describe('selectBtnProps', function () {
        test('on click, if sets selection to the image with the same id', function () {
          var highlighted = 'sOmEuiMAgeURl';
          var highlightedValue = {
            displayName: 'sOmEuiMAge',
            staTICUrl: '/assets/sOmEuiMAge',
            id: 'sOmEuiMAgeURl'
          };
          state.mockVal(state.keys.highlighted, highlighted);
          load();
          expect(props.setSelection).not.toHaveBeenCalled();
          hook.selectBtnProps.onClick();
          expect(props.setSelection).toHaveBeenCalledWith(highlightedValue);
        });
        test('on click, sets showSelectImageError to true if nothing is highlighted', function () {
          state.mockVal(state.keys.highlighted, null);
          load();
          hook.selectBtnProps.onClick();
          expect(props.setSelection).not.toHaveBeenCalled();
          expect(state.setState.showSelectImageError).toHaveBeenCalledWith(true);
        });
      });
      describe('galleryProps', function () {
        it('returns highlighted value, initialized to null', function () {
          expect(hook.galleryProps.highlighted).toEqual(state.stateVals.highlighted);
          expect(state.stateVals.highlighted).toEqual(null);
        });
        test('onHighlightChange sets highlighted with event target value', function () {
          hook.galleryProps.onHighlightChange({
            target: {
              value: testValue
            }
          });
          expect(state.setState.highlighted).toHaveBeenCalledWith(testValue);
        });
        test('displayList returns displayListhook called with searchSortProps and images', function () {
          expect(hook.galleryProps.displayList).toEqual(displayList(_objectSpread(_objectSpread({}, props.searchSortProps), {}, {
            images: props.images
          })));
        });
      });
      describe('galleryError', function () {
        test('show is initialized to false and returns properly', function () {
          var show = 'sHOWSelectiMaGEeRROr';
          expect(hook.galleryError.show).toEqual(false);
          state.mockVal(state.keys.showSelectImageError, show);
          hook = hooks.imgListHooks(props);
          expect(hook.galleryError.show).toEqual(show);
        });
        test('set sets showSelectImageError to true', function () {
          hook.galleryError.set();
          expect(state.setState.showSelectImageError).toHaveBeenCalledWith(true);
        });
        test('dismiss sets showSelectImageError to false', function () {
          hook.galleryError.dismiss();
          expect(state.setState.showSelectImageError).toHaveBeenCalledWith(false);
        });
        // TODO
        // it('returns selectImageError value, initialized to false', () => {
        //   expect(hook.selectImageErrorProps.isError).toEqual(state.stateVals.isSelectImageError);
        //   expect(state.stateVals.isSelectImageError).toEqual(false);
        // });
        // test('dismissError sets selectImageError to false', () => {
        //   hook.selectImageErrorProps.dismissError();
        //   expect(state.setState.isSelectImageError).toHaveBeenCalledWith(false);
        // });
      });
    });
  });
  describe('checkValidFileSize', function () {
    var selectedFileFail = testValueInvalidImage;
    var selectedFileSuccess = {
      value: testValue,
      size: 2000
    };
    var clearSelection = jest.fn();
    var onSizeFail = jest.fn();
    it('returns false for valid file size ', function () {
      hook = hooks.checkValidFileSize({
        selectedFile: selectedFileFail,
        clearSelection: clearSelection,
        onSizeFail: onSizeFail
      });
      expect(clearSelection).toHaveBeenCalled();
      expect(onSizeFail).toHaveBeenCalled();
      expect(hook).toEqual(false);
    });
    it('returns true for valid file size', function () {
      hook = hooks.checkValidFileSize({
        selectedFile: selectedFileSuccess,
        clearSelection: clearSelection,
        onSizeFail: onSizeFail
      });
      expect(hook).toEqual(true);
    });
  });
  describe('fileInputHooks', function () {
    var setSelection = jest.fn();
    var clearSelection = jest.fn();
    var imgList = {
      inputError: {
        show: true,
        dismiss: jest.fn(),
        set: jest.fn()
      }
    };
    var spies = {};
    beforeEach(function () {
      hook = hooks.fileInputHooks({
        setSelection: setSelection,
        clearSelection: clearSelection,
        imgList: imgList
      });
    });
    it('returns a ref for the file input', function () {
      expect(hook.ref).toEqual({
        current: undefined
      });
    });
    test('click calls current.click on the ref', function () {
      var click = jest.fn();
      _react["default"].useRef.mockReturnValueOnce({
        current: {
          click: click
        }
      });
      hook = hooks.fileInputHooks({
        setSelection: setSelection
      });
      hook.click();
      expect(click).toHaveBeenCalled();
    });
    describe('addFile (uploadImage args)', function () {
      var eventSuccess = {
        target: {
          files: [{
            value: testValue,
            size: 2000
          }]
        }
      };
      var eventFailure = {
        target: {
          files: [testValueInvalidImage]
        }
      };
      it('image fails to upload if file size is greater than 1000000', function () {
        var checkValidFileSize = false;
        spies.checkValidFileSize = jest.spyOn(hooks, hookKeys.checkValidFileSize).mockReturnValueOnce(checkValidFileSize);
        hook.addFile(eventFailure);
        expect(spies.checkValidFileSize.mock.calls.length).toEqual(1);
        expect(spies.checkValidFileSize).toHaveReturnedWith(false);
      });
      it('dispatches uploadImage thunkAction with the first target file and setSelection', function () {
        var checkValidFileSize = true;
        spies.checkValidFileSize = jest.spyOn(hooks, hookKeys.checkValidFileSize).mockReturnValueOnce(checkValidFileSize);
        hook.addFile(eventSuccess);
        expect(spies.checkValidFileSize.mock.calls.length).toEqual(1);
        expect(spies.checkValidFileSize).toHaveReturnedWith(true);
        expect(_reactRedux.dispatch).toHaveBeenCalledWith(_redux.thunkActions.app.uploadImage({
          file: testValue,
          setSelection: setSelection
        }));
      });
    });
  });
  describe('imgHooks wrapper', function () {
    var imgListHooks = {
      galleryProps: 'some gallery props',
      selectBtnProps: 'some select btn props'
    };
    var searchAndSortHooks = {
      search: 'props'
    };
    var fileInputHooks = {
      file: 'input hooks'
    };
    var images = {
      sOmEuiMAge: {
        staTICUrl: '/assets/sOmEuiMAge'
      }
    };
    var setSelection = jest.fn();
    var clearSelection = jest.fn();
    var spies = {};
    beforeEach(function () {
      spies.imgList = jest.spyOn(hooks, hookKeys.imgListHooks).mockReturnValueOnce(imgListHooks);
      spies.search = jest.spyOn(hooks, hookKeys.searchAndSortHooks).mockReturnValueOnce(searchAndSortHooks);
      spies.file = jest.spyOn(hooks, hookKeys.fileInputHooks).mockReturnValueOnce(fileInputHooks);
      hook = hooks.imgHooks({
        setSelection: setSelection,
        clearSelection: clearSelection,
        images: images
      });
    });
    it('forwards fileInputHooks as fileInput, called with uploadImage prop', function () {
      expect(hook.fileInput).toEqual(fileInputHooks);
      expect(spies.file.mock.calls.length).toEqual(1);
      expect(spies.file).toHaveBeenCalledWith({
        setSelection: setSelection,
        clearSelection: clearSelection,
        imgList: imgListHooks
      });
    });
    it('initializes imgListHooks with setSelection,searchAndSortHooks, and images', function () {
      expect(spies.imgList.mock.calls.length).toEqual(1);
      expect(spies.imgList).toHaveBeenCalledWith({
        setSelection: setSelection,
        searchSortProps: searchAndSortHooks,
        images: images
      });
    });
    it('forwards searchAndSortHooks as searchSortProps', function () {
      expect(hook.searchSortProps).toEqual(searchAndSortHooks);
      expect(spies.file.mock.calls.length).toEqual(1);
      expect(spies.file).toHaveBeenCalledWith({
        setSelection: setSelection,
        clearSelection: clearSelection,
        imgList: imgListHooks
      });
    });
    it('forwards galleryProps and selectBtnProps from the image list hooks', function () {
      expect(hook.galleryProps).toEqual(imgListHooks.galleryProps);
      expect(hook.selectBtnProps).toEqual(imgListHooks.selectBtnProps);
    });
  });
});
//# sourceMappingURL=hooks.test.js.map