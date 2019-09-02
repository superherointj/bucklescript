'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");

var v = /* record */[
  /* syntax */undefined,
  /* imports */0,
  /* file_options */0,
  /* package */0,
  /* messages */0,
  /* enums */0,
  /* extends */0
];

var u_v = /* record */[
  /* syntax */undefined,
  /* imports */0,
  /* file_options */0,
  /* package */0,
  /* messages */0,
  /* enums */0,
  /* extends */0
];

function f(g, h) {
  var init = Curry._1(g, h);
  return /* record */[
          /* syntax */init[/* syntax */0],
          /* imports */0,
          /* file_options */init[/* file_options */2],
          /* package */init[/* package */3],
          /* messages */init[/* messages */4],
          /* enums */init[/* enums */5],
          /* extends */init[/* extends */6]
        ];
}

var suites = /* constructor */{
  tag: "::",
  Arg0: /* tuple */[
    "eq_with",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                Arg0: v,
                Arg1: u_v
              };
      })
  ],
  Arg1: "[]"
};

Mt.from_pair_suites("Record_with_test", suites);

var uv = /* record */[
  /* syntax */undefined,
  /* imports */1,
  /* file_options */0,
  /* package */0,
  /* messages */0,
  /* enums */0,
  /* extends */0
];

exports.v = v;
exports.uv = uv;
exports.u_v = u_v;
exports.f = f;
exports.suites = suites;
/*  Not a pure module */
