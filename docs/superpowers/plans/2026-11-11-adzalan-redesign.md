# Adzalan.com $10,000 Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild and elevate adzalan.com into a luxury-tier, high-converting $10,000 personal brand and venture hub for solo founder Adzalan Yanggang, featuring Dark Obsidian / Liquid Glass aesthetics, 21st.dev component patterns, Framer Motion choreography, and an interactive project ROI estimator.

**Architecture:** Vite + React 19 + TypeScript + Tailwind CSS v3/v4 + Framer Motion + Lucide Icons + Canvas Confetti. Structured into modular presentation components (`Navbar`, `Hero`, `VenturesBento`, `TechEngine`, `CaseStudies`, `RoiCalculator`, `MilestonesTimeline`, `TestimonialsMarquee`, `AdvisoryModal`, `Footer`) coordinated via responsive layouts and custom interactive hooks.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React, clsx, tailwind-merge.

**Spec:** Redesign specification agreed upon during brainstorming: Dark Obsidian & Liquid Glass luxury aesthetic, high-velocity solo founder positioning, live MRR/growth metrics, interactive scope/ROI calculator, founder tech engine matrix, and consultation booking flow.

## Global Constraints
- Pure client-side reactive build with zero runtime server dependencies for instant deployment on Vercel/Netlify/Cloudflare Pages.
- Strict WCAG 2.1 AA text contrast ratio (minimum 4.5:1 for body copy).
- Respect `prefers-reduced-motion` across all Framer Motion animations.
- Complete responsive fidelity across 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px+ (desktop).
- Touch target minimum 44x44px for all interactive buttons and tap elements.

## Review Focus
1. Performance under heavy blur/mesh gradients: ensure hardware-accelerated transforms and composite-only properties (`transform`, `opacity`).
2. Interactive ROI Calculator edge cases: bounds checking for negative or extreme project scopes and dynamic budget feedback.
3. Mobile view navigation and drawer states: clean lock and backdrop dismissing without layout shifts.
4. Smooth marquee infinite loops without stutter or memory leaks.
5. Form input and copy-to-clipboard feedback: accessible screen-reader labels and clear tactile toast/visual confirmation.

---

### Task 1: Project Scaffolding & Design System Foundations
**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/index.css`
- Create: `src/types/index.ts`
- Create: `src/data/portfolioData.ts`

- [ ] Initialize Vite + React + TypeScript configuration and install dependencies (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `canvas-confetti`).
- [ ] Configure Tailwind theme with Dark Obsidian palette, custom fonts, liquid glass utilities, and ambient glow glow-classes.
- [ ] Setup global CSS with smooth scrolling, custom scrollbars, typography, and glassmorphism tokens.
- [ ] Create comprehensive typed data store for Adzalan Yanggang (ventures, metrics, tech stack, case studies, testimonials, timeline).
- [ ] Verify build with `npm run build`.

### Task 2: Core Layout, Navigation & Ambient Glow System
**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/AmbientBackground.tsx`
- Create: `src/components/ui/LiquidCard.tsx`
- Create: `src/components/ui/StatusPill.tsx`
- Create: `src/components/ui/MagneticButton.tsx`

- [ ] Implement `AmbientBackground` with dynamic radial mesh gradients and mouse spotlight interaction.
- [ ] Implement `Navbar` with frosted glass backdrop, live availability indicator (`🟢 Available for Q1 Ventures`), quick links with active indicator, and "Book Advisory" trigger.
- [ ] Implement reusable `LiquidCard` with border lensing, soft glow hover, and optional 3D tilt effect.
- [ ] Implement `MagneticButton` with spring physics for primary actions.
- [ ] Verify responsive behavior on mobile and desktop breakpoints.

