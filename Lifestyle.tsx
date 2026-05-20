import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Sparkles, MessageSquare, ArrowRight, Eye } from "lucide-react";
import { LIFESTYLE_ROOMS, WHATSAPP_LINK } from "../data";

export function Lifestyle() {
  const [activeRoomIdx, setActiveRoomIdx] = useState(0);

  const getRoomWhatsappUrl = (title: string) => {
    const text = `Hello Veloxa Skyline, I'm enchanted by your "${title}" interior space. Can you share the architectural spec sheets and pricing packages?`;
    return `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
  };

  const activeRoom = LIFESTYLE_ROOMS[activeRoomIdx];

  return (
    <section id="gallery" className="relative py-28 bg-gradient-to-b from-luxury-black to-navy-950/60 overflow-hidden">
      {/* Structural horizontal framing border lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title paired description */}
        <div className="text-left mb-16 max-w-3xl">
          <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-3">
            IMMERSIVE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-[0.05em] uppercase">
            Interactive <span className="italic text-gold-200">Space</span> Collections
          </h2>
          <div className="w-20 h-px bg-gold-500 my-4" />
          <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            Click on any interior environment below to load its cinematic visual palette. Each area has been tailored by elite Hospitality Architects using natural stone, exotic timber wall-slats, and integrated warm continuous LED lines.
          </p>
        </div>

        {/* Dynamic Interactive Showroom Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="lifestyle-interactive-hub">
          
          {/* Left Column: Room Selectors (Behance-styled tabs) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center" id="room-tabs-column">
            {LIFESTYLE_ROOMS.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setActiveRoomIdx(idx)}
                className={`w-full text-left p-6 rounded border transition-all duration-400 flex flex-col cursor-pointer relative overflow-hidden ${
                  idx === activeRoomIdx
                    ? "bg-navy-900/60 border-gold-500/40 shadow-lg shadow-black/30"
                    : "bg-navy-950/20 border-white/5 hover:border-gold-900/20 hover:bg-navy-950/40"
                }`}
                id={`room-tab-${idx}`}
              >
                {/* Active Indicator Line on Right */}
                {idx === activeRoomIdx && (
                  <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold-500 to-gold-300" />
                )}

                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-[9px] tracking-widest ${idx === activeRoomIdx ? "text-gold-400" : "text-gray-500"}`}>
                    0{idx + 1} // MODEL ZONE
                  </span>
                </div>

                <span className={`font-serif text-base uppercase tracking-wide transition-colors ${idx === activeRoomIdx ? "text-gold-300 font-medium" : "text-gray-300 font-light"}`}>
                  {room.title}
                </span>

                <span className="text-[10px] font-mono text-gray-500 mt-1">
                  {room.meta}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Large Render Screen (Aesthetic Presentation) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-lg border border-gold-900/15 bg-navy-950/40 overflow-hidden relative shadow-2xl" id="room-viewer-column">
            
            {/* Aspect image screen with relative transitions */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoom.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeRoom.image}
                    alt={activeRoom.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle shader screen */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Hologram badge indicating high resolution render */}
              <div className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-md border border-gold-400/25 py-1 px-3 rounded flex items-center gap-1.5 pointer-events-none">
                <Eye className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span className="font-mono text-[9px] tracking-widest text-gold-300 font-bold uppercase">
                  CINEMATIC RENDER // ULTRA-RES
                </span>
              </div>
            </div>

            {/* Metas and narrative footer inside viewer box */}
            <div className="p-8 text-left bg-navy-950/80 backdrop-blur border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="max-w-md">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase">
                  METROPOLITAN SPECIFICATION
                </span>
                <h3 className="font-serif text-xl text-white uppercase font-light mt-0.5 mb-2">
                  {activeRoom.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  {activeRoom.description}
                </p>
              </div>

              {/* Direct Inquiry Connection for this specific design */}
              <a
                href={getRoomWhatsappUrl(activeRoom.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-navy-950 px-6 py-3.5 rounded text-xs font-display font-bold uppercase tracking-widest transition-colors duration-300 shadow-md whitespace-nowrap self-stretch sm:self-auto justify-center"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                Select Style
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
