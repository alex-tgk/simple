import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link variant
   */
  variant?: 'default' | 'underline' | 'hover-underline';
  /**
   * Color scheme
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'danger' | 'muted';
  /**
   * Is the link disabled
   */
  disabled?: boolean;
  /**
   * Show external link icon
   */
  isExternal?: boolean;
}

const variantClasses = {
  default: '',
  underline: 'underline',
  'hover-underline': 'hover:underline',
};

const colorClasses = {
  primary: 'text-primary-600 hover:text-primary-700',
  secondary: 'text-secondary-600 hover:text-secondary-700',
  success: 'text-green-600 hover:text-green-700',
  danger: 'text-red-600 hover:text-red-700',
  muted: 'text-gray-600 hover:text-gray-700',
};

export const Link: React.FC<LinkProps> = ({
  variant = 'hover-underline',
  colorScheme = 'primary',
  disabled = false,
  isExternal = false,
  className = '',
  children,
  ...props
}) => {
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      className={`
        inline-flex items-center gap-1 transition-colors duration-200
        ${variantClasses[variant]}
        ${colorClasses[colorScheme]}
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
        ${className}
      `}
      {...externalProps}
      {...props}
    >
      {children}
      {isExternal && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
};
