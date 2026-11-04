import React from 'react';

export default function MarqueeStrip() {
  const items = [
    "WESTERN DANCE",
    "MASTER: R. GOPINATH",
    "CLASSICAL BHARATANATYAM",
    "ACHARYA: GURU PRIYA",
    "ZUMBA FITNESS",
    "URBAN HIP-HOP & FREESTYLE",
    "JUNIOR BATCH (4-12 YRS)",
    "ADULT BATCH (13-35 YRS)",
    "SENIOR BATCH (35+ YRS)",
    "MADIPAKKAM • CHENNAI - 91",
  ];

  return (
    <div className="relative py-3.5 bg-obsidian-900 border-y border-orange-500/20 overflow-hidden">
      {/* Edge gradient fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {/* First track */}
        <div className="flex items-center gap-8 shrink-0">
          {items.map((text, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-8">
              <span className="font-display font-bold tracking-widest text-xs sm:text-sm text-silver/80 hover:text-orange-400 transition-colors cursor-default uppercase">
                {text}
              </span>
              <span className="text-orange-500 text-xs">◆</span>
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite scroll */}
        <div className="flex items-center gap-8 shrink-0 ml-8" aria-hidden="true">
          {items.map((text, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-8">
              <span className="font-display font-bold tracking-widest text-xs sm:text-sm text-silver/80 hover:text-orange-400 transition-colors cursor-default uppercase">
                {text}
              </span>
              <span className="text-orange-500 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
