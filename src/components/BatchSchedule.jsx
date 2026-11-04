import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import MagneticButton from './MagneticButton';

export default function BatchSchedule({ onBookBatch }) {
  const [selectedBatchId, setSelectedBatchId] = useState('junior');

  const selectedBatchInfo = studioConfig.batches.find((b) => b.id === selectedBatchId);
  const scheduleItems = studioConfig.schedule[selectedBatchId] || [];

  return (
    <section id="schedule" className="relative py-24 bg-obsidian-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Structured Progression</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            BATCHES & <span className="text-gradient-orange">TIMETABLE</span>
          </h2>
          <p className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light">
            Convenient weekday and weekend slots curated for different age groups and skill trajectories.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4" />
        </div>

        {/* 3 Batch Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {studioConfig.batches.map((batch) => {
            const isSelected = selectedBatchId === batch.id;
            return (
              <button
                key={batch.id}
                onClick={() => setSelectedBatchId(batch.id)}
                className={`relative rounded-2xl p-5 text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-obsidian-850 to-obsidian-800 border-orange-500 shadow-orange-sm'
                    : 'bg-obsidian-950/60 border-silver/10 hover:border-silver/30 text-silver-muted'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-orange-600 text-white font-bold' : 'bg-obsidian-800 text-silver-muted'
                    }`}>
                      {batch.badge}
                    </span>
                    <span className="text-xs font-mono text-silver-muted">{batch.ageGroup}</span>
                  </div>
                  <h3 className={`font-display font-black text-xl ${isSelected ? 'text-white' : 'text-silver'}`}>
                    {batch.name}
                  </h3>
                  <p className="text-xs text-silver-muted mt-1.5 font-light line-clamp-2">
                    {batch.tagline}
                  </p>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeBatchGlow"
                    className="absolute -bottom-1 left-6 right-6 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Batch Details & Timetable */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBatchId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-obsidian-950 border border-orange-500/25 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto"
          >
            {/* Batch Header Overview */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-obsidian-800">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {selectedBatchInfo?.name} Schedule
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-500/15 text-orange-400 border border-orange-500/25">
                    {selectedBatchInfo?.ageGroup}
                  </span>
                </div>
                <p className="text-silver-muted text-sm mt-1 max-w-2xl font-light">
                  {selectedBatchInfo?.description}
                </p>
              </div>

              <MagneticButton
                onClick={() => onBookBatch(selectedBatchInfo?.name)}
                className="px-6 py-3 text-xs uppercase tracking-wider shrink-0 font-bold"
              >
                <span>Enroll in {selectedBatchInfo?.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Timetable Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {scheduleItems.map((slot, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-obsidian-900 border border-silver/10 hover:border-orange-500/40 p-5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Days Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-obsidian-850 text-orange-400 text-xs font-mono font-medium mb-3">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      <span>{slot.day}</span>
                    </div>

                    <h4 className="font-display font-black text-lg text-white group-hover:text-orange-400 transition-colors mb-2">
                      {slot.style}
                    </h4>

                    {/* Time Slot */}
                    <div className="flex items-center gap-2 text-xs font-mono text-silver mb-2">
                      <Clock className="w-3.5 h-3.5 text-silver-muted" />
                      <span>{slot.time}</span>
                    </div>

                    {/* Trainer */}
                    <div className="flex items-center gap-2 text-xs text-silver-muted">
                      <User className="w-3.5 h-3.5 text-orange-400" />
                      <span>Master: <strong className="text-silver font-medium">{slot.trainer}</strong></span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-obsidian-800 flex items-center justify-between text-[11px] font-mono text-silver-muted">
                    <span>{slot.hall}</span>
                    <span className="text-emerald-400">Active Admissions</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Inclusions summary */}
            <div className="mt-8 pt-6 border-t border-obsidian-800 flex flex-wrap items-center justify-between gap-4 text-xs text-silver-muted font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Makeup sessions provided for missed classes with advance notice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Direct admission with personalized master assessment</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
