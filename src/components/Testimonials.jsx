import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = studioConfig.testimonials;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-obsidian-900 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-copper/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-copper/30 text-copper-light text-xs font-mono uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Real Stories from Madipakkam</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            WHAT OUR <span className="text-gradient-copper">DANCERS SAY</span>
          </h2>
          <p className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light">
            Hear from proud parents, enthusiastic adults, and senior fitness enthusiasts who found their rhythm at ODS.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-copper to-silver rounded-full mt-4" />
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          {/* Card */}
          <div className="relative rounded-3xl bg-obsidian-950 border border-copper/30 p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            {/* Background quote emblem */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-copper/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between h-full"
              >
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-copper text-copper" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-silver text-base sm:text-xl font-light italic leading-relaxed mb-8">
                  "{current.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-obsidian-800">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-copper/60 shadow-copper-sm"
                  />
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-copper-light font-mono">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-copper shadow-copper-sm' : 'w-2 bg-obsidian-700 hover:bg-silver-muted'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-obsidian-850 hover:bg-copper border border-silver/10 hover:border-transparent text-silver hover:text-obsidian-950 flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-obsidian-850 hover:bg-copper border border-silver/10 hover:border-transparent text-silver hover:text-obsidian-950 flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
