import React from 'react';
import { Home, Trees, TrendingUp, Sparkles, CheckCircle2, Droplets, ShieldCheck } from 'lucide-react';

export default function AboutSection({ onBookVisitClick }) {
  const pillars = [
    {
      title: "Complete Architectural Freedom",
      desc: "Design your spacious country home, weekend residence, or enduring green asset exactly according to your family's vision.",
      icon: Home,
    },
    {
      title: "Preserved Mature Mangoes",
      desc: "Live nestled amidst full-grown, fruit-bearing mango trees that bring natural cooling shade and fresh, unpolluted breeze.",
      icon: Trees,
    },
    {
      title: "High-Growth Investment Belt",
      desc: "Inside HMDA limits and adjacent to the upcoming Regional Ring Road (RRR) corridor for rapid long-term land wealth.",
      icon: TrendingUp,
    },
    {
      title: "Community Lifestyle Amenities",
      desc: "Enjoy the consecrated Lord Ganesha temple, swimming pool, community clubhouse, and guest stay cottages.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#6d351a] bg-[#f5ede2] px-3.5 py-1 rounded-full border border-[#debfa5]">
            Natural Orchard Living
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#16271e] mt-4 tracking-tight">
            Create Your Private Nature Sanctuary <span className="text-[#1a5135] italic">Your Way</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-sans">
            Arrjava Farms gives you the freedom to own a piece of peaceful nature without sacrificing urban convenience. Whether you want a sunny weekend country retreat, a multi-generational family residence, or a strategic land holding, these residential convertable open plots offer complete flexibility.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 4 Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#faf6ef] p-6 rounded-[1.75rem] border border-[#e4d9c8] shadow-xs hover:border-[#1a5135] hover:shadow-md transition-all group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-white border border-[#decbb7] text-[#6d351a] flex items-center justify-center mb-4 group-hover:bg-[#1a5135] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#162a1f]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Farm Banner */}
            <div className="bg-[#193a29] text-amber-50 p-6 sm:p-7 rounded-[2rem] shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#23583c]">
              <div>
                <p className="text-sm font-bold text-amber-200">
                  Ready for Immediate House Construction
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  Clear title demarcated residential conversion open plots with dual water supply (Bore & Manjeera).
                </p>
              </div>
              <button
                onClick={onBookVisitClick}
                className="shrink-0 bg-amber-400 hover:bg-amber-300 text-[#193a29] text-xs font-bold px-5 py-3 rounded-full transition shadow-xs cursor-pointer"
              >
                Inquire Plots
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-12 gap-4">
              
              {/* Primary Image: Gazebo & Orchard */}
              <div className="col-span-8 rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative group h-72 sm:h-80">
                <img
                  src="/assets/photos/gazebo-lounge.jpeg"
                  alt="Outdoor Gazebo Canopy amidst Greenery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded text-amber-300">
                    On-Site Photo
                  </span>
                  <p className="text-sm font-bold mt-1.5 font-serif">Shaded Gazebo Pavilion</p>
                </div>
              </div>

              {/* Secondary Image: Mango Avenue */}
              <div className="col-span-4 rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative group h-72 sm:h-80">
                <img
                  src="/assets/photos/mango-orchard-curbing.jpg"
                  alt="Lush Mango Trees and Boundary Demarcation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-3 right-3 text-white">
                  <p className="text-xs font-bold font-serif">Mango Groves</p>
                </div>
              </div>

              {/* Tertiary Image: Consecrated Ganesha Temple */}
              <div className="col-span-12 rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative group h-52 sm:h-60">
                <img
                  src="/assets/photos/ganesha-temple-grand.jpeg"
                  alt="Consecrated Lord Ganesha Temple Shrine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-[#6d351a] px-2.5 py-1 rounded text-amber-100">
                      Community Sanctum
                    </span>
                    <p className="text-base font-serif font-bold mt-1">Consecrated Lord Ganesha Temple</p>
                    <p className="text-xs text-stone-200">Set in a scenic circular paved amphitheater on-site</p>
                  </div>
                  <span className="text-xs font-bold text-amber-300 hidden sm:block">
                    Fully Completed On Site
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
