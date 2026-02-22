import React from 'react';

interface WaveformVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  className?: string;
  color?: string;
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  isPlaying,
  barCount = 20,
  className = '',
  color = 'bg-purple-500',
}) => {
  return (
    <div className={`flex items-end gap-[2px] h-8 w-full ${className}`} aria-hidden="true">
      {Array.from({ length: barCount }).map((_, i) => {
        const staticHeight = 20 + Math.random() * 60;
        return (
          <div
            key={i}
            className={`flex-1 min-w-0 rounded-full transition-all ${color} ${
              isPlaying ? 'animate-wave' : ''
            }`}
            style={{
              height: isPlaying ? undefined : `${staticHeight}%`,
              animationDelay: isPlaying ? `${i * 0.05}s` : undefined,
              animationDuration: isPlaying ? `${0.8 + Math.random() * 0.4}s` : undefined,
            }}
          />
        );
      })}
    </div>
  );
};

export default WaveformVisualizer;
