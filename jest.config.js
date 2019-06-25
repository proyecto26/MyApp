module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  cacheDirectory: ".jest/cache",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-navigation|react-native-gesture-handler|@react-navigation.*)"
  ],
  setupFiles: [
    "<rootDir>/jest/setup.ts",
    "<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js"
  ]
}
