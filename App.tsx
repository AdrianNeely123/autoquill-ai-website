import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { MouseFollower } from './components/MouseFollower';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { StickyCTA } from './components/StickyCTA';
import { RecentSignups } from './components/RecentSignups';
import { TrustBadges } from './components/TrustBadges';
import { MissedCallWidget } from './components/MissedCallWidget';
import type { Page, ArticleSlug, IndustrySlug } from './types';

// Lazy load below-the-fold components for better initial load performance
const DemoVideo = lazy(() => import('./components/DemoVideo').then(m => ({ default: m.DemoVideo })));
const HearItLive = lazy(() => import('./components/HearItLive').then(m => ({ default: m.HearItLive })));
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const Comparison = lazy(() => import('./components/Comparison').then(m => ({ default: m.Comparison })));
const ROIForm = lazy(() => import('./components/ROIForm').then(m => ({ default: m.ROIForm })));
const UseCases = lazy(() => import('./components/UseCases').then(m => ({ default: m.UseCases })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Blog = lazy(() => import('./components/Blog').then(m => ({ default: m.Blog })));
const FreeAgent = lazy(() => import('./components/FreeAgent').then(m => ({ default: m.FreeAgent })));
const ArticlePage = lazy(() => import('./components/ArticlePage').then(m => ({ default: m.ArticlePage })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/TermsOfService').then(m => ({ default: m.TermsOfService })));
const IndustryLandingPage = lazy(() => import('./components/IndustryLandingPage').then(m => ({ default: m.IndustryLandingPage })));
const ThankYou = lazy(() => import('./components/ThankYou').then(m => ({ default: m.ThankYou })));
const PhoneAudit = lazy(() => import('./components/PhoneAudit').then(m => ({ default: m.PhoneAudit })));

// Loading skeleton for lazy-loaded sections
const SectionSkeleton: React.FC = () => (
  <div className="py-24 bg-neutral-950">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="animate-pulse">
        <div className="h-8 bg-neutral-800 rounded w-1/3 mx-auto mb-4" />
        <div className="h-4 bg-neutral-800 rounded w-2/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-neutral-900/50 rounded-2xl border border-white/5" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentArticle, setCurrentArticle] = useState<ArticleSlug | null>(null);
  const [currentIndustry, setCurrentIndustry] = useState<IndustrySlug | null>(null);

  // Handle URL hash for all pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2); // Remove '#/'
      const industries: IndustrySlug[] = ['dentists', 'hvac', 'plumbers', 'medspa', 'lawyers'];
      
      // Check for industry pages
      if (industries.includes(hash as IndustrySlug)) {
        setCurrentIndustry(hash as IndustrySlug);
        setCurrentPage('industry');
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } 
      // Check for article pages (format: article/slug)
      else if (hash.startsWith('article/')) {
        const articleSlug = hash.replace('article/', '') as ArticleSlug;
        setCurrentArticle(articleSlug);
        setCurrentPage('article');
        setCurrentIndustry(null);
        window.scrollTo(0, 0);
      }
      // Check for other specific pages
      else if (hash === 'free-agent') {
        setCurrentPage('free-agent');
        setCurrentIndustry(null);
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'blog') {
        setCurrentPage('blog');
        setCurrentIndustry(null);
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'thank-you') {
        setCurrentPage('thank-you');
        setCurrentIndustry(null);
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'privacy') {
        setCurrentPage('privacy');
        setCurrentIndustry(null);
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'terms') {
        setCurrentPage('terms');
        setCurrentIndustry(null);
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home');
        setCurrentIndustry(null);
        setCurrentArticle(null);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
    setCurrentIndustry(null);
    // Update URL hash for better navigation and bookmarkability
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = `/${page}`;
    }
    window.scrollTo(0, 0);
  };

  const handleIndustryNavigate = (industry: IndustrySlug) => {
    setCurrentIndustry(industry);
    setCurrentPage('industry');
    window.location.hash = `/${industry}`;
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (slug: ArticleSlug) => {
    setCurrentArticle(slug);
    setCurrentPage('article');
    setCurrentIndustry(null);
    window.location.hash = `/article/${slug}`;
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
            <ProblemSection />
            <HowItWorks />
            <Suspense fallback={<SectionSkeleton />}>
              <DemoVideo onNavigate={handleNavigate} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <HearItLive />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Features />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Comparison />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <PhoneAudit />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <ROIForm />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <UseCases />
            </Suspense>
            <TrustBadges />
            <Suspense fallback={<SectionSkeleton />}>
              <Pricing />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <CTA />
            </Suspense>
          </>
        );
      case 'blog':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <Blog onArticleClick={handleArticleClick} />
          </Suspense>
        );
      case 'article':
        return currentArticle ? (
          <Suspense fallback={<SectionSkeleton />}>
            <ArticlePage slug={currentArticle} onNavigate={handleNavigate} />
          </Suspense>
        ) : (
          <Suspense fallback={<SectionSkeleton />}>
            <Blog onArticleClick={handleArticleClick} />
          </Suspense>
        );
      case 'privacy':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <PrivacyPolicy onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'terms':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <TermsOfService onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'industry':
        return currentIndustry ? (
          <Suspense fallback={<SectionSkeleton />}>
            <IndustryLandingPage industrySlug={currentIndustry} onNavigate={handleNavigate} />
          </Suspense>
        ) : (
          <Suspense fallback={<SectionSkeleton />}>
            <FreeAgent />
          </Suspense>
        );
      case 'thank-you':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <ThankYou onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'free-agent':
      default:
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <FreeAgent />
          </Suspense>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-accent selection:text-white relative">
      <MouseFollower />
      
      {/* Exit Intent Popup */}
      {currentPage === 'home' && <ExitIntentPopup />}
      
      {/* Recent Signups Notification */}
      {currentPage === 'home' && <RecentSignups />}
      
      {/* Sticky CTA Bar */}
      {currentPage === 'home' && <StickyCTA onNavigate={handleNavigate} />}
      
      {/* Missed Call Cost Widget */}
      {currentPage === 'home' && <MissedCallWidget />}
      
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
                <li><a href="#/dentists" className="hover:text-accent transition-colors">AI Receptionist for Dentists</a></li>
                <li><a href="#/hvac" className="hover:text-accent transition-colors">HVAC Answering Service</a></li>
                <li><a href="#/plumbers" className="hover:text-accent transition-colors">Plumber Call Answering</a></li>
                <li><a href="#/medspa" className="hover:text-accent transition-colors">Med Spa Receptionist</a></li>
                <li><a href="#/lawyers" className="hover:text-accent transition-colors">Law Firm Intake</a></li>
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
                    onClick={() => handleNavigate('blog')}
                    className="hover:text-accent transition-colors text-left"
                  >
                    Blog
                  </button>
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
