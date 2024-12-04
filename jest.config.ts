import type {Config} from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
})

const config: Config = {

    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",

    // The test environment that will be used for testing
    testEnvironment: "jsdom",
};

export default createJestConfig(config);
