import React from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';

export default function AmenitiesSection({ onOpenImageModal }) {
  const amenities = [
    {
      title: "Swimming Pool & Leisure Deck",
      category: "Wellness & Recreation",
      desc: "Sparkling crystal-clear pool set amidst natural greenery for refreshing family weekends.",
      image: "/assets/cropped/amenity-swimming-pool.jpg",
    },
    {
      title: "Club House & Pavilion",
      category: "Community & Celebrations",
      desc: "Architectural clubhouse designed for community gatherings, birthday events, and weekend leisure.",
      image: "/assets/cropped/entrance-arch-render.png",
    },
    {
      title: "Weekend Guest Cottages",
      category: "Overnight Stays",
      desc: "Comfortable stay cottages for property owners to experience tranquil overnight stays amidst nature.",
      image: "/assets/photos/cottage-sunset.jpeg",
    },
    {
      title: "Consecrated Ganesha Temple",
      category: "Spiritual Sanctum",
      desc: "Stone-carved Lord Ganesha shrine with paved circular amphitheater and bamboo flora.",
      image: "/assets/photos/ganesha-temple-grand.jpeg",
    },
    {
      title: "Parks & Children's Play Area",
      category: "Family Outdoor Recreation",
      desc: "Lush green open lawns equipped with safe play equipment for children to play freely.",
      image: "/assets/cropped/amenity-playground.jpg",
    },
    {
      title: "Mature Mango & Avenue Plantations",
      category: "Eco-Landscape",
      desc: "Established, fruit-bearing mango trees and landscaped green avenues across every plot.",
      image: "/assets/photos/mango-orchard-curbing.jpg",
    },
  ];

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-900 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
            Lifestyle & Leisure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4 tracking-tight">
            Curated Community Amenities
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed font-sans">
            Thoughtfully planned to elevate your weekend countryside experience with recreation, spiritual calm, and peaceful family time.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Card Image */}
              <div
                className="relative h-60 overflow-hidden cursor-pointer bg-slate-100"
                onClick={() => onOpenImageModal(item.image, item.title)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-900 border border-slate-200 shadow-xs">
                  {item.category}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
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
