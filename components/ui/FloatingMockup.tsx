import React from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneOff } from 'lucide-react';

interface FloatingMockupProps {
  className?: string;
  callerName?: string;
  callerLabel?: string;
  inputArea?: React.ReactNode;
}

export const FloatingMockup: React.FC<FloatingMockupProps> = ({
  className = '',
  callerName = 'New Patient Call',
  callerLabel = 'Dental Office Line',
  inputArea,
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Sound wave ripples */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full border border-purple-300/30 animate-ripple"
            style={{ animationDelay: `${i * 1}s` }}
          />
        ))}
      </div>

      {/* Phone mockup */}
      <motion.div
        className="relative z-10 animate-float"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-[260px] h-[520px] bg-gray-900 rounded-[40px] p-3 shadow-2xl shadow-purple-500/20 border border-gray-700">
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 rounded-[32px] overflow-hidden flex flex-col items-center justify-between pt-14 relative">
            {/* Status bar */}
            <div className="absolute top-8 left-6 right-6 flex justify-between text-white/60 text-xs">
              <span>9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-2 border border-white/40 rounded-sm">
                  <div className="w-3/4 h-full bg-green-400 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Incoming call UI */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
              {/* Avatar with pulse */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-purple-500/30 animate-ping" />
              </div>

              {/* Caller info */}
              <div className="text-center">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">incoming call</p>
                <h3 className="text-white text-lg font-semibold">{callerName}</h3>
                <p className="text-white/60 text-sm">{callerLabel}</p>
              </div>

              {/* Voice waveform */}
              <div className="flex items-center gap-[3px] h-8 my-2" aria-hidden="true">
                {[3, 5, 8, 12, 6, 14, 10, 4, 11, 7, 13, 5, 9, 15, 6, 10, 4, 8, 12, 5].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2.5px] bg-purple-400/70 rounded-full"
                    style={{
                      animation: `wave ${0.4 + (h / 15) * 0.6}s ease-in-out ${i * 0.05}s infinite alternate`,
                      height: `${h * 2}px`,
                    }}
                  />
                ))}
              </div>

              {/* AI answering badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-400 text-xs font-semibold">AI Answering</span>
              </div>
            </div>

            {/* Bottom area: input or call action buttons */}
            {inputArea ? (
              <div className="w-full px-4 pb-5 pt-4">
                <div className="rounded-xl p-3">
                  {inputArea}
                </div>
              </div>
            ) : (
              <div className="flex gap-8 mb-8">
                <button className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30" aria-label="Decline">
                  <PhoneOff className="w-6 h-6 text-white" />
                </button>
                <button className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30" aria-label="Accept">
                  <Phone className="w-6 h-6 text-white" />
                </button>
              </div>
            )}

            {/* Bottom bar */}
            <div className="absolute bottom-3 w-32 h-1 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Glossy overlay */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default FloatingMockup;
