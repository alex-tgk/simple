import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Divider orientation
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Divider thickness
   */
  thickness?: 'thin' | 'medium' | 'thick';
  /**
   * Divider variant
   */
  variant?: 'solid' | 'dashed' | 'dotted';
  /**
   * Optional label
   */
  label?: string;
  /**
   * Label position
   */
  labelPosition?: 'left' | 'center' | 'right';
}

const thicknessClasses = {
  thin: 'border-t',
  medium: 'border-t-2',
  thick: 'border-t-4',
};

const verticalThicknessClasses = {
  thin: 'border-l',
  medium: 'border-l-2',
  thick: 'border-l-4',
};

const variantClasses = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 'thin',
  variant = 'solid',
  label,
  labelPosition = 'center',
  className = '',
  ...props
}) => {
  if (label && orientation === 'horizontal') {
    const justifyClass = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    }[labelPosition];

    return (
      <div className={`flex items-center ${justifyClass} ${className}`} role="separator">
        {labelPosition !== 'left' && (
          <hr
            className={`
              flex-1 border-gray-300
              ${thicknessClasses[thickness]}
              ${variantClasses[variant]}
            `}
            {...props}
          />
        )}
        <span className="px-3 text-sm text-gray-600">{label}</span>
        {labelPosition !== 'right' && (
          <hr
            className={`
              flex-1 border-gray-300
              ${thicknessClasses[thickness]}
              ${variantClasses[variant]}
            `}
            {...props}
          />
        )}
      </div>
    );
  }

  if (orientation === 'vertical') {
    return (
      <hr
        className={`
          inline-block h-full border-gray-300
          ${verticalThicknessClasses[thickness]}
          ${variantClasses[variant]}
          ${className}
        `}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <hr
      className={`
        w-full border-gray-300
        ${thicknessClasses[thickness]}
        ${variantClasses[variant]}
        ${className}
      `}
      role="separator"
      {...props}
    />
  );
};
