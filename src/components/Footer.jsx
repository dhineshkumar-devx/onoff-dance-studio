import { ArrowUp, MessageCircle, MapPin, Phone, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';
import { studioConfig } from '../data/studioConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-copper/20 pt-16 pb-12 overflow-hidden text-silver-muted">
      {/* Decorative ambient background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-copper/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-obsidian-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src={studioConfig.assets.logo}
                  alt={studioConfig.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,107,0,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-white tracking-wider">
                  ON OFF <span className="text-gradient-copper">DANCE STUDIO</span>
                </span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-orange-400">
                  Madipakkam • Chennai
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-silver-muted font-light leading-relaxed max-w-sm mt-2">
              Chennai's premier dance academy. Empowering dancers across Western, Classical Bharatanatyam, and Zumba through technical excellence and stage confidence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={studioConfig.socials[0].href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-obsidian-900 hover:bg-copper border border-silver/10 hover:border-transparent text-silver hover:text-obsidian-950 flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={studioConfig.socials[1].href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-obsidian-900 hover:bg-emerald-600 border border-silver/10 hover:border-transparent text-silver hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={studioConfig.socials[2].href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-obsidian-900 hover:bg-red-600 border border-silver/10 hover:border-transparent text-silver hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={studioConfig.socials[3].href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-obsidian-900 hover:bg-blue-600 border border-silver/10 hover:border-transparent text-silver hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-2">
              Quick Navigation
            </h4>
            <a href="#about" className="text-xs hover:text-copper transition-colors">Studio Story</a>
            <a href="#styles" className="text-xs hover:text-copper transition-colors">Western & Classical Styles</a>
            <a href="#schedule" className="text-xs hover:text-copper transition-colors">Batches (Junior, Adult, Senior)</a>
            <a href="#why-us" className="text-xs hover:text-copper transition-colors">Why Choose Us</a>
            <a href="#trainers" className="text-xs hover:text-copper transition-colors">Lead Masters</a>
            <a href="#gallery" className="text-xs hover:text-copper transition-colors">Studio Gallery</a>
            <a href="#contact" className="text-xs hover:text-copper transition-colors">Location & Admissions</a>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-2">
              Visit Studio
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-silver-muted leading-relaxed">
              <MapPin className="w-4 h-4 text-copper shrink-0 mt-0.5" />
              <span>{studioConfig.contact.address}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-silver-muted mt-2">
              <Phone className="w-4 h-4 text-copper shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <a href="tel:8870356852" className="text-copper-light hover:underline font-mono">
                  +91 88703 56852
                </a>
                <a href="tel:9941878870" className="text-silver hover:underline font-mono">
                  +91 99418 78870
                </a>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-obsidian-900 border border-silver/10 text-[11px] font-mono text-silver">
              <strong className="text-copper-light">Timings:</strong> 6:00 AM – 9:30 PM (All 7 Days)
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-silver-muted/80">
          <p>© {new Date().getFullYear()} ON OFF DANCE STUDIO (ODS). All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <span>Crafted with rhythm in Chennai</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-obsidian-850 hover:bg-copper border border-silver/10 text-silver hover:text-obsidian-950 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
