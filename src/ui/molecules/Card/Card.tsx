import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant
   */
  variant?: 'elevated' | 'outlined' | 'filled';
  /**
   * Padding size
   */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Is the card hoverable/clickable
   */
  hoverable?: boolean;
}

const variantClasses = {
  elevated: 'bg-white shadow-md',
  outlined: 'bg-white border border-gray-200',
  filled: 'bg-gray-50 border border-gray-100',
};

const paddingClasses = {
  none: 'p-0',
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'medium',
  hoverable = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`
        rounded-lg transition-shadow duration-200
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverable ? 'hover:shadow-lg cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Header title
   */
  title?: string;
  /**
   * Header subtitle
   */
  subtitle?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {title && <h3 className="text-xl font-semibold text-gray-900">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      {children}
    </div>
  );
};

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FC<CardBodyProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter: React.FC<CardFooterProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};
