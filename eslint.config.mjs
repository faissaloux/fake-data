import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "curly": "error",
      "eqeqeq": "error",
      "no-throw-literal": "error",
      "semi": "off",
      "no-console": "error",
      "no-unused-vars": "error"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];