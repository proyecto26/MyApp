const { defaults } = require('ts-jest/presets')

module.exports = {
  ...defaults,
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    ...defaults.transform,
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsConfig: "./tsconfig.jest.json"
    }
  },
  modulePaths: [
    "<rootDir>"
  ],
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  cacheDirectory: ".jest/cache",
  transformIgnorePatterns: [
    `node_modules/(?!(jest-)?${[
      'react-native',
      '@react-native-community',
      'react-navigation-animated-switch',
      'react-native-gesture-handler',
      'react-navigation.*',
      '@react-navigation.*'
    ].join('|')})`
  ],
  setupFiles: [
    "<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest/setup.js"
  ]
}
