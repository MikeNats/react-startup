module.exports = {
    "roots": [
      "./src"
    ],
    "testResultsProcessor": "./node_modules/jest-html-reporter",
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "verbose": true,
    "globals": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    },
    "collectCoverageFrom": [
      "./src/*.{js,jsx}",
      "!**/*.test.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**"
    ]
  }