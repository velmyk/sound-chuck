module.exports = {
    testMatch: ['**/__tests__/**/*.(spec|test).(j|t)s?(x)'],
    collectCoverageFrom: ['src/**/*.js', '!**/.eslintrc.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFiles: [
        'regenerator-runtime/runtime',
        'raf-polyfill',
        './jest.setup.jsx',
    ],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
