import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams, Outlet, Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Navbar } from './components/Navbar';
import { MouseFollower } from './components/MouseFollower';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { MissedCallWidget } from './components/MissedCallWidget';
import { FounderSection } from './components/FounderSection';
import type { ArticleSlug, IndustrySlug } from './types';

// Lazy load below-the-fold components for better initial load performance
const ROIForm = lazy(() => import('./components/ROIForm').then(m => ({ default: m.ROIForm })));
const DemoExperience = lazy(() => import('./components/DemoExperience').then(m => ({ default: m.DemoExperience })));
const TrustBadges = lazy(() => import('./components/TrustBadges').then(m => ({ default: m.TrustBadges })));
const HearItLive = lazy(() => import('./components/HearItLive').then(m => ({ default: m.HearItLive })));
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
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
const CheckoutSuccess = lazy(() => import('./components/CheckoutSuccess'));
const PhoneAudit = lazy(() => import('./components/PhoneAudit').then(m => ({ default: m.PhoneAudit })));
const LeadMagnet = lazy(() => import('./components/LeadMagnet').then(m => ({ default: m.LeadMagnet })));
const ComparisonTable = lazy(() => import('./components/ComparisonTable').then(m => ({ default: m.ComparisonTable })));
const MetricCounters = lazy(() => import('./components/MetricCounters').then(m => ({ default: m.MetricCounters })));
const MilestoneTimeline = lazy(() => import('./components/MilestoneTimeline').then(m => ({ default: m.MilestoneTimeline })));
const IntegrationEcosystem = lazy(() => import('./components/IntegrationEcosystem').then(m => ({ default: m.IntegrationEcosystem })));
const TrustedByMarquee = lazy(() => import('./components/TrustedByMarquee').then(m => ({ default: m.TrustedByMarquee })));
const CalculatorPage = lazy(() => import('./components/CalculatorPage').then(m => ({ default: m.CalculatorPage })));
const CityLandingPage = lazy(() => import('./components/CityLandingPage').then(m => ({ default: m.CityLandingPage })));

// Loading skeleton for lazy-loaded sections
const SectionSkeleton: React.FC = () => (
  <div className="py-24 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-100 rounded-2xl border border-gray-200" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Redirect legacy hash URLs (/#/pricing -> /pricing)
function HashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.hash.startsWith('#/')) {
      const path = location.hash.slice(1); // '#/pricing' -> '/pricing'
      navigate(path, { replace: true });
    }
  }, [location.hash, navigate]);
  return null;
}

// ==========================================
// Page Components with SEO Helmet
// ==========================================

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>AI Receptionist for Small Business | 24/7 Call Answering | Autoquill AI</title>
        <meta name="description" content="Never miss a call again with Autoquill's AI receptionist. Answers 24/7, books appointments, qualifies leads for dentists, HVAC, plumbers, med spas. From $299/mo. Book a free demo." />
        <link rel="canonical" href="https://autoquillai.com/" />
        <meta property="og:url" content="https://autoquillai.com/" />
        <meta property="og:title" content="AI Receptionist for Small Business | 24/7 Call Answering | Autoquill AI" />
        <meta property="og:description" content="Never miss a call again with Autoquill's AI receptionist. Answers 24/7, books appointments, qualifies leads for dentists, HVAC, plumbers, med spas. From $299/mo." />
      </Helmet>

      {/* 1. Hero with integrated trust badges */}
      <Hero />

      {/* 2. Dashboard Demo - Auto-playing video */}
      <Suspense fallback={<SectionSkeleton />}>
        <DemoExperience />
      </Suspense>

      {/* 3.5. Trusted By Marquee - Client social proof */}
      <Suspense fallback={<div className="py-4" />}>
        <TrustedByMarquee />
      </Suspense>

      {/* 4. Hear It Live - Audio demos by industry */}
      <Suspense fallback={<SectionSkeleton />}>
        <HearItLive />
      </Suspense>

      {/* 5. Case Studies - Social proof by industry */}
      <Suspense fallback={<SectionSkeleton />}>
        <UseCases />
      </Suspense>

      {/* 6. Problem Section - Agitate the pain */}
      <ProblemSection />

      {/* 7. Metric Counters - Social proof bar */}
      <Suspense fallback={<div className="py-12" />}>
        <MetricCounters />
      </Suspense>

      {/* 8. Founder Section - Add human touch */}
      <FounderSection />

      {/* 9. ROI Calculator - Capture leads while pain is fresh */}
      <Suspense fallback={<SectionSkeleton />}>
        <ROIForm />
      </Suspense>

      {/* 11. Milestone Timeline - Setup process */}
      <Suspense fallback={<SectionSkeleton />}>
        <MilestoneTimeline />
      </Suspense>

      {/* 12. Features - Condensed capabilities */}
      <Suspense fallback={<SectionSkeleton />}>
        <Features />
      </Suspense>

      {/* 13. Integration Ecosystem - Animated diagram */}
      <Suspense fallback={<SectionSkeleton />}>
        <IntegrationEcosystem />
      </Suspense>

      {/* 14. AI vs Human Comparison Table */}
      <Suspense fallback={<SectionSkeleton />}>
        <ComparisonTable />
      </Suspense>

      {/* Trust & Compliance Badges */}
      <Suspense fallback={<div className="py-6" />}>
        <TrustBadges />
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
              Transparent pricing from $299/mo. Compare all tiers and see which one fits your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center justify-center gap-2"
              >
                View Pricing Plans
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://calendly.com/adrian-autoquillai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12. FAQ */}
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
    </>
  );
}

