import React from 'react';
import { MapPin, Phone, Mail, Globe, Download, ArrowUp, ShieldCheck, MessageCircle } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b2419] text-stone-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Brand & Project Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-3">
              <div className="bg-white px-3 py-2 rounded-2xl border border-emerald-800 shadow-sm inline-block">
                <img
                  src="/assets/arrjava-official-logo.jpg"
                  alt="Arrjava Farms"
                  className="h-11 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-emerald-200/80 font-semibold tracking-wide">
                  A Natural Sanctuary of Mango Groves & Residential Convertable Plots
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              A serene residential plotted development at Begumpet Village, near Patancheru and Mumbai Highway. Blending mature mango greenery, dual water supply, and verified infrastructure with prime growth connectivity.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Inside HMDA Limits • Inside Upcoming RRR Corridor</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#overview" className="hover:text-emerald-300 transition">Overview</a></li>
              <li><a href="#gallery" className="hover:text-emerald-300 transition">Site Photos</a></li>
              <li><a href="#tour" className="hover:text-emerald-300 transition">3D Video Tour</a></li>
              <li><a href="#plots" className="hover:text-emerald-300 transition">150 Sq. Yd Plots</a></li>
              <li><a href="#highlights" className="hover:text-emerald-300 transition">Highlights</a></li>
              <li><a href="#amenities" className="hover:text-emerald-300 transition">Amenities</a></li>
              <li><a href="#location" className="hover:text-emerald-300 transition">Connectivity</a></li>
            </ul>
          </div>

          {/* Resources & Actions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Downloads
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a
                  href={PROJECT_INFO.brochurePdfUrl}
                  download
                  className="hover:text-emerald-300 transition inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Brochure PDF</span>
                </a>
              </li>
              <li>
                <a
                  href={PROJECT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Maps Pin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918125125055?text=Hi%2C+I+would+like+to+inquire+about+Arrjava+Farms."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Project Site & Direct Hotline with 8125125055 (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Contact & Location
            </h4>
            
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>Arrjava Farms</strong><br />
              Begumpet Village, Near Patancheru, Mumbai Highway,<br />
              Telangana, India
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>1 KM from Narasapur State Highway</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+918125125055" className="hover:text-white font-bold text-amber-200 transition">
                  +91 81251 25055
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-stone-400 leading-relaxed">
            <strong>Disclaimer:</strong> This website is for informational and conceptual presentation purposes. The promoters reserve the right to make modifications in the specifications as deemed fit in compliance with regulatory authorities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4 pt-2">
            <p>
              © {new Date().getFullYear()} ARRJAVA FARMS. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
