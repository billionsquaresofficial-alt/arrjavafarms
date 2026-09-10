import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export default function ModernLightboxModal({ isOpen, onClose, mediaSrc, mediaTitle }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Close Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 max-w-5xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-white font-serif">
              {mediaTitle || 'Arrjava Farms High Resolution Inspection'}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={mediaSrc}
              download
              className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition"
              title="Download image"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="p-4 sm:p-6 flex-1 flex items-center justify-center overflow-auto bg-stone-950">
          <img
            src={mediaSrc}
            alt={mediaTitle}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-stone-950 border-t border-stone-900 flex items-center justify-between text-xs text-stone-400">
          <span>ARRJAVA FARMS • Official Project Visual</span>
          <button
            onClick={onClose}
            className="text-emerald-400 hover:underline cursor-pointer"
          >
            Close Viewer (Esc)
          </button>
        </div>

      </div>
    </div>
  );
}
