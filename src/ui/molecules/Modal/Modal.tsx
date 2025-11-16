import React, { useEffect } from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Is modal open
   */
  isOpen: boolean;
  /**
   * Callback when modal should close
   */
  onClose: () => void;
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal size
   */
  size?: 'small' | 'medium' | 'large' | 'full';
  /**
   * Close on overlay click
   */
  closeOnOverlayClick?: boolean;
  /**
   * Close on escape key
   */
  closeOnEscape?: boolean;
}

const sizeClasses = {
  small: 'max-w-md',
  medium: 'max-w-2xl',
  large: 'max-w-4xl',
  full: 'max-w-full m-4',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = '',
  children,
  ...props
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`
          relative bg-white rounded-lg shadow-xl w-full
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 flex justify-end gap-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
