import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Feather } from 'lucide-react';
import type { NavbarProps } from '../types';

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate }) => {
  const handleNavClick = (page: 'home' | 'blog' | 'free-agent', id?: string): void => {
    onNavigate(page);
    if (id && page === 'home') {
       setTimeout(() => {
           const element = document.getElementById(id);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-white/5 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          {/* Custom Logo: Crossed Quills */}
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group-hover:bg-white/10 transition-colors shadow-sm">
             {/* Gradient glow behind */}
             <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             
             {/* Quill 1 (Accent - Behind) */}
             <Feather 
                size={18} 
                className="text-accent absolute transform transition-transform duration-300 group-hover:rotate-6"
                style={{ transform: 'scaleX(-1) rotate(-10deg) translateX(1px)', filter: 'drop-shadow(0 0 2px rgba(139,92,246,0.3))' }}
                strokeWidth={2.5}
             />
             
             {/* Quill 2 (White - Front) */}
             <Feather 
                size={18} 
                className="text-white absolute transform transition-transform duration-300 group-hover:-rotate-6"
                style={{ transform: 'rotate(-10deg) translateX(-1px)' }}
                strokeWidth={2.5}
             />
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-white/90 transition-colors">Autoquill AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <button onClick={() => handleNavClick('home', 'features')} className="hover:text-accent transition-colors">Solutions</button>
          <button onClick={() => handleNavClick('home', 'customers')} className="hover:text-accent transition-colors">Customers</button>
          <button onClick={() => handleNavClick('blog')} className="hover:text-accent transition-colors">Blog</button>
          <button onClick={() => handleNavClick('free-agent')} className="hover:text-accent transition-colors text-accent">Free Agent</button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
            className="text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] bg-accent text-white hover:bg-accent-dark hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Phone size={14} className="hidden sm:block" /> Book a Strategy Call
          </button>
        </div>
      </div>
    </motion.nav>
  );
};