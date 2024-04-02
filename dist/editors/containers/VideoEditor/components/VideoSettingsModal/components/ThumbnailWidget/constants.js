"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.acceptedImgKeys = exports.MIN_WIDTH = exports.MIN_HEIGHT = exports.MIN_FILE_SIZE_KB = exports.MAX_WIDTH = exports.MAX_HEIGHT = exports.MAX_FILE_SIZE_MB = exports.ASPECT_RATIO_ERROR_MARGIN = exports.ASPECT_RATIO = void 0;
var _utils = require("../../../../../../utils");
var acceptedImgKeys = exports.acceptedImgKeys = (0, _utils.StrictDict)({
  gif: '.gif',
  jpg: '.jpg',
  jpeg: '.jpeg',
  png: '.png',
  bmp: '.bmp',
  bmp2: '.bmp2'
});
var MAX_FILE_SIZE_MB = exports.MAX_FILE_SIZE_MB = 2000000;
var MIN_FILE_SIZE_KB = exports.MIN_FILE_SIZE_KB = 2000;
var MAX_WIDTH = exports.MAX_WIDTH = 1280;
var MAX_HEIGHT = exports.MAX_HEIGHT = 720;
var MIN_WIDTH = exports.MIN_WIDTH = 640;
var MIN_HEIGHT = exports.MIN_HEIGHT = 360;
var ASPECT_RATIO = exports.ASPECT_RATIO = 1.7777777777777777777;
var ASPECT_RATIO_ERROR_MARGIN = exports.ASPECT_RATIO_ERROR_MARGIN = 0.1;
var _default = exports["default"] = {
  acceptedImgKeys: acceptedImgKeys,
  MAX_FILE_SIZE_MB: MAX_FILE_SIZE_MB,
  MIN_FILE_SIZE_KB: MIN_FILE_SIZE_KB,
  MAX_WIDTH: MAX_WIDTH,
  MAX_HEIGHT: MAX_HEIGHT,
  MIN_WIDTH: MIN_WIDTH,
  MIN_HEIGHT: MIN_HEIGHT,
  ASPECT_RATIO: ASPECT_RATIO,
  ASPECT_RATIO_ERROR_MARGIN: ASPECT_RATIO_ERROR_MARGIN
};
//# sourceMappingURL=constants.js.map