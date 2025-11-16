import React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Toast status/type
   */
  status?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Toast title
   */
  title?: string;
  /**
   * Toast description
   */
  description?: string;
  /**
   * Show close button
   */
  closable?: boolean;
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;
  /**
   * Toast position
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom';
}

const statusClasses = {
  info: 'bg-blue-50 text-blue-900 border-blue-200',
  success: 'bg-green-50 text-green-900 border-green-200',
  warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
  error: 'bg-red-50 text-red-900 border-red-200',
};

const iconPaths = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top': 'top-4 left-1/2 -translate-x-1/2',
  'bottom': 'bottom-4 left-1/2 -translate-x-1/2',
};

export const Toast: React.FC<ToastProps> = ({
  status = 'info',
  title,
  description,
  closable = true,
  onClose,
  position = 'top-right',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      role="alert"
      className={`
        fixed z-50 min-w-[300px] max-w-md
        rounded-lg border shadow-lg p-4
        animate-[slideIn_0.2s_ease-out]
        ${statusClasses[status]}
        ${positionClasses[position]}
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
          {description && (
            <p className="text-sm">{description}</p>
          )}
          {children && (
            <div className="text-sm mt-2">{children}</div>
          )}
        </div>

        {closable && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-auto opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close toast"
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
