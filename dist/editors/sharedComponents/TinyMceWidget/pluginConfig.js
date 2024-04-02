"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../../utils");
var _tinyMCE = require("../../data/constants/tinyMCE");
var mapToolbars = function mapToolbars(toolbars) {
  return toolbars.map(function (toolbar) {
    return toolbar.join(' ');
  }).join(' | ');
};
var pluginConfig = function pluginConfig(_ref) {
  var isLibrary = _ref.isLibrary,
    placeholder = _ref.placeholder,
    editorType = _ref.editorType;
  var image = isLibrary ? '' : _tinyMCE.plugins.image;
  var imageTools = isLibrary ? '' : _tinyMCE.plugins.imagetools;
  var imageUploadButton = isLibrary ? '' : _tinyMCE.buttons.imageUploadButton;
  var editImageSettings = isLibrary ? '' : _tinyMCE.buttons.editImageSettings;
  var codePlugin = editorType === 'text' ? _tinyMCE.plugins.code : '';
  var codeButton = editorType === 'text' ? _tinyMCE.buttons.code : '';
  var labelButton = editorType === 'question' ? _tinyMCE.buttons.customLabelButton : '';
  var quickToolbar = editorType === 'expandable' ? _tinyMCE.plugins.quickbars : '';
  var inline = editorType === 'expandable';
  var toolbar = editorType !== 'expandable';
  return (0, _utils.StrictDict)({
    plugins: [_tinyMCE.plugins.link, _tinyMCE.plugins.lists, _tinyMCE.plugins.codesample, _tinyMCE.plugins.emoticons, _tinyMCE.plugins.table, _tinyMCE.plugins.hr, _tinyMCE.plugins.charmap, codePlugin, _tinyMCE.plugins.autoresize, image, imageTools, quickToolbar].join(' '),
    menubar: false,
    toolbar: toolbar ? mapToolbars([[_tinyMCE.buttons.undo, _tinyMCE.buttons.redo], [_tinyMCE.buttons.formatSelect], [labelButton], [_tinyMCE.buttons.bold, _tinyMCE.buttons.italic, _tinyMCE.buttons.underline, _tinyMCE.buttons.foreColor, _tinyMCE.buttons.backColor], [_tinyMCE.buttons.align.left, _tinyMCE.buttons.align.center, _tinyMCE.buttons.align.right, _tinyMCE.buttons.align.justify], [_tinyMCE.buttons.bullist, _tinyMCE.buttons.numlist, _tinyMCE.buttons.outdent, _tinyMCE.buttons.indent], [imageUploadButton, _tinyMCE.buttons.link, _tinyMCE.buttons.unlink, _tinyMCE.buttons.blockQuote, _tinyMCE.buttons.codeBlock], [_tinyMCE.buttons.table, _tinyMCE.buttons.emoticons, _tinyMCE.buttons.charmap, _tinyMCE.buttons.hr], [_tinyMCE.buttons.removeFormat, codeButton]]) : false,
    imageToolbar: mapToolbars([
    // [buttons.rotate.left, buttons.rotate.right],
    // [buttons.flip.horiz, buttons.flip.vert],
    [editImageSettings]]),
    quickbarsInsertToolbar: toolbar ? false : mapToolbars([[_tinyMCE.buttons.undo, _tinyMCE.buttons.redo], [_tinyMCE.buttons.formatSelect], [_tinyMCE.buttons.bold, _tinyMCE.buttons.italic, _tinyMCE.buttons.underline, _tinyMCE.buttons.foreColor], [_tinyMCE.buttons.align.justify, _tinyMCE.buttons.bullist, _tinyMCE.buttons.numlist], [imageUploadButton, _tinyMCE.buttons.blockQuote, _tinyMCE.buttons.codeBlock], [_tinyMCE.buttons.table, _tinyMCE.buttons.emoticons, _tinyMCE.buttons.charmap, _tinyMCE.buttons.removeFormat]]),
    quickbarsSelectionToolbar: toolbar ? false : mapToolbars([[_tinyMCE.buttons.undo, _tinyMCE.buttons.redo], [_tinyMCE.buttons.formatSelect], [_tinyMCE.buttons.bold, _tinyMCE.buttons.italic, _tinyMCE.buttons.underline, _tinyMCE.buttons.foreColor], [_tinyMCE.buttons.align.justify, _tinyMCE.buttons.bullist, _tinyMCE.buttons.numlist], [imageUploadButton, _tinyMCE.buttons.blockQuote, _tinyMCE.buttons.codeBlock], [_tinyMCE.buttons.table, _tinyMCE.buttons.emoticons, _tinyMCE.buttons.charmap, _tinyMCE.buttons.removeFormat]]),
    config: {
      branding: false,
      height: '100%',
      menubar: false,
      toolbar_mode: 'sliding',
      toolbar_sticky: true,
      toolbar_sticky_offset: 76,
      relative_urls: true,
      convert_urls: false,
      placeholder: placeholder,
      inline: inline
    }
  });
};
var _default = exports["default"] = pluginConfig;
//# sourceMappingURL=pluginConfig.js.map