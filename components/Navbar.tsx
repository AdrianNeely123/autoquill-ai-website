import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, LogIn } from 'lucide-react';
import type { NavbarProps } from '../types';
import { trackPhoneClick, trackCTAClick, CTA_NAMES } from '../utils/analytics';
import { Logo } from './ui/Logo';
import { ShineButton } from './ui/ShineButton';

const SIGN_IN_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3000/login'
  : 'https://app.autoquillai.com/login';

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (page: 'home' | 'blog' | 'free-agent' | 'pricing' | 'calculator', id?: string): void => {
    setIsMobileMenuOpen(false);
    if (id && page === 'home') {
       if (location.pathname === '/') {
         const element = document.getElementById(id);
         if (element) element.scrollIntoView({ behavior: 'smooth' });
       } else {
         navigate('/');
         setTimeout(() => {
           const element = document.getElementById(id);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
         }, 100);
       }
    } else {
       const path = page === 'home' ? '/' : `/${page}`;
       navigate(path);
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'How It Works', page: 'home' as const, id: 'demo-experience' },
    { label: 'Features', page: 'home' as const, id: 'features' },
    { label: 'Case Studies', page: 'home' as const, id: 'customers' },
    { label: 'Pricing', page: 'pricing' as const },
    { label: 'Calculator', page: 'calculator' as const },
    { label: 'FAQ', page: 'home' as const, id: 'faq' },
    { label: 'Blog', page: 'blog' as const },
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
            <Logo size={36} className="group-hover:scale-105 transition-transform" textClassName="text-gray-900" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page, item.id)}
                className="relative hover:text-purple-600 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Sign In */}
            <a
              href={SIGN_IN_URL}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors px-4 py-2.5 rounded-lg border border-gray-200 hover:border-purple-300 bg-white/80 hover:bg-purple-50"
            >
              <LogIn size={14} />
              Sign In
            </a>

            {/* Desktop CTA */}
            <ShineButton
              className="hidden sm:inline-flex text-sm px-5 py-2.5"
              onClick={() => {
                trackCTAClick(CTA_NAMES.BOOK_CALL, 'navbar');
                window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
              }}
            >
              <Phone size={14} /> Book a Demo Call
            </ShineButton>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-gray-200 text-gray-700 hover:bg-white/10 transition-colors"
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
                    className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Sign In Link */}
              <div className="px-4 pb-1">
                <motion.a
                  href={SIGN_IN_URL}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-base font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                >
                  <LogIn size={18} />
                  Sign In
                </motion.a>
              </div>

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
