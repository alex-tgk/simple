import type { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content to be displayed inside the button
   */
  children: ReactNode;

  /**
   * The size variant of the button
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * The visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}
