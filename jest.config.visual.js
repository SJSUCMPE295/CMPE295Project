'use strict';
const defaultConfig = require('./jest.config');
module.exports = {
    ...defaultConfig,
    testMatch: ['<rootDir>/src/**/*.snapshot*.{js,jsx,mjs,ts,tsx}'],
    moduleNameMapper: {
        ...defaultConfig.moduleNameMapper,
        '\\preview.(js)$': '<rootDir>/__mocks__/file-mock.js',
    },
};
