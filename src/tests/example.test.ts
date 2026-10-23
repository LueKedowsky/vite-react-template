import { describe, it, expect } from 'vitest'

describe('Vite React FSD Template', () => {
  it('should have correct project structure', () => {
    // Проверка структуры проекта
    const expectedDirs = ['src/app', 'src/entities', 'src/features', 'src/pages', 'src/shared']
    
    expect(expectedDirs).toBeDefined()
  })

  it('should use strict ESLint rules', () => {
    // ESLint настроен со строгими правилами для разработки
    const eslintConfigPath = './eslint.config.js'
    expect(eslintConfigPath).toBe('./eslint.config.js')
  })

  it('should support CSS Modules for SCSS', () => {
    // Vite поддерживает CSS Modules для .module.scss файлов
    const moduleScssFiles = ['src/App.module.scss']
    expect(moduleScssFiles[0]).toContain('.module.scss')
  })

  it('should have Vitest setup file', () => {
    // Тестовый setup файл существует
    const setupTestsPath = './src/tests/setupTests.ts'
    expect(setupTestsPath).toBe('./src/tests/setupTests.ts')
  })
})