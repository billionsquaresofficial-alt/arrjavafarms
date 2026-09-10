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
    <section id="highlights" className="py-20 sm:py-28 bg-[#f5ede2]/60 border-y border-[#e2d5c3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#6d351a] bg-[#faefe3] px-4 py-1.5 rounded-full border border-[#debfa5]">
            Verified On-Ground Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#16271e] mt-4 tracking-tight">
            Comprehensive Project Highlights
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed font-sans">
            Every feature at Arrjava Farms is developed to provide you with the ideal balance of fertile nature, essential civic amenities, and weekend leisure.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-[2rem] border transition-all duration-300 relative group flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-gradient-to-br from-white via-[#fcfbf9] to-[#f4ece1] border-[#d8c3ad] hover:border-[#6d351a] shadow-sm hover:shadow-xl'
                    : 'bg-white border-[#e5dcd0] hover:border-[#205138] hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        item.highlight
                          ? 'bg-[#183d2a] text-amber-200'
                          : 'bg-[#f4efe8] text-[#6d351a] group-hover:bg-[#183d2a] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        item.highlight
                          ? 'bg-[#f7efe5] text-[#6d351a] border border-[#debfa5]'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#16271e] group-hover:text-[#183d2a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
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
