import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Quote, 
  Clock, 
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { CASE_STUDIES } from '../../data/portfolioData';
import { LiquidCard } from '../ui/LiquidCard';
import { BeforeAfterMetric } from '../ui/BeforeAfterMetric';

export const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const activeCase = CASE_STUDIES[selectedCase];

  return (
    <section id="case-studies" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-amber-700 dark:text-gold-400 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Real-World Delivery & SaaS Architecture</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-950 dark:text-white">
            Genuine work, <span className="text-gradient-gold">proven in production</span>.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            A breakdown of my real-world client delivery for umbikasih.com and the engineering architecture behind the 3D Virtual Headquarters at app.adzalan.com.
          </p>
        </div>

        {/* Case Study Selector Pills */}
        <div className="flex gap-2 glass-panel p-1.5 rounded-2xl">
          {CASE_STUDIES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCase === idx
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {idx === 0 ? "umbikasih.com" : "app.adzalan.com"}
            </button>
          ))}
        </div>
      </div>

      {/* Main Case Study Display */}
      <motion.div
        key={activeCase.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        {/* Left Side: Summary, Challenge, Solution */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <LiquidCard className="p-6 sm:p-10 border-black/10 dark:border-white/10 bg-white/90 dark:bg-obsidian-900/90 shadow-2xl">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/10 dark:bg-gold-500/10 text-amber-700 dark:text-gold-400 border border-amber-500/20 dark:border-gold-500/20">
                {activeCase.client}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>{activeCase.timeframe}</span>
              </div>
              <span className="text-xs text-slate-300 dark:text-slate-500">|</span>
              <span className="text-xs text-slate-600 dark:text-slate-300 font-mono">{activeCase.role}</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 dark:text-white tracking-tight leading-tight">
              {activeCase.title}
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {activeCase.summary}
            </p>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>The Challenge & Friction</span>
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-4 border-l border-rose-500/30">
                  {activeCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>The Architectural Solution</span>
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-4 border-l border-emerald-500/30">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-2">
                Infrastructure & Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCase.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-black/[0.04] dark:bg-white/[0.04] border border-black/5 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </LiquidCard>
        </div>

        {/* Right Side: Key Metrics & Testimonial Quote */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Results Bento */}
          <LiquidCard className="p-6 sm:p-8 border-slate-200 dark:border-gold-500/25 bg-white/95 dark:bg-obsidian-900 shadow-xl">
            <div className="flex items-center gap-2 pb-4 border-b border-black/10 dark:border-white/10 mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Production Metrics & Status
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {activeCase.results.map((res, i) => (
                <BeforeAfterMetric
                  key={i}
                  metric={res.metric}
                  label={res.label}
                  className="bg-slate-50 dark:bg-obsidian-850/80 p-5"
                />
              ))}
            </div>
          </LiquidCard>

          {/* Client Endorsement Quote */}
          {activeCase.quote && (
            <LiquidCard className="p-6 sm:p-8 border-black/10 dark:border-white/10 bg-slate-50 dark:bg-gradient-to-br dark:from-obsidian-900 dark:to-obsidian-850 flex-1 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-amber-500/40 dark:text-gold-400/40 mb-3" />
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  "{activeCase.quote.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div>
                  <strong className="text-sm text-slate-950 dark:text-white block">
                    {activeCase.quote.author}
                  </strong>
                  <span className="text-xs text-amber-700 dark:text-gold-400 font-mono">
                    {activeCase.quote.title}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>
            </LiquidCard>
          )}
        </div>
      </motion.div>
    </section>
  );
};
