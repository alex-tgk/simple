import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input variant
   */
  variant?: 'default' | 'filled' | 'flushed';
  /**
   * Input size
   */
  inputSize?: 'small' | 'medium' | 'large';
  /**
   * Is input in error state?
   */
  error?: boolean;
  /**
   * Full width
   */
  fullWidth?: boolean;
}

const variantClasses = {
  default: 'border border-gray-300 focus:border-primary-500 bg-white',
  filled: 'border-0 bg-gray-100 focus:bg-gray-200',
  flushed: 'border-0 border-b-2 border-gray-300 focus:border-primary-500 rounded-none px-0',
};

const sizeClasses = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
};

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  inputSize = 'medium',
  error = false,
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <input
      disabled={disabled}
      className={`
        rounded-md transition-all duration-200 outline-none
        focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
        ${variantClasses[variant]}
        ${sizeClasses[inputSize]}
        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    />
  );
};
