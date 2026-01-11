import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Feather, Menu, X } from 'lucide-react';
import type { NavbarProps } from '../types';

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'blog' | 'free-agent' | 'pricing', id?: string): void => {
    setIsMobileMenuOpen(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'How It Works', page: 'home' as const, id: 'how-it-works' },
    { label: 'Features', page: 'home' as const, id: 'features' },
    { label: 'Case Studies', page: 'home' as const, id: 'customers' },
    { label: 'Pricing', page: 'pricing' as const },
    { label: 'FAQ', page: 'home' as const, id: 'faq' },
    { label: 'Free Agent', page: 'free-agent' as const, highlight: true },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm'
            : 'bg-white/50 backdrop-blur-sm border-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            {/* Custom Logo: Crossed Quills */}
            <div className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-purple-100 border border-purple-200 backdrop-blur-md overflow-hidden group-hover:bg-purple-200 transition-colors shadow-sm">
               {/* Gradient glow behind */}
               <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               
               {/* Quill 1 (Accent - Behind) */}
               <Feather 
                  size={18} 
                  className="text-purple-600 absolute transform transition-transform duration-300 group-hover:rotate-6"
                  style={{ transform: 'scaleX(-1) rotate(-10deg) translateX(1px)', filter: 'drop-shadow(0 0 2px rgba(147,51,234,0.3))' }}
                  strokeWidth={2.5}
               />
               
               {/* Quill 2 (White - Front) */}
               <Feather 
                  size={18} 
                  className="text-gray-900 absolute transform transition-transform duration-300 group-hover:-rotate-6"
                  style={{ transform: 'rotate(-10deg) translateX(-1px)' }}
                  strokeWidth={2.5}
               />
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">Autoquill AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => handleNavClick(item.page, item.id)} 
                className={`hover:text-purple-600 transition-colors ${item.highlight ? 'text-purple-700' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <button
              onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
              className="hidden sm:flex text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg bg-purple-600 text-white hover:bg-purple-700 hover:-translate-y-0.5 items-center gap-2"
            >
              <Phone size={14} /> Book a Demo Call
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[72px] left-4 right-4 z-50 md:hidden bg-white/98 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    onClick={() => handleNavClick(item.page, item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      item.highlight 
                        ? 'text-purple-700 bg-purple-50 hover:bg-purple-100' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Divider */}
              <div className="mx-4 h-px bg-white/10" />

              {/* CTA Button */}
              <div className="p-4">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                  }}
                  className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Phone size={18} />
                  Book a Demo Call
                </motion.button>
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="px-4 pb-4 pt-2 text-center"
              >
                <a 
                  href="mailto:adrian@autoquillai.com" 
                  className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                >
                  adrian@autoquillai.com
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
