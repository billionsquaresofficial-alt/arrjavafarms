import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, MapPin, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function HeroSection({ onOpenWalkthrough }) {
  const [isVideoBg, setIsVideoBg] = useState(false);

  const scrollToNext = () => {
    const nextEl = document.getElementById('intro');
    if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-950 pt-20 pb-16">
      {/* Background Media with Slow Cinematic Zoom & Ambient Overlays */}
      <div className="absolute inset-0 z-0">
        {isVideoBg ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-75"
            src="/assets/videos/walkthrough-3d.mp4"
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-10000 ease-out animate-pulse-subtle"
            style={{ backgroundImage: `url('/assets/cropped/entrance-arch-render.png')` }}
          />
        )}
        
        {/* Layered Luxury Gradient Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-transparent to-forest-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-forest-950/60 to-forest-950" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Abhista Developer Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-forest-900/80 border border-gold-400/30 backdrop-blur-md mb-6 shadow-xl"
        >
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold">
            Project by ABHISTA™
          </span>
          <span className="text-forest-500 font-serif">|</span>
          <span className="text-[11px] sm:text-xs text-sand-300 tracking-wider">
            Begumpet Village, Patancheru
          </span>
        </motion.div>

        {/* Arrjava Farms Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-gold-400/40 shadow-2xl mb-6 bg-forest-900/60 backdrop-blur-sm group cursor-pointer hover:border-gold-400 transition-all duration-500"
          onClick={() => setIsVideoBg(!isVideoBg)}
          title="Click to toggle ambient video view"
        >
          <img 
            src="/assets/cropped/arrjava-badge.png" 
            alt="Arrjava Farms" 
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500" 
          />
        </motion.div>

        {/* Main Presentation Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-sand-50 mb-4 leading-none"
        >
          ARRJAVA <span className="text-gold-gradient">FARMS</span>
        </motion.h1>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-serif italic text-lg sm:text-2xl md:text-3xl text-gold-200/90 max-w-3xl mb-4 font-light leading-relaxed"
        >
          “Find your peace while embracing the city's vibrant pulse”
        </motion.p>

        {/* Verified Development Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xs sm:text-sm md:text-base text-sand-300 uppercase tracking-[0.2em] font-medium max-w-2xl mb-8"
        >
          Residential Conversion Open Plots <span className="text-gold-400">@</span> Near Patancheru, Mumbai Highway
        </motion.p>

        {/* Verified Key Pillars Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-3xl"
        >
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-900/60 border border-gold-500/20 text-xs text-sand-200 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Inside HMDA Limits & RRR Corridor</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-900/60 border border-gold-500/20 text-xs text-sand-200 backdrop-blur-sm">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>1 KM from Narasapur Highway</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-900/60 border border-gold-500/20 text-xs text-sand-200 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Immediate House Construction Ready</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Watch 3D Walkthrough */}
          <button
            onClick={onOpenWalkthrough}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-forest-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2.5 shadow-xl shadow-gold-500/15 hover:brightness-110 active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 fill-forest-950" />
            <span>Experience 3D Walkthrough</span>
          </button>

          {/* Explore Presentation */}
          <button
            onClick={scrollToNext}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-forest-900/80 hover:bg-forest-800 text-sand-100 font-semibold text-sm tracking-wide border border-gold-500/30 hover:border-gold-400/60 flex items-center justify-center space-x-2 transition-all backdrop-blur-md"
          >
            <span>Explore Presentation</span>
            <ChevronDown className="w-4 h-4 text-gold-400" />
          </button>
        </motion.div>

        {/* Background Video/Image Switcher pill */}
        <div className="mt-8 flex items-center space-x-2 text-[11px] text-sand-400">
          <span>Background:</span>
          <button 
            onClick={() => setIsVideoBg(false)}
            className={`px-2 py-0.5 rounded ${!isVideoBg ? 'bg-gold-500/20 text-gold-300 font-medium' : 'hover:text-sand-200'}`}
          >
            Entrance Arch
          </button>
          <span>•</span>
          <button 
            onClick={() => setIsVideoBg(true)}
            className={`px-2 py-0.5 rounded ${isVideoBg ? 'bg-gold-500/20 text-gold-300 font-medium' : 'hover:text-sand-200'}`}
          >
            Live 3D Motion
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gold-400/80 hover:text-gold-300 flex flex-col items-center space-y-1 z-20 cursor-pointer"
        aria-label="Scroll to next chapter"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-sand-400">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
