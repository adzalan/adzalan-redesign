import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Layers, 
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { FOUNDER_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { MetricCounter } from '../ui/MetricCounter';
import { LiquidCard } from '../ui/LiquidCard';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kuala_Lumpur
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-40 pb-20 flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          {/* Location & Time Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-gold-400 animate-pulse" />
            <span>Temerloh & KL, MY</span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" />
            <span className="text-amber-700 dark:text-gold-300 font-semibold">{localTime || '12:00:00 PM'} (GMT+8)</span>
          </div>

          {/* Verification Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/30 dark:border-gold-500/20 text-amber-700 dark:text-gold-400 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Solo Founder & Venture Architect</span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Direct Call-to-Action */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-slate-950 dark:text-white"
            >
              Architecting <span className="text-gradient-gold">high-yield</span> digital products & SaaS at 10x velocity.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Hi, I'm <strong className="text-slate-950 dark:text-white font-semibold">{FOUNDER_INFO.name}</strong>. I bridge senior-level full-stack software engineering with aggressive, direct-response digital marketing to ship profitable micro-SaaS and venture infrastructure without corporate bloat.
            </motion.p>

            {/* CTAs Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={onOpenBooking}
                className="w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Strategic Advisory</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <a href="#ventures" className="w-full sm:w-auto">
                <MagneticButton
                  variant="secondary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Rocket className="w-4 h-4 text-gold-400" />
                  <span>Explore 2026 Ventures</span>
                </MagneticButton>
              </a>

              <a href="#calculator" className="w-full sm:w-auto">
                <MagneticButton
                  variant="glass"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-slate-400" />
                  <span>Estimate Project Scope</span>
                </MagneticButton>
              </a>
            </motion.div>

            {/* Micro Trust Bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero Outsourcing / 100% In-House</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Production Launch in 14 Days</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Full Intellectual Property Ownership</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Founder Terminal & Status Deck */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <LiquidCard tilt={true} className="p-6 sm:p-8 border-slate-200 dark:border-gold-500/25 bg-white/90 dark:bg-obsidian-900/90 shadow-2xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    founder_daemon.tsx — Active
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  HEALTH 100%
                </div>
              </div>

              {/* Code / Command Prompt Simulation */}
              <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-3">
                <div className="text-slate-500 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" />
                  <span>whoami --status --focus</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-obsidian-950/80 border border-black/5 dark:border-white/5 space-y-1.5">
                  <p className="text-amber-800 dark:text-gold-300 font-semibold">{FOUNDER_INFO.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">{FOUNDER_INFO.role}</p>
                  <p className="text-emerald-600 dark:text-emerald-400 text-[11px]">⚡ Core Mission: Turning code & marketing into capital</p>
                </div>

                <div className="pt-2 text-slate-500 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                  <span>cat /proc/founder/current_focus</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                    <span className="text-slate-400 dark:text-slate-500 block text-[9px] uppercase">Ventures</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">SaaS & AI Copilots</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                    <span className="text-slate-400 dark:text-slate-500 block text-[9px] uppercase">Growth Engine</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Paid + Viral Acquisition</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 dark:from-gold-500/10 dark:to-amber-600/10 border border-amber-500/30 dark:border-gold-500/20 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-700 dark:text-gold-400 block font-semibold">
                      Direct Advisory Access
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-200 font-sans">
                      1 Exclusive Q1 Founder Slot Open
                    </span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Claim Slot
                  </button>
                </div>
              </div>
            </LiquidCard>
          </motion.div>
        </div>

        {/* Live Metrics Counter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-black/10 dark:border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {FOUNDER_INFO.metrics.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-4 sm:p-6 rounded-2xl glass-panel-interactive border-white/5 hover:border-gold-500/30 transition-all duration-300"
              >
                <MetricCounter
                  value={item.value}
                  label={item.label}
                  subtext={item.subtext}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
