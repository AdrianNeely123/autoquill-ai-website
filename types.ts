// Shared TypeScript types and interfaces for Autoquill AI

export type Page = 'home' | 'blog' | 'free-agent' | 'article' | 'privacy' | 'terms' | 'thank-you' | 'lead-magnet' | 'pricing' | 'dentists' | 'hvac' | 'plumbers' | 'medspa';

export type IndustrySlug = 'dentists' | 'hvac' | 'plumbers' | 'medspa';

export type ArticleSlug = 
  | 'voicemail-is-dead'
  | 'hubspot-integration'
  | 'oakwood-dental-case-study'
  | 'ethics-of-ai-voice-agents'
  | 'top-5-voice-agent-features'
  | 'dental-front-desk-overwhelmed'
  | 'hvac-emergency-calls-after-hours'
  | 'plumber-one-man-operation-scaling'
  | 'medspa-consultation-no-shows'
  | 'law-firm-intake-after-hours'
  | 'small-business-phone-anxiety'
  | 'ai-receptionist-vs-answering-service'
  | 'veterinary-clinic-phone-overwhelm'
  | 'real-estate-lead-response-time'
  | 'google-reviews-phone-experience'
  | 'ai-receptionist-cost-complete-guide-2026'
  | 'ai-vs-human-receptionist-comparison'
  | 'best-ai-receptionist-for-dentists'
  | 'hvac-answering-service-24-7-guide'
  | 'how-ai-phone-agents-increase-appointment-bookings'
  | 'ai-receptionist-for-medical-spa-guide'
  | 'what-to-ask-ai-receptionist-provider-before-buying'
  | 'ai-phone-system-vs-traditional-phone-system'
  | 'plumbing-answering-service-ai-vs-human'
  | 'how-to-reduce-no-shows-with-ai-appointment-reminders';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  slug: ArticleSlug;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export interface FullArticle extends BlogPost {
  content: string[];
  heroImage?: string;
}

export interface ROIFormData {
  name: string;
  email: string;
  phone: string;
  callsPerWeek: string;
  leadValue: string;
}

export interface FreeAgentFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  industry: string;
}

export interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (page: Page) => void;
}

export interface HeroProps {
  onNavigate: (page: Page) => void;
}


