import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Hammer, ShieldCheck, Sparkles, Building2, Trees } from 'lucide-react';
import { DEVELOPMENT_TIMELINE } from '../data/projectData';

export default function DevelopmentStatusSection({ onOpenImageModal }) {
  return (
    <section id="status" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            14 • Current Development Status
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            On-Ground <span className="text-gold-gradient">Execution & Progress</span>
          </h2>
          <p className="text-sand-300 text-sm sm:text-base font-light leading-relaxed">
            Transparent milestones detailing active on-site works, completed infrastructure, and immediate construction readiness.
          </p>
        </div>

        {/* Development Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEVELOPMENT_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenImageModal(item.image, item.title)}
              className="rounded-3xl overflow-hidden bg-forest-950/80 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/90 backdrop-blur-md border border-gold-500/30 text-[10px] uppercase font-mono tracking-widest text-gold-300 font-semibold flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  <span>{item.status}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-forest-400">
                    {item.stage}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-sand-100 group-hover:text-gold-300 transition-colors mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-sand-300 mt-2 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-forest-850 flex items-center justify-between text-xs text-gold-400 font-mono">
                  <span>{item.date}</span>
                  <span className="text-forest-400">Click to Inspect</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Immediate Construction Readiness Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-forest-950 border border-gold-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-900 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0 shadow-lg">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-sand-50">
                Ready for Immediate Custom Home & Farm Construction
              </h4>
              <p className="text-xs text-sand-300 font-light mt-0.5">
                Plots are clearly pegged, road levels graded, and water/power provisions mapped for seamless construction.
              </p>
            </div>
          </div>
          <a
            href="#visit"
            className="px-6 py-2.5 rounded-full bg-gold-500 text-forest-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex-shrink-0 shadow-md"
          >
            Verify On Ground
          </a>
        </div>

      </div>
    </section>
  );
}
