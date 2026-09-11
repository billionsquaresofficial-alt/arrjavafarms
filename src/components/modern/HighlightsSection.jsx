import React from 'react';
import {
  Waves,
  Building,
  Home,
  Sun,
  Lightbulb,
  Hammer,
  Trees,
  Smile,
  Navigation,
  Droplets,
  Pipette,
  ShieldCheck
} from 'lucide-react';

export default function HighlightsSection() {
  const highlights = [
    {
      title: "Immediate House Construction",
      tag: "Ready to Build",
      desc: "Residential conversion open plots ready for you to commence building your dream country home or weekend retreat without delay.",
      icon: Hammer,
      highlight: true,
    },
    {
      title: "Bore & Manjeera Water Facility",
      tag: "Dual Water Security",
      desc: "Comprehensive dual water infrastructure combining high-yield deep borewells with official Manjeera water supply.",
      icon: Droplets,
      highlight: true,
    },
    {
      title: "Wet Mix Roads & Curbing Stones",
      tag: "Engineered Roads",
      desc: "Wide internal wet-mix road corridors lined with yellow-and-black painted boundary curbing stones for durability.",
      icon: Navigation,
    },
    {
      title: "Consecrated Ganesha Temple",
      tag: "Spiritual Center",
      desc: "Stone-carved Lord Ganesha temple shrine with paved circular amphitheater and bamboo landscaped surroundings.",
      icon: Sun,
      highlight: true,
    },
    {
      title: "Club House & Pavilion",
      tag: "Community Hub",
      desc: "Thoughtfully planned farm clubhouse designed for social gatherings, weekend events, and family celebrations.",
      icon: Building,
    },
    {
      title: "Swimming Pool",
      tag: "Leisure & Wellness",
      desc: "Crystal-clear recreational swimming pool set in natural surroundings for refreshing weekend afternoons.",
      icon: Waves,
    },
    {
      title: "Weekend Guest Cottages",
      tag: "Stay Cottages",
      desc: "Comfortable stay cottages for property owners and families to experience tranquil overnight stays amidst nature.",
      icon: Home,
    },
    {
      title: "Avenue Mango Plantation",
      tag: "Lush Greenery",
      desc: "Extensive preserved mango groves and curated avenue landscaping bringing clean air and serene greenery.",
      icon: Trees,
    },
    {
      title: "Parks & Children’s Play Area",
      tag: "Family Space",
      desc: "Dedicated green open spaces with safe play apparatus and shaded lawns for children and families to enjoy.",
      icon: Smile,
    },
    {
      title: "Street Lights & Electrification",
      tag: "Utilities",
      desc: "Comprehensive electrical network with modern illuminated street lamp posts along all internal avenues.",
      icon: Lightbulb,
    },
    {
      title: "Dedicated Waterline Provisions",
      tag: "Piped Water",
      desc: "Fully laid internal pipeline distribution network reaching individual plot boundaries.",
      icon: Pipette,
    },
    {
      title: "Inside HMDA & RRR Limits",
      tag: "Strategic Value",
      desc: "Located within the HMDA development zone and the upcoming Regional Ring Road corridor for exceptional capital growth.",
      icon: ShieldCheck,
      highlight: true,
    }
  ];

  return (
    <section id="highlights" className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-900 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
            Verified On-Ground Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4 tracking-tight">
            Comprehensive Project Highlights
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed font-sans">
            Every feature at Arrjava Farms is developed to provide you with the ideal balance of fertile nature, essential civic utilities, and lifestyle recreation.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-white border-emerald-800 shadow-md ring-1 ring-emerald-800/20 hover:shadow-xl'
                    : 'bg-white border-slate-200 hover:border-emerald-700 hover:shadow-lg shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        item.highlight
                          ? 'bg-emerald-800 text-amber-300'
                          : 'bg-slate-100 text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        item.highlight
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
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
