import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Spinner size
   */
  spinnerSize?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Color scheme
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'white';
  /**
   * Thickness of the spinner
   */
  thickness?: 'thin' | 'medium' | 'thick';
}

const sizeClasses = {
  small: 'w-4 h-4',
  medium: 'w-8 h-8',
  large: 'w-12 h-12',
  xlarge: 'w-16 h-16',
};

const colorClasses = {
  primary: 'border-primary-600',
  secondary: 'border-secondary-600',
  success: 'border-green-600',
  warning: 'border-yellow-600',
  danger: 'border-red-600',
  white: 'border-white',
};

const thicknessClasses = {
  thin: 'border-2',
  medium: 'border-4',
  thick: 'border-8',
};

export const Spinner: React.FC<SpinnerProps> = ({
  spinnerSize = 'medium',
  colorScheme = 'primary',
  thickness = 'medium',
  className = '',
  ...props
}) => {
  return (
    <div
      role="status"
      className={`
        inline-block rounded-full animate-spin
        border-t-transparent
        ${sizeClasses[spinnerSize]}
        ${colorClasses[colorScheme]}
        ${thicknessClasses[thickness]}
        ${className}
      `}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
