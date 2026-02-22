import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ShineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  pulse?: boolean;
  icon?: boolean;
  href?: string;
  type?: 'button' | 'submit';
}

export const ShineButton: React.FC<ShineButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  pulse = false,
  icon = false,
  href,
  type = 'button',
}) => {
  const variants = {
    primary:
      'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-transparent',
    secondary:
      'bg-white text-gray-900 hover:bg-gray-50 hover:shadow-lg border border-gray-200',
    outline:
      'bg-transparent text-purple-600 border border-purple-300 hover:bg-purple-50 hover:border-purple-400',
  };

  const baseStyles =
    'relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden hover:-translate-y-0.5';

  const pulseAnimation = pulse
    ? {
        animate: { scale: [1, 1.05, 1] },
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
      }
    : {};

  const content = (
    <>
      {/* Shine sweep effect */}
      {variant === 'primary' && (
        <span
          className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-full rotate-12 bg-white opacity-10 group-hover:-translate-x-full ease"
          aria-hidden="true"
        />
      )}
      <span className="relative flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...pulseAnimation}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...pulseAnimation}
    >
      {content}
    </motion.button>
  );
};

export default ShineButton;
