import React, { useState } from 'react';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Accordion items
   */
  items: AccordionItem[];
  /**
   * Allow multiple items to be open
   */
  allowMultiple?: boolean;
  /**
   * Default open indexes
   */
  defaultIndex?: number | number[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultIndex,
  className = '',
  ...props
}) => {
  const getInitialOpenState = (): Set<number> => {
    if (defaultIndex === undefined) return new Set();
    if (Array.isArray(defaultIndex)) return new Set(defaultIndex);
    return new Set([defaultIndex]);
  };

  const [openItems, setOpenItems] = useState<Set<number>>(getInitialOpenState());

  const toggleItem = (index: number) => {
    if (items[index].disabled) return;

    setOpenItems(prev => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }

      return newSet;
    });
  };

  return (
    <div className={`divide-y divide-gray-200 border border-gray-200 rounded-lg ${className}`} {...props}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);

        return (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              disabled={item.disabled}
              className={`
                w-full px-6 py-4 text-left flex items-center justify-between
                hover:bg-gray-50 transition-colors
                ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-button-${index}`}
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <svg
                className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-button-${index}`}
                className="px-6 py-4 text-gray-700 bg-gray-50"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
