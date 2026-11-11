import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { StatusPill } from '../ui/StatusPill';
import { MagneticButton } from '../ui/MagneticButton';
import { cn } from '../../lib/utils';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Ventures", href: "#ventures" },
    { name: "Tech Engine", href: "#tech-engine" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "ROI Calculator", href: "#calculator" },
    { name: "Track Record", href: "#track-record" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between",
          scrolled
            ? "glass-panel shadow-glass-md border-white/10 bg-obsidian-900/85 backdrop-blur-xl"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Brand Emblem */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500/20 to-obsidian-800 border border-gold-500/30 group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300">
            <span className="font-display font-bold text-lg text-gold-400 group-hover:scale-105 transition-transform">
              A
            </span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-400/80 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-gold-400 transition-colors">
              Adzalan Yanggang
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
              Solo Founder & Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm text-slate-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Status */}
        <div className="hidden lg:flex items-center gap-4">
          <StatusPill statusText="🟢 Q1 Advisory Open" />
          <MagneticButton
            variant="primary"
            size="sm"
            onClick={onOpenBooking}
            className="flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Strategy</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl glass-pill text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-lg rounded-2xl glass-panel p-6 shadow-2xl border border-white/10"
          >
            <div className="mb-4 pb-4 border-b border-white/10 flex items-center justify-between">
              <StatusPill statusText="🟢 Available for Q1 Ventures" />
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-gold-400" />
                <span>GMT+8</span>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/[0.08] transition-colors text-sm font-medium flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-sm tracking-wide shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Strategic Advisory Call</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
