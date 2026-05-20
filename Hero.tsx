import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight, MessageSquare, Compass, X } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_PREFILLED_MSG } from "../data";
import heroImg from "../assets/images/hero_image_1779277705487.png";
import aureliaImg from "../assets/images/project_aurelia_1779277525953.png";
import obsidianImg from "../assets/images/project_obsidian_1779277549827.png";
import roomSunsetImg from "../assets/images/room_sunset_1779277614345.png";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Hero({ onScrollToSection }: HeroProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoSlideIdx, setVideoSlideIdx] = useState(0);

  const encodedMsg = encodeURIComponent(WHATSAPP_PREFILLED_MSG);
  const finalWhatsappLink = `${WHATSAPP_LINK}?text=${encodedMsg}`;

  // Interactive ambient video walkthrough slides
  const videoTourSlides = [
    {
      title: "The Celestial Lounge",
      desc: "Double-volume continuous glass walls framing neon horizon vistas.",
      src: aureliaImg
    },
    {
      title: "The Obsidian Grand Corridor",
      desc: "Monolithic architectural pillars highlighted with custom-carved LED backplates.",
      src: obsidianImg
    },
    {
      title: "The Golden Horizon Balcony",
      desc: "Step out onto standard stone sundecks framing magnificent sunset elevations.",
      src: roomSunsetImg
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black"
    >
      {/* Background Cinematic Render */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-navy-950/80 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-navy-950/50 to-transparent z-10" />
        <img
          src={heroImg}
          alt="Luxury Skyscraper Penthouse Render at Night"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 animate-[pulse_8s_infinite_alternate] brightness-[0.7] blur-[1px]"
        />
        {/* Glow & Atmospheric Lighting Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-navy-700/20 blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Subtle Golden Sub-badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-gold-500/20 bg-gold-950/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 cursor-default"
            id="hero-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
            <span className="font-display text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-gold-300 uppercase">
              The Sovereign Elevation Enclave
            </span>
          </motion.div>

          {/* Master Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.06em] leading-[1.05] text-white uppercase mb-6"
            id="hero-headline"
          >
            Elevating <span className="font-light italic text-gold-200">Lifestyles</span>.
            <br />
            Building <span className="font-medium tracking-normal text-gold-400 bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 text-transparent bg-clip-text">Legacies</span>.
          </motion.h1>

          {/* Luxury Decriptive Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-sans text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wide max-w-2xl leading-relaxed mb-10"
            id="hero-subheading"
          >
            Veloxa Skyline brings you iconic architectural landmarks designed with pure visual symmetry and hospitality-inspired scales, custom built for families who seek the profound.
          </motion.p>

          {/* CTA Interface Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            id="hero-ctas"
          >
            <button
              onClick={() => onScrollToSection("projects")}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-gold-500 bg-transparent px-8 py-4 text-xs font-semibold tracking-widest text-gold-300 uppercase rounded hover:text-navy-950 transition-colors duration-500 overflow-hidden"
              id="hero-explore-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <button
              onClick={() => setIsPlayingVideo(true)}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-navy-900/80 hover:bg-navy-800 border border-white/10 backdrop-blur px-8 py-4 text-xs font-semibold tracking-widest text-white uppercase rounded transition-all shadow-lg hover:border-gold-500/40"
              id="hero-video-btn"
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-gold-400/20 animate-ping group-hover:block" />
                <Play className="w-4 h-4 text-gold-400 fill-current" />
              </div>
              Watch Full Video
            </button>

            <a
              href={finalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 px-8 py-4 text-xs font-semibold tracking-widest text-navy-950 uppercase rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(194,147,26,0.35)]"
              id="hero-whatsapp-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              Book a Site Visit
            </a>
          </motion.div>
        </div>

        {/* Feature side overview display - Luxury bento highlight card */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="hidden lg:flex lg:col-span-4 flex-col gap-4 border border-gold-900/30 bg-navy-950/40 backdrop-blur-lg rounded-lg p-6 relative group overflow-hidden"
          id="hero-badge-sidebar"
        >
          {/* Subtle glowing lines */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-950 to-transparent" />

          <div className="flex items-center gap-3 mb-2">
            <Compass className="w-5 h-5 text-gold-400" />
            <span className="font-display text-[10px] tracking-[0.25em] font-medium text-gold-300 uppercase">
              Current Showcase
            </span>
          </div>

          <p className="font-serif text-xl font-light text-white leading-snug">
            “The pinnacle of architectural symmetry right on the premium sky corridors of Pune.”
          </p>

          <div className="border-t border-white/5 my-2" />

          <div className="flex items-center justify-between text-[11px] tracking-wider text-gray-400 font-mono">
            <span>LOCATION</span>
            <span className="text-white">BANER ROAD, PUNE</span>
          </div>
          <div className="flex items-center justify-between text-[11px] tracking-wider text-gray-400 font-mono">
            <span>UNITS</span>
            <span className="text-white">ULTRA-EXCLUSIVE PENTHOUSES</span>
          </div>
          <div className="flex items-center justify-between text-[11px] tracking-wider text-gray-400 font-mono">
            <span>STATUS</span>
            <span className="text-gold-300">LIMITED BOOKING OPEN</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical coordinates overlay for Behance luxury design scale */}
      <div className="absolute right-8 bottom-24 hidden md:flex flex-col items-center gap-3 pointer-events-none z-20">
        <span className="text-[10px] text-gold-400 font-mono tracking-[0.3em] uppercase rotate-90 my-12">
          VELOXA CO-ORDINATES
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold-500 to-transparent" />
      </div>

      <div className="absolute left-8 bottom-24 hidden md:flex flex-col items-center gap-3 pointer-events-none z-20">
        <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
          18.5583° N, 73.7915° E
        </span>
      </div>

      {/* Video / Cinema Slider Tour Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            id="video-player-modal"
          >
            <div className="relative w-full max-w-5xl bg-navy-950 border border-gold-900/50 rounded-lg overflow-hidden shadow-2xl">
              {/* Close controls */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="font-display text-xs tracking-widest text-gold-400 font-bold uppercase">
                    CINEMATIC MOVIE WALKTHROUGH
                  </span>
                </div>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  id="close-video-modal-btn"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Slider screen container */}
              <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={videoSlideIdx}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img
                      src={videoTourSlides[videoSlideIdx].src}
                      alt={videoTourSlides[videoSlideIdx].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover select-none"
                    />

                    {/* Meta info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/50 backdrop-blur-md p-6 rounded border border-white/5">
                      <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase">
                        SCENE 0{videoSlideIdx + 1} // IMMERSION RENDER
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-medium mt-1 uppercase">
                        {videoTourSlides[videoSlideIdx].title}
                      </h3>
                      <p className="text-xs text-gray-300 mt-1 max-w-xl font-light">
                        {videoTourSlides[videoSlideIdx].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Simulated playback tracking overlay line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy-900 z-30">
                  <motion.div
                    key={videoSlideIdx}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    onAnimationComplete={() => {
                      setVideoSlideIdx((prev) => (prev + 1) % videoTourSlides.length);
                    }}
                    className="h-full bg-gradient-to-r from-gold-500 to-gold-300"
                  />
                </div>
              </div>

              {/* Slider manual control panel */}
              <div className="flex items-center justify-between px-6 py-4 bg-navy-900/40 border-t border-white/10">
                <span className="text-[10px] text-gray-400 font-mono">
                  AUTO-FORWARD ACTIVE (6s)
                </span>
                <div className="flex items-center gap-2">
                  {videoTourSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setVideoSlideIdx(idx)}
                      className={`w-10 h-1.5 rounded transition-all ${
                        idx === videoSlideIdx ? "bg-gold-400 w-16" : "bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Jump to scene ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    const nextIdx = (videoSlideIdx + 1) % videoTourSlides.length;
                    setVideoSlideIdx(nextIdx);
                  }}
                  className="text-xs text-gold-400 font-semibold hover:text-gold-200 uppercase flex items-center gap-1 cursor-pointer"
                >
                  NEXT SCENE <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
