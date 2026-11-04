import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import TiltCard from './TiltCard';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="relative py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            MEMBERSHIP & <span className="text-gradient-orange">PLANS</span>
          </h2>
          <p className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light">
            Flexible monthly, quarterly, and annual passes tailored for your goals. No hidden registration fees.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4" />
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {studioConfig.pricing.map((plan, idx) => {
            const isPopular = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={isPopular ? 'lg:-translate-y-2 z-10' : ''}
              >
                <TiltCard
                  className={`rounded-3xl p-8 transition-colors duration-300 flex flex-col justify-between h-full ${
                    isPopular
                      ? 'bg-gradient-to-b from-obsidian-850 via-obsidian-900 to-obsidian-950 border-2 border-orange-500 shadow-orange-md'
                      : 'bg-obsidian-900 border border-silver/10 hover:border-orange-500/40 shadow-xl'
                  }`}
                >
                  {/* Popular Pill */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
                      <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-orange-600 text-white shadow-orange-sm">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Card Title & Tagline */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-black text-2xl text-white">
                        {plan.name}
                      </h3>
                      {!isPopular && (
                        <span className="text-[11px] font-mono text-silver-muted px-2.5 py-0.5 rounded-full bg-obsidian-800">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-silver-muted text-xs sm:text-sm font-light min-h-[40px] mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="pb-6 mb-6 border-b border-obsidian-800">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-silver-muted text-xs font-mono">/{plan.period}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-mono uppercase tracking-wider text-orange-400 block mb-2 font-medium">
                        What's Included:
                      </span>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver">
                          <div className="w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectPlan(plan.name)}
                      className={`w-full py-3.5 rounded-full font-display font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                        isPopular
                          ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-sm hover:shadow-orange-md'
                          : 'bg-obsidian-850 hover:bg-orange-600 text-silver hover:text-white border border-silver/10 hover:border-transparent'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Guarantee note */}
        <div className="mt-12 text-center text-xs text-silver-muted font-mono flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-orange-400" />
          <span>Need a customized corporate or family package? Call Master Gopinath.R directly at 8870356852</span>
        </div>
      </div>
    </section>
  );
}
