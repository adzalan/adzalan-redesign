import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, Calendar, Clock, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FOUNDER_INFO } from '../../data/portfolioData';

interface AdvisoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedScope?: {
    name: string;
    price: number;
  } | null;
}

export const AdvisoryModal: React.FC<AdvisoryModalProps> = ({
  isOpen,
  onClose,
  preselectedScope,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(preselectedScope?.name || 'Full SaaS MVP Sprint');
  const [budget, setBudget] = useState('$5k - $10k');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedScope) {
      setProjectType(preselectedScope.name);
    }
  }, [preselectedScope]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#FFFFFF', '#38BDF8'],
      });
    } catch (err) {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-xl rounded-2xl glass-panel p-6 sm:p-8 border border-gold-500/30 bg-obsidian-900 shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Advisory Modal"
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white glass-pill transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Exclusive Strategic Partnership</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    Book Founder Advisory
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Reserve a direct 1-on-1 strategy session with Adzalan to evaluate architecture, scope your MVP, or map out an automated growth engine.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elon Musk / Founder"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/80 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Corporate / Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@venture.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/80 transition-colors text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Target Engagement
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white focus:outline-none focus:border-gold-500/80 transition-colors text-sm"
                      >
                        <option value="Full SaaS MVP Sprint">Full SaaS MVP Sprint</option>
                        <option value="$10,000 Flagship Web Rebrand">$10k Flagship Rebrand</option>
                        <option value="Automated Growth Funnel">Automated Growth Funnel</option>
                        <option value="Fractional CTO Retainer">Fractional CTO Retainer</option>
                        <option value="Custom Strategic Advisory">Custom Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Planned Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white focus:outline-none focus:border-gold-500/80 transition-colors text-sm"
                      >
                        <option value="$5,000 - $8,500">$5,000 - $8,500</option>
                        <option value="$8,500 - $15,000">$8,500 - $15,000</option>
                        <option value="$15,000+ Enterprise">$15,000+ Enterprise</option>
                        <option value="Flexible / Valuation Based">Flexible / Valuation Based</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Objective / Friction Point (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you're building, current bottlenecks, or desired timeline..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/80 transition-colors text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wide shadow-gold-glow hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Priority Advisory Request</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-gold-400" />
                      <span>100% Confidential NDA</span>
                    </span>
                    <span>Response within 12 Hours</span>
                  </div>
                </form>
              </>
            ) : (
              /* Success Confirmation State */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_#10B981]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Strategy Request Confirmed!
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Your engagement briefing for <span className="text-gold-400 font-semibold">{projectType}</span> has been received directly in Adzalan's priority inbox.
                </p>
                <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 font-mono text-xs text-slate-400 max-w-sm mx-auto">
                  <span>📅 Next Step: Expect a calendar link sent to </span>
                  <span className="text-emerald-400 font-semibold">{email}</span>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 rounded-xl glass-pill text-xs font-mono text-slate-300 hover:text-white"
                >
                  Close & Return
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
