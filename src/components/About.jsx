import React from 'react';
import { Flame, MapPin, Phone, CheckCircle2, Navigation, ShieldCheck, Award, Sparkles, Users } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import TiltCard from './TiltCard';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-obsidian-900 overflow-hidden">
      {/* Subtle, Calm Ambient Orange Warmth */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Artistry & Direction</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            CRAFTING PASSION INTO <span className="text-gradient-orange">PERFORMANCE</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4" />
        </div>

        {/* 2-Column Streamlined Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-silver-muted leading-relaxed text-base sm:text-lg font-light">
            <p className="text-xl sm:text-2xl text-white font-display font-bold leading-snug">
              Directed by <span className="text-gradient-orange">Gopinath.R</span> and <span className="text-white">Natya Ilamani Guru Smt. Aishwarya Raja</span>, ON OFF DANCE STUDIO is Madipakkam’s premier academy for artistic movement.
            </p>
            <p>
              We unite two contrasting worlds under one roof: the explosive power of modern <strong className="text-white">Western & Urban Street</strong> choreography and the sacred, rhythmic geometry of <strong className="text-white">Classical Bharatanatyam</strong>.
            </p>
            <p>
              From 4-year-old pre-teens in our Junior Batch to working professionals and seniors, we provide strict student-to-master ratios, acoustic sprung flooring, and guaranteed stage performances across Chennai.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-silver">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Sprung dance floors for joint protection</span>
              </div>
              <div className="flex items-center gap-2.5 text-silver">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Direct mentorship by founding masters</span>
              </div>
              <div className="flex items-center gap-2.5 text-silver">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Annual theater & sabha stage shows</span>
              </div>
              <div className="flex items-center gap-2.5 text-silver">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Capped batch sizes for personal focus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Studio Location & Hotline Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <TiltCard className="rounded-3xl overflow-hidden border border-orange-500/25 bg-obsidian-950 p-7 md:p-8 shadow-2xl flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-obsidian-850 mb-6">
                  <div className="flex items-center gap-3">
                    <img src={studioConfig.assets.logo} alt="Logo" className="w-10 h-10 rounded-full object-contain" />
                    <div>
                      <h4 className="font-display font-black text-white text-base">STUDIO HEADQUARTERS</h4>
                      <p className="text-[11px] font-mono text-orange-400 uppercase tracking-wider">Madipakkam • Chennai - 91</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="space-y-4 font-mono">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-silver-muted font-sans">Location:</p>
                      <p className="text-xs sm:text-sm text-white font-medium mt-0.5 leading-relaxed">{studioConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-obsidian-850">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-silver-muted font-sans">Direct Hotline:</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a href="tel:8870356852" className="text-xs sm:text-sm text-orange-400 font-bold hover:underline">88703 56852</a>
                        <span className="text-silver-muted">/</span>
                        <a href="tel:9941878870" className="text-xs sm:text-sm text-silver font-medium hover:underline">99418 78870</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-obsidian-850 flex items-center justify-between">
                <span className="text-xs font-mono text-silver-muted">Timings: 6 AM – 9:30 PM (7 Days)</span>
                <a
                  href={studioConfig.contact.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 font-bold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Map Directions</span>
                </a>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Studio Excellence & Infrastructure Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-obsidian-800">
          <div className="rounded-2xl p-6 bg-obsidian-950/70 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Sprung Wooden Flooring</h4>
              <p className="text-xs text-silver-muted leading-relaxed font-light">
                Professional acoustics-treated dance floor designed to absorb impact and protect joints across all age batches.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400/80 mt-4 block">Safety & Posture First</span>
          </div>

          <div className="rounded-2xl p-6 bg-obsidian-950/70 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Direct Master Mentorship</h4>
              <p className="text-xs text-silver-muted leading-relaxed font-light">
                Direct instruction by Gopinath.R and Natya Ilamani Guru Smt. Aishwarya Raja with zero delegation to junior subs.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400/80 mt-4 block">Authentic Training</span>
          </div>

          <div className="rounded-2xl p-6 bg-obsidian-950/70 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">100% Stage Opportunities</h4>
              <p className="text-xs text-silver-muted leading-relaxed font-light">
                Guaranteed exposure in grand annual theater productions, cultural sabhas, television shoots, and mega festivals.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400/80 mt-4 block">Stage Confidence</span>
          </div>

          <div className="rounded-2xl p-6 bg-obsidian-950/70 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Capped Batch Discipline</h4>
              <p className="text-xs text-silver-muted leading-relaxed font-light">
                Strict master-to-student ratios across Junior, Adult, and Senior batches ensuring individual rhythm corrections.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400/80 mt-4 block">Personal Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
