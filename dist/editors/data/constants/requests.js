"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestStates = exports.RequestKeys = void 0;
var _utils = require("../../utils");
var RequestStates = exports.RequestStates = (0, _utils.StrictDict)({
  inactive: 'inactive',
  pending: 'pending',
  completed: 'completed',
  failed: 'failed'
});
var RequestKeys = exports.RequestKeys = (0, _utils.StrictDict)({
  fetchAssets: 'fetchAssets',
  fetchBlock: 'fetchBlock',
  fetchImages: 'fetchImages',
  fetchUnit: 'fetchUnit',
  fetchStudioView: 'fetchStudioView',
  saveBlock: 'saveBlock',
  uploadAsset: 'uploadAsset',
  allowThumbnailUpload: 'allowThumbnailUpload',
  uploadThumbnail: 'uploadThumbnail',
  uploadTranscript: 'uploadTranscript',
  deleteTranscript: 'deleteTranscript',
  fetchCourseDetails: 'fetchCourseDetails',
  updateTranscriptLanguage: 'updateTranscriptLanguage',
  getTranscriptFile: 'getTranscriptFile',
  checkTranscriptsForImport: 'checkTranscriptsForImport',
  importTranscript: 'importTranscript',
  uploadImage: 'uploadImage',
  fetchAdvancedSettings: 'fetchAdvancedSettings',
  fetchVideoFeatures: 'fetchVideoFeatures'
});
//# sourceMappingURL=requests.js.map