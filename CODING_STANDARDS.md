# Coding Standards

This document outlines the coding standards and conventions for this project. These standards are enforced through ESLint configuration and should be followed by all contributors.

## Table of Contents

- [TypeScript Standards](#typescript-standards)
- [Immutability Patterns](#immutability-patterns)
- [Component Architecture](#component-architecture)
- [UI Library Design Philosophy](#ui-library-design-philosophy)
- [Design System Tokens](#design-system-tokens)

## TypeScript Standards

### Use `const` for all variable declarations

```typescript
// ✅ Good
const userName = 'Alex';
const userAge = 30;
const config = { theme: 'light' } as const;

// ❌ Bad
let userName = 'Alex';
var userAge = 30;
```

### Always use arrow functions

```typescript
// ✅ Good
const calculateTotal = (items: Item[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// ❌ Bad
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

### Component example with destructured props

```typescript
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  ...restProps
}: ButtonProps): JSX.Element => {
  const buttonClasses = getButtonClasses(variant, size, disabled);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (disabled) return;
    onClick?.(event);
  };

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </button>
  );
};
```

### Use ample spacing between declarations

```typescript
const processUserData = (userData: UserData): ProcessedUser => {
  const {
    firstName,
    lastName,
    email,
    age,
  } = userData;

  const fullName = `${firstName} ${lastName}`;

  const isAdult = age >= 18;

  const sanitizedEmail = email.toLowerCase().trim();

  return {
    fullName,
    isAdult,
    email: sanitizedEmail,
  };
};
```

## Immutability Patterns

### Array operations - NEVER mutate

```typescript
// ✅ Good
const addItem = (items: readonly Item[], newItem: Item): readonly Item[] => {
  return [...items, newItem];
};

const removeItem = (items: readonly Item[], itemId: string): readonly Item[] => {
  return items.filter((item) => item.id !== itemId);
};

const updateItem = (
  items: readonly Item[],
  itemId: string,
  updates: Partial<Item>
): readonly Item[] => {
  return items.map((item) =>
    item.id === itemId ? { ...item, ...updates } : item
  );
};

// ❌ Bad
const addItem = (items: Item[], newItem: Item): Item[] => {
  items.push(newItem); // Mutation!
  return items;
};
```

### Object operations - NEVER mutate

```typescript
// ✅ Good
const updateUserSettings = (
  settings: UserSettings,
  newSettings: Partial<UserSettings>
): UserSettings => {
  return {
    ...settings,
    ...newSettings,
  };
};

// ❌ Bad
const updateUserSettings = (
  settings: UserSettings,
  newSettings: Partial<UserSettings>
): UserSettings => {
  settings.theme = newSettings.theme; // Mutation!
  return settings;
};
```

## Component Architecture

### File Organization

Each component should follow this structure:

```
ComponentName/
├── ComponentName.tsx          # Main component implementation
├── ComponentName.types.ts     # TypeScript interfaces and types
├── ComponentName.styles.ts    # Styled components or style objects
├── ComponentName.test.tsx     # Unit and integration tests
├── ComponentName.stories.tsx  # Storybook stories
└── index.ts                   # Public API export
```

### Type Definitions

Create comprehensive TypeScript types in a separate `.types.ts` file:

```typescript
// ComponentName.types.ts
import type { ReactNode, HTMLAttributes } from 'react';

export type ComponentSize = 'small' | 'medium' | 'large';
export type ComponentVariant = 'primary' | 'secondary' | 'tertiary';

export interface ComponentNameProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be displayed inside the component
   */
  children?: ReactNode;

  /**
   * The size variant of the component
   * @default 'medium'
   */
  size?: ComponentSize;

  /**
   * The visual variant of the component
   * @default 'primary'
   */
  variant?: ComponentVariant;

  /**
   * Whether the component is disabled
   * @default false
   */
  disabled?: boolean;
}
```

### Style Definitions with CVA

Use `class-variance-authority` for managing component variants:

```typescript
// ComponentName.styles.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const componentVariants = cva(
  // Base styles (always applied)
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
        tertiary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      },
      size: {
        small: 'px-3 py-2 text-sm h-9',
        medium: 'px-4 py-2.5 text-base h-11',
        large: 'px-6 py-3 text-lg h-14',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);
