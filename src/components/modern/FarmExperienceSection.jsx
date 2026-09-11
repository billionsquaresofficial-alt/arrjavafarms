import React from 'react';
import { Trees, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function FarmExperienceSection({ onBookVisitClick }) {
  const plotTypes = [
    {
      name: "The Orchard Plot",
      size: "200 – 300 Sq. Yds",
      subtitle: "Compact Nature Retreat & Green Asset",
      features: [
        "Demarcated with painted curbing stones",
        "Mature fruit-bearing mango trees",
        "Piped water & borewell line connection",
        "Immediate residential house construction eligible",
      ],
      idealFor: "Ideal for a peaceful weekend cottage or starter high-growth land asset.",
    },
    {
      name: "The Premium Residential Plot",
      size: "400 – 600 Sq. Yds",
      subtitle: "Family Country Residence & Private Lawn",
      features: [
        "Ample space for spacious single-storey country residence",
        "Space for private lawn, gazebo & kitchen garden",
        "Dual water connection (Bore & Manjeera supply)",
        "Direct access to wide engineered wet-mix avenue roads",
      ],
      popular: true,
      idealFor: "Our most popular size for serene family living and weekend relaxation.",
    },
    {
      name: "The Heritage Estate Plot",
      size: "800 – 1200+ Sq. Yds",
      subtitle: "Expansive Multi-Generational Land Holding",
      features: [
        "Full private mango orchard canopy & natural green buffer",
        "Space for bespoke private estate, pool deck & expansive lawn",
        "Dual waterline infrastructure & boundary demarcations",
        "Prime location with high capital growth inside RRR corridor",
      ],
      idealFor: "For families desiring maximum privacy, space, and long-term land wealth.",
    },
  ];

  return (
    <section id="plots" className="py-20 sm:py-28 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#6d351a] bg-[#f7efe5] px-4 py-1.5 rounded-full border border-[#debfa5]">
            Residential Convertable Plots
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#16271e] mt-4 tracking-tight">
            Plot Sizes & Configurations
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed font-sans">
            Choose from carefully demarcated plot sizes set within preserved mango groves. Designed with full architectural freedom to construct your custom country residence, weekend home, or legacy property.
          </p>
        </div>

        {/* Plot Configurations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plotTypes.map((plot, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[2.5rem] p-7 sm:p-9 border transition-all duration-300 flex flex-col justify-between relative group ${
                plot.popular
                  ? 'border-[#205138] shadow-xl ring-2 ring-[#205138]/20'
                  : 'border-[#e4d9ca] shadow-xs hover:shadow-xl hover:border-[#205138]'
              }`}
            >
              {plot.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider font-extrabold bg-[#183d2a] text-amber-200 px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular Choice
                </span>
              )}

              <div>
                <div className="mb-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200/60 inline-block mb-3">
                    Convertable Open Plot
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#16271e]">
                    {plot.name}
                  </h3>
                  <div className="text-3xl font-extrabold text-[#6d351a] font-serif mt-2">
                    {plot.size}
                  </div>
                  <p className="text-xs text-stone-500 mt-1 font-medium">
                    {plot.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-3">
                  {plot.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-stone-500 italic mt-6 pt-4 border-t border-stone-100 leading-relaxed">
                  {plot.idealFor}
                </p>
              </div>

              <div className="pt-7">
                <button
                  onClick={onBookVisitClick}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2 ${
                    plot.popular
                      ? 'bg-[#183d2a] hover:bg-[#0f2a1b] text-white shadow-md'
                      : 'bg-[#f4eee5] hover:bg-[#183d2a] hover:text-white text-stone-800'
                  }`}
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Development Standard Banner */}
        <div className="mt-12 bg-white rounded-[2rem] p-6 sm:p-7 border border-[#e4d9ca] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">
                100% Clear Title & Verified Demarcations
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Every plot is clearly marked with boundary stones, road curbings, and provisioned water lines.
              </p>
            </div>
          </div>
          <button
            onClick={onBookVisitClick}
            className="shrink-0 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-6 py-3.5 rounded-full transition shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <span>Request Price Sheet & Dimensions</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
