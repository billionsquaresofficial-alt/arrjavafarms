import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, MapPin, ShieldCheck, Compass, Sparkles, ExternalLink, Award } from 'lucide-react';
import { ABHISTA_INFO, PROJECT_INFO } from '../data/projectData';

export default function AbhistaSection() {
  return (
    <section id="developer" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            16 • About ABHISTA
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Corporate Brand & Profile */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-950 border border-gold-500/30 text-xs text-gold-300 font-mono">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>Project Developer & Promoter</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Crafting Sustainable Living Ecosystems with <span className="text-gold-gradient">Uncompromising Integrity</span>
            </h2>

            <p className="text-sand-200 text-base font-light leading-relaxed">
              <strong className="text-sand-50 font-medium">{ABHISTA_INFO.name}</strong> is a dedicated real estate development company committed to creating master-planned farm layouts, residential conversion projects, and lifestyle communities in Hyderabad’s prime expansion corridors.
            </p>

            <p className="text-sand-300 text-sm font-light leading-relaxed">
              Every Abhista project is anchored by thorough legal clarity, engineered on-ground infrastructure, and a focus on nature-centric master planning to ensure enduring pride of ownership.
            </p>

            {/* Corporate Address & Contact Card */}
            <div className="p-6 rounded-2xl bg-forest-950/80 border border-gold-500/20 shadow-xl space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-400">Headquarters</h4>
                  <p className="text-xs sm:text-sm text-sand-200 mt-1 font-light">
                    {ABHISTA_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-forest-850 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-sand-300">
                  <Globe className="w-4 h-4 text-gold-400" />
                  <span>{ABHISTA_INFO.website}</span>
                </div>
                <a
                  href={PROJECT_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-gold-400 hover:text-gold-300 font-medium"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Development Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {ABHISTA_INFO.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-forest-950/70 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-sand-100 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono text-gold-400/60 font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
