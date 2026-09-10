import React from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, Home, Sparkles, Trees, Zap, Compass, 
  Droplets, ShieldCheck, Heart, Users, SunMedium 
} from 'lucide-react';
import { AMENITIES_CATALOG } from '../data/projectData';

export default function AmenitiesSection({ onOpenImageModal }) {
  return (
    <section id="amenities" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            09 • Project Amenities
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Curated Lifestyle & <span className="text-gold-gradient">Recreation Amenities</span>
          </h2>
          <p className="text-sand-300 text-sm sm:text-base font-light leading-relaxed">
            Step into a community designed with exclusive amenities that elevate everyday life into a serene vacation experience.
          </p>
        </div>

        {/* Amenities Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES_CATALOG.map((amenity, idx) => (
            <div
              key={idx}
              onClick={() => onOpenImageModal(amenity.image, amenity.title)}
              className="rounded-3xl overflow-hidden bg-forest-900/60 border border-gold-500/15 hover:border-gold-400/50 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-gold-500/30 text-[10px] uppercase tracking-widest font-mono text-gold-300">
                  {amenity.category}
                </div>

                <div className="absolute bottom-3 left-4">
                  <h3 className="font-serif text-xl font-bold text-sand-50 group-hover:text-gold-300 transition-colors drop-shadow-md">
                    {amenity.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                  {amenity.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-forest-800 flex items-center justify-between text-xs text-gold-400">
                  <span>Click to view visual</span>
                  <span className="font-mono text-[11px]">Verified Amenity</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Amenity Checklist Pills */}
        <div className="mt-16 p-8 rounded-3xl bg-forest-900 border border-gold-500/20 shadow-2xl space-y-4">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Complete Verified Project Highlights</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {[
              "Swimming Pool", "Club House", "Guest Cottages", "Ganesha Temple", 
              "Street Lights", "Immediate Construction", "Avenue Plantation", "Children's Play Area", 
              "Wet Mix Roads", "Curbing Stones", "Bore & Manjeera Water", "Waterline Provision"
            ].map((item, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-forest-950 border border-gold-500/10 text-center text-xs text-sand-200 font-medium hover:border-gold-400/30 transition-colors">
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
