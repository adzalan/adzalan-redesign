import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import { SCOPE_OPTIONS } from '../../data/portfolioData';
import { LiquidCard } from '../ui/LiquidCard';
import { MagneticButton } from '../ui/MagneticButton';

interface RoiCalculatorProps {
  onSelectScope: (scopeName: string, price: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onSelectScope }) => {
  const [selectedScopeId, setSelectedScopeId] = useState<string>(SCOPE_OPTIONS[0].id);
  const [includeAuth, setIncludeAuth] = useState<boolean>(true);
  const [include3D, setInclude3D] = useState<boolean>(false);
  const [includeEdge, setIncludeEdge] = useState<boolean>(true);

  const activeScope = SCOPE_OPTIONS.find(s => s.id === selectedScopeId) || SCOPE_OPTIONS[0];

  // Calculate realistic pricing
  const authFee = includeAuth ? 750 : 0;
  const threeDFee = include3D ? 950 : 0;
  const edgeFee = includeEdge ? 350 : 0;
  const totalPrice = activeScope.basePrice + authFee + threeDFee + edgeFee;

  const estimatedWeeks = activeScope.weeks;

  return (
    <section id="calculator" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/5 dark:bg-gold-600/5 blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-amber-700 dark:text-gold-400 mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>Transparent Project Estimation</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-950 dark:text-white">
          Interactive <span className="text-gradient-gold">Project Scope & Build</span> Estimator
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Planning a new web platform like <strong className="text-emerald-600 dark:text-emerald-400">umbikasih.com</strong> or an interactive SaaS prototype like <strong className="text-amber-700 dark:text-gold-400">app.adzalan.com</strong>? Configure your requirements below for transparent timeline and investment estimates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Scope Selector & Options */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Scope Radio Cards */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              1. Select Project Type:
            </label>
            {SCOPE_OPTIONS.map((opt) => {
              const isSelected = opt.id === selectedScopeId;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedScopeId(opt.id)}
                  className={`p-5 rounded-2xl glass-panel-interactive cursor-pointer border transition-all duration-300 ${
                    isSelected
                      ? 'border-amber-500/80 dark:border-gold-500/70 bg-amber-500/5 dark:bg-obsidian-850/90 shadow-sm dark:shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                      : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 bg-white/70 dark:bg-obsidian-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-amber-500 dark:border-gold-400 bg-gold-500 text-obsidian-950' : 'border-slate-400 dark:border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                          {opt.name}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="font-display font-bold text-lg text-amber-700 dark:text-gold-400 block">
                        ${opt.basePrice.toLocaleString()}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        ~{opt.weeks} Weeks Sprint
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add-On Modifiers */}
          <div className="mt-4 space-y-3">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              2. Technical Add-Ons:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Clerk / Auth */}
              <div
                onClick={() => setIncludeAuth(!includeAuth)}
                className={`p-4 rounded-xl glass-panel cursor-pointer border transition-all ${
                  includeAuth ? 'border-amber-500/60 dark:border-gold-500/60 bg-amber-500/10 dark:bg-gold-500/10' : 'border-black/10 dark:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Clerk / Multi-Tenant Auth</span>
                  <input
                    type="checkbox"
                    checked={includeAuth}
                    onChange={() => {}}
                    className="accent-gold-500 cursor-pointer"
                  />
                </div>
                <span className="text-xs font-mono text-amber-700 dark:text-gold-400 block mt-2">+$750</span>
              </div>

              {/* 3D WebGL Scene */}
              <div
                onClick={() => setInclude3D(!include3D)}
                className={`p-4 rounded-xl glass-panel cursor-pointer border transition-all ${
                  include3D ? 'border-amber-500/60 dark:border-gold-500/60 bg-amber-500/10 dark:bg-gold-500/10' : 'border-black/10 dark:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Procedural 3D Lobby</span>
                  <input
                    type="checkbox"
                    checked={include3D}
                    onChange={() => {}}
                    className="accent-gold-500 cursor-pointer"
                  />
                </div>
                <span className="text-xs font-mono text-amber-700 dark:text-gold-400 block mt-2">+$950</span>
              </div>

              {/* Edge Deployment */}
              <div
                onClick={() => setIncludeEdge(!includeEdge)}
                className={`p-4 rounded-xl glass-panel cursor-pointer border transition-all ${
                  includeEdge ? 'border-amber-500/60 dark:border-gold-500/60 bg-amber-500/10 dark:bg-gold-500/10' : 'border-black/10 dark:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Cloudflare Edge & Custom DNS</span>
                  <input
                    type="checkbox"
                    checked={includeEdge}
                    onChange={() => {}}
                    className="accent-gold-500 cursor-pointer"
                  />
                </div>
                <span className="text-xs font-mono text-amber-700 dark:text-gold-400 block mt-2">+$350</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Estimate Summary & Lock In */}
        <div className="lg:col-span-5">
          <LiquidCard className="p-6 sm:p-8 border-slate-200 dark:border-gold-500/30 bg-white/95 dark:bg-obsidian-900 shadow-2xl sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-gold-400" />
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Estimated Build Scope
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                Direct Collaboration
              </span>
            </div>

            {/* Total Price Hero */}
            <div className="mb-6">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Estimated Project Investment</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-gradient-gold">
                  ${totalPrice.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">USD / Milestone Based</span>
              </div>
            </div>

            {/* Timeline & Speed */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950/70 border border-black/5 dark:border-white/5 flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-mono">Estimated Sprint Duration:</span>
              </div>
              <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                ~{estimatedWeeks} Weeks
              </span>
            </div>

            {/* Deliverables Checklist */}
            <div className="mb-8">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                Deliverables Included:
              </span>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeScope.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
                {includeAuth && (
                  <li className="flex items-start gap-2 text-amber-700 dark:text-gold-300">
                    <Check className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                    <span>Clerk / multi-tenant auth with protected routes</span>
                  </li>
                )}
                {include3D && (
                  <li className="flex items-start gap-2 text-sky-700 dark:text-cyan-300">
                    <Check className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Procedural 3D WebGL scene with real-time lighting</span>
                  </li>
                )}
                {includeEdge && (
                  <li className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Cloudflare Pages edge deployment & custom domain routing</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Lock In Scope Action */}
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => onSelectScope(activeScope.name, totalPrice)}
              className="w-full flex items-center justify-center gap-2 py-4"
            >
              <span>Connect & Discuss Scope</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>

            <p className="text-center text-[11px] font-mono text-slate-500 mt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Transparent, milestone-based code delivery</span>
            </p>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
};
