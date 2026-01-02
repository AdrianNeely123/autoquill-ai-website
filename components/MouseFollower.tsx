import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const MouseFollower: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  
  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 300); // Center the 600px div
      y.set(e.clientY - 300);
      if (!isActive) setIsActive(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, isActive]);

  if (!isActive) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-screen opacity-10"
      style={{
        x,
        y,
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(255,255,255,0) 60%)',
        borderRadius: '50%',
      }}
    />
  );
};