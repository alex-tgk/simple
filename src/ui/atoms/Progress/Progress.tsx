import React from 'react';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Progress value (0-100)
   */
  value: number;
  /**
   * Progress size
   */
  progressSize?: 'small' | 'medium' | 'large';
  /**
   * Color scheme
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  /**
   * Show value label
   */
  showLabel?: boolean;
  /**
   * Progress variant
   */
  variant?: 'solid' | 'striped';
}

const sizeClasses = {
  small: 'h-1',
  medium: 'h-2',
  large: 'h-4',
};

const colorClasses = {
  primary: 'bg-primary-600',
  secondary: 'bg-secondary-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  danger: 'bg-red-600',
  info: 'bg-blue-600',
};

export const Progress: React.FC<ProgressProps> = ({
  value,
  progressSize = 'medium',
  colorScheme = 'primary',
  showLabel = false,
  variant = 'solid',
  className = '',
  ...props
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={className} {...props}>
      <div
        className={`
          w-full bg-gray-200 rounded-full overflow-hidden
          ${sizeClasses[progressSize]}
        `}
      >
        <div
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          className={`
            h-full transition-all duration-300 ease-out
            ${colorClasses[colorScheme]}
            ${variant === 'striped' ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_100%] animate-[shimmer_1s_linear_infinite]' : ''}
          `}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-sm text-gray-600 mt-1 text-right">
          {clampedValue}%
        </div>
      )}
    </div>
  );
};
