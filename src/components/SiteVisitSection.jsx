import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, MessageSquare, Calendar, Clock, CheckCircle2, QrCode, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_INFO } from '../data/projectData';

export default function SiteVisitSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger luxury celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#cfae6b', '#dec795', '#3c9b6e', '#ffffff']
    });

    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: 'Morning (09:00 AM - 12:00 PM)',
      notes: ''
    });
  };

  return (
    <section id="visit" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            18 • Experience the Land / Site Visit
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Come Experience the Land <span className="text-gold-gradient">In Person</span>
          </h2>
          <p className="text-sand-300 text-sm sm:text-base font-light leading-relaxed">
            Walk the mature mango avenues, experience the spiritual stillness at the Ganesha temple, inspect the demarcated plot boundaries, and visualize your future dream home.
          </p>
        </div>

        {/* 2-Column Grid: Location Card & Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Directions & QR Scan Card */}
          <div className="lg:col-span-5 bg-forest-950 p-8 sm:p-10 rounded-3xl border border-gold-500/30 shadow-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gold-400">
                <MapPin className="w-6 h-6" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  Property Directions
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-sand-50">
                  Arrjava Farms
                </h3>
                <p className="text-xs sm:text-sm text-sand-300 mt-1 font-light">
                  Begumpet Village, Near Patancheru, Mumbai Highway Corridor
                </p>
              </div>

              {/* QR Code Scan Section */}
              <div className="p-6 rounded-2xl bg-forest-900/90 border border-gold-500/20 flex items-center space-x-5">
                <div className="w-24 h-24 bg-white p-2 rounded-xl flex-shrink-0 shadow-lg flex items-center justify-center">
                  <img
                    src="/assets/cropped/qr-code.png"
                    alt="Scan Location QR"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-300 font-bold">
                    Scan for Location
                  </h4>
                  <p className="text-[11px] text-sand-300 font-light leading-relaxed">
                    Point your mobile camera at this QR code to navigate directly via Google Maps.
                  </p>
                </div>
              </div>

              {/* Key Distance Quick Badges */}
              <div className="space-y-2 pt-2 text-xs text-sand-300 font-mono">
                <div className="flex justify-between py-1.5 border-b border-forest-850">
                  <span>Narasapur State Highway</span>
                  <span className="text-gold-300 font-bold">1 KM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-forest-850">
                  <span>Aurobindo Sansa County</span>
                  <span className="text-gold-300 font-bold">4 KM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-forest-850">
                  <span>Outer Ring Road (ORR)</span>
                  <span className="text-gold-300 font-bold">10 KM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>Patancheru Junction</span>
                  <span className="text-gold-300 font-bold">14 KM</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Button */}
            <div className="pt-4 border-t border-forest-850">
              <a
                href={PROJECT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-gold-500 text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:brightness-110 active:scale-95 transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Schedule a Guided Site Visit Form */}
          <div className="lg:col-span-7 bg-forest-950/80 p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-2xl flex flex-col justify-center">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sand-50">
                  Site Visit Request Received
                </h3>
                <p className="text-xs sm:text-sm text-sand-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-gold-300">{formData.name}</strong>. Our project coordinator will contact you shortly at <strong className="text-gold-300">{formData.phone}</strong> to confirm your personalized tour of Arrjava Farms.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider hover:border-gold-400 transition-all"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-mono">
                    VIP Site Experience
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-sand-50">
                    Schedule Your Personalized Visit
                  </h3>
                  <p className="text-xs text-sand-300 font-light">
                    Our team will arrange a guided on-ground walk through the mango groves and layout.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-sand-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-750 focus:border-gold-400 text-sand-100 text-xs placeholder-sand-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-sand-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-750 focus:border-gold-400 text-sand-100 text-xs placeholder-sand-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-sand-300 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-750 focus:border-gold-400 text-sand-100 text-xs placeholder-sand-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-sand-300 mb-1.5">
                      Preferred Time
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-750 focus:border-gold-400 text-sand-100 text-xs focus:outline-none transition-colors"
                    >
                      <option>Morning (09:00 AM - 12:00 PM)</option>
                      <option>Afternoon (12:00 PM - 03:30 PM)</option>
                      <option>Evening Golden Hour (03:30 PM - 06:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-sand-300 mb-1.5">
                    Special Requirements or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Interested in weekend farm plot dimensions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-forest-900 border border-forest-750 focus:border-gold-400 text-sand-100 text-xs placeholder-sand-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Site Visit Request</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
