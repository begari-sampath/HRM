import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };
  
  const fallback = alt ? alt.charAt(0).toUpperCase() : '?';
  
  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-full object-cover ring-2 ring-white"
        />
      ) : (
        <div className="h-full w-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold ring-2 ring-white">
          {fallback}
        </div>
      )}
    </div>
  );
};

export default Avatar;