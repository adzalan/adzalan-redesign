import { Venture, CaseStudy, SkillCategory, Testimonial, Milestone, ScopeOption } from '../types';

export const FOUNDER_INFO = {
  name: "Adzalan Yanggang",
  role: "Solo Founder, Product Engineer & Growth Strategist",
  tagline: "Building high-yield software, rapid micro-SaaS, and automated growth systems at 10x engineering velocity.",
  location: "Temerloh / Kuala Lumpur, Malaysia",
  timezone: "Asia/Kuala Lumpur (GMT+8)",
  status: "Available for Q1 SaaS Advisory & Select Ventures",
  metrics: [
    { label: "Ventures Built & Scaled", value: "6+", subtext: "From concept to live production" },
    { label: "Total Platform Users", value: "140k+", subtext: "Across SaaS & client engines" },
    { label: "Client Revenue Influenced", value: "$1.8M+", subtext: "Via code, conversion & funnels" },
    { label: "Avg. MVP Launch Velocity", value: "14 Days", subtext: "From wireframe to paying users" },
  ],
  bio: "I operate at the intersection of full-stack engineering and high-velocity digital marketing. Instead of large teams with endless sprint cycles, I engineer automated, lean, and high-performance software systems that solve real market problems and drive measurable bottom-line profit.",
  socials: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "contact@adzalan.com",
  }
};

