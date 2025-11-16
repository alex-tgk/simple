import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Label size
   */
  labelSize?: 'small' | 'medium' | 'large';
  /**
   * Is the associated field required?
   */
  required?: boolean;
  /**
   * Is the label disabled?
   */
  disabled?: boolean;
}

const sizeClasses = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

export const Label: React.FC<LabelProps> = ({
  labelSize = 'medium',
  required = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <label
      className={`
        font-medium text-gray-700 block mb-1
        ${sizeClasses[labelSize]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
