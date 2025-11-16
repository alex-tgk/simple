import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Checkbox label
   */
  label?: string;
  /**
   * Checkbox size
   */
  checkboxSize?: 'small' | 'medium' | 'large';
  /**
   * Color scheme
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'danger';
  /**
   * Is checkbox in error state?
   */
  error?: boolean;
}

const sizeClasses = {
  small: 'w-4 h-4',
  medium: 'w-5 h-5',
  large: 'w-6 h-6',
};

const colorClasses = {
  primary: 'text-primary-600 focus:ring-primary-500',
  secondary: 'text-secondary-600 focus:ring-secondary-500',
  success: 'text-green-600 focus:ring-green-500',
  danger: 'text-red-600 focus:ring-red-500',
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checkboxSize = 'medium',
  colorScheme = 'primary',
  error = false,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        disabled={disabled}
        className={`
          rounded border-gray-300 transition-colors duration-200
          focus:ring-2 focus:ring-offset-0
          ${sizeClasses[checkboxSize]}
          ${colorClasses[colorScheme]}
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        {...props}
      />
      {label && (
        <span
          className={`
            text-gray-700
            ${disabled ? 'opacity-50' : ''}
            ${checkboxSize === 'small' ? 'text-sm' : checkboxSize === 'large' ? 'text-lg' : 'text-base'}
          `}
        >
          {label}
        </span>
      )}
    </label>
  );
};
