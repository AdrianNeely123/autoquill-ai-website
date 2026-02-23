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
 * AutoQuill AI feather icon (no waveform).
 *
 * Diagonal quill feather with 3D perpendicular lighting gradient
 * and dense barbs (8 per side).
 */
export const LogoIcon: React.FC<LogoIconProps> = ({ size = 32, className = '' }) => {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size * 1.23}
      viewBox="0 0 44 54"
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
      <path d="M 38 50 C 22 14, 6 1, 0 8 C 10 32, 26 56, 38 50 Z" fill={`url(#fg${uid})`} />
      <line x1="1" y1="8" x2="36" y2="49" stroke="white" strokeWidth="1" opacity="0.32" />

      {/* Upper barbs (lit side) */}
      <line x1="5" y1="13" x2="9" y2="6" stroke="white" strokeWidth="0.55" opacity="0.48" />
      <line x1="9" y1="18" x2="14" y2="10" stroke="white" strokeWidth="0.55" opacity="0.44" />
      <line x1="12" y1="22" x2="17" y2="13" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="16" y1="26" x2="21" y2="18" stroke="white" strokeWidth="0.5" opacity="0.36" />
      <line x1="19" y1="30" x2="23" y2="22" stroke="white" strokeWidth="0.5" opacity="0.32" />
      <line x1="23" y1="34" x2="27" y2="27" stroke="white" strokeWidth="0.5" opacity="0.26" />
      <line x1="27" y1="38" x2="30" y2="32" stroke="white" strokeWidth="0.4" opacity="0.2" />
      <line x1="31" y1="43" x2="33" y2="37" stroke="white" strokeWidth="0.4" opacity="0.15" />

      {/* Lower barbs (shadow side) */}
      <line x1="5" y1="14" x2="3" y2="22" stroke="white" strokeWidth="0.4" opacity="0.2" />
      <line x1="9" y1="19" x2="7" y2="27" stroke="white" strokeWidth="0.4" opacity="0.18" />
      <line x1="12" y1="23" x2="11" y2="32" stroke="white" strokeWidth="0.4" opacity="0.15" />
      <line x1="16" y1="27" x2="15" y2="35" stroke="white" strokeWidth="0.4" opacity="0.12" />
      <line x1="19" y1="31" x2="19" y2="39" stroke="white" strokeWidth="0.35" opacity="0.1" />
      <line x1="23" y1="35" x2="23" y2="43" stroke="white" strokeWidth="0.35" opacity="0.08" />
    </svg>
  );
};

/**
 * Full logo: feather icon with "AutoQuill AI" text and waveform aligned under text.
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
      <div className="flex flex-col">
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
        <svg
          width={size * 3.2}
          height={size * 0.22}
          viewBox="0 0 100 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="0" y="4" width="2.5" height="3" rx="1" fill="#7C3AED" />
          <rect x="6" y="2.5" width="2.5" height="5" rx="1" fill="#7C3AED" />
          <rect x="12" y="1" width="2.5" height="8" rx="1" fill="#7C3AED" />
          <rect x="18" y="3" width="2.5" height="4" rx="1" fill="#8B5CF6" />
          <rect x="24" y="0" width="2.5" height="10" rx="1" fill="#8B5CF6" />
          <rect x="30" y="2" width="2.5" height="6" rx="1" fill="#8B5CF6" />
          <rect x="36" y="1" width="2.5" height="8" rx="1" fill="#A78BFA" />
          <rect x="42" y="3.5" width="2.5" height="3" rx="1" fill="#A78BFA" />
          <rect x="48" y="1.5" width="2.5" height="7" rx="1" fill="#A78BFA" />
          <rect x="54" y="2.5" width="2.5" height="5" rx="1" fill="#C4B5FD" />
          <rect x="60" y="3.5" width="2.5" height="3" rx="1" fill="#C4B5FD" />
          <rect x="66" y="4" width="2.5" height="2" rx="1" fill="#C4B5FD" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
