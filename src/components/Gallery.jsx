import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { studioConfig } from '../data/studioConfig';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Classical', 'Performances'];

  const filteredItems = studioConfig.gallery.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="relative py-28 bg-obsidian-950 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-850 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            <span>Moments in Motion</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            STUDIO & STAGE <span className="text-gradient-orange">GALLERY</span>
          </h2>
          <p className="text-silver-muted text-base sm:text-lg max-w-2xl mt-4 font-light">
            Real stage productions, mega competition showcases, and intense studio masterclasses across Chennai.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-5" />
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white font-bold shadow-orange-sm'
                  : 'bg-obsidian-900 text-silver-muted hover:text-white border border-silver/10 hover:border-orange-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-obsidian-900 border border-silver/10 hover:border-orange-500/50 transition-all duration-500 h-80 shadow-2xl hover:shadow-[0_10px_30px_-10px_rgba(234,88,12,0.3)]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Title & Zoom icon */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-obsidian-950/80 backdrop-blur-md text-orange-400 border border-orange-500/30">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-obsidian-900/90 border border-orange-500/40 flex items-center justify-center text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-black text-lg text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-silver-muted text-xs font-light mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dedicated Instagram Showcase Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-orange-500/30 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-orange-md shrink-0">
              <InstagramIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest uppercase text-orange-400">Instagram Community</span>
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                @on_off_dancestudio
              </h4>
              <p className="text-silver-muted text-xs sm:text-sm font-light mt-1 max-w-xl">
                Explore our daily practice reels, live competition victories, student spotlights, and behind-the-scenes rehearsals on Instagram.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/on_off_dancestudio/"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-7 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-orange-sm hover:shadow-orange-md transition-all duration-300 shrink-0 cursor-pointer"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-obsidian-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full bg-obsidian-900 rounded-3xl overflow-hidden border border-orange-500/35 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-obsidian-950/80 text-silver hover:text-white border border-silver/20 cursor-pointer transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative flex-1 max-h-[72vh] bg-black/90 flex items-center justify-center overflow-hidden p-2">
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                />
              </div>

              <div className="p-6 bg-obsidian-900 border-t border-obsidian-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display font-bold text-xl text-white">{selectedImage.title}</h4>
                  <p className="text-xs text-silver-muted mt-1">{selectedImage.caption || "ON OFF DANCE STUDIO live showcase"}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-wider px-3 py-1 rounded-full bg-obsidian-850 border border-orange-500/25">
                    {selectedImage.category}
                  </span>
                  <a
                    href="https://www.instagram.com/on_off_dancestudio/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-silver hover:text-orange-400 transition-colors flex items-center gap-1"
                  >
                    <span>@on_off_dancestudio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
