import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MapPin, ArrowRight } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import MagneticButton from './MagneticButton';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracker for active state
      const sections = ['hero', 'about', 'styles', 'schedule', 'why-us', 'trainers', 'gallery', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Styles", href: "#styles", id: "styles" },
    { label: "Batches", href: "#schedule", id: "schedule" },
    { label: "Why ODS", href: "#why-us", id: "why-us" },
    { label: "Masters", href: "#trainers", id: "trainers" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-obsidian-950/95 via-obsidian-950/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center">
                <img
                  src={studioConfig.assets.logo}
                  alt={studioConfig.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(249,115,22,0.35)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-wider text-base sm:text-lg text-white group-hover:text-orange-400 transition-colors leading-tight">
                  ON OFF <span className="text-gradient-orange">DANCE STUDIO</span>
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-silver-muted hidden xs:inline-block">
                  Madipakkam • Chennai
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs xl:text-sm font-medium tracking-wide transition-colors py-1 ${
                    activeSection === link.id
                      ? 'text-orange-400 font-semibold'
                      : 'text-silver-muted hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Right CTAs (Call + Enroll Button) */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${studioConfig.contact.primaryPhone}`}
                className="flex items-center gap-2 text-xs font-mono font-medium text-silver-muted hover:text-orange-400 transition-colors px-3 py-2 rounded-lg hover:bg-obsidian-850"
                title="Direct Master Phone Call"
              >
                <div className="w-7 h-7 rounded-full bg-obsidian-850 flex items-center justify-center text-orange-400 border border-orange-500/25">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="hidden md:inline">{studioConfig.contact.primaryPhone}</span>
              </a>

              <MagneticButton
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 text-xs tracking-wider uppercase font-bold"
              >
                <span>Join a Batch</span>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="text-[11px] font-mono font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/35 px-3 py-1.5 rounded-full"
              >
                Enroll
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-obsidian-850 border border-silver/10 flex items-center justify-center text-silver hover:text-orange-400 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 lg:hidden bg-obsidian-950/98 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Top Close indicator */}
            <div className="flex items-center justify-between pb-6 border-b border-obsidian-800">
              <div className="flex items-center gap-3">
                <img src={studioConfig.assets.logo} alt="Logo" className="w-10 h-10 object-contain rounded-full" />
                <div>
                  <h3 className="font-display font-black text-white text-sm">ON OFF DANCE STUDIO</h3>
                  <p className="text-[10px] text-orange-400 font-mono">Madipakkam, Chennai</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-obsidian-800 text-silver-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links list */}
            <nav className="flex flex-col gap-2 py-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * idx }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30 font-semibold'
                      : 'text-silver hover:bg-obsidian-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </motion.a>
              ))}
            </nav>

            {/* Quick Actions at Bottom */}
            <div className="mt-auto pt-6 border-t border-obsidian-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-display font-black text-xs uppercase tracking-widest text-white flex items-center justify-center gap-2 shadow-orange-md"
              >
                <span>Reserve Batch Admission</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${studioConfig.contact.primaryPhone}`}
                  className="py-3 px-2 rounded-xl bg-obsidian-900 border border-silver/10 text-silver text-xs font-mono font-medium flex items-center justify-center gap-1.5 hover:border-orange-500/40"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>Call Master</span>
                </a>
                <a
                  href={`https://wa.me/91${studioConfig.contact.whatsapp}?text=Hi%20ON%20OFF%20DANCE%20STUDIO%2C%20I%20am%20interested%20in%20batch%20admission!`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-start gap-2 text-[11px] text-silver-muted mt-2 font-mono">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{studioConfig.contact.address}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
