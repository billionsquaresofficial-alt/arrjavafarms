import React from 'react';
import { Trees, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MapPin, Droplets, Compass, FileCheck } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export default function FarmExperienceSection({ onBookVisitClick }) {
  const plotSpecs = [
    {
      title: "Standard Plot Dimension",
      value: "151.25 Sq. Yds",
      desc: "Approx. 1,361.25 Sq. Ft. The ideal footprint for a private country retreat, lawn, and mango grove.",
    },
    {
      title: "Demarcation & Curbing",
      value: "Painted Curb Stones",
      desc: "Every 151.25 Sq. Yd plot is clearly pegged and framed with yellow-black painted boundary curbings.",
    },
    {
      title: "Dual Water Security",
      value: "Bore & Manjeera",
      desc: "Direct dedicated waterline connection to plot boundary from high-yield borewells & official Manjeera supply.",
    },
    {
      title: "Road Access & Frontage",
      value: "30' & 40' Wide Avenues",
      desc: "Direct access onto engineered internal wet-mix road corridors with modern street lighting.",
    },
    {
      title: "Preserved Greenery",
      value: "Mature Mango Trees",
      desc: "Established, fruit-bearing mango trees preserved within each plot for natural cooling and shade.",
    },
    {
      title: "Legal & Regulatory",
      value: "HMDA & RRR Limits",
      desc: "100% Clear title, spot registration eligibility, and immediate residential house construction permitted.",
    },
  ];

  return (
    <section id="plots" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border border-emerald-300/80 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Standardized Plotted Venture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Exclusively 151.25 Sq. Yds Plots
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-sans">
            Arrjava Farms offers standardized <strong className="text-emerald-900 font-bold">151.25 Sq. Yds (approx. 1,361.25 Sq. Ft)</strong> residential convertable plots nestled within mature fruit-bearing mango orchards. Each plot is fully demarcated, infrastructure-ready, and legally approved for immediate construction.
          </p>
        </div>

        {/* Heroic 151.25 Sq Yd Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: Plot Details & Specs */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-xs uppercase tracking-widest font-extrabold bg-emerald-900 text-emerald-100 px-3.5 py-1.5 rounded-full">
                    Only Available Size
                  </span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Immediate Registration Eligible
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                    151.25 Sq. Yds Residential Convertable Plot
                  </h3>
                  <p className="text-2xl font-bold text-emerald-800 font-serif">
                    1,361.25 Sq. Ft • Standard Layout Dimension
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-2">
                    Designed to give families the perfect balance of green sanctuary, private garden space, and manageable home footprint. Located near the Consecrated Lord Ganesha Temple and scenic avenue plantation roads.
                  </p>
                </div>

                {/* 2x3 Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                  {plotSpecs.map((spec, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">{spec.title}</span>
                      </div>
                      <p className="text-sm font-bold text-emerald-900 mt-1 font-serif">{spec.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">{spec.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <button
                  onClick={onBookVisitClick}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex items-center gap-2"
                >
                  <span>Book 151.25 Sq. Yd Site Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+918125125055"
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-4 rounded-xl border border-slate-300 transition"
                >
                  Call Advisor: 8125125055
                </a>
              </div>
            </div>

            {/* Right Col: On-Site Visual & Features */}
            <div className="lg:col-span-5 bg-emerald-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold">
                    Actual Site Development
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-white mt-1">
                    On-Ground Demarcated Plots
                  </h4>
                  <p className="text-xs text-emerald-100/80 mt-1">
                    Levelled, pegged, and ready for immediate possession and commencement of construction.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden border-2 border-emerald-700/60 shadow-lg relative h-60">
                  <img
                    src="/assets/photos/open-plots-boundary.jpg"
                    alt="Levelled 151.25 Sq. Yds Open Plots"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase bg-emerald-800/90 px-2.5 py-1 rounded text-amber-200">
                      Actual Site Photo
                    </span>
                    <p className="text-xs font-bold mt-1">Wide Road Frontage & Curbing</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-emerald-100">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Clear Title Land with Immediate Registration</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-emerald-100">
                    <Droplets className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Dual Water Supply (Borewell + Manjeera) Laid</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-emerald-100">
                    <Trees className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Mature Mango Orchard Environment Preserved</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-emerald-800/60">
                <a
                  href="https://wa.me/918125125055?text=Hi%2C+I+am+interested+in+the+151.25+Sq+Yds+plots+at+Arrjava+Farms."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-3.5 rounded-xl transition text-center block shadow-md"
                >
                  WhatsApp Instant 151.25 Sq. Yd Price Chart
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
