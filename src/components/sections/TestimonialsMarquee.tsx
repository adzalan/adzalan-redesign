import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolioData';

export const TestimonialsMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold-600/5 blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-amber-700 dark:text-gold-400 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Social Proof & Endorsements</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 dark:text-white">
          Trusted by founders & leaders
        </h2>
      </div>

      {/* Edge Fade Mask Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[400px] flex-shrink-0 p-6 sm:p-7 rounded-2xl glass-panel-interactive border-black/10 dark:border-white/10 hover:border-amber-500/40 dark:hover:border-gold-500/30 bg-white/95 dark:bg-obsidian-900/90 shadow-sm dark:shadow-glass-sm flex flex-col justify-between"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-gold-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 dark:fill-gold-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    {item.highlightTag}
                  </span>
                </div>

                {/* Content */}
                <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30 dark:border-gold-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-950 dark:text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" />
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">
                    {item.role}, {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
