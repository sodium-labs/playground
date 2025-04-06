import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginNext from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    eslintConfigPrettier,
    {
        rules: {
            camelcase: "off",
            "no-console": "off",
            "prefer-const": "error",
            "import/no-anonymous-default-export": "off",
        },
    },
    {
        rules: {
            "@typescript-eslint/no-unsafe-enum-comparison": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/unbound-method": "off",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/require-await": "off",
        },
    },
    {
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/jsx-indent-props": ["error", 4],
            "@stylistic/brace-style": ["error", "1tbs"],
            "@stylistic/max-statements-per-line": "error",
            "@stylistic/semi": ["error", "always"],
            "@stylistic/semi-style": ["error", "last"],
            "@stylistic/no-extra-semi": "error",
            "@stylistic/no-trailing-spaces": "error",
            "@stylistic/indent": ["error", 4, { SwitchCase: 1, offsetTernaryExpressions: true }],
            "@stylistic/semi-spacing": [
                "error",
                {
                    before: false,
                    after: true,
                },
            ],
            "@stylistic/space-before-function-paren": [
                "error",
                {
                    anonymous: "always",
                    named: "never",
                    asyncArrow: "always",
                },
            ],
        },
    },
    {
        ...pluginReact.configs.flat.recommended,
    },
    {
        languageOptions: {
            globals: {
                ...globals.serviceworker,
            },
        },
        plugins: {
            ...pluginReact.configs.flat.recommended.plugins,
            "@next/next": pluginNext,
            "react-hooks": pluginReactHooks,
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            ...pluginReactHooks.configs.recommended.rules,
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
            "react/display-name": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
];
