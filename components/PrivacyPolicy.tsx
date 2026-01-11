import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import type { Page } from '../types';

interface PrivacyPolicyProps {
  onNavigate: (page: Page) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  const lastUpdated = 'January 2, 2026';

  return (
    <section className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Shield className="text-accent" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-neutral-500 text-sm">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-neutral max-w-none"
        >
          <div className="space-y-8 text-gray-700">
            
            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="leading-relaxed">
                Autoquill Inc. ("Autoquill AI," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI receptionist services.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong className="text-gray-700">Contact Information:</strong> Name, email address, phone number, and business name</li>
                <li><strong className="text-gray-700">Business Information:</strong> Industry, website URL, and call volume data</li>
                <li><strong className="text-gray-700">Call Data:</strong> Phone call recordings, transcripts, and metadata when using our AI receptionist service</li>
                <li><strong className="text-gray-700">Usage Data:</strong> How you interact with our website and services</li>
                <li><strong className="text-gray-700">Device Information:</strong> IP address, browser type, and operating system</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide, maintain, and improve our AI receptionist services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>End-to-end encryption for all call data</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee access controls and training</li>
                <li>HIPAA compliance for healthcare clients</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong className="text-gray-700">Service Providers:</strong> Third parties who perform services on our behalf (hosting, analytics, payment processing)</li>
                <li><strong className="text-gray-700">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-gray-700">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-gray-700">With Your Consent:</strong> When you have given us permission to share</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong className="text-gray-700">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-gray-700">Correction:</strong> Request correction of inaccurate data</li>
                <li><strong className="text-gray-700">Deletion:</strong> Request deletion of your personal data</li>
                <li><strong className="text-gray-700">Portability:</strong> Request transfer of your data to another service</li>
                <li><strong className="text-gray-700">Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="mt-4 text-gray-600">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@autoquillai.com" className="text-accent hover:underline">
                  privacy@autoquillai.com
                </a>
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. We use these technologies for analytics, personalization, and to remember your preferences.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Call recordings are retained for 90 days by default, unless you request a different retention period.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-gray-600 space-y-1">
                <p><strong className="text-gray-700">Autoquill Inc.</strong></p>
                <p>Email: <a href="mailto:privacy@autoquillai.com" className="text-accent hover:underline">privacy@autoquillai.com</a></p>
                <p>General Inquiries: <a href="mailto:adrian@autoquillai.com" className="text-accent hover:underline">adrian@autoquillai.com</a></p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

