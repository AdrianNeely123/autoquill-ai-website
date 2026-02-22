import React, { useId } from 'react';

interface LogoIconProps {
  size?: number;
  className?: string;
}

interface LogoProps {
  size?: number;
  className?: string;
  textClassName?: string;
}

/**
 * Quill Wings emblem for AutoQuill AI.
 *
 * Two sets of wide quill-feather blades spread upward and outward from center,
 * inspired by the Wings of Freedom. Left wing dark indigo (behind), right wing
 * bright violet (in front). AI sparkle at the convergence point.
 */
export const LogoIcon: React.FC<LogoIconProps> = ({ size = 32, className = '' }) => {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AutoQuill AI logo"
    >
      <defs>
        <linearGradient id={`qa${uid}`} x1="30%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6d28d9" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id={`qd${uid}`} x1="70%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="50%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <filter id={`glow${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── LEFT WING (dark indigo, drawn first = behind) ── */}
      <g>
        {/* F6 outermost */}
        <path d="M32,50 C20,54 6,48 6,44 C10,44 24,52 32,50Z" fill={`url(#qd${uid})`} opacity="0.7" />
        {/* F5 */}
        <path d="M32,50 C16,52 2,42 4,36 C8,38 26,48 32,50Z" fill={`url(#qd${uid})`} opacity="0.8" />
        {/* F4 */}
        <path d="M32,50 C18,52 4,34 6,26 C12,30 28,46 32,50Z" fill={`url(#qd${uid})`} opacity="0.85" />
        {/* F3 */}
        <path d="M32,50 C22,50 10,28 10,16 C18,22 30,42 32,50Z" fill={`url(#qd${uid})`} opacity="0.9" />
        {/* F2 */}
        <path d="M32,50 C24,48 12,18 16,8 C24,16 36,44 32,50Z" fill={`url(#qd${uid})`} opacity="0.95" />
        {/* F1 innermost */}
        <path d="M32,50 C28,46 24,14 28,4 C34,12 36,42 32,50Z" fill={`url(#qd${uid})`} />
      </g>

      {/* ── RIGHT WING (violet, drawn last = in front) ── */}
      <g>
        {/* F6 outermost */}
        <path d="M32,50 C44,54 58,48 58,44 C54,44 40,52 32,50Z" fill={`url(#qa${uid})`} opacity="0.7" />
        {/* F5 */}
        <path d="M32,50 C48,52 62,42 60,36 C56,38 38,48 32,50Z" fill={`url(#qa${uid})`} opacity="0.8" />
        {/* F4 */}
        <path d="M32,50 C46,52 60,34 58,26 C52,30 36,46 32,50Z" fill={`url(#qa${uid})`} opacity="0.85" />
        {/* F3 */}
        <path d="M32,50 C42,50 54,28 54,16 C46,22 34,42 32,50Z" fill={`url(#qa${uid})`} opacity="0.9" />
        {/* F2 */}
        <path d="M32,50 C40,48 52,18 48,8 C40,16 28,44 32,50Z" fill={`url(#qa${uid})`} opacity="0.95" />
        {/* F1 innermost */}
        <path d="M32,50 C36,46 40,14 36,4 C30,12 28,42 32,50Z" fill={`url(#qa${uid})`} />
      </g>

      {/* ── AI SPARKLE ── */}
      <g filter={`url(#glow${uid})`}>
        <path d="M32,46 L33.5,49 L37,50 L33.5,51 L32,54 L30.5,51 L27,50 L30.5,49Z" fill="#c4b5fd" opacity="0.9" />
        <circle cx="32" cy="50" r="1.5" fill="white" opacity="0.95" />
      </g>
    </svg>
  );
};

/**
 * Full logo: Quill Wings emblem with "AutoQuill AI" text.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 32,
  className = '',
  textClassName = '',
}) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <LogoIcon size={size} />
    <span
      className={`font-bold tracking-tight ${textClassName}`}
      style={{ fontSize: size * 0.56 }}
    >
      AutoQuill AI
    </span>
  </div>
);

export default Logo;
