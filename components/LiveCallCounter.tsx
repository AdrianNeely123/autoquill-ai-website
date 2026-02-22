import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export const LiveCallCounter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-full shadow-lg"
    >
      {/* Live Indicator */}
      <div className="relative flex items-center justify-center">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>

      {/* Icon */}
      <div>
        <Phone size={20} className="text-green-700" />
      </div>

      {/* Counter */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-medium text-gray-600">Our AI has answered</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-green-700">60,000+</span>
          <span className="text-sm font-semibold text-gray-700">calls handled</span>
        </div>
      </div>
    </motion.div>
  );
};

