import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface LiquidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glowColor?: string;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({
  children,
  className,
  tilt = false,
  glowColor = "rgba(245, 158, 11, 0.15)",
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0, opacity: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y, opacity: 1 });

    if (tilt && !prefersReducedMotion) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -7;
      const rotY = ((x - centerX) / centerX) * 7;
      setRotateX(rotX);
      setRotateY(rotY);
    }
  };

  const handleMouseLeave = () => {
    setSpotlightPos(prev => ({ ...prev, opacity: 0 }));
    if (tilt) {
      setRotateX(0);
      setRotateY(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={tilt && !prefersReducedMotion ? { rotateX, rotateY } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      style={{ transformStyle: tilt ? "preserve-3d" : undefined }}
      className={cn(
        "relative rounded-2xl glass-panel-interactive overflow-hidden p-6 sm:p-8",
        className
      )}
      {...(props as any)}
    >
      {/* Dynamic Cursor Spotlight Lensing */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 -z-10"
        style={{
          opacity: spotlightPos.opacity,
          background: `radial-gradient(500px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${glowColor}, transparent 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
};
