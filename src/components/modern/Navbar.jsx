import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, Trees, ArrowRight } from 'lucide-react';

export default function Navbar({ onBookVisitClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean, concise menu items with whitespace-nowrap that will NEVER wrap into two lines
  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Photos', href: '#gallery' },
    { label: '3D Video Tour', href: '#tour' },
    { label: '150 Sq. Yd Plots', href: '#plots' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100 py-2.5'
          : 'bg-white/90 backdrop-blur-xs border-b border-emerald-50 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Official Arrjava Farms Logo with Ample Breathing Room */}
        <a href="#overview" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="bg-white px-2 py-1 rounded-2xl border border-emerald-200 shadow-2xs group-hover:border-emerald-500 transition-all duration-300 group-hover:scale-102">
            <img
              src="/assets/arrjava-official-logo.jpg"
              alt="Arrjava Farms"
              className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <div className="hidden 2xl:block">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-950 bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-300">
              Open Plots
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Single-line with whitespace-nowrap */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold tracking-wide text-slate-700 hover:text-emerald-800 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-700 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Direct Phone Call Button */}
          <a
            href="tel:+918125125055"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 px-3 py-2 rounded-full border border-transparent hover:border-emerald-200 transition-all whitespace-nowrap"
            title="Call Us Directly"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>8125125055</span>
          </a>

          {/* WhatsApp Direct Action */}
          <a
            href="https://wa.me/918125125055?text=Hi%2C+I+am+interested+in+Arrjava+Farms+Residential+Plots+near+Patancheru."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-full transition-all whitespace-nowrap shadow-2xs hover:scale-102"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Schedule Visit Primary Button */}
          <button
            onClick={onBookVisitClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-98 whitespace-nowrap cursor-pointer group"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Schedule Visit</span>
          </button>
        </div>

        {/* Mobile / Tablet Header Controls (< xl breakpoint) */}
        <div className="flex xl:hidden items-center gap-2">
          {/* Direct WhatsApp icon on mobile */}
          <a
            href="https://wa.me/918125125055?text=Hi%2C+I+am+interested+in+Arrjava+Farms."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200 active:scale-95 transition"
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Direct Phone Call on mobile */}
          <a
            href="tel:+918125125055"
            className="p-2 text-emerald-800 bg-emerald-50 rounded-xl border border-emerald-200 active:scale-95 transition"
            title="Call 8125125055"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Visit CTA Pill */}
          <button
            onClick={onBookVisitClick}
            className="text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 px-3 py-1.5 rounded-full shadow-xs active:scale-95 transition cursor-pointer"
          >
            Visit
          </button>

          {/* Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-emerald-800 hover:bg-emerald-50 rounded-xl border border-slate-200 transition cursor-pointer active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-800" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Fullscreen / Slide-Down Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-white/98 backdrop-blur-xl border-b border-emerald-100 px-5 pt-4 pb-8 overflow-y-auto z-50 flex flex-col justify-between animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          
          <div>
            {/* Quick Title */}
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100/80 mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Menu Navigation
              </span>
              <span className="text-xs font-bold text-slate-500">
                Arrjava Farms
              </span>
            </div>

            {/* Nav Links Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-bold text-slate-800 hover:text-emerald-800 hover:bg-emerald-50 active:bg-emerald-100 border border-slate-100 hover:border-emerald-200 transition-all shadow-2xs"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 opacity-60" />
                </a>
              ))}
            </div>
          </div>

          {/* Direct Action Buttons Card at Bottom of Drawer */}
          <div className="pt-5 mt-4 border-t border-emerald-100 space-y-2.5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918125125055?text=Hi%2C+I+am+interested+in+Arrjava+Farms."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-xl border border-emerald-300 shadow-xs active:scale-98 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp Us (+91 81251 25055)</span>
            </a>

            {/* Call */}
            <a
              href="tel:+918125125055"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-slate-800 bg-stone-100 hover:bg-stone-200 rounded-xl border border-stone-200 active:scale-98 transition"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Hotline: 8125125055</span>
            </a>

            {/* Book Site Visit CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookVisitClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-md active:scale-98 transition cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Schedule Free Farm Visit</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
