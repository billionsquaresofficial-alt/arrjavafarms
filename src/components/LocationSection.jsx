import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, TrendingUp, Landmark, School, Hospital, Factory, ShieldAlert, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function LocationSection() {
  const growthDrivers = [
    {
      title: "HMDA & RRR Growth Axis",
      desc: "Inside HMDA limits and strategically enclosed within the upcoming Regional Ring Road (RRR) economic growth corridor.",
      icon: TrendingUp
    },
    {
      title: "Commercial & Industrial Hubs",
      desc: "Surrounded by powerhouse industrial corridors including Patancheru, BHEL, MRF Tyres, and Mahindra Tractor Plant.",
      icon: Factory
    },
    {
      title: "Mega Integrated Townships",
      desc: "Just 4 KM from Aurobindo Sansa County Integrated Township, fueling rapid socioeconomic and civic infrastructure expansion.",
      icon: Landmark
    },
    {
      title: "Premier Education & Healthcare",
      desc: "5 minutes from TRR Medical College, Vignan International School, with Gitam University and Woxsen University in close proximity.",
      icon: School
    }
  ];

  return (
    <section id="location" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            05 • Strategic Location
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Headline and Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Positioned in the <span className="text-gold-gradient">Patancheru–Begumpet</span> High-Growth Corridor
            </h2>
            <p className="text-sand-200 text-base sm:text-lg font-light leading-relaxed">
              Patancheru, one of Hyderabad’s fastest-growing hubs, beautifully blends connectivity, commerce, and comfort. With its booming residential projects, proximity to IT corridors, and strong industrial base, it is fast emerging as a preferred destination for both living and long-term land investment.
            </p>
            <p className="text-sand-300 text-sm font-light leading-relaxed">
              Arrjava Farms is located at <strong className="text-gold-300 font-medium">Begumpet Village</strong>, just 1 KM from the Narasapur State Highway and 10 KM from the Outer Ring Road (ORR), offering the ultimate balance between undisturbed natural living and effortless city access.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-forest-900 via-forest-850 to-forest-900 p-8 rounded-3xl border border-gold-500/30 shadow-2xl space-y-5">
            <div className="flex items-center space-x-3 text-gold-400">
              <MapPin className="w-6 h-6" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold">
                Strategic Geolocation
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-sand-50">
              Begumpet Village, Patancheru Belt
            </h3>
            <p className="text-xs text-sand-300 leading-relaxed font-light">
              Connected directly via the Mumbai Highway (NH 65), Narasapur State Highway, and Outer Ring Road (ORR). The upcoming Regional Ring Road (RRR) places Arrjava Farms at the sweet spot of rapid capital appreciation.
            </p>
            <div className="pt-2">
              <a
                href={PROJECT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gold-500 text-forest-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps Pin</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Location Drivers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthDrivers.map((driver, idx) => {
            const Icon = driver.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-forest-900/60 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-forest-800 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-sand-100 mb-2">
                    {driver.title}
                  </h4>
                  <p className="text-xs text-sand-300 leading-relaxed font-light">
                    {driver.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
