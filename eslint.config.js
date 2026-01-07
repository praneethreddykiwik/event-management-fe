import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },

    // ✅ flat-config format (object map)
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    // ✅ only extend flat-compatible configs
    extends: [js.configs.recommended],

    rules: {
      // ✅ catch undefined variables in JS
      "no-undef": "error",

      // ✅ catch undefined JSX components like <LogoBox />
      "react/jsx-no-undef": "error",

      // Hooks rules (instead of extending a non-flat preset)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Vite React Refresh rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "no-debugger": "off",
    },

    settings: {
      react: { version: "detect" },
    },
  },
]);
