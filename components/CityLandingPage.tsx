import React, { useState, lazy, Suspense } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  ChevronDown,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import {
  parseCityIndustrySlug,
  generateCityIndustryPage,
  type CityIndustryPage,
} from '../data/cityData';

const ROIForm = lazy(() => import('./ROIForm').then((m) => ({ default: m.ROIForm })));

const SectionSkeleton: React.FC = () => (
  <div className="py-24 bg-white">
    <div className="container mx-auto px-6 max-w-xl">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
        <div className="h-96 bg-gray-100 rounded-2xl border border-gray-200" />
      </div>
    </div>
  </div>
);

export const CityLandingPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Parse slug and generate page data
  const parsed = slug ? parseCityIndustrySlug(slug) : null;
  const pageData = parsed
    ? generateCityIndustryPage(parsed.citySlug, parsed.industrySlug)
    : null;

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find an answering service page for that location.
          </p>
          <button
            onClick={() => navigate('/')}
            className="text-purple-600 hover:underline font-medium"
          >
            Return to homepage
          </button>
        </div>
      </div>
    );
  }

  const { city, industry } = pageData;

  // Map industry to existing industry page slug (for cross-linking)
  const industryPageMap: Record<string, string> = {
    plumber: '/plumbers',
    hvac: '/hvac',
    electrician: '/hvac', // No dedicated electrician page yet, link to closest
  };
  const industryPageLink = industryPageMap[industry.slug] || '/';

  return (
    <>
      <Helmet>
        <title>{pageData.metaTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <link
          rel="canonical"
          href={`https://autoquillai.com/answering-service/${pageData.urlSlug}`}
        />
        <meta
          property="og:url"
          content={`https://autoquillai.com/answering-service/${pageData.urlSlug}`}
        />
        <meta property="og:title" content={pageData.metaTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        {/* LocalBusiness schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `AI Answering Service for ${city.name} ${industry.name}`,
            provider: {
              '@type': 'Organization',
              name: 'Autoquill AI',
              url: 'https://autoquillai.com',
            },
            areaServed: {
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'State',
                name: city.state,
              },
            },
            description: pageData.metaDescription,
            offers: {
              '@type': 'Offer',
              price: '299',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '299',
                priceCurrency: 'USD',
                unitText: 'MONTH',
              },
            },
          })}
        </script>
        {/* FAQ schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: pageData.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* ============================================ */}
      {/* SECTION 1: Hero                               */}
      {/* ============================================ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6"
            >
              <MapPin size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                {city.name}, {city.stateAbbr}
              </span>
              <span className="text-purple-300">|</span>
              <Sparkles size={14} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700">{industry.name}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {pageData.headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              {pageData.heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <a
                href="https://calendly.com/adrian-autoquillai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </a>
              <Link
                to="/calculator"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center gap-2"
              >
                Calculate Your Lost Revenue
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-500" />
                <span>3 booked appointments guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-500" />
                <span>Live in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-500" />
                <span>No contracts</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: Local Insight                      */}
      {/* ============================================ */}
      <section className="py-12 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin size={20} className="text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                The {city.name} Market
              </h2>
              <p className="text-gray-600 leading-relaxed">{city.localInsight}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: Pain Points                        */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Cost of Missed Calls in {city.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every unanswered call is revenue walking out the door. Here's what it's costing{' '}
              {city.name} {industry.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pageData.painPoints.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-2">
                  {pain.stat}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pain.title}</h3>
                <p className="text-gray-600 text-sm">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: How It Works                       */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works for {city.name} {industry.name}
            </h2>
            <p className="text-gray-600">Three steps. Live in 48 hours. No disruption to your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageData.howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connector lines (desktop only) */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={14} />
              <span>Total setup time: 48 hours or less</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: ROI Calculator                     */}
      {/* ============================================ */}
      <Suspense fallback={<SectionSkeleton />}>
        <ROIForm preselectedIndustry={pageData.roiPreset} />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 6: What You Get                       */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What {city.name} {industry.name} Get with Autoquill
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '24/7 call answering, including weekends and holidays',
              'Natural-sounding AI trained for ' + industry.name.toLowerCase(),
              'Appointment booking synced to your calendar',
              'Emergency call routing to your cell phone',
              'Call summaries texted to you in real time',
              'Works with your existing ' + city.name + ' phone number',
              'No contracts, cancel anytime',
              'Setup in 48 hours, no tech skills needed',
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: Pricing Teaser                     */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50 via-purple-100/50 to-blue-50 border border-purple-200 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing for {city.name} {industry.name}
            </h2>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
              Plans start at $299/month. Less than a part-time receptionist. More reliable than any
              answering service. And it never takes a sick day.
            </p>
            <p className="text-gray-600 mb-8">
              Average {industry.nameSingular.toLowerCase()} job in {city.name}:{' '}
              <span className="font-bold text-gray-900">{industry.avgJobValue}</span>. One saved
              call pays for months of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center justify-center gap-2"
              >
                View All Plans
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://calendly.com/adrian-autoquillai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2"
              >
                Talk to a Human First
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: FAQ                                */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About AI Answering for {city.name} {industry.name}
            </h2>
          </div>

          <div className="space-y-4">
            {pageData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-900 font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-purple-600 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: Final CTA                          */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Capture Every Call in {city.name}?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {city.name} {industry.name.toLowerCase()} are already using AI to answer calls after
              hours, during busy periods, and on weekends. Don't let your competitors pick up your
              customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/adrian-autoquillai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
              >
                Book a Free Demo
                <Phone size={18} />
              </a>
              <Link
                to="/calculator"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center gap-2"
              >
                See Your Lost Revenue
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-500" />
                <span>3 booked appointments in 30 days, guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-500" />
                <span>Live in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-500" />
                <span>From $299/mo, no contracts</span>
              </div>
            </div>

            {/* Cross-links to other pages */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Learn more about AI answering for your industry:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/plumbers"
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors"
                >
                  Plumbers
                </Link>
                <Link
                  to="/hvac"
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors"
                >
                  HVAC
                </Link>
                <Link
                  to="/dentists"
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors"
                >
                  Dentists
                </Link>
                <Link
                  to="/medspa"
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors"
                >
                  Med Spas
                </Link>
                <Link
                  to="/calculator"
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors"
                >
                  Revenue Calculator
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
