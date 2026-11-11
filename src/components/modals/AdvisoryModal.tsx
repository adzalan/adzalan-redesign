import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, MessageSquare, Mail, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

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
  const [inquiryType, setInquiryType] = useState(preselectedScope?.name || 'Custom Web Application / MVP');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedScope) {
      setInquiryType(preselectedScope.name);
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

    try {
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#FFFFFF', '#10B981'],
      });
    } catch (err) {
      // fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
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
            className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-xl rounded-3xl glass-panel p-6 sm:p-8 border border-amber-500/30 dark:border-gold-500/30 bg-white dark:bg-obsidian-900 shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white glass-pill transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white">
                  Message Dispatched!
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md">
                  Thank you, <strong>{name}</strong>. Your inquiry regarding <em>{inquiryType}</em> has been submitted. I will follow up at <strong>{email}</strong> promptly.
                </p>
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-xs shadow-md cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 dark:bg-gold-500/10 text-amber-700 dark:text-gold-400 border border-amber-500/20 dark:border-gold-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Initiate Contact</span>
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white">
                  Connect with Adzalan
                </h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  Discuss a custom web project, micro-SaaS architecture, or explore collaboration.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Faiz Azman"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. faiz@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Focus
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500"
                    >
                      <option value="Custom Web Application / MVP" className="text-black dark:text-white bg-white dark:bg-obsidian-900">
                        Custom Web Application / MVP
                      </option>
                      <option value="Virtual Headquarters & 3D WebGL" className="text-black dark:text-white bg-white dark:bg-obsidian-900">
                        Virtual Headquarters & 3D WebGL (app.adzalan.com)
                      </option>
                      <option value="Hospitality & Retreat Web Platform" className="text-black dark:text-white bg-white dark:bg-obsidian-900">
                        Hospitality & Retreat Web Platform (like umbikasih.com)
                      </option>
                      <option value="Institutional & Core SaaS Suite" className="text-black dark:text-white bg-white dark:bg-obsidian-900">
                        Institutional & Core SaaS Suite (MosqueCore, TahfizCore)
                      </option>
                      <option value="General Consultation & Advisory" className="text-black dark:text-white bg-white dark:bg-obsidian-900">
                        General Consultation & Advisory
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1">
                      Project Notes / Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your objectives or questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 dark:from-gold-500 dark:to-gold-600 text-white dark:text-obsidian-950 font-semibold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
