import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, Compass, Droplets, Zap, Trees, ShieldCheck, 
  Sparkles, Layers, CheckCircle2, ChevronRight 
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      id: "immediate-construction",
      title: "Immediate House Construction",
      desc: "Plots ready for immediate construction so you can commence building your dream home, weekend farm retreat, or private residence without regulatory delays.",
      icon: Hammer,
      badge: "Ready to Build",
      image: "/assets/photos/open-plots-boundary.jpg"
    },
    {
      id: "dual-water",
      title: "Dual Water Facility (Bore & Manjeera)",
      desc: "Complete dual water infrastructure providing both abundant underground bore water and Manjeera municipal connection with dedicated pipeline network.",
      icon: Droplets,
      badge: "Water Security",
      image: "/assets/cropped/amenity-swimming-pool.jpg"
    },
    {
      id: "wet-mix-curbing",
      title: "Wet Mix Roads & Curbing Stones",
      desc: "Wide, smooth engineered wet-mix internal road network finished with protective yellow-black painted boundary curbing stones for clear plot demarcation.",
      icon: Compass,
      badge: "Infrastructure",
      image: "/assets/cropped/amenity-curbing.jpg"
    },
    {
      id: "street-lights",
      title: "Electricity & Street Lights",
      desc: "Dedicated power supply lines and illuminated designer street lamp posts lining all internal road boulevards for nighttime safety and aesthetics.",
      icon: Zap,
      badge: "24/7 Power",
      image: "/assets/cropped/amenity-lighting.jpg"
    },
    {
      id: "avenue-plantation",
      title: "Avenue & Mango Plantation",
      desc: "Preserved mature fruit-bearing mango trees paired with landscaped avenue green plantation along all plot boundaries, keeping the community naturally cool.",
      icon: Trees,
      badge: "Eco-Landscape",
      image: "/assets/photos/mango-orchard-curbing.jpg"
    },
    {
      id: "hmda-limits",
      title: "Inside HMDA & Upcoming RRR",
      desc: "Positioned within HMDA limits and situated right inside the upcoming Regional Ring Road corridor, ensuring unmatched capital appreciation.",
      icon: ShieldCheck,
      badge: "Location Value",
      image: "/assets/cropped/route-map.png"
    }
  ];

  return (
    <section id="features" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            08 • Project Features & Standards
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Engineered for <span className="text-gold-gradient">Enduring Quality</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Every detail at Arrjava Farms is developed to the highest benchmarks of durability, convenience, and natural aesthetics.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-gold-400 bg-forest-950 px-4 py-2 rounded-xl border border-gold-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Verified Project Deliverables</span>
          </div>
        </div>

        {/* Features 3x2 Grid with Imagery & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="rounded-3xl bg-forest-950/80 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 overflow-hidden shadow-xl group flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-forest-950/90 backdrop-blur-md border border-gold-500/30 text-[10px] uppercase tracking-widest font-mono text-gold-300 font-semibold">
                    {feature.badge}
                  </div>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-forest-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-sand-100 group-hover:text-gold-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-sand-300 mt-2.5 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-forest-850 flex items-center justify-between text-xs text-gold-400 font-medium">
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      <span>Verified Infrastructure</span>
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
