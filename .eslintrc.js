// ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true,
    "vue/setup-compiler-macros": true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],

  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "vue/multi-word-component-names": "off",
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],

  ignorePatterns: ["auto-imports.d.ts", "components.d.ts"],

  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "at-rule-no-unknown": "off",
  },
});