export const VENTURES: Venture[] = [
  {
    id: "ai-growth-suite",
    title: "OmniReach AI",
    tagline: "Autonomous Social Media & Content Distribution Suite",
    description: "Multi-platform AI copilot that synthesizes long-form engineering essays and product updates into viral multi-channel marketing campaigns, scheduling across X, LinkedIn, and Threads with predictive engagement scoring.",
    category: "AI Product",
    status: "Live & Scaling",
    metrics: [
      { label: "Monthly Active Creators", value: "12,400+" },
      { label: "Content Generated", value: "1.2M+ Posts" },
      { label: "User Retention (30d)", value: "78%" }
    ],
    techStack: ["Next.js 15", "TypeScript", "OpenAI API", "PostgreSQL", "Tailwind CSS", "BullMQ"],
    links: {
      demo: "https://demo.adzalan.com/omnireach",
      github: "https://github.com",
      live: "https://adzalan.com"
    },
    featured: true,
    highlightColor: "#F59E0B"
  },
  {
    id: "conversion-engine",
    title: "VenturePulse Analytics",
    tagline: "Real-Time Micro-SaaS Revenue & Churn Radar",
    description: "Lightweight, zero-cookie telemetry and revenue analytics dashboard built specifically for bootstrapped indie founders. Tracks Stripe webhooks, subscription velocity, and net retention with zero latency overhead.",
    category: "Micro-SaaS",
    status: "Live & Scaling",
    metrics: [
      { label: "MRR Monitored", value: "$420,000+" },
      { label: "Latency", value: "<18ms Edge" },
      { label: "Avg. Founder Time Saved", value: "6 hrs/wk" }
    ],
    techStack: ["React 19", "Vite", "Cloudflare Workers", "D1 SQLite", "Framer Motion", "Tailwind"],
    links: {
      demo: "https://demo.adzalan.com/venturepulse",
      live: "https://adzalan.com"
    },
    featured: true,
    highlightColor: "#38BDF8"
  },
  {
    id: "realestate-portal",
    title: "PropLeads Automated Hub",
    tagline: "High-Ticket Real Estate Lead Qualifying & Advisory Portal",
    description: "Bespoke acquisition funnel and automated CRM integration for premier property agencies in Southeast Asia, turning raw traffic into pre-qualified high-net-worth investor appointments via conversational logic.",
    category: "Growth Tool",
    status: "Beta / Active Users",
    metrics: [
      { label: "Lead Conversion Rate", value: "31.4%" },
      { label: "Gross Property Inquiries", value: "RM 45M+" },
      { label: "Qualification Speed", value: "Instant (<2s)" }
    ],
    techStack: ["Next.js", "Supabase", "Meta Graph API", "WhatsApp Business Cloud", "Tailwind"],
    links: {
      demo: "https://demo.adzalan.com/propleads",
      live: "https://adzalan.com"
    },
    featured: true,
    highlightColor: "#10B981"
  },
  {
    id: "dev-rapid-kit",
    title: "HyperFounder Starter Suite",
    tagline: "Opinionated Production Boilerplate for Solo Builders",
    description: "A battle-tested starter framework integrating authentication, Stripe billing, transactional emails, AI SDKs, and pre-built luxury UI components to let founders ship commercial MVPs in days instead of quarters.",
    category: "Infrastructure",
    status: "Live & Scaling",
    metrics: [
      { label: "GitHub Stars", value: "1,850+" },
      { label: "Production MVPs Built", value: "240+" },
      { label: "Dev Hours Saved", value: "10,000+" }
    ],
    techStack: ["TypeScript", "Next.js 15", "Stripe", "Prisma", "Radix UI", "Tailwind"],
    links: {
      github: "https://github.com",
      live: "https://adzalan.com"
    },
    featured: false,
    highlightColor: "#8B5CF6"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Engineering & Systems Architecture",
    iconName: "Code2",
    description: "Modern, type-safe full-stack engineering prioritizing speed, resilience, and maintainability.",
    items: [
      { name: "TypeScript & Next.js 15", level: "Production Mastery", tag: "Frontend / Full-Stack", highlight: true },
      { name: "React 19 & Framer Motion", level: "Advanced Craft", tag: "UI & Physics", highlight: true },
      { name: "Node.js & Edge Runtime", level: "Senior / Scale", tag: "Serverless APIs" },
      { name: "PostgreSQL & Supabase", level: "High Performance", tag: "Data Architecture" },
      { name: "Cloudflare Workers & Vercel", level: "Global Edge", tag: "DevOps & Deployment" },
      { name: "REST & GraphQL APIs", level: "Integration Expert", tag: "Backend" },
      { name: "Stripe & LemonSqueezy Billing", level: "SaaS Monetization", tag: "Payments Engine", highlight: true },
    ]
  },
  {
    title: "Growth, Marketing & Distribution",
    iconName: "TrendingUp",
    description: "Direct-response acquisition mechanics, automated funnels, and data-backed growth loops.",
    items: [
      { name: "Conversion Rate Optimization (CRO)", level: "High Yield", tag: "Revenue Multiplication", highlight: true },
      { name: "Meta & Google Performance Ads", level: "Profitable ROAS", tag: "Paid Acquisition" },
      { name: "Viral Growth & Organic Loops", level: "Systemic", tag: "Product-Led Growth" },
      { name: "Marketing Automation & Webhooks", level: "Zero-Touch", tag: "Automated Workflows", highlight: true },
      { name: "Technical SEO & Schema Markup", level: "Top Ranking", tag: "Search Dominance" },
      { name: "Email Nurture & Retention Systems", level: "Lifecycle", tag: "LTV Optimization" },
      { name: "High-Ticket Sales Copywriting", level: "Compelling", tag: "Narrative & Persuasion" },
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01",
    client: "FinTech Micro-Platform",
    role: "Fractional Product Engineer & Growth Architect",
    timeframe: "4-Week Rapid Sprint",
    title: "Scaling Bootstrapped B2B App from Zero to $18k MRR",
    summary: "Re-engineered a clunky legacy onboarding flow, migrated to a fluid React/Next.js interface, and engineered an automated viral invite loop that slashed customer acquisition cost by 62%.",
    challenge: "The product had high trial signup volume but catastrophic churn on step 2 of onboarding due to 4-second loading times and confusing permission prompts.",
    solution: "Rebuilt the onboarding state machine with optimistic UI updates and instant OAuth, paired with a custom Framer Motion interactive walkthrough and triggered email hooks.",
    results: [
      { metric: "+310%", label: "Activation Rate" },
      { metric: "-62%", label: "Blended CAC" },
      { metric: "14 Days", label: "To Positive Cashflow" }
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe API", "PostgreSQL"],
    quote: {
      text: "Adzalan delivers the combined firepower of a senior staff engineer and a venture growth lead. He shipped in two weeks what our previous contractors couldn't solve in four months.",
      author: "Marcus Chen",
      title: "Co-Founder, Apex Ledger"
    }
  },
  {
    id: "case-02",
    client: "Regional Real Estate Firm",
    role: "Digital Systems & Funnel Consultant",
    timeframe: "3-Week Implementation",
    title: "RM 12M Property Portfolio Launch Engine",
    summary: "Designed and deployed a luxury property showcase with automated investor qualification and instant WhatsApp CRM routing, replacing paper brochures with an interactive high-conversion portal.",
    challenge: "High-value prospective buyers were dropping off unengaged when visiting standard static PDF listings, leaving sales agents overwhelmed with cold, unqualified inquiries.",
    solution: "Crafted a bespoke Dark Obsidian interactive unit selector with virtual walkthrough triggers, mortgage calculator, and automated lead scoring routing directly to senior brokers.",
    results: [
      { metric: "3.4x", label: "Qualified Investor Calls" },
      { metric: "RM 12M+", label: "Deals Closed in 60 Days" },
      { metric: "<1.2s", label: "Page Load Benchmark" }
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Cloudflare Pages", "Meta Graph API"],
    quote: {
      text: "The website Adzalan engineered immediately shifted our brand prestige. High-net-worth clients took us significantly more seriously, and our sales cycle shrank in half.",
      author: "Haji Ahmad Kamil",
      title: "Managing Director, Prime Assets"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Darius Vance",
    role: "Founder & CEO",
    company: "SaaSForge US",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    content: "Adzalan is the rare breed of builder who understands both how to write pristine, scalable code and how to make people buy. The speed at which he translates vision into production software is mind-blowing.",
    rating: 5,
    highlightTag: "Speed & Execution"
  },
  {
    id: "test-2",
    name: "Dr. Sarah Al-Mansoor",
    role: "Head of Digital Transformation",
    company: "Daar Ulil Albaab Initiatives",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    content: "Working with Adzalan restructured how we approach digital marketing and digital infrastructure. His attention to detail, reliability, and technical intuition set a whole new gold standard.",
    rating: 5,
    highlightTag: "Systems & Trust"
  },
  {
    id: "test-3",
    name: "Kenji Sato",
    role: "Tech Lead & Angel Investor",
    company: "Tokyo Venture Lab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    content: "If you want a $10,000+ level web presence that looks like a high-end luxury tech studio and performs with sub-second snappiness, Adzalan is the person you hire without hesitation.",
    rating: 5,
    highlightTag: "Elite Craftsmanship"
  },
  {
    id: "test-4",
    name: "Zulkhairi Rahman",
    role: "Managing Director",
    company: "Apex Tech Ventures",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    content: "The ROI we received within 30 days of launching the platform Adzalan architected paid for the engagement five times over. A true powerhouse solo founder.",
    rating: 5,
    highlightTag: "5x Return on Investment"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2026",
    title: "The Solo Founder Studio & Multi-SaaS Scale",
    category: "SaaS Launch",
    description: "Expanded portfolio of independent micro-SaaS applications and high-impact advisory for international founders and tech innovators.",
    highlightMetric: "140k+ Global Users"
  },
  {
    year: "2025",
    title: "AI Automation & High-Yield Product Engines",
    category: "Growth Milestone",
    description: "Launched OmniReach AI and VenturePulse, automating marketing workflows and indie analytics with edge-computed architectures.",
    highlightMetric: "1.2M Posts Generated"
  },
  {
    year: "2024",
    title: "Digital Marketing & PropTech Convergence",
    category: "Career",
    description: "Engineered scalable digital marketing funnels and high-conversion portals for real estate and educational organizations.",
    highlightMetric: "RM 45M+ Inquiries"
  },
  {
    year: "2022-2023",
    title: "Deep Computer Programming & Systems Foundation",
    category: "Engineering Craft",
    description: "Full-stack web software, APIs, database architectures, and open-source contributions laying the groundwork for rapid 0-to-1 building.",
    highlightMetric: "10,000+ Code Hours"
  }
];

export const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: "full-saas-mvp",
    name: "Full 0-to-1 SaaS MVP Sprint",
    description: "Complete product engineering from database design, auth, billing, and core features to production deployment ready for paying customers.",
    basePrice: 8500,
    weeks: 3,
    deliverables: [
      "End-to-end full-stack app (Next.js / React)",
      "Stripe / LemonSqueezy subscription billing",
      "Supabase / PostgreSQL data architecture",
      "Authentication, team seats & security",
      "High-conversion landing page included",
      "Automated transactional emails & webhooks",
      "Production deployment with CI/CD"
    ]
  },
  {
    id: "luxury-web-presence",
    name: "$10,000 Flagship Web Rebrand & Experience",
    description: "Apple-grade, luxury Liquid Glass web presence engineered with custom Framer Motion physics, 21st.dev component patterns, and interactive tools.",
    basePrice: 6500,
    weeks: 2,
    deliverables: [
      "Bespoke Dark Obsidian / Liquid Glass UI design",
      "Framer Motion physics & micro-interactions",
      "Interactive scope & ROI calculator widgets",
      "Complete mobile-first responsiveness",
      "100/100 Lighthouse performance optimization",
      "Technical SEO & OpenGraph card generator",
      "CMS / Dynamic content integration"
    ]
  },
  {
    id: "growth-conversion-funnel",
    name: "Automated Growth & Conversion Engine",
    description: "Direct-response marketing funnel, high-converting copy, automated lead qualification, and CRM webhooks designed to multiply customer revenue.",
    basePrice: 4800,
    weeks: 2,
    deliverables: [
      "High-converting landing page & sales letters",
      "Meta & Google Ads tracking / CAPI integration",
      "Automated email nurture sequences",
      "Lead qualification & calendar booking flow",
      "A/B split testing infrastructure",
      "Custom analytics & ROI reporting dashboard"
    ]
  },
  {
    id: "fractional-founder-advisory",
    name: "Fractional CTO & Growth Lead Retainer",
    description: "Dedicated strategic partnership for founders needing hands-on technical architecture guidance, rapid feature delivery, and weekly growth audits.",
    basePrice: 5000,
    weeks: 4,
    deliverables: [
      "Direct weekly roadmap & architecture sprints",
      "Code reviews & high-velocity feature shipping",
      "SaaS pricing & funnel optimization strategy",
      "Priority 24/7 Slack / Telegram channel access",
      "Zero equity requirement"
    ]
  }
];
