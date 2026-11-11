import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme, ThemeMode } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  const options: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'light', label: 'Light', icon: <Sun className="w-3.5 h-3.5" /> },
    { mode: 'dark', label: 'Dark', icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: 'system', label: 'System', icon: <Laptop className="w-3.5 h-3.5" /> },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme selection"
      className={cn(
        "relative inline-flex items-center p-1 rounded-full bg-slate-200/70 dark:bg-obsidian-850 border border-slate-300/70 dark:border-white/10 shadow-sm backdrop-blur-md",
        className
      )}
    >
      {options.map((opt) => {
        const isActive = theme === opt.mode;
        return (
          <button
            key={opt.mode}
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(opt.mode)}
            title={`Switch to ${opt.label} theme`}
            className={cn(
              "relative z-10 flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-mono transition-colors cursor-pointer select-none",
              isActive
                ? "text-obsidian-950 dark:text-white font-semibold"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            )}
          >
            {/* Animated Pill Background */}
            {isActive && (
              <motion.div
                layoutId="theme-pill-indicator"
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                className="absolute inset-0 rounded-full bg-white dark:bg-obsidian-700 shadow-sm border border-slate-200/50 dark:border-white/10 -z-10"
              />
            )}
            <span className="flex items-center gap-1.5">
              {opt.icon}
              <span className="hidden sm:inline text-[11px]">{opt.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};
