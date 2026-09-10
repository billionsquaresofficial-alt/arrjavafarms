import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Volume1, Sparkles, Play, Pause } from 'lucide-react';

export default function NatureSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85); // Loud, clear default volume!
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create HTML5 audio element for the loud, crystal-clear birds chirping sound
    const audio = new Audio('/assets/birds-chirping.wav');
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Try auto-play immediately if browser permits, or on first interaction
    const tryPlayAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {
            // Browser autoplay blocked until user gesture
          });
      }
    };

    // Attempt immediately on load
    tryPlayAudio();

    // User gesture listener for browsers that enforce autoplay policy
    const handleGesture = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((e) => console.log('Playback error:', e));
      }
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('scroll', handleGesture);
      window.removeEventListener('keydown', handleGesture);
    };

    window.addEventListener('click', handleGesture, { once: true });
    window.addEventListener('touchstart', handleGesture, { once: true });
    window.addEventListener('scroll', handleGesture, { once: true });
    window.addEventListener('keydown', handleGesture, { once: true });

    return () => {
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('scroll', handleGesture);
      window.removeEventListener('keydown', handleGesture);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Update volume
  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center gap-2">
      {/* Main Pill Button */}
      <div className="bg-[#123120]/95 backdrop-blur-md text-amber-50 p-2 sm:p-2 sm:pl-3.5 sm:pr-4 rounded-full shadow-2xl border border-emerald-600/50 flex items-center gap-2 sm:gap-3">
        
        {/* Toggle Play/Pause */}
        <button
          onClick={toggleAudio}
          className="flex items-center gap-2 hover:text-emerald-300 transition cursor-pointer"
          title={isPlaying ? "Pause Birds Chirping" : "Play Birds Chirping"}
        >
          {isPlaying ? (
            <>
              {/* Dancing sound bars */}
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-1 bg-amber-400 rounded-full h-3 animate-pulse" />
                <span className="w-1 bg-emerald-300 rounded-full h-4 animate-bounce" />
                <span className="w-1 bg-amber-300 rounded-full h-2 animate-pulse" />
              </div>
              <span className="hidden sm:inline text-xs font-bold text-amber-200 tracking-wide">
                Birdsong: On
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-stone-300" />
              <span className="hidden sm:inline text-xs font-semibold text-stone-300">
                Birdsong: Off
              </span>
            </>
          )}
        </button>

        {/* Volume Level Quick Selector */}
        {isPlaying && (
          <div className="hidden sm:flex items-center gap-1 border-l border-emerald-700/60 pl-2.5">
            <button
              onClick={() => handleVolumeChange(0.4)}
              className={`text-[10px] px-1.5 py-0.5 rounded font-bold transition cursor-pointer ${
                volume <= 0.5 ? 'bg-emerald-700 text-white' : 'text-stone-300 hover:text-white'
              }`}
              title="Low Volume"
            >
              Low
            </button>
            <button
              onClick={() => handleVolumeChange(0.85)}
              className={`text-[10px] px-1.5 py-0.5 rounded font-bold transition cursor-pointer ${
                volume > 0.5 && volume <= 0.9 ? 'bg-emerald-700 text-white' : 'text-stone-300 hover:text-white'
              }`}
              title="Loud Volume (Default)"
            >
              Loud
            </button>
            <button
              onClick={() => handleVolumeChange(1.0)}
              className={`text-[10px] px-1.5 py-0.5 rounded font-bold transition cursor-pointer ${
                volume > 0.9 ? 'bg-emerald-700 text-white' : 'text-stone-300 hover:text-white'
              }`}
              title="Max Volume"
            >
              Max
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
