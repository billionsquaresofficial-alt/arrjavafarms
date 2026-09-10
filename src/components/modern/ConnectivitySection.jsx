import React from 'react';
import { MapPin, Navigation, ExternalLink, ShieldCheck, ArrowUpRight, Compass, Trees } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export default function ConnectivitySection({ onOpenImageModal }) {
  const milestones = [
    {
      distance: "1 KM",
      time: "2 Mins",
      title: "Narasapur State Highway",
      desc: "Immediate arterial connection linking seamlessly to regional commercial and residential transit routes.",
      tag: "Arterial Highway",
    },
    {
      distance: "5 Mins",
      time: "5 Mins",
      title: "TRR Medical College & Vignan School",
      desc: "Top-tier healthcare services and reputed international schooling in immediate neighborhood proximity.",
      tag: "Healthcare & Education",
    },
    {
      distance: "4 KM",
      time: "6 Mins",
      title: "Aurobindo Sansa County",
      desc: "Major integrated master-planned mega township fueling rapid real estate value appreciation.",
      tag: "Integrated Township",
    },
    {
      distance: "10 KM",
      time: "12 Mins",
      title: "Outer Ring Road (ORR)",
      desc: "Signal-free expressway transit directly reaching Financial District, Gachibowli, and Airport.",
      tag: "Expressway",
    },
    {
      distance: "14 KM",
      time: "15 Mins",
      title: "Patancheru Junction / Mumbai Hwy",
      desc: "Established commercial hub and transit nexus on NH-65 with multi-specialty hospitals and retail.",
      tag: "Urban Center",
    },
    {
      distance: "Direct",
      time: "Inside Corridor",
      title: "Upcoming Regional Ring Road (RRR)",
      desc: "Positioned directly inside the mega growth corridor unlocking exponential long-term capital appreciation.",
      tag: "Growth Engine",
    },
  ];

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#f5ede2]/50 border-t border-[#e3d7c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#6d351a] bg-[#f7efe5] px-4 py-1.5 rounded-full border border-[#debfa5]">
              Strategic Growth Location
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#16271e] mt-4 tracking-tight">
              Unrivaled Connectivity & Location
            </h2>
            <p className="text-base text-stone-600 mt-3 font-sans leading-relaxed">
              Located at Begumpet Village near Patancheru, within HMDA limits and adjacent to the upcoming RRR expressway corridor.
            </p>
          </div>

          {/* Direct Google Maps Action */}
          <a
            href={PROJECT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#183d2a] hover:bg-[#0f2a1b] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md transition"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Open in Google Maps</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2-Column: Milestones List + Route Map Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Milestones List (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-[1.75rem] border border-[#e5dcd0] hover:border-[#183d2a] hover:shadow-md transition-all flex items-start gap-4 group"
              >
                {/* Distance Badge */}
                <div className="w-16 h-14 rounded-2xl bg-[#faf6ef] border border-[#e5d9c9] group-hover:border-[#c98e4d] group-hover:bg-[#f6ede1] flex flex-col items-center justify-center shrink-0 transition">
                  <span className="text-sm font-extrabold font-serif text-[#6d351a] leading-tight">
                    {item.distance}
                  </span>
                  <span className="text-[10px] text-stone-500 font-semibold">
                    {item.time}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#16271e] group-hover:text-[#183d2a] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-bold text-[#6d351a] bg-[#faf3ea] border border-[#ebd7c5] px-2.5 py-0.5 rounded-full shrink-0">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Route Map Visual Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Map Preview Image */}
            <div
              className="relative rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white bg-white cursor-pointer group p-2"
              onClick={() => onOpenImageModal('/assets/cropped/route-map.png', 'Arrjava Farms Route & Connectivity Map')}
            >
              <img
                src="/assets/cropped/route-map.png"
                alt="Arrjava Farms Connectivity Route Map"
                className="w-full h-80 sm:h-96 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold font-serif">Arrjava Route Map</p>
                  <p className="text-xs text-stone-300">Click to view high-resolution map</p>
                </div>
                <span className="text-xs bg-[#183d2a] px-3 py-1 rounded-full font-bold">
                  Enlarge
                </span>
              </div>
            </div>

            {/* Why This Location Callout */}
            <div className="bg-[#fcf8f2] border border-[#e2d5c3] rounded-[2rem] p-6 shadow-xs">
              <div className="flex items-center gap-2 text-[#6d351a] font-bold text-sm">
                <Compass className="w-4 h-4 text-[#6d351a]" />
                <span>Why This Location?</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
                Patancheru is emerging as an important growth corridor with industrial development, residential expansion and improving expressway connectivity. Proximity to the ORR and upcoming RRR makes this an unbeatable destination for both weekend farmhouse living and long-term land wealth.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
