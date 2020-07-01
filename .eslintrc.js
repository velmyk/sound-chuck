const { ModuleKind } = require("typescript");

module.exports = {
    extends: ["airbnb", "prettier"],
    root: true,
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "no-console": ["error", { allow: ["warn", "error"] }],
        indent: [2, 4, { SwitchCase: 1 }],
        "react/jsx-indent": [2, 4],
        "react/prop-types": 0,
        "import/prefer-default-export": "off",
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
