import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import TiltCard from './TiltCard';

export default function DanceStyles({ onSelectStyle }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Western', 'Classical', 'Zumba', 'Urban & Bollywood'];

  const filteredStyles = studioConfig.danceStyles.filter((style) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Western') return style.id === 'western' || style.id === 'hip-hop' || style.id === 'contemporary';
    if (activeFilter === 'Classical') return style.id === 'classical';
    if (activeFilter === 'Zumba') return style.id === 'zumba';
    if (activeFilter === 'Urban & Bollywood') return style.id === 'hip-hop' || style.id === 'bollywood';
    return true;
  });

  return (
    <section id="styles" className="relative py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Every Discipline</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            DISCIPLINES & <span className="text-gradient-orange">DANCE STYLES</span>
          </h2>
          <p className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light">
            Comprehensive curriculum tailored for Junior, Adult, and Senior batches. From raw street hip-hop to sacred classical Bharatanatyam.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-orange-600 text-white font-bold shadow-orange-sm'
                  : 'bg-obsidian-900 text-silver-muted hover:text-white border border-silver/10 hover:border-orange-500/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Dance Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStyles.map((style, idx) => (
            <motion.div
              key={style.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <TiltCard className="rounded-3xl overflow-hidden bg-obsidian-900 border border-silver/10 hover:border-orange-500/50 transition-colors duration-300 flex flex-col h-full shadow-xl">
                {/* Image Container with Zoom & Gradient */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-obsidian-850">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/40 to-transparent" />

                  {/* Badge Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-semibold uppercase bg-obsidian-950/85 backdrop-blur-md text-orange-400 border border-orange-500/25">
                      {style.badge}
                    </span>
                  </div>

                  {/* Category Top Right */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-silver bg-obsidian-950/70 backdrop-blur-md border border-silver/20">
                      {style.category}
                    </span>
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-black text-2xl text-white group-hover:text-orange-400 transition-colors">
                      {style.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-silver-muted text-sm font-light leading-relaxed mb-4">
                      {style.summary}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-1.5 mb-6">
                      {style.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-silver">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer metadata & CTA */}
                  <div className="pt-4 border-t border-obsidian-800 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs text-silver-muted font-mono">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-orange-400" />
                        <span>{style.targetAges}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-silver" />
                        <span>{style.duration}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectStyle(style.name)}
                      className="w-full mt-2 py-3 rounded-xl bg-obsidian-850 hover:bg-orange-600 text-white font-display font-bold text-xs uppercase tracking-wider border border-silver/10 hover:border-transparent flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    >
                      <span>Join {style.name.split(' ')[0]} Batch</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
