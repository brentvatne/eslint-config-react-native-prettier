module.exports = {
  "extends": [
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "plugins": [
    "flowtype",
    "react",
    "prettier"
  ],
  "globals": {
    "document": false
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true
    }
  },
  "env": {
    "jest": true,
    "node": true
  },
  "rules": {
    "no-unused-vars": 1,
    "no-duplicate-imports": 0,
    "import/no-duplicates": 2,
    "import/named": 0,
    "import/no-unresolved": 0,
    "react/prop-types": [1, { "skipUndeclared": true }],
    "react/display-name": 0,
    "prettier/prettier": ["error", {
      "tabWidth": 2,
      "printWidth": 80,
      "singleQuote": true,
      "jsxBracketSameLine": true,
      "trailingComma": "es5"
    }]
  }
};
