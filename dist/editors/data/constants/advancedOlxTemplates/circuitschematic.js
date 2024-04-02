"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.circuitSchematic = void 0;
/* eslint-disable */
// ---
// metadata:
//     display_name: Circuit Schematic Builder
//     markdown: !!null
// data: |
var circuitSchematic = exports.circuitSchematic = "<problem>\n    <p>\n        Circuit schematic problems allow students to create virtual circuits by\n        arranging elements such as voltage sources, capacitors, resistors, and\n        MOSFETs on an interactive grid. The system evaluates a DC, AC, or\n        transient analysis of the circuit.\n    </p>\n    <p>\n        For more information, see\n        <a href=\"https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/circuit_schematic_builder.html\" target=\"_blank\">\n        Circuit Schematic Builder Problem</a> in <i>Building and Running an edX Course</i>.\n    </p>\n    <p>\n        When you add the problem, be sure to select <strong>Settings</strong>\n        to specify a <strong>Display Name</strong> and other values that apply.\n    </p>\n    <p>You can use the following example problems as models.</p>\n\n    <schematicresponse>\n        <p>Make a voltage divider that splits the provided voltage evenly.</p>\n        <center>\n            <schematic height=\"500\" width=\"600\" parts=\"g,r\" analyses=\"dc\"\n            initial_value='[[\"v\",[168,144,0],{\"value\":\"dc(1)\",\"_json_\":0},[\"1\",\"0\"]],[\"r\",[296,120,0],{\"r\":\"1\",\"_json_\":1},[\"1\",\"output\"]],[\"L\",[296,168,3],{\"label\":\"output\",\"_json_\":2},[\"output\"]],[\"w\",[296,216,168,216]],[\"w\",[168,216,168,192]],[\"w\",[168,144,168,120]],[\"w\",[168,120,296,120]],[\"g\",[168,216,0],{\"_json_\":7},[\"0\"]],[\"view\",-67.49999999999994,-78.49999999999994,1.6000000000000003,\"50\",\"10\",\"1G\",null,\"100\",\"1\",\"1000\"]]'/>\n        </center>\n        <answer type=\"loncapa/python\">\n\ndc_value = \"dc analysis not found\"\nfor response in submission[0]:\n    if response[0] == 'dc':\n        for node in response[1:]:\n            dc_value = node['output']\n\nif dc_value == .5:\n    correct = ['correct']\nelse:\n    correct = ['incorrect']\n\n        </answer>\n        <solution>\n            <div class=\"detailed-solution\">\n                <p>Explanation</p>\n                <p>\n                    You can form a voltage divider that evenly divides the input\n                    voltage with two identically valued resistors, with the sampled\n                    voltage taken in between the two.\n                </p>\n                <p><img src=\"/static/images/voltage_divider.png\" alt=\"\"/></p>\n            </div>\n        </solution>\n    </schematicresponse>\n\n    <schematicresponse>\n        <p>Make a high-pass filter.</p>\n        <center>\n            <schematic height=\"500\" width=\"600\" parts=\"g,r,s,c\" analyses=\"ac\"\n            submit_analyses='{\"ac\":[[\"NodeA\",1,9]]}'\n            initial_value='[[\"v\",[160,152,0],{\"name\":\"v1\",\"value\":\"sin(0,1,1,0,0)\",\"_json_\":0},[\"1\",\"0\"]],[\"w\",[160,200,240,200]],[\"g\",[160,200,0],{\"_json_\":2},[\"0\"]],[\"L\",[240,152,3],{\"label\":\"NodeA\",\"_json_\":3},[\"NodeA\"]],[\"s\",[240,152,0],{\"color\":\"cyan\",\"offset\":\"0\",\"_json_\":4},[\"NodeA\"]],[\"view\",64.55878906250004,54.114697265625054,2.5000000000000004,\"50\",\"10\",\"1G\",null,\"100\",\"1\",\"1000\"]]'/>        </center>\n        <answer type=\"loncapa/python\">\n\nac_values = None\nfor response in submission[0]:\n    if response[0] == 'ac':\n        for node in response[1:]:\n            ac_values = node['NodeA']\nprint \"the ac analysis value:\", ac_values\nif ac_values == None:\n    correct = ['incorrect']\nelif ac_values[0][1] &lt; ac_values[1][1]:\n    correct = ['correct']\nelse:\n    correct = ['incorrect']\n\n        </answer>\n        <solution>\n            <div class=\"detailed-solution\">\n                <p>Explanation</p>\n                <p>\n                    You can form a simple high-pass filter without any further\n                    constraints by simply putting a resistor in series with a\n                    capacitor. The actual values of the components do not really\n                    matter in this problem.\n                </p>\n                <p><img src=\"/static/images/high_pass_filter.png\" alt=\"\"/></p>\n            </div>\n        </solution>\n    </schematicresponse>\n</problem>";
var _default = exports["default"] = circuitSchematic;
//# sourceMappingURL=circuitschematic.js.map