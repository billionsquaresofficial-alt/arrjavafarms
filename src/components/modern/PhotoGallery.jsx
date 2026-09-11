import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';

export default function PhotoGallery({ onOpenImageModal }) {
  const [filter, setFilter] = useState('all');

  const photos = [
    {
      title: "Consecrated Lord Ganesha Temple",
      category: "temple",
      categoryLabel: "Temple",
      caption: "Actual on-ground photo of the consecrated stone shrine with circular paved amphitheater.",
      src: "/assets/photos/ganesha-temple-grand.jpeg",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "Temple Pooja & Consecration Ritual",
      category: "temple",
      categoryLabel: "Temple",
      caption: "Vedic consecration ritual and floral offerings performed on-site at the temple.",
      src: "/assets/photos/ganesha-temple-pooja.jpg",
      span: "col-span-1",
    },
    {
      title: "Mature Mango Orchard & Curbing",
      category: "nature",
      categoryLabel: "Nature & Plots",
      caption: "Preserved mature fruit-bearing mango trees with yellow-black painted curbing stones.",
      src: "/assets/photos/mango-orchard-curbing.jpg",
      span: "col-span-1",
    },
    {
      title: "Levelled Open Residential Plots",
      category: "nature",
      categoryLabel: "Nature & Plots",
      caption: "Wide open, clearly demarcated plots ready for immediate house construction.",
      src: "/assets/photos/open-plots-boundary.jpg",
      span: "col-span-1",
    },
    {
      title: "Weekend Cottages Under Development",
      category: "cottages",
      categoryLabel: "Cottages",
      caption: "On-site construction progress of the guest cottages captured during golden sunset.",
      src: "/assets/photos/cottage-sunset.jpeg",
      span: "col-span-1",
    },
    {
      title: "Shaded Outdoor Gazebo Lounge",
      category: "cottages",
      categoryLabel: "Cottages & Lounge",
      caption: "Tensile shaded canopy seating area nestled amidst lush green fruit trees.",
      src: "/assets/photos/gazebo-lounge.jpeg",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
    },
  ];

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-900 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
              Real On-Ground Site Photography
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4 tracking-tight">
              On-Site Photography
            </h2>
            <p className="text-base text-slate-600 mt-2 font-sans max-w-xl">
              Authentic, unedited photographs captured directly on-site showcasing real ground progress, the Consecrated Lord Ganesha Temple, and mango orchards.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'temple', label: 'Temple' },
              { id: 'nature', label: 'Mango Orchards' },
              { id: 'cottages', label: 'Cottages & Lounge' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 relative group cursor-pointer bg-slate-100 h-64 sm:h-72 ${
                item.span.includes('col-span-2') ? 'md:col-span-2' : 'col-span-1'
              }`}
              onClick={() => onOpenImageModal(item.src, item.title)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#6d351a] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                {item.categoryLabel}
              </div>

              {/* Maximize Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <h3 className="text-base sm:text-lg font-bold font-serif leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
