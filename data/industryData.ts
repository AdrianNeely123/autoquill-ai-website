// Industry-specific landing page data
export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo?: string;
  results: {
    metric: string;
    label: string;
  }[];
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryMetric {
  value: string;
  label: string;
}

export interface RichIntegration {
  name: string;
  description: string;
  color: string;
}

export interface ComparisonContext {
  badge: string;
  title: string;
  subtitle: string;
  bottomTitle: string;
  bottomSubtitle: string;
}

export interface PhoneAuditCta {
  headline: string;
  description: string;
  buttonText: string;
}

export interface PricingTeaser {
  headline: string;
  description: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  painPoints: {
    stat: string;
    title: string;
    description: string;
  }[];
  features: IndustryFeature[];
  integrations: string[];
  testimonial: IndustryTestimonial;
  stats: IndustryStat[];
  faqs: IndustryFAQ[];
  ctaText: string;
  freeAgentCta: string; // Industry-specific free agent CTA
  leadMagnet: {
    title: string;
    description: string;
    buttonText: string;
  };
  metaTitle: string;
  metaDescription: string;
  industryMetrics: IndustryMetric[];
  richIntegrations: RichIntegration[];
  comparisonContext: ComparisonContext;
  phoneAuditCta: PhoneAuditCta;
  pricingTeaser: PricingTeaser;
  trustedBy: string[];
}