### Task 3: Flagship Hero Section & Live Founder Metrics
**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/ui/MetricCounter.tsx`

- [ ] Build the bold Solo Founder Hero headline: *"Turning bold ideas into profitable, venture-grade products at 10x velocity."*
- [ ] Integrate founder badge with animated glowing ring, micro-copy ("Software Engineer & Growth Hacker"), and Temerloh / GMT+8 live time chip.
- [ ] Implement interactive live counters (`$150k+ Revenue Generated`, `4+ Ventures Shipped`, `100k+ End Users`).
- [ ] Add dual primary CTAs: "Explore Ventures" (smooth scroll) and "Book Strategy Call".
- [ ] Integrate staggered entrance animations using Framer Motion variants.

### Task 4: Flagship Ventures Bento Grid Showcase (21st.dev Pattern)
**Files:**
- Create: `src/components/sections/VenturesBento.tsx`
- Create: `src/components/ui/VenturesModal.tsx`

- [ ] Build Bento Grid layout featuring 4 core ventures / SaaS products:
  1. **AI Social Assistant / Growth Suite** (Flagship micro-SaaS, MRR tracker, live demo link).
  2. **Automated Conversion & Ad Engine** (Marketing tech & funnel automation).
  3. **Venture Portal / Client Onboarding System** (Real estate & tech consulting platform).
  4. **Open-Source Developer Toolkit / Rapid Templates**.
- [ ] Add live metric pills (MRR, Active Users, Tech Tags, Status).
- [ ] Add interactive live preview popover or deep-dive drawer for each venture.

### Task 5: The Founder's Tech & Growth Engine Matrix
**Files:**
- Create: `src/components/sections/TechEngine.tsx`

- [ ] Build interactive dual-engine matrix tab switcher:
  - **Engineering & Architecture**: Next.js 15, React 19, TypeScript, PostgreSQL, Supabase, Tailwind, Framer Motion, Edge Computing.
  - **Growth & Acquisition**: Meta & Google Ads, Conversion Rate Optimization, Viral Funnels, Automation Workflows, Email Marketing.
- [ ] Add proficiency dials, mastery highlights, and interactive hover tooltips explaining the founder leverage of each tool.

### Task 6: Case Studies & High-Impact Client Results
**Files:**
- Create: `src/components/sections/CaseStudies.tsx`
- Create: `src/components/ui/BeforeAfterMetric.tsx`

- [ ] Present deep-dive case studies showcasing technical execution + measurable business outcomes.
- [ ] Include metrics comparison cards (e.g. `+240% Lead Velocity`, `10x Deployment Speed`, `<200ms Global Latency`).
- [ ] Include architecture diagram preview and problem/solution/result breakdowns.

### Task 7: Interactive Project Scope & ROI Estimator
**Files:**
- Create: `src/components/sections/RoiCalculator.tsx`

- [ ] Create interactive pricing/valuation calculator for prospective founders and clients:
  - Deliverable selector: *Full SaaS MVP (0 to 1)*, *AI Automation & Growth Funnel*, *Technical Audit & Performance Overhaul*, *Fractional CTO / Lead*.
  - Timeline slider: *2 Weeks Rapid Sprint* to *8 Weeks Custom Platform*.
  - Dynamic budget calculation with estimated ROI multiple, launch timeline, and deliverable checklist.
  - "Lock in Scope & Reserve Week" CTA that pre-fills the consultation modal.

### Task 8: Milestones Timeline & Infinite Social Proof Marquee
**Files:**
- Create: `src/components/sections/MilestonesTimeline.tsx`
- Create: `src/components/sections/TestimonialsMarquee.tsx`

- [ ] Build scroll-linked milestones timeline from computer programming roots to full-stack founder and marketing strategist.
- [ ] Implement infinite horizontal testimonials marquee (21st.dev inspired) with smooth loop and pause-on-hover.
- [ ] Add verified client & collaborator quotes with role badges and company tags.

### Task 9: Strategic Advisory Modal, Conversion Footer & Polish
**Files:**
- Create: `src/components/modals/AdvisoryModal.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/App.tsx`
- Create: `src/main.tsx`

- [ ] Implement `AdvisoryModal` with interactive step-through inquiry form, project scope pre-fill, and simulated booking confirmation with confetti celebration.
- [ ] Build high-conversion footer with one-click email copy (`adzalan@...`), live GMT+8 local clock, social links, and privacy policy badge.
- [ ] Test all keyboard navigation, ESC key modal dismiss, focus trapping, and screen-reader accessibility.
- [ ] Execute production build and verify bundle size, asset loading, and zero console warnings.
