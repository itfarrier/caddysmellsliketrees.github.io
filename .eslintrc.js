module.exports = {
  env: {
    browser: true,
    commonjs: true,
    serviceworker: true
  },
  extends: ["plugin:react/recommended", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaVersion: 2017,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    codeFrame: false,
    sourceType: "module"
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error"
  }
};
