# UI Libray Boilerplate: Storybook-Tailwind-Vite

A modern React component library boilerplate built with TypeScript, Tailwind CSS v4, and Storybook v9.

## Features

- ⚛️ **React 19** - Latest React version
- 📘 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 📚 **Storybook v9** - Component documentation and development
- 🧪 **Jest** - Unit testing with React Testing Library
- ✨ **ESLint** - Code quality and consistency
- 🏗️ **Atomic Design** - Scalable component structure
- 🔗 **Path Aliases** - Import components using `@/*`

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Start Storybook development server:

```bash
npm run storybook
```

Visit http://localhost:6006 to view your components.

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test:watch
```

Run tests with coverage:

```bash
npm test:coverage
```

### Linting

```bash
npm run lint
```

## Project Structure

```
coral-ui/
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks (Button, Input, etc.)
│   │   ├── molecules/      # Simple component groups
│   │   ├── organisms/      # Complex component sections
│   │   ├── templates/      # Page-level layouts
│   │   └── pages/          # Full page compositions
│   └── styles/
│       └── tailwind.css    # Tailwind CSS configuration
├── .storybook/             # Storybook configuration
├── jest.config.js          # Jest configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS/Tailwind configuration
└── eslint.config.js        # ESLint configuration
```

## Path Aliases

Import components using the `@coral/*` alias:

```typescript
import { Button } from '@coral/atoms/Button';
```

## Example Component

```typescript
import { Button } from '@coral/atoms/Button';

function App() {
  return (
    <Button variant="primary" size="large">
      Click me
    </Button>
  );
}
```

## Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm test` - Run Jest tests
- `npm test:watch` - Run tests in watch mode
- `npm test:coverage` - Run tests with coverage report
- `npm run lint` - Lint code with ESLint

## Technologies

- React 19.2.0
- TypeScript 5.9.3
- Tailwind CSS 4.0.0
- Storybook 9.1.10
- Jest 30.2.0
- Vite 6.0.7
- ESLint 9.36.0

## License

ISC
