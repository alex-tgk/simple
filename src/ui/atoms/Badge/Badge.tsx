import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge variant
   */
  variant?: 'solid' | 'outline' | 'subtle';
  /**
   * Color scheme
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  /**
   * Badge size
   */
  badgeSize?: 'small' | 'medium' | 'large';
}

const variantClasses = {
  solid: {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    danger: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
  },
  outline: {
    primary: 'border-2 border-primary-600 text-primary-600',
    secondary: 'border-2 border-secondary-600 text-secondary-600',
    success: 'border-2 border-green-600 text-green-600',
    warning: 'border-2 border-yellow-600 text-yellow-600',
    danger: 'border-2 border-red-600 text-red-600',
    info: 'border-2 border-blue-600 text-blue-600',
  },
  subtle: {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  },
};

const sizeClasses = {
  small: 'px-2 py-0.5 text-xs',
  medium: 'px-2.5 py-1 text-sm',
  large: 'px-3 py-1.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'solid',
  colorScheme = 'primary',
  badgeSize = 'medium',
  className = '',
  children,
  ...props
}) => {
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variantClasses[variant][colorScheme]}
        ${sizeClasses[badgeSize]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};
