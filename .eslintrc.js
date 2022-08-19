module.exports = {
        env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "react-app",
        "react-app/jest",
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    globals: {
        React: true,
        google: true,
        mount: true,
        mountWithRouter: true,
        shallow: true,
        shallowWithRouter: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
    },
    parserOptions: {
        project: ["./jsconfig.json"],
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            globalReturn: true,
        },
    },
    settings: {
        react: {
            pragma: "React",
            version: "18.2.0",
        },
        "import/extensions": [".js", ".jsx"],
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx"],
            },
        },
    },
    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": "off",
        "react/no-unescaped-entities": ["error", { forbid: [] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import/no-cycle": [0],
        "import/no-unresolved": [0],
        "jsx-a11y/label-has-associated-control": [2, {
            "labelAttributes": ["label"],
            "depth": 3,
        }],
    },
};
