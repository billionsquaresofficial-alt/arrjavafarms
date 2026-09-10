import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ZoomIn, Play, Filter, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/projectData';

export default function GallerySection({ onOpenImageModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Site & Land', 'Architecture & Layout', 'Temple & Culture', 'Lifestyle & Orchards', 'Videos'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory || (activeCategory === 'Videos' && item.type === 'video'));

  return (
    <section id="gallery" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            13 • Project Gallery
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Visual Archive of <span className="text-gold-gradient">Arrjava Farms</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Explore actual on-ground photography, architectural concept renders, consecrated temple sanctum, and video reels.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/10'
                    : 'bg-forest-900 text-sand-300 hover:text-sand-100 hover:bg-forest-850 border border-forest-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => onOpenImageModal(item.src, item.title, item.type)}
                className="rounded-3xl overflow-hidden bg-forest-900/80 border border-gold-500/15 hover:border-gold-400/50 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-gold-500/30 text-[10px] uppercase font-mono tracking-widest text-gold-300 font-semibold">
                    {item.category}
                  </div>

                  {/* Icon Emblem */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-forest-950/80 border border-gold-500/30 text-gold-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.type === 'video' ? <Play className="w-3.5 h-3.5 fill-gold-400" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif text-lg font-bold text-sand-50 group-hover:text-gold-300 transition-colors drop-shadow-md line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-forest-950/80 border-t border-forest-850">
                  <p className="text-xs text-sand-300 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
