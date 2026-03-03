// ============================================
// Integration Partner Pages
// URL pattern: /integrations/{slug}
// ============================================

export interface IntegrationStep {
  title: string;
  description: string;
}

export interface IntegrationBenefit {
  title: string;
  description: string;
}

export interface IntegrationFAQ {
  question: string;
  answer: string;
}

export interface IntegrationData {
  slug: string;
  partnerName: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  intro: string;
  partnerDescription: string;
  howItWorks: IntegrationStep[];
  benefits: IntegrationBenefit[];
  faqs: IntegrationFAQ[];
}

export const integrations: Record<string, IntegrationData> = {
  'housecall-pro': {
    slug: 'housecall-pro',
    partnerName: 'HouseCall Pro',
    metaTitle: 'HouseCall Pro + AutoQuill AI | Automatic Job Booking Integration',
    metaDescription:
      'Connect AutoQuill AI with HouseCall Pro for automatic job creation and scheduling. AI answers your calls, books jobs, and syncs everything. Setup in minutes.',
    headline: 'HouseCall Pro + AutoQuill AI',
    subheadline: 'AI answers your calls. Jobs appear in HouseCall Pro automatically.',
    intro:
      'HouseCall Pro is the leading field service management platform for home service businesses. When you connect it with AutoQuill AI, every phone call becomes a booked job without any manual data entry. Your AI receptionist answers the call, qualifies the lead, schedules the appointment, and creates the job in HouseCall Pro, all in a single conversation.',
    partnerDescription:
      'HouseCall Pro helps plumbers, HVAC technicians, electricians, and other home service professionals manage their entire business. It handles scheduling, dispatching, invoicing, payments, and customer communication in one platform used by over 30,000 businesses.',
    howItWorks: [
      {
        title: 'Customer Calls Your Business',
        description:
          'A homeowner calls about a leaking water heater. AutoQuill AI answers instantly, day or night, and starts a natural conversation to understand the issue.',
      },
      {
        title: 'AI Qualifies and Schedules',
        description:
          'The AI asks the right questions (address, issue type, urgency), checks your real-time HouseCall Pro availability, and books the appointment on the spot.',
      },
      {
        title: 'Job Created Automatically',
        description:
          'A new job appears in HouseCall Pro with the customer name, address, phone number, issue description, and scheduled time. No copy-pasting, no data entry.',
      },
      {
        title: 'Your Team Gets Notified',
        description:
          'The assigned technician receives the job notification through HouseCall Pro. The customer receives a confirmation text. Everyone is on the same page.',
      },
    ],
    benefits: [
      {
        title: 'Zero Manual Data Entry',
        description:
          'Every call creates a complete job record in HouseCall Pro automatically. Customer info, job details, and schedule are all synced without your team touching a keyboard.',
      },
      {
        title: 'Book Jobs After Hours',
        description:
          'Emergency calls at 11 PM become booked jobs, not voicemails. The AI checks your HouseCall Pro schedule and books the first available slot or routes true emergencies to your on-call tech.',
      },
      {
        title: 'Fewer Scheduling Conflicts',
        description:
          'Because the AI reads your live HouseCall Pro calendar, it never double-books. It sees technician availability in real time and only offers open slots.',
      },
      {
        title: 'Higher Close Rates',
        description:
          'Customers who book during their first call convert at 3-4x the rate of customers who leave voicemails. The integration turns more calls into paying jobs.',
      },
      {
        title: 'Complete Call Records',
        description:
          'Every job in HouseCall Pro includes the full call transcript and summary. Your technician arrives knowing exactly what the customer described.',
      },
      {
        title: 'Faster Dispatch',
        description:
          'Emergency jobs trigger immediate notifications to your on-call team through HouseCall Pro. Response time drops from hours to minutes.',
      },
    ],
    faqs: [
      {
        question: 'How long does the HouseCall Pro integration take to set up?',
        answer:
          'Most businesses are fully connected within 24-48 hours. You authorize the connection between AutoQuill and HouseCall Pro, configure your scheduling preferences, and the AI starts creating jobs automatically.',
      },
      {
        question: 'Does the AI check my real-time availability in HouseCall Pro?',
        answer:
          'Yes. The AI reads your HouseCall Pro schedule in real time before offering appointment slots. It respects technician availability, service areas, and scheduling rules you have configured.',
      },
      {
        question: 'What if the AI books a job incorrectly?',
        answer:
          'All jobs are created with full call transcripts attached. Your team can review and adjust any booking. In practice, accuracy rates exceed 95% because the AI asks structured qualifying questions.',
      },
      {
        question: 'Can the AI handle different job types in HouseCall Pro?',
        answer:
          'Yes. The AI is trained on your specific service types (drain cleaning, water heater repair, repiping, etc.) and creates the correct job type in HouseCall Pro based on the conversation.',
      },
      {
        question: 'Do I need a specific HouseCall Pro plan for this integration?',
        answer:
          'The integration works with HouseCall Pro Essentials, MAX, and XL plans. Any plan with API access supports the AutoQuill connection.',
      },
    ],
  },

  'go-high-level': {
    slug: 'go-high-level',
    partnerName: 'Go High Level',
    metaTitle: 'Go High Level + AutoQuill AI | AI Voice Agent Integration',
    metaDescription:
      'Integrate AutoQuill AI with Go High Level (GHL) for automated lead capture, CRM updates, and appointment booking. AI calls flow directly into your GHL pipeline.',
    headline: 'Go High Level + AutoQuill AI',
    subheadline: 'Every call becomes a contact, a booking, and a pipeline entry in GHL.',
    intro:
      'Go High Level is the all-in-one marketing and CRM platform trusted by agencies and service businesses. When paired with AutoQuill AI, your phone calls become fully automated lead capture machines. The AI answers, qualifies the caller, books appointments, creates contacts, and moves leads through your GHL pipeline, all without human intervention.',
    partnerDescription:
      'Go High Level (GHL) provides CRM, email marketing, SMS, landing pages, reputation management, and appointment scheduling in one platform. It is especially popular with marketing agencies and the service businesses they manage.',
    howItWorks: [
      {
        title: 'Inbound Call Answered by AI',
        description:
          'A potential customer calls your tracked GHL phone number. AutoQuill AI answers instantly and begins a natural, industry-specific conversation.',
      },
      {
        title: 'Lead Qualified and Captured',
        description:
          'The AI gathers contact info, identifies the service needed, assesses urgency, and captures all details. This data flows directly into a new GHL contact record.',
      },
      {
        title: 'Appointment Booked in GHL Calendar',
        description:
          'The AI checks your GHL calendar availability and books the appointment. The customer receives an automated confirmation via GHL SMS or email.',
      },
      {
        title: 'Pipeline Updated, Workflows Triggered',
        description:
          'The new lead moves into your GHL pipeline at the correct stage. Automated workflows fire: follow-up sequences, team notifications, review requests after service.',
      },
    ],
    benefits: [
      {
        title: 'Leads Flow Into Your Pipeline Automatically',
        description:
          'Every call creates a GHL contact with full details and moves it into your sales pipeline. No manual entry, no leads falling through cracks.',
      },
      {
        title: 'Trigger GHL Workflows From Calls',
        description:
          'Use call outcomes to trigger GHL automations: send a welcome text after booking, start a nurture sequence for undecided leads, or request a review after service.',
      },
      {
        title: 'Unified Communication History',
        description:
          'Call transcripts, summaries, and recordings are attached to the GHL contact. Your team sees the complete communication history in one place.',
      },
      {
        title: 'Book Into GHL Calendars Directly',
        description:
          'The AI respects your GHL calendar rules: appointment types, durations, buffer times, and team member assignments. No double-bookings, no mismatched services.',
      },
      {
        title: 'Agency-Friendly Multi-Location Support',
        description:
          'If you manage multiple locations or clients in GHL, AutoQuill can route calls to the correct sub-account and calendar. Perfect for agencies managing service business clients.',
      },
      {
        title: 'Reputation Management Boost',
        description:
          'Faster call answering and better customer experience lead to more positive reviews. GHL review request workflows amplify this after every completed job.',
      },
    ],
    faqs: [
      {
        question: 'How does AutoQuill connect to Go High Level?',
        answer:
          'AutoQuill connects via GHL API and webhooks. After a simple authorization process, call data flows directly into your GHL account. Setup typically takes under an hour.',
      },
      {
        question: 'Can AutoQuill trigger GHL workflows?',
        answer:
          'Yes. Call events (new lead, appointment booked, emergency flagged) can trigger any GHL workflow. This lets you automate follow-up sequences, notifications, and pipeline movements based on call outcomes.',
      },
      {
        question: 'Does this work with GHL sub-accounts for agencies?',
        answer:
          'Yes. Agencies can connect AutoQuill to individual GHL sub-accounts, each with its own AI configuration, calendar, and pipeline. Calls are routed to the correct sub-account automatically.',
      },
      {
        question: 'What GHL data does AutoQuill use for scheduling?',
        answer:
          'AutoQuill reads your GHL calendar availability, appointment types, team member schedules, and booking rules. It only offers slots that are genuinely available.',
      },
      {
        question: 'Can I see call transcripts inside Go High Level?',
        answer:
          'Yes. Full call transcripts and AI-generated summaries are attached to the contact record in GHL. Your team can review exactly what was discussed without listening to recordings.',
      },
    ],
  },
};

export function getIntegrationData(slug: string): IntegrationData | undefined {
  return integrations[slug];
}

export function getAllIntegrationSlugs(): string[] {
  return Object.keys(integrations);
}
