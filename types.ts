// Shared TypeScript types and interfaces for Autoquill AI

export type Page = 'home' | 'blog' | 'free-agent' | 'article' | 'privacy' | 'terms' | 'industry' | 'thank-you';

export type IndustrySlug = 'dentists' | 'hvac' | 'plumbers' | 'medspa' | 'lawyers';

export type ArticleSlug = 
  | 'voicemail-is-dead'
  | 'hubspot-integration'
  | 'oakwood-dental-case-study'
  | 'ethics-of-ai-voice-agents'
  | 'top-5-voice-agent-features';

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


