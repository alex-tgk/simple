import React from 'react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

export interface TableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * Table columns
   */
  columns: Column<T>[];
  /**
   * Table data
   */
  data: T[];
  /**
   * Table variant
   */
  variant?: 'simple' | 'striped' | 'bordered';
  /**
   * Is hoverable
   */
  hoverable?: boolean;
  /**
   * Is loading
   */
  loading?: boolean;
  /**
   * Empty state message
   */
  emptyMessage?: string;
}

const variantClasses = {
  simple: '',
  striped: '[&_tbody_tr:nth-child(even)]:bg-gray-50',
  bordered: 'border border-gray-200',
};

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  variant = 'simple',
  hoverable = false,
  loading = false,
  emptyMessage = 'No data available',
  className = '',
  ...props
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table
        className={`
          w-full text-left
          ${variantClasses[variant]}
          ${className}
        `}
        {...props}
      >
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-sm font-semibold text-gray-900"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-8 text-center text-gray-500"
              >
                <div className="flex justify-center">
                  <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-8 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  ${hoverable ? 'hover:bg-gray-50 transition-colors' : ''}
                `}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {column.render
                      ? column.render(item)
                      : item[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
