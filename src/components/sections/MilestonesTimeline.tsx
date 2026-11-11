import React from 'react';
import { motion } from 'framer-motion';
import { Milestone as MilestoneIcon, Calendar, Sparkles, Award } from 'lucide-react';
import { MILESTONES } from '../../data/portfolioData';
import { LiquidCard } from '../ui/LiquidCard';

export const MilestonesTimeline: React.FC = () => {
  return (
    <section id="track-record" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-gold-400 mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Proven Trajectory</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
          A track record of <span className="text-gradient-gold">continuous execution</span>.
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          From deep programmatic systems to venture launches and digital marketing breakthroughs, every year compounds into unmatched velocity.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Glowing Line */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold-500/80 via-amber-600/30 to-transparent" />

        <div className="space-y-12">
          {MILESTONES.map((m, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-col sm:gap-12 pl-10 sm:pl-0`}
              >
                {/* Center Node Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-obsidian-950 border-2 border-gold-400 flex items-center justify-center z-10 shadow-gold-glow">
                  <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                  <LiquidCard className="p-6 rounded-2xl border-white/10 hover:border-gold-500/30 bg-obsidian-900/80">
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-gold-500/15 text-gold-400 border border-gold-500/30">
                        {m.year}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {m.category}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl text-white">
                      {m.title}
                    </h4>

                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {m.description}
                    </p>

                    {m.highlightMetric && (
                      <div className={`mt-4 pt-3 border-t border-white/5 flex items-center gap-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                        <span className="font-mono text-xs font-semibold text-emerald-400">
                          {m.highlightMetric}
                        </span>
                      </div>
                    )}
                  </LiquidCard>
                </div>

                {/* Empty side for layout balance on desktop */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
