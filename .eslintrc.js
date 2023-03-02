module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["@react-native-community", "prettier", "airbnb-base"],
  plugins: ["react", "react-hooks", "prettier", "@typescript-eslint/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};