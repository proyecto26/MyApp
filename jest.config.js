const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  verbose: true,
  preset: 'react-native',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: {
        ignoreCodes: [2307, 7016],
      },
      tsconfig: './tsconfig.jest.json',
    },
  },
  modulePaths: ['<rootDir>'],
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: [
    `node_modules/(?!(jest-)?${[
      'react-native.*',
      '@react-native-community',
      'react-navigation-animated-switch',
      '@react-navigation.*',
    ].join('|')})/`,
  ],
  setupFiles: [
    '<rootDir>/node_modules/react-native/jest/setup',
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
}
