import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, Code2, MapPin, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { LiquidCard } from '../ui/LiquidCard';

export const AboutSection: React.FC = () => {
  const skills = [
    { name: "React & Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "UI/UX" },
    { name: "Three.js / WebGL", category: "3D Graphics" },
    { name: "Clerk Auth", category: "Identity" },
    { name: "Supabase & Postgres", category: "Database" },
    { name: "Cloudflare Pages", category: "Edge Hosting" },
    { name: "Node.js", category: "Backend" },
    { name: "Framer Motion", category: "Motion" },
    { name: "WordPress & PHP", category: "CMS" },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Story */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 dark:bg-gold-500/10 text-amber-700 dark:text-gold-400 border border-amber-500/20 dark:border-gold-500/20 mb-4 w-fit"
            >
              <User className="w-3.5 h-3.5" />
              <span>About Adzalan Yanggang</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight"
            >
              Solo Software Builder & <span className="text-gradient-gold">Web Developer</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              <p>
                I am a web developer and programmer based in <strong>Temerloh, Pahang, Malaysia</strong>. My work focuses on crafting reliable web applications, exploring browser-based 3D environments, and building dedicated vertical SaaS solutions.
              </p>
              <p>
                From launching the official hospitality presence for <strong>Umbi Kasih Retreat (umbikasih.com)</strong> in Janda Baik to engineering the interactive 3D virtual headquarters prototype at <strong>app.adzalan.com</strong>, I bridge clean visual design with solid code.
              </p>
              <p>
                I am currently building out the <strong>Adzalan Core</strong> family of management tools—addressing genuine administrative needs for community institutions, homestays, and small business operators.
              </p>
            </motion.div>

            {/* Location & Ethos badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-gold-400" />
                <span>Temerloh & Janda Baik, Pahang, MY</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span>Building Software in Public</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Technical Stack Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <LiquidCard
              glowColor="rgba(245, 158, 11, 0.2)"
              className="p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-xl"
            >
              <div className="flex items-center gap-3 pb-6 border-b border-black/5 dark:border-white/5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/30 dark:border-gold-500/30 flex items-center justify-center text-amber-600 dark:text-gold-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-950 dark:text-white text-base">Technical Competency</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Core Languages & Frameworks</p>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-3.5 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-xs text-slate-800 dark:text-slate-200 hover:border-amber-500/40 dark:hover:border-gold-500/40 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-gold-400" />
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">({skill.category})</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-black/5 dark:border-white/5 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Code Standards</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Strict TypeScript & Zero-Fat</span>
              </div>
            </LiquidCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
