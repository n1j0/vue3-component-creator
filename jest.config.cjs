module.exports = {
    clearMocks: true,

    // do not use coverage as default to not slow down tests, use `--coverage` param in npm script instead
    collectCoverage: false,

    collectCoverageFrom: [
        'tests/**/*.{js,ts}',
    ],

    coverageDirectory: 'coverage',

    coverageProvider: 'v8',

    testMatch: ['**/?(*.)+(test).(js|ts)'],

    transform: {
        '^.+\\.(js)$': 'babel-jest',
        '.*\\.(ts)$': 'ts-jest',
    },
}
