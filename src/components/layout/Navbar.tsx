import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
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
    { name: "About", href: "#about" },
    { name: "Virtual HQ", href: "#virtual-hq" },
    { name: "SaaS Ecosystem", href: "#saas-ecosystem" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between",
          scrolled
            ? "glass-panel shadow-glass-md border-black/5 dark:border-white/10 bg-white/85 dark:bg-obsidian-900/85 backdrop-blur-xl"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-slate-200 dark:from-gold-500/20 dark:to-obsidian-800 border border-amber-500/40 dark:border-gold-500/30 group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300">
            <span className="font-display font-bold text-lg text-amber-600 dark:text-gold-400 group-hover:scale-105 transition-transform">
              AZ
            </span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-400/80 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-slate-900 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
              Adzalan Portfolio
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase">
              Virtual HQ & SaaS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/[0.06] transition-colors font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://app.adzalan.com"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 text-xs lg:text-sm text-amber-700 dark:text-gold-400 hover:text-amber-800 dark:hover:text-gold-300 rounded-full hover:bg-amber-500/10 transition-colors font-semibold tracking-wide flex items-center gap-1"
          >
            <span>app.adzalan.com</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <MagneticButton
            variant="primary"
            size="sm"
            onClick={onOpenBooking}
            className="flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </MagneticButton>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-200/60 dark:bg-obsidian-850 border border-slate-300/60 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-lg rounded-2xl glass-panel p-5 border border-black/10 dark:border-white/10 bg-white/95 dark:bg-obsidian-900/95 shadow-xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/[0.06] hover:text-amber-600 dark:hover:text-gold-400 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://app.adzalan.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-amber-700 dark:text-gold-400 hover:bg-amber-500/10 flex items-center justify-between"
              >
                <span>Enter Virtual HQ (app.adzalan.com)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="pt-3 mt-2 border-t border-black/10 dark:border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 dark:from-gold-500 dark:to-gold-600 text-white dark:text-obsidian-950 font-semibold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
