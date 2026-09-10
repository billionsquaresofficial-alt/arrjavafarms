import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Building2, Trees, Droplets, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function IntroSection() {
  return (
    <section id="intro" className="relative py-28 bg-forest-900 overflow-hidden border-t border-b border-gold-500/15">
      {/* Subtle Background Foliage Watermark */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-cover opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url('/assets/cropped/arrjava-badge.png')` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950/80 px-3 py-1 rounded-full border border-gold-500/20">
            02 • Introducing Arrjava Farms
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sand-50 leading-tight">
              A Serene Living Ecosystem of <span className="text-gold-gradient">Open Residential Plots</span>
            </h2>

            <p className="text-sand-200 text-base sm:text-lg leading-relaxed font-light">
              <strong className="text-gold-300 font-medium">Arrjava Farms</strong> is a premium residential conversion open-plot development by <strong className="text-sand-50 font-medium">Abhista</strong>, designed for those who want the freedom to build their own dream home while enjoying peaceful, green, and well-planned surroundings.
            </p>

            <div className="p-6 rounded-2xl bg-forest-950/70 border border-gold-500/20 shadow-xl space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
                Four Pillars of the Development
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-800 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-sand-100">Where Is It?</h4>
                    <p className="text-xs text-sand-300 mt-0.5">Begumpet Village, Near Patancheru & Mumbai Highway.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-800 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-sand-100">Development Type</h4>
                    <p className="text-xs text-sand-300 mt-0.5">Residential Conversion Open Plots with clear demarcations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-800 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-sand-100">The Setting</h4>
                    <p className="text-xs text-sand-300 mt-0.5">Mature mango groves, avenue plantations, and serene greenery.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-800 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-sand-100">What Makes It Special?</h4>
                    <p className="text-xs text-sand-300 mt-0.5">Clubhouse, pool, consecrated temple, and ready construction.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-sand-300 italic border-l-2 border-gold-400/50 pl-4 py-1">
              “Invest in Premium Residential Open Plots – Secure Location, High Returns, and Freedom to Build Your Dream Home. A Smart Choice for Future Growth!”
            </p>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-forest-950 shadow-2xl group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/cropped/entrance-arch-render.png"
                  alt="Arrjava Farms Entrance Arch"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-forest-950/85 backdrop-blur-md border border-gold-400/40 text-[11px] font-semibold text-gold-300 tracking-wider uppercase shadow-lg">
                Grand Arch Entrance
              </div>

              <div className="p-6 bg-gradient-to-t from-forest-950 via-forest-950/90 to-transparent">
                <div className="flex items-center justify-between text-xs text-sand-300 mb-2 font-mono">
                  <span>PROJECT BY ABHISTA</span>
                  <span className="text-gold-400 font-bold">HMDA LIMITS</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-sand-100">
                  Secured, Gated Community Planning
                </h3>
                <p className="text-xs text-sand-300 mt-2 line-clamp-2">
                  Grand entrance archway with security cabin, paved boulevard, manicured curbs, and illuminated streetscapes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
