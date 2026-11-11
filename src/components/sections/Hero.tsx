import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ExternalLink,
  Laptop,
  Box,
  Layers,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { FOUNDER_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { LiquidCard } from '../ui/LiquidCard';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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
    <section className="relative min-h-[88vh] pt-32 sm:pt-40 pb-16 flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <span>Temerloh, Pahang, MY</span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" />
            <span className="text-amber-700 dark:text-gold-300 font-semibold">{localTime || '12:00:00 PM'} (GMT+8)</span>
          </div>

          {/* Ecosystem Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/30 dark:border-gold-500/20 text-amber-700 dark:text-gold-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Adzalan Ecosystem · Virtual HQ & SaaS Solutions</span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline & Direct Call-to-Action */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-slate-950 dark:text-white"
            >
              Engineering <span className="text-gradient-gold">Digital Foundations</span> for the Modern Enterprise.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              From 3D interactive virtual headquarters and multi-tenant SaaS ecosystems to tailored software development and AI workflows. Built with modern web engineering and craft by <strong className="text-slate-900 dark:text-white font-semibold">Adzalan Yanggang</strong>.
            </motion.p>

            {/* CTAs matching adzalan.com */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://app.adzalan.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/15 dark:shadow-gold-500/15"
                >
                  <Box className="w-4 h-4 text-white dark:text-obsidian-950" />
                  <span>Enter Virtual HQ</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </a>

              <a
                href="#virtual-hq"
                className="w-full sm:w-auto"
              >
                <MagneticButton
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Layers className="w-4 h-4 text-amber-600 dark:text-gold-400" />
                  <span>Explore Platform</span>
                </MagneticButton>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.06] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </button>
            </motion.div>

            {/* Live Trust Metrics matching actual platforms */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display font-bold text-lg text-slate-900 dark:text-white">app.adzalan.com</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Virtual 3D HQ Prototype</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-display font-bold text-lg text-slate-900 dark:text-white">umbikasih.com</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Live Hospitality Platform</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="font-display font-bold text-lg text-slate-900 dark:text-white">Adzalan Core</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Institutional SaaS Suite</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Platform Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <LiquidCard
              glowColor="rgba(245, 158, 11, 0.2)"
              className="p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/30 dark:border-gold-500/30 flex items-center justify-center text-amber-600 dark:text-gold-400">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-950 dark:text-white text-base">Virtual HQ Console</h3>
                    <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live System Ready
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                  WebGL 3D
                </span>
              </div>

              {/* Simulated 3D Environment Preview */}
              <div className="my-6 rounded-2xl bg-gradient-to-b from-slate-950 to-obsidian-900 p-5 border border-white/10 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Procedural Lobby Engine
                  </span>
                  <span className="text-gold-400">60 FPS</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300 font-sans">Navigable 3D Reception Hall</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300 font-sans">AI Receptionist Console</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Scripted Beta</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300 font-sans">Multi-Tenant Workspaces (Clerk)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">RLS Isolated</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Zero Heavy Asset Downloads</span>
                  <span className="text-gold-400 font-mono">app.adzalan.com</span>
                </div>
              </div>

              {/* Card Footer Call to Action */}
              <a
                href="https://app.adzalan.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-obsidian-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
              >
                <span>Launch Virtual Headquarters in Browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </LiquidCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
