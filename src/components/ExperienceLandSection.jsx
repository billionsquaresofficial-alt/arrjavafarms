import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ZoomIn, Eye, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceLandSection({ onOpenImageModal }) {
  const sitePhotos = [
    {
      title: "Consecrated Ganesha Temple & Plaza",
      desc: "Authentic on-site photograph of the consecrated Lord Ganesha stone canopy with surrounding circular paved walkway and bamboo garden.",
      image: "/assets/photos/ganesha-temple-grand.jpeg",
      tag: "Actual Site Photo",
      colSpan: "lg:col-span-8"
    },
    {
      title: "Mango Orchard & Boundary Curbing",
      desc: "Mature fruit-bearing mango trees with yellow-black painted curbing stones demarcating the internal roadways.",
      image: "/assets/photos/mango-orchard-curbing.jpg",
      tag: "Actual Site Photo",
      colSpan: "lg:col-span-4"
    },
    {
      title: "Levelled Open Residential Plots",
      desc: "Expansive levelled open plots with boundary markers ready for immediate custom house construction.",
      image: "/assets/photos/open-plots-boundary.jpg",
      tag: "Actual Site Photo",
      colSpan: "lg:col-span-4"
    },
    {
      title: "Guest Cottages Under Construction",
      desc: "Active development of on-site guest cottages and farm stay units captured at golden sunset.",
      image: "/assets/photos/cottage-sunset.jpeg",
      tag: "Actual Site Photo",
      colSpan: "lg:col-span-4"
    },
    {
      title: "Shaded Canopy Lounge & Gazebo",
      desc: "White tensile shade pavilion with outdoor seating nestled directly within the lush mango grove.",
      image: "/assets/photos/gazebo-lounge.jpeg",
      tag: "Actual Site Photo",
      colSpan: "lg:col-span-4"
    }
  ];

  return (
    <section id="experience" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            11 • Experience the Land
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Real Ground <span className="text-gold-gradient">Photographs & Progress</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Authentic on-site photography showcasing the actual consecrated temple, mature mango orchards, boundary markings, and active development.
            </p>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-forest-900 border border-gold-500/30 text-xs font-mono text-gold-300">
            <Camera className="w-4 h-4 text-gold-400" />
            <span>100% Authentic Site Photography</span>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {sitePhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => onOpenImageModal(photo.image, photo.title)}
              className={`${photo.colSpan} rounded-3xl overflow-hidden bg-forest-900/80 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 shadow-xl group cursor-pointer relative`}
            >
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-gold-500/30 text-[10px] uppercase font-mono tracking-widest text-gold-300 font-semibold">
                  {photo.tag}
                </div>

                {/* Hover Inspect Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-forest-950/80 border border-gold-500/30 text-gold-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest-950 via-forest-950/90 to-transparent">
                  <h3 className="font-serif text-xl font-bold text-sand-50 group-hover:text-gold-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-sand-300 mt-1 font-light line-clamp-2">
                    {photo.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
