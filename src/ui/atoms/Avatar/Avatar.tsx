import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar source image
   */
  src?: string;
  /**
   * Alt text for image
   */
  alt?: string;
  /**
   * Avatar size
   */
  avatarSize?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Display name (shown as initials if no src)
   */
  name?: string;
  /**
   * Color scheme for initials
   */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

const sizeClasses = {
  small: 'w-8 h-8 text-xs',
  medium: 'w-12 h-12 text-sm',
  large: 'w-16 h-16 text-lg',
  xlarge: 'w-24 h-24 text-2xl',
};

const colorClasses = {
  primary: 'bg-primary-600 text-white',
  secondary: 'bg-secondary-600 text-white',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-600 text-white',
  danger: 'bg-red-600 text-white',
  info: 'bg-blue-600 text-white',
};

const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  avatarSize = 'medium',
  name = '',
  colorScheme = 'primary',
  className = '',
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);

  const showInitials = !src || imageError;

  return (
    <div
      className={`
        inline-flex items-center justify-center rounded-full overflow-hidden
        ${sizeClasses[avatarSize]}
        ${showInitials ? colorClasses[colorScheme] : 'bg-gray-200'}
        ${className}
      `}
      {...props}
    >
      {!showInitials ? (
        <img
          src={src}
          alt={alt || name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="font-semibold">
          {name ? getInitials(name) : '?'}
        </span>
      )}
    </div>
  );
};
