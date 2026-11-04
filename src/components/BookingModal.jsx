import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

export default function BookingModal({ isOpen, onClose, initialStyle = '', initialBatch = '' }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-obsidian-900 rounded-3xl border border-copper/40 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-obsidian-850/80 text-silver-muted hover:text-white border border-silver/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-2 sm:p-4">
            <BookingForm
              isModal={true}
              initialStyle={initialStyle}
              initialBatch={initialBatch}
              onSuccessClose={onClose}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
