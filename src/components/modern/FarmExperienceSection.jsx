import React, { useState } from 'react';
import { Sun, Trees, Waves, Sunset, Moon, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FarmExperienceSection({ onBookVisitClick }) {
  const [activeTab, setActiveTab] = useState('experience');

  const dailyMoments = [
    {
      time: "06:30 AM",
      title: "Morning Birdsong & Consecrated Temple Darshan",
      desc: "Wake up to natural birds chirping and morning mist. Offer peaceful morning prayers at the carved stone Lord Ganesha temple shrine.",
      icon: Sun,
      color: "bg-[#faefe3] text-[#7a3e1d] border-[#e8cbb0]",
    },
    {
      time: "09:30 AM",
      title: "Walk Through Mature Mango Groves",
      desc: "Stroll along wide internal wet-mix avenues framed by mature mango trees. Breathe 100% pure, unpolluted countryside air.",
      icon: Trees,
      color: "bg-[#e8f1eb] text-[#144229] border-[#b8d6c3]",
    },
    {
      time: "01:30 PM",
      title: "Pool Dip & Clubhouse Relaxation",
      desc: "Cool off in the crystal-clear swimming pool nestled in nature, followed by quiet leisure time at the community clubhouse.",
      icon: Waves,
      color: "bg-[#eaf3f8] text-[#1c5575] border-[#c0dbea]",
    },
    {
      time: "05:30 PM",
      title: "Sunset Tea at the Shaded Gazebo Lounge",
      desc: "Watch the golden sun dip below the horizon with evening tea under the tensile canopy gazebo pavilion.",
      icon: Sunset,
      color: "bg-[#fcf1e3] text-[#934415] border-[#eecbb0]",
    },
    {
      time: "08:30 PM",
      title: "Overnight Stay in Cozy Farm Cottages",
      desc: "Spend a peaceful night in comfortable guest cottages under unpolluted starry skies, away from Hyderabad traffic and noise.",
      icon: Moon,
      color: "bg-[#eeeaf8] text-[#47307e] border-[#d2c9ea]",
    },
  ];

  const plotTypes = [
    {
      name: "The Orchard Plot",
      size: "200 – 300 Sq. Yds",
      subtitle: "Compact Weekend Farming Retreat",
      features: [
        "Demarcated with painted curbing stones",
        "Mature fruit-bearing mango trees",
        "Piped water & borewell line connection",
        "Immediate house construction eligible",
      ],
      idealFor: "Ideal for a weekend farm getaway or starter farmland asset.",
    },
    {
      name: "The Homestead Farm",
      size: "400 – 600 Sq. Yds",
      subtitle: "Family Country Home & Organic Garden",
      features: [
        "Ample space for single-storey farm retreat",
        "Space for organic vegetable kitchen garden",
        "Dual water connection (Bore & Manjeera)",
        "Direct access to wide wet-mix avenue roads",
      ],
      popular: true,
      idealFor: "Our most popular size for peaceful weekend family living.",
    },
    {
      name: "The Heritage Estate",
      size: "800 – 1200+ Sq. Yds",
      subtitle: "Spacious Multi-Generational Farmland",
      features: [
        "Full private mango orchard canopy",
        "Space for private gazebo, lawn & outdoor deck",
        "Maximum privacy & green buffer zones",
        "High capital growth inside RRR corridor",
      ],
      idealFor: "For families desiring complete privacy and long-term land wealth.",
    },
  ];

  return (
    <section id="plots" className="py-20 sm:py-28 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#6d351a] bg-[#f7efe5] px-4 py-1.5 rounded-full border border-[#debfa5]">
            Farmland Lifestyle & Options
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#16271e] mt-4 tracking-tight">
            The Arrjava Farm Experience
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed font-sans">
            Farmland living is about slowing down, connecting with the earth, and enjoying uninterrupted quality time with family surrounded by natural fruit groves.
          </p>

          {/* Toggle Tab */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-[#183d2a] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#dfd3c2]'
              }`}
            >
              A Day on the Farm
            </button>
            <button
              onClick={() => setActiveTab('plots')}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'plots'
                  ? 'bg-[#183d2a] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#dfd3c2]'
              }`}
            >
              Farm Plot Sizes
            </button>
          </div>
        </div>

        {/* Tab 1: A Day on the Farm (Timeline) */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto space-y-4">
            {dailyMoments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-[2rem] border border-[#e5dcd0] shadow-xs hover:shadow-md hover:border-[#183d2a] transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group"
                >
                  {/* Time Badge */}
                  <div className="w-24 shrink-0">
                    <span className="text-xs font-extrabold font-serif text-[#5c2c16] bg-[#f9efe2] px-3 py-1 rounded-lg border border-[#e8d2bd]">
                      {item.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#16271e] group-hover:text-[#183d2a] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Farm Plot Sizes */}
        {activeTab === 'plots' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plotTypes.map((plot, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-[2.5rem] p-6 sm:p-8 border transition-all flex flex-col justify-between relative group ${
                  plot.popular
                    ? 'border-[#205138] shadow-xl ring-2 ring-[#205138]/20'
                    : 'border-[#e4d9ca] shadow-xs hover:shadow-lg'
                }`}
              >
                {plot.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider font-extrabold bg-[#183d2a] text-amber-200 px-4 py-1.5 rounded-full shadow-sm">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-bold text-[#16271e]">
                      {plot.name}
                    </h3>
                    <div className="text-2xl font-extrabold text-[#6d351a] font-serif mt-1">
                      {plot.size}
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5 font-medium">
                      {plot.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 space-y-2.5">
                    {plot.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-stone-500 italic mt-5 pt-3 border-t border-stone-100">
                    {plot.idealFor}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onBookVisitClick}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5 ${
                      plot.popular
                        ? 'bg-[#183d2a] hover:bg-[#0f2a1b] text-white shadow-md'
                        : 'bg-[#f4eee5] hover:bg-[#183d2a] hover:text-white text-stone-800'
                    }`}
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
