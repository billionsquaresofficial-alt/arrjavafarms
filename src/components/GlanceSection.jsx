import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, MapPin, Compass, ShieldCheck, Droplets, 
  Trees, Hammer, Zap, Waves, Sparkles, CheckCircle2 
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function GlanceSection() {
  const glanceCards = [
    {
      label: "Project Name",
      value: "ARRJAVA FARMS",
      subtext: "Official Project Presentation",
      icon: Sparkles
    },
    {
      label: "Developer",
      value: "ABHISTA™",
      subtext: "Abhista Real Estate Projects",
      icon: Building
    },
    {
      label: "Location",
      value: "Begumpet Village",
      subtext: "Near Patancheru, Mumbai Highway",
      icon: MapPin
    },
    {
      label: "Project Type",
      value: "Residential Conversion Plots",
      subtext: "Residential Open Plots with Clear Demarcation",
      icon: Compass
    },
    {
      label: "Zoning & Limits",
      value: "HMDA Limits & RRR Corridor",
      subtext: "Inside Regional Ring Road Growth Belt",
      icon: ShieldCheck
    },
    {
      label: "Construction Status",
      value: "Immediate House Construction",
      subtext: "Ready for Custom House / Retreat Building",
      icon: Hammer
    },
    {
      label: "Water Facility",
      value: "Bore & Manjeera Dual System",
      subtext: "Complete Dedicated Waterline Provision",
      icon: Droplets
    },
    {
      label: "Roads & Infrastructure",
      value: "Wet Mix Roads & Curbing",
      subtext: "Demarcated Curbing Stones & Street Lights",
      icon: Zap
    }
  ];

  return (
    <section id="glance" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            04 • Project at a Glance
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sand-50">
              Key Project <span className="text-gold-gradient">Specifications</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light">
              Verified parameters and structural specifications of the Arrjava Farms development.
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-forest-950 border border-gold-500/30 text-xs font-medium text-gold-300">
            <CheckCircle2 className="w-4 h-4 text-gold-400" />
            <span>100% Verified Project Data</span>
          </div>
        </div>

        {/* Specification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {glanceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-forest-950/80 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-gold-400/80 font-mono">
                      {card.label}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-forest-900 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-sand-100 group-hover:text-gold-300 transition-colors">
                    {card.value}
                  </h3>
                </div>
                <p className="text-xs text-sand-300 mt-4 pt-3 border-t border-forest-850 font-light">
                  {card.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-forest-950 via-forest-850 to-forest-950 border border-gold-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-sand-50">
              Ready for Your Dream Weekend Farm Home
            </h4>
            <p className="text-xs sm:text-sm text-sand-300 font-light max-w-2xl">
              Whether you envision a spacious weekend retreat, a private family home or a long-term residential investment, these residential conversion open plots offer the flexibility to build according to your requirements.
            </p>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href="#masterplan"
              className="px-6 py-3 rounded-full bg-forest-900 text-sand-100 text-xs font-semibold tracking-wider uppercase border border-gold-500/30 hover:border-gold-400 transition-all"
            >
              View Layout
            </a>
            <a
              href="#connectivity"
              className="px-6 py-3 rounded-full bg-gold-500 text-forest-950 text-xs font-bold tracking-wider uppercase hover:brightness-110 transition-all shadow-md"
            >
              Explore Location
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
