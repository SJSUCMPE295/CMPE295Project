module.exports = {
    preset: 'ts-jest', // preset from ts-jest
    verbose: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs,ts,tsx}'],
    setupFiles: [
        '<rootDir>/node_modules/regenerator-runtime/runtime',
        '<rootDir>/config/polyfills.js',
    ],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>config/jest/setup.js',
    ],
    testMatch: ['<rootDir>/src/**/*.(spec|test).{js,jsx,mjs,ts,tsx}'],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx|mjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$'],
    moduleDirectories: ['src', 'src/client', 'src/server', 'src/shared', 'node_modules'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'mjs', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/__mocks__/mock-styles.ts',
    },
};
