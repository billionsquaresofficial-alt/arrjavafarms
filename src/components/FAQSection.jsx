import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/projectData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-28 bg-forest-950 text-sand-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-900 px-3 py-1 rounded-full border border-gold-500/20">
            17 • Frequently Asked Questions
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-sand-300 text-sm sm:text-base font-light">
            Clear, transparent answers to help you understand every aspect of Arrjava Farms.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-forest-900 border-gold-400/60 shadow-xl shadow-gold-500/10'
                    : 'bg-forest-900/50 border-gold-500/15 hover:border-gold-500/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-xs text-gold-400 font-semibold flex-shrink-0">
                      Q{idx + 1}.
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-sand-100">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full bg-forest-950/60 text-gold-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-gold-500 text-forest-950' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-sand-300 font-light leading-relaxed border-t border-forest-800/80">
                        <div className="p-4 rounded-xl bg-forest-950/60 border border-gold-500/10 text-sand-200">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
