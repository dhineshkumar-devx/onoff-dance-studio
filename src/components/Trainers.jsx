import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ArrowRight, Sparkles, BookOpen, Film, Flame, Star, Quote } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';

export default function Trainers({ onBookTrainer }) {
  const [activeTab, setActiveTab] = useState({
    'trainer-classical': 'profile',
    'trainer-western': 'profile'
  });

  const toggleTab = (trainerId, tabName) => {
    setActiveTab((prev) => ({
      ...prev,
      [trainerId]: tabName
    }));
  };

  return (
    <section id="trainers" className="relative py-28 bg-obsidian-900 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-850 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>Direct Master Mentorship</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            THE ARTISTIC DIRECTORS & <span className="text-gradient-orange">MASTERS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light"
          >
            Learn directly from distinguished visionaries holding recognized university master's degrees, state titles, and active media choreography careers.
          </motion.p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-5" />
        </div>

        {/* 2 Masters Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          {studioConfig.trainers.map((trainer, idx) => {
            const currentTab = activeTab[trainer.id] || 'profile';
            const isClassical = trainer.id === 'trainer-classical';

            return (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col h-full rounded-3xl bg-obsidian-950/90 border border-silver/10 hover:border-orange-500/40 transition-all duration-500 shadow-2xl overflow-hidden hover:shadow-[0_15px_40px_-15px_rgba(234,88,12,0.25)]"
              >
                {/* Subtle top ambient rim light on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Master Visual Spotlight Container */}
                <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden bg-obsidian-900">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[0.98] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/45 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/50 via-transparent to-transparent" />

                  {/* Top Badges Bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    {/* Left Conferred / Role Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-obsidian-950/85 backdrop-blur-md text-orange-400 border border-orange-500/30 shadow-md">
                      {isClassical ? (
                        <>
                          <Award className="w-3.5 h-3.5 text-orange-400" />
                          <span>Title: Natya Ilamani</span>
                        </>
                      ) : (
                        <>
                          <Film className="w-3.5 h-3.5 text-orange-400" />
                          <span>Choreographer & Media Artist</span>
                        </>
                      )}
                    </span>

                    {/* Right Domain Tag */}
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-obsidian-950/75 backdrop-blur-md text-silver border border-silver/20">
                      {trainer.role}
                    </span>
                  </div>

                  {/* Master Identity Overlay over bottom of image */}
                  <div className="absolute bottom-5 left-6 right-6 z-10">
                    {isClassical ? (
                      <div>
                        <span className="text-orange-400 font-luxury text-sm tracking-widest uppercase block mb-1">
                          Natya Ilamani Guru.
                        </span>
                        <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                          smt. Aishwarya Raja
                        </h3>
                        <p className="text-silver-muted text-xs font-mono tracking-wider mt-1.5">
                          BE., Dip in Bharatanatyam., MFA in Bharatanatyam.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <span className="text-orange-400 font-mono text-xs tracking-widest uppercase block mb-1">
                          Lead Western Master
                        </span>
                        <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                          Gopinath.R
                        </h3>
                        <p className="text-silver-muted text-xs font-mono tracking-wider mt-1.5">
                          Freestyle & Cinematic Dancer | Choreographer | Media Artist
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content & Details Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Official Degree & Credential Badges Strip */}
                    <div className="mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-silver-muted block mb-2.5">
                        {isClassical ? "Official Degrees & Credentials" : "Professional Disciplines & Media Experience"}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {trainer.degrees.map((deg, dIdx) => (
                          <motion.span
                            key={dIdx}
                            whileHover={{ y: -2 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-medium bg-obsidian-900 border border-orange-500/25 text-silver group-hover:border-orange-500/40 hover:text-white transition-all shadow-sm"
                          >
                            <Sparkles className="w-3 h-3 text-orange-400 shrink-0" />
                            <span>{deg}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Master Quote Banner */}
                    <div className="relative mb-6 p-4 rounded-2xl bg-obsidian-900/80 border border-silver/10 italic text-silver-muted text-xs sm:text-sm font-light leading-relaxed flex gap-3">
                      <Quote className="w-5 h-5 text-orange-400 shrink-0 mt-0.5 opacity-60" />
                      <p>"{trainer.quote}"</p>
                    </div>

                    {/* Interactive Sub-Tabs for Profile & Highlights */}
                    <div className="flex border-b border-obsidian-800 mb-5">
                      <button
                        onClick={() => toggleTab(trainer.id, 'profile')}
                        className={`pb-2.5 px-3 text-xs font-mono uppercase tracking-wider transition-colors relative cursor-pointer ${
                          currentTab === 'profile'
                            ? 'text-orange-400 font-bold'
                            : 'text-silver-muted hover:text-silver'
                        }`}
                      >
                        <span>Master Biography</span>
                        {currentTab === 'profile' && (
                          <motion.div
                            layoutId={`tabIndicator-${trainer.id}`}
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                          />
                        )}
                      </button>
                      <button
                        onClick={() => toggleTab(trainer.id, 'highlights')}
                        className={`pb-2.5 px-3 text-xs font-mono uppercase tracking-wider transition-colors relative cursor-pointer ${
                          currentTab === 'highlights'
                            ? 'text-orange-400 font-bold'
                            : 'text-silver-muted hover:text-silver'
                        }`}
                      >
                        <span>Career Highlights</span>
                        {currentTab === 'highlights' && (
                          <motion.div
                            layoutId={`tabIndicator-${trainer.id}`}
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                          />
                        )}
                      </button>
                    </div>

                    {/* Tab Panels */}
                    <AnimatePresence mode="wait">
                      {currentTab === 'profile' ? (
                        <motion.div
                          key="profile"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                          className="min-h-[120px]"
                        >
                          <p className="text-silver-muted text-xs sm:text-sm font-light leading-relaxed">
                            {trainer.bio}
                          </p>
                          <div className="mt-4 pt-3 border-t border-obsidian-800 flex items-center justify-between text-xs font-mono text-silver-muted">
                            <span className="text-orange-400 font-medium">Domain: {trainer.role}</span>
                            <span>{trainer.experience}</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="highlights"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                          className="min-h-[120px] space-y-2.5"
                        >
                          {trainer.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2.5 text-xs text-silver">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{ach}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-6 mt-6 border-t border-obsidian-800">
                    <button
                      onClick={() => onBookTrainer(isClassical ? "Guru Smt. Aishwarya Raja" : "Gopinath.R")}
                      className="w-full py-4 rounded-2xl bg-obsidian-900 hover:bg-orange-600 text-white font-display font-black text-xs uppercase tracking-widest border border-silver/15 hover:border-transparent flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-orange-sm cursor-pointer group/btn"
                    >
                      <span>
                        {isClassical
                          ? "Enroll with Guru Smt. Aishwarya Raja"
                          : "Enroll with Master Gopinath.R"}
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
