module.exports = {
    "rootDir": './../',
    globals: {
        "vue-jest": {
            "babelConfig": false
        },
        "tsConfig": {
            "importHelpers": true
        },
        "ts-jest": {
            "babelConfig": false
        }},
    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1",
        "^vue$": "vue/dist/vue.common.js"
    },
    moduleFileExtensions: [
        "js",
        "ts",
        "json",
        "vue"
    ],
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    coverageReporters: [
        "html",
        "text-summary"
    ],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)",
    testURL: "http://localhost/",
    verbose: true,
};
