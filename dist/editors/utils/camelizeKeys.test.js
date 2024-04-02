"use strict";

var _index = require("./index");
var snakeCaseObject = {
  some_attribute: {
    another_attribute: [{
      a_list: 'a lIsT'
    }, {
      of_attributes: 'iN diFferent'
    }, {
      different_cases: 'to Test'
    }]
  },
  a_final_attribute: null,
  a_last_one: undefined
};
var camelCaseObject = {
  someAttribute: {
    anotherAttribute: [{
      aList: 'a lIsT'
    }, {
      ofAttributes: 'iN diFferent'
    }, {
      differentCases: 'to Test'
    }]
  },
  aFinalAttribute: null,
  aLastOne: undefined
};
describe('camelizeKeys', function () {
  it('converts keys of objects to be camelCase', function () {
    expect((0, _index.camelizeKeys)(snakeCaseObject)).toEqual(camelCaseObject);
  });
});
//# sourceMappingURL=camelizeKeys.test.js.map