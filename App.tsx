import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { CTA } from './components/CTA';
import { ROIForm } from './components/ROIForm';
import { Navbar } from './components/Navbar';
import { MouseFollower } from './components/MouseFollower';
import { Blog } from './components/Blog';
import { FreeAgent } from './components/FreeAgent';
import type { Page } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-accent selection:text-white relative">
      <MouseFollower />
      
      {/* Background Grid - Dark Mode Version */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <Navbar isScrolled={isScrolled} onNavigate={setCurrentPage} />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={setCurrentPage} />
            <TrustedBy />
            <Features />
            <SocialProof />
            <ROIForm />
            <CTA />
          </>
        ) : currentPage === 'blog' ? (
          <Blog />
        ) : (
          <FreeAgent />
        )}
      </main>

      <footer className="w-full py-8 border-t border-white/5 bg-neutral-950 relative z-10">
        <div className="container mx-auto px-6 text-center text-neutral-600 text-sm">
          <p>© 2026 Autoquill Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;