export interface Venture {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Micro-SaaS' | 'AI Product' | 'Growth Tool' | 'Infrastructure';
  status: 'Live & Scaling' | 'Beta / Active Users' | 'Acquired' | 'Internal Alpha';
  metrics: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  techStack: string[];
  links?: {
    demo?: string;
    github?: string;
    live?: string;
  };
  featured: boolean;
  highlightColor?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  role: string;
  timeframe: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  technologies: string[];
  quote?: {
    text: string;
    author: string;
    title: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  items: {
    name: string;
    level: string;
    tag: string;
    highlight?: boolean;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlightTag: string;
}

export interface Milestone {
  year: string;
  title: string;
  category: 'SaaS Launch' | 'Growth Milestone' | 'Engineering Craft' | 'Career';
  description: string;
  highlightMetric?: string;
}

export interface ScopeOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  weeks: number;
  deliverables: string[];
}
