import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/91${studioConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hi ON OFF DANCE STUDIO, I want to enquire about batch admissions & class schedules!"
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.6)] transform hover:scale-105 transition-all duration-300 focus:outline-none"
        aria-label="Chat with Master on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-obsidian-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-silver/10 shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Floating Mobile Call Button */}
      <a
        href={`tel:${studioConfig.contact.primaryPhone}`}
        className="group relative sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-copper to-copper-dark text-obsidian-950 shadow-copper-md transform hover:scale-105 transition-all duration-300 focus:outline-none"
        aria-label="Call Studio Now"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
