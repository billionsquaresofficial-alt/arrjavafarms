import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Compass, Wind, Sparkles, Feather, Coffee, Smile } from 'lucide-react';

export default function LifestyleSection() {
  const moments = [
    {
      time: "06:30 AM",
      title: "Quiet Golden Mornings",
      desc: "Awaken to the rustle of mango leaves and pure, unpolluted air. Enjoy your morning tea on a wide veranda overlooking open green expanses.",
      icon: Sun,
      tag: "Tranquility"
    },
    {
      time: "11:00 AM",
      title: "Family Weekends & Orchard Strolls",
      desc: "Watch children play freely in secure open spaces, pick fresh fruits from mature mango trees, and unwind with loved ones in shaded gazebos.",
      icon: Smile,
      tag: "Family Living"
    },
    {
      time: "05:00 PM",
      title: "Community Recreation & Temple Peace",
      desc: "Take a refreshing dip in the crystal swimming pool, stroll along tree-lined avenues, and find spiritual stillness at the Ganesha temple.",
      icon: Wind,
      tag: "Wellness"
    },
    {
      time: "08:30 PM",
      title: "Open Starry Night Skies",
      desc: "Gather around outdoor lounge decks under clear, unpolluted constellations — a restorative sanctuary just minutes from the city.",
      icon: Moon,
      tag: "Pure Escape"
    }
  ];

  return (
    <section id="lifestyle" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            10 • The Arrjava Lifestyle
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A Life of <span className="text-gold-gradient">Unrushed Elegance</span> and Open Skies
          </h2>
          <p className="text-sand-200 text-base sm:text-lg font-light leading-relaxed">
            Arrjava Farms is designed to offer the sanctuary your soul craves — a private, peaceful retreat where time slows down and every weekend becomes an enriching celebration of nature.
          </p>
        </div>

        {/* 24-Hour Lifestyle Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {moments.map((moment, idx) => {
            const Icon = moment.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-forest-950/80 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-gold-400 bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
                      {moment.time}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest-900 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-sand-400">
                    {moment.tag}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-sand-100 group-hover:text-gold-300 transition-colors mt-1 mb-3">
                    {moment.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                    {moment.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-forest-850 text-[11px] text-forest-500 group-hover:text-gold-400 transition-colors font-mono">
                  Arrjava Living Experience
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-width Lifestyle Immersion Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-forest-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
                The Sanctuary You Deserve
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-sand-50 leading-tight">
                Build a Heritage Home Where Your Children Run Free and Your Parents Find Serenity
              </h3>
              <p className="text-sand-300 text-sm sm:text-base font-light leading-relaxed">
                Whether you build a weekend leisure home, a custom farm retreat, or a peaceful retirement residence, Arrjava Farms provides the spacious plot infrastructure and serene natural ecosystem to bring that dream to fruition.
              </p>
              <div className="flex items-center space-x-6 pt-2">
                <div className="flex items-center space-x-2 text-xs text-sand-200">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Fresh Unpolluted Air</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-sand-200">
                  <Feather className="w-4 h-4 text-gold-400" />
                  <span>Complete Privacy</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden">
              <img
                src="/assets/photos/gazebo-lounge.jpeg"
                alt="Arrjava Lifestyle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-forest-950 via-transparent to-transparent" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
