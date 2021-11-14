"use strict";

const { buildRule } = require("../base");

module.exports = buildRule({
  baseRuleName: "eol-last",
  description: "Enforce EditorConfig rules for the newlines at the end of files",
  getESLintOption: (ecParams) => {
    if (ecParams.insert_final_newline === true) {
      return { eslintOption: "always" };
    } else if (ecParams.insert_final_newline === false) {
      return { eslintOption: "never" };
    } else {
      return {};
    }
  },
});
