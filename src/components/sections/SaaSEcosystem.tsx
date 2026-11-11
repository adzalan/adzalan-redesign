import React from 'react';
import { motion } from 'framer-motion';
import { Mosque, Hotel, MessageSquareCode, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { LiquidCard } from '../ui/LiquidCard';

export const SaaSEcosystem: React.FC = () => {
  const products = [
    {
      category: "Islamic Institutions",
      title: "MosqueCore & TahfizCore",
      description: "Digital management for mosques, suraus, and tahfiz centers—streamlining student enrollment, hafazan tracking, and donation administration.",
      badge: "Community & Education",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      accentGlow: "rgba(16, 185, 129, 0.2)",
      icon: Mosque,
      features: [
        "Student enrollment & parent portals",
        "Daily hafazan & Quran memorization records",
        "Transparent donation & infaq management",
        "Surau/Mosque prayer and event schedules"
      ]
    },
    {
      category: "Hospitality & Short Stays",
      title: "HomestayCore & BookingCore",
      description: "Comprehensive direct-booking, calendar synchronization, and automated guest messaging for homestay and boutique property operators.",
      badge: "Hospitality & Travel",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-gold-400 border-amber-500/20",
      accentGlow: "rgba(245, 158, 11, 0.2)",
      icon: Hotel,
      features: [
        "Direct commission-free booking website",
        "Multi-channel calendar sync (Airbnb, Booking)",
        "Automated WhatsApp check-in instructions",
        "Cleaning & maintenance task checklists"
      ]
    },
    {
      category: "AI & Business Operations",
      title: "ReplyCore AI & CRMCore",
      description: "AI-driven customer communications, conversational support bots, and contact pipeline tracking to automate high-touch lead management.",
      badge: "AI Automation",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      accentGlow: "rgba(168, 85, 247, 0.2)",
      icon: MessageSquareCode,
      features: [
        "Context-trained conversational chatbots",
        "Lead capture & auto-qualification funnel",
        "WhatsApp Business Cloud API integration",
        "Lightweight CRM for solo founders & SMEs"
      ]
    }
  ];

  return (
    <section id="saas-ecosystem" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 dark:bg-gold-500/10 text-amber-700 dark:text-gold-400 border border-amber-500/20 dark:border-gold-500/20 mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Vertical SaaS Products</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight"
          >
            The Adzalan <span className="text-gradient-gold">Core Ecosystem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Specialized industry management solutions designed for operational efficiency, low overhead, and straightforward execution.
          </motion.p>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={prod.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex"
              >
                <LiquidCard
                  glowColor={prod.accentGlow}
                  className="w-full p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl flex flex-col justify-between group hover:border-amber-500/30 dark:hover:border-gold-500/30 transition-all shadow-lg"
                >
                  <div>
                    {/* Header with category and badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-amber-600 dark:text-gold-400" />
                      </div>
                      <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-semibold ${prod.badgeColor}`}>
                        {prod.badge}
                      </span>
                    </div>

                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {prod.category}
                    </span>

                    <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white mt-1 group-hover:text-amber-600 dark:group-hover:text-gold-400 transition-colors">
                      {prod.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Key Capabilities</h4>
                      <ul className="space-y-2 text-xs font-sans text-slate-700 dark:text-slate-300">
                        {prod.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-gold-400 mt-1.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-gold-400 group-hover:text-amber-800 dark:group-hover:text-gold-300">
                      <span>In Active Development & Roadmap</span>
                    </span>
                  </div>
                </LiquidCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
