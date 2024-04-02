"use strict";

var _ = require("..");
var _keyStore = _interopRequireDefault(require("../../../utils/keyStore"));
var thunkActions = _interopRequireWildcard(require("./video"));
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
jest.mock('..', function () {
  return {
    actions: {
      video: {
        load: function load(args) {
          return {
            load: args
          };
        },
        updateField: function updateField(args) {
          return {
            updateField: args
          };
        }
      }
    },
    selectors: {
      app: {
        courseDetails: function courseDetails(state) {
          return {
            courseDetails: state
          };
        }
      },
      video: {
        videoId: function videoId(state) {
          return {
            videoId: state
          };
        },
        videoSettings: function videoSettings(state) {
          return {
            videoSettings: state
          };
        },
        getTranscriptDownloadUrl: function getTranscriptDownloadUrl(state) {
          return {
            getTranscriptDownloadUrl: state
          };
        }
      }
    }
  };
});
jest.mock('./requests', function () {
  return {
    uploadAsset: function uploadAsset(args) {
      return {
        uploadAsset: args
      };
    },
    allowThumbnailUpload: function allowThumbnailUpload(args) {
      return {
        allowThumbnailUpload: args
      };
    },
    uploadThumbnail: function uploadThumbnail(args) {
      return {
        uploadThumbnail: args
      };
    },
    deleteTranscript: function deleteTranscript(args) {
      return {
        deleteTranscript: args
      };
    },
    uploadTranscript: function uploadTranscript(args) {
      return {
        uploadTranscript: args
      };
    },
    getTranscriptFile: function getTranscriptFile(args) {
      return {
        getTranscriptFile: args
      };
    },
    updateTranscriptLanguage: function updateTranscriptLanguage(args) {
      return {
        updateTranscriptLanguage: args
      };
    },
    checkTranscriptsForImport: function checkTranscriptsForImport(args) {
      return {
        checkTranscriptsForImport: args
      };
    },
    importTranscript: function importTranscript(args) {
      return {
        importTranscript: args
      };
    },
    fetchVideoFeatures: function fetchVideoFeatures(args) {
      return {
        fetchVideoFeatures: args
      };
    }
  };
});
jest.mock('../../../utils', function () {
  return {
    removeItemOnce: function removeItemOnce(args) {
      return args;
    }
  };
});
jest.mock('../../services/cms/api', function () {
  return {
    parseYoutubeId: function parseYoutubeId(args) {
      return args;
    }
  };
});
var thunkActionsKeys = (0, _keyStore["default"])(thunkActions);
var mockLanguage = 'en';
var mockFile = 'soMEtRANscRipT';
var mockFilename = 'soMEtRANscRipT.srt';
var mockThumbnail = 'sOMefILE';
var mockThumbnailResponse = {
  data: {
    image_url: 'soMEimAGEUrL'
  }
};
var thumbnailUrl = 'soMEimAGEUrL';
var mockAllowTranscriptImport = {
  data: {
    command: 'import'
  }
};
var mockVideoFeatures = {
  data: {
    allowThumbnailUpload: 'soMEbOolEAn',
    videoSharingEnabled: 'someBOoOoOlean'
  }
};
var testMetadata = {
  download_track: 'dOWNlOAdTraCK',
  download_video: 'downLoaDViDEo',
  edx_video_id: 'soMEvIDEo',
  end_time: 0,
  handout: 'hANdoUT',
  html5_sources: [],
  license: 'liCENse',
  show_captions: 'shOWcapTIONS',
  start_time: 0,
  transcripts: ['do', 're', 'mi'],
  thumbnail: 'thuMBNaIl'
};
var testState = {
  transcripts: ['la'],
  thumbnail: 'sOMefILE',
  originalThumbnail: null,
  videoId: 'soMEvIDEo'
};
var testUpload = {
  transcripts: ['la', 'en']
};
var testReplaceUpload = {
  file: mockFile,
  language: mockLanguage,
  filename: mockFilename
};
describe('video thunkActions', function () {
  var dispatch;
  var getState;
  var dispatchedAction;
  beforeEach(function () {
    dispatch = jest.fn(function (action) {
      return {
        dispatch: action
      };
    });
    getState = jest.fn(function () {
      return {
        app: {
          blockId: 'soMEBloCk',
          blockValue: {
            data: {
              metadata: _objectSpread({}, testMetadata)
            }
          },
          studioEndpointUrl: 'soMEeNDPoiNT',
          courseDetails: {
            data: {
              license: null
            }
          },
          studioView: {
            data: {
              html: 'sOMeHTml'
            }
          }
        },
        video: testState
      };
    });
  });
  describe('loadVideoData', function () {
    var dispatchedLoad;
    var dispatchedAction1;
    var dispatchedAction2;
    beforeEach(function () {
      jest.spyOn(thunkActions, thunkActionsKeys.determineVideoSources).mockReturnValue({
        videoUrl: 'videOsOurce',
        videoId: 'videOiD',
        fallbackVideos: 'fALLbACKvIDeos'
      });
      jest.spyOn(thunkActions, thunkActionsKeys.parseLicense).mockReturnValue(['liCENSEtyPe', {
        by: true,
        nc: true,
        nd: true,
        sa: false
      }]);
      jest.spyOn(thunkActions, thunkActionsKeys.parseTranscripts).mockReturnValue(testMetadata.transcripts);
      thunkActions.loadVideoData()(dispatch, getState);
      var _dispatch$mock$calls = _slicedToArray(dispatch.mock.calls, 3);
      var _dispatch$mock$calls$ = _slicedToArray(_dispatch$mock$calls[0], 1);
      dispatchedLoad = _dispatch$mock$calls$[0];
      var _dispatch$mock$calls$2 = _slicedToArray(_dispatch$mock$calls[1], 1);
      dispatchedAction1 = _dispatch$mock$calls$2[0];
      var _dispatch$mock$calls$3 = _slicedToArray(_dispatch$mock$calls[2], 1);
      dispatchedAction2 = _dispatch$mock$calls$3[0];
    });
    afterEach(function () {
      jest.restoreAllMocks();
    });
    it('dispatches fetchVideoFeatures action', function () {
      expect(dispatchedLoad).not.toEqual(undefined);
      expect(dispatchedAction1.fetchVideoFeatures).not.toEqual(undefined);
    });
    it('dispatches checkTranscriptsForImport action', function () {
      expect(dispatchedLoad).not.toEqual(undefined);
      expect(dispatchedAction2.checkTranscriptsForImport).not.toEqual(undefined);
    });
    it('dispatches actions.video.load', function () {
      expect(dispatchedLoad.load).toEqual({
        videoSource: 'videOsOurce',
        videoId: 'videOiD',
        fallbackVideos: 'fALLbACKvIDeos',
        allowVideoDownloads: testMetadata.download_video,
        transcripts: testMetadata.transcripts,
        allowTranscriptDownloads: testMetadata.download_track,
        showTranscriptByDefault: testMetadata.show_captions,
        duration: {
          startTime: testMetadata.start_time,
          stopTime: testMetadata.end_time,
          total: 0
        },
        handout: testMetadata.handout,
        licenseType: 'liCENSEtyPe',
        licenseDetails: {
          attribution: true,
          noncommercial: true,
          noDerivatives: true,
          shareAlike: false
        },
        courseLicenseType: 'liCENSEtyPe',
        courseLicenseDetails: {
          attribution: true,
          noncommercial: true,
          noDerivatives: true,
          shareAlike: false
        },
        thumbnail: testMetadata.thumbnail
      });
    });
    it('dispatches actions.video.updateField on success', function () {
      dispatch.mockClear();
      dispatchedAction1.fetchVideoFeatures.onSuccess(mockVideoFeatures);
      expect(dispatch).toHaveBeenCalledWith(_.actions.video.updateField({
        allowThumbnailUpload: mockVideoFeatures.data.allowThumbnailUpload,
        videoSharingEnabledForCourse: mockVideoFeatures.data.videoSharingEnabled
      }));
      dispatch.mockClear();
      dispatchedAction2.checkTranscriptsForImport.onSuccess(mockAllowTranscriptImport);
      expect(dispatch).toHaveBeenCalledWith(_.actions.video.updateField({
        allowTranscriptImport: true
      }));
    });
  });
  describe('determineVideoSources', function () {
    var edxVideoId = 'EDxviDEoiD';
    var youtubeId = 'yOuTuBEiD';
    var youtubeUrl = "https://youtu.be/".concat(youtubeId);
    var html5Sources = ['htmLOne', 'hTMlTwo', 'htMLthrEE'];
    describe('when edx id, youtube id and source values are null', function () {
      it('returns empty strings for ids and an empty array for sources', function () {
        expect(thunkActions.determineVideoSources({
          edxVideoId: null,
          youtubeId: null,
          html5Sources: null
        })).toEqual({
          videoUrl: '',
          videoId: '',
          fallbackVideos: []
        });
      });
    });
    describe('when there is an edx video id, youtube id and html5 sources', function () {
      it('returns all three with the youtube id wrapped in url', function () {
        expect(thunkActions.determineVideoSources({
          edxVideoId: edxVideoId,
          youtubeId: youtubeId,
          html5Sources: html5Sources
        })).toEqual({
          videoUrl: youtubeUrl,
          videoId: edxVideoId,
          fallbackVideos: html5Sources
        });
      });
    });
    describe('when there is only an edx video id', function () {
      it('returns the edx video id for video source', function () {
        expect(thunkActions.determineVideoSources({
          edxVideoId: edxVideoId,
          youtubeId: '',
          html5Sources: ''
        })).toEqual({
          videoUrl: '',
          videoId: edxVideoId,
          fallbackVideos: []
        });
      });
    });
    describe('when there is no edx video id', function () {
      it('returns the youtube url for video source and html5 sources for fallback videos', function () {
        expect(thunkActions.determineVideoSources({
          edxVideoId: '',
          youtubeId: youtubeId,
          html5Sources: html5Sources
        })).toEqual({
          videoUrl: youtubeUrl,
          videoId: '',
          fallbackVideos: html5Sources
        });
      });
    });
    describe('when there is no edx video id and no youtube id', function () {
      it('returns the first html5 source for video url and the rest for fallback videos', function () {
        expect(thunkActions.determineVideoSources({
          edxVideoId: '',
          youtubeId: '',
          html5Sources: html5Sources
        })).toEqual({
          videoUrl: 'htmLOne',
          videoId: '',
          fallbackVideos: ['hTMlTwo', 'htMLthrEE']
        });
      });
      it('returns the html5 source for video source and an array with 2 empty values for fallback videos', function () {
        expect(thunkActions.determineVideoSources({
          edxVideoId: '',
          youtubeId: '',
          html5Sources: ['htmlOne']
        })).toEqual({
          videoUrl: 'htmlOne',
          videoId: '',
          fallbackVideos: []
        });
      });
    });
    describe('when there is no edx video id, no youtube id and no html5 sources', function () {
      it('returns an empty string for video source and an array with 2 empty values for fallback videos', function () {
        expect(thunkActions.determineVideoSources({
          edxVideoId: '',
          youtubeId: '',
          html5Sources: []
        })).toEqual({
          videoUrl: '',
          videoId: '',
          fallbackVideos: []
        });
      });
    });
  });
  describe('parseTranscripts', function () {
    var testStudioViewDataWithTranscripts = "de descarga debajo del video.&#34;, &#34;value&#34;: &#34;&#34;, &#34;type&#34;: &#34;Generic&#34;, &#34;options&#34;: []}, &#34;transcripts&#34;: {&#34;explicitly_set&#34;: false, &#34;default_value&#34;: {}, &#34;field_name&#34;: &#34;transcripts&#34;, &#34;display_name&#34;: &#34;Idiomas de transcripci\\u00f3n&#34;, &#34;help&#34;: &#34;A\\u00f1ada transcripciones en diferentes idiomas. Haga clic a continuaci\\u00f3n para especificar un idioma y subir un archivo .srt de transcripci\\u00f3n para dicho idioma.&#34;, &#34;value&#34;: {&#34;aa&#34;: &#34;non_existent_dummy_file_name&#34;, &#34;ab&#34;: &#34;non_existent_dummy_file_name&#34;, &#34;ba&#34;: &#34;non_existent_dummy_file_name&#34;, &#34;en&#34;: &#34;external video-en.txt&#34;}, &#34;type&#34;: &#34;VideoTranslations&#34;, &#34;options&#34;: [], &#34;custom&#34;: true, &#34;languages&#34;: [{&#34;label&#34;: &#34;Abkhazian&#34;, &#34;code&#34;: &#34;ab&#34;}], &#34;urlRoot&#34;: &#34;/xblock/block-v1:GalileoX+XS_Mate001+3T2022+type@video+block@20bc09f5522d430f8e43c2bc377b348c/handler/studio_transcript/translation&#34;}, &#34;youtube_id_0_75&#34;: {";
    var testStudioViewData = "de descarga debajo del video.&#34;, &#34;value&#34;: &#34;&#34;, &#34;type&#34;: &#34;Generic&#34;, &#34;options&#34;: []}, &#34;transcripts&#34;: {&#34;explicitly_set&#34;: false, &#34;default_value&#34;: {}, &#34;field_name&#34;: &#34;transcripts&#34;, &#34;display_name&#34;: &#34;Idiomas de transcripci\\u00f3n&#34;, &#34;help&#34;: &#34;A\\u00f1ada transcripciones en diferentes idiomas. Haga clic a continuaci\\u00f3n para especificar un idioma y subir un archivo .srt de transcripci\\u00f3n para dicho idioma.&#34;, &#34;value&#34;: {}, &#34;type&#34;: &#34;VideoTranslations&#34;, &#34;options&#34;: [], &#34;custom&#34;: true, &#34;languages&#34;: [{&#34;label&#34;: &#34;Abkhazian&#34;, &#34;code&#34;: &#34;ab&#34;}], &#34;urlRoot&#34;: &#34;/xblock/block-v1:GalileoX+XS_Mate001+3T2022+type@video+block@20bc09f5522d430f8e43c2bc377b348c/handler/studio_transcript/translation&#34;}, &#34;youtube_id_0_75&#34;: {";
    var testBadStudioViewData = 'tHiSiSaBAdDaTa';
    it('returns an array of languages given a JSON string', function () {
      expect(thunkActions.parseTranscripts({
        transcriptsData: testStudioViewDataWithTranscripts
      })).toEqual(['aa', 'ab', 'ba', 'en']);
    });
    it('returns an empty array when there are no transcripts', function () {
      expect(thunkActions.parseTranscripts({
        transcriptsData: testStudioViewData
      })).toEqual([]);
    });
    it('returns an empty array given an unparsable JSON string', function () {
      expect(thunkActions.parseTranscripts({
        transcriptsData: testBadStudioViewData
      })).toEqual([]);
    });
  });
  describe('parseLicense', function () {
    var emptyLicenseData = null;
    var noLicense = 'sOMeHTml data-metadata &#34;license&#34; &#34;value&#34;= null, &#34;type&#34;';
    it('returns expected values for a license with no course license', function () {
      expect(thunkActions.parseLicense({
        licenseData: emptyLicenseData,
        level: 'sOMElevEL'
      })).toEqual([null, {}]);
    });
    it('returns expected values for a license with no block license', function () {
      expect(thunkActions.parseLicense({
        licenseData: noLicense,
        level: 'block'
      })).toEqual([null, {}]);
    });
    it('returns expected values for a license with all rights reserved', function () {
      var license = 'sOMeHTml data-metadata &#34;license&#34; &#34;value&#34;: &#34;all-rights-reserved&#34;, &#34;type&#34;';
      expect(thunkActions.parseLicense({
        licenseData: license,
        level: 'block'
      })).toEqual(['all-rights-reserved', {}]);
    });
    it('returns expected type and options for creative commons', function () {
      var license = 'sOMeHTml data-metadata &#34;license&#34; &#34;value&#34;: &#34;creative-commons: ver=4.0 BY NC ND&#34;, &#34;type&#34;';
      expect(thunkActions.parseLicense({
        licenseData: license,
        level: 'block'
      })).toEqual(['creative-commons', {
        by: true,
        nc: true,
        nd: true
      }, '4.0']);
    });
  });
  describe('uploadHandout', function () {
    beforeEach(function () {
      thunkActions.uploadHandout({
        file: mockFilename
      })(dispatch);
      var _dispatch$mock$calls2 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls3 = _slicedToArray(_dispatch$mock$calls2[0], 1);
      dispatchedAction = _dispatch$mock$calls3[0];
    });
    it('dispatches uploadAsset action', function () {
      expect(dispatchedAction.uploadAsset).not.toBe(undefined);
    });
    test('passes file as image prop', function () {
      expect(dispatchedAction.uploadAsset.asset).toEqual(mockFilename);
    });
    test('onSuccess: calls setSelection with camelized response.data.asset', function () {
      var handout = mockFilename;
      dispatchedAction.uploadAsset.onSuccess({
        data: {
          asset: {
            url: mockFilename
          }
        }
      });
      expect(dispatch).toHaveBeenCalledWith(_.actions.video.updateField({
        handout: handout
      }));
    });
  });
  describe('uploadThumbnail', function () {
    beforeEach(function () {
      thunkActions.uploadThumbnail({
        thumbnail: mockThumbnail
      })(dispatch, getState);
      var _dispatch$mock$calls4 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls5 = _slicedToArray(_dispatch$mock$calls4[0], 1);
      dispatchedAction = _dispatch$mock$calls5[0];
    });
    it('dispatches uploadThumbnail action', function () {
      expect(dispatchedAction.uploadThumbnail).not.toEqual(undefined);
    });
    it('dispatches actions.video.updateField on success', function () {
      dispatch.mockClear();
      dispatchedAction.uploadThumbnail.onSuccess(mockThumbnailResponse);
      expect(dispatch).toHaveBeenCalledWith(_.actions.video.updateField({
        thumbnail: thumbnailUrl
      }));
    });
  });
  describe('uploadThumbnail - emptyCanvas', function () {
    beforeEach(function () {
      thunkActions.uploadThumbnail({
        thumbnail: mockThumbnail,
        emptyCanvas: true
      })(dispatch, getState);
      var _dispatch$mock$calls6 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls7 = _slicedToArray(_dispatch$mock$calls6[0], 1);
      dispatchedAction = _dispatch$mock$calls7[0];
    });
    it('dispatches uploadThumbnail action', function () {
      expect(dispatchedAction.uploadThumbnail).not.toEqual(undefined);
    });
  });
  describe('importTranscript', function () {
    beforeEach(function () {
      thunkActions.importTranscript()(dispatch, getState);
      var _dispatch$mock$calls8 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls9 = _slicedToArray(_dispatch$mock$calls8[0], 1);
      dispatchedAction = _dispatch$mock$calls9[0];
    });
    it('dispatches uploadTranscript action', function () {
      expect(dispatchedAction.importTranscript).not.toEqual(undefined);
    });
    it('dispatches actions.video.updateField on success', function () {
      dispatch.mockClear();
      dispatchedAction.importTranscript.onSuccess();
      expect(dispatch).toHaveBeenCalledWith(_.actions.video.updateField(testUpload));
    });
  });
  describe('deleteTranscript', function () {
    beforeEach(function () {
      thunkActions.deleteTranscript({
        language: 'la'
      })(dispatch, getState);
      var _dispatch$mock$calls10 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls11 = _slicedToArray(_dispatch$mock$calls10[0], 1);
      dispatchedAction = _dispatch$mock$calls11[0];
    });
    it('dispatches deleteTranscript action', function () {
      expect(dispatchedAction.deleteTranscript).not.toEqual(undefined);
    });
    it('dispatches actions.video.updateField on success', function () {
      dispatch.mockClear();
      dispatchedAction.deleteTranscript.onSuccess();
      expect(dispatch).toHaveBeenCalledWith(_.actions.video.updateField({
        transcripts: []
      }));
    });
  });
  describe('uploadTranscript', function () {
    beforeEach(function () {
      thunkActions.uploadTranscript({
        language: mockLanguage,
        filename: mockFilename,
        file: mockFile
      })(dispatch, getState);
      var _dispatch$mock$calls12 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls13 = _slicedToArray(_dispatch$mock$calls12[0], 1);
      dispatchedAction = _dispatch$mock$calls13[0];
    });
    it('dispatches uploadTranscript action', function () {
      expect(dispatchedAction.uploadTranscript).not.toEqual(undefined);
    });
    it('dispatches actions.video.updateField on success', function () {
      dispatch.mockClear();
      dispatchedAction.uploadTranscript.onSuccess();
      expect(dispatch).toHaveBeenCalledWith(_.actions.video.updateField(testUpload));
    });
  });
  describe('updateTranscriptLanguage', function () {
    beforeEach(function () {
      thunkActions.updateTranscriptLanguage({
        newLanguageCode: mockLanguage,
        languageBeforeChange: "".concat(mockLanguage, "i")
      })(dispatch, getState);
      var _dispatch$mock$calls14 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls15 = _slicedToArray(_dispatch$mock$calls14[0], 1);
      dispatchedAction = _dispatch$mock$calls15[0];
    });
    it('dispatches uploadTranscript action', function () {
      expect(dispatchedAction.getTranscriptFile).not.toEqual(undefined);
    });
    it('dispatches actions.video.updateField on success', function () {
      dispatch.mockClear();
      dispatchedAction.getTranscriptFile.onSuccess({
        data: 'sOme StRinG Data'
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('replaceTranscript', function () {
    var spies = {};
    beforeEach(function () {
      spies.uploadTranscript = jest.spyOn(thunkActions, 'uploadTranscript').mockReturnValue(testReplaceUpload).mockName('uploadTranscript');
      thunkActions.replaceTranscript({
        newFile: mockFile,
        newFilename: mockFilename,
        language: mockLanguage
      })(dispatch, getState, spies.uploadTranscript);
      var _dispatch$mock$calls16 = _slicedToArray(dispatch.mock.calls, 1);
      var _dispatch$mock$calls17 = _slicedToArray(_dispatch$mock$calls16[0], 1);
      dispatchedAction = _dispatch$mock$calls17[0];
    });
    it('dispatches deleteTranscript action', function () {
      expect(dispatchedAction.deleteTranscript).not.toEqual(undefined);
    });
    it('dispatches actions.video.updateField and replaceTranscript success', function () {
      dispatch.mockClear();
      dispatchedAction.deleteTranscript.onSuccess();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
//# sourceMappingURL=video.test.js.map