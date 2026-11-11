import { Venture, CaseStudy, SkillCategory, Testimonial, Milestone, ScopeOption } from '../types';

export const FOUNDER_INFO = {
  name: "Adzalan Yanggang",
  role: "Solo SaaS Builder & Software Developer",
  tagline: "Building the Adzalan Virtual HQ, micro-SaaS prototypes, and digital foundations in public.",
  location: "Temerloh & Janda Baik, Pahang, Malaysia",
  timezone: "Asia/Kuala_Lumpur (GMT+8)",
  status: "Building Adzalan Virtual HQ & Open for Collaboration",
  metrics: [
    { label: "Live Client Platform", value: "umbikasih.com", subtext: "Nature retreat & hospitality web platform" },
    { label: "Flagship SaaS Prototype", value: "app.adzalan.com", subtext: "Virtual 3D HQ & AI receptionist environment" },
    { label: "Core Ecosystem Roadmap", value: "6 Modules", subtext: "MosqueCore, TahfizCore, EduCore & more" },
    { label: "Development Stage", value: "Stages 1–5", subtext: "3D lobby, auth, workspaces & booking active" },
  ],
  bio: "I am a solo software builder based in Pahang, Malaysia. I build practical web platforms and explore new frontiers in browser-based software—from hospitality websites like umbikasih.com to my experimental AI-powered Virtual Headquarters (app.adzalan.com) and the upcoming Adzalan Core management suite.",
  socials: {
    github: "https://github.com/adzalan",
    twitter: "https://twitter.com/adzalan",
    linkedin: "https://linkedin.com/in/adzalan",
    email: "contact@adzalan.com",
    appUrl: "https://app.adzalan.com",
    retreatUrl: "https://umbikasih.com"
  }
};

