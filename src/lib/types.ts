export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  icon: "sparkles" | "heart" | "shield" | "leaf" | "feather" | "orbit";
  suitableFor: string[];
  process: { step: number; title: string; desc: string }[];
  priceRange: { min: number; max: number; unit: string };
  successRate: number;
  duration: string;
  faqs: { q: string; a: string }[];
  highlights: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string[];
  years: number;
  avatar: string;
  bio: string;
  achievements: string[];
  schedule: string;
  languages: string[];
  quote?: string;
}

export interface Story {
  id: string;
  title: string;
  couple: string;
  city: string;
  service: string;
  duration: string;
  summary: string;
  content: string;
  cover: string;
  year: number;
  babyName?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  cover: string;
  author: string;
  date: string;
  readTime: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "服务" | "流程" | "费用" | "隐私";
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  avatar: string;
  service: string;
  year: number;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
}
