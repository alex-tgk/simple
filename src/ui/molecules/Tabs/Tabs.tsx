import React, { useState } from 'react';

export interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Array of tab items
   */
  tabs: Tab[];
  /**
   * Default active tab index
   */
  defaultIndex?: number;
  /**
   * Controlled active tab index
   */
  activeIndex?: number;
  /**
   * Callback when tab changes
   */
  onChange?: (index: number) => void;
  /**
   * Tab variant
   */
  variant?: 'line' | 'enclosed' | 'soft-rounded';
}

const variantClasses = {
  line: {
    list: 'border-b border-gray-200',
    tab: 'pb-3 border-b-2 border-transparent hover:border-gray-300',
    activeTab: 'border-primary-600 text-primary-600',
  },
  enclosed: {
    list: 'border-b border-gray-200',
    tab: 'border border-transparent rounded-t-lg hover:border-gray-300',
    activeTab: 'border-gray-200 border-b-white bg-white -mb-px',
  },
  'soft-rounded': {
    list: '',
    tab: 'rounded-md hover:bg-gray-100',
    activeTab: 'bg-primary-100 text-primary-700',
  },
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultIndex = 0,
  activeIndex: controlledIndex,
  onChange,
  variant = 'line',
  className = '',
  ...props
}) => {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const isControlled = controlledIndex !== undefined;
  const activeIndex = isControlled ? controlledIndex : internalIndex;

  const handleTabClick = (index: number) => {
    if (tabs[index].disabled) return;

    if (!isControlled) {
      setInternalIndex(index);
    }
    onChange?.(index);
  };

  return (
    <div className={className} {...props}>
      <div
        role="tablist"
        className={`flex gap-1 ${variantClasses[variant].list}`}
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={index}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              disabled={tab.disabled}
              onClick={() => handleTabClick(index)}
              className={`
                px-4 py-2 font-medium transition-colors
                ${variantClasses[variant].tab}
                ${isActive ? variantClasses[variant].activeTab : 'text-gray-600'}
                ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              role="tabpanel"
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              hidden={!isActive}
            >
              {isActive && tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
