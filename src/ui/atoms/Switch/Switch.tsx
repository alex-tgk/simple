import React, { useState } from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Switch label
   */
  label?: string;
  /**
   * Switch size
   */
  switchSize?: 'small' | 'medium' | 'large';
  /**
   * Color scheme when checked
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'danger';
}

const sizeClasses = {
  small: {
    container: 'w-8 h-4',
    toggle: 'w-3 h-3',
    translate: 'translate-x-4',
  },
  medium: {
    container: 'w-11 h-6',
    toggle: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  large: {
    container: 'w-14 h-7',
    toggle: 'w-6 h-6',
    translate: 'translate-x-7',
  },
};

const colorClasses = {
  primary: 'bg-primary-600',
  secondary: 'bg-secondary-600',
  success: 'bg-green-600',
  danger: 'bg-red-600',
};

export const Switch: React.FC<SwitchProps> = ({
  label,
  switchSize = 'medium',
  colorScheme = 'primary',
  className = '',
  disabled = false,
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={`
            ${sizeClasses[switchSize].container}
            rounded-full transition-colors duration-200
            ${checked ? colorClasses[colorScheme] : 'bg-gray-300'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${className}
          `}
        >
          <div
            className={`
              ${sizeClasses[switchSize].toggle}
              bg-white rounded-full shadow-md transform transition-transform duration-200
              absolute top-0.5 left-0.5
              ${checked ? sizeClasses[switchSize].translate : 'translate-x-0'}
            `}
          />
        </div>
      </div>
      {label && (
        <span
          className={`
            text-gray-700
            ${disabled ? 'opacity-50' : ''}
            ${switchSize === 'small' ? 'text-sm' : switchSize === 'large' ? 'text-lg' : 'text-base'}
          `}
        >
          {label}
        </span>
      )}
    </label>
  );
};
