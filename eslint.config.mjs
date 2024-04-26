// @ts-check

import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];
