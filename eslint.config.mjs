// @ts-check

import eslint from '@eslint/js';
import globals from "globals";
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        languageOptions: {
            globals: {
            ...globals.node,
            }
        }
    },
    {
        rules: {
            "no-unused-vars": "error",
            "no-unused-expressions": "error",
            "prefer-const": "error",
            "no-console": "warn",
            "no-undef": "error",
          },

    },
    {
        ignores: ["**/node_modules/", "**/dist/"],
      },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);