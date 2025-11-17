import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Breadcrumb items
   */
  items: BreadcrumbItem[];
  /**
   * Separator character
   */
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className = '',
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm ${className}`}
      {...props}
    >
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = item.isCurrentPage || isLast;

          return (
            <li key={item.href || `breadcrumb-${index}`} className="flex items-center gap-2">
              {item.href && !isCurrent ? (
                <a
                  href={item.href}
                  className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`
                    ${isCurrent ? 'text-gray-900 font-medium' : 'text-gray-600'}
                  `}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-gray-400" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
