import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unused vars in Three.js files as they often have complex dependencies
      "@typescript-eslint/no-unused-vars": ["error", { 
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_"
      }],
      // Allow 'any' in type definitions and Three.js files
      "@typescript-eslint/no-explicit-any": "warn",
      // Relax namespace rules for Three.js
      "@typescript-eslint/no-namespace": "warn"
    }
  },
  {
    files: ["**/three/**/*.ts", "**/three/**/*.tsx", "src/types/**/*.d.ts"],
    rules: {
      // More relaxed rules for Three.js files and type definitions
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-namespace": "off"
    }
  }
];

export default eslintConfig;
