import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Cpu, Zap, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Venture } from '../../types';

interface VenturesModalProps {
  venture: Venture | null;
  onClose: () => void;
}

export const VenturesModal: React.FC<VenturesModalProps> = ({ venture, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (venture) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [venture, onClose]);

  return (
    <AnimatePresence>
      {venture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-2xl rounded-2xl glass-panel p-6 sm:p-8 border border-white/15 bg-obsidian-900 shadow-2xl z-10 my-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    {venture.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {venture.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {venture.title}
                </h3>
                <p className="text-sm text-gold-400 font-medium mt-1">
                  {venture.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Venture Modal"
                className="p-2 rounded-xl text-slate-400 hover:text-white glass-pill transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                  <Cpu className="w-4 h-4 text-gold-400" />
                  <span>The System & Architecture</span>
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {venture.description}
                </p>
              </div>

              {/* Key Metrics */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Live Production Metrics</span>
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {venture.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-obsidian-850/80 border border-white/5">
                      <span className="text-[11px] text-slate-400 block truncate">{m.label}</span>
                      <span className="font-display font-bold text-base sm:text-lg text-white mt-0.5 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Technologies & Infrastructure</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {venture.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Operational Leverage */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-gold-500/10 via-obsidian-800 to-obsidian-900 border border-gold-500/20">
                <h5 className="text-xs font-bold text-gold-300 mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <span>Solo Founder Engineering Leverage</span>
                </h5>
                <p className="text-xs text-slate-300">
                  Built, shipped, and operated independently by Adzalan without external engineering teams—demonstrating extreme capital and development efficiency.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {venture.links?.demo && (
                  <a
                    href={venture.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs tracking-wide transition-colors"
                  >
                    <span>Launch Interactive Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {venture.links?.github && (
                  <a
                    href={venture.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl glass-pill text-slate-300 hover:text-white text-xs font-mono transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-mono"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
