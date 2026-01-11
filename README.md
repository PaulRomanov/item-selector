# Item Selector

## Демо: [test-item-selector.vercel.app](https://test-item-selector.vercel.app)

# Item Selector Application

A scalable, maintainable Vue 3 application architected using **Feature-Sliced Design (FSD)** methodology.

This project demonstrates Senior-level frontend development practices, emphasizing modularity, separation of concerns (SoC), and solid engineering principles (SOLID, DRY).

## 🏗 Architecture & Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite
- **State Management**: Pinia (Modular stores)
- **Architecture**: [Feature-Sliced Design (FSD)](https://feature-sliced.design/)
- **Language**: TypeScript (Strict mode)
- **Styling**: SCSS (Scoped)

### FSD Layer Structure

The `src` directory is organized into layers, improving maintainability and scalability:

- `app` - Application setup (styles, router, global types)
- `pages` - Composition of widgets to form routes/pages (`HomePage`)
- `widgets` - Complex UI blocks combining entities (`UserItemsDashboard`, `AvailableItemsDashboard`)
- `entities` - Business domain models and UI (`Item`, `UserItems`, `AvailableItems`)
- `shared` - Reusable primitives (UI Kit, API fixtures, Constants)

## 🛠 Engineering Principles

### SOLID

- **Single Responsibility Principle (SRP)**:
  - **Widgets** handle composition and data wiring.
  - **Features/Entities** handle specific domain logic (e.g., selection rules).
  - **Shared UI** components (`ContentCard`, `SplitView`) handle purely visual layout, unaware of business context.
- **Dependency Inversion**: High-level modules (Pages) depend on abstractions (Widgets/Features), not implementation details.

### DRY (Don't Repeat Yourself)

- **Shared UI Kit**: Layout patterns (like the "Top/Bottom split" or "Card with Header") are extracted into generic components (`ContentCard`, `SplitView`) to avoid CSS duplication.
- **Mixins & Variables**: Global design tokens are defined in `app/styles`.

### Clean Code

- **Type Safety**: Strictly typed interfaces for all data models.
- **Self-Documenting Code**: Clear naming conventions and modular file structure.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production Build

```sh
npm run build
```

### Linting & Formatting

```sh
npm run lint
```

## 🧪 Verification

The project includes strict type checking:

```sh
npm run type-check
```

![App Preview](docs/assets/app-preview.png)
