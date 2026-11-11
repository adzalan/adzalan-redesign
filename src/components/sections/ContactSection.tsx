import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Phone, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LiquidCard } from '../ui/LiquidCard';
import { MagneticButton } from '../ui/MagneticButton';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('about@adzalan.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/50 dark:bg-obsidian-950">
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
            <span>Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight"
          >
            Initiate a <span className="text-gradient-gold">Conversation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Ready to collaborate, request a consultation, or explore custom solutions? Leave a message below or reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <LiquidCard
              glowColor="rgba(245, 158, 11, 0.2)"
              className="p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-lg"
            >
              <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white mb-6">
                Direct Contact Channels
              </h3>

              <div className="space-y-6 text-sm">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-gold-500/10 border border-amber-500/20 dark:border-gold-500/20 flex items-center justify-center text-amber-600 dark:text-gold-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Direct Inquiries</span>
                    <div className="flex items-center gap-2 mt-1">
                      <a href="mailto:about@adzalan.com" className="font-semibold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-gold-400 transition-colors">
                        about@adzalan.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        title="Copy email address"
                        className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Phone & WhatsApp</span>
                    <a
                      href="https://wa.me/60126240729"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5 mt-1"
                    >
                      <span>+60 12-624 0729</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                    <p className="font-semibold text-slate-900 dark:text-white mt-1">
                      Temerloh & Janda Baik, Pahang, Malaysia (GMT+8)
                    </p>
                  </div>
                </div>

                {/* Virtual HQ Desk */}
                <div className="flex items-start gap-4 pt-4 border-t border-black/5 dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Virtual HQ Reception</span>
                    <a
                      href="https://app.adzalan.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-amber-700 dark:text-gold-400 font-semibold hover:underline flex items-center gap-1 mt-1"
                    >
                      <span>Book a visit at app.adzalan.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </LiquidCard>
          </div>

          {/* Right Column: Interactive Contact Form matching adzalan.com */}
          <div className="lg:col-span-7">
            <LiquidCard
              glowColor="rgba(245, 158, 11, 0.15)"
              className="p-8 sm:p-10 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-lg"
            >
              <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-8">
                Inquire about custom software development, consulting, or project collaboration.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-950 dark:text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md">
                    Thank you, {formData.name}! Your message has been received. I will reply back to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 text-xs font-mono text-amber-700 dark:text-gold-400 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ahmad Faiz"
                      className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ahmad@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry, project scope, or ideas..."
                      className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </LiquidCard>
          </div>
        </div>
      </div>
    </section>
  );
};
