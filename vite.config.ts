import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Алиасы для импорта (как в оригинале)
  resolve: {
    alias: {
      app: '/src/app',
      api: '/src/shared/api',
      assets: '/src/shared/assets',
      context: '/src/app/context',
      entities: '/src/entities',
      features: '/src/features/',
      helpers: '/src/shared/helpers',
      pages: '/src/pages',
      shared: '/src/shared',
      tests: '/src/tests',
      types: '/src/shared/types',
      utils: '/src/shared/utils',
      widgets: '/src/widgets',
    },
  },
  
  // Тестовая конфигурация Vitest
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
  },
  
  // Поддержка CSS Modules для .module.scss файлов
  css: {
    modules: {
      generateScopedName: 'local-[name]__[local]',
      localsConvention: 'camelCase',
    },
  },
})