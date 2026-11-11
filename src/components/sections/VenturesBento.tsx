import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  Zap, 
  TrendingUp, 
  Cpu
} from 'lucide-react';
import { VENTURES } from '../../data/portfolioData';
import { Venture } from '../../types';
import { LiquidCard } from '../ui/LiquidCard';
import { VenturesModal } from '../ui/VenturesModal';

export const VenturesBento: React.FC = () => {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Micro-SaaS' | 'AI Product' | 'Growth Tool'>('All');

  const filteredVentures = activeFilter === 'All' 
    ? VENTURES 
    : VENTURES.filter(v => v.category === activeFilter);

  return (
    <section id="ventures" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-amber-700 dark:text-gold-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Founder Ventures & Micro-SaaS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-950 dark:text-white">
            High-leverage products <br className="hidden sm:inline" />
            built with <span className="text-gradient-gold">zero compromise</span>.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            Every product below was conceived, architected, coded, and marketed solo. No inflated headcount—just lean software engineering paired with direct revenue loops.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 glass-panel p-1.5 rounded-2xl self-start md:self-end">
          {(['All', 'AI Product', 'Micro-SaaS', 'Growth Tool'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {filteredVentures.map((venture, idx) => {
          // Bento layout: First card is large span 7, second card is span 5, third is span 5, fourth is span 7
          const isSpan7 = idx % 3 === 0;
          const colSpan = isSpan7 ? "md:col-span-7" : "md:col-span-5";

          return (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${colSpan} flex flex-col`}
            >
              <LiquidCard
                tilt={false}
                glowColor={venture.highlightColor ? `${venture.highlightColor}20` : undefined}
                className="h-full flex flex-col justify-between group cursor-pointer border-white/10 hover:border-gold-500/40 p-6 sm:p-8"
                onClick={() => setSelectedVenture(venture)}
              >
                <div>
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/[0.06] text-slate-200 border border-white/10">
                        {venture.category}
                      </span>
                      {venture.featured && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-gold-500/15 text-gold-400 border border-gold-500/30">
                          ★ FLAGSHIP
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {venture.status}
                      </span>
                      <div className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-400 group-hover:text-gold-400 group-hover:border-gold-400/40 transition-colors">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-gold-300 transition-colors">
                    {venture.title}
                  </h3>
                  <p className="text-sm font-semibold text-amber-700 dark:text-gold-400/90 mt-1">
                    {venture.tagline}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed line-clamp-3">
                    {venture.description}
                  </p>
                </div>

                {/* Bottom Section: Metrics & Tech Chips */}
                <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
                    {venture.metrics.map((m, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-950/70 border border-black/5 dark:border-white/5">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block truncate">
                          {m.label}
                        </span>
                        <span className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white mt-0.5 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills & Action Trigger */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                      {venture.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-black/[0.04] dark:bg-white/[0.03] border border-black/5 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {venture.techStack.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-400 dark:text-slate-500">
                          +{venture.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-mono text-amber-700 dark:text-gold-400 group-hover:underline flex items-center gap-1 font-semibold">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </LiquidCard>
            </motion.div>
          );
        })}
      </div>

      {/* Deep-Dive Modal */}
      <VenturesModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
      />
    </section>
  );
};
