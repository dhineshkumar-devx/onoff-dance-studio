import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation, Sparkles } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import BookingForm from './BookingForm';

export default function ContactMap() {
  return (
    <section id="contact" className="relative py-24 bg-obsidian-900 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-copper/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-silver/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-copper/30 text-copper-light text-xs font-mono uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            LOCATION & <span className="text-gradient-copper">ENQUIRIES</span>
          </h2>
          <p className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light">
            Conveniently situated in Raghava Nagar, Madipakkam. Step in for a studio tour or drop us a line below.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-copper to-silver rounded-full mt-4" />
        </div>

        {/* 2-Column Layout: Details & Map on left, On-page Registration Form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards + Google Map */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-obsidian-950 border border-silver/10 hover:border-copper/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-1">Studio Address</h4>
                  <p className="text-xs text-silver-muted leading-relaxed">
                    {studioConfig.contact.address}
                  </p>
                </div>
                <a
                  href={studioConfig.contact.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-[11px] font-mono text-copper-light hover:underline inline-flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-obsidian-950 border border-silver/10 hover:border-copper/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-1">Direct Call</h4>
                  <p className="text-xs text-silver-muted leading-relaxed">
                    Speak directly with lead masters for batch advice:
                  </p>
                  <div className="mt-2 flex flex-col gap-1">
                    <a href="tel:8870356852" className="text-xs text-copper-light font-mono font-semibold hover:underline">
                      +91 88703 56852
                    </a>
                    <a href="tel:9941878870" className="text-xs text-silver font-mono hover:underline">
                      +91 99418 78870
                    </a>
                  </div>
                </div>
                <span className="mt-4 text-[11px] font-mono text-emerald-400">
                  Tap to Call Now
                </span>
              </div>

              {/* Working Hours */}
              <div className="p-6 rounded-2xl bg-obsidian-950 border border-silver/10 hover:border-copper/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white mb-1">Studio Timings</h4>
                <p className="text-xs text-silver-muted leading-relaxed">
                  {studioConfig.contact.workingHours}
                </p>
                <span className="inline-block mt-3 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
                  Open 7 Days a Week
                </span>
              </div>

              {/* Email / WhatsApp */}
              <div className="p-6 rounded-2xl bg-obsidian-950 border border-silver/10 hover:border-copper/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-1">Chat on WhatsApp</h4>
                  <p className="text-xs text-silver-muted leading-relaxed">
                    Fast response within 15 minutes for questions & slots.
                  </p>
                </div>
                <a
                  href={`https://wa.me/91${studioConfig.contact.whatsapp}?text=Hi%20ON%20OFF%20DANCE%20STUDIO%2C%20I%20would%20like%20to%20know%20about%20classes`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-xs font-bold text-emerald-400 hover:underline"
                >
                  Message +91 88703 56852 →
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative rounded-3xl overflow-hidden border border-silver/15 shadow-2xl h-72 sm:h-80 w-full bg-obsidian-950">
              <iframe
                title="ON OFF DANCE STUDIO Location in Madipakkam Chennai"
                src={studioConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-obsidian-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-silver/15 text-[11px] font-mono text-silver flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-copper" />
                <span>Madipakkam, Chennai - 91</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Booking Form */}
          <div className="lg:col-span-6 w-full">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
