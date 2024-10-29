import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin-ts';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        ignores: [
            '**/coverage/*',
            '**/dist/*'
        ],
    },
    {
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            'curly': 'error',
            'eqeqeq': 'error',
            'no-throw-literal': 'error',
            'semi': 'off',
            'eol-last': 'error',
            'no-console': 'error',
            'no-unused-vars': 'error',
            '@stylistic/ts/semi': 'error',
            '@stylistic/ts/comma-spacing': 'error',
            '@stylistic/ts/indent': 'error',
            '@stylistic/ts/keyword-spacing': 'error',
            '@stylistic/ts/key-spacing': 'error',
            '@stylistic/ts/no-extra-semi': 'error',
            '@stylistic/ts/no-extra-parens': 'error',
            '@stylistic/ts/quotes': ['error', 'single'],
        },
        plugins: {
            '@stylistic/ts': stylistic,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
