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

  'answerconnect': {
    slug: 'answerconnect',
    name: 'AnswerConnect',
    tagline: 'AI Efficiency vs Human Availability',
    metaTitle:
      'Autoquill AI vs AnswerConnect | AI Receptionist vs Live Answering Service Compared',
    metaDescription:
      'Compare Autoquill AI and AnswerConnect for your service business. Pricing, features, 24/7 availability, and which delivers better value for plumbers, HVAC, and dentists.',
    headline: 'Autoquill AI vs AnswerConnect',
    subheadline: 'Which 24/7 answering solution fits your service business?',
    intro:
      "AnswerConnect is a well-established live answering service offering 24/7 human receptionists. They pride themselves on always having a real person pick up the phone. Autoquill AI offers an AI-powered alternative that answers instantly at a fraction of the cost. Here is an honest, side-by-side comparison of both services.",
    competitorDescription:
      'AnswerConnect provides live, US-based virtual receptionists available 24/7/365. They answer calls, take messages, transfer calls, schedule appointments, and provide bilingual support. Their model relies on trained human operators working in shifts.',
    features: [
      { feature: 'Monthly Starting Price', autoquill: '$299/mo (600 min)', competitor: '$325/mo (200 min)', winner: 'autoquill' },
      { feature: 'Cost Per Minute', autoquill: '$0.35-0.50', competitor: '$1.63 (at base tier)', winner: 'autoquill' },
      { feature: 'Availability', autoquill: '24/7/365', competitor: '24/7/365', winner: 'tie' },
      { feature: 'Answer Speed', autoquill: 'Under 2 rings (instant)', competitor: '3-5 rings (operator queue)', winner: 'autoquill' },
      { feature: 'Simultaneous Calls', autoquill: 'Unlimited', competitor: 'Limited by available operators', winner: 'autoquill' },
      { feature: 'Appointment Booking', autoquill: 'Yes, real-time calendar sync', competitor: 'Yes, with supported tools', winner: 'autoquill' },
      { feature: 'Emergency Routing', autoquill: 'Yes, AI-driven rules', competitor: 'Yes, human judgment', winner: 'tie' },
      { feature: 'Natural Conversation', autoquill: 'Advanced AI, very natural', competitor: 'Real human, fully natural', winner: 'competitor' },
      { feature: 'Setup Time', autoquill: '48 hours', competitor: '3-5 business days', winner: 'autoquill' },
      { feature: 'Contracts', autoquill: 'None, cancel anytime', competitor: 'Month-to-month', winner: 'tie' },
      { feature: 'CRM Integration', autoquill: 'HubSpot, Salesforce, GHL, more', competitor: 'Salesforce, Zoho, limited others', winner: 'autoquill' },
      { feature: 'Call Transcripts', autoquill: 'Yes, every call', competitor: 'Not standard', winner: 'autoquill' },
      { feature: 'Bilingual Support', autoquill: 'English + Spanish', competitor: 'English + Spanish', winner: 'tie' },
    ],
    autoquillAdvantages: [
      {
        title: '80% cheaper per minute',
        description:
          "AnswerConnect's base plan gives you 200 minutes for $325/month, which works out to $1.63 per minute. A plumbing company averaging 5 calls per day at 4 minutes each would burn through 200 minutes in just 10 business days. Autoquill's flat rate keeps costs predictable even during busy seasons.",
      },
      {
        title: 'Zero hold times during peak volume',
        description:
          "When a heat wave hits and every HVAC company gets flooded with calls, AnswerConnect's operators get overwhelmed just like anyone else. Autoquill handles unlimited simultaneous calls with the same speed and quality on every single one.",
      },
      {
        title: 'Real-time appointment booking',
        description:
          "Autoquill checks your live calendar and books the appointment during the call. AnswerConnect operators can schedule through supported tools, but the process is slower and more error-prone with manual entry.",
      },
      {
        title: 'Instant setup, zero training lag',
        description:
          "Autoquill is live in 48 hours. AnswerConnect requires 3-5 days for onboarding and script configuration. Every day without coverage is money lost.",
      },
    ],
    competitorAdvantages: [
      {
        title: 'Real human conversation, 24/7',
        description:
          "AnswerConnect's biggest selling point is genuine: a real human answers every call, around the clock. For businesses with callers who are uncomfortable with AI or need emotional support, this matters.",
      },
      {
        title: 'Established reputation and scale',
        description:
          "AnswerConnect has been operating for over 20 years with a large team of trained operators. They have proven processes for handling a wide range of call types and industries.",
      },
    ],
    whoShouldChoose: {
      autoquill: [
        'Service businesses with moderate to high call volume (10+ calls/day)',
        'Companies that need predictable monthly costs without per-minute surprises',
        'Businesses that want real-time appointment booking, not just message taking',
        'HVAC, plumbing, and dental practices that need instant 24/7 coverage',
        'Cost-conscious businesses looking to cut answering costs by 50-80%',
      ],
      competitor: [
        'Businesses where every caller must speak to a real human',
        'Companies with very low call volume where 200 minutes is sufficient',
        'Industries where AI answering may feel inappropriate',
        'Businesses that value a long track record over cutting-edge technology',
      ],
    },
    verdict:
      "For service businesses with any meaningful call volume, Autoquill AI delivers significantly more value per dollar than AnswerConnect. You get unlimited simultaneous calls, instant answering, real-time booking, and full CRM integration at a fraction of the cost. AnswerConnect is a solid choice if your callers absolutely require a human voice and your monthly call volume stays under 200 minutes. But for a busy plumbing or HVAC company? The cost difference is dramatic, and AI handles the job just as well for 90%+ of calls.",
    faqs: [
      {
        question: 'How does Autoquill compare to AnswerConnect on pricing?',
        answer:
          "Autoquill's Lead Capture plan starts at $299/month with 600 minutes included. AnswerConnect starts at $325/month for just 200 minutes. For a business using 600 minutes per month, Autoquill costs $299 while AnswerConnect would cost roughly $975. The savings grow with volume.",
      },
      {
        question: 'Does AnswerConnect offer 24/7 coverage like Autoquill?',
        answer:
          "Yes, both offer 24/7 coverage. The difference is that AnswerConnect relies on human operators working shifts. During peak times, callers may wait in a queue. Autoquill answers every call instantly, regardless of how many come in simultaneously.",
      },
      {
        question: 'Can I try Autoquill before switching from AnswerConnect?',
        answer:
          "Absolutely. Many businesses run both services in parallel during a transition period. You can forward after-hours calls to Autoquill first, then gradually shift all calls once you see the results. Setup takes just 48 hours.",
      },
    ],
  },

  'patlive': {
    slug: 'patlive',
    name: 'PATLive',
    tagline: 'AI Power vs Boutique Service',
    metaTitle:
      'Autoquill AI vs PATLive | AI Receptionist vs Live Answering Compared',
    metaDescription:
      'Compare Autoquill AI and PATLive side-by-side. Pricing, features, speed, and which answering service is better for plumbers, HVAC companies, and small businesses.',
    headline: 'Autoquill AI vs PATLive',
    subheadline: 'Boutique live answering meets AI-powered efficiency',
    intro:
      "PATLive has been providing live answering services since 1990. They offer friendly, US-based receptionists who answer calls during business hours and after hours. Autoquill AI takes a different approach with always-on AI that answers instantly and books appointments in real time. Here is how they stack up.",
    competitorDescription:
      'PATLive provides live virtual receptionists based in Tallahassee, FL. They offer custom call scripting, appointment scheduling, order processing, and message delivery. Their team is trained on your specific business needs.',
    features: [
      { feature: 'Monthly Starting Price', autoquill: '$299/mo (600 min)', competitor: '$235/mo (75 min)', winner: 'autoquill' },
      { feature: 'Cost Per Minute', autoquill: '$0.35-0.50', competitor: '$3.13 (at base tier)', winner: 'autoquill' },
      { feature: 'Availability', autoquill: '24/7/365', competitor: '24/7/365', winner: 'tie' },
      { feature: 'Answer Speed', autoquill: 'Under 2 rings (instant)', competitor: '3-4 rings average', winner: 'autoquill' },
      { feature: 'Simultaneous Calls', autoquill: 'Unlimited', competitor: 'Limited by staffing', winner: 'autoquill' },
      { feature: 'Appointment Booking', autoquill: 'Yes, real-time calendar sync', competitor: 'Yes, with supported calendars', winner: 'autoquill' },
      { feature: 'Custom Call Scripts', autoquill: 'AI-trained on your business', competitor: 'Yes, human-scripted', winner: 'tie' },
      { feature: 'Natural Conversation', autoquill: 'Advanced AI, very natural', competitor: 'Real human, fully natural', winner: 'competitor' },
      { feature: 'Setup Time', autoquill: '48 hours', competitor: '3-7 business days', winner: 'autoquill' },
      { feature: 'Contracts', autoquill: 'None, cancel anytime', competitor: 'None', winner: 'tie' },
      { feature: 'CRM Integration', autoquill: 'HubSpot, Salesforce, GHL, more', competitor: 'Zapier-based integrations', winner: 'autoquill' },
      { feature: 'Call Transcripts', autoquill: 'Yes, every call', competitor: 'Call recordings available', winner: 'tie' },
    ],
    autoquillAdvantages: [
      {
        title: '8x more minutes for your money',
        description:
          "PATLive's starter plan includes just 75 minutes for $235/month. Autoquill includes 600 minutes for $299/month. A single busy day could burn through PATLive's entire monthly allotment. Overage charges add up fast.",
      },
      {
        title: 'No per-minute anxiety',
        description:
          "With PATLive, every call feels like it is running up a meter. Business owners start worrying about call length instead of call quality. Autoquill's flat-rate model means you never think about the clock.",
      },
      {
        title: 'Unlimited call capacity',
        description:
          "During a summer heat wave or a burst pipe emergency, call volume can spike 3-5x. PATLive's human team can get overwhelmed. Autoquill scales instantly to handle any volume.",
      },
      {
        title: 'Faster, more consistent answers',
        description:
          "Autoquill answers every call in under 2 rings with the same quality. PATLive's answer time depends on current operator availability and can vary throughout the day.",
      },
    ],
    competitorAdvantages: [
      {
        title: 'Genuine human warmth',
        description:
          "PATLive's Tallahassee-based team is known for their friendly, warm tone. For businesses where a personal, human connection on the first call is essential, PATLive delivers a consistently pleasant experience.",
      },
      {
        title: 'Complex order processing',
        description:
          "PATLive can handle detailed order taking, complex intake forms, and multi-step processes that require human judgment and flexibility. For businesses with complicated call flows, this matters.",
      },
    ],
    whoShouldChoose: {
      autoquill: [
        'Service businesses with more than 75 minutes of calls per month',
        'Companies that want flat-rate pricing with no overage surprises',
        'Businesses that need instant answering during high-volume periods',
        'Plumbers, HVAC, and dental practices wanting industry-specific AI',
        'Companies that need direct CRM integration without Zapier workarounds',
      ],
      competitor: [
        'Businesses with very low call volume (under 75 minutes/month)',
        'Companies that need complex order processing with human judgment',
        'Businesses that prioritize human warmth above all else',
        'Industries with intricate call flows that benefit from human flexibility',
      ],
    },
    verdict:
      "PATLive offers a quality human answering experience, but the math is hard to ignore. At 75 minutes for $235/month, most service businesses will blow past that limit in the first week. Autoquill gives you 8x the minutes at a similar price point, with faster answering, real-time booking, and native CRM integrations. PATLive makes sense for very low-volume businesses that value human touch above everything else. For everyone else, the value proposition clearly favors AI.",
    faqs: [
      {
        question: 'How many minutes does a typical service business use per month?',
        answer:
          "A typical plumbing or HVAC company receiving 10-15 calls per day uses 400-600 minutes per month. PATLive's 75-minute starter plan would run out in about 3-4 days. Their 500-minute plan costs $825/month, nearly 3x Autoquill's price for similar coverage.",
      },
      {
        question: 'Is PATLive better for complex calls?',
        answer:
          "For calls requiring multi-step order processing or highly nuanced judgment, PATLive's human operators have an edge. However, for standard service business calls like scheduling, emergency triage, pricing questions, and lead qualification, Autoquill handles these as well as or better than a human operator.",
      },
      {
        question: 'What happens if I go over my PATLive minutes?',
        answer:
          "PATLive charges overage fees per additional minute. Rates vary by plan but typically range from $2.10 to $3.13 per minute. A busy month can result in surprise charges of hundreds of dollars. Autoquill's overage rate is just $0.35-0.50 per minute.",
      },
    ],
  },

  'davinci-virtual': {
    slug: 'davinci-virtual',
    name: 'Davinci Virtual',
    tagline: 'AI Receptionist vs Virtual Office',
    metaTitle:
      'Autoquill AI vs Davinci Virtual | AI Answering vs Virtual Receptionist Compared',
    metaDescription:
      'Compare Autoquill AI and Davinci Virtual for phone answering. See pricing, features, and which virtual receptionist is better for service businesses.',
    headline: 'Autoquill AI vs Davinci Virtual',
    subheadline: 'Virtual office add-on vs purpose-built AI phone agent',
    intro:
      "Davinci Virtual is primarily a virtual office provider that includes live receptionist services as part of their packages. Autoquill AI is a purpose-built AI phone agent designed specifically for service businesses. They serve different needs, but if you are comparing them for phone answering, here is how they stack up.",
    competitorDescription:
      'Davinci Virtual provides virtual office solutions including business addresses, meeting rooms, and live receptionist services. Their phone answering is part of a broader virtual office package, with live receptionists handling calls during business hours.',
    features: [
      { feature: 'Monthly Starting Price', autoquill: '$299/mo (600 min)', competitor: '$129/mo (50 min)', winner: 'competitor' },
      { feature: 'Cost Per Minute', autoquill: '$0.35-0.50', competitor: '$2.58 (at base tier)', winner: 'autoquill' },
      { feature: 'Availability', autoquill: '24/7/365', competitor: 'Business hours only (Mon-Fri)', winner: 'autoquill' },
      { feature: 'Answer Speed', autoquill: 'Under 2 rings (instant)', competitor: 'Varies, 3-6 rings', winner: 'autoquill' },
      { feature: 'Appointment Booking', autoquill: 'Yes, real-time calendar sync', competitor: 'Basic message taking', winner: 'autoquill' },
      { feature: 'After-Hours Coverage', autoquill: 'Full AI answering', competitor: 'Voicemail only', winner: 'autoquill' },
      { feature: 'Virtual Office Address', autoquill: 'Not included', competitor: 'Yes, premium addresses', winner: 'competitor' },
      { feature: 'Meeting Rooms', autoquill: 'Not included', competitor: 'Yes, nationwide', winner: 'competitor' },
      { feature: 'CRM Integration', autoquill: 'HubSpot, Salesforce, GHL, more', competitor: 'None', winner: 'autoquill' },
      { feature: 'Call Transcripts', autoquill: 'Yes, every call', competitor: 'Not available', winner: 'autoquill' },
      { feature: 'Industry Specialization', autoquill: 'Service businesses', competitor: 'General/professional services', winner: 'autoquill' },
      { feature: 'Setup Time', autoquill: '48 hours', competitor: '1-2 weeks', winner: 'autoquill' },
    ],
    autoquillAdvantages: [
      {
        title: 'True 24/7 coverage vs business hours only',
        description:
          "Davinci's live receptionists only work Monday through Friday during business hours. Evenings, weekends, and holidays go to voicemail. For service businesses, that is when the most valuable calls come in. Autoquill never sleeps.",
      },
      {
        title: 'Real appointment booking vs message taking',
        description:
          "Davinci receptionists take messages and forward them to you. Autoquill checks your live calendar, books the appointment, and sends the customer a confirmation. No callback needed, no opportunity lost.",
      },
      {
        title: '12x more minutes included',
        description:
          "Davinci's $129 plan includes just 50 minutes. That is roughly 12-15 calls per month. Most service businesses receive that many calls in 2-3 days. Autoquill's 600 included minutes handle a full month of moderate call volume.",
      },
      {
        title: 'Purpose-built for service businesses',
        description:
          "Davinci is a virtual office provider that happens to offer phone answering. Autoquill is built from the ground up for plumbers, HVAC companies, dentists, and med spas. The AI knows your industry, your common questions, and your workflow.",
      },
    ],
    competitorAdvantages: [
      {
        title: 'Virtual office bundle',
        description:
          "If you need a business address, meeting room access, and phone answering in one package, Davinci provides that. Autoquill focuses exclusively on phone handling and does not offer physical office amenities.",
      },
      {
        title: 'Lower entry price',
        description:
          "At $129/month, Davinci's starting price is lower than Autoquill's. For businesses with very few calls that also need a virtual office address, the bundled pricing can make sense.",
      },
    ],
    whoShouldChoose: {
      autoquill: [
        'Service businesses that need 24/7 phone answering, not just business hours',
        'Companies that want appointments booked, not just messages taken',
        'Businesses with more than 50 minutes of calls per month',
        'Plumbers, HVAC, dentists looking for industry-specific call handling',
        'Companies that need CRM integration and call analytics',
      ],
      competitor: [
        'Businesses that need a virtual office address and meeting rooms',
        'Startups wanting a professional address with basic phone answering',
        'Very low-volume businesses (under 50 minutes/month)',
        'Companies where phone answering is secondary to virtual office needs',
      ],
    },
    verdict:
      "Davinci Virtual and Autoquill AI serve fundamentally different purposes. Davinci is a virtual office solution with phone answering as a secondary feature. Autoquill is a dedicated AI phone agent built to capture every call and book every appointment. If you need a business address and meeting rooms, Davinci makes sense. If you need serious phone answering for a service business, Autoquill is the clear choice. The 50-minute limit and business-hours-only coverage make Davinci impractical for any business with real call volume.",
    faqs: [
      {
        question: 'Can I use Davinci Virtual just for phone answering?',
        answer:
          "Yes, but it is not cost-effective. Davinci's phone plans start at $129 for 50 minutes with business-hours-only coverage. For phone answering alone, Autoquill provides 12x more minutes, 24/7 coverage, and real-time booking at a better value.",
      },
      {
        question: 'Does Davinci Virtual offer after-hours answering?',
        answer:
          "No. Davinci's live receptionists work standard business hours, Monday through Friday. After-hours calls go to voicemail. Autoquill answers every call 24/7/365, including nights, weekends, and holidays.",
      },
      {
        question: 'Which is better for a plumbing or HVAC company?',
        answer:
          "Autoquill, without question. Service businesses need 24/7 coverage, emergency call routing, real-time scheduling, and industry-specific call handling. Davinci's 50-minute, business-hours-only service simply cannot support a busy service company.",
      },
    ],
  },

  'map-communications': {
    slug: 'map-communications',
    name: 'MAP Communications',
    tagline: 'AI Speed vs Bilingual Specialists',
    metaTitle:
      'Autoquill AI vs MAP Communications | AI Receptionist vs Bilingual Answering Service',
    metaDescription:
      'Compare Autoquill AI and MAP Communications. Pricing, bilingual support, features, and which answering service is best for plumbers, HVAC, and service businesses.',
    headline: 'Autoquill AI vs MAP Communications',
    subheadline: 'Purpose-built AI vs traditional bilingual answering service',
    intro:
      "MAP Communications is a family-owned answering service known for bilingual English/Spanish support and employee-owned operations. They offer competitive entry-level pricing with a pay-per-minute model. Autoquill AI provides instant AI answering with flat-rate pricing. Both serve small businesses, but the approach and economics differ significantly.",
    competitorDescription:
      'MAP Communications is an employee-owned telephone answering service based in New Jersey. They provide 24/7 live answering with bilingual English/Spanish support, custom scripting, HIPAA compliance, and a strong focus on personalized service. Their pricing starts with a low base fee plus per-minute charges.',
    features: [
      { feature: 'Monthly Starting Price', autoquill: '$299/mo (600 min)', competitor: '$47/mo (0 min included)', winner: 'competitor' },
      { feature: 'Cost Per Minute', autoquill: '$0.35-0.50 (overage)', competitor: '$1.37-1.50/min', winner: 'autoquill' },
      { feature: 'Availability', autoquill: '24/7/365', competitor: '24/7/365', winner: 'tie' },
      { feature: 'Answer Speed', autoquill: 'Under 2 rings (instant)', competitor: '3-5 rings (queue-based)', winner: 'autoquill' },
      { feature: 'Simultaneous Calls', autoquill: 'Unlimited', competitor: 'Limited by operator count', winner: 'autoquill' },
      { feature: 'Appointment Booking', autoquill: 'Yes, real-time calendar sync', competitor: 'Basic, through supported tools', winner: 'autoquill' },
      { feature: 'Bilingual Support', autoquill: 'English + Spanish', competitor: 'English + Spanish (native speakers)', winner: 'competitor' },
      { feature: 'HIPAA Compliance', autoquill: 'Yes', competitor: 'Yes', winner: 'tie' },
      { feature: 'Employee-Owned', autoquill: 'N/A', competitor: 'Yes (ESOP)', winner: 'competitor' },
      { feature: 'CRM Integration', autoquill: 'HubSpot, Salesforce, GHL, more', competitor: 'Limited integrations', winner: 'autoquill' },
      { feature: 'Call Transcripts', autoquill: 'Yes, every call', competitor: 'Not standard', winner: 'autoquill' },
      { feature: 'Setup Time', autoquill: '48 hours', competitor: '3-7 business days', winner: 'autoquill' },
    ],
    autoquillAdvantages: [
      {
        title: 'Predictable pricing at any volume',
        description:
          "MAP's $47/month base fee is attractive until you realize it includes zero minutes. Every minute costs $1.37-1.50 extra. A business using 400 minutes/month would pay $595-647 with MAP vs $299 with Autoquill. The \"cheap\" base price is misleading.",
      },
      {
        title: 'Instant answering, unlimited capacity',
        description:
          "MAP Communications uses human operators who can only handle one call at a time. During busy periods, callers wait. Autoquill answers every call instantly, even if 20 come in simultaneously during a storm or emergency.",
      },
      {
        title: 'Real-time booking vs message relay',
        description:
          "MAP operators primarily take messages and relay them. Autoquill books appointments directly into your calendar during the call. The customer hangs up with a confirmed time slot, not a promise that someone will call them back.",
      },
      {
        title: 'Full call intelligence',
        description:
          "Every Autoquill call generates a searchable transcript, call summary, lead score, and CRM entry. MAP provides basic message delivery. The data difference compounds over time, giving you insights into call patterns, common questions, and lost opportunities.",
      },
    ],
    competitorAdvantages: [
      {
        title: 'Native bilingual Spanish support',
        description:
          "MAP Communications employs native Spanish speakers, not just bilingual operators. For businesses serving predominantly Spanish-speaking communities, this provides a more authentic and comfortable experience than AI Spanish.",
      },
      {
        title: 'Very low base cost for light usage',
        description:
          "If your business receives fewer than 30 calls per month, MAP's pay-per-minute model could cost less than Autoquill's flat rate. At very low volumes, the per-minute approach has an advantage.",
      },
      {
        title: 'Employee-owned company culture',
        description:
          "MAP is an ESOP (Employee Stock Ownership Plan), meaning their operators have a stake in the company's success. This can translate to higher motivation and better service quality compared to typical call center employees.",
      },
    ],
    whoShouldChoose: {
      autoquill: [
        'Service businesses with moderate to high call volume (200+ min/month)',
        'Companies that want predictable flat-rate pricing',
        'Businesses that need instant answering during peak periods',
        'Companies wanting real-time appointment booking and CRM integration',
        'Plumbers, HVAC, and dentists who need industry-specific AI',
      ],
      competitor: [
        'Very low-volume businesses (under 30 calls/month)',
        'Businesses serving predominantly Spanish-speaking communities',
        'Companies that value supporting employee-owned businesses',
        'Organizations where every caller must speak to a real person',
      ],
    },
    verdict:
      "MAP Communications offers honest, reliable human answering with excellent bilingual support. But the per-minute pricing model creates cost uncertainty that grows with your business. At 400 minutes per month, MAP costs roughly double what Autoquill charges, and you get message taking instead of appointment booking. For service businesses with any real call volume, Autoquill delivers more features, faster answering, and dramatically better economics. MAP is a strong pick for very low-volume businesses or those needing native Spanish-speaking operators.",
    faqs: [
      {
        question: 'Is MAP Communications really $47/month?',
        answer:
          "The $47 base fee includes zero minutes of call time. Every minute is billed at $1.37-1.50. A typical service business using 300 minutes would pay $458-497/month total. Autoquill's $299 plan includes 600 minutes, making it significantly cheaper at any moderate volume.",
      },
      {
        question: 'Does Autoquill support Spanish-speaking callers?',
        answer:
          "Yes. Autoquill offers bilingual English and Spanish support. While the AI handles Spanish conversations naturally, MAP's advantage is native Spanish-speaking human operators who may provide a more culturally nuanced experience for Spanish-dominant callers.",
      },
      {
        question: 'Which service is better for emergency call handling?',
        answer:
          "Autoquill excels at emergency triage. The AI follows precise rules to categorize emergencies, asks the right qualifying questions every time, and routes urgent calls immediately. Human operators can exercise judgment but may not follow triage protocols as consistently.",
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
