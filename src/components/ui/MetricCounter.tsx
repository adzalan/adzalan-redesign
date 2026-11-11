import React, { useEffect, useState, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface MetricCounterProps {
  value: string;
  label: string;
  subtext?: string;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({
  value,
  label,
  subtext,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    // Extract numerical digits from strings like "$150k+", "140k+", "6+", "14 Days"
    const match = value.match(/([\d.]+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[1].length);

    let startTime: number | null = null;
    const duration = 1600; // ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * targetNum);

      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white group-hover:text-gold-400 transition-colors">
        {displayValue}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
        {label}
      </span>
      {subtext && (
        <span className="text-[11px] font-mono text-slate-400 mt-0.5">
          {subtext}
        </span>
      )}
    </div>
  );
};
