import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Calendar,
  Layers,
  HelpCircle,
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
  const [includeRushSprint, setIncludeRushSprint] = useState<boolean>(false);
  const [includeAiAgent, setIncludeAiAgent] = useState<boolean>(true);
  const [includeCrmAutomation, setIncludeCrmAutomation] = useState<boolean>(false);

  const activeScope = SCOPE_OPTIONS.find(s => s.id === selectedScopeId) || SCOPE_OPTIONS[0];

  // Calculate pricing
  const rushFee = includeRushSprint ? 1800 : 0;
  const aiFee = includeAiAgent ? 1200 : 0;
  const crmFee = includeCrmAutomation ? 950 : 0;
  const totalPrice = activeScope.basePrice + rushFee + aiFee + crmFee;

  const estimatedWeeks = Math.max(
    1,
    includeRushSprint ? Math.ceil(activeScope.weeks * 0.6) : activeScope.weeks
  );

  return (
    <section id="calculator" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gold-600/5 blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-amber-700 dark:text-gold-400 mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>Transparent Scope & Investment</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-950 dark:text-white">
          Interactive <span className="text-gradient-gold">Project Scope & ROI</span> Estimator
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Select your desired objective to configure deliverables, estimated completion timeline, and fixed transparent investment. No hidden retainers or surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Scope Selector & Options */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Scope Radio Cards */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              1. Select Primary Engagement Scope:
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
                        {opt.weeks} Weeks Sprint
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
              2. Optional High-Leverage Add-Ons:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Rush Sprint */}
              <div
                onClick={() => setIncludeRushSprint(!includeRushSprint)}
                className={`p-4 rounded-xl glass-panel cursor-pointer border transition-all ${
                  includeRushSprint ? 'border-amber-500/60 dark:border-gold-500/60 bg-amber-500/10 dark:bg-gold-500/10' : 'border-black/10 dark:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Rush Sprint (-40% Time)</span>
                  <input
                    type="checkbox"
                    checked={includeRushSprint}
                    onChange={() => {}}
                    className="accent-gold-500 cursor-pointer"
                  />
                </div>
                <span className="text-xs font-mono text-amber-700 dark:text-gold-400 block mt-2">+$1,800</span>
              </div>

              {/* AI Agent Engine */}
              <div
                onClick={() => setIncludeAiAgent(!includeAiAgent)}
                className={`p-4 rounded-xl glass-panel cursor-pointer border transition-all ${
                  includeAiAgent ? 'border-amber-500/60 dark:border-gold-500/60 bg-amber-500/10 dark:bg-gold-500/10' : 'border-black/10 dark:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">AI Copilot Integration</span>
                  <input
                    type="checkbox"
                    checked={includeAiAgent}
                    onChange={() => {}}
                    className="accent-gold-500 cursor-pointer"
                  />
                </div>
                <span className="text-xs font-mono text-amber-700 dark:text-gold-400 block mt-2">+$1,200</span>
              </div>

              {/* CRM Automation */}
              <div
                onClick={() => setIncludeCrmAutomation(!includeCrmAutomation)}
                className={`p-4 rounded-xl glass-panel cursor-pointer border transition-all ${
                  includeCrmAutomation ? 'border-amber-500/60 dark:border-gold-500/60 bg-amber-500/10 dark:bg-gold-500/10' : 'border-black/10 dark:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp & CRM Webhooks</span>
                  <input
                    type="checkbox"
                    checked={includeCrmAutomation}
                    onChange={() => {}}
                    className="accent-gold-500 cursor-pointer"
                  />
                </div>
                <span className="text-xs font-mono text-amber-700 dark:text-gold-400 block mt-2">+$950</span>
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
                  Live Project Proposal
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                Guaranteed Launch
              </span>
            </div>

            {/* Total Price Hero */}
            <div className="mb-6">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Total Fixed Investment</span>
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
                <span className="text-xs text-slate-700 dark:text-slate-300 font-mono">Estimated Delivery:</span>
              </div>
              <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                ~{estimatedWeeks} Weeks {includeRushSprint && "(Accelerated)"}
              </span>
            </div>

            {/* Deliverables Checklist */}
            <div className="mb-8">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                Included Deliverables:
              </span>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeScope.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
                {includeRushSprint && (
                  <li className="flex items-start gap-2 text-amber-700 dark:text-gold-300">
                    <Check className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                    <span>Priority sprint scheduling with dedicated focus</span>
                  </li>
                )}
                {includeAiAgent && (
                  <li className="flex items-start gap-2 text-sky-700 dark:text-cyan-300">
                    <Check className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Custom LLM prompt pipeline & streaming responses</span>
                  </li>
                )}
                {includeCrmAutomation && (
                  <li className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Real-time WhatsApp & automated lead notification pipeline</span>
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
              <span>Lock in Scope & Reserve Slot</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>

            <p className="text-center text-[11px] font-mono text-slate-500 mt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Strict 100% money-back guarantee if scope not met</span>
            </p>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
};
