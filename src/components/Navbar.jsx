import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Phone, MapPin, Sparkles, Volume2, VolumeX, Layers, ChevronRight } from 'lucide-react';
import { PROJECT_INFO, NAVIGATION_SECTIONS } from '../data/projectData';

export default function Navbar({ activeSection, isPresenterMode, setIsPresenterMode, isAudioPlaying, setIsAudioPlaying }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Primary menu items displayed directly in the header bar
  const primaryNavItems = [
    { id: "hero", label: "Overview" },
    { id: "intro", label: "Introduction" },
    { id: "vision", label: "Vision" },
    { id: "glance", label: "At a Glance" },
    { id: "connectivity", label: "Location" },
    { id: "masterplan", label: "Master Plan" },
    { id: "layouts", label: "CAD Layouts" },
    { id: "features", label: "Features" },
    { id: "amenities", label: "Amenities" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "slideshow", label: "Slideshow" },
    { id: "experience", label: "Site Photos" },
    { id: "developer", label: "Abhista" },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-forest-900/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-forest-950/95 backdrop-blur-md py-3 border-b border-gold-500/20 shadow-2xl' 
            : 'bg-gradient-to-b from-forest-950/95 via-forest-950/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Developer Sub-badge */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              className="group flex items-center space-x-3 text-left flex-shrink-0"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-400/40 group-hover:border-gold-400 transition-all duration-300 shadow-md flex-shrink-0">
                <img 
                  src="/assets/cropped/arrjava-badge.png" 
                  alt="Arrjava Farms" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-base sm:text-lg md:text-xl font-bold text-sand-50 group-hover:text-gold-300 transition-colors leading-tight">
                  ARRJAVA FARMS
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium">
                  A Farm Project by ABHISTA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Primary Key Chapters) */}
            <nav className="hidden 2xl:flex items-center space-x-1">
              {primaryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/40 shadow-sm'
                      : 'text-sand-300 hover:text-sand-50 hover:bg-forest-900/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Quick Action Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              
              {/* All Chapters Drawer Button */}
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-forest-900/80 hover:bg-forest-850 text-sand-200 hover:text-gold-300 border border-gold-500/30 text-xs font-medium transition-all shadow-sm"
                title="Open Complete Index of Chapters"
              >
                <Layers className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden sm:inline font-mono">Menu & Chapters</span>
                <span className="sm:hidden font-mono">Index</span>
              </button>

              {/* Audio Ambience Toggle */}
              <button
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                title={isAudioPlaying ? "Mute Nature Sounds" : "Play Peaceful Nature Ambience"}
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-forest-900/70 border border-gold-500/20 text-gold-400 hover:text-gold-200 hover:border-gold-400/50 transition-all"
              >
                {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse text-gold-300" /> : <VolumeX className="w-4 h-4 opacity-70" />}
              </button>

              {/* Presenter Pitch Mode Toggle */}
              <button
                onClick={() => setIsPresenterMode(!isPresenterMode)}
                title="Toggle Presenter Mode (Presentation Deck Toolbar)"
                className={`hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                  isPresenterMode
                    ? 'bg-gold-500 text-forest-950 border-gold-400 shadow-lg shadow-gold-500/20'
                    : 'bg-forest-900/80 text-gold-300 border-gold-500/30 hover:border-gold-400'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isPresenterMode ? 'Pitch Active' : 'Pitch Mode'}</span>
              </button>

              {/* PDF Brochure Download */}
              <a
                href={PROJECT_INFO.brochurePdfUrl}
                download="Arrjava_Farms_Brochure.pdf"
                className="hidden xl:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-forest-900/80 text-sand-200 hover:text-sand-50 text-xs font-medium border border-forest-700 hover:border-gold-400/40 transition-all"
                title="Download Official Project Brochure"
              >
                <Download className="w-3.5 h-3.5 text-gold-400" />
                <span>Brochure</span>
              </a>

              {/* Site Visit CTA */}
              <button
                onClick={() => scrollTo('visit')}
                className="flex items-center space-x-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-forest-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-gold-500/10"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Site Visit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Complete Slide-out Navigation Drawer (All 18 Chapters) */}
        {isDrawerOpen && (
          <div className="fixed inset-0 top-[60px] z-50 bg-forest-950/98 backdrop-blur-2xl border-t border-gold-500/20 p-6 sm:p-8 overflow-y-auto shadow-2xl animate-fade-in">
            <div className="max-w-5xl mx-auto">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-forest-800">
                <div>
                  <h3 className="font-serif text-xl font-bold text-sand-50">
                    Presentation Table of Contents
                  </h3>
                  <p className="text-xs text-sand-400 mt-0.5">
                    Click any chapter to jump directly in the presentation
                  </p>
                </div>

                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-xl bg-forest-900 border border-gold-500/30 text-sand-300 hover:text-sand-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 18 Structured Chapters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {NAVIGATION_SECTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left p-3.5 rounded-xl border flex items-center justify-between group transition-all ${
                      activeSection === item.id
                        ? 'bg-gold-500/20 text-gold-300 border-gold-400 shadow-md shadow-gold-500/10'
                        : 'bg-forest-900/60 border-forest-800 text-sand-300 hover:bg-forest-900 hover:border-gold-500/30 hover:text-sand-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs text-gold-400 font-bold w-6">
                        {item.index}
                      </span>
                      <span className="text-xs font-semibold group-hover:text-gold-300 transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-forest-600 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

              {/* Bottom Quick Bar */}
              <div className="pt-6 border-t border-forest-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                    className="px-4 py-2 rounded-xl text-xs bg-forest-900 text-gold-300 border border-gold-500/30 flex items-center space-x-2"
                  >
                    {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    <span>{isAudioPlaying ? 'Nature Ambience ON' : 'Nature Ambience OFF'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsPresenterMode(!isPresenterMode);
                      setIsDrawerOpen(false);
                    }}
                    className="px-4 py-2 rounded-xl text-xs bg-forest-900 text-sand-200 border border-forest-700 flex items-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span>{isPresenterMode ? 'Hide Pitch Deck Toolbar' : 'Launch Pitch Deck Toolbar'}</span>
                  </button>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={PROJECT_INFO.brochurePdfUrl}
                    download
                    className="px-4 py-2 rounded-xl bg-forest-900 text-sand-200 text-xs font-semibold flex items-center space-x-2 border border-forest-700 hover:border-gold-400"
                  >
                    <Download className="w-4 h-4 text-gold-400" />
                    <span>Download Brochure</span>
                  </a>

                  <button
                    onClick={() => scrollTo('visit')}
                    className="px-5 py-2 rounded-xl bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Schedule Site Visit</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
