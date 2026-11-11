import React from 'react';
import { cn } from '../../lib/utils';

interface StatusPillProps {
  statusText?: string;
  className?: string;
  glow?: boolean;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  statusText = "Available for Q1 SaaS & Advisory",
  className,
  glow = true,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide glass-pill transition-all duration-300",
        glow && "hover:border-emerald-500/40 hover:bg-emerald-500/5",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
      </span>
      <span className="text-slate-700 dark:text-slate-200 font-medium truncate">{statusText}</span>
    </div>
  );
};
