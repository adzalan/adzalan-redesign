import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Compass, Trees, Check, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { LiquidCard } from '../ui/LiquidCard';
import { MagneticButton } from '../ui/MagneticButton';

export const ProductionShowcase: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-100/50 dark:bg-obsidian-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 glass-panel border border-emerald-500/30 dark:border-emerald-500/20 bg-gradient-to-br from-white via-emerald-50/20 to-white dark:from-obsidian-900 dark:via-obsidian-850 dark:to-obsidian-900 overflow-hidden shadow-xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-4 w-fit">
                <Trees className="w-3.5 h-3.5" />
                <span>Live Client Production Platform</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight">
                Umbi Kasih Retreat · <span className="text-emerald-600 dark:text-emerald-400">umbikasih.com</span>
              </h2>

              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Official nature sanctuary, wellness retreat, and booking web experience located along the tranquil rivers of Janda Baik, Bentong, Pahang. Engineered for seamless direct guest inquiries, chalet exploration, and mobile performance.
              </p>

              {/* Highlights List */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Janda Baik, Bentong, Pahang</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Direct Guest Booking Flow</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Fast Cloudflare Edge Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% Responsive Mobile UX</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <a
                  href="https://umbikasih.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-all cursor-pointer group"
                >
                  <span>Visit umbikasih.com Live Website</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5">
              <LiquidCard
                glowColor="rgba(16, 185, 129, 0.2)"
                className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-obsidian-950/80 backdrop-blur-xl shadow-lg"
              >
                <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/5 text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">umbikasih.com</span>
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live & Operational
                  </span>
                </div>

                <div className="mt-4 aspect-video rounded-xl bg-gradient-to-br from-emerald-900/30 to-slate-900 p-4 relative overflow-hidden flex flex-col justify-end text-white border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Hospitality & Nature Sanctuary</span>
                    <h3 className="font-display font-bold text-lg text-white">Tranquility in Janda Baik</h3>
                    <p className="text-xs text-slate-300 mt-1">Riverside chalets, retreat packages & corporate wellness escapes.</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>Stack: React + Tailwind + Cloudflare</span>
                  <a
                    href="https://umbikasih.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>umbikasih.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </LiquidCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