function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - AI Receptionist Plans | Starting at $299/mo | Autoquill AI</title>
        <meta name="description" content="Transparent AI receptionist pricing. Lead Capture $299/mo, Booking Agent $449/mo, Full-Service $599/mo. No contracts, 30-day money-back guarantee. 85% cheaper than human receptionists." />
        <link rel="canonical" href="https://autoquillai.com/pricing" />
        <meta property="og:url" content="https://autoquillai.com/pricing" />
        <meta property="og:title" content="Pricing - AI Receptionist Plans | Starting at $299/mo | Autoquill AI" />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <Pricing />
      </Suspense>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - AI Receptionist Tips & Insights | Autoquill AI</title>
        <meta name="description" content="Learn how AI receptionists can transform your small business. Tips on reducing missed calls, improving customer service, and maximizing ROI." />
        <link rel="canonical" href="https://autoquillai.com/blog" />
        <meta property="og:url" content="https://autoquillai.com/blog" />
        <meta property="og:title" content="Blog - AI Receptionist Tips & Insights | Autoquill AI" />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <Blog />
      </Suspense>
    </>
  );
}

function ArticlePageWrapper() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <Helmet>
        <title>Article | Autoquill AI Blog</title>
        <link rel="canonical" href={`https://autoquillai.com/article/${slug}`} />
        <meta property="og:url" content={`https://autoquillai.com/article/${slug}`} />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <ArticlePage slug={slug as ArticleSlug} />
      </Suspense>
    </>
  );
}

function IndustryPage({ slug }: { slug: IndustrySlug }) {
  const titles: Record<IndustrySlug, { title: string; description: string }> = {
    dentists: {
      title: 'AI Receptionist for Dental Practices | Never Miss Patient Calls | Autoquill',
      description: 'AI receptionist for dentists. Books appointments, answers insurance questions, handles patient intake 24/7. Stop losing patients to voicemail.',
    },
    hvac: {
      title: 'AI Answering Service for HVAC Companies | 24/7 Emergency Dispatch | Autoquill',
      description: 'AI phone answering for HVAC businesses. Handle emergency calls, book service appointments, capture leads 24/7. Never miss another job.',
    },
    plumbers: {
      title: 'AI Receptionist for Plumbers | 24/7 Call Answering & Booking | Autoquill',
      description: 'AI receptionist for plumbing companies. Answers emergency calls, books appointments, qualifies leads 24/7. Capture every job opportunity.',
    },
    medspa: {
      title: 'AI Receptionist for Med Spas | Luxury Client Experience 24/7 | Autoquill',
      description: 'AI receptionist for medical spas. Handle consultations, book treatments, answer pricing questions with luxury service 24/7.',
    },
  };
  const meta = titles[slug];
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://autoquillai.com/${slug}`} />
        <meta property="og:url" content={`https://autoquillai.com/${slug}`} />
        <meta property="og:title" content={meta.title} />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <IndustryLandingPage industrySlug={slug} />
      </Suspense>
    </>
  );
}

