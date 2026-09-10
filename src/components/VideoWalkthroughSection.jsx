import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, 
  Sparkles, Video, Film, CheckCircle2, Clapperboard 
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function VideoWalkthroughSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('/assets/videos/walkthrough-3d.mp4');
  const [videoTitle, setVideoTitle] = useState('Official 3D Walkthrough Tour (2 Min)');
  const videoRef = useRef(null);

  const videoList = [
    {
      id: "walkthrough",
      title: "Official 3D Walkthrough (2 Min)",
      src: "/assets/videos/walkthrough-3d.mp4",
      tag: "Master 3D Film",
      desc: "Complete architectural and landscape 3D visualization."
    },
    {
      id: "reel-1",
      title: "Project Aerial Reel 01",
      src: "/assets/videos/drone-reel-1.mp4",
      tag: "Site Footage",
      desc: "Ground and aerial perspectives of the project extent."
    },
    {
      id: "reel-2",
      title: "Project Aerial Reel 02",
      src: "/assets/videos/drone-reel-2.mp4",
      tag: "Site Footage",
      desc: "Avenue plantation and boundary development view."
    },
    {
      id: "reel-3",
      title: "Project Aerial Reel 03",
      src: "/assets/videos/drone-reel-3.mp4",
      tag: "Site Footage",
      desc: "Natural surroundings and road approach corridor."
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video.src);
    setVideoTitle(video.title);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section id="walkthrough" className="py-28 bg-forest-900 border-t border-b border-gold-500/15 text-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase bg-forest-950 px-3 py-1 rounded-full border border-gold-500/20">
            12 • 3D Walkthrough Tour
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Immerse Yourself in the <span className="text-gold-gradient">3D Walkthrough</span>
            </h2>
            <p className="text-sand-300 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Experience the complete virtual tour of Arrjava Farms, showcasing the grand entrance arch, clubhouse, pool, temple sanctum, and scenic avenues.
            </p>
          </div>

          {/* Video Selector Buttons */}
          <div className="flex flex-wrap gap-2">
            {videoList.map((v) => (
              <button
                key={v.id}
                onClick={() => handleVideoSelect(v)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedVideo === v.src
                    ? 'bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/10'
                    : 'bg-forest-950 text-sand-300 hover:text-sand-100 hover:bg-forest-850 border border-forest-800'
                }`}
              >
                {v.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Video Player Container */}
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-forest-950 shadow-2xl group">
          
          <div className="relative aspect-video w-full bg-forest-950 flex items-center justify-center">
            <video
              ref={videoRef}
              src={selectedVideo}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
              poster="/assets/cropped/entrance-arch-render.png"
            />

            {/* Centered Play/Pause Button on Idle */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-forest-950/40 flex items-center justify-center cursor-pointer backdrop-blur-xs transition-opacity"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-forest-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-forest-950 ml-1" />
                </div>
              </div>
            )}

            {/* Bottom Controls Bar (Visible on Hover or Pause) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent flex items-center justify-between gap-4 z-20">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-full bg-gold-500 text-forest-950 hover:brightness-110 transition-all shadow-md"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-forest-950" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-full bg-forest-900/80 border border-gold-500/30 text-gold-300 hover:text-gold-100 transition-all"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-serif text-xs sm:text-sm font-semibold text-sand-100 hidden sm:inline-block">
                  {videoTitle}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-mono text-gold-400 bg-forest-900/80 px-2.5 py-1 rounded-md border border-gold-500/20">
                  HD 1080p
                </span>
                <button
                  onClick={handleFullscreen}
                  className="p-2.5 rounded-full bg-forest-900/80 border border-gold-500/30 text-sand-200 hover:text-gold-300 transition-all"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Highlights Row */}
          <div className="p-6 bg-forest-950 border-t border-forest-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-sand-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Grand Archway</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Avenue Plantation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Club & Pool</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Temple Sanctum</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
