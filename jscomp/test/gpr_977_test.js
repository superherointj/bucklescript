'use strict';

var Mt = require("./mt.js");
var Int32 = require("../../lib/js/int32.js");

var suites = /* record */[/* contents */"[]"];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: "::",
    Arg0: /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  Arg0: x,
                  Arg1: y
                };
        })
    ],
    Arg1: suites[0]
  };
  return /* () */0;
}

function f(x) {
  for(var i = 0; i <= 100; ++i){
    console.log(".");
  }
  return -x | 0;
}

function int32_f(x) {
  for(var i = 0; i <= 100; ++i){
    console.log(".");
  }
  return -x | 0;
}

function nint32_f(x) {
  for(var i = 0; i <= 100; ++i){
    console.log(".");
  }
  return -x;
}

var u = f(-2147483648);

eq("File \"gpr_977_test.ml\", line 32, characters 5-12", -2147483648, u);

eq("File \"gpr_977_test.ml\", line 33, characters 5-12", Int32.min_int, int32_f(Int32.min_int));

eq("File \"gpr_977_test.ml\", line 34, characters 5-12", nint32_f(-2147483648), 2147483648);

Mt.from_pair_suites("Gpr_977_test", suites[0]);

var min_32_int = -2147483648;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f = f;
exports.int32_f = int32_f;
exports.nint32_f = nint32_f;
exports.min_32_int = min_32_int;
exports.u = u;
/* u Not a pure module */
