import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.matchMedia для тестов
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock requestAnimationFrame для тестов
Object.defineProperty(window, 'requestAnimationFrame', {
  writable: true,
  value: (callback) => setTimeout(callback, 0),
})

// Mock cancelAnimationFrame для тестов
Object.defineProperty(window, 'cancelAnimationFrame', {
  writable: true,
  value: () => {},
})