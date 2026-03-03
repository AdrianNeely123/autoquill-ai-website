// ============================================
// Competitor Comparison Pages
// URL pattern: /vs/{competitor-slug}
// ============================================

export interface ComparisonFeature {
  feature: string;
  autoquill: string;
  competitor: string;
  winner: 'autoquill' | 'competitor' | 'tie';
}

export interface CompetitorData {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  intro: string;
  competitorDescription: string;
  features: ComparisonFeature[];
  autoquillAdvantages: { title: string; description: string }[];
  competitorAdvantages: { title: string; description: string }[];
  whoShouldChoose: {
    autoquill: string[];
    competitor: string[];
  };
  verdict: string;
  faqs: { question: string; answer: string }[];
}

export const competitors: Record<string, CompetitorData> = {
  'ruby-receptionists': {
    slug: 'ruby-receptionists',
    name: 'Ruby Receptionists',
    tagline: 'AI Speed vs Human Touch',
    metaTitle:
      'Autoquill AI vs Ruby Receptionists | AI Answering vs Human Receptionists Compared',
    metaDescription:
      'Compare Autoquill AI and Ruby Receptionists side-by-side. See pricing, features, availability, and which is better for plumbers, HVAC, dentists, and service businesses.',
    headline: 'Autoquill AI vs Ruby Receptionists',
    subheadline: 'Which answering solution is right for your service business?',
    intro:
      "Ruby Receptionists has been a trusted name in live answering for years. They offer real humans who answer your phones with a friendly voice. Autoquill AI offers an AI-powered alternative that answers instantly, 24/7, at a fraction of the cost. Here's an honest breakdown of how they compare.",
    competitorDescription:
      'Ruby Receptionists provides live, US-based virtual receptionists who answer calls, take messages, transfer calls, and handle basic intake. They offer a human touch with real people trained on your business.',
    features: [
      { feature: 'Monthly Starting Price', autoquill: '$299/mo', competitor: '$235/mo (21 min)', winner: 'autoquill' },
      { feature: 'Cost Per Minute', autoquill: '$0.35-0.50', competitor: '$9.95-11.19', winner: 'autoquill' },
      { feature: 'Availability', autoquill: '24/7/365', competitor: 'Mon-Fri 5am-9pm PT, Sat 6am-6pm', winner: 'autoquill' },
      { feature: 'Answer Speed', autoquill: 'Under 2 rings (instant)', competitor: '3-4 rings (hold queue)', winner: 'autoquill' },
      { feature: 'Appointment Booking', autoquill: 'Yes, real-time calendar sync', competitor: 'Limited, depends on plan', winner: 'autoquill' },
      { feature: 'Emergency Routing', autoquill: 'Yes, AI-driven rules', competitor: 'Yes, human judgment', winner: 'tie' },
      { feature: 'Natural Conversation', autoquill: 'Advanced AI, very natural', competitor: 'Real human, fully natural', winner: 'competitor' },
      { feature: 'Setup Time', autoquill: '48 hours', competitor: '1-2 weeks', winner: 'autoquill' },
      { feature: 'Contracts', autoquill: 'None, cancel anytime', competitor: 'Month-to-month', winner: 'tie' },
      { feature: 'CRM Integration', autoquill: 'HubSpot, Salesforce, GHL, more', competitor: 'Limited integrations', winner: 'autoquill' },
      { feature: 'Call Transcripts', autoquill: 'Yes, every call', competitor: 'Not standard', winner: 'autoquill' },
      { feature: 'Bilingual Support', autoquill: 'English + Spanish', competitor: 'English + limited Spanish', winner: 'tie' },
    ],
    autoquillAdvantages: [
      {
        title: '85% cheaper per minute',
        description:
          "Ruby charges $9.95-11.19 per minute. At high call volumes, a busy plumbing company could spend $2,000+/month easily. Autoquill's flat rate means predictable costs regardless of call volume.",
      },
      {
        title: 'True 24/7 coverage',
        description:
          "Ruby's receptionists go home at 9pm PT on weekdays and 6pm on Saturdays. No Sunday coverage. Autoquill answers at 2am on Christmas Day the same as 10am on a Tuesday.",
      },
      {
        title: 'Instant answer, zero hold time',
        description:
          "When all Ruby receptionists are busy, your callers wait in a queue. With Autoquill, every single call is answered in under 2 rings. No caller ever hears hold music.",
      },
      {
        title: 'Direct calendar booking',
        description:
          "Autoquill checks your real-time calendar availability and books the appointment during the call. Ruby takes a message and your staff still has to call back to schedule.",
      },
    ],
    competitorAdvantages: [
      {
        title: 'Real human conversation',
        description:
          "Ruby's biggest strength is undeniable: real humans. For businesses where callers might be confused by or resistant to AI, a live person provides a level of empathy and flexibility that AI is still catching up to.",
      },
      {
        title: 'Complex call handling',
        description:
          'For calls that require nuanced judgment, emotional sensitivity, or multi-step problem solving, a human receptionist can adapt in ways AI cannot yet match.',
      },
    ],
    whoShouldChoose: {
      autoquill: [
        'Service businesses that get calls after hours and on weekends',
        'Companies where every missed call is a $300-2,000+ job lost',
        'Businesses that need appointment booking, not just message taking',
        'Cost-conscious businesses that want predictable monthly pricing',
        'Companies that need CRM integration and call transcripts',
      ],
      competitor: [
        'Businesses where callers strongly prefer speaking to a human',
        'Companies with complex calls requiring nuanced judgment',
        'Businesses that only need coverage during standard business hours',
        'Industries where AI answering might feel inappropriate (e.g., therapy, high-end legal)',
      ],
    },
    verdict:
      "For most service businesses like plumbers, HVAC companies, and dentists, Autoquill AI is the better value. You get 24/7 coverage, instant answering, real-time booking, and CRM integration at a fraction of Ruby's cost. Ruby makes sense if your callers absolutely need a human voice and your call volume is low enough to keep costs manageable. But for a busy service business getting 20+ calls a day? The math strongly favors AI.",
    faqs: [
      {
        question: 'Is Autoquill AI as good as a real receptionist?',
        answer:
          "For service businesses, Autoquill handles 90%+ of calls as well as or better than a human. It answers faster, never puts callers on hold, books appointments in real time, and costs a fraction of the price. Where humans still win: highly emotional calls, very complex intake processes, and callers who specifically request a human.",
      },
      {
        question: 'Can I switch from Ruby to Autoquill easily?',
        answer:
          "Yes. Setup takes 48 hours. You share your business info, FAQs, and scheduling preferences. We configure your AI agent and you redirect your call forwarding. Many businesses run both side by side for a week before fully switching.",
      },
      {
        question: 'What if a caller needs a real person?',
        answer:
          "Autoquill can transfer any call to your team based on rules you set. Emergency calls, VIP clients, or anyone who asks for a human gets routed immediately. You stay in control.",
      },
    ],
  },

  'smith-ai': {
    slug: 'smith-ai',
    name: 'Smith.ai',
    tagline: 'Full AI Platform vs Hybrid Service',
    metaTitle:
      'Autoquill AI vs Smith.ai | AI Receptionist Comparison for Service Businesses',
    metaDescription:
      'Compare Autoquill AI and Smith.ai for your service business. Pricing, features, AI capabilities, and which is better for plumbers, HVAC, dentists.',
    headline: 'Autoquill AI vs Smith.ai',
    subheadline: 'Two AI-powered answering services, very different approaches',
    intro:
      "Smith.ai offers a hybrid model: AI handles simple calls, humans step in for complex ones. Autoquill AI is fully AI-powered with human escalation built in. Both serve service businesses, but the pricing models, capabilities, and approach are fundamentally different.",
    competitorDescription:
      'Smith.ai provides a hybrid AI + human receptionist service. Their AI handles routine calls and escalates to live agents when needed. They also offer outbound calling, lead qualification, and web chat.',
    features: [
      { feature: 'Monthly Starting Price', autoquill: '$299/mo', competitor: '$292.50/mo (30 calls)', winner: 'tie' },
      { feature: 'Per-Call Cost', autoquill: 'Flat rate (minutes)', competitor: '$9.75/call', winner: 'autoquill' },
      { feature: 'Availability', autoquill: '24/7/365', competitor: '24/7 (AI), humans Mon-Fri 6am-6pm PT', winner: 'autoquill' },
      { feature: 'Answer Speed', autoquill: 'Under 2 rings', competitor: 'Varies (AI fast, human queued)', winner: 'autoquill' },
      { feature: 'Appointment Booking', autoquill: 'Yes, real-time sync', competitor: 'Yes, with Calendly/others', winner: 'tie' },
      { feature: 'CRM Integration', autoquill: 'HubSpot, Salesforce, GHL, more', competitor: 'HubSpot, Salesforce, Clio, more', winner: 'tie' },
      { feature: 'Outbound Calling', autoquill: 'Coming soon', competitor: 'Yes', winner: 'competitor' },
      { feature: 'Web Chat', autoquill: 'Not yet', competitor: 'Yes', winner: 'competitor' },
      { feature: 'Call Transcripts', autoquill: 'Yes, every call', competitor: 'Yes', winner: 'tie' },
      { feature: 'Setup Time', autoquill: '48 hours', competitor: '1-2 weeks', winner: 'autoquill' },
      { feature: 'Contracts', autoquill: 'None', competitor: 'None', winner: 'tie' },
      { feature: 'Industry Specialization', autoquill: 'Service businesses (plumber, HVAC, dental, medspa)', competitor: 'Broad (legal, real estate, service)', winner: 'tie' },
    ],
    autoquillAdvantages: [
      {
        title: 'Predictable flat-rate pricing',
        description:
          "Smith.ai charges per call ($9.75+). A busy plumbing company getting 10 calls/day would pay $2,900+/month. Autoquill's flat rate with included minutes means you know exactly what you'll pay.",
      },
      {
        title: 'True 24/7 AI answering',
        description:
          "Smith.ai's AI handles after-hours calls, but their human agents are only available during business hours. Autoquill's AI is consistent 24/7, so your caller experience is the same at 3am as 3pm.",
      },
      {
        title: 'Built specifically for service businesses',
        description:
          "Autoquill is purpose-built for plumbers, HVAC, dentists, and med spas. Every feature, script, and integration is designed for the service business workflow. Smith.ai serves everyone from law firms to e-commerce.",
      },
      {
        title: 'Faster setup',
        description:
          "48 hours from signup to live calls. Smith.ai's onboarding typically takes 1-2 weeks with back-and-forth configuration.",
      },
    ],
    competitorAdvantages: [
      {
        title: 'Outbound calling built in',
        description:
          "Smith.ai can make outbound calls for appointment confirmations, lead follow-ups, and reminders. Autoquill is currently focused on inbound answering.",
      },
      {
        title: 'Web chat included',
        description:
          "Smith.ai offers live chat for your website as part of their platform. If you want phone + chat in one service, Smith.ai has it today.",
      },
      {
        title: 'Human fallback for complex calls',
        description:
          "Smith.ai's hybrid model means a real human can step in for calls that stump the AI. This is useful for businesses with highly complex intake requirements.",
      },
    ],
    whoShouldChoose: {
      autoquill: [
        'Service businesses that want predictable, flat-rate pricing',
        'Companies with high call volume (10+ calls/day)',
        'Businesses that need consistent 24/7 experience',
        'Plumbers, HVAC, dentists that want industry-specific AI',
        'Businesses that value fast setup and simplicity',
      ],
      competitor: [
        'Businesses that need outbound calling and web chat in one platform',
        'Companies with complex intake that benefits from human fallback',
        'Low call volume businesses where per-call pricing is cheaper',
        'Law firms and industries where Smith.ai has deeper specialization',
      ],
    },
    verdict:
      "For service businesses with moderate to high call volume, Autoquill is the more cost-effective choice. You get purpose-built AI for your industry, flat-rate pricing, and 48-hour setup. Smith.ai is a strong choice if you need outbound calling, web chat, and human fallback in a single platform, and your call volume is low enough that per-call pricing makes sense. The crossover point is roughly 30-40 calls per month: above that, Autoquill's flat rate wins on cost.",
    faqs: [
      {
        question: 'Is Autoquill or Smith.ai better for plumbers?',
        answer:
          "Autoquill is specifically designed for plumbing businesses with industry-trained AI, emergency routing, and integrations with tools like HouseCall Pro. Smith.ai works but isn't specialized. For plumbers, Autoquill is the better fit.",
      },
      {
        question: 'Does Smith.ai use AI or real people?',
        answer:
          "Both. Smith.ai uses a hybrid approach: AI handles routine calls and routes complex ones to live agents. Autoquill is fully AI-powered with the option to transfer to your team when needed.",
      },
      {
        question: 'Which is cheaper for a busy service business?',
        answer:
          "Autoquill. At 10 calls per day, Smith.ai would cost roughly $2,900/month ($9.75 x 300 calls). Autoquill's Full-Service plan is $549/month with 1,200 minutes included. The savings compound as call volume increases.",
      },
    ],
  },

  'answering-service': {
    slug: 'answering-service',
    name: 'Traditional Answering Services',
    tagline: 'AI vs The Old Way',
    metaTitle:
      'AI Receptionist vs Traditional Answering Service | Why Service Businesses Are Switching',
    metaDescription:
      'Compare AI-powered phone answering with traditional answering services. See why plumbers, HVAC companies, and dentists are switching to AI for 24/7 call handling.',
    headline: 'AI Receptionist vs Traditional Answering Service',
    subheadline: 'Why service businesses are making the switch',
    intro:
      "Traditional answering services have been around for decades. They hire operators who sit in a call center, answer your phone with your business name, take a message, and send it to you. It works, but the model hasn't changed much since the 1990s. AI answering is a fundamentally different approach, and here's how they compare.",
    competitorDescription:
      'Traditional answering services (like AnswerConnect, MAP Communications, PATLive, and local providers) use live operators in call centers to answer phones. They take messages, transfer calls, and sometimes schedule appointments.',
    features: [
      { feature: 'Monthly Cost', autoquill: '$299-549/mo', competitor: '$200-800/mo + per-min fees', winner: 'autoquill' },
      { feature: 'Per-Minute Cost', autoquill: '$0.35-0.50 (overage)', competitor: '$0.75-1.50/min', winner: 'autoquill' },
      { feature: 'Availability', autoquill: '24/7/365, instant', competitor: '24/7 (most), but operators rotate shifts', winner: 'autoquill' },
      { feature: 'Answer Speed', autoquill: 'Under 2 rings, always', competitor: '15-60 second hold times during peaks', winner: 'autoquill' },
      { feature: 'Consistency', autoquill: 'Same AI every call', competitor: 'Different operator each time', winner: 'autoquill' },
      { feature: 'Appointment Booking', autoquill: 'Real-time calendar sync', competitor: 'Usually just message taking', winner: 'autoquill' },
      { feature: 'Industry Knowledge', autoquill: 'Trained on your specific business', competitor: 'Generic scripts, limited training', winner: 'autoquill' },
      { feature: 'CRM Integration', autoquill: 'Automatic', competitor: 'Manual or limited', winner: 'autoquill' },
      { feature: 'Call Transcripts', autoquill: 'Every call, searchable', competitor: 'Not standard', winner: 'autoquill' },
      { feature: 'Scalability', autoquill: 'Handles unlimited simultaneous calls', competitor: 'Limited by available operators', winner: 'autoquill' },
      { feature: 'Human Empathy', autoquill: 'Advanced but AI', competitor: 'Real human emotion', winner: 'competitor' },
      { feature: 'Complex Problem Solving', autoquill: 'Structured, rule-based', competitor: 'Adaptive, judgment-based', winner: 'competitor' },
    ],
    autoquillAdvantages: [
      {
        title: 'No hold times, ever',
        description:
          "Traditional answering services have peak times where all operators are busy. Your caller hears hold music. With AI, every single call is answered instantly, even if 10 calls come in at the same time.",
      },
      {
        title: 'Consistency across every call',
        description:
          "With a traditional service, your caller gets a different operator each time. Some are great, some are having a bad day. AI delivers the exact same quality on call #1 and call #10,000.",
      },
      {
        title: 'Real appointment booking, not just messages',
        description:
          "Most answering services just take a message: name, number, issue. Then YOUR staff has to call back and schedule. Autoquill books the appointment during the first call by checking your live calendar.",
      },
      {
        title: 'Actually knows your business',
        description:
          "Traditional operators read from a generic script. They can't answer 'Do you work on tankless water heaters?' or 'What's your emergency rate?' Autoquill is trained on YOUR services, prices, and FAQs.",
      },
    ],
    competitorAdvantages: [
      {
        title: 'Human connection',
        description:
          "For callers who are upset, scared, or dealing with an emergency, a real human voice can provide comfort that AI is still learning to match. This matters most in healthcare, legal, and high-emotion situations.",
      },
      {
        title: 'Flexible problem solving',
        description:
          "When a call goes completely off-script, a human operator can improvise. AI follows rules. For truly unusual situations, humans still have an edge in creativity.",
      },
    ],
    whoShouldChoose: {
      autoquill: [
        'Any service business tired of getting messages instead of booked appointments',
        'Businesses frustrated with hold times and inconsistent operators',
        'Companies that want their phones answered the same way, every time',
        'Businesses that need real CRM integration and call data',
        'Growing companies that need to scale call handling without adding headcount',
      ],
      competitor: [
        'Businesses in industries where AI feels inappropriate to callers',
        'Companies with very low call volume where per-minute pricing is still cheap',
        'Businesses that specifically need a human for every single interaction',
      ],
    },
    verdict:
      "For service businesses, AI answering is a straight upgrade over traditional answering services in almost every category. You get faster answers, real appointment booking, better business knowledge, full CRM integration, and lower costs. The only reason to stick with a traditional service is if your callers genuinely need a human on every single call. For plumbers, HVAC companies, dentists, and med spas, that's rarely the case. The caller just needs someone to pick up, understand the problem, and get them on the schedule.",
    faqs: [
      {
        question: 'Will my callers know they are talking to AI?',
        answer:
          "Most don't. Our AI uses natural conversational language, handles small talk, and responds with appropriate emotion. In testing, the majority of callers don't realize they're speaking to AI unless told.",
      },
      {
        question: "I've used an answering service for years. Why switch?",
        answer:
          "The biggest reason: booking rate. Answering services take messages. You call back (if you remember). Half those callers have already called someone else. AI books the appointment on the first call while the customer is still on the phone.",
      },
      {
        question: 'What happens if the AI gets confused?',
        answer:
          "The AI is trained to gracefully hand off. If a caller asks something outside its knowledge or specifically requests a person, the call transfers to your team or goes to a priority voicemail with full context. Nothing falls through the cracks.",
      },
    ],
  },
};

export function getCompetitorData(slug: string): CompetitorData | undefined {
  return competitors[slug];
}

export function getAllCompetitorSlugs(): string[] {
  return Object.keys(competitors);
}
