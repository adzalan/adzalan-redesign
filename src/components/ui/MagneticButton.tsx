import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Calculate distance with damping
    const x = (clientX - centerX) * 0.25;
    const y = (clientY - centerY) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base font-semibold",
  };

  const variantClasses = {
    primary:
      "relative bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-obsidian-950 font-bold shadow-gold-glow hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] border border-gold-400/30",
    secondary:
      "bg-white dark:bg-obsidian-850 text-slate-800 dark:text-slate-100 hover:text-slate-950 dark:hover:text-white border border-slate-300/80 dark:border-slate-700/60 hover:border-amber-500/50 dark:hover:border-gold-500/40 hover:bg-slate-50 dark:hover:bg-obsidian-800 shadow-sm dark:shadow-glass-sm",
    glass:
      "glass-pill text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:border-black/20 dark:hover:border-white/30 hover:bg-black/[0.04] dark:hover:bg-white/[0.08] shadow-sm dark:shadow-glass-sm",
    ghost:
      "bg-transparent text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full tracking-wide transition-colors cursor-pointer select-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
