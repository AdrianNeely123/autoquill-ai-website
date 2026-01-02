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
import { ArticlePage } from './components/ArticlePage';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { StickyCTA } from './components/StickyCTA';
import { FAQ } from './components/FAQ';
import { DemoVideo } from './components/DemoVideo';
import { Pricing } from './components/Pricing';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import type { Page, ArticleSlug } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentArticle, setCurrentArticle] = useState<ArticleSlug | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setCurrentArticle(null);
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (slug: ArticleSlug) => {
    setCurrentArticle(slug);
    setCurrentPage('article');
    window.scrollTo(0, 0);
  };

  // Render the appropriate page content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <TrustedBy />
            <DemoVideo />
            <Features />
            <SocialProof />
            <Pricing />
            <FAQ />
            <ROIForm />
            <CTA />
          </>
        );
      case 'blog':
        return <Blog onArticleClick={handleArticleClick} />;
      case 'article':
        return currentArticle ? (
          <ArticlePage slug={currentArticle} onNavigate={handleNavigate} />
        ) : (
          <Blog onArticleClick={handleArticleClick} />
        );
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsOfService onNavigate={handleNavigate} />;
      case 'free-agent':
      default:
        return <FreeAgent />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-accent selection:text-white relative">
      <MouseFollower />
      
      {/* Exit Intent Popup */}
      {currentPage === 'home' && <ExitIntentPopup />}
      
      {/* Sticky CTA Bar */}
      {currentPage === 'home' && <StickyCTA onNavigate={handleNavigate} />}
      
      {/* Background Grid - Dark Mode Version */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <Navbar isScrolled={isScrolled} onNavigate={handleNavigate} />
      
      <main className="relative z-10 flex flex-col items-center w-full" role="main">
        {renderPageContent()}
      </main>

      <footer 
        className="w-full py-12 border-t border-white/5 bg-neutral-950 relative z-10"
        role="contentinfo"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-bold text-white mb-3">Autoquill AI</h2>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-md mb-4">
                AI-powered receptionist and voice agent for small businesses. Never miss a call again with 24/7 automated phone answering, appointment scheduling, and lead qualification.
              </p>
              <p className="text-neutral-600 text-xs">
                Serving dentists, HVAC companies, plumbers, med spas, law firms, real estate agents, and more across the United States.
              </p>
            </div>

            {/* Industries Served */}
            <nav aria-label="Industries we serve">
              <h3 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">Industries</h3>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li><span className="hover:text-accent transition-colors cursor-default">AI Receptionist for Dentists</span></li>
                <li><span className="hover:text-accent transition-colors cursor-default">HVAC Answering Service</span></li>
                <li><span className="hover:text-accent transition-colors cursor-default">Plumber Call Answering</span></li>
                <li><span className="hover:text-accent transition-colors cursor-default">Med Spa Receptionist</span></li>
                <li><span className="hover:text-accent transition-colors cursor-default">Law Firm Intake</span></li>
                <li><span className="hover:text-accent transition-colors cursor-default">Real Estate Lead Capture</span></li>
              </ul>
            </nav>

            {/* Contact & Links */}
            <nav aria-label="Company links">
              <h3 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>
                  <a 
                    href="mailto:adrian@autoquillai.com" 
                    className="hover:text-accent transition-colors"
                    itemProp="email"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a 
                    href="https://calendly.com/adrian-autoquillai/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Book a Demo
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('privacy')}
                    className="hover:text-accent transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('terms')}
                    className="hover:text-accent transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              © 2026 Autoquill Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-neutral-600">
              <span>AI Receptionist</span>
              <span>•</span>
              <span>Virtual Phone Answering</span>
              <span>•</span>
              <span>24/7 Call Handling</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
