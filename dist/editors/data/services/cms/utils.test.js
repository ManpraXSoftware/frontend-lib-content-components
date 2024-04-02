"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _auth = require("@edx/frontend-platform/auth");
var utils = _interopRequireWildcard(require("./utils"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
jest.mock('@edx/frontend-platform/auth', function () {
  return {
    getAuthenticatedHttpClient: jest.fn()
  };
});
describe('cms service utils', function () {
  describe('get', function () {
    it('forwards arguments to authenticatedHttpClient().get', function () {
      var get = jest.fn(function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return {
          get: args
        };
      });
      _auth.getAuthenticatedHttpClient.mockReturnValue({
        get: get
      });
      var args = ['some', 'args', 'for', 'the', 'test'];
      expect(utils.get.apply(utils, args)).toEqual(get.apply(void 0, args));
    });
  });
  describe('post', function () {
    it('forwards arguments to authenticatedHttpClient().post', function () {
      var post = jest.fn(function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return {
          post: args
        };
      });
      _auth.getAuthenticatedHttpClient.mockReturnValue({
        post: post
      });
      var args = ['some', 'args', 'for', 'the', 'test'];
      expect(utils.post.apply(utils, args)).toEqual(post.apply(void 0, args));
    });
  });
  // describe('deleteObject', () => {
  //   it('forwards arguments to authenticatedHttpClient().delete', () => {
  //     const deleteObject = jest.fn((...args) => ({ delete: args }));
  //     getAuthenticatedHttpClient.mockReturnValue({ deleteObject });
  //     const args = ['some', 'args', 'for', 'the', 'test'];
  //     expect(utils.deleteObject(...args)).toEqual(deleteObject(...args));
  //   });
  // });
});
//# sourceMappingURL=utils.test.js.map