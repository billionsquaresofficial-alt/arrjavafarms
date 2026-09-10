import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Download, ShieldCheck, Sparkles, Map, Compass, Trees, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function MasterPlanSection({ onOpenImageModal }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeViewIndex, setActiveViewIndex] = useState(0);

  const views = [
    {
      id: "entrance",
      title: "Grand Entrance Arch & Security Boulevard",
      subtitle: "Gated entry with 24/7 security cabin, landscaped pavers, decorative lighting, and stone wall cladding.",
      src: "/assets/cropped/entrance-arch-render.png",
      pdfSrc: null,
      tag: "Entrance Architecture",
      badge: "Gated Entry Render",
      highlights: [
        "Grand Curved Timber & Stone Entrance Arch",
        "Integrated 24/7 Security Cabin & Boom Barrier",
        "Interlocking Pavers & Decorative Lighting",
        "Lush Avenue Palm & Ornamental Plantations"
      ]
    },
    {
      id: "plots-curbing",
      title: "Open Plot Demarcation & Mango Orchard Kerbing",
      subtitle: "On-ground site photograph showing mature mango grove avenues with painted boundary curbing stones along road corridors.",
      src: "/assets/photos/mango-orchard-curbing.jpg",
      pdfSrc: null,
      tag: "Site Demarcation",
      badge: "Real Site Photo",
      highlights: [
        "Clearly Demarcated Stone Corner Pegs",
        "Painted Boundary Kerb Stones Along Roads",
        "Preserved Fruit-Bearing Mango Trees on Each Plot",
        "Leveled Topography Ready for Immediate Construction"
      ]
    },
    {
      id: "brochure-3",
      title: "Official Brochure Master Highlights Sheet",
      subtitle: "Official Phase 2 brochure document detailing 12 master project highlights, amenities, and layout features.",
      src: "/assets/extracted/pdf-image-3.jpg",
      pdfSrc: PROJECT_INFO.brochurePdfUrl,
      pdfName: "Arrjava_Farms_Brochure.pdf",
      tag: "Brochure Master Sheet",
      badge: "Brochure Scan",
      highlights: [
        "12 Verified Master Project Deliverables",
        "Dual Bore & Manjeera Water Network",
        "Resort Clubhouse & Swimming Pool Location",
        "Lord Ganesha Temple Sanctum Demarcation"
      ]
    },
    {
      id: "brochure-1",
      title: "Project Cover & Orientation Plan",
      subtitle: "Official project cover and residential conversion open plot certification.",
      src: "/assets/extracted/pdf-image-1.jpg",
      pdfSrc: PROJECT_INFO.brochurePdfUrl,
      pdfName: "Arrjava_Farms_Brochure.pdf",
      tag: "Cover Document",
      badge: "Brochure Scan",
      highlights: [
        "Residential Conversion Open Plots Certification",
        "A Farm Project by ABHISTA",
        "HMDA Limits & Sangareddy Growth Corridor",
        "Bore & Manjeera Dual Water Network Guarantee"
      ]
    }
  ];

  const currentView = views[activeViewIndex];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.75));
  const handleReset = () => setZoomLevel(1);

  return (
    <section id="masterplan" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            07 • Master Layout & Development Plan
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Headline & View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Master Plan & <span className="text-gold-gradient">Official Layouts</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Inspect the comprehensive CAD master layout, plot subdivision maps, road networks, and 6,631 Sq.Yd central open space with interactive high-resolution zoom.
            </p>
          </div>

          {/* View Selection Tabs */}
          <div className="flex flex-wrap gap-2">
            {views.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => {
                  setActiveViewIndex(idx);
                  setZoomLevel(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center space-x-1.5 ${
                  activeViewIndex === idx
                    ? 'bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/20 font-bold scale-[1.02]'
                    : 'bg-forest-900 text-sand-300 hover:text-sand-100 hover:bg-forest-850 border border-forest-800'
                }`}
              >
                <span>{v.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Viewer Container */}
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-forest-900 shadow-2xl">
          
          {/* Top Control Bar */}
          <div className="p-4 sm:p-5 bg-forest-950/95 backdrop-blur-md border-b border-gold-500/20 flex flex-wrap items-center justify-between gap-4 z-20 relative">
            <div className="max-w-xl">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-forest-950 bg-gold-400 font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  {currentView.badge}
                </span>
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-sand-100">
                  {currentView.title}
                </h3>
              </div>
              <p className="text-xs text-sand-300 font-light line-clamp-2 sm:line-clamp-none">
                {currentView.subtitle}
              </p>
            </div>

            {/* Controls: Zoom, PDF Download, Fullscreen Lightbox */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-xs font-mono text-sand-400 hidden sm:inline-block bg-forest-900 px-2.5 py-1.5 rounded-lg border border-forest-800">
                Zoom: {Math.round(zoomLevel * 100)}%
              </span>
              
              <button
                onClick={handleZoomIn}
                className="p-2 sm:p-2.5 rounded-lg bg-forest-900 border border-forest-750 text-sand-200 hover:text-gold-300 hover:border-gold-400/40 transition-all"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleZoomOut}
                className="p-2 sm:p-2.5 rounded-lg bg-forest-900 border border-forest-750 text-sand-200 hover:text-gold-300 hover:border-gold-400/40 transition-all"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleReset}
                className="p-2 sm:p-2.5 rounded-lg bg-forest-900 border border-forest-750 text-sand-200 hover:text-gold-300 hover:border-gold-400/40 transition-all"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {currentView.pdfSrc && (
                <a
                  href={currentView.pdfSrc}
                  download={currentView.pdfName || "Arrjava_Farms_Layout.pdf"}
                  className="hidden md:flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-forest-850 hover:bg-forest-800 border border-gold-500/30 text-gold-300 text-xs font-semibold transition-all"
                  title="Download High-Resolution Vector PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              )}

              <button
                onClick={() => onOpenImageModal(currentView.src, currentView.title)}
                className="px-3.5 py-2 rounded-lg bg-gold-500 text-forest-950 font-bold text-xs uppercase flex items-center space-x-1.5 shadow-md hover:brightness-110 active:scale-95 transition-all"
                title="Open Fullscreen Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Zoomable & Pannable Image Canvas */}
          <div className="relative w-full h-[520px] sm:h-[640px] md:h-[700px] bg-forest-950 flex items-center justify-center overflow-auto p-4 sm:p-8 cursor-grab active:cursor-grabbing select-none">
            <div 
              className="transition-transform duration-200 ease-out flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={currentView.src}
                alt={currentView.title}
                className="max-h-[480px] sm:max-h-[600px] md:max-h-[660px] w-auto object-contain rounded-xl shadow-2xl border border-gold-500/10"
              />
            </div>
          </div>

          {/* Key View Highlights Bullet Bar */}
          <div className="p-4 sm:p-5 bg-forest-950/95 border-t border-forest-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentView.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-2.5 bg-forest-900/60 p-2.5 rounded-xl border border-forest-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-sand-200 leading-tight">{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Layout Specifications & Engineering Standards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-forest-900/70 border border-forest-800 hover:border-gold-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
              <Map className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-sand-50 mb-1">
              Planned Road Network
            </h4>
            <p className="text-xs text-sand-300 font-light leading-relaxed">
              40 Feet wide main spine connecting roads, 30 Feet wide sector roads, and 28 Feet wide avenue lanes with finished boundary curbing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-forest-900/70 border border-forest-800 hover:border-gold-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
              <Trees className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-sand-50 mb-1">
              6,631 Sq.Yd Open Space
            </h4>
            <p className="text-xs text-sand-300 font-light leading-relaxed">
              Over 6,631 Sq.Yds reserved exclusively for lush landscaped parks, children's recreation, and community social amenities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-forest-900/70 border border-forest-800 hover:border-gold-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-sand-50 mb-1">
              Versatile Plot Sizes
            </h4>
            <p className="text-xs text-sand-300 font-light leading-relaxed">
              107 & 151.5 Sq.Yds (45'x30'3" & 42'x32'5") compact configurations, up to 3G, 4G, 5G, 7G, 10G & 11 Gunthas estate parcels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-forest-900/70 border border-forest-800 hover:border-gold-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-sand-50 mb-1">
              High Absorption & Phase 1 Sold Out
            </h4>
            <p className="text-xs text-sand-300 font-light leading-relaxed">
              Demonstrated buyer confidence with Phase 1 demarcated as Sold Out; clear immediate construction readiness across all sectors.
            </p>
          </div>

        </div>

        {/* Direct Layout PDF Download Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-forest-900 via-forest-850 to-forest-900 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-3 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-serif font-bold text-sm sm:text-base text-sand-100">
                Download Official High-Resolution CAD Layout PDFs
              </h5>
              <p className="text-xs text-sand-300 font-light">
                Vector CAD layouts for zoomable offline inspection, presentations, and technical due diligence.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href="/assets/layouts/arrjava-master-layout-comprehensive.pdf"
              download="Arrjava_Farms_Master_Layout_Comprehensive.pdf"
              className="px-4 py-2.5 rounded-xl bg-forest-950 hover:bg-forest-900 border border-gold-500/30 text-gold-300 text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Master Layout PDF</span>
            </a>
            <a
              href="/assets/layouts/arrjava-location-plots-map.pdf"
              download="Arrjava_Farms_Location_Plots_Map.pdf"
              className="px-4 py-2.5 rounded-xl bg-gold-500 text-forest-950 font-bold text-xs uppercase flex items-center space-x-1.5 shadow-md hover:brightness-110 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Plots Map PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
