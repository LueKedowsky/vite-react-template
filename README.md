# Vite React FSD Template

Современный шаблон для разработки React приложений с TypeScript и Vitest.

## 🚀 Быстрый старт

```bash
npm install
npm run dev
```

## 📦 Доступные скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск development сервера |
| `npm run build` | Сборка для продакшена |
| `npm run preview` | Локальный просмотр сборки |
| `npm run lint` | Проверка кода через ESLint (строгая) |
| `npm run test` | Запуск тестов в watch режиме |
| `npm run test:run` | Запуск тестов один раз |

## ⚙️ Конфигурация

### ESLint (строгий для разработки, лояльный к SEO)

ESLint настроен с балансом между строгостью и SEO-семантикой:

**Строгие правила:**
- ✅ `no-unused-vars` - запрещает неиспользуемые переменные
- ✅ `@typescript-eslint/no-explicit-any` - запрещает `any` тип
- ✅ `prefer-const` - требует `const` вместо `let`
- ✅ Строгий порядок импортов
- ✅ Prettier интеграция

**SEO-friendly правила:**
- ✅ `data-*` атрибуты разрешены для SEO
- ✅ `tabIndex` не запрещён (нужен для навигации)
- ✅ `jsx-a11y/control-has-associated-label: 'warn'` - лояльно к SEO паттернам
- ✅ `react/jsx-props-no-spreading: 'off'` - разрешено для data-тегов

**Отключённые правила:**
- ❌ Stylelint (используем ESLint вместо него)
- ❌ Строгие a11y правила (для SEO гибкости)

### Prettier

```json
{
  "printWidth": 110,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always"
}
```

### Vite

- Алиасы для импорта (`app`, `api`, `features`, `widgets` и др.)
- Поддержка Vitest для тестирования
- React 19 + TypeScript 6.x

## 📁 Структура проекта (FSD)

```
src/
├── app/              # Прикладная логика, контексты
├── entities/         # Бизнес-сущности
├── features/         # Фичные компоненты
├── pages/            # Страницы
├── shared/           # Общие модули
│   ├── api/          # API клиенты
│   ├── assets/       # Статические файлы (изображения, шрифты)
│   ├── helpers/      # Хелперы
│   ├── types/        # Типовые интерфейсы и типы
│   ├── utils/        # Утилитарные функции
├── tests/            # Тесты (setupTests.ts)
└── widgets/          # UI компоненты
```

## 🧪 Написание тестов

```tsx
// src/tests/example.test.tsx
import { describe, it, expect } from 'vitest'
import { Component } from '../src/app/component'

describe('Component', () => {
  it('should render correctly', () => {
    const component = new Component()
    expect(component.render()).toBe('<div>Hello</div>')
  })
})
```

## 📝 Примечания

### ESLint

ESLint настроен через `eslint.config.js` (современный flat config) с балансом между строгостью и SEO-семантикой:

**Строгие правила:**
- ✅ Запрещает неиспользуемые переменные (`no-unused-vars`)
- ✅ Запрещает `any` тип (`@typescript-eslint/no-explicit-any`)
- ✅ Требует `const` вместо `let` (`prefer-const`)
- ✅ Строгий порядок импортов
- ✅ Prettier интеграция

**SEO-friendly правила:**
- ✅ `data-*` атрибуты разрешены для SEO
- ✅ `tabIndex` не запрещён (нужен для навигации)
- ✅ Лояльные a11y правила (`jsx-a11y/control-has-associated-label: 'warn'`)
- ✅ Разрешено `react/jsx-props-no-spreading` для data-тегов

**Отключённые инструменты:**
- ❌ Stylelint (используем ESLint вместо него - современный подход)
- ❌ Строгие a11y правила (для SEO гибкости)

### Prettier

```json
{
  "printWidth": 110,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always"
}
```

### SCSS

- Поддержка CSS Modules для `.module.scss` файлов
- Глобальные переменные в `_variables.scss`
- Vite автоматически компилирует SCSS файлы

### Vitest

Vitest - современный тестовый фреймворк от Vite team:
- Тесты в `src/tests/`
- Setup файл: `src/tests/setupTests.ts`
- Mock для window.matchMedia и requestAnimationFrame
