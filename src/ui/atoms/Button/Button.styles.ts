import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  // Base styles (always applied)
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:ring-primary-500 shadow-sm hover:shadow-md',
        secondary:
          'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover:shadow-md',
        tertiary:
          'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-500 shadow-sm hover:shadow-md',
        danger:
          'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
        ghost:
          'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-500',
      },
      size: {
        small: 'px-3 py-2 text-sm h-9 min-w-[44px]',
        medium: 'px-4 py-2.5 text-base h-11 min-w-[44px]',
        large: 'px-6 py-3 text-lg h-14 min-w-[44px]',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
      isLoading: {
        true: 'cursor-wait opacity-75',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      disabled: false,
      isLoading: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
