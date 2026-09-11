import React from 'react';
import { Calendar, Play, Download, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MapPin, Droplets, Trees, Phone } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export default function HeroSection({ onBookVisitClick, onOpenVideoTour }) {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-stone-50/30">
      
      {/* Soft Ambient Organic Gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-emerald-200/35 via-emerald-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[350px] h-[350px] bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header Stamp with Official Logo */}
        <div className="text-center max-w-2xl mx-auto mb-9">
          <div className="inline-flex items-center gap-3 bg-white/95 px-5 py-2.5 rounded-full border border-emerald-200/80 shadow-xs">
            <img
              src="/assets/arrjava-official-logo.jpg"
              alt="Arrjava Farms"
              className="h-8 sm:h-9 w-auto object-contain mix-blend-multiply"
            />
            <div className="h-4 w-px bg-emerald-200" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-900">
              Residential Convertable Plots
            </span>
          </div>
        </div>

        {/* Hero Headline & Intro */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300 shadow-xs ring-2 ring-amber-300/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              🛕 Consecrated Lord Ganesha Temple
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              Inside HMDA Limits
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Trees className="w-3.5 h-3.5 text-emerald-700" />
              Preserved Mango Orchards
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Upcoming RRR Corridor
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] font-serif">
            A Natural Sanctuary of <br className="hidden sm:block" />
            <span className="italic text-emerald-800 underline decoration-amber-400/60 underline-offset-8">
              Mango Groves
            </span> & Residential Convertable Plots
          </h1>

          <div className="flex items-center justify-center gap-2 text-slate-700 font-semibold text-sm sm:text-base">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>At Begumpet Village | Near Patancheru, Mumbai Highway</span>
          </div>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Arrjava Farms offers premium residential convertable open plots nestled within mature mango orchards, centered around a consecrated Lord Ganesha stone temple shrine. Designed for families seeking a peaceful sanctuary with modern amenities and rapid highway connectivity.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onBookVisitClick}
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Schedule Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+918125125055"
              className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50/60 text-emerald-900 border-2 border-emerald-300 font-bold text-sm sm:text-base px-6 py-4 rounded-full shadow-xs hover:border-emerald-700 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call: 8125125055</span>
            </a>

            <button
              onClick={onOpenVideoTour}
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200/80 text-slate-800 font-bold text-sm sm:text-base px-6 py-4 rounded-full shadow-2xs transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 text-emerald-700 fill-emerald-700" />
              <span>Watch 3D Walkthrough</span>
            </button>
          </div>

        </div>

        {/* Hero Visual Composition - Highlighted Ganesh Temple & Mango Groves */}
        <div className="mt-14 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
            
            {/* Primary Featured Card: Consecrated Lord Ganesha Temple Shrine */}
            <div className="md:col-span-7 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-amber-200/70 bg-stone-900 relative group h-80 sm:h-[430px]">
              <img
                src="/assets/photos/ganesha-temple-grand.jpeg"
                alt="Consecrated Lord Ganesha Stone Temple Shrine at Arrjava Farms"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Top Floating Pill: Consecrated Sanctum */}
              <div className="absolute top-5 left-5 bg-amber-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/50 flex items-center gap-2 text-amber-200 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span className="text-[11px] font-extrabold tracking-wide">🛕 Consecrated Spiritual Sanctum</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded border border-amber-400/30">
                    Actual On-Ground Photograph
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1.5">
                    Consecrated Lord Ganesha Temple
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 max-w-md leading-relaxed">
                    Carved stone shrine set within a circular paved plaza with sacred bamboo grove landscaping.
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md">
                    100% Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Side 2 Stacked Cards: Mango Orchards & Consecration Pooja */}
            <div className="md:col-span-5 grid grid-cols-1 gap-4 sm:gap-6">
              
              {/* Mature Mango Orchards & Demarcation */}
              <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-emerald-50 relative group h-48 sm:h-[200px]">
                <img
                  src="/assets/photos/mango-orchard-curbing.jpg"
                  alt="Arrjava Farms Preserved Mango Orchards and Curbing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Top Pill: Mature Mango Orchards */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 text-white">
                  <Trees className="w-3 h-3 text-amber-300" />
                  <span className="text-[10px] font-bold">Mature Orchards</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-amber-300">
                    Preserved Nature
                  </span>
                  <p className="text-sm font-serif font-bold text-white leading-tight">
                    Mango Orchards & Boundary Curbing
                  </p>
                  <p className="text-[10px] text-stone-300">Demarcated plots ready for construction</p>
                </div>
              </div>

              {/* Consecration Pooja & Gazebo Canopy */}
              <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-stone-900 relative group h-48 sm:h-[200px]">
                <img
                  src="/assets/photos/ganesha-temple-pooja.jpg"
                  alt="Vedic Pooja Ritual and Consecration Ceremony"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-amber-300">
                    Vedic Ceremony
                  </span>
                  <p className="text-sm font-serif font-bold text-white leading-tight">
                    Temple Consecration Pooja
                  </p>
                  <p className="text-[10px] text-stone-300">Traditional rituals and consecrated sanctum</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
