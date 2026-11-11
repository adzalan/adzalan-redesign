import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Sparkles, 
  Mail, 
  Clock, 
  ExternalLink,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';
import { GithubIcon, TwitterXIcon, LinkedinIcon } from '../ui/Icons';
import { MagneticButton } from '../ui/MagneticButton';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('about@adzalan.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-black/10 dark:border-white/10 bg-slate-100/70 dark:bg-obsidian-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/5 dark:border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/30 dark:border-gold-500/30 text-amber-600 dark:text-gold-400 font-display font-bold text-lg">
                AZ
              </div>
              <div>
                <span className="font-display font-bold text-lg text-slate-900 dark:text-white block">
                  Adzalan Portfolio
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Engineering Digital Foundations
                </span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Solo software builder & web developer based in Temerloh & Janda Baik, Pahang, Malaysia. Prototyping the 3D Virtual Headquarters at <strong className="text-slate-800 dark:text-slate-200">app.adzalan.com</strong> and creator of <strong className="text-slate-800 dark:text-slate-200">umbikasih.com</strong>.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" />
              <span>Timezone: GMT+8 (Malaysia Time)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">
                  About Adzalan
                </a>
              </li>
              <li>
                <a href="#virtual-hq" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">
                  The Virtual Headquarters
                </a>
              </li>
              <li>
                <a href="#saas-ecosystem" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">
                  Adzalan Core Ecosystem
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">
                  Custom Engineering & Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions & Connect */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full px-4 py-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-mono flex items-center justify-between border border-black/5 dark:border-white/10 transition-colors cursor-pointer"
              >
                <span>about@adzalan.com</span>
                {copied ? (
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                )}
              </button>

              <a
                href="https://wa.me/60126240729"
                target="_blank"
                rel="noreferrer"
                className="w-full px-4 py-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-mono flex items-center justify-between border border-black/5 dark:border-white/10 transition-colors cursor-pointer"
              >
                <span>+60 12-624 0729 (WhatsApp)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://app.adzalan.com"
                target="_blank"
                rel="noreferrer"
                className="w-full px-4 py-2.5 rounded-xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/20 dark:border-gold-500/20 text-amber-700 dark:text-gold-400 text-xs font-semibold flex items-center justify-between hover:bg-amber-500/15 transition-colors cursor-pointer"
              >
                <span>Launch app.adzalan.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © 2026 Adzalan Portfolio. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/adzalan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/adzalan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <TwitterXIcon className="w-4 h-4" />
              <span>Twitter</span>
            </a>
            <a
              href="https://linkedin.com/in/adzalan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              title="Back to top"
              className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
