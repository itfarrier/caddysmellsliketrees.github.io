module.exports = {
  env: {
    browser: true,
    commonjs: true,
    serviceworker: true,
    worker: true
  },
  extends: ["plugin:react/recommended", "prettier", "prettier/react"],
  globals: {
    graphql: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error"
  }
};
