# adzalan.com — Flagship $10,000 Solo Founder Redesign

An executive, high-converting digital presence and venture showcase engineered for solo founder & product architect **Adzalan Yanggang**.

Built with:
- **Design Intelligence**: UI UX Pro Max (Dark Obsidian & Liquid Glass luxury aesthetic, subtle mesh gradients, precision borders, strict WCAG 2.1 AA text contrast)
- **Component Patterns**: 21st.dev inspired Bento Grid showcase, infinite testimonials marquee, and interactive scope calculators
- **Motion & Physics**: Framer Motion spring physics, dynamic mouse spotlight, tilt lensing, and magnetic buttons
- **Stack**: Vite, React 19, TypeScript, Tailwind CSS, Lucide Icons, Canvas Confetti

## 🌐 Live Production URL

- **Production URL**: [https://adzalan.pages.dev](https://adzalan.pages.dev)
- **Deployment Preview**: [https://1160cf2d.adzalan.pages.dev](https://1160cf2d.adzalan.pages.dev)

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Architectural Highlights

1. **Ambient Spotlight & Liquid Glass UI**:
   - Dynamic cursor-following radial spotlight on desktop with graceful degradation under `prefers-reduced-motion`.
   - Multi-layer glassmorphism (`backdrop-blur-xl`, `border-white/10`, subtle gold accent glows).

2. **Hero & Live Availability Radar**:
   - Bold headline positioning Adzalan as a 10x solo founder and product engineer.
   - Real-time Asia/Kuala_Lumpur (GMT+8) clock and live availability status pill.
   - Animated numerical counters for key founder milestones.

3. **Ventures Bento Grid**:
   - Interactive cards showcasing flagship SaaS products (OmniReach AI, VenturePulse Analytics, PropLeads Hub, HyperFounder Starter Suite).
   - Live metrics (MRR, active users, retention, edge latency) and deep-dive technical modals.

4. **The Founder's Dual Engine**:
   - Interactive tabbed matrix showcasing the convergence of **Engineering & Systems Architecture** with **Growth & Distribution**.

5. **Client Case Studies & Verified ROI**:
   - Quantitative before/after metrics (+310% Activation Rate, -62% CAC, 3.4x Investor Inquiries).
   - Problem, architectural solution, and verified client endorsements.

6. **Interactive Project Scope & ROI Estimator**:
   - Dynamic budget, delivery timeline, and deliverable checklist calculator with instant booking modal pre-fill.

7. **Infinite Social Proof Marquee & Advisory Booking**:
   - Edge-faded infinite marquee with pause-on-hover.
   - Step-through consultation booking modal with celebration fireworks and one-click contact copying.

---

## 🌐 1-Click Deployment

This project builds to standard static files in `dist/` ready to deploy to:
- **Vercel**: `vercel deploy --prod`
- **Cloudflare Pages**: Connect repo or run `npx wrangler pages deploy dist`
- **Netlify**: `netlify deploy --prod --dir=dist`
