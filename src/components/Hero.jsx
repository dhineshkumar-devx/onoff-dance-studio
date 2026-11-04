import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';

export default function Hero({ onOpenBooking }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-obsidian-950"
    >
      {/* Calm, Cinematic Ambient Orange Glow (No chaotic moving spotlights) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-600/15 via-orange-950/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Elegant Location & Admission Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-orange-500/25 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-silver font-medium">
                Madipakkam • Chennai • Admissions Open
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-[-0.03em] text-white leading-[1.08] mb-6"
            >
              FEEL THE <span className="text-gradient-orange">RHYTHM.</span>
              <br />
              OWN THE <span className="font-luxury italic text-white font-normal tracking-normal">STAGE.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-silver-muted text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8"
            >
              Welcome to <strong className="text-white font-semibold">ON OFF DANCE STUDIO</strong>. Directed by{' '}
              <span className="text-orange-400 font-medium">Gopinath.R</span> &{' '}
              <span className="text-white font-medium">Natya Ilamani Guru Smt. Aishwarya Raja</span>. Elite training in{' '}
              <span className="text-orange-400 font-medium">Western & Freestyle</span>,{' '}
              <span className="text-silver font-medium">Classical Bharatanatyam</span>, and{' '}
              <span className="text-orange-400 font-medium">Zumba</span> across structured Junior, Adult, and Senior batches.
            </motion.p>

            {/* Dual Clean CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <MagneticButton
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm tracking-widest uppercase font-bold"
              >
                <span>Join a Batch</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <a
                href="#styles"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-obsidian-900 hover:bg-obsidian-850 text-silver hover:text-white font-display font-medium text-xs sm:text-sm tracking-wider uppercase border border-silver/15 hover:border-orange-500/50 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>Explore Classes</span>
                <ChevronDown className="w-4 h-4 text-orange-400" />
              </a>
            </motion.div>

            {/* Trust Micro-Bullets */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left w-full pt-4 border-t border-obsidian-800/80"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-silver-muted">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Gopinath.R & Smt. Aishwarya Raja</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-silver-muted">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Junior, Adult & Senior</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-silver-muted col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>100% Stage Opportunity</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Seamlessly Integrated Curved Emblem Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-md lg:max-w-none"
            >
              <TiltCard className="rounded-3xl bg-obsidian-900 border border-orange-500/25 p-7 md:p-8 shadow-2xl flex flex-col items-center text-center overflow-hidden">
                {/* Seamlessly Integrated Logo */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 mb-3 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-orange-600/10 blur-xl pointer-events-none" />
                  <img
                    src={studioConfig.assets.logo}
                    alt={studioConfig.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(234,88,12,0.35)] relative z-10"
                  />
                </div>

                {/* Studio Brand Name */}
                <h3 className="font-display font-black tracking-wider text-2xl text-white">
                  ON OFF <span className="text-gradient-orange">DANCE STUDIO</span>
                </h3>
                <span className="text-xs uppercase font-mono text-orange-400 tracking-[0.25em] mt-1 mb-6">
                  Madipakkam • Chennai - 91
                </span>

                {/* Founding Masters Spotlight Pill */}
                <div className="w-full bg-obsidian-850 rounded-2xl p-4 border border-silver/10 flex items-center justify-between gap-3">
                  <div className="flex items-center -space-x-3">
                    <img
                      src={studioConfig.assets.westernMaster}
                      alt="Gopinath.R (Choreographer & Media Artist)"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 object-top shadow-sm"
                    />
                    <img
                      src={studioConfig.assets.classicalMaster}
                      alt="Natya Ilamani Guru Smt. Aishwarya Raja"
                      className="w-12 h-12 rounded-full object-cover border-2 border-silver object-top shadow-sm"
                    />
                  </div>
                  <div className="text-left flex-1 pl-2">
                    <p className="text-xs font-semibold text-white">Two Founding Masters</p>
                    <p className="text-[11px] text-silver-muted font-mono truncate">Gopinath.R & Smt. Aishwarya Raja</p>
                  </div>
                  <div className="text-orange-400 font-mono font-bold text-xs bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/25">
                    Lead
                  </div>
                </div>

                {/* Studio Location Pill */}
                <div className="w-full mt-4 pt-4 border-t border-obsidian-800 flex items-center justify-between text-xs text-silver-muted">
                  <div className="flex items-center gap-1.5 text-left font-mono">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">Raghava Nagar 9th St - 91</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Active Studio
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden sm:flex flex-col items-center justify-center mt-12 text-silver-muted"
        >
          <a
            href="#about"
            className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-silver-muted/70 hover:text-orange-400 transition-colors"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-3.5 h-3.5 text-orange-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
