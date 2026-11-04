import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { studioConfig } from '../data/studioConfig';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian-950 text-white"
        >
          {/* Subtle radial ambient background glow */}
          <div className="absolute inset-0 bg-radial-spotlight opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Logo Emblem with Cinematic Orange Glow */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-orange-600/25 blur-xl pointer-events-none" />
              <img
                src={studioConfig.assets.logo}
                alt={studioConfig.name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,107,0,0.5)] relative z-10"
              />
            </motion.div>

            {/* Studio Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display font-black text-2xl md:text-3xl tracking-widest text-white"
            >
              ON OFF <span className="text-gradient-copper">DANCE STUDIO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3 }}
              className="text-xs uppercase tracking-[0.25em] text-silver-muted mt-2 font-mono"
            >
              Madipakkam • Chennai
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-48 h-1 bg-obsidian-800 rounded-full mt-8 overflow-hidden relative border border-silver/10">
              <motion.div
                className="h-full bg-gradient-to-r from-copper-light via-copper to-silver"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Counter display */}
            <span className="font-mono text-xs tracking-wider text-copper-light mt-3">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
