import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  
  // Базовая конфигурация ESLint JS
  js.configs.recommended,
  
  // TypeScript ESLint
  tseslint.configs.recommended,
  
  // React Hooks rules
  reactHooks.configs.flat.recommended,
  
  // React Refresh для Vite HMR
  reactRefresh.configs.vite,
  
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    
    // Строгие правила для разработки (no-error-on-warn)
    rules: {
      // --- СТРОГИЕ ПРАВИЛА ДЛЯ РАЗРАБОТКИ ---
      
      // Запрещаем неиспользуемые переменные и параметры
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-unused-expressions': 'error',
      
      // Запрещаем unused imports (через eslint-plugin-unused-imports)
      'no-unused-vars': 'off', // отключаем дубликат
      
      // Строго к prefer-const
      '@typescript-eslint/prefer-const': 'error',
      
      // Запрещаем any - критично для строгой разработки
      '@typescript-eslint/no-explicit-any': [
        'error',
        {
          fixToUnknown: false, // не превращаем в unknown автоматически
        },
      ],
      
      // Строгие правила импорта
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      
      // Строгие правила форматирования кода
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      
      // Запрещаем React.FC - использовать plain functions с typed props
      'react/function-component-definition': [
        'error',
        { namedComponents: 'function-declaration', indexedSignatureAllowArbitraryTypes: true },
      ],
      
      // Строгие правила для JSX
      'react/jsx-fragments': ['error', 'single-child'],
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': 'error',
      
      // Запрещаем console.log в продакшене (warn в dev)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      
      // Запрещаем alert
      'no-alert': 'error',
      
      // Строгие правила к arrow functions
      '@typescript-eslint/arrow-parens': ['error', 'as-needed'],
      '@typescript-eslint/no-confusing-arrow': 'error',
      
      // Строгие правила к ternary operators
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      
      // Запрещаем ++/-- операторы
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      
      // Строгие правила к destructuring
      '@typescript-eslint/prefer-destructuring': [
        'error',
        { ignoreConstructors: false },
      ],
      
      // Запрещаем спред в объектах (если не нужно)
      'no-useless-spread': 'error',
      
      // Строгие правила к new
      'new-cap': ['error', { capIsNew: true, properties: true }],
      
      // Запрещаем useless constructor
      'no-useless-constructor': 'error',
      
      // --- SEO-FRIENDLY НАСТРОЙКИ (лояльные к семантике) ---
      
      // data-* атрибуты разрешены для SEO
      'react/jsx-props-no-spreading': 'off', // разрешаем спрединг для data-тегов
      
      // tabIndex не запрещаем - нужен для SEO навигации
      '@typescript-eslint/no-redundant-type-assertions': 'error',
      
      // --- РЕЛАКСИРОВАННЫЕ ПРАВИЛА (SEO семантика) ---
      
      // jsx-a11y: лояльные правила к доступности
      'jsx-a11y/click-events-have-key-events': 'off', // разрешаем для сложных интерактивных элементов
      'jsx-a11y/no-noninteractive-element-interactions': 'off', // SEO элементы могут иметь интерактивность
      'jsx-a11y/control-has-associated-label': 'warn', // warn вместо error - лояльно к SEO паттернам
      'jsx-a11y/anchor-is-valid': 'off', // сложные anchor паттерны в SEO
      
      // React специфичные правила
      'react/no-find-dom-node': 'off',
      'react/no-did-mount-set-state': 'warn', // warn вместо error - для dev
      'react/no-unused-prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'react/display-name': 'off',
      
      // TypeScript специфичные правила
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'warn', // warn для SEO интерфейсов
      
      // Import rules
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependents: ['test'] }],
      
      // Пrettier интеграция (через prettier)
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          printWidth: 110,
          arrowParens: 'always',
        },
      ],
      
      // no-mixed-operators для SEO читаемости
      'no-mixed-operators': 'off',
      
      // object-curly-newline для SEO паттернов
      'object-curly-newline': 'off',
      
      // space-before-function-paren для SEO паттернов
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    },
  },
  
  {
    name: 'vite',
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'vite': reactRefresh,
    },
  },
])