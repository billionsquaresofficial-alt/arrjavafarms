import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink, ZoomIn, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONNECTIVITY_DATA, PROJECT_INFO } from '../data/projectData';

export default function ConnectivitySection({ onOpenImageModal }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="connectivity" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            06 • Connectivity & Route Visualizer
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Effortless Connectivity to <span className="text-gold-gradient">Every Lifeline</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Strategic proximity to key arterial expressways, educational campuses, industrial hubs, and the upcoming Regional Ring Road.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onOpenImageModal('/assets/cropped/route-map-full.png', 'Official Route & Connectivity Map')}
              className="px-5 py-2.5 rounded-full bg-forest-950 border border-gold-500/30 text-gold-300 hover:border-gold-400 text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Full Route Map</span>
            </button>
            <a
              href={PROJECT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 flex items-center space-x-2 transition-all shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>Live Navigation</span>
            </a>
          </div>
        </div>

        {/* 2-Column Layout: Official Route Map & Interactive Distance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Route Map Visual Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-forest-950 shadow-2xl flex-1 group">
              <img
                src="/assets/cropped/route-map.png"
                alt="Arrjava Farms Route Map"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover Inspection Overlay */}
              <div 
                onClick={() => onOpenImageModal('/assets/cropped/route-map-full.png', 'Official Route & Connectivity Map')}
                className="absolute inset-0 bg-forest-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer backdrop-blur-xs"
              >
                <div className="px-5 py-2.5 rounded-full bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-2xl">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to Inspect High-Res Map</span>
                </div>
              </div>

              {/* Location Watermark Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-forest-950/90 backdrop-blur-md border border-gold-500/20 flex items-center justify-between text-xs font-mono">
                <span className="text-sand-300">Begumpet Village • Patancheru Belt</span>
                <span className="text-gold-400 font-semibold">HMDA LIMITS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Milestones & Distances */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {CONNECTIVITY_DATA.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-forest-950 border-gold-400 shadow-xl shadow-gold-500/10'
                    : 'bg-forest-950/60 border-gold-500/15 hover:border-gold-500/30'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 px-2 py-0.5 rounded bg-forest-900 border border-gold-500/20">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-sand-50">
                      {item.destination}
                    </h3>
                  </div>

                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="font-serif text-2xl font-bold text-gold-300 leading-none">
                      {item.distance}
                    </div>
                    <div className="text-[11px] text-sand-400 font-mono mt-1">
                      {item.time}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-sand-300 mt-2 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Highway Corridor Breadcrumbs */}
        <div className="mt-12 p-6 rounded-2xl bg-forest-950/80 border border-gold-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-sand-300">
            <span className="text-gold-400 font-bold">Corridor Network:</span>
            <span>Financial District / Gachibowli</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            <span>Miyapur</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            <span>Patancheru (ORR)</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            <span>Narasapur Hwy</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-gold-300 font-bold">Arrjava Farms</span>
          </div>
          <div className="text-xs text-gold-400 font-semibold">
            Inside Upcoming RRR Corridor
          </div>
        </div>

      </div>
    </section>
  );
}
