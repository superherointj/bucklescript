'use strict';

var Mt = require("./mt.js");
var Fs = require("fs");
var Path = require("path");

var suites = /* record */[/* contents */"[]"];

var test_id = /* record */[/* contents */0];

function eq(loc, param) {
  var y = param[1];
  var x = param[0];
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

var match = typeof __filename === "undefined" ? undefined : __filename;

var current_file = match !== undefined ? match : "<Not Node JS>";

var match$1 = typeof __dirname === "undefined" ? undefined : __dirname;

var current_dir_name = match$1 !== undefined ? match$1 : "<Not Node Js>";

Fs.readFileSync(current_file, "utf8");

Fs.readdirSync(current_dir_name);

var pathobj = Path.parse(current_dir_name);

var match$2 = typeof module === "undefined" ? undefined : module;

if (match$2 !== undefined) {
  console.log(/* tuple */[
        match$2.id,
        match$2.paths
      ]);
  eq("File \"fs_test.ml\", line 45, characters 7-14", /* tuple */[
        pathobj.name,
        "test"
      ]);
}

Mt.from_pair_suites("Fs_test", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/* match Not a pure module */
