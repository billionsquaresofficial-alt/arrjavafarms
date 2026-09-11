import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Video } from 'lucide-react';

export default function VideoTourSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videoList = [
    {
      title: "3D Project Walkthrough (2 Min)",
      badge: "Full 3D Elevation",
      src: "/assets/videos/walkthrough-3d.mp4",
      desc: "Complete 3D walkthrough showcasing the grand gated archway, internal avenue roads, swimming pool, and community spaces.",
    },
    {
      title: "Aerial Drone Overview — Reel 1",
      badge: "On-Ground Drone",
      src: "/assets/videos/drone-reel-1.mp4",
      desc: "High-angle drone footage capturing the expanse of the project, mature mango plantations, and road layout.",
    },
    {
      title: "Infrastructure & Road Network — Reel 2",
      badge: "Road Infrastructure",
      src: "/assets/videos/drone-reel-2.mp4",
      desc: "Close-up perspective of the wide wet-mix avenues, curbing stones, and open plot boundary markers.",
    },
    {
      title: "Community & Green Canopy — Reel 3",
      badge: "Surrounding Views",
      src: "/assets/videos/drone-reel-3.mp4",
      desc: "Sweeping views of the natural green canopy and the tranquil countryside ambiance around Begumpet village.",
    },
  ];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleSelectVideo = (idx) => {
    setActiveVideo(idx);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  return (
    <section id="tour" className="py-20 sm:py-28 bg-[#f5ede2]/60 border-t border-[#e5d9ca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#6d351a] bg-[#f7efe5] px-4 py-1.5 rounded-full border border-[#debfa5]">
            Virtual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#16271e] mt-4 tracking-tight">
            Official 3D Walkthrough & Drone Tour
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed font-sans">
            Experience the scale, road corridors, and verdant beauty of Arrjava Farms. Watch the 3D elevation walkthrough and on-ground aerial drone reels.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-4 sm:p-7 shadow-xl border border-[#e4d9ca]">
          
          {/* Main Video Viewport */}
          <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-video group shadow-inner">
            <video
              ref={videoRef}
              src={videoList[activeVideo].src}
              className="w-full h-full object-contain"
              muted={isMuted}
              playsInline
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause Overlay */}
            <div
              onClick={handleTogglePlay}
              className={`absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#183d2a] flex items-center justify-center shadow-2xl backdrop-blur-xs transform group-hover:scale-105 transition">
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-[#183d2a]" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#183d2a] ml-1" />
                )}
              </div>
            </div>

            {/* Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="hover:text-amber-300 transition cursor-pointer p-1"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleToggleMute}
                  className="hover:text-amber-300 transition cursor-pointer p-1"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-stone-300 font-medium">
                  {videoList[activeVideo].title}
                </span>
              </div>

              <button
                onClick={handleFullscreen}
                className="hover:text-amber-300 transition cursor-pointer p-1"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Current Video Info */}
          <div className="mt-5 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase text-[#6d351a] bg-[#f9efe2] px-2.5 py-1 rounded border border-[#e2cfbd]">
                {videoList[activeVideo].badge}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#16271e] mt-1.5">
                {videoList[activeVideo].title}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                {videoList[activeVideo].desc}
              </p>
            </div>
          </div>

          {/* Video Selector Tabs */}
          <div className="mt-6 pt-5 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {videoList.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectVideo(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeVideo === idx
                    ? 'bg-[#f6ede1] border-[#c98e4d] shadow-sm'
                    : 'bg-[#faf7f2] border-[#e8ded0] hover:bg-[#f3ede3]'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
                  <Video className={`w-3.5 h-3.5 ${activeVideo === idx ? 'text-[#6d351a]' : 'text-stone-400'}`} />
                  <span className="truncate">{item.title}</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                  {item.badge}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
