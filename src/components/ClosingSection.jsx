import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Sparkles, Navigation, Globe, ArrowUp, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO, ABHISTA_INFO } from '../data/projectData';

export default function ClosingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ARRJAVA FARMS - Official Project Presentation',
        text: 'Discover Arrjava Farms: Premium Residential Conversion Open Plots by Abhista at Begumpet Village near Patancheru.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Presentation link copied to clipboard!');
    }
  };

  return (
    <footer className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden border-t border-gold-500/20">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-forest-900/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Brand Crest */}
        <div className="w-24 h-24 rounded-full p-1 border-2 border-gold-400/40 shadow-2xl mb-8 bg-forest-900/80 backdrop-blur-md">
          <img
            src="/assets/cropped/arrjava-badge.png"
            alt="Arrjava Farms Crest"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Project Name & Subhead */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-sand-50 mb-4">
          ARRJAVA <span className="text-gold-gradient">FARMS</span>
        </h2>

        <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-gold-300 font-medium mb-3">
          A Farm Project by ABHISTA™
        </p>

        <p className="text-xs sm:text-sm text-sand-300 font-light max-w-xl mb-10">
          Residential Conversion Open Plots @ Begumpet Village, Near Patancheru, Mumbai Highway
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href={PROJECT_INFO.brochurePdfUrl}
            download="Arrjava_Farms_Brochure.pdf"
            className="px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-850 text-sand-100 font-semibold text-xs uppercase tracking-wider border border-gold-500/30 hover:border-gold-400 flex items-center space-x-2 transition-all shadow-md"
          >
            <Download className="w-4 h-4 text-gold-400" />
            <span>Download PDF Brochure</span>
          </a>

          <button
            onClick={handleShare}
            className="px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-850 text-sand-100 font-semibold text-xs uppercase tracking-wider border border-gold-500/30 hover:border-gold-400 flex items-center space-x-2 transition-all shadow-md"
          >
            <Share2 className="w-4 h-4 text-gold-400" />
            <span>Share Presentation</span>
          </button>

          <a
            href={PROJECT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gold-500 text-forest-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 flex items-center space-x-2 transition-all shadow-lg"
          >
            <Navigation className="w-4 h-4" />
            <span>Open Location Map</span>
          </a>
        </div>

        {/* Corporate Address & Credentials */}
        <div className="pt-10 border-t border-forest-850 w-full max-w-4xl text-center space-y-3 text-xs text-sand-400 font-light">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sand-300 font-medium">
            <span>Project by ABHISTA</span>
            <span>•</span>
            <span>{ABHISTA_INFO.address}</span>
            <span>•</span>
            <a href={PROJECT_INFO.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">
              {ABHISTA_INFO.website}
            </a>
          </div>

          <p className="text-[11px] text-sand-500 leading-relaxed max-w-3xl mx-auto pt-2 italic">
            {PROJECT_INFO.disclaimer}
          </p>

          <div className="pt-6 flex items-center justify-between w-full text-[11px] text-forest-500 font-mono">
            <span>© {new Date().getFullYear()} ARRJAVA FARMS by ABHISTA. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="hover:text-gold-400 flex items-center space-x-1 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