function LeadMagnetPage() {
  const { industry } = useParams<{ industry: string }>();
  const validIndustries: IndustrySlug[] = ['dentists', 'hvac', 'plumbers', 'medspa'];
  if (!industry || !validIndustries.includes(industry as IndustrySlug)) {
    return (
      <Suspense fallback={<SectionSkeleton />}>
        <FreeAgent />
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <LeadMagnet industry={industry as IndustrySlug} />
    </Suspense>
  );
}

function FreeAgentPage() {
  return (
    <>
      <Helmet>
        <title>Free Demo - Get Started with Autoquill AI</title>
        <meta name="description" content="Book a free demo of Autoquill AI. See our AI receptionist in action and learn how it can help your business." />
        <link rel="canonical" href="https://autoquillai.com/free-agent" />
        <meta property="og:url" content="https://autoquillai.com/free-agent" />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <FreeAgent />
      </Suspense>
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Autoquill AI</title>
        <meta name="description" content="Privacy Policy for Autoquill AI. Learn how we protect your business and customer data." />
        <link rel="canonical" href="https://autoquillai.com/privacy" />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <PrivacyPolicy />
      </Suspense>
    </>
  );
}

function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Autoquill AI</title>
        <meta name="description" content="Terms of Service for Autoquill AI. Understand the terms governing use of our AI receptionist service." />
        <link rel="canonical" href="https://autoquillai.com/terms" />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <TermsOfService />
      </Suspense>
    </>
  );
}

function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Thank You | Autoquill AI</title>
        <meta name="description" content="Thank you for your interest in Autoquill AI. We'll be in touch soon." />
      </Helmet>
      <Suspense fallback={<SectionSkeleton />}>
        <ThankYou />
      </Suspense>
    </>
  );
}

// ==========================================
// Layout Component
// ==========================================

function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const industryPaths = ['/dentists', '/hvac', '/plumbers', '/medspa'];
  const isLandingPage = isHome || industryPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-600 selection:text-white relative">
      <MouseFollower />

      {/* Exit Intent Popup - Helps capture leaving visitors */}
      {isLandingPage && <ExitIntentPopup />}

      {/* Missed Call Cost Widget - Shows ROI in real-time */}
      {isLandingPage && <MissedCallWidget />}

      {/* Background Grid - Light Mode Version */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <Navbar isScrolled={isScrolled} />

      <main className="relative z-10 flex flex-col items-center w-full" role="main">
        <Outlet />
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
                <li><Link to="/dentists" className="hover:text-purple-600 transition-colors">AI Receptionist for Dentists</Link></li>
                <li><Link to="/hvac" className="hover:text-purple-600 transition-colors">HVAC Answering Service</Link></li>
                <li><Link to="/plumbers" className="hover:text-purple-600 transition-colors">Plumber Call Answering</Link></li>
                <li><Link to="/medspa" className="hover:text-purple-600 transition-colors">Med Spa Receptionist</Link></li>
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
                  <Link to="/calculator" className="hover:text-purple-600 transition-colors">Missed Call Calculator</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-purple-600 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-purple-600 transition-colors">Terms of Service</Link>
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
}

// ==========================================
// App Component with Router
// ==========================================

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <HashRedirect />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/article/:slug" element={<ArticlePageWrapper />} />
            <Route path="/dentists" element={<IndustryPage slug="dentists" />} />
            <Route path="/hvac" element={<IndustryPage slug="hvac" />} />
            <Route path="/plumbers" element={<IndustryPage slug="plumbers" />} />
            <Route path="/medspa" element={<IndustryPage slug="medspa" />} />
            <Route path="/guide/:industry" element={<LeadMagnetPage />} />
            <Route path="/free-agent" element={<FreeAgentPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/calculator" element={
              <Suspense fallback={<SectionSkeleton />}>
                <CalculatorPage />
              </Suspense>
            } />
            <Route path="/answering-service/:slug" element={
              <Suspense fallback={<SectionSkeleton />}>
                <CityLandingPage />
              </Suspense>
            } />
            <Route path="/checkout-success" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <CheckoutSuccess />
              </Suspense>
            } />
            {/* Catch-all: show home page */}
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
