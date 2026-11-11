import React from 'react';
import { motion } from 'framer-motion';
import { Box, Bot, Building2, ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { LiquidCard } from '../ui/LiquidCard';
import { MagneticButton } from '../ui/MagneticButton';

export const VirtualHQSection: React.FC = () => {
  const features = [
    {
      badge: "Live 3D",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-gold-400 border-amber-500/20",
      icon: Box,
      title: "Navigable 3D Lobby",
      description: "A stylized reception hall built with procedural geometry and real-time lighting—zero heavy asset downloads, privacy-first by default.",
      actionText: "Walk the Lobby",
      link: "https://app.adzalan.com",
      accentGlow: "rgba(245, 158, 11, 0.25)",
      features: ["Procedural WebGL / Three.js", "Instant 0MB Model Download", "60 FPS Fluid Rendering"]
    },
    {
      badge: "Active",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      icon: Bot,
      title: "AI Receptionist Console",
      description: "Intelligent visitor intake and consultation interface that handles inquiries and smoothly books real appointment slots.",
      actionText: "Talk to Reception",
      link: "https://app.adzalan.com",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      features: ["Visitor Inquiry Handling", "Real Calendar Slot Booking", "Scripted Console to LLM Pipeline"]
    },
    {
      badge: "Multi-Tenant",
      badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      icon: Building2,
      title: "Enterprise Workspaces",
      description: "Create a tenant, brand your space, manage team members, and claim private virtual offices with row-level security isolation.",
      actionText: "Open Workspace",
      link: "https://app.adzalan.com",
      accentGlow: "rgba(56, 189, 248, 0.25)",
      features: ["Clerk Authentication", "Row-Level Security (RLS)", "Branded Tenant Isolation"]
    }
  ];

  return (
    <section id="virtual-hq" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 dark:bg-gold-500/10 text-amber-700 dark:text-gold-400 border border-amber-500/20 dark:border-gold-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Platform Preview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight"
          >
            The Virtual Headquarters <span className="text-gradient-gold">(app.adzalan.com)</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            An interactive, AI-powered corporate environment engineered in real-time WebGL with enterprise workspace isolation.
          </motion.p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex"
              >
                <LiquidCard
                  glowColor={feature.accentGlow}
                  className="w-full p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl flex flex-col justify-between group hover:border-amber-500/30 dark:hover:border-gold-500/30 transition-all shadow-lg"
                >
                  <div>
                    {/* Top row with icon & badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/20 dark:border-gold-500/20 flex items-center justify-center text-amber-600 dark:text-gold-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-semibold ${feature.badgeColor}`}>
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white group-hover:text-amber-600 dark:group-hover:text-gold-400 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Feature bullet list */}
                    <ul className="mt-6 space-y-2 border-t border-black/5 dark:border-white/5 pt-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Link Button */}
                  <div className="mt-8 pt-4">
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-gold-400 group-hover:text-amber-800 dark:group-hover:text-gold-300 transition-colors"
                    >
                      <span>{feature.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </LiquidCard>
              </motion.div>
            );
          })}
        </div>

        {/* Live CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://app.adzalan.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-obsidian-950 text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            <span>Experience the Full Virtual Headquarters Prototype</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
