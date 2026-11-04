import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Sparkles, Users, HeartHandshake } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import TiltCard from './TiltCard';

const iconMap = {
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  HeartHandshake
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ODS Advantage</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            WHY DANCERS <span className="text-gradient-orange">CHOOSE ODS</span>
          </h2>
          <p className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light">
            We don't teach rote steps. We cultivate rhythm, stage presence, and artistic excellence in an atmosphere built for peak performance.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4" />
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studioConfig.features.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <TiltCard className="rounded-3xl p-8 bg-obsidian-900 border border-silver/10 hover:border-orange-500/40 transition-colors duration-300 flex flex-col justify-between h-full shadow-xl">
                  <div>
                    {/* Icon Box */}
                    <div className="w-13 h-13 rounded-2xl bg-obsidian-850 border border-orange-500/25 flex items-center justify-center text-orange-400 transition-colors duration-300 mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-black text-xl text-white group-hover:text-orange-400 transition-colors mb-3">
                      {item.title}
                    </h3>

                    <p className="text-silver-muted text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-obsidian-800 flex items-center justify-between text-[11px] font-mono text-silver-muted/60">
                    <span>Pillar 0{idx + 1}</span>
                    <span className="text-orange-400 font-medium">Standard</span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
