"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageResponse = exports["default"] = void 0;
/* eslint-disable */
// ---
// metadata:
//     display_name: Image Mapped Input
//     markdown: !!null
// data:   |
var imageResponse = exports.imageResponse = "<problem>\n        <p>\n            In an image mapped input problem, also known as a \"pointing on a picture\" problem, students click inside a defined region in an image. You define this region by including coordinates in the body of the problem. You can define one rectangular region,\n            multiple rectangular regions, or one non-rectangular region. For more information, see\n            <a href=\"https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/image_mapped_input.html\" target=\"_blank\">Image Mapped Input Problem</a>\n            in\n            <i>Building and Running an edx Course</i>.\n        </p>\n        <p>When you add the problem, be sure to select\n            <strong>Settings</strong>\n            to specify a\n            <strong>Display Name</strong>\n            and other values that apply.</p>\n        <p>You can use the following example problem as a model.</p>\n        <imageresponse>\n            <p>What country is home to the Great Pyramid of Giza as well as the cities of Cairo and Memphis? Click the country on the map below.</p>\n            <imageinput src=\"https://studio.edx.org/c4x/edX/DemoX/asset/Africa.png\" width=\"600\" height=\"638\" rectangle=\"(338,98)-(412,168)\" alt=\"Map of Africa\"/>\n            <solution>\n                <div class=\"detailed-solution\">\n                    <p>Explanation</p>\n                    <p>Egypt is home to not only the Pyramids, Cairo, and Memphis, but also the Sphinx and the ancient Royal Library of Alexandria.</p>\n                </div>\n            </solution>\n        </imageresponse>\n    </problem>";
var _default = exports["default"] = imageResponse;
//# sourceMappingURL=imageresponse.js.map