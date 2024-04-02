"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoTranscripts = exports.videoFeatures = exports.unit = exports.thumbnailUpload = exports.returnUrl = exports.replaceTranscript = exports.libraryV1 = exports.downloadVideoTranscriptURL = exports.downloadVideoHandoutUrl = exports.courseDetailsUrl = exports.courseAssets = exports.courseAdvanceSettings = exports.checkTranscriptsForImport = exports.blockStudioView = exports.blockAncestor = exports.block = void 0;
var libraryV1 = exports.libraryV1 = function libraryV1(_ref) {
  var studioEndpointUrl = _ref.studioEndpointUrl,
    learningContextId = _ref.learningContextId;
  return "".concat(studioEndpointUrl, "/library/").concat(learningContextId);
};
var unit = exports.unit = function unit(_ref2) {
  var studioEndpointUrl = _ref2.studioEndpointUrl,
    unitUrl = _ref2.unitUrl;
  return "".concat(studioEndpointUrl, "/container/").concat(unitUrl.data.ancestors[0].id);
};
var returnUrl = exports.returnUrl = function returnUrl(_ref3) {
  var studioEndpointUrl = _ref3.studioEndpointUrl,
    unitUrl = _ref3.unitUrl,
    learningContextId = _ref3.learningContextId;
  if (learningContextId && learningContextId.includes('library-v1')) {
    // when the learning context is a v1 library, return to the library page
    return libraryV1({
      studioEndpointUrl: studioEndpointUrl,
      learningContextId: learningContextId
    });
  }
  // when the learning context is a course, return to the unit page
  return unitUrl ? unit({
    studioEndpointUrl: studioEndpointUrl,
    unitUrl: unitUrl
  }) : '';
};
var block = exports.block = function block(_ref4) {
  var studioEndpointUrl = _ref4.studioEndpointUrl,
    blockId = _ref4.blockId;
  return "".concat(studioEndpointUrl, "/xblock/").concat(blockId);
};
var blockAncestor = exports.blockAncestor = function blockAncestor(_ref5) {
  var studioEndpointUrl = _ref5.studioEndpointUrl,
    blockId = _ref5.blockId;
  return "".concat(block({
    studioEndpointUrl: studioEndpointUrl,
    blockId: blockId
  }), "?fields=ancestorInfo");
};
var blockStudioView = exports.blockStudioView = function blockStudioView(_ref6) {
  var studioEndpointUrl = _ref6.studioEndpointUrl,
    blockId = _ref6.blockId;
  return "".concat(block({
    studioEndpointUrl: studioEndpointUrl,
    blockId: blockId
  }), "/studio_view");
};
var courseAssets = exports.courseAssets = function courseAssets(_ref7) {
  var studioEndpointUrl = _ref7.studioEndpointUrl,
    learningContextId = _ref7.learningContextId;
  return "".concat(studioEndpointUrl, "/assets/").concat(learningContextId, "/?page_size=500");
};
var thumbnailUpload = exports.thumbnailUpload = function thumbnailUpload(_ref8) {
  var studioEndpointUrl = _ref8.studioEndpointUrl,
    learningContextId = _ref8.learningContextId,
    videoId = _ref8.videoId;
  return "".concat(studioEndpointUrl, "/video_images/").concat(learningContextId, "/").concat(videoId);
};
var videoTranscripts = exports.videoTranscripts = function videoTranscripts(_ref9) {
  var studioEndpointUrl = _ref9.studioEndpointUrl,
    blockId = _ref9.blockId;
  return "".concat(block({
    studioEndpointUrl: studioEndpointUrl,
    blockId: blockId
  }), "/handler/studio_transcript/translation");
};
var downloadVideoTranscriptURL = exports.downloadVideoTranscriptURL = function downloadVideoTranscriptURL(_ref10) {
  var studioEndpointUrl = _ref10.studioEndpointUrl,
    blockId = _ref10.blockId,
    language = _ref10.language;
  return "".concat(videoTranscripts({
    studioEndpointUrl: studioEndpointUrl,
    blockId: blockId
  }), "?language_code=").concat(language);
};
var downloadVideoHandoutUrl = exports.downloadVideoHandoutUrl = function downloadVideoHandoutUrl(_ref11) {
  var studioEndpointUrl = _ref11.studioEndpointUrl,
    handout = _ref11.handout;
  return "".concat(studioEndpointUrl).concat(handout);
};
var courseDetailsUrl = exports.courseDetailsUrl = function courseDetailsUrl(_ref12) {
  var studioEndpointUrl = _ref12.studioEndpointUrl,
    learningContextId = _ref12.learningContextId;
  return "".concat(studioEndpointUrl, "/settings/details/").concat(learningContextId);
};
var checkTranscriptsForImport = exports.checkTranscriptsForImport = function checkTranscriptsForImport(_ref13) {
  var studioEndpointUrl = _ref13.studioEndpointUrl,
    parameters = _ref13.parameters;
  return "".concat(studioEndpointUrl, "/transcripts/check?data=").concat(parameters);
};
var replaceTranscript = exports.replaceTranscript = function replaceTranscript(_ref14) {
  var studioEndpointUrl = _ref14.studioEndpointUrl,
    parameters = _ref14.parameters;
  return "".concat(studioEndpointUrl, "/transcripts/replace?data=").concat(parameters);
};
var courseAdvanceSettings = exports.courseAdvanceSettings = function courseAdvanceSettings(_ref15) {
  var studioEndpointUrl = _ref15.studioEndpointUrl,
    learningContextId = _ref15.learningContextId;
  return "".concat(studioEndpointUrl, "/api/contentstore/v0/advanced_settings/").concat(learningContextId);
};
var videoFeatures = exports.videoFeatures = function videoFeatures(_ref16) {
  var studioEndpointUrl = _ref16.studioEndpointUrl,
    learningContextId = _ref16.learningContextId;
  return "".concat(studioEndpointUrl, "/video_features/").concat(learningContextId);
};
//# sourceMappingURL=urls.js.map