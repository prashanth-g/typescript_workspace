import validate from "./validator-module";

let strings = ["Altair", "72839", "IBM"];

// Use function validate
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
});