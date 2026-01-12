import React, { useEffect, useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { MouseFollower } from './components/MouseFollower';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { StickyCTA } from './components/StickyCTA';
import { RecentSignups } from './components/RecentSignups';
import { MissedCallWidget } from './components/MissedCallWidget';
import { FounderSection } from './components/FounderSection';
import type { Page, ArticleSlug, IndustrySlug } from './types';

// Lazy load below-the-fold components for better initial load performance
const ROIForm = lazy(() => import('./components/ROIForm').then(m => ({ default: m.ROIForm })));
const DemoExperience = lazy(() => import('./components/DemoExperience').then(m => ({ default: m.DemoExperience })));
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const Integrations = lazy(() => import('./components/Integrations').then(m => ({ default: m.Integrations })));
const UseCases = lazy(() => import('./components/UseCases').then(m => ({ default: m.UseCases })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
// VAPI widget is already embedded in index.html with your credentials
const Blog = lazy(() => import('./components/Blog').then(m => ({ default: m.Blog })));
const FreeAgent = lazy(() => import('./components/FreeAgent').then(m => ({ default: m.FreeAgent })));
const ArticlePage = lazy(() => import('./components/ArticlePage').then(m => ({ default: m.ArticlePage })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/TermsOfService').then(m => ({ default: m.TermsOfService })));
const IndustryLandingPage = lazy(() => import('./components/IndustryLandingPage').then(m => ({ default: m.IndustryLandingPage })));
const ThankYou = lazy(() => import('./components/ThankYou').then(m => ({ default: m.ThankYou })));
const PhoneAudit = lazy(() => import('./components/PhoneAudit').then(m => ({ default: m.PhoneAudit })));
const LeadMagnet = lazy(() => import('./components/LeadMagnet').then(m => ({ default: m.LeadMagnet })));
const ComparisonTable = lazy(() => import('./components/ComparisonTable').then(m => ({ default: m.ComparisonTable })));

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
  const [currentLeadMagnet, setCurrentLeadMagnet] = useState<IndustrySlug | null>(null);

  // Handle URL hash for all pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2); // Remove '#/'
      const industries: IndustrySlug[] = ['dentists', 'hvac', 'plumbers', 'medspa'];
      
      // Check for lead magnet pages (format: guide/industry)
      if (hash.startsWith('guide/')) {
        const industry = hash.replace('guide/', '') as IndustrySlug;
        if (industries.includes(industry)) {
          setCurrentLeadMagnet(industry);
          setCurrentPage('lead-magnet');
          setCurrentArticle(null);
          window.scrollTo(0, 0);
          return;
        }
      }
      // Check for industry pages as dedicated routes
      if (industries.includes(hash as IndustrySlug)) {
        setCurrentPage(hash as IndustrySlug);
        setCurrentArticle(null);
        setCurrentLeadMagnet(null);
        window.scrollTo(0, 0);
      } 
      // Check for article pages (format: article/slug)
      else if (hash.startsWith('article/')) {
        const articleSlug = hash.replace('article/', '') as ArticleSlug;
        setCurrentArticle(articleSlug);
        setCurrentPage('article');
        window.scrollTo(0, 0);
      }
      // Check for other specific pages
      else if (hash === 'free-agent') {
        setCurrentPage('free-agent');
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'blog') {
        setCurrentPage('blog');
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'thank-you') {
        setCurrentPage('thank-you');
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'privacy') {
        setCurrentPage('privacy');
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'terms') {
        setCurrentPage('terms');
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === 'pricing') {
        setCurrentPage('pricing');
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home');
        setCurrentArticle(null);
        setCurrentLeadMagnet(null);
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
    setCurrentLeadMagnet(null);
    // Update URL hash for better navigation and bookmarkability
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = `/${page}`;
    }
    window.scrollTo(0, 0);
  };

  const handleIndustryNavigate = (industry: IndustrySlug) => {
    setCurrentPage(industry);
    window.location.hash = `/${industry}`;
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (slug: ArticleSlug) => {
    setCurrentArticle(slug);
    setCurrentPage('article');
    window.location.hash = `/article/${slug}`;
    window.scrollTo(0, 0);
  };

  // Render the appropriate page content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* 1. Hero with integrated trust badges and company logos */}
            <Hero onNavigate={handleNavigate} />
            
            {/* 2. Demo Video - Show proof immediately */}
            <Suspense fallback={<SectionSkeleton />}>
              <DemoExperience onNavigate={handleNavigate} />
            </Suspense>
            
            {/* 3. Problem Section - Agitate the pain */}
            <ProblemSection />
            
            {/* 4. Founder Section - Add human touch */}
            <FounderSection />
            
            {/* 5. ROI Calculator - Capture leads while pain is fresh */}
            <Suspense fallback={<SectionSkeleton />}>
              <ROIForm />
            </Suspense>
            
            {/* 6. How It Works - Show the solution */}
            <HowItWorks />
            
            {/* 7. Features - Condensed capabilities */}
            <Suspense fallback={<SectionSkeleton />}>
              <Features />
            </Suspense>
            
            {/* 8. Integrations - Show compatibility */}
            <Suspense fallback={<SectionSkeleton />}>
              <Integrations />
            </Suspense>
            
            {/* 9. Case Studies - Social proof by industry */}
            <Suspense fallback={<SectionSkeleton />}>
              <UseCases />
            </Suspense>
            
            {/* 10. AI vs Human Comparison Table */}
            <Suspense fallback={<SectionSkeleton />}>
              <ComparisonTable />
            </Suspense>
            
            {/* 11. Pricing CTA Section - Link to dedicated pricing page */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
              <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-50 via-purple-100/50 to-blue-50 border border-purple-200 rounded-2xl p-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to See Pricing?
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Transparent pricing from $99/mo. Compare all tiers and see which one fits your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => handleNavigate('pricing')}
                      className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center justify-center gap-2"
                    >
                      View Pricing Plans
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                      className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2"
                    >
                      Schedule a Call
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>
            
            {/* 12. FAQ - Condensed to key questions */}
            <Suspense fallback={<SectionSkeleton />}>
              <FAQ />
            </Suspense>
            
            {/* 13. Phone Audit - Mystery Call Lead Magnet */}
            <Suspense fallback={<SectionSkeleton />}>
              <PhoneAudit />
            </Suspense>
            
            {/* 14. Final CTA - Calendly booking */}
            <Suspense fallback={<SectionSkeleton />}>
              <CTA />
            </Suspense>
            
            {/* Note: VAPI widget is embedded in index.html */}
          </>
        );
      case 'pricing':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <Pricing />
          </Suspense>
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
      case 'dentists':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <IndustryLandingPage industrySlug="dentists" onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'hvac':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <IndustryLandingPage industrySlug="hvac" onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'plumbers':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <IndustryLandingPage industrySlug="plumbers" onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'medspa':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <IndustryLandingPage industrySlug="medspa" onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'thank-you':
        return (
          <Suspense fallback={<SectionSkeleton />}>
            <ThankYou onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'lead-magnet':
        return currentLeadMagnet ? (
          <Suspense fallback={<SectionSkeleton />}>
            <LeadMagnet industry={currentLeadMagnet} />
          </Suspense>
        ) : (
          <Suspense fallback={<SectionSkeleton />}>
            <FreeAgent />
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
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-600 selection:text-white relative">
      <MouseFollower />
      
      {/* Exit Intent Popup - Helps capture leaving visitors */}
      {currentPage === 'home' && <ExitIntentPopup />}
      
      {/* Missed Call Cost Widget - Shows ROI in real-time */}
      {currentPage === 'home' && <MissedCallWidget />}
      
      {/* Background Grid - Light Mode Version */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <Navbar isScrolled={isScrolled} onNavigate={handleNavigate} />
      
      <main className="relative z-10 flex flex-col items-center w-full" role="main">
        {renderPageContent()}
      </main>

      <footer 
        className="w-full py-12 border-t border-gray-200 bg-gray-50 relative z-10"
        role="contentinfo"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Autoquill AI</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-4">
                AI-powered receptionist and voice agent for small businesses. Never miss a call again with 24/7 automated phone answering, appointment scheduling, and lead qualification.
              </p>
              <p className="text-gray-500 text-xs">
                Serving dentists, HVAC companies, plumbers, med spas, real estate agents, and more across the United States.
              </p>
            </div>

            {/* Industries Served */}
            <nav aria-label="Industries we serve">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Industries</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#/dentists" className="hover:text-purple-600 transition-colors">AI Receptionist for Dentists</a></li>
                <li><a href="#/hvac" className="hover:text-purple-600 transition-colors">HVAC Answering Service</a></li>
                <li><a href="#/plumbers" className="hover:text-purple-600 transition-colors">Plumber Call Answering</a></li>
                <li><a href="#/medspa" className="hover:text-purple-600 transition-colors">Med Spa Receptionist</a></li>
                <li><span className="text-gray-400 cursor-default">Real Estate Lead Capture</span></li>
                <li><span className="text-gray-400 cursor-default">Law Firms (Coming Soon)</span></li>
              </ul>
            </nav>

            {/* Contact & Links */}
            <nav aria-label="Company links">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a 
                    href="mailto:adrian@autoquillai.com" 
                    className="hover:text-purple-600 transition-colors"
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
                    className="hover:text-purple-600 transition-colors"
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
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Autoquill Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
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
