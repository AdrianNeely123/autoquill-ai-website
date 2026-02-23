import React, { useId } from 'react';

interface LogoIconProps {
  size?: number;
  className?: string;
}

interface LogoProps {
  size?: number;
  className?: string;
  textClassName?: string;
  darkMode?: boolean;
}

/**
 * AutoQuill AI feather + waveform icon.
 *
 * Diagonal quill feather with 3D perpendicular lighting gradient,
 * dense barbs (8 per side), and 12-bar audio waveform.
 */
export const LogoIcon: React.FC<LogoIconProps> = ({ size = 32, className = '' }) => {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size * 0.73}
      viewBox="0 0 82 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AutoQuill AI logo"
    >
      <defs>
        <linearGradient id={`fg${uid}`} x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="40%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
      </defs>

      {/* Feather */}
      <path d="M 40 50 C 24 14, 8 1, 2 8 C 12 32, 28 56, 40 50 Z" fill={`url(#fg${uid})`} />
      <line x1="3" y1="8" x2="38" y2="49" stroke="white" strokeWidth="1" opacity="0.32" />

      {/* Upper barbs (lit side) */}
      <line x1="7" y1="13" x2="11" y2="6" stroke="white" strokeWidth="0.55" opacity="0.48" />
      <line x1="11" y1="18" x2="16" y2="10" stroke="white" strokeWidth="0.55" opacity="0.44" />
      <line x1="14" y1="22" x2="19" y2="13" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="18" y1="26" x2="23" y2="18" stroke="white" strokeWidth="0.5" opacity="0.36" />
      <line x1="21" y1="30" x2="25" y2="22" stroke="white" strokeWidth="0.5" opacity="0.32" />
      <line x1="25" y1="34" x2="29" y2="27" stroke="white" strokeWidth="0.5" opacity="0.26" />
      <line x1="29" y1="38" x2="32" y2="32" stroke="white" strokeWidth="0.4" opacity="0.2" />
      <line x1="33" y1="43" x2="35" y2="37" stroke="white" strokeWidth="0.4" opacity="0.15" />

      {/* Lower barbs (shadow side) */}
      <line x1="7" y1="14" x2="5" y2="22" stroke="white" strokeWidth="0.4" opacity="0.2" />
      <line x1="11" y1="19" x2="9" y2="27" stroke="white" strokeWidth="0.4" opacity="0.18" />
      <line x1="14" y1="23" x2="13" y2="32" stroke="white" strokeWidth="0.4" opacity="0.15" />
      <line x1="18" y1="27" x2="17" y2="35" stroke="white" strokeWidth="0.4" opacity="0.12" />
      <line x1="21" y1="31" x2="21" y2="39" stroke="white" strokeWidth="0.35" opacity="0.1" />
      <line x1="25" y1="35" x2="25" y2="43" stroke="white" strokeWidth="0.35" opacity="0.08" />
      <line x1="29" y1="39" x2="29" y2="47" stroke="white" strokeWidth="0.3" opacity="0.06" />
      <line x1="33" y1="44" x2="33" y2="50" stroke="white" strokeWidth="0.3" opacity="0.05" />

      <circle cx="40" cy="50" r="1.2" fill="#3B0764" />

      {/* Waveform */}
      <rect x="46" y="47" width="1.8" height="6" rx="0.9" fill="#7C3AED" />
      <rect x="49" y="43" width="1.8" height="14" rx="0.9" fill="#7C3AED" />
      <rect x="52" y="39" width="1.8" height="22" rx="0.9" fill="#7C3AED" />
      <rect x="55" y="45" width="1.8" height="10" rx="0.9" fill="#8B5CF6" />
      <rect x="58" y="36" width="1.8" height="28" rx="0.9" fill="#8B5CF6" />
      <rect x="61" y="41" width="1.8" height="18" rx="0.9" fill="#8B5CF6" />
      <rect x="64" y="38" width="1.8" height="24" rx="0.9" fill="#A78BFA" />
      <rect x="67" y="44" width="1.8" height="12" rx="0.9" fill="#A78BFA" />
      <rect x="70" y="40" width="1.8" height="20" rx="0.9" fill="#A78BFA" />
      <rect x="73" y="42" width="1.8" height="16" rx="0.9" fill="#C4B5FD" />
      <rect x="76" y="46" width="1.8" height="8" rx="0.9" fill="#C4B5FD" />
      <rect x="79" y="48" width="1.8" height="4" rx="0.9" fill="#C4B5FD" />
    </svg>
  );
};

/**
 * Full logo: feather + waveform icon with "AutoQuill AI" text.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 32,
  className = '',
  textClassName = '',
  darkMode = false,
}) => {
  const uid = useId().replace(/:/g, '');

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={size} />
      <svg
        height={size * 0.55}
        viewBox="0 0 340 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AutoQuill AI"
      >
        <defs>
          {darkMode ? (
            <linearGradient id={`tg${uid}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F5F3FF" />
              <stop offset="60%" stopColor="#E9E5F5" />
              <stop offset="100%" stopColor="#C4B5FD" />
            </linearGradient>
          ) : (
            <linearGradient id={`tg${uid}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1E1B2E" />
              <stop offset="60%" stopColor="#2D2150" />
              <stop offset="100%" stopColor="#5B21B6" />
            </linearGradient>
          )}
        </defs>
        <text
          x="0"
          y="27"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        >
          <tspan fontSize="28" fontWeight="600" fill={`url(#tg${uid})`} letterSpacing="-0.4">
            AutoQuill
          </tspan>
          <tspan
            fontSize="28"
            fontWeight="300"
            fill={darkMode ? '#A78BFA' : '#7C3AED'}
            letterSpacing="2.4"
            dx="8"
          >
            AI
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
