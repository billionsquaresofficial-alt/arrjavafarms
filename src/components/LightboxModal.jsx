import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, ExternalLink, Play } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, mediaSrc, mediaTitle, mediaType = 'image' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mediaSrc) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-forest-950/95 backdrop-blur-2xl">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-6xl w-full max-h-[90vh] bg-forest-900 border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-4 bg-forest-950 border-b border-gold-500/20 flex items-center justify-between gap-4">
            <h3 className="font-serif text-base sm:text-lg font-bold text-sand-100 truncate">
              {mediaTitle || 'Arrjava Farms Asset'}
            </h3>

            <div className="flex items-center space-x-2">
              <a
                href={mediaSrc}
                download
                className="p-2 rounded-lg bg-forest-900 border border-forest-750 text-sand-300 hover:text-gold-300 transition-all"
                title="Download High-Res Media"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-forest-900 border border-forest-750 text-sand-300 hover:text-sand-100 hover:bg-forest-800 transition-all"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Media Viewport */}
          <div className="flex-1 bg-forest-950 flex items-center justify-center overflow-auto p-4 sm:p-6 min-h-[300px]">
            {mediaType === 'video' ? (
              <video
                src={mediaSrc}
                controls
                autoPlay
                className="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl"
              />
            ) : (
              <img
                src={mediaSrc}
                alt={mediaTitle || 'Arrjava Farms visual'}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            )}
          </div>

          {/* Bottom Caption */}
          <div className="p-3 bg-forest-950 border-t border-forest-850 text-center text-xs font-mono text-sand-400">
            ARRJAVA FARMS • A Farm Project by ABHISTA
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
