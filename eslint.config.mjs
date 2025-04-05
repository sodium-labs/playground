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
        ignores: ["**/dist"],
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "no-console": "off",
            "prefer-const": "error",
            camelcase: "off",
            "@typescript-eslint/no-unsafe-enum-comparison": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/unbound-method": "off",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/require-await": "off",
            "import/no-anonymous-default-export": "off",
            "@stylistic/quotes": [
                "off",
                "double",
                {
                    allowTemplateLiterals: true,
                },
            ],
            "@stylistic/jsx-indent-props": ["error", 4],
            "@stylistic/brace-style": ["error", "1tbs"],
            "@stylistic/max-statements-per-line": "error",
            "@stylistic/semi": ["error", "always"],
            "@stylistic/semi-spacing": [
                "error",
                {
                    before: false,
                    after: true,
                },
            ],
            "@stylistic/semi-style": ["error", "last"],
            "@stylistic/no-extra-semi": "error",
            "@stylistic/no-trailing-spaces": "error",
            "@stylistic/indent": ["error", 4, { SwitchCase: 1, offsetTernaryExpressions: true }],
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
        ...pluginReact.configs.flat?.recommended,
        languageOptions: {
            ...pluginReact.configs.flat?.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
            },
        },
        plugins: {
            "@next/next": pluginNext,
            "react-hooks": pluginReactHooks,
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
            "react/display-name": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
];
