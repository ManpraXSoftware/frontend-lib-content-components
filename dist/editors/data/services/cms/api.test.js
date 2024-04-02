"use strict";

var utils = _interopRequireWildcard(require("../../../utils"));
var api = _interopRequireWildcard(require("./api"));
var urls = _interopRequireWildcard(require("./urls"));
var _utils2 = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('../../../utils', function () {
  var camelizeMap = function camelizeMap(obj) {
    return _objectSpread(_objectSpread({}, obj), {}, {
      camelized: true
    });
  };
  return _objectSpread(_objectSpread({}, jest.requireActual('../../../utils')), {}, {
    camelize: camelizeMap,
    camelizeKeys: function camelizeKeys(list) {
      return list.map(camelizeMap);
    }
  });
});
jest.mock('./urls', function () {
  return {
    block: jest.fn().mockName('urls.block'),
    blockAncestor: jest.fn().mockName('urls.blockAncestor'),
    blockStudioView: jest.fn().mockName('urls.StudioView'),
    courseAssets: jest.fn().mockName('urls.courseAssets'),
    videoTranscripts: jest.fn().mockName('urls.videoTranscripts'),
    allowThumbnailUpload: jest.fn().mockName('urls.allowThumbnailUpload'),
    thumbnailUpload: jest.fn().mockName('urls.thumbnailUpload'),
    checkTranscriptsForImport: jest.fn().mockName('urls.checkTranscriptsForImport'),
    replaceTranscript: jest.fn().mockName('urls.replaceTranscript'),
    videoFeatures: jest.fn().mockName('urls.videoFeatures')
  };
});
jest.mock('./utils', function () {
  return {
    get: jest.fn().mockName('get'),
    post: jest.fn().mockName('post'),
    deleteObject: jest.fn().mockName('deleteObject')
  };
});
var camelize = utils.camelize;
var apiMethods = api.apiMethods;
var blockId = 'coursev1:2uX@4345432';
var learningContextId = 'demo2uX';
var studioEndpointUrl = 'hortus.coa';
var title = 'remember this needs to go into metadata to save';
describe('cms api', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('apiMethods', function () {
    describe('fetchBlockId', function () {
      it('should call get with url.blocks', function () {
        apiMethods.fetchBlockById({
          blockId: blockId,
          studioEndpointUrl: studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.block({
          blockId: blockId,
          studioEndpointUrl: studioEndpointUrl
        }));
      });
    });
    describe('fetchByUnitId', function () {
      it('should call get with url.blockAncestor', function () {
        apiMethods.fetchByUnitId({
          blockId: blockId,
          studioEndpointUrl: studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.blockAncestor({
          studioEndpointUrl: studioEndpointUrl,
          blockId: blockId
        }));
      });
    });
    describe('fetchStudioView', function () {
      it('should call get with url.blockStudioView', function () {
        apiMethods.fetchStudioView({
          blockId: blockId,
          studioEndpointUrl: studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.blockStudioView({
          studioEndpointUrl: studioEndpointUrl,
          blockId: blockId
        }));
      });
    });
    describe('fetchAssets', function () {
      it('should call get with url.courseAssets', function () {
        apiMethods.fetchAssets({
          learningContextId: learningContextId,
          studioEndpointUrl: studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.courseAssets({
          studioEndpointUrl: studioEndpointUrl,
          learningContextId: learningContextId
        }));
      });
    });
    describe('normalizeContent', function () {
      test('return value for blockType: html', function () {
        var content = 'Im baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps.';
        expect(apiMethods.normalizeContent({
          blockId: blockId,
          blockType: 'html',
          content: content,
          learningContextId: learningContextId,
          title: title
        })).toEqual({
          category: 'html',
          courseKey: learningContextId,
          data: content,
          has_changes: true,
          id: blockId,
          metadata: {
            display_name: title
          }
        });
      });
      test('return value for blockType: video', function () {
        var content = {
          videoSource: 'viDeOSouRCE',
          fallbackVideos: 'FalLBacKVidEOs',
          allowVideoDownloads: 'alLOwViDeodownLOads',
          allowVideoSharing: 'alloWviDeOshArinG',
          thumbnail: 'THUmbNaIL',
          transcripts: 'traNScRiPts',
          allowTranscriptDownloads: 'aLloWTRaNScriPtdoWnlOADS',
          duration: {
            startTime: '00:00:00',
            stopTime: '00:00:00'
          },
          showTranscriptByDefault: 'ShOWtrANscriPTBYDeFAulT',
          handout: 'HAnDOuT',
          licenseType: 'LiCeNsETYpe',
          licenseDetails: 'liCENSeDetAIls'
        };
        var html5Sources = 'hTML5souRCES';
        var edxVideoId = 'eDXviDEOid';
        var youtubeId = 'yOUtUBeid';
        var license = 'LiCEnsE';
        jest.spyOn(api, 'processVideoIds').mockReturnValue({
          html5Sources: html5Sources,
          edxVideoId: edxVideoId,
          youtubeId: youtubeId
        });
        jest.spyOn(api, 'processLicense').mockReturnValue(license);
        expect(apiMethods.normalizeContent({
          blockId: blockId,
          blockType: 'video',
          content: content,
          learningContextId: learningContextId,
          title: title
        })).toEqual({
          category: 'video',
          courseKey: learningContextId,
          display_name: title,
          id: blockId,
          metadata: {
            display_name: title,
            download_video: content.allowVideoDownloads,
            public_access: content.allowVideoSharing,
            edx_video_id: edxVideoId,
            html5_sources: html5Sources,
            youtube_id_1_0: youtubeId,
            thumbnail: content.thumbnail,
            download_track: content.allowTranscriptDownloads,
            track: '',
            show_captions: content.showTranscriptByDefault,
            handout: content.handout,
            start_time: content.duration.startTime,
            end_time: content.duration.stopTime,
            license: license
          }
        });
        jest.restoreAllMocks();
      });
      test('throw error for invalid blockType', function () {
        expect(function () {
          apiMethods.normalizeContent({
            blockType: 'somethingINVALID'
          });
        }).toThrow(TypeError);
      });
    });
    describe('saveBlock', function () {
      var content = 'Im baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps.';
      it('should call post with urls.block and normalizeContent', function () {
        apiMethods.saveBlock({
          blockId: blockId,
          blockType: 'html',
          content: content,
          learningContextId: learningContextId,
          studioEndpointUrl: studioEndpointUrl,
          title: title
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.block({
          studioEndpointUrl: studioEndpointUrl
        }), apiMethods.normalizeContent({
          blockType: 'html',
          content: content,
          blockId: blockId,
          learningContextId: learningContextId,
          title: title
        }));
      });
    });
    describe('uploadAsset', function () {
      var asset = {
        photo: 'dAta'
      };
      it('should call post with urls.courseAssets and imgdata', function () {
        var mockFormdata = new FormData();
        mockFormdata.append('file', asset);
        apiMethods.uploadAsset({
          learningContextId: learningContextId,
          studioEndpointUrl: studioEndpointUrl,
          asset: asset
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.courseAssets({
          studioEndpointUrl: studioEndpointUrl,
          learningContextId: learningContextId
        }), mockFormdata);
      });
    });
  });
  describe('loadImage', function () {
    it('loads incoming image data, replacing the dateAdded with a date field', function () {
      var date = 'Jan 20, 2022',
        time = '9:30 PM';
      var imageData = {
        some: 'image data',
        dateAdded: "".concat(date, " at ").concat(time)
      };
      expect(api.loadImage(imageData)).toEqual(_objectSpread(_objectSpread({}, imageData), {}, {
        dateAdded: new Date("".concat(date, " ").concat(time)).getTime()
      }));
    });
  });
  describe('loadImages', function () {
    it('loads a list of images into an object by id, using loadImage to translate', function () {
      var _expect$toEqual;
      var ids = ['id0', 'Id1', 'ID2', 'iD3'];
      var testData = [{
        id: ids[0],
        some: 'data'
      }, {
        id: ids[1],
        other: 'data'
      }, {
        id: ids[2],
        some: 'DATA'
      }, {
        id: ids[3],
        other: 'DATA'
      }];
      var oldLoadImage = api.loadImage;
      api.loadImage = function (imageData) {
        return {
          loadImage: imageData
        };
      };
      var out = api.loadImages(testData);
      expect(out).toEqual((_expect$toEqual = {}, _defineProperty(_expect$toEqual, ids[0], api.loadImage(camelize(testData[0]))), _defineProperty(_expect$toEqual, ids[1], api.loadImage(camelize(testData[1]))), _defineProperty(_expect$toEqual, ids[2], api.loadImage(camelize(testData[2]))), _defineProperty(_expect$toEqual, ids[3], api.loadImage(camelize(testData[3]))), _expect$toEqual));
      api.loadImage = oldLoadImage;
    });
  });
  describe('uploadThumbnail', function () {
    describe('uploadThumbnail', function () {
      var thumbnail = 'dAta';
      var videoId = 'sOmeVIDeoiD';
      it('should call post with urls.thumbnailUpload and thumbnail data', function () {
        var mockFormdata = new FormData();
        mockFormdata.append('file', thumbnail);
        apiMethods.uploadThumbnail({
          studioEndpointUrl: studioEndpointUrl,
          learningContextId: learningContextId,
          videoId: videoId,
          thumbnail: thumbnail
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.thumbnailUpload({
          studioEndpointUrl: studioEndpointUrl,
          learningContextId: learningContextId,
          videoId: videoId
        }), mockFormdata);
      });
    });
  });
  describe('videoTranscripts', function () {
    var language = 'la';
    var videoId = 'sOmeVIDeoiD';
    var youTubeId = 'SOMeyoutUBeid';
    describe('checkTranscriptsForImport', function () {
      var getJSON = "{\"locator\":\"".concat(blockId, "\",\"videos\":[{\"mode\":\"youtube\",\"video\":\"").concat(youTubeId, "\",\"type\":\"youtube\"},{\"mode\":\"edx_video_id\",\"type\":\"edx_video_id\",\"video\":\"").concat(videoId, "\"}]}");
      it('should call get with url.checkTranscriptsForImport', function () {
        apiMethods.checkTranscriptsForImport({
          studioEndpointUrl: studioEndpointUrl,
          blockId: blockId,
          videoId: videoId,
          youTubeId: youTubeId
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.checkTranscriptsForImport({
          studioEndpointUrl: studioEndpointUrl,
          parameters: encodeURIComponent(getJSON)
        }));
      });
    });
    describe('importTranscript', function () {
      var getJSON = "{\"locator\":\"".concat(blockId, "\",\"videos\":[{\"mode\":\"youtube\",\"video\":\"").concat(youTubeId, "\",\"type\":\"youtube\"}]}");
      it('should call get with url.replaceTranscript', function () {
        apiMethods.importTranscript({
          studioEndpointUrl: studioEndpointUrl,
          blockId: blockId,
          youTubeId: youTubeId
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.replaceTranscript({
          studioEndpointUrl: studioEndpointUrl,
          parameters: encodeURIComponent(getJSON)
        }));
      });
    });
    describe('uploadTranscript', function () {
      var transcript = {
        transcript: 'dAta'
      };
      it('should call post with urls.videoTranscripts and transcript data', function () {
        var mockFormdata = new FormData();
        mockFormdata.append('file', transcript);
        mockFormdata.append('edx_video_id', videoId);
        mockFormdata.append('language_code', language);
        mockFormdata.append('new_language_code', language);
        apiMethods.uploadTranscript({
          blockId: blockId,
          studioEndpointUrl: studioEndpointUrl,
          transcript: transcript,
          videoId: videoId,
          language: language
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.videoTranscripts({
          studioEndpointUrl: studioEndpointUrl,
          blockId: blockId
        }), mockFormdata);
      });
    });
    describe('transcript delete', function () {
      it('should call deleteObject with urls.videoTranscripts and transcript data', function () {
        var mockDeleteJSON = {
          data: {
            lang: language,
            edx_video_id: videoId
          }
        };
        apiMethods.deleteTranscript({
          blockId: blockId,
          studioEndpointUrl: studioEndpointUrl,
          videoId: videoId,
          language: language
        });
        expect(_utils2.deleteObject).toHaveBeenCalledWith(urls.videoTranscripts({
          studioEndpointUrl: studioEndpointUrl,
          blockId: blockId
        }), mockDeleteJSON);
      });
    });
    describe('transcript get', function () {
      it('should call get with urls.videoTranscripts and transcript data', function () {
        var mockJSON = {
          data: {
            lang: language,
            edx_video_id: videoId
          }
        };
        apiMethods.getTranscript({
          blockId: blockId,
          studioEndpointUrl: studioEndpointUrl,
          videoId: videoId,
          language: language
        });
        expect(_utils2.get).toHaveBeenCalledWith("".concat(urls.videoTranscripts({
          studioEndpointUrl: studioEndpointUrl,
          blockId: blockId
        }), "?language_code=").concat(language), mockJSON);
      });
    });
  });
  describe('processVideoIds', function () {
    var edxVideoId = 'eDXviDEoid';
    var youtubeId = 'yOuTuBeUrL';
    var youtubeUrl = "https://youtu.be/".concat(youtubeId);
    var html5Sources = ['sOuRce1', 'sourCE2'];
    afterEach(function () {
      jest.restoreAllMocks();
    });
    describe('if there is a video id', function () {
      beforeEach(function () {
        jest.spyOn(api, 'isEdxVideo').mockReturnValue(true);
        jest.spyOn(api, 'parseYoutubeId').mockReturnValue(youtubeId);
      });
      it('returns edxVideoId when there are no fallbackVideos', function () {
        expect(api.processVideoIds({
          videoUrl: '',
          fallbackVideos: [],
          videoId: edxVideoId
        })).toEqual({
          edxVideoId: edxVideoId,
          html5Sources: [],
          youtubeId: ''
        });
      });
      it('returns edxVideoId and html5Sources when there are fallbackVideos', function () {
        expect(api.processVideoIds({
          videoUrl: youtubeUrl,
          fallbackVideos: html5Sources,
          videoId: edxVideoId
        })).toEqual({
          edxVideoId: edxVideoId,
          html5Sources: html5Sources,
          youtubeId: youtubeId
        });
      });
    });
    describe('if there is a youtube url', function () {
      beforeEach(function () {
        jest.spyOn(api, 'isEdxVideo').mockReturnValue(false);
        jest.spyOn(api, 'parseYoutubeId').mockReturnValue(youtubeId);
      });
      it('returns youtubeId when there are no fallbackVideos', function () {
        expect(api.processVideoIds({
          videoUrl: youtubeUrl,
          fallbackVideos: [],
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources: [],
          youtubeId: youtubeId
        });
      });
      it('returns youtubeId and html5Sources when there are fallbackVideos', function () {
        expect(api.processVideoIds({
          videoUrl: youtubeUrl,
          fallbackVideos: html5Sources,
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources: html5Sources,
          youtubeId: youtubeId
        });
      });
    });
    describe('if the videoSource is an html5 source', function () {
      beforeEach(function () {
        jest.spyOn(api, 'isEdxVideo').mockReturnValue(false);
        jest.spyOn(api, 'parseYoutubeId').mockReturnValue(null);
      });
      it('returns html5Sources when there are no fallbackVideos', function () {
        expect(api.processVideoIds({
          videoUrl: html5Sources[0],
          fallbackVideos: [],
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources: [html5Sources[0]],
          youtubeId: ''
        });
      });
      it('returns html5Sources when there are fallbackVideos', function () {
        expect(api.processVideoIds({
          videoUrl: html5Sources[0],
          fallbackVideos: [html5Sources[1]],
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources: html5Sources,
          youtubeId: ''
        });
      });
    });
  });
  describe('isEdxVideo', function () {
    it('returns true if id is in uuid4 format', function () {
      var id = 'c2afd8c8-3329-4dfc-95be-4ee6d986c3e5';
      expect(api.isEdxVideo(id)).toEqual(true);
    });
    it('returns false if id is not in uuid4 format', function () {
      var id = 'someB-ad-Id';
      expect(api.isEdxVideo(id)).toEqual(false);
    });
  });
  describe('parseYoutubeId', function () {
    it('returns the youtube id in an url', function () {
      var id = '3_yD_cEKoCk';
      var testURLs = ['https://www.youtube.com/watch?v=3_yD_cEKoCk&feature=featured', 'https://www.youtube.com/watch?v=3_yD_cEKoCk', 'http://www.youtube.com/watch?v=3_yD_cEKoCk', '//www.youtube.com/watch?v=3_yD_cEKoCk', 'www.youtube.com/watch?v=3_yD_cEKoCk', 'https://youtube.com/watch?v=3_yD_cEKoCk', 'http://youtube.com/watch?v=3_yD_cEKoCk', '//youtube.com/watch?v=3_yD_cEKoCk', 'youtube.com/watch?v=3_yD_cEKoCk', 'https://m.youtube.com/watch?v=3_yD_cEKoCk', 'http://m.youtube.com/watch?v=3_yD_cEKoCk', '//m.youtube.com/watch?v=3_yD_cEKoCk', 'm.youtube.com/watch?v=3_yD_cEKoCk', 'https://www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'http://www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', '//www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'https://www.youtube.com/embed/3_yD_cEKoCk?autoplay=1', 'https://www.youtube.com/embed/3_yD_cEKoCk', 'http://www.youtube.com/embed/3_yD_cEKoCk', '//www.youtube.com/embed/3_yD_cEKoCk', 'www.youtube.com/embed/3_yD_cEKoCk', 'https://youtube.com/embed/3_yD_cEKoCk', 'http://youtube.com/embed/3_yD_cEKoCk', '//youtube.com/embed/3_yD_cEKoCk', 'youtube.com/embed/3_yD_cEKoCk', 'https://youtu.be/3_yD_cEKoCk?t=120', 'https://youtu.be/3_yD_cEKoCk', 'http://youtu.be/3_yD_cEKoCk', '//youtu.be/3_yD_cEKoCk', 'youtu.be/3_yD_cEKoCk'];
      testURLs.forEach(function (url) {
        expect(api.parseYoutubeId(url)).toEqual(id);
      });
    });
    it('returns null if the url is not a youtube url', function () {
      var badURL = 'https://someothersite.com/3_yD_cEKoCk';
      expect(api.parseYoutubeId(badURL)).toEqual(null);
    });
  });
  describe('processLicense', function () {
    it('returns empty string when licenseType is empty or not a valid licnese type', function () {
      expect(api.processLicense('', {})).toEqual('');
      expect(api.processLicense('LiCeNsETYpe', {})).toEqual('');
    });
    it('returns empty string when licenseType equals creative commons', function () {
      var licenseType = 'creative-commons';
      var licenseDetails = {
        attribution: true,
        noncommercial: false,
        noDerivatives: true,
        shareAlike: false
      };
      expect(api.processLicense(licenseType, licenseDetails)).toEqual('creative-commons: ver=4.0 BY ND');
    });
    it('returns empty string when licenseType equals creative commons', function () {
      var licenseType = 'all-rights-reserved';
      var licenseDetails = {};
      expect(api.processLicense(licenseType, licenseDetails)).toEqual('all-rights-reserved');
    });
  });
  describe('fetchVideoFeatures', function () {
    it('should call get with url.videoFeatures', function () {
      var args = {
        studioEndpointUrl: studioEndpointUrl,
        learningContextId: learningContextId
      };
      apiMethods.fetchVideoFeatures(_objectSpread({}, args));
      expect(_utils2.get).toHaveBeenCalledWith(urls.videoFeatures(_objectSpread({}, args)));
    });
  });
});
//# sourceMappingURL=api.test.js.map