import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BeforeAfterMetricProps {
  metric: string;
  label: string;
  className?: string;
}

export const BeforeAfterMetric: React.FC<BeforeAfterMetricProps> = ({
  metric,
  label,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-4 rounded-xl bg-obsidian-950/70 border border-white/5 flex flex-col justify-between hover:border-gold-500/30 transition-colors",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400">{label}</span>
        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-display font-extrabold text-2xl text-white group-hover:text-gold-300 transition-colors">
          {metric}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
      </div>
    </div>
  );
};
