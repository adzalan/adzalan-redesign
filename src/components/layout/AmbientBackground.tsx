import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-slate-50 dark:bg-obsidian-950 transition-colors duration-500">
      {/* Matrix Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Primary Fixed Atmospheric Glow Orbs */}
      <div className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] rounded-full bg-amber-500/10 dark:bg-gold-600/10 blur-[140px] pointer-events-none transform -translate-x-1/2" />
      <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-sky-500/8 dark:bg-cyan-600/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-gold-500/8 dark:bg-amber-500/8 blur-[130px] pointer-events-none" />

      {/* Mouse Tracking Spotlight */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(56, 189, 248, 0.03) 40%, transparent 70%)',
          }}
        />
      )}
    </div>
  );
};
