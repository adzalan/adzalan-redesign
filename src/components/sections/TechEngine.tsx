import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  TrendingUp, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Flame,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { LiquidCard } from '../ui/LiquidCard';

export const TechEngine: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeCategory = SKILL_CATEGORIES[activeTab];

  return (
    <section id="tech-engine" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-600/5 blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-amber-700 dark:text-gold-400 mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>The Solo Founder Engine</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-950 dark:text-white">
          Code + Distribution = <span className="text-gradient-gold">Unstoppable Leverage</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Most software engineers don't know how to sell; most marketers can't write a single line of production code. I master both disciplines so your project never gets lost in translation.
        </p>

        {/* Tab Switcher */}
        <div className="mt-10 inline-flex p-1.5 rounded-2xl glass-panel border-black/10 dark:border-white/10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.05]'
              }`}
            >
              {idx === 0 ? <Code2 className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Engine Grid Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Stack Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.items.map((item, i) => (
              <LiquidCard
                key={i}
                tilt={false}
                className={`p-5 rounded-2xl border-black/10 dark:border-white/10 hover:border-amber-500/50 dark:hover:border-gold-500/40 ${
                  item.highlight ? 'bg-amber-500/5 dark:bg-obsidian-850/90 border-amber-500/30 dark:border-gold-500/20' : 'bg-white/80 dark:bg-obsidian-900/60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-gold-400" />
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                      {item.tag}
                    </span>
                  </div>
                  {item.highlight && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-amber-700 dark:text-gold-400 bg-amber-500/10 dark:bg-gold-500/10 px-2 py-0.5 rounded-full border border-amber-500/30 dark:border-gold-500/20">
                      <Flame className="w-3 h-3" />
                      <span>CORE</span>
                    </span>
                  )}
                </div>

                <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-3">
                  {item.name}
                </h4>

                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Proficiency:</span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                    {item.level}
                  </span>
                </div>
              </LiquidCard>
            ))}
          </div>

          {/* Right Column: Deep-Dive Principles & Terminal */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <LiquidCard className="p-6 sm:p-8 border-slate-200 dark:border-gold-500/20 bg-white/90 dark:bg-obsidian-900 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-black/10 dark:border-white/10 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-gold-500/10 text-amber-700 dark:text-gold-400 border border-amber-500/20 dark:border-gold-500/20">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {activeTab === 0 ? "Engineering Philosophy" : "Distribution Principles"}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Zero-debt, maximum ROI execution
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {activeTab === 0 ? (
                  <>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-sm text-slate-900 dark:text-white block">Speed without Tech Debt</strong>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Strict TypeScript schemas, unified data models, and component isolation ensure the system scales smoothly from 10 users to 100,000.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-sm text-slate-900 dark:text-white block">Edge-First Performance</strong>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Every millisecond of latency is lost revenue. Architected on Cloudflare and Vercel edge networks for sub-100ms global response.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-sm text-slate-900 dark:text-white block">Framer Motion Physical Realism</strong>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          UI that responds to tactile inputs with realistic spring physics, micro-interactions, and visual feedback that elevate customer perceived value.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-sm text-slate-900 dark:text-white block">Direct-Response Funnel Architecture</strong>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Websites aren't digital brochures—they are conversion machines engineered to eliminate cognitive friction and prompt immediate buyer action.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-sm text-slate-900 dark:text-white block">Algorithmic Organic Flywheels</strong>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          Systematic content distribution, automated social syndication, and programmatic SEO assets driving continuous compounding organic reach.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-sm text-slate-900 dark:text-white block">Full Lifecycle Automation</strong>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          From first visitor click to webhook, Stripe charge, and automated onboarding, the entire revenue cycle runs 24/7 on autopilot.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Terminal Code Preview */}
              <div className="mt-6 p-4 rounded-xl bg-obsidian-950 border border-white/5 font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2 mb-2 text-gold-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>architectural_rule.sh</span>
                </div>
                <code className="text-slate-300 block">
                  {activeTab === 0
                    ? "$ pnpm build --benchmark -> 0 errors, 100/100 Lighthouse"
                    : "$ adzalan-funnel --simulate -> CAC: -$42, LTV: +320%"}
                </code>
              </div>
            </LiquidCard>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
