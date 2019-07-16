const { defaults } = require('ts-jest/presets')

module.exports = {
  ...defaults,
  verbose: true,
  preset: 'react-native',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    ...defaults.transform,
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  globals: {
    "ts-jest": {
      babelConfig: true,
      diagnostics: {
        ignoreCodes: [2307, 7016]
      },
      tsConfig: "./tsconfig.jest.json"
    }
  },
  modulePaths: [
    "<rootDir>"
  ],
  cacheDirectory: ".jest/cache",
  transformIgnorePatterns: [
    `node_modules/(?!(jest-)?${[
      'react-native',
      '@react-native-community',
      'react-navigation-animated-switch',
      'react-native-gesture-handler',
      '@react-navigation.*'
    ].join('|')})/`
  ],
  setupFiles: [
    "<rootDir>/node_modules/react-native/jest/setup",
    "<rootDir>/node_modules/react-native-gesture-handler/jestSetup"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest/setup.js"
  ]
}