export const VENTURES: Venture[] = [
  {
    id: "virtual-hq",
    title: "Adzalan Virtual Headquarters",
    tagline: "3D Interactive Browser Workplace & Future AI Receptionist",
    description: "An experimental, AI-powered virtual business environment combining a web platform, an interactive 3D procedural headquarters lobby, private appointments, and multi-tenant workspaces with row-level security.",
    category: "AI Product",
    status: "Beta / Active Users",
    metrics: [
      { label: "Milestone", value: "Stages 1–5" },
      { label: "Render Engine", value: "Procedural WebGL" },
      { label: "Access Architecture", value: "Multi-Tenant RLS" }
    ],
    techStack: ["Next.js 15", "React 19", "Clerk Auth", "Three.js / WebGL", "Tailwind CSS", "TypeScript"],
    links: {
      demo: "https://app.adzalan.com",
      live: "https://app.adzalan.com"
    },
    featured: true,
    highlightColor: "#F59E0B"
  },
  {
    id: "umbikasih",
    title: "Umbi Kasih Retreat Platform",
    tagline: "Nature Sanctuary & Wellness Hospitality Web Experience",
    description: "The official web presence and booking foundation for Umbi Kasih Retreat in Janda Baik, Bentong, Pahang. Designed to showcase nature immersion, stress relief programs, chalets, and stream-side retreats.",
    category: "Micro-SaaS",
    status: "Live & Scaling",
    metrics: [
      { label: "Location", value: "Janda Baik, MY" },
      { label: "Concept", value: "Nature & Wellness" },
      { label: "Platform", value: "Direct Booking" }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "Form Integration"],
    links: {
      demo: "https://umbikasih.com",
      live: "https://umbikasih.com"
    },
    featured: true,
    highlightColor: "#10B981"
  },
  {
    id: "adzalan-core",
    title: "The Adzalan Core Ecosystem",
    tagline: "Planned Modular SaaS Suite for Communities & Education",
    description: "A planned family of purpose-built management software designed for institutions across Southeast Asia: MosqueCore (surau & mosque administration), TahfizCore (student records & Quran memorization), and EduCore.",
    category: "Infrastructure",
    status: "Internal Alpha",
    metrics: [
      { label: "Modules Planned", value: "6 Core Apps" },
      { label: "Target Sectors", value: "Mosques & Tahfiz" },
      { label: "Integration", value: "Adzalan HQ" }
    ],
    techStack: ["Next.js", "PostgreSQL", "Supabase", "Row-Level Security", "Tailwind"],
    links: {
      demo: "https://app.adzalan.com/services"
    },
    featured: true,
    highlightColor: "#38BDF8"
  },
  {
    id: "ai-receptionist-module",
    title: "Autonomous Virtual Receptionist",
    tagline: "Context-Aware Agent for Inbound Visitor Routing",
    description: "The conversational intelligence layer powering the Virtual HQ. Currently serving scripted greeting responses while transitioning to strict system-prompted LLM routing for appointments and visitor inquiries.",
    category: "Growth Tool",
    status: "Internal Alpha",
    metrics: [
      { label: "Current Mode", value: "Scripted Console" },
      { label: "Target Mode", value: "LLM Agent" },
      { label: "Safety", value: "Strict System Prompt" }
    ],
    techStack: ["TypeScript", "Next.js API Routes", "AI Prompt Pipeline", "Clerk User Context"],
    links: {
      demo: "https://app.adzalan.com/reception"
    },
    featured: false,
    highlightColor: "#8B5CF6"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-Stack & 3D Web Development",
    iconName: "Code2",
    description: "The technologies I use to build responsive web apps, procedural 3D environments, and authentication workflows.",
    items: [
      { name: "React 19 & Next.js App Router", level: "Active Daily", tag: "Frontend Framework", highlight: true },
      { name: "TypeScript & Strict Type Schemas", level: "Standard Practice", tag: "Language", highlight: true },
      { name: "Tailwind CSS & Liquid Glass Design", level: "UI Craft", tag: "Design Systems", highlight: true },
      { name: "Procedural 3D & WebGL (Three.js)", level: "Active Exploration", tag: "3D Virtual HQ", highlight: true },
      { name: "Clerk Authentication & Session Management", level: "Integrated in app.adzalan.com", tag: "Identity & Auth" },
      { name: "Supabase & Multi-Tenant RLS", level: "Data Architecture", tag: "Database" },
      { name: "Cloudflare Pages & Edge Hosting", level: "Production Deployment", tag: "DevOps & DNS", highlight: true },
    ]
  },
  {
    title: "Product Strategy & Real-World Implementation",
    iconName: "TrendingUp",
    description: "Practical methodologies for taking ideas from early code prototypes into real, functional platforms.",
    items: [
      { name: "Hospitality & Retreat Web Platforms", level: "Proven (umbikasih.com)", tag: "Real-World Delivery", highlight: true },
      { name: "Building in Public & Prototype Iteration", level: "Continuous", tag: "SaaS Journey", highlight: true },
      { name: "Multi-Tenant Workspace Architecture", level: "Live Foundation", tag: "Virtual Office Isolation" },
      { name: "Appointment Booking & Magic Link Flows", level: "Implemented in app.adzalan.com", tag: "User Workflow" },
      { name: "Institutional Management Research", level: "Mosque & Tahfiz Domain", tag: "SaaS Problem Discovery" },
      { name: "Clean UI/UX & Responsive Fallbacks", level: "High Standard", tag: "Design & Accessibility", highlight: true },
      { name: "Zero-Fat, Fast Edge Deployments", level: "Cloudflare & Vite", tag: "Performance" },
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01",
    client: "Umbi Kasih Retreat",
    role: "Full-Stack Developer & Digital Architect",
    timeframe: "Live Production Platform",
    title: "Engineering the Digital Sanctuary for Umbi Kasih Retreat",
    summary: "Built the official web presence for Umbi Kasih Retreat in Janda Baik, Pahang. Focused on highlighting natural riverfront environments, family stays, corporate retreats, and intuitive visitor reservations.",
    challenge: "The retreat needed a clean, elegant web presence that captured the tranquility of the rainforest in Janda Baik while making chalet details, activities, and direct inquiry booking friction-free for travelers.",
    solution: "Designed a clean, responsive web application with serene imagery, clear room details, location maps, and direct contact booking integration hosted on fast global edge infrastructure.",
    results: [
      { metric: "100%", label: "Live at umbikasih.com" },
      { metric: "<1.2s", label: "Fast Edge Response" },
      { metric: "100%", label: "Mobile Responsive" }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "DNS Routing"],
    quote: {
      text: "Umbi Kasih is a place for genuine rest and renewal. Having a dedicated website allows guests to discover the beauty of Janda Baik before stepping onto the grounds.",
      author: "Adzalan Yanggang",
      title: "Creator & Web Developer"
    }
  },
  {
    id: "case-02",
    client: "Adzalan Virtual HQ (app.adzalan.com)",
    role: "Solo SaaS Founder & Engineer",
    timeframe: "Stages 1–5 Milestone Release",
    title: "Prototyping an Interactive 3D Headquarters in the Browser",
    summary: "Conceived and engineered an experimental business environment where visitors can enter a 3D procedural reception hall, talk to a simulated receptionist, sign in with Clerk, and manage multi-tenant workspaces.",
    challenge: "Traditional SaaS dashboards feel sterile and disconnected. The goal was to experiment with whether a navigable 3D space could make remote corporate presence feel physical and memorable.",
    solution: "Implemented procedural WebGL geometry with real-time lighting that requires zero asset downloads, backed by fallback-first accessible 2D pages and row-level security for tenant workspaces.",
    results: [
      { metric: "Live", label: "at app.adzalan.com" },
      { metric: "5 Stages", label: "Shipped on Roadmap" },
      { metric: "0 MB", label: "External 3D Asset Bloat" }
    ],
    technologies: ["Next.js 15", "Clerk Auth", "Three.js", "WebGL", "Tailwind CSS"],
    quote: {
      text: "The first slice is intentionally small and polished: a glass-and-stone reception hall, a brass reception desk, and a working workspace foundation.",
      author: "Adzalan Virtual HQ",
      title: "Architecture Specification"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Umbi Kasih Retreat",
    role: "Nature & Wellness Sanctuary",
    company: "Janda Baik, Pahang",
    avatar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=120&q=80",
    content: "The web foundation at umbikasih.com accurately conveys the peaceful atmosphere of our rainforest haven, allowing travelers from across Malaysia to book their retreat effortlessly.",
    rating: 5,
    highlightTag: "Live Platform: umbikasih.com"
  },
  {
    id: "test-2",
    name: "Adzalan Virtual HQ",
    role: "SaaS Prototype",
    company: "app.adzalan.com",
    avatar: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=120&q=80",
    content: "Stages 1 through 5 demonstrate the foundation of browser-based virtual headquarters: procedural 3D lobby, Clerk authentication, appointment booking, and multi-tenant workspaces.",
    rating: 5,
    highlightTag: "Live Prototype: app.adzalan.com"
  },
  {
    id: "test-3",
    name: "Independent SaaS Explorer",
    role: "Solo Builder Mindset",
    company: "Malaysia Tech Community",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    content: "Building SaaS from zero requires honesty, continuous shipping, and genuine customer problem-solving. Adzalan's public journey and prototype velocity embody that builder ethos.",
    rating: 5,
    highlightTag: "Building In Public"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2026",
    title: "Adzalan Virtual HQ & SaaS Prototypes Launch",
    category: "SaaS Launch",
    description: "Shipped Stages 1–5 on app.adzalan.com (3D reception, Clerk auth, appointment booking, and multi-tenant workspaces). Beginning discovery on the Adzalan Core institutional suite.",
    highlightMetric: "Active at app.adzalan.com"
  },
  {
    year: "2025-2026",
    title: "Umbi Kasih Retreat Web Platform",
    category: "Career",
    description: "Designed, engineered, and deployed the official web portal for Umbi Kasih Retreat in Janda Baik, Pahang.",
    highlightMetric: "Live at umbikasih.com"
  },
  {
    year: "2024-2025",
    title: "Full-Stack Web Foundations & Modern Tooling",
    category: "Engineering Craft",
    description: "Mastered React, Next.js App Router, Tailwind CSS, TypeScript, and edge deployments on Cloudflare and Vercel.",
    highlightMetric: "Full-Stack Competency"
  },
  {
    year: "Earlier",
    title: "Computer Programming Roots & Digital Marketing",
    category: "Career",
    description: "Explored programming fundamentals and online digital marketing, laying the groundwork for building independent SaaS products.",
    highlightMetric: "Builder Mindset"
  }
];

export const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: "custom-web-platform",
    name: "Custom Web App / Platform Build",
    description: "Clean, responsive, and modern web application built with React/Next.js, Tailwind CSS, and edge deployment—similar to umbikasih.com.",
    basePrice: 2500,
    weeks: 2,
    deliverables: [
      "Modern React / Next.js architecture",
      "Tailwind CSS custom responsive design",
      "Light, Dark & System theme support",
      "Direct inquiry / booking form integration",
      "Fast edge deployment on Cloudflare Pages",
      "Domain and DNS setup (e.g. yourname.com)"
    ]
  },
  {
    id: "saas-mvp-prototype",
    name: "0-to-1 SaaS MVP / Prototype Sprint",
    description: "Turn your product idea into a working clickable prototype with authentication, database models, and dashboard workspace.",
    basePrice: 3800,
    weeks: 3,
    deliverables: [
      "User authentication with Clerk or Supabase Auth",
      "Multi-tenant database schema & Row-Level Security",
      "Interactive dashboard workspace & navigation",
      "API endpoints & state management",
      "High-conversion product landing page",
      "Cloudflare / Vercel production hosting"
    ]
  },
  {
    id: "3d-interactive-experience",
    name: "Experimental 3D / WebGL Landing Experience",
    description: "Interactive procedural 3D browser elements and Framer Motion micro-interactions inspired by app.adzalan.com.",
    basePrice: 3200,
    weeks: 2,
    deliverables: [
      "Procedural 3D WebGL scenes (Three.js)",
      "Smooth Framer Motion physics & hover states",
      "Fallback-first 2D accessible layout",
      "Liquid Glass / Dark Obsidian visual identity",
      "Mobile touch and performance optimization"
    ]
  },
  {
    id: "collaborative-partnership",
    name: "SaaS Co-Building & Technical Exploration",
    description: "Collaborate directly with Adzalan on building early-stage SaaS modules, local institutional tools, or hospitality software.",
    basePrice: 1500,
    weeks: 2,
    deliverables: [
      "Weekly architecture and prototyping sprints",
      "Shared GitHub repository & code collaboration",
      "Feature roadmap definition and feasibility testing",
      "Direct WhatsApp / Telegram communication"
    ]
  }
];
