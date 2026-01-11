import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import type { Page } from '../types';

interface TermsOfServiceProps {
  onNavigate: (page: Page) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
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
              <FileText className="text-accent" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
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
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using Autoquill AI's website and services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="leading-relaxed mb-4">
                Autoquill AI provides AI-powered virtual receptionist and voice agent services for businesses. Our Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Automated phone call answering and handling</li>
                <li>Appointment scheduling and calendar integration</li>
                <li>Lead qualification and CRM integration</li>
                <li>Call transcription and analytics</li>
                <li>Custom AI agent configuration and training</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Account Registration</h2>
              <p className="leading-relaxed mb-4">
                To use certain features of the Service, you must register for an account. When you register, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="leading-relaxed mb-4">
                Certain aspects of the Service are provided for a fee. You agree to pay all fees associated with your account.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong className="text-gray-700">Billing:</strong> Fees are billed monthly in advance on the subscription date</li>
                <li><strong className="text-gray-700">Payment Methods:</strong> We accept major credit cards and ACH transfers</li>
                <li><strong className="text-gray-700">Price Changes:</strong> We may change prices with 30 days' notice</li>
                <li><strong className="text-gray-700">Refunds:</strong> We offer a 30-day money-back guarantee for new customers</li>
                <li><strong className="text-gray-700">Cancellation:</strong> You may cancel your subscription at any time with 30 days' notice</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p className="leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit spam, malware, or other harmful content</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>Use the Service for any illegal or fraudulent purpose</li>
                <li>Make automated robocalls or spam calls</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                The Service and its original content, features, and functionality are owned by Autoquill Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without our written consent.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Your Content</h2>
              <p className="leading-relaxed mb-4">
                You retain ownership of any content you provide to the Service ("Your Content"), including business information, call scripts, and training data. By providing Your Content, you grant us a license to use, store, and process it solely for providing the Service.
              </p>
              <p className="leading-relaxed text-gray-600">
                You represent that you have all necessary rights to Your Content and that it does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Call Recording Consent</h2>
              <p className="leading-relaxed mb-4">
                Our Service may record phone calls for quality assurance and service improvement. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Ensuring compliance with all applicable call recording laws in your jurisdiction</li>
                <li>Obtaining necessary consent from callers when required</li>
                <li>Configuring appropriate disclosures in your AI agent scripts</li>
                <li>Understanding that recording laws vary by state and country</li>
              </ul>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Service Level Agreement</h2>
              <p className="leading-relaxed mb-4">
                We strive to maintain 99.9% uptime for our Service. However, we do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance when possible.
              </p>
              <p className="text-gray-600">
                Service credits may be available for extended outages as specified in your service agreement.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTOQUILL INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or goodwill</li>
                <li>Service interruption or computer damage</li>
                <li>Any damages arising from missed calls or failed appointments</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Autoquill Inc. and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the Service, your violation of these Terms, or your violation of any rights of another.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Termination</h2>
              <p className="leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Breach of these Terms</li>
                <li>Non-payment of fees</li>
                <li>Fraudulent or illegal activity</li>
                <li>At our sole discretion for any reason</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Upon termination, your right to use the Service will cease immediately. We will provide your data export upon request within 30 days of termination.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the state or federal courts located in Delaware.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="bg-gray-50/40 border border-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="text-gray-600 space-y-1">
                <p><strong className="text-gray-700">Autoquill Inc.</strong></p>
                <p>Email: <a href="mailto:legal@autoquillai.com" className="text-accent hover:underline">legal@autoquillai.com</a></p>
                <p>General Inquiries: <a href="mailto:adrian@autoquillai.com" className="text-accent hover:underline">adrian@autoquillai.com</a></p>
              </div>
            </section>

            <section className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <p className="text-gray-700 text-center">
                By using Autoquill AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

