"use strict";
exports.__esModule = true;
var validator_module_1 = require("./validator-module");
var strings = ["Altair", "72839", "IBM"];
// Use function validate
strings.forEach(function (s) {
    console.log("\"" + s + "\" " + (validator_module_1["default"](s) ? " matches" : " does not match"));
});
