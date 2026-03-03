import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Plug,
  Shield,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import { getIntegrationData } from '../data/integrationData';

export const IntegrationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const data = slug ? getIntegrationData(slug) : undefined;

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Integration not found</h1>
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

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`https://autoquillai.com/integrations/${data.slug}`} />
        <meta property="og:url" content={`https://autoquillai.com/integrations/${data.slug}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          })}
        </script>
      </Helmet>

      {/* ============================================ */}
      {/* Hero                                          */}
      {/* ============================================ */}
      <section className="pt-32 pb-16 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
              <Plug size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Integration</span>
            </div>

            {/* Partner logos / names */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="px-6 py-3 bg-purple-50 border border-purple-200 rounded-xl">
                <span className="text-lg font-bold text-purple-700">AutoQuill AI</span>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full border border-gray-200">
                <Zap size={18} className="text-purple-600" />
              </div>
              <div className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-lg font-bold text-gray-800">{data.partnerName}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {data.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {data.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/adrian-autoquillai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
              >
                Book a Demo <ArrowRight size={18} />
              </a>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center gap-2"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Intro                                         */}
      {/* ============================================ */}
      <section className="py-12 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <p className="text-gray-700 leading-relaxed text-lg">{data.intro}</p>
          <p className="text-gray-600 leading-relaxed mt-4">{data.partnerDescription}</p>
        </div>
      </section>

      {/* ============================================ */}
      {/* How It Works                                  */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How the Integration Works
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From phone ring to booked job in under 3 minutes, fully automated.
            </p>
          </div>

          <div className="space-y-6">
            {data.howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Benefits                                      */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Connect {data.partnerName} with AutoQuill AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles size={20} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ                                           */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA                                           */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Connect {data.partnerName} with AI?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              See the integration in action. Book a free demo and we will walk you through the
              setup for your specific business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/adrian-autoquillai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
              >
                Book a Free Demo <ArrowRight size={18} />
              </a>
              <Link
                to="/calculator"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center gap-2"
              >
                Calculate Your Lost Revenue
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-500" />
                <span>3 appointments guaranteed</span>
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
          </motion.div>
        </div>
      </section>
    </>
  );
};
