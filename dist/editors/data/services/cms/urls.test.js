"use strict";

var _urls = require("./urls");
describe('cms url methods', function () {
  var studioEndpointUrl = 'urLgoeStOstudiO';
  var blockId = 'blOckIDTeST123';
  var learningContextId = 'lEarnIngCOntextId123';
  var courseId = 'course-v1:courseId123';
  var libraryV1Id = 'library-v1:libaryId123';
  var language = 'la';
  var handout = '/aSSet@hANdoUt';
  var videoId = '123-SOmeVidEOid-213';
  var parameters = 'SomEParAMEterS';
  describe('return to learning context urls', function () {
    var unitUrl = {
      data: {
        ancestors: [{
          id: 'unItUrlTEST'
        }]
      }
    };
    it('returns the library page when given the library', function () {
      expect((0, _urls.returnUrl)({
        studioEndpointUrl: studioEndpointUrl,
        unitUrl: unitUrl,
        learningContextId: libraryV1Id
      })).toEqual("".concat(studioEndpointUrl, "/library/").concat(libraryV1Id));
    });
    it('returns url with studioEndpointUrl and unitUrl', function () {
      expect((0, _urls.returnUrl)({
        studioEndpointUrl: studioEndpointUrl,
        unitUrl: unitUrl,
        learningContextId: courseId
      })).toEqual("".concat(studioEndpointUrl, "/container/").concat(unitUrl.data.ancestors[0].id));
    });
    it('returns empty string if no unit url', function () {
      expect((0, _urls.returnUrl)({
        studioEndpointUrl: studioEndpointUrl,
        unitUrl: null,
        learningContextId: courseId
      })).toEqual('');
    });
    it('returns the library page when given the library', function () {
      expect((0, _urls.libraryV1)({
        studioEndpointUrl: studioEndpointUrl,
        learningContextId: libraryV1Id
      })).toEqual("".concat(studioEndpointUrl, "/library/").concat(libraryV1Id));
    });
    it('returns url with studioEndpointUrl and unitUrl', function () {
      expect((0, _urls.unit)({
        studioEndpointUrl: studioEndpointUrl,
        unitUrl: unitUrl
      })).toEqual("".concat(studioEndpointUrl, "/container/").concat(unitUrl.data.ancestors[0].id));
    });
  });
  describe('block', function () {
    it('returns url with studioEndpointUrl and blockId', function () {
      expect((0, _urls.block)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      })).toEqual("".concat(studioEndpointUrl, "/xblock/").concat(blockId));
    });
  });
  describe('blockAncestor', function () {
    it('returns url with studioEndpointUrl, blockId and ancestor query', function () {
      expect((0, _urls.blockAncestor)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      })).toEqual("".concat((0, _urls.block)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      }), "?fields=ancestorInfo"));
    });
  });
  describe('blockStudioView', function () {
    it('returns url with studioEndpointUrl, blockId and studio_view query', function () {
      expect((0, _urls.blockStudioView)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      })).toEqual("".concat((0, _urls.block)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      }), "/studio_view"));
    });
  });
  describe('courseAssets', function () {
    it('returns url with studioEndpointUrl and learningContextId', function () {
      expect((0, _urls.courseAssets)({
        studioEndpointUrl: studioEndpointUrl,
        learningContextId: learningContextId
      })).toEqual("".concat(studioEndpointUrl, "/assets/").concat(learningContextId, "/?page_size=500"));
    });
  });
  describe('thumbnailUpload', function () {
    it('returns url with studioEndpointUrl, learningContextId, and videoId', function () {
      expect((0, _urls.thumbnailUpload)({
        studioEndpointUrl: studioEndpointUrl,
        learningContextId: learningContextId,
        videoId: videoId
      })).toEqual("".concat(studioEndpointUrl, "/video_images/").concat(learningContextId, "/").concat(videoId));
    });
  });
  describe('videoTranscripts', function () {
    it('returns url with studioEndpointUrl and blockId', function () {
      expect((0, _urls.videoTranscripts)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      })).toEqual("".concat((0, _urls.block)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      }), "/handler/studio_transcript/translation"));
    });
  });
  describe('downloadVideoTranscriptURL', function () {
    it('returns url with studioEndpointUrl, blockId and language query', function () {
      expect((0, _urls.downloadVideoTranscriptURL)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId,
        language: language
      })).toEqual("".concat((0, _urls.videoTranscripts)({
        studioEndpointUrl: studioEndpointUrl,
        blockId: blockId
      }), "?language_code=").concat(language));
    });
  });
  describe('downloadVideoHandoutUrl', function () {
    it('returns url with studioEndpointUrl and handout', function () {
      expect((0, _urls.downloadVideoHandoutUrl)({
        studioEndpointUrl: studioEndpointUrl,
        handout: handout
      })).toEqual("".concat(studioEndpointUrl).concat(handout));
    });
  });
  describe('courseDetailsUrl', function () {
    it('returns url with studioEndpointUrl and courseKey', function () {
      expect((0, _urls.courseDetailsUrl)({
        studioEndpointUrl: studioEndpointUrl,
        learningContextId: learningContextId
      })).toEqual("".concat(studioEndpointUrl, "/settings/details/").concat(learningContextId));
    });
  });
  describe('checkTranscriptsForImport', function () {
    it('returns url with studioEndpointUrl and parameters', function () {
      expect((0, _urls.checkTranscriptsForImport)({
        studioEndpointUrl: studioEndpointUrl,
        parameters: parameters
      })).toEqual("".concat(studioEndpointUrl, "/transcripts/check?data=").concat(parameters));
    });
  });
  describe('replaceTranscript', function () {
    it('returns url with studioEndpointUrl and parameters', function () {
      expect((0, _urls.replaceTranscript)({
        studioEndpointUrl: studioEndpointUrl,
        parameters: parameters
      })).toEqual("".concat(studioEndpointUrl, "/transcripts/replace?data=").concat(parameters));
    });
  });
  describe('videoFeatures', function () {
    it('returns url with studioEndpointUrl and learningContextId', function () {
      expect((0, _urls.videoFeatures)({
        studioEndpointUrl: studioEndpointUrl,
        learningContextId: learningContextId
      })).toEqual("".concat(studioEndpointUrl, "/video_features/").concat(learningContextId));
    });
  });
});
//# sourceMappingURL=urls.test.js.map