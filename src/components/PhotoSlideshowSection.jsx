import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Sparkles, Camera, MapPin, CheckCircle2 } from 'lucide-react';

export default function PhotoSlideshowSection({ onOpenImageModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: "temple-grand",
      title: "Consecrated Lord Ganesha Temple & Plaza",
      category: "Sacred Sanctum",
      badge: "Real Site Photo",
      location: "On-Site Spiritual Center",
      src: "/assets/photos/ganesha-temple-grand.jpeg",
      desc: "Actual on-ground photograph of the consecrated Lord Ganesha stone canopy with surrounding circular paved walkway, mature mango trees, and bamboo landscaping."
    },
    {
      id: "temple-pooja",
      title: "Vedic Temple Consecration & Floral Pooja",
      category: "Temple Rituals",
      badge: "Real Site Photo",
      location: "Temple Sanctum",
      src: "/assets/photos/ganesha-temple-pooja.jpg",
      desc: "Traditional Vedic pooja ceremony and floral sanctification blessing the land with positive divine spiritual energy for all future community residents."
    },
    {
      id: "orchard-curbing",
      title: "Mature Mango Grove with Road Kerbing Stones",
      category: "Orchard & Roads",
      badge: "Real Site Photo",
      location: "Internal Road Corridors",
      src: "/assets/photos/mango-orchard-curbing.jpg",
      desc: "Lush, mature fruit-bearing mango trees with finished painted boundary curbing stones along internal road corridors across the development."
    },
    {
      id: "plots-boundary",
      title: "Demarcated Open Plots Ready for Construction",
      category: "Open Plots",
      badge: "Real Site Photo",
      location: "Residential Sectors",
      src: "/assets/photos/open-plots-boundary.jpg",
      desc: "Levelled and clearly pegged residential conversion open plots with individual corner demarcations, ready for immediate custom house and farm retreat construction."
    },
    {
      id: "gazebo-lounge",
      title: "Outdoor Tensile Gazebo & Shaded Lounge",
      category: "Retreat Living",
      badge: "Real Site Photo",
      location: "Community Green Zone",
      src: "/assets/photos/gazebo-lounge.jpeg",
      desc: "Shaded tensile canopy seating pavilion set amidst natural mango trees for serene tea breaks, outdoor gatherings, and relaxing farm views."
    },
    {
      id: "cottage-sunset",
      title: "Weekend Guest Cottages Under Construction",
      category: "Development Progress",
      badge: "Real Site Photo",
      location: "Clubhouse Enclave",
      src: "/assets/photos/cottage-sunset.jpeg",
      desc: "Actual on-site construction progress of the weekend cottages and community stay facilities captured during a serene golden sunset."
    },
    {
      id: "entrance-arch",
      title: "Grand Entrance Arch Gate Architecture",
      category: "Entrance Architecture",
      badge: "Design Render",
      location: "Main Highway Boulevard",
      src: "/assets/cropped/entrance-arch-render.png",
      desc: "Architectural elevation of the grand curved timber arch gate with stone cladding, integrated security cabin, and paved boulevard."
    },
    {
      id: "amenity-pool",
      title: "Crystal Clear Resort Swimming Pool",
      category: "Clubhouse Amenities",
      badge: "Lifestyle Feature",
      location: "Recreation Hub",
      src: "/assets/cropped/amenity-swimming-pool.jpg",
      desc: "Resort-style crystal swimming pool with poolside deck loungers and surrounding lush green landscaping."
    }
  ];

  // Auto-play timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentIndex];

  return (
    <section id="slideshow" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            Dedicated Section • Site Photography Slideshow
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Headline & Slider Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              On-Ground <span className="text-gold-gradient">Photo Slideshow</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Immerse yourself in authentic on-ground site photographs capturing the sacred Ganesha temple, mature mango trees, and active development progress.
            </p>
          </div>

          {/* Autoplay & Direction Controls */}
          <div className="flex items-center space-x-3 bg-forest-900/80 p-1.5 rounded-2xl border border-gold-500/30">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-forest-850 hover:bg-forest-800 text-gold-400 transition-all"
              title={isPlaying ? "Pause Auto Slideshow" : "Play Auto Slideshow"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <span className="font-mono text-xs text-sand-300 px-2 font-semibold">
              {currentIndex + 1} / {slides.length}
            </span>

            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-forest-850 hover:bg-forest-800 text-sand-200 hover:text-gold-300 transition-all"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-forest-850 hover:bg-forest-800 text-sand-200 hover:text-gold-300 transition-all"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Showcase Slide Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-forest-900 shadow-2xl group">
          
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-forest-950">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.src}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

            {/* Top Info Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-forest-950/90 backdrop-blur-md border border-gold-500/40 text-[10px] font-mono uppercase tracking-widest text-gold-300 font-bold shadow-md">
                {current.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-forest-750 text-[10px] font-mono text-sand-200">
                {current.category}
              </span>
            </div>

            {/* Fullscreen Button Top Right */}
            <button
              onClick={() => onOpenImageModal(current.src, current.title)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-2xl bg-forest-950/85 backdrop-blur-md border border-gold-500/40 text-gold-300 hover:text-gold-100 hover:scale-110 transition-all shadow-lg"
              title="Open Fullscreen HD Image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Slide Navigation Arrow Overlays */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-forest-950/70 hover:bg-forest-950/90 text-gold-300 border border-gold-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-forest-950/70 hover:bg-forest-950/90 text-gold-300 border border-gold-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-2 text-gold-400 text-xs font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{current.location}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-sand-50 drop-shadow-md">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand-200 font-light mt-1.5 leading-relaxed drop-shadow line-clamp-2 sm:line-clamp-none">
                  {current.desc}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Progress Bar */}
          {isPlaying && (
            <div className="w-full h-1 bg-forest-900">
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-gold-400"
              />
            </div>
          )}

        </div>

        {/* Thumbnail Filmstrip Navigator */}
        <div className="mt-6 flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-thin">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(false);
              }}
              className={`relative flex-shrink-0 w-24 sm:w-32 aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                currentIndex === idx
                  ? 'border-gold-400 scale-105 shadow-lg shadow-gold-500/20'
                  : 'border-forest-800 opacity-60 hover:opacity-100 hover:border-gold-500/40'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest-950/20" />
              <div className="absolute bottom-1 left-1.5 right-1.5">
                <p className="text-[9px] font-sans font-medium text-sand-100 truncate text-left">
                  {slide.title}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
