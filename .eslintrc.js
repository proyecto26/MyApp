module.exports = {
  "env": {
    "react-native/react-native": true,
    "es6": true,
    "jest": true
  },
  "extends": ["eslint:recommended", "plugin:react-native/all"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "require": false,
    "module": false,
    "Promise": false,
    "device": false,
    "element": false,
    "jasmine": false,
    "by": false,
    "Set": false,
    "fetch": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "react-native"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
  }
};