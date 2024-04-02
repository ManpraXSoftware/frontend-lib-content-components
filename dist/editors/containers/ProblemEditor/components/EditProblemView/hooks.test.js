"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var hooks = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var mockRawOLX = 'rawOLX';
var mockBuiltOLX = 'builtOLX';
jest.mock('../../data/ReactStateOLXParser', function () {
  return jest.fn().mockImplementation(function () {
    return {
      buildOLX: function buildOLX() {
        return mockBuiltOLX;
      }
    };
  });
});
jest.mock('../../data/ReactStateSettingsParser');
describe('EditProblemView hooks parseState', function () {
  describe('fetchEditorContent', function () {
    var getContent = function getContent() {
      return '<p>testString</p>';
    };
    test('returns answers', function () {
      window.tinymce.editors = {
        'answer-A': {
          getContent: getContent
        }
      };
      var editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        answers: {
          A: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns hints', function () {
      window.tinymce.editors = {
        'hint-0': {
          getContent: getContent
        }
      };
      var editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        hints: ['<p>testString</p>']
      });
    });
    test('returns question', function () {
      window.tinymce.editors = {
        question: {
          getContent: getContent
        }
      };
      var editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        question: '<p>testString</p>',
        hints: []
      });
    });
    test('returns selectedFeedback', function () {
      window.tinymce.editors = {
        'selectedFeedback-A': {
          getContent: getContent
        }
      };
      var editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        selectedFeedback: {
          A: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns unselectedFeedback', function () {
      window.tinymce.editors = {
        'unselectedFeedback-A': {
          getContent: getContent
        }
      };
      var editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        unselectedFeedback: {
          A: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns groupFeedback', function () {
      window.tinymce.editors = {
        'groupFeedback-0': {
          getContent: getContent
        }
      };
      var editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        groupFeedback: {
          0: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns groupFeedback', function () {
      window.tinymce.editors = {};
      var editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        hints: []
      });
    });
  });
  describe('parseState', function () {
    var toStringMock = function toStringMock() {
      return mockRawOLX;
    };
    var refMock = {
      current: {
        state: {
          doc: {
            toString: toStringMock
          }
        }
      }
    };
    test('default problem', function () {
      var res = hooks.parseState({
        problem: 'problem',
        isAdvanced: false,
        ref: refMock,
        assets: {}
      })();
      expect(res.olx).toBe(mockBuiltOLX);
    });
    test('advanced problem', function () {
      var res = hooks.parseState({
        problem: 'problem',
        isAdvanced: true,
        ref: refMock,
        assets: {}
      })();
      expect(res.olx).toBe(mockRawOLX);
    });
  });
});
//# sourceMappingURL=hooks.test.js.map