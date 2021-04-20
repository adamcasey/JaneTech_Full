module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    before: "readonly",
    cy: "readonly",
    after: "readonly",
    Cypress: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  // Ignore local files containing 'backup' in the name
  ignorePatterns: ["*backup*"],
  rules: {
    camelcase: 0,
    "no-alert": 0,
    "no-plusplus": 0,
    "quote-props": 0,
    "class-methods-use-this": 0,
    "no-restricted-properties": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "import/no-named-as-default": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/state-in-constructor": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
    "react/sort-comp": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "arrow-parens": 0,
    "react/jsx-curly-newline": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["CustomInputLabel"],
        labelAttributes: ["label"],
        controlComponents: ["CustomInput"],
        depth: 3,
      },
    ],
    // for redux thunk ease-of-use:
    "arrow-body-style": 0,
    // temporarily:
    "no-console": 0,
  },
};
