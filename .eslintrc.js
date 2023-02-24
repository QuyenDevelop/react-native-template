module.exports = {
  root: true,
  extends: ["@react-native-community"],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    quotes: [2, "double"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        endOfLine: "auto",
        tabWidth: 2,
        semi: true,
        trailingComma: "es6",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "avoid",
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
