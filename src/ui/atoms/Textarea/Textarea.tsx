import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Textarea variant
   */
  variant?: 'default' | 'filled' | 'flushed';
  /**
   * Is textarea in error state?
   */
  error?: boolean;
  /**
   * Full width
   */
  fullWidth?: boolean;
  /**
   * Resize behavior
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const variantClasses = {
  default: 'border border-gray-300 focus:border-primary-500 bg-white',
  filled: 'border-0 bg-gray-100 focus:bg-gray-200',
  flushed: 'border-0 border-b-2 border-gray-300 focus:border-primary-500 rounded-none px-0',
};

const resizeClasses = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};

export const Textarea: React.FC<TextareaProps> = ({
  variant = 'default',
  error = false,
  fullWidth = false,
  resize = 'vertical',
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <textarea
      disabled={disabled}
      className={`
        px-4 py-2 rounded-md transition-all duration-200 outline-none
        focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
        ${variantClasses[variant]}
        ${resizeClasses[resize]}
        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    />
  );
};
