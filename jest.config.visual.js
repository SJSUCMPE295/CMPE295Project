'use strict';
const defaultConfig = require('./jest.config');
module.exports = {
    ...defaultConfig,
    roots: ['<rootDir>/.storybook'],
    testMatch: ['**/.storybook/*.spec.[jt]s?(x)'],
    moduleNameMapper: {
        ...defaultConfig.moduleNameMapper,
        '\\preview.(js)$': '<rootDir>/__mocks__/file-mock.js',
    },
};