```

### Accessible Implementation

All components must include proper accessibility attributes:

```typescript
export const ComponentName = ({
  children,
  disabled = false,
  ...restProps
}: ComponentNameProps): JSX.Element => {
  return (
    <div
      role="region"
      aria-disabled={disabled}
      {...restProps}
    >
      {children}
    </div>
  );
};

ComponentName.displayName = 'ComponentName';
```

### Public API Export

```typescript
// ComponentName/index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps, ComponentSize, ComponentVariant } from './ComponentName.types';
export { componentVariants } from './ComponentName.styles';
```

## UI Library Design Philosophy

### 1. Simplistic Looking

- **Clear boundaries**: Distinct boundary lines between all interactive elements
- **Consistent shadows**: Mapped to elevation levels (sm, md, lg, xl)
- **Typography**: Inter font family as primary typeface
- **Large font sizes**: 16-18px body, 16-20px buttons for readability
- **Minimum touch target**: 44x44px (WCAG AAA compliant)

### 2. Interactive

All interactive elements must have these states:

**Hover States:**
- Subtle border color changes
- Background color shifts (5-10% lightness adjustment)
- Transition timing: 150-200ms ease-in-out

**Focus States (WCAG 2.1 AA Compliant):**
- Visible focus rings with minimum 2px width
- High contrast focus indicators (4.5:1 minimum)
- Theme accent color or high-contrast alternative

**Active/Pressed States:**
- Visual depression effect (scale: 0.98)
- Immediate feedback (<50ms)

**Disabled States:**
- Reduced opacity (0.5-0.6)
- Cursor: not-allowed
- No hover effects

### 3. Fun and Friendly

**Color Palette:**
- **Primary**: Vibrant Green (#22c55e, #16a34a)
- **Secondary**: Energetic Orange (#f97316, #fb923c)
- **Accents**: Vibrant blue, red, yellow (heavily saturated)

**Dark Theme:**
- Base: Gray-blue (#1e293b, #334155) instead of pure black
- Background hierarchy: #0f172a (base), #1e293b (elevated), #334155 (overlay)

## Design System Tokens

All design tokens are defined in `src/styles/tokens.ts` and integrated with Tailwind CSS v4 in `src/styles/styles.css`.

### Color Tokens

Available color scales:
- `primary-{50-900}` - Vibrant Green
- `secondary-{50-900}` - Energetic Orange
- `blue-{50-900}` - Vibrant Blue
- `red-{50-900}` - Vibrant Red
- `yellow-{50-900}` - Vibrant Yellow
- `gray-{50-900}` - Gray-blue neutrals

### Spacing Tokens

Standard spacing scale: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24

### Shadow Tokens

- `shadow-sm` - Elevation 1
- `shadow-md` - Elevation 2
- `shadow-lg` - Elevation 3
- `shadow-xl` - Elevation 4

### Border Radius Tokens

- `rounded-sm` - 0.25rem
- `rounded-md` - 0.5rem
- `rounded-lg` - 0.75rem
- `rounded-xl` - 1rem
- `rounded-full` - 9999px

## ESLint Enforcement

The following rules are enforced via ESLint:

- `prefer-const` - Enforce const for immutability
- `no-var` - Disallow var declarations
- `prefer-arrow-callback` - Require arrow functions for callbacks
- `func-style` - Enforce arrow function expressions
- `no-param-reassign` - Prevent parameter mutation
- `@typescript-eslint/explicit-function-return-type` - Encourage explicit return types
- `@typescript-eslint/consistent-type-imports` - Use type imports
- `react/function-component-definition` - Enforce arrow function components

Run `npm run lint` to check for violations.

## Testing

All components must include:
1. Unit tests for all variants and states
2. Interaction tests (clicks, hovers, focus)
3. Accessibility tests (ARIA attributes, keyboard navigation)

## Storybook

All components must include:
1. Individual stories for each variant
2. Interactive controls for props
3. Documentation with JSDoc comments
4. Showcase story demonstrating all variants

---

For questions or clarifications, please refer to the examples in `src/ui/atoms/Button/` which demonstrates all of these standards in practice.
