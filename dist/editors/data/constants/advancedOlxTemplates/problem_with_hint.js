"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.problemWithHint = exports["default"] = void 0;
/* eslint-disable */
// ---
// metadata:
//     display_name: Problem with Adaptive Hint
//     markdown: !!null
// data: |
var problemWithHint = exports.problemWithHint = "<problem>\n    <text>\n        <p><h4>Problem With Adaptive Hint</h4></p>\n        <p>This problem demonstrates a question with hints, based on using the <tt class=\"tt\">hintfn</tt> method. </p>\n\n        <customresponse cfn=\"test_str\" expect=\"python\">\n            <script type=\"text/python\" system_path=\"python_lib\">\n\ndef test_str(expect, ans):\n    print(expect, ans)\n    ans = ans.strip(\"'\")\n    ans = ans.strip('\"')\n    return expect == ans.lower()\n\ndef hint_fn(answer_ids, student_answers, new_cmap, old_cmap):\n    aid = answer_ids[0]\n    ans = str(student_answers[aid]).lower()\n    print('hint_fn called, ans=', ans)\n    hint = ''\n    if 'java' in ans:\n        hint = 'that is only good for drinking'\n    elif 'perl' in ans:\n        hint = 'not that rich'\n    elif 'pascal' in ans:\n        hint = 'that is a beatnick language'\n    elif 'fortran' in ans:\n        hint = 'those were the good days'\n    elif 'clu' in ans:\n        hint = 'you must be invariant'\n    if hint:\n        hint = \"&lt;font color='blue'&gt;Hint: {0}&lt;/font&gt;\".format(hint)\n        new_cmap.set_hint_and_mode(aid,hint,'always')\n\n            </script>\n            <label>What is the best programming language that exists today? You may enter your answer in upper or lower case, with or without quotes.</label>\n            <textline correct_answer=\"python\"/>\n            <hintgroup hintfn=\"hint_fn\"/>\n        </customresponse>\n    </text>\n</problem>";
var _default = exports["default"] = problemWithHint;
//# sourceMappingURL=problem_with_hint.js.map