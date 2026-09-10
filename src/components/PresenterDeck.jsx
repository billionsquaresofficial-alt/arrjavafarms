import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Sparkles, List, FileText, X, Check, ArrowRight 
} from 'lucide-react';
import { NAVIGATION_SECTIONS } from '../data/projectData';

export default function PresenterDeck({ activeSection, setActiveSection, isOpen, setIsOpen }) {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentIndex = NAVIGATION_SECTIONS.findIndex((s) => s.id === activeSection);

  const presenterNotes = {
    hero: "OPENING: Introduce Arrjava Farms by Abhista. Highlight: Residential Conversion Open Plots @ Begumpet Village near Patancheru. Slogan: 'Find your peace while embracing city's vibrant pulse.'",
    intro: "INTRO: Emphasize freedom to build custom homes & weekend retreats. 4 pillars: Strategic location, residential conversion zoning, mature mango grove setting, gated clubhouse amenities.",
    vision: "VISION: Focus on generational land ownership, open skies, peaceful weekend escapes, and long-term capital appreciation inside HMDA limits.",
    glance: "SPECIFICATIONS: Reiterate key project data: Inside HMDA & RRR, immediate house construction ready, Bore & Manjeera water, wet mix roads with yellow-black curbing stones.",
    location: "LOCATION: Patancheru-Begumpet growth belt. Industrial & IT connectivity. Rapid urbanization along Mumbai Highway (NH 65) and Narasapur Highway.",
    connectivity: "CONNECTIVITY: 1 KM Narasapur Hwy, 4 KM Aurobindo Sansa County, 5 Mins TRR Medical & Vignan School, 10 KM ORR, 14 KM Patancheru Junction.",
    masterplan: "MASTER DEVELOPMENT: Highlight grand gated entrance archway, 24/7 security cabin, paved boulevard, and master project deliverables.",
    layouts: "OFFICIAL CAD LAYOUTS: Deep-dive into Acre 6-10 Gts Master Plan, 40'/30'/28' road network, 6,631 Sq.Yd central open park, 107 & 151.5 Sq.Yd plots, and 3-11 Gunthas estate parcels. Offer vector CAD PDF downloads.",
    features: "FEATURES: Immediate construction readiness, dual water sources (Bore & Manjeera), wide wet-mix roads, curbing stones, street lights.",
    amenities: "AMENITIES: Club house, swimming pool, guest cottages, consecrated Ganesha temple, children's park, and mango orchards.",
    lifestyle: "LIFESTYLE: Paint the picture of peaceful mornings, fruit picking, fresh air, family weekends, and starlit open night skies.",
    slideshow: "SITE SLIDESHOW: Walk through high-resolution cinematic slides: Consecrated Ganesha temple, Vedic pooja ritual, mature mango groves with kerbing, open plots, and sunset cottages.",
    experience: "REAL SITE PHOTOS: Showcase actual on-ground photos — Consecrated Ganesha temple, mango orchards, boundary stones, cottages under construction.",
    walkthrough: "VIDEO: Play the official 2-minute 3D walkthrough video showcasing the complete master development.",
    gallery: "GALLERY: Browse through authentic site photos, layout scans, and video footage with client/investor.",
    status: "STATUS: Clarify transparent milestones — Temple consecrated, boundary curbing and road grading active, cottages under construction.",
    "why-arrjava": "WHY ARRJAVA: 6 strong pillars — Strategic HMDA/RRR location, architectural freedom, dual water security, mango orchards, amenities, Abhista trust.",
    developer: "ABHISTA: Highlight Abhista developer credentials, Madhapur HQ, and track record of sustainable land development.",
    faq: "FAQ: Address client questions on location, approvals, construction readiness, and water facilities.",
    visit: "SITE VISIT: Close with invitation for personal site visit. Show Google Maps QR code and direct route navigation."
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < NAVIGATION_SECTIONS.length) {
      const targetId = NAVIGATION_SECTIONS[index].id;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) goToSlide(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < NAVIGATION_SECTIONS.length - 1) goToSlide(currentIndex + 1);
  };

  // Keyboard navigation listener (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4 no-print animate-fade-in">
      {/* Presenter Notes Popover */}
      {isNotesOpen && (
        <div className="mb-3 p-4 rounded-2xl bg-forest-950/95 backdrop-blur-xl border border-gold-400/40 text-sand-100 shadow-2xl space-y-2">
          <div className="flex items-center justify-between border-b border-forest-800 pb-2">
            <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider font-semibold">
              Presenter Talking Points • Slide {currentIndex + 1}/{NAVIGATION_SECTIONS.length}
            </span>
            <button
              onClick={() => setIsNotesOpen(false)}
              className="text-sand-400 hover:text-sand-100 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-sand-200 font-light leading-relaxed">
            {presenterNotes[activeSection] || "Present the verified Arrjava Farms highlights to the prospective buyer or management."}
          </p>
        </div>
      )}

      {/* Floating Toolbar */}
      <div className="p-3 rounded-full bg-forest-950/90 backdrop-blur-xl border border-gold-400/40 shadow-2xl flex items-center justify-between gap-3 text-sand-100">
        
        {/* Slide Counter & Label */}
        <div className="flex items-center space-x-3 pl-3">
          <span className="font-mono text-xs text-gold-400 font-bold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(NAVIGATION_SECTIONS.length).padStart(2, '0')}
          </span>
          <span className="font-serif text-xs font-semibold text-sand-100 hidden sm:inline-block max-w-[150px] truncate">
            {NAVIGATION_SECTIONS[currentIndex]?.label}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-1.5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-forest-900 border border-forest-750 hover:bg-forest-800 text-sand-200 hover:text-gold-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Previous Slide (←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === NAVIGATION_SECTIONS.length - 1}
            className="p-2 rounded-full bg-gold-500 text-forest-950 font-bold hover:brightness-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
            title="Next Slide (→)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Presenter Utilities */}
        <div className="flex items-center space-x-2 pr-1">
          <button
            onClick={() => setIsNotesOpen(!isNotesOpen)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1.5 border transition-all ${
              isNotesOpen
                ? 'bg-gold-500/20 text-gold-300 border-gold-400/50'
                : 'bg-forest-900 border-forest-750 text-sand-300 hover:text-sand-100'
            }`}
            title="Toggle Pitch Notes"
          >
            <FileText className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">Pitch Notes</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-forest-900 border border-forest-750 text-sand-300 hover:text-gold-300 transition-all"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-forest-900 border border-forest-750 text-sand-400 hover:text-sand-200 transition-all"
            title="Close Presenter Deck"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
