import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Mail, 
  Clock 
} from 'lucide-react';
import { GithubIcon, TwitterXIcon, LinkedinIcon } from '../ui/Icons';
import { FOUNDER_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FOUNDER_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-black/10 dark:border-white/10 bg-slate-100/80 dark:bg-obsidian-950 overflow-hidden transition-colors">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/10 dark:bg-gold-600/10 blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Call to Action Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 glass-panel border-amber-500/30 dark:border-gold-500/30 bg-gradient-to-br from-white via-amber-500/5 to-white dark:from-obsidian-900 dark:via-obsidian-850 dark:to-obsidian-900 overflow-hidden mb-20 shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 dark:bg-gold-500/10 text-amber-700 dark:text-gold-400 border border-amber-500/20 dark:border-gold-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Generation Solo Founder Architecture</span>
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight">
                Let's turn your vision into a <span className="text-gradient-gold">live, profitable platform</span>.
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you need a full-scale 0-to-1 SaaS MVP, an executive $10,000 web rebrand, or an automated high-yield acquisition funnel, I engineer it end-to-end.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Book Advisory Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-4 rounded-full glass-panel hover:border-amber-500/40 dark:hover:border-gold-500/40 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white text-sm font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>{FOUNDER_INFO.socials.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-black/5 dark:border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/30 dark:border-gold-500/30 text-amber-600 dark:text-gold-400 font-display font-bold text-lg">
                A
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Adzalan Yanggang
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Solo Founder, Product Engineer & Digital Growth Strategist based in Temerloh & Kuala Lumpur, Malaysia. Building venture-grade micro-SaaS and autonomous systems.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" />
              <span>Timezone: GMT+8 (MYT)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-slate-300 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#ventures" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">Ventures & Micro-SaaS</a></li>
              <li><a href="#tech-engine" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">Tech & Growth Engine</a></li>
              <li><a href="#case-studies" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">Client Case Studies</a></li>
              <li><a href="#calculator" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">ROI & Scope Calculator</a></li>
              <li><a href="#track-record" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">Founder Track Record</a></li>
            </ul>
          </div>

          {/* External Links & Profiles */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-slate-300 font-semibold mb-3">
              Connect & Verify
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={FOUNDER_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-pill text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-amber-500/40 dark:hover:border-gold-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-pill text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-amber-500/40 dark:hover:border-gold-500/40 transition-colors"
                aria-label="Twitter / X Profile"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-pill text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-amber-500/40 dark:hover:border-gold-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${FOUNDER_INFO.socials.email}`}
                className="p-2.5 rounded-xl glass-pill text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-amber-500/40 dark:hover:border-gold-500/40 transition-colors"
                aria-label="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-4 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Official domain: <span className="text-amber-700 dark:text-gold-400 font-semibold">adzalan.com</span>
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Adzalan Yanggang. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with React 19, Framer Motion & 21st UI UX Pro Max</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
