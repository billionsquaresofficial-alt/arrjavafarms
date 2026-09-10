import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Trees, Home, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyArrjavaSection() {
  const pillars = [
    {
      number: "01",
      title: "Strategic HMDA & RRR Location",
      desc: "Located inside HMDA limits and enclosed by the upcoming Regional Ring Road (RRR) corridor, benefiting from rapid infrastructure investments.",
      icon: TrendingUp
    },
    {
      number: "02",
      title: "Complete Freedom of Design",
      desc: "Residential conversion open plots give you total architectural freedom to build your bespoke farm retreat, country home, cottage, or legacy estate.",
      icon: Home
    },
    {
      number: "03",
      title: "Assured Dual Water Security",
      desc: "Equipped with both Bore and Manjeera water systems with dedicated piped distribution to ensure reliable year-round supply.",
      icon: Droplets
    },
    {
      number: "04",
      title: "Preserved Mango Orchard Environment",
      desc: "Live amongst mature fruit-bearing trees, lush avenue plantations, and unpolluted open skies just minutes from the city.",
      icon: Trees
    },
    {
      number: "05",
      title: "Curated Resort-Style Amenities",
      desc: "Enjoy a community clubhouse, crystal swimming pool, guest cottages, children's park, and a consecrated Lord Ganesha temple.",
      icon: Sparkles
    },
    {
      number: "06",
      title: "Backed by Abhista's Credibility",
      desc: "Developed by Abhista, renowned for thoughtful land development, legal transparency, and sustainable community master planning.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="why-arrjava" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            15 • Why Arrjava Farms?
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Six Pillars of <span className="text-gold-gradient">Enduring Value</span>
          </h2>
          <p className="text-sand-300 text-sm sm:text-base font-light leading-relaxed">
            The distinct combination of location, lifestyle, freedom, and developer trustworthiness that makes Arrjava Farms an exceptional choice.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-forest-900/70 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-gold-400/40 group-hover:text-gold-300 transition-colors">
                      {p.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest-800 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-sand-100 group-hover:text-gold-300 transition-colors mb-3">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-forest-800 flex items-center space-x-2 text-xs text-gold-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Project Advantage</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
