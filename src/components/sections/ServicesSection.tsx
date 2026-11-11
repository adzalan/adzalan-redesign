import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Cpu, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { LiquidCard } from '../ui/LiquidCard';
import { MagneticButton } from '../ui/MagneticButton';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Product Engineering",
      description: "End-to-end development of modern web applications, MVPs, and business platforms built on Next.js, React, Node.js, and robust cloud databases.",
      deliverables: [
        "Production-grade Next.js & React architectures",
        "TypeScript schemas with zero runtime blindspots",
        "Clean, responsive Tailwind & Liquid Glass styling",
        "High-performance edge deployment on Cloudflare"
      ]
    },
    {
      icon: Bot,
      title: "AI Agents & Workflow Automation",
      description: "Custom conversational agents, WhatsApp/Telegram business bots, webhook integrations, and automated customer service funnels.",
      deliverables: [
        "Custom domain-trained customer support agents",
        "WhatsApp Cloud API automated notification funnels",
        "Inquiry intake, validation & appointment booking",
        "Webhooks and asynchronous task pipelines"
      ]
    },
    {
      icon: Cpu,
      title: "Technical Architecture & Advisory",
      description: "Database modeling, multi-tenant SaaS architecture, cloud infrastructure optimization, and technical roadmapping for growth.",
      deliverables: [
        "Multi-tenant schema design with PostgreSQL RLS",
        "Auth security with Clerk & session lifecycle",
        "3D WebGL optimization & procedural rendering",
        "Lean tech stack selection for solo founders"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/60 dark:bg-obsidian-950/60">
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
            <span>Consulting & Delivery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight"
          >
            Custom Engineering <span className="text-gradient-gold">& Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Partner directly with Adzalan to build, launch, and scale your digital products with craftsmanship and speed.
          </motion.p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex"
              >
                <LiquidCard
                  glowColor="rgba(245, 158, 11, 0.15)"
                  className="w-full p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl flex flex-col justify-between group hover:border-amber-500/30 dark:hover:border-gold-500/30 transition-all shadow-lg"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/20 dark:border-gold-500/20 flex items-center justify-center text-amber-600 dark:text-gold-400 mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white group-hover:text-amber-600 dark:group-hover:text-gold-400 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Capabilities</h4>
                      <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                        {srv.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-gold-400 hover:text-amber-800 dark:hover:text-gold-300 transition-colors cursor-pointer"
                    >
                      <span>Inquire About Solution</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
