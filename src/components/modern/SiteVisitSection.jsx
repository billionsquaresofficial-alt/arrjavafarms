import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Phone, MessageCircle, MapPin, CheckCircle, Clock, Send, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export default function SiteVisitSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    plotSize: '400 – 600 Sq. Yds',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#166534', '#15803d', '#f59e0b', '#dcfce7']
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Arrjava Farms Team, I would like to schedule a site visit.\nName: ${formData.name || 'Interested Buyer'}\nPhone: ${formData.phone || 'Not provided'}\nPreferred Date: ${formData.date || 'Flexible'}\nPlot Size: ${formData.plotSize}`
  );

  return (
    <section id="visit" className="py-20 sm:py-28 bg-white border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-900 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
            Experience Arrjava Farms
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 mt-4 tracking-tight">
            Schedule Your Free Site Visit
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed font-sans">
            Walking the land, smelling the fresh mango trees, and seeing the infrastructure firsthand is the best way to choose your dream plot. Complimentary cab assistance available upon request.
          </p>
        </div>

        {/* 2-Column Booking & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-emerald-50/40 p-7 sm:p-9 rounded-[2.5rem] border border-emerald-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                  Site Visit Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our senior project coordinator will call you at <span className="font-bold text-slate-900">{formData.phone}</span> to confirm your scheduled slot and provide turn-by-turn route assistance.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/918125125055?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-6 py-3 rounded-full transition shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-amber-300" />
                    <span>Send Details on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        date: '',
                        plotSize: '400 – 600 Sq. Yds',
                        notes: '',
                      });
                    }}
                    className="text-xs font-bold text-emerald-800 hover:underline px-3 py-2 cursor-pointer"
                  >
                    Book for someone else
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 81251 25055"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Date of Visit
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Plot Size Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Interested Plot Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['200 – 300 Sq. Yds', '400 – 600 Sq. Yds', '800+ Sq. Yds'].map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setFormData({ ...formData, plotSize: size })}
                        className={`text-xs font-bold py-2.5 px-2 rounded-xl border text-center transition cursor-pointer ${
                          formData.plotSize === size
                            ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                            : 'bg-white text-slate-700 border-stone-300 hover:border-emerald-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Special Requests or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Interested in plots near the mango grove or temple..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-99 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Confirm Free Site Visit</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 Your contact information remains strictly confidential. No spam guaranteed.
                </p>
              </form>
            )}
          </div>

          {/* Assistance & Directions Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Sales Hotline with 8125125055 */}
            <div className="bg-emerald-900 text-white rounded-[2.5rem] p-7 shadow-md space-y-4 border border-emerald-700">
              <span className="text-[10px] uppercase font-extrabold tracking-widest bg-emerald-800/80 px-3 py-1 rounded-full text-amber-300 border border-emerald-600">
                Direct Inquiry Hotline
              </span>
              <h3 className="font-serif text-2xl font-bold">
                Speak With Project Advisors
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Need immediate pricing, plot availability chart, or turn-by-turn route assistance? Our project advisors are available every day from 9:00 AM to 7:00 PM.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="https://wa.me/918125125055?text=Hi%2C+I+am+inquiring+about+Arrjava+Farms+plots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Chat on WhatsApp (+91 81251 25055)</span>
                </a>
                <a
                  href="tel:+918125125055"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call: +91 81251 25055</span>
                </a>
              </div>
            </div>

            {/* GPS & Location Card */}
            <div className="bg-emerald-50/50 rounded-[2.5rem] p-6 border border-emerald-200/80 shadow-xs flex items-center gap-5">
              <img
                src="/assets/cropped/qr-code.png"
                alt="Arrjava Farms GPS QR Code"
                className="w-20 h-20 object-contain rounded-2xl bg-white p-1.5 border border-emerald-200 shadow-2xs shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                  Scan for GPS Navigation
                </span>
                <h4 className="font-serif text-lg font-bold text-slate-900 mt-0.5">
                  Begumpet Village, Patancheru
                </h4>
                <a
                  href={PROJECT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline mt-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Google Maps Pin</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
