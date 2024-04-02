"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadTranscript = exports.uploadAsset = exports.saveBlock = exports.normalizeContent = exports.importTranscript = exports.fetchVideoFeatures = exports.fetchStudioView = exports.fetchCourseDetails = exports.fetchByUnitId = exports.fetchBlockById = exports.fetchAssets = exports.fetchAdvancedSettings = exports.fetchAdvanceSettings = exports.checkTranscriptsForImport = exports.checkTranscripts = void 0;
var urls = _interopRequireWildcard(require("./urls"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* istanbul ignore file */
var mockPromise = function mockPromise(returnValue) {
  return new Promise(function (resolve) {
    return resolve(returnValue);
  });
};

// TODO: update to return block data appropriate per block ID, which will equal block type
// eslint-disable-next-line
var fetchBlockById = exports.fetchBlockById = function fetchBlockById(_ref) {
  var blockId = _ref.blockId,
    studioEndpointUrl = _ref.studioEndpointUrl;
  var data = {};
  if (blockId === 'html-block-id') {
    data = {
      data: "<problem>\n      </problem>",
      display_name: 'My Text Prompt',
      metadata: {
        display_name: 'Welcome!',
        download_track: true,
        download_video: true,
        edx_video_id: 'f36f06b5-92e5-47c7-bb26-bcf986799cb7',
        html5_sources: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
        show_captions: true,
        sub: '',
        track: '',
        transcripts: {
          en: {
            filename: 'my-transcript-url'
          }
        },
        xml_attributes: {
          source: ''
        },
        youtube_id_1_0: 'dQw4w9WgXcQ'
      }
    };
  } else if (blockId === 'problem-block-id') {
    data = {
      data: "<problem>\n        </problem>",
      display_name: 'Dropdown',
      metadata: {
        markdown: "You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown problems. Edit this component to replace this template with your own assessment.\n        >>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<\n        [[\n        an incorrect answer\n        (the correct answer)\n        an incorrect answer\n        ]]",
        attempts_before_showanswer_button: 7,
        matlab_api_key: 'sample_matlab_api_key',
        max_attempts: 5,
        show_reset_button: true,
        showanswer: 'after_attempts',
        submission_wait_seconds: 15,
        weight: 29
      }
    };
  }
  return mockPromise({
    data: _objectSpread({}, data)
  });
};

// TODO: update to return block data appropriate per block ID, which will equal block type
// eslint-disable-next-line
var fetchByUnitId = exports.fetchByUnitId = function fetchByUnitId(_ref2) {
  var blockId = _ref2.blockId,
    studioEndpointUrl = _ref2.studioEndpointUrl;
  return mockPromise({
    data: {
      ancestors: [{
        id: 'unitUrl'
      }]
    }
  });
};
// eslint-disable-next-line
var fetchAssets = exports.fetchAssets = function fetchAssets(_ref3) {
  var learningContextId = _ref3.learningContextId,
    studioEndpointUrl = _ref3.studioEndpointUrl;
  return mockPromise({
    data: {
      assets: [{
        displayName: 'shahrukh.jpg',
        contentType: 'image/jpeg',
        dateAdded: 'Jan 05, 2022 at 17:38 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@shahrukh.jpg',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@shahrukh.jpg',
        portableUrl: '/static/shahrukh.jpg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@shahrukh.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@shahrukh.jpg'
      }, {
        displayName: 'IMG_5899.jpg',
        contentType: 'image/jpeg',
        dateAdded: 'Nov 16, 2021 at 18:55 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@IMG_5899.jpg',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@IMG_5899.jpg',
        portableUrl: '/static/IMG_5899.jpg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@IMG_5899.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@IMG_5899.jpg'
      }, {
        displayName: 'ccexample.srt',
        contentType: 'application/octet-stream',
        dateAdded: 'Nov 01, 2021 at 15:42 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@ccexample.srt',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@ccexample.srt',
        portableUrl: '/static/ccexample.srt',
        thumbnail: null,
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@ccexample.srt'
      }, {
        displayName: 'Tennis Ball.jpeg',
        contentType: 'image/jpeg',
        dateAdded: 'Aug 04, 2021 at 16:52 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@Tennis_Ball.jpeg',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@Tennis_Ball.jpeg',
        portableUrl: '/static/Tennis_Ball.jpeg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@Tennis_Ball-jpeg.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@Tennis_Ball.jpeg'
      }]
    }
  });
};
// eslint-disable-next-line
var fetchCourseDetails = exports.fetchCourseDetails = function fetchCourseDetails(_ref4) {
  var studioEndpointUrl = _ref4.studioEndpointUrl,
    learningContextId = _ref4.learningContextId;
  return mockPromise({
    data: {
      // license: "creative-commons: ver=4.0 BY NC",
      license: 'all-rights-reserved'
    }
  });
};
// eslint-disable-next-line
var checkTranscripts = exports.checkTranscripts = function checkTranscripts(_ref5) {
  var youTubeId = _ref5.youTubeId,
    studioEndpointUrl = _ref5.studioEndpointUrl,
    blockId = _ref5.blockId,
    videoId = _ref5.videoId;
  return mockPromise({
    data: {
      command: 'import'
    }
  });
};
// eslint-disable-next-line
var importTranscript = exports.importTranscript = function importTranscript(_ref6) {
  var youTubeId = _ref6.youTubeId,
    studioEndpointUrl = _ref6.studioEndpointUrl,
    blockId = _ref6.blockId;
  return mockPromise({
    data: {
      edx_video_id: 'f36f06b5-92e5-47c7-bb26-bcf986799cb7'
    }
  });
};
// eslint-disable-next-line
var fetchAdvanceSettings = exports.fetchAdvanceSettings = function fetchAdvanceSettings(_ref7) {
  var studioEndpointUrl = _ref7.studioEndpointUrl,
    learningContextId = _ref7.learningContextId;
  return mockPromise({
    data: {
      allow_unsupported_xblocks: {
        value: true
      }
    }
  });
};
// eslint-disable-next-line
var fetchVideoFeatures = exports.fetchVideoFeatures = function fetchVideoFeatures(_ref8) {
  var studioEndpointUrl = _ref8.studioEndpointUrl,
    learningContextId = _ref8.learningContextId;
  return mockPromise({
    data: {
      allowThumbnailUpload: true,
      videoSharingEnabledForCourse: true
    }
  });
};
var normalizeContent = exports.normalizeContent = function normalizeContent(_ref9) {
  var blockId = _ref9.blockId,
    blockType = _ref9.blockType,
    content = _ref9.content,
    learningContextId = _ref9.learningContextId,
    title = _ref9.title;
  var response = {};
  if (blockType === 'html') {
    response = {
      category: blockType,
      couseKey: learningContextId,
      data: content,
      has_changes: true,
      id: blockId,
      metadata: {
        display_name: title
      }
    };
  } else if (blockType === 'problem') {
    response = {
      data: content.olx,
      category: blockType,
      couseKey: learningContextId,
      has_changes: true,
      id: blockId,
      metadata: _objectSpread({
        display_name: title
      }, content.settings)
    };
  } else {
    throw new TypeError("No Block in V2 Editors named /\"".concat(blockType, "/\", Cannot Save Content."));
  }
  return _objectSpread({}, response);
};
var saveBlock = exports.saveBlock = function saveBlock(_ref10) {
  var blockId = _ref10.blockId,
    blockType = _ref10.blockType,
    content = _ref10.content,
    learningContextId = _ref10.learningContextId,
    studioEndpointUrl = _ref10.studioEndpointUrl,
    title = _ref10.title;
  return mockPromise({
    url: urls.block({
      studioEndpointUrl: studioEndpointUrl,
      blockId: blockId
    }),
    content: normalizeContent({
      blockType: blockType,
      content: content,
      blockId: blockId,
      learningContextId: learningContextId,
      title: title
    })
  });
};
var uploadAsset = exports.uploadAsset = function uploadAsset(_ref11) {
  var learningContextId = _ref11.learningContextId,
    studioEndpointUrl = _ref11.studioEndpointUrl;
  return mockPromise({
    url: urls.courseAssets({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId
    }),
    asset: {
      asset: {
        display_name: 'journey_escape.jpg',
        content_type: 'image/jpeg',
        date_added: 'Jan 05, 2022 at 21:26 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@journey_escape.jpg',
        external_url: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@journey_escape.jpg',
        portable_url: '/static/journey_escape.jpg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@journey_escape.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@journey_escape.jpg'
      },
      msg: 'Upload completed'
    }
  });
};

// TODO: update to return block data appropriate per block ID, which will equal block type
// eslint-disable-next-line
var fetchStudioView = exports.fetchStudioView = function fetchStudioView(_ref12) {
  var blockId = _ref12.blockId,
    studioEndpointUrl = _ref12.studioEndpointUrl;
  var data = {};
  if (blockId === 'html-block-id') {
    data = {
      data: '<p>Test prompt content</p>',
      display_name: 'My Text Prompt',
      metadata: {
        display_name: 'Welcome!',
        download_track: true,
        download_video: true,
        edx_video_id: 'f36f06b5-92e5-47c7-bb26-bcf986799cb7',
        html5_sources: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
        show_captions: true,
        sub: '',
        track: '',
        transcripts: {
          en: {
            filename: 'my-transcript-url'
          }
        },
        xml_attributes: {
          source: ''
        },
        youtube_id_1_0: 'dQw4w9WgXcQ'
      }
    };
  } else if (blockId === 'problem-block-id') {
    data = {
      data: "<problem>\n      <optionresponse>\n          <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown problems. Edit this component to replace this template with your own assessment.</p>\n          <label>Add the question text, or prompt, here. This text is required.</label>\n          <description>You can add an optional tip or note related to the prompt like this. </description>\n          <optioninput>\n              <option correct=\"False\">an incorrect answer</option>\n              <option correct=\"True\">the correct answer</option>\n              <option correct=\"False\">an incorrect answer</option>\n          </optioninput>\n      </optionresponse>\n  </problem>",
      display_name: 'Dropdown',
      metadata: {
        markdown: "You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown problems. Edit this component to replace this template with your own assessment.\n        >>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<\n        [[\n        an incorrect answer\n        (the correct answer)\n        an incorrect answer\n        ]]",
        attempts_before_showanswer_button: 7,
        matlab_api_key: 'numerical_input_matlab_api_key',
        max_attempts: 5,
        rerandomize: 'per_student',
        show_reset_button: true,
        showanswer: 'after_attempts',
        submission_wait_seconds: 15,
        weight: 29
      }
    };
  }
  return mockPromise({
    data: _objectSpread({
      // The following is sent for 'raw' editors.
      html: blockId.includes('mockRaw') ? 'data-editor="raw"' : ''
    }, data)
  });
};
var checkTranscriptsForImport = exports.checkTranscriptsForImport = function checkTranscriptsForImport() {
  return mockPromise({});
};
var uploadTranscript = exports.uploadTranscript = function uploadTranscript() {
  return mockPromise({});
};
var fetchAdvancedSettings = exports.fetchAdvancedSettings = function fetchAdvancedSettings() {
  return mockPromise({});
};
//# sourceMappingURL=mockApi.js.map