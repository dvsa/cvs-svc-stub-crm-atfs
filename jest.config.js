module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        "<rootDir>/src",
        "<rootDir>/tests"
    ],
    testMatch: [
        "**/*.*Test.ts"
    ],
    setupFiles: [
        "jest-plugin-context/setup"
    ],
    moduleFileExtensions: ["js", "ts"],
    testResultsProcessor: "jest-sonar-reporter",
    transform: {
        "^.+\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    }
}
