import React from 'react';

interface BlobBackgroundProps {
  className?: string;
  opacity?: number;
}

export const BlobBackground: React.FC<BlobBackgroundProps> = ({
  className = '',
  opacity = 0.3,
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Purple blob */}
      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"
        style={{ opacity }}
      />
      {/* Violet blob */}
      <div
        className="absolute top-0 -right-4 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"
        style={{ opacity, animationDelay: '2s' }}
      />
      {/* Blue blob */}
      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"
        style={{ opacity, animationDelay: '4s' }}
      />
    </div>
  );
};

export default BlobBackground;
