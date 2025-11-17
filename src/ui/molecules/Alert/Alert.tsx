import React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Alert status/type
   */
  status?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Alert variant
   */
  variant?: 'subtle' | 'solid' | 'left-accent';
  /**
   * Alert title
   */
  title?: string;
  /**
   * Show close button
   */
  closable?: boolean;
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;
}

const statusClasses = {
  subtle: {
    info: 'bg-blue-50 text-blue-900 border-blue-200',
    success: 'bg-green-50 text-green-900 border-green-200',
    warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    error: 'bg-red-50 text-red-900 border-red-200',
  },
  solid: {
    info: 'bg-blue-600 text-white border-blue-600',
    success: 'bg-green-600 text-white border-green-600',
    warning: 'bg-yellow-600 text-white border-yellow-600',
    error: 'bg-red-600 text-white border-red-600',
  },
  'left-accent': {
    info: 'bg-white text-blue-900 border-l-4 border-blue-600 shadow-sm',
    success: 'bg-white text-green-900 border-l-4 border-green-600 shadow-sm',
    warning: 'bg-white text-yellow-900 border-l-4 border-yellow-600 shadow-sm',
    error: 'bg-white text-red-900 border-l-4 border-red-600 shadow-sm',
  },
};

const iconPaths = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

export const Alert: React.FC<AlertProps> = ({
  status = 'info',
  variant = 'subtle',
  title,
  closable = false,
  onClose,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      role="alert"
      className={`
        rounded-md p-4 border
        ${statusClasses[variant][status]}
        ${className}
      `}
      {...props}
    >
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={iconPaths[status]}
          />
        </svg>
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-1">{title}</h4>
          )}
          <div className="text-sm">{children}</div>
        </div>
        {closable && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-auto opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close alert"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
