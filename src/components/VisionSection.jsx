import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, ShieldCheck, Sun, Compass, Sparkles, Trees, Eye } from 'lucide-react';

export default function VisionSection() {
  const visionPillars = [
    {
      title: "Generational Land Ownership",
      desc: "True luxury is owning tangible, freehold earth in a planned sanctuary that grows in prestige and financial stature over decades.",
      icon: ShieldCheck,
    },
    {
      title: "Harmony With Living Nature",
      desc: "Living amidst mature mango trees, shaded avenues, and fresh unpolluted air while staying effortlessly connected to Hyderabad.",
      icon: Trees,
    },
    {
      title: "Architectural Autonomy",
      desc: "The absolute freedom to build your custom weekend home, single-story ranch, farm retreat, or multi-generational family residence.",
      icon: Feather,
    },
    {
      title: "Peaceful Weekend Living",
      desc: "A private family retreat where mornings start with birdsong and evenings end under open starlit skies away from city congestion.",
      icon: Sun,
    }
  ];

  return (
    <section id="vision" className="relative py-28 bg-forest-950 text-sand-50 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-forest-900/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            03 • The Vision & Philosophy
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Vision Hero Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-sand-50">
            Reclaiming the Essence of <span className="text-gold-gradient">Pure Earth</span> and Open Space
          </h2>
          <p className="text-sand-300 text-base sm:text-xl font-light leading-relaxed">
            Step into a world where elegance meets exclusivity. Our residential open plots are created for those who seek more than just an address — a lifestyle of quiet luxury, absolute privacy, and enduring value.
          </p>
        </div>

        {/* Large Editorial Quote & Split Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          <div className="lg:col-span-6 bg-gradient-to-br from-forest-900 to-forest-950 p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-2xl relative">
            <div className="text-gold-400/20 font-serif text-8xl absolute top-4 left-6 select-none">“</div>
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
                Philosophy of Arrjava
              </span>
              <p className="font-serif italic text-xl sm:text-2xl text-sand-100 leading-relaxed pt-2">
                Arrjava Farms is more than just a plot of land. It is an opportunity to own a space where you can create your own private home surrounded by greenery, while enjoying community amenities and convenient connectivity.
              </p>
              <div className="pt-4 border-t border-forest-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-sand-100">Abhista Development Vision</h4>
                  <p className="text-xs text-gold-400">Residential Conversion Open Plots</p>
                </div>
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/20 shadow-2xl group">
              <img
                src="/assets/photos/mango-orchard-curbing.jpg"
                alt="Arrjava Natural Orchard Setting"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs tracking-wider uppercase text-sand-200 font-mono">
                  Preserved Mango Avenues • Freedom to Build Your Dream Home
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of the Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-forest-900/60 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-800 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sand-100 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-sand-300 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
