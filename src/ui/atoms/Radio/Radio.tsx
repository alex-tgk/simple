import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Radio label
   */
  label?: string;
  /**
   * Radio size
   */
  radioSize?: 'small' | 'medium' | 'large';
  /**
   * Color scheme
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'danger';
  /**
   * Is radio in error state?
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

export const Radio: React.FC<RadioProps> = ({
  label,
  radioSize = 'medium',
  colorScheme = 'primary',
  error = false,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        disabled={disabled}
        className={`
          border-gray-300 transition-colors duration-200
          focus:ring-2 focus:ring-offset-0
          ${sizeClasses[radioSize]}
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
            ${radioSize === 'small' ? 'text-sm' : radioSize === 'large' ? 'text-lg' : 'text-base'}
          `}
        >
          {label}
        </span>
      )}
    </label>
  );
};
