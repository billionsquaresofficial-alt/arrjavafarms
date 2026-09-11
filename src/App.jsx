import React, { useState } from 'react';
import Navbar from './components/modern/Navbar';
import HeroSection from './components/modern/HeroSection';
import StatsRibbon from './components/modern/StatsRibbon';
import AboutSection from './components/modern/AboutSection';
import HighlightsSection from './components/modern/HighlightsSection';
import FarmExperienceSection from './components/modern/FarmExperienceSection';
import VideoTourSection from './components/modern/VideoTourSection';
import AmenitiesSection from './components/modern/AmenitiesSection';
import ConnectivitySection from './components/modern/ConnectivitySection';
import PhotoGallery from './components/modern/PhotoGallery';
import SiteVisitSection from './components/modern/SiteVisitSection';
import Footer from './components/modern/Footer';
import ModernLightboxModal from './components/modern/ModernLightboxModal';
import NatureSoundscape from './components/modern/NatureSoundscape';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    mediaSrc: null,
    mediaTitle: '',
  });

  const handleOpenLightbox = (src, title) => {
    setLightbox({
      isOpen: true,
      mediaSrc: src,
      mediaTitle: title,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox({
      isOpen: false,
      mediaSrc: null,
      mediaTitle: '',
    });
  };

  const handleBookVisitClick = () => {
    const el = document.getElementById('visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVideoTour = () => {
    const el = document.getElementById('tour');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfdfb] text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* 01. Nature Soundscape Engine (Procedural Birdsong & Gentle Wind Rustle) */}
      <NatureSoundscape />

      {/* 02. Header Navigation with Official Logo */}
      <Navbar onBookVisitClick={handleBookVisitClick} />

      {/* 03. Main Content Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onBookVisitClick={handleBookVisitClick}
          onOpenVideoTour={handleOpenVideoTour}
        />

        {/* Verified Distances & Metrics Ribbon */}
        <StatsRibbon />

        {/* Natural Orchard Living: Freedom to Create Your Space Your Way */}
        <AboutSection onBookVisitClick={handleBookVisitClick} />

        {/* Verified Project Infrastructure Highlights */}
        <HighlightsSection />

        {/* Residential Convertable Plot Sizes & Configurations */}
        <FarmExperienceSection onBookVisitClick={handleBookVisitClick} />

        {/* 3D Walkthrough Player & Aerial Drone Reels */}
        <VideoTourSection />

        {/* Curated Community Amenities */}
        <AmenitiesSection onOpenImageModal={handleOpenLightbox} />

        {/* Strategic Location & Connectivity */}
        <ConnectivitySection onOpenImageModal={handleOpenLightbox} />

        {/* Real On-Ground Site Photography */}
        <PhotoGallery onOpenImageModal={handleOpenLightbox} />

        {/* Schedule VIP Site Visit & Directions */}
        <SiteVisitSection />
      </main>

      {/* 04. Official Footer */}
      <Footer />

      {/* 05. High Resolution Inspection Lightbox */}
      <ModernLightboxModal
        isOpen={lightbox.isOpen}
        onClose={handleCloseLightbox}
        mediaSrc={lightbox.mediaSrc}
        mediaTitle={lightbox.mediaTitle}
      />

      {/* Floating Quick Action Button (WhatsApp) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/918125125055?text=Hi%2C+I+am+interested+in+Arrjava+Farms+Residential+Convertable+Plots."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs p-3 sm:py-3.5 sm:px-4.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-600/40"
          title="Direct WhatsApp Inquiry (+91 81251 25055)"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="hidden sm:inline">WhatsApp (8125125055)</span>
        </a>
      </div>

    </div>
  );
}