export const industryData: Record<string, IndustryData> = {
  dentists: {
    slug: 'dentists',
    name: 'Dental Practices',
    headline: 'Never Miss a Patient Call Again',
    subheadline: 'AI Receptionist for Dental Practices',
    heroDescription: 'Your front desk is overwhelmed. Patients are going to voicemail. New patient opportunities are slipping away. Autoquill AI answers every call, schedules appointments, and handles insurance questions—24/7.',
    painPoints: [
      {
        stat: '40%',
        title: 'of new patient calls go unanswered',
        description: 'When your front desk is busy with check-ins, calls go to voicemail. Those patients call the next dentist on Google.',
      },
      {
        stat: '$200+',
        title: 'average lifetime value per patient',
        description: 'Every missed call isn\'t just one appointment—it\'s years of cleanings, procedures, and referrals walking out the door.',
      },
      {
        stat: '67%',
        title: 'of patients won\'t leave a voicemail',
        description: 'They\'ll just call the next practice. Your voicemail isn\'t capturing leads—it\'s losing them.',
      },
    ],
    features: [
      { title: 'Appointment Scheduling', description: 'Books cleanings, exams, consultations, and emergency visits directly into your practice management software.' },
      { title: 'Insurance Questions', description: 'Answers common insurance questions, explains coverage, and collects insurance info from new patients.' },
      { title: 'Emergency Triage', description: 'Identifies dental emergencies and routes urgent calls to your on-call staff immediately.' },
      { title: 'New Patient Intake', description: 'Collects patient information, medical history basics, and schedules new patient exams.' },
      { title: 'Appointment Reminders', description: 'Sends confirmation texts and handles rescheduling requests automatically.' },
      { title: 'After-Hours Coverage', description: 'Captures every call nights, weekends, and holidays—when 30% of patients try to book.' },
    ],
    integrations: ['Dentrix', 'Eaglesoft', 'Open Dental', 'Curve Dental', 'Google Calendar', 'Calendly'],
    testimonial: {
      quote: 'We went from missing 30% of calls to answering every single one. The AI even books appointments while we\'re with patients. It\'s like having 3 front desk staff for the price of one.',
      author: 'Dr. Sarah Mitchell',
      role: 'Practice Owner',
      company: 'Brighton Dental',
      logo: '/dental-logo.svg',
      results: [
        { metric: '40%', label: 'increase in new patient bookings' },
        { metric: '0', label: 'missed calls during business hours' },
        { metric: '$85K', label: 'additional annual revenue' },
      ],
    },
    stats: [
      { value: '500+', label: 'Dental practices served' },
      { value: '24/7', label: 'Patient call coverage' },
      { value: '< 1 sec', label: 'Average answer time' },
      { value: '40%', label: 'Avg. booking increase' },
    ],
    faqs: [
      {
        question: 'Does it integrate with my practice management software?',
        answer: 'Yes! We integrate with Dentrix, Eaglesoft, Open Dental, Curve Dental, and most major dental practice management systems. We can also connect via API or Zapier for custom setups.',
      },
      {
        question: 'Can it handle insurance questions?',
        answer: 'Absolutely. The AI is trained to answer common insurance questions, explain what\'s typically covered, and collect insurance information from new patients. Complex questions get routed to your team.',
      },
      {
        question: 'What about dental emergencies?',
        answer: 'The AI identifies emergency situations (severe pain, trauma, swelling) and immediately routes those calls to your on-call staff or emergency line. Non-emergencies get scheduled appropriately.',
      },
      {
        question: 'Will patients know they\'re talking to AI?',
        answer: 'Most patients can\'t tell. Our voice AI sounds natural, handles interruptions, and responds in under 500ms. Many practices don\'t disclose it\'s AI, but you can configure a disclosure if required.',
      },
    ],
    ctaText: 'Get Your Dental AI Receptionist',
    freeAgentCta: 'Get Free Patient Scheduling Agent',
    leadMagnet: {
      title: '7 Questions Your Front Desk Should Never Miss',
      description: 'Free checklist: The exact questions that turn callers into booked patients',
      buttonText: 'Get Free Checklist',
    },
    metaTitle: 'AI Receptionist for Dentists | Never Miss a Patient Call | Autoquill',
    metaDescription: 'Stop losing patients to voicemail. Autoquill AI receptionist answers every call 24/7, schedules appointments, and handles insurance questions for dental practices.',
    industryMetrics: [
      { value: '500+', label: 'Dental practices using Autoquill' },
      { value: '97%', label: 'Patient satisfaction rating' },
      { value: '<500ms', label: 'Average voice response time' },
      { value: '24/7', label: 'Patient call coverage' },
    ],
    richIntegrations: [
      { name: 'Dentrix', description: 'Sync patient records and appointments', color: 'from-blue-500 to-cyan-500' },
      { name: 'Eaglesoft', description: 'Real-time schedule availability', color: 'from-green-500 to-emerald-500' },
      { name: 'Open Dental', description: 'Two-way patient data sync', color: 'from-purple-500 to-pink-500' },
      { name: 'Curve Dental', description: 'Cloud-based practice integration', color: 'from-orange-500 to-red-500' },
      { name: 'Google Calendar', description: 'Calendar sync for appointments', color: 'from-blue-600 to-indigo-600' },
      { name: 'Calendly', description: 'Self-service booking links', color: 'from-teal-500 to-green-500' },
    ],
    comparisonContext: {
      badge: 'Dental AI vs. Traditional',
      title: 'AI Receptionist vs. Dental Front Desk Staff',
      subtitle: 'See how AI phone handling compares to a traditional front desk for dental practices',
      bottomTitle: 'The best dental practices use both',
      bottomSubtitle: 'Let your front desk focus on in-office patients while AI handles the phones',
    },
    phoneAuditCta: {
      headline: 'How Does Your Dental Office Sound on the Phone?',
      description: 'We\'ll mystery-call your practice, grade your phone experience, and show you exactly where you\'re losing new patients.',
      buttonText: 'Get My Free Phone Audit',
    },
    pricingTeaser: {
      headline: 'Ready to See Pricing for Your Dental Practice?',
      description: 'Plans starting at $299/mo with minutes included. See which tier fits your practice size and call volume.',
    },
    trustedBy: [
      'Brighton Dental',
      'Sunrise Family Dentistry',
      'Parkview Dental Group',
      'Lakeshore Smiles',
      'Summit Dental Care',
      'Evergreen Dental Studio',
      'Crestview Orthodontics',
      'Maple Grove Family Dental',
    ],
  },

  hvac: {
    slug: 'hvac',
    name: 'HVAC Companies',
    headline: 'Capture Every Emergency Call',
    subheadline: 'AI Answering Service for HVAC Companies',
    heroDescription: 'When the AC breaks at 2 AM in July, homeowners don\'t leave voicemails—they call the next company. Autoquill AI answers every call instantly, qualifies the job, and dispatches your team for emergencies.',
    painPoints: [
      {
        stat: '60%',
        title: 'of emergency calls go to voicemail',
        description: 'During peak season, your office can\'t keep up. Every missed emergency call goes straight to your competitor.',
      },
      {
        stat: '$500+',
        title: 'average emergency service ticket',
        description: 'Emergency calls are your highest-margin jobs. Missing them doesn\'t just cost revenue—it costs reputation.',
      },
      {
        stat: '35%',
        title: 'of calls come after hours',
        description: 'HVAC emergencies don\'t wait for business hours. Neither should your phone coverage.',
      },
    ],
    features: [
      { title: 'Emergency Dispatch', description: 'Identifies urgent situations (no heat in winter, no AC in summer) and immediately notifies your on-call technician.' },
      { title: 'Job Qualification', description: 'Asks the right questions: equipment type, age, symptoms, warranty status. Your tech arrives prepared.' },
      { title: 'Service Scheduling', description: 'Books maintenance visits, tune-ups, and installations directly into your calendar.' },
      { title: 'Quote Requests', description: 'Collects project details for new installations and replacements, sends to your sales team.' },
      { title: 'Seasonal Surge Handling', description: 'Handles 10x call volume during heat waves and cold snaps without missing a beat.' },
      { title: '24/7 Coverage', description: 'Nights, weekends, holidays—every call answered in under 1 second.' },
    ],
    integrations: ['ServiceTitan', 'Housecall Pro', 'Jobber', 'FieldEdge', 'Google Calendar', 'Salesforce'],
    testimonial: {
      quote: 'Emergency calls used to go to voicemail and customers would call someone else. Now we capture every emergency job. The ROI paid for itself in the first month.',
      author: 'Mike Johnson',
      role: 'Owner',
      company: 'Johnson HVAC',
      logo: '/kuducom-logo.svg',
      results: [
        { metric: '95%', label: 'of calls answered in under 10 seconds' },
        { metric: '500+', label: 'calls handled monthly' },
        { metric: '$120K', label: 'revenue from emergency calls' },
      ],
    },
    stats: [
      { value: '300+', label: 'HVAC companies served' },
      { value: '< 1 sec', label: 'Average answer time' },
      { value: '95%', label: 'Emergency capture rate' },
      { value: '$120K', label: 'Avg. revenue recovered' },
    ],
    faqs: [
      {
        question: 'How does emergency dispatch work?',
        answer: 'The AI identifies emergencies based on keywords and urgency (no heat, no AC, gas smell, flooding). It immediately sends an SMS/call to your on-call technician with customer details and job info.',
      },
      {
        question: 'Does it integrate with ServiceTitan?',
        answer: 'Yes! We integrate with ServiceTitan, Housecall Pro, Jobber, FieldEdge, and most major field service management platforms. Appointments sync automatically.',
      },
      {
        question: 'Can it handle the summer/winter rush?',
        answer: 'Absolutely. Unlike humans, the AI handles unlimited simultaneous calls. During a heat wave, it can manage 50+ calls at once without any degradation in quality.',
      },
      {
        question: 'What questions does it ask callers?',
        answer: 'It\'s customized to your business, but typically: equipment type/brand, age of system, what\'s happening, when it started, warranty status, and preferred appointment times.',
      },
    ],
    ctaText: 'Get Your HVAC AI Receptionist',
    freeAgentCta: 'Get Free Emergency Dispatch Agent',
    leadMagnet: {
      title: 'Emergency Call Handling Scripts',
      description: 'Free guide: How to qualify and dispatch emergency calls in under 60 seconds',
      buttonText: 'Get Free Scripts',
    },
    metaTitle: 'AI Answering Service for HVAC Companies | 24/7 Emergency Dispatch | Autoquill',
    metaDescription: 'Never miss an emergency call again. Autoquill AI answers HVAC calls 24/7, dispatches emergencies instantly, and books service appointments automatically.',
    industryMetrics: [
      { value: '300+', label: 'HVAC companies powered by Autoquill' },
      { value: '95%', label: 'Emergency call capture rate' },
      { value: '<1s', label: 'Average call answer time' },
      { value: '$120K', label: 'Avg. annual revenue recovered' },
    ],
    richIntegrations: [
      { name: 'ServiceTitan', description: 'Dispatch and job management sync', color: 'from-orange-500 to-red-500' },
      { name: 'Housecall Pro', description: 'Schedule and invoice integration', color: 'from-blue-500 to-cyan-500' },
      { name: 'Jobber', description: 'Work order and routing sync', color: 'from-green-500 to-emerald-500' },
      { name: 'FieldEdge', description: 'Technician dispatch automation', color: 'from-purple-500 to-pink-500' },
      { name: 'Google Calendar', description: 'Real-time availability sync', color: 'from-blue-600 to-indigo-600' },
      { name: 'Salesforce', description: 'CRM and lead tracking', color: 'from-teal-500 to-green-500' },
    ],
    comparisonContext: {
      badge: 'HVAC AI vs. Traditional',
      title: 'AI Answering vs. HVAC Call Center',
      subtitle: 'See how AI call handling compares to traditional answering services for HVAC companies',
      bottomTitle: 'The top HVAC companies are switching to AI',
      bottomSubtitle: 'Capture every emergency call without paying for a 24/7 call center',
    },
    phoneAuditCta: {
      headline: 'How Many Emergency Calls Is Your HVAC Company Missing?',
      description: 'We\'ll mystery-call your business after hours, grade your response, and show you the revenue you\'re leaving on the table.',
      buttonText: 'Get My Free Phone Audit',
    },
    pricingTeaser: {
      headline: 'Ready to See Pricing for Your HVAC Company?',
      description: 'Plans starting at $299/mo with emergency dispatch included. See which tier matches your call volume.',
    },
    trustedBy: [
      'Johnson HVAC',
      'Summit Heating & Air',
      'CoolBreeze Mechanical',
      'All Seasons Climate Control',
      'Precision Air Systems',
      'TrueTemp HVAC Solutions',
      'Northwind Heating & Cooling',
      'Apex Climate Services',
    ],
  },

  plumbers: {
    slug: 'plumbers',
    name: 'Plumbing Businesses',
    headline: 'Answer Calls While You\'re Under the Sink',
    subheadline: 'AI Call Answering for Plumbers',
    heroDescription: 'You can\'t answer the phone when you\'re elbow-deep in a repair. But that ringing phone is your next job—or your competitor\'s. Autoquill AI answers every call, books jobs, and routes emergencies to you instantly.',
    painPoints: [
      {
        stat: '20-30',
        title: 'jobs lost per month to missed calls',
        description: 'When you\'re on a job, calls go unanswered. Each one is a potential customer calling someone else.',
      },
      {
        stat: '$300+',
        title: 'average service call value',
        description: 'That\'s $6,000-9,000 in monthly revenue walking away because you couldn\'t pick up the phone.',
      },
      {
        stat: '45%',
        title: 'of plumbing calls are emergencies',
        description: 'Burst pipes and backed-up sewers can\'t wait. If you don\'t answer, they\'re calling the next plumber.',
      },
    ],
    features: [
      { title: 'Emergency Routing', description: 'Burst pipes, sewage backups, no hot water—emergencies get routed to your cell immediately with full details.' },
      { title: 'Job Booking', description: 'Schedules drain cleaning, water heater service, fixture installs, and inspections into your calendar.' },
      { title: 'Price Estimates', description: 'Gives ballpark pricing for common jobs based on your rates. Sets proper expectations before you arrive.' },
      { title: 'Lead Qualification', description: 'Asks about the problem, property type, and urgency. You know what you\'re walking into.' },
      { title: 'After-Hours Coverage', description: 'Captures every call nights and weekends—when most plumbing emergencies happen.' },
      { title: 'SMS Notifications', description: 'Get instant texts with caller details, job type, and urgency level.' },
    ],
    integrations: ['Housecall Pro', 'Jobber', 'ServiceTitan', 'Google Calendar', 'Calendly', 'Zapier'],
    testimonial: {
      quote: 'I can focus on the job I\'m on without worrying about missing the next one. The AI even schedules appointments while I\'m under a sink. Game changer.',
      author: 'Shaq Watson',
      role: 'Owner',
      company: 'Thumbs Up Plumbing',
      logo: '/thumbsup-plumbing-logo.svg',
      results: [
        { metric: '60%', label: 'more jobs booked per month' },
        { metric: '24/7', label: 'coverage including weekends' },
        { metric: '$95K', label: 'annual revenue increase' },
      ],
    },
    stats: [
      { value: '200+', label: 'Plumbing businesses served' },
      { value: '60%', label: 'Avg. increase in bookings' },
      { value: '24/7', label: 'Emergency coverage' },
      { value: '$95K', label: 'Avg. revenue increase' },
    ],
    faqs: [
      {
        question: 'How fast will I know about emergency calls?',
        answer: 'Instantly. When the AI identifies an emergency (burst pipe, sewage backup, gas smell), you get an immediate SMS and/or phone call with all the details.',
      },
      {
        question: 'Can it give price quotes?',
        answer: 'Yes! You provide your standard rates for common jobs, and the AI gives callers ballpark estimates. For complex jobs, it collects details and lets them know you\'ll provide a quote on-site.',
      },
      {
        question: 'What if I\'m a one-person operation?',
        answer: 'Perfect! Solo plumbers benefit the most. The AI acts as your full-time office staff—answering calls, booking jobs, and handling scheduling while you focus on the work.',
      },
      {
        question: 'Does it work with Housecall Pro?',
        answer: 'Yes! We integrate with Housecall Pro, Jobber, ServiceTitan, and other popular field service apps. New bookings appear directly in your schedule.',
      },
    ],
    ctaText: 'Get Your Plumbing AI Receptionist',
    freeAgentCta: 'Get Free After-Hours Agent',
    leadMagnet: {
      title: 'The Plumber\'s Call Capture Checklist',
      description: 'Free guide: 5 questions to ask every caller that double your booking rate',
      buttonText: 'Get Free Checklist',
    },
    metaTitle: 'AI Call Answering for Plumbers | Never Miss a Job | Autoquill',
    metaDescription: 'Stop losing jobs to missed calls. Autoquill AI answers plumbing calls 24/7, books appointments, routes emergencies, and works while you\'re on the job.',
    industryMetrics: [
      { value: '200+', label: 'Plumbing businesses using Autoquill' },
      { value: '60%', label: 'Average increase in booked jobs' },
      { value: '24/7', label: 'Emergency call coverage' },
      { value: '<500ms', label: 'Voice response time' },
    ],
    richIntegrations: [
      { name: 'Housecall Pro', description: 'Job scheduling and dispatch sync', color: 'from-blue-500 to-cyan-500' },
      { name: 'Jobber', description: 'Quote and invoice automation', color: 'from-green-500 to-emerald-500' },
      { name: 'ServiceTitan', description: 'Full service management sync', color: 'from-orange-500 to-red-500' },
      { name: 'Google Calendar', description: 'Real-time availability updates', color: 'from-blue-600 to-indigo-600' },
      { name: 'Calendly', description: 'Customer self-scheduling links', color: 'from-purple-500 to-pink-500' },
      { name: 'Zapier', description: 'Connect 5,000+ apps and tools', color: 'from-yellow-500 to-orange-500' },
    ],
    comparisonContext: {
      badge: 'Plumbing AI vs. Traditional',
      title: 'AI Call Answering vs. Missed Calls',
      subtitle: 'See how AI phone handling compares to voicemail and answering services for plumbers',
      bottomTitle: 'The busiest plumbers never miss a call',
      bottomSubtitle: 'Focus on the job in front of you while AI books the next one',
    },
    phoneAuditCta: {
      headline: 'How Many Jobs Is Your Plumbing Business Losing to Voicemail?',
      description: 'We\'ll mystery-call your business, grade your phone experience, and show you how many jobs you\'re sending to competitors.',
      buttonText: 'Get My Free Phone Audit',
    },
    pricingTeaser: {
      headline: 'Ready to See Pricing for Your Plumbing Business?',
      description: 'Plans starting at $299/mo. Perfect for solo plumbers and growing teams alike.',
    },
    trustedBy: [
      'Thumbs Up Plumbing',
      'Rapid Flow Plumbing',
      'PipeWorks Pro',
      'ClearDrain Solutions',
      'BlueWater Plumbing Co.',
      'AllPipe Plumbing & Drain',
      'Tri-County Plumbing Services',
      'Honest Abe Plumbing',
    ],
  },

  medspa: {
    slug: 'medspa',
    name: 'Med Spas',
    headline: 'Convert Every Inquiry Into a Consultation',
    subheadline: 'AI Receptionist for Med Spas',
    heroDescription: 'Your clients expect luxury service from the first call. When inquiries go to voicemail, they book with your competitor. Autoquill AI delivers a premium phone experience 24/7—answering questions, booking consultations, and collecting deposits.',
    painPoints: [
      {
        stat: '$5,000+',
        title: 'average client lifetime value',
        description: 'Med spa clients return for years. One missed consultation call can cost you tens of thousands in lifetime revenue.',
      },
      {
        stat: '70%',
        title: 'of inquiries call outside business hours',
        description: 'People research treatments at night. If you can\'t book them then, they\'ll find someone who can.',
      },
      {
        stat: '40%',
        title: 'of consultations no-show without deposits',
        description: 'Free consultations get forgotten. Collecting deposits upfront dramatically improves show rates.',
      },
    ],
    features: [
      { title: 'Treatment Inquiries', description: 'Answers questions about Botox, fillers, laser treatments, body contouring, and more with accurate, on-brand information.' },
      { title: 'Consultation Booking', description: 'Schedules consultations for all services, checks provider availability, and sends confirmation details.' },
      { title: 'Deposit Collection', description: 'Processes consultation deposits via Stripe or Square to reduce no-shows and qualify serious clients.' },
      { title: 'Pricing Information', description: 'Provides treatment pricing ranges and package options based on your rate card.' },
      { title: 'VIP Client Recognition', description: 'Identifies returning clients and provides personalized service based on their history.' },
      { title: 'After-Hours Booking', description: 'Captures high-intent leads when they\'re researching at 10 PM and ready to book.' },
    ],
    integrations: ['Vagaro', 'Booker', 'Zenoti', 'Boulevard', 'Stripe', 'Square', 'Google Calendar'],
    testimonial: {
      quote: 'Our clients expect luxury service. The AI sounds professional, books consultations perfectly, and even processes deposits. It\'s elevated our entire client experience.',
      author: 'Jessica Chen',
      role: 'Owner',
      company: 'Radiant Med Spa',
      logo: '/camber-logo.svg',
      results: [
        { metric: '85%', label: 'more consultation bookings' },
        { metric: '$8K', label: 'average consultation value' },
        { metric: '100%', label: 'deposit collection rate' },
      ],
    },
    stats: [
      { value: '150+', label: 'Med spas served' },
      { value: '85%', label: 'Increase in bookings' },
      { value: '$8K', label: 'Avg. client value' },
      { value: '24/7', label: 'Luxury service coverage' },
    ],
    faqs: [
      {
        question: 'Can it answer detailed treatment questions?',
        answer: 'Yes! The AI is trained on your specific treatments, pricing, and protocols. It can explain procedures, recovery times, expected results, and contraindications accurately.',
      },
      {
        question: 'How does deposit collection work?',
        answer: 'When booking a consultation, the AI can collect a deposit via Stripe or Square. You set the amount. This dramatically reduces no-shows and qualifies serious clients.',
      },
      {
        question: 'Will it match our luxury brand voice?',
        answer: 'Absolutely. We customize the AI\'s tone, vocabulary, and personality to match your brand. It can be warm and welcoming, clinical and professional, or exclusive and high-end.',
      },
      {
        question: 'Does it integrate with Vagaro/Booker?',
        answer: 'Yes! We integrate with Vagaro, Booker, Zenoti, Boulevard, and other med spa booking platforms. Appointments sync automatically.',
      },
    ],
    ctaText: 'Get Your Med Spa AI Receptionist',
    freeAgentCta: 'Get Free Consultation Booking Agent',
    leadMagnet: {
      title: 'Med Spa Inquiry Response Templates',
      description: 'Free templates: Luxury responses that convert inquiries into $5K+ consultations',
      buttonText: 'Get Free Templates',
    },
    metaTitle: 'AI Receptionist for Med Spas | Book More Consultations | Autoquill',
    metaDescription: 'Deliver luxury service 24/7. Autoquill AI answers med spa inquiries, books consultations, collects deposits, and converts more leads into clients.',
    industryMetrics: [
      { value: '150+', label: 'Med spas powered by Autoquill' },
      { value: '85%', label: 'Increase in consultation bookings' },
      { value: '$8K', label: 'Avg. client lifetime value captured' },
      { value: '24/7', label: 'Luxury-level phone coverage' },
    ],
    richIntegrations: [
      { name: 'Vagaro', description: 'Booking and client management sync', color: 'from-purple-500 to-pink-500' },
      { name: 'Booker', description: 'Appointment and revenue tracking', color: 'from-rose-500 to-red-500' },
      { name: 'Zenoti', description: 'Enterprise spa management sync', color: 'from-blue-600 to-indigo-600' },
      { name: 'Boulevard', description: 'Premium client experience platform', color: 'from-teal-500 to-green-500' },
      { name: 'Stripe', description: 'Consultation deposit collection', color: 'from-blue-500 to-cyan-500' },
      { name: 'Square', description: 'In-person and phone payments', color: 'from-green-500 to-emerald-500' },
      { name: 'Google Calendar', description: 'Sync availability', color: 'from-green-500 to-emerald-500' },
    ],
    comparisonContext: {
      badge: 'Med Spa AI vs. Traditional',
      title: 'AI Receptionist vs. Med Spa Front Desk',
      subtitle: 'See how AI-powered phone service compares to traditional reception for med spas',
      bottomTitle: 'The top med spas deliver luxury at every touchpoint',
      bottomSubtitle: 'Give every caller a VIP experience, whether it\'s 2 PM or 2 AM',
    },
    phoneAuditCta: {
      headline: 'How Does Your Med Spa Sound to First-Time Callers?',
      description: 'We\'ll mystery-call your med spa, grade your phone experience, and reveal where high-value clients are dropping off.',
      buttonText: 'Get My Free Phone Audit',
    },
    pricingTeaser: {
      headline: 'Ready to See Pricing for Your Med Spa?',
      description: 'Plans starting at $299/mo with deposit collection included. See which tier matches your consultation volume.',
    },
    trustedBy: [
      'Radiant Med Spa',
      'Glow Aesthetics',
      'Luminous Skin Studio',
      'Revive Beauty Bar',
      'The Luxe Clinic',
      'Pure Radiance Med Spa',
      'Serenity Aesthetics & Wellness',
      'Blush Beauty Med Spa',
    ],
  },
};


export const getIndustryData = (slug: string): IndustryData | undefined => {
  return industryData[slug];
};

export const getAllIndustries = (): IndustryData[] => {
  return Object.values(industryData);
};

