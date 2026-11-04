import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import About from './components/About';
import DanceStyles from './components/DanceStyles';
import BatchSchedule from './components/BatchSchedule';
import WhyChooseUs from './components/WhyChooseUs';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import StudioAIAssistant from './components/StudioAIAssistant';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialStyle, setModalInitialStyle] = useState('');
  const [modalInitialBatch, setModalInitialBatch] = useState('');

  // Initialize Lenis smooth scroll and integrate with GSAP ScrollTrigger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  const openBooking = (style = '', batch = '') => {
    setModalInitialStyle(style);
    setModalInitialBatch(batch);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-silver antialiased selection:bg-orange-600 selection:text-white">
      {/* Page Load Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Elegant Orange Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenBooking={() => openBooking()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => openBooking()} />

        {/* Dance Styles Ticker */}
        <MarqueeStrip />

        {/* About Us + Studio Direction */}
        <About />

        {/* Dance Styles Cards (Western, Classical, Zumba) */}
        <DanceStyles onSelectStyle={(style) => openBooking(style)} />

        {/* Timetable & Batches (Junior, Adult, Senior) */}
        <BatchSchedule onBookBatch={(batch) => openBooking('', batch)} />

        {/* Why Choose Us 6-Pillar Grid */}
        <WhyChooseUs />

        {/* Founding Masters Showcase (R. Gopinath & Guru Priya) */}
        <Trainers onBookTrainer={(trainerName) => openBooking('', trainerName)} />

        {/* Photo Gallery & Lightbox */}
        <Gallery />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact, Timings, Google Maps, and On-Page Registration Form */}
        <ContactMap />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp and Quick Call Actions */}
      <FloatingActions />

      {/* Floating Interactive Studio AI Assistant */}
      <StudioAIAssistant onOpenBooking={() => openBooking()} />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialStyle={modalInitialStyle}
        initialBatch={modalInitialBatch}
      />
    </div>
  );
}
