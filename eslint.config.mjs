// eslint.config.js
// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tseslint.config(
  // Config base
  {
    ignores: ['node_modules/**', 'dist/**', 'eslint.config.js'],
  },

  // Configuración extendida con plugins
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // ---------- ⚙️ ESTILO GENERAL ----------
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'eol-last': ['error', 'always'],
      'max-len': ['warn', { code: 120 }],
      'prefer-const': 'warn',
      'no-var': 'error',
      'spaced-comment': ['warn', 'always', { markers: ['/'] }],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'linebreak-style': ['error', 'unix'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',

      // ---------- 🟦 TYPESCRIPT ----------
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',

      // ---------- ✅ NESTJS / BACKEND ----------
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'constructor',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],

      // ---------- 🧹 PRETTIER ----------
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
          useTabs: false,
          semi: true,
          printWidth: 100,
          endOfLine: 'auto',
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
    },
  },

  prettier, // activa el plugin de Prettier
);
