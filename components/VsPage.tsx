import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Check,
  X as XIcon,
  Minus,
  ChevronDown,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Zap,
  Trophy,
  Phone,
} from 'lucide-react';
import { getCompetitorData } from '../data/competitorData';

export const VsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const data = slug ? getCompetitorData(slug) : undefined;

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Comparison not found</h1>
          <button onClick={() => navigate('/')} className="text-purple-600 hover:underline font-medium">
            Return to homepage
          </button>
        </div>
      </div>
    );
  }

  const autoquillWins = data.features.filter((f) => f.winner === 'autoquill').length;
  const competitorWins = data.features.filter((f) => f.winner === 'competitor').length;
  const ties = data.features.filter((f) => f.winner === 'tie').length;

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`https://autoquillai.com/vs/${data.slug}`} />
        <meta property="og:url" content={`https://autoquillai.com/vs/${data.slug}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://autoquillai.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AutoQuillAI" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        <meta name="twitter:image" content="https://autoquillai.com/og-default.png" />
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autoquillai.com/' },
              { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://autoquillai.com/' },
              { '@type': 'ListItem', position: 3, name: `AutoQuill vs ${data.name}`, item: `https://autoquillai.com/vs/${data.slug}` },
            ],
          })}
        </script>
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
          {/* Visible Breadcrumbs */}
          <nav className="mb-6 text-sm text-gray-500 text-left" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link to="/" className="text-purple-600 hover:text-purple-700 transition-colors">Home</Link></li>
              <li><span className="mx-1">/</span></li>
              <li><span className="text-gray-400">Compare</span></li>
              <li><span className="mx-1">/</span></li>
              <li><span className="text-gray-600">AutoQuill vs {data.name}</span></li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
              <Trophy size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700">{data.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {data.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {data.subheadline}
            </p>

            {/* Score summary */}
            <div className="inline-flex items-center gap-6 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{autoquillWins}</div>
                <div className="text-xs text-gray-500">Autoquill wins</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">{ties}</div>
                <div className="text-xs text-gray-500">Tied</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{competitorWins}</div>
                <div className="text-xs text-gray-500">{data.name} wins</div>
              </div>
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
        </div>
      </section>

      {/* ============================================ */}
      {/* Feature Comparison Table                      */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Feature-by-Feature Comparison
            </h2>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 bg-gray-50 rounded-t-xl border border-gray-200 font-bold text-sm text-gray-700">
            <div>Feature</div>
            <div className="text-center text-purple-600">Autoquill AI</div>
            <div className="text-center">{data.name}</div>
            <div className="text-center">Winner</div>
          </div>

          {/* Table rows */}
          <div className="border-x border-b border-gray-200 rounded-b-xl overflow-hidden divide-y divide-gray-100">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-gray-900 text-sm">
                  <span className="md:hidden text-xs text-gray-400 block mb-1">Feature:</span>
                  {f.feature}
                </div>
                <div className={`text-sm text-center ${f.winner === 'autoquill' ? 'text-purple-700 font-semibold' : 'text-gray-600'}`}>
                  <span className="md:hidden text-xs text-gray-400 block mb-1">Autoquill:</span>
                  {f.autoquill}
                </div>
                <div className={`text-sm text-center ${f.winner === 'competitor' ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                  <span className="md:hidden text-xs text-gray-400 block mb-1">{data.name}:</span>
                  {f.competitor}
                </div>
                <div className="flex items-center justify-center">
                  {f.winner === 'autoquill' ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">
                      <Check size={12} /> Autoquill
                    </span>
                  ) : f.winner === 'competitor' ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                      <Check size={12} /> {data.name.split(' ')[0]}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">
                      <Minus size={12} /> Tie
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Advantages - Side by Side                     */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Autoquill advantages */}
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-6 flex items-center gap-2">
                <Zap size={20} />
                Where Autoquill AI Wins
              </h3>
              <div className="space-y-4">
                {data.autoquillAdvantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-purple-100 rounded-xl p-5"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{adv.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{adv.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Competitor advantages */}
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center gap-2">
                <Star size={20} />
                Where {data.name} Wins
              </h3>
              <div className="space-y-4">
                {data.competitorAdvantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-5"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{adv.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{adv.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Who Should Choose                             */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Which Is Right for You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-purple-700 mb-4">Choose Autoquill AI if...</h3>
              <ul className="space-y-3">
                {data.whoShouldChoose.autoquill.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-700 mb-4">Choose {data.name} if...</h3>
              <ul className="space-y-3">
                {data.whoShouldChoose.competitor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Verdict                                       */}
      {/* ============================================ */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Trophy size={24} className="text-purple-600" />
              The Verdict
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{data.verdict}</p>
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
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Try Autoquill AI risk-free. 3 booked appointments in 30 days, guaranteed, or your next
              month is free.
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

            {/* Cross-links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">More comparisons:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {data.slug !== 'ruby-receptionists' && (
                  <Link to="/vs/ruby-receptionists" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                    vs Ruby Receptionists
                  </Link>
                )}
                {data.slug !== 'smith-ai' && (
                  <Link to="/vs/smith-ai" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                    vs Smith.ai
                  </Link>
                )}
                {data.slug !== 'answering-service' && (
                  <Link to="/vs/answering-service" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                    vs Answering Services
                  </Link>
                )}
                {data.slug !== 'answerconnect' && (
                  <Link to="/vs/answerconnect" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                    vs AnswerConnect
                  </Link>
                )}
                {data.slug !== 'patlive' && (
                  <Link to="/vs/patlive" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                    vs PATLive
                  </Link>
                )}
                {data.slug !== 'davinci-virtual' && (
                  <Link to="/vs/davinci-virtual" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                    vs Davinci Virtual
                  </Link>
                )}
                {data.slug !== 'map-communications' && (
                  <Link to="/vs/map-communications" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                    vs MAP Communications
                  </Link>
                )}
                <Link to="/pricing" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
                  View Pricing
                </Link>
                <Link to="/calculator" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-colors">
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
