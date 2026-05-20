import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight, X, Building, AreaChart, MessageSquare, CheckCircle2 } from "lucide-react";
import { PROJECTS, WHATSAPP_LINK } from "../data";
import { Project } from "../types";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Setup dynamic WhatsApp url for each project
  const getProjectWhatsappUrl = (projectName: string) => {
    const text = `Hello Veloxa Skyline, I'm highly interested in learning more about "${projectName}". Please share the pricing brochures and site visit timelines.`;
    return `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="projects" className="relative py-28 bg-gradient-to-b from-navy-950/40 to-luxury-black overflow-hidden">
      {/* Absolute vectors */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-950/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-12 left-0 w-80 h-80 bg-navy-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header and Filter representation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="text-left text-balance">
            <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-3">
              THE PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-[0.05em] uppercase">
              Bespoke <span className="italic text-gold-200">Skyline</span> Series
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mt-4" />
          </div>
          <p className="font-sans text-xs sm:text-sm text-gray-400 font-light max-w-sm md:text-right leading-relaxed">
            Every building in our flagship series sits at the confluence of structural integrity and aesthetic mastery. Click explore to view complete specifications.
          </p>
        </div>

        {/* Project Card Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-grid">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="group relative rounded-lg bg-navy-950/40 border border-gold-900/15 overflow-hidden transition-all duration-500 hover:border-gold-500/40 shadow-xl"
              id={`project-card-${project.id}`}
            >
              {/* Card visual wrapper */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Visual shade overlays */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                
                {/* Configuration Subtag */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-gold-500/30 px-3 py-1 rounded">
                  <span className="text-[10px] tracking-widest text-gold-300 font-mono font-medium uppercase">
                    {project.type}
                  </span>
                </div>

                {/* Micro Light Glow */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/0 hover:via-gold-400 to-transparent transition-all z-20" />
              </div>

              {/* Card Meta Content */}
              <div className="p-8 flex flex-col text-left">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl text-white font-light group-hover:text-gold-200 transition-colors uppercase">
                    {project.name}
                  </h3>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-gray-400 tracking-wider">STARTING FROM</span>
                    <span className="text-lg font-serif text-gold-400 tracking-wide font-medium">{project.startingPrice}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-400 text-xs font-light mb-6">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{project.location}</span>
                </div>

                <div className="border-t border-white/5 my-1" />

                {/* Display configuration and space */}
                <div className="grid grid-cols-2 gap-4 py-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-gold-400/80" />
                    <div className="text-left">
                      <span className="block text-[9px] font-mono text-gray-500 uppercase leading-none">CONFIG</span>
                      <span className="text-xs text-gray-200 font-medium">{project.configuration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AreaChart className="w-4 h-4 text-gold-400/80" />
                    <div className="text-left">
                      <span className="block text-[9px] font-mono text-gray-500 uppercase leading-none">BUILT AREA</span>
                      <span className="text-xs text-gray-200 font-medium">{project.builtArea}</span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/5 mb-6" />

                {/* Interactive CTA buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 text-center bg-navy-900 border border-gold-900/40 hover:border-gold-500 transition-all text-xs font-display font-medium tracking-widest text-white uppercase py-3 rounded hover:bg-gold-950/15 cursor-pointer"
                    id={`btn-explore-${project.id}`}
                  >
                    Explore Project Details
                  </button>
                  <a
                    href={getProjectWhatsappUrl(project.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 py-3 px-5 rounded text-xs font-display font-bold uppercase tracking-widest hover:from-gold-500 hover:to-gold-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    Inquire
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Embedded Beautiful Interactive Project Showcase Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            id="project-detail-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-navy-950 border border-gold-900/45 rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 text-white bg-black/70 hover:bg-gold-500 hover:text-navy-950 transition-colors rounded-full p-2"
                id="close-project-modal-btn"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Images column left */}
                <div className="md:col-span-5 relative h-64 md:h-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/40" />
                  
                  {/* Brand signature watermarked */}
                  <div className="absolute bottom-6 left-6">
                    <span className="block text-[10px] font-mono tracking-widest text-gold-400 uppercase">
                      VELOXA MASTER SERIES
                    </span>
                    <span className="font-serif text-lg text-white font-medium uppercase text-balance leading-tight">
                      {selectedProject.tagline}
                    </span>
                  </div>
                </div>

                {/* Content details right */}
                <div className="md:col-span-7 p-8 md:p-10 text-left flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase block mb-1">
                      {selectedProject.type} ARCHITECTURE
                    </span>
                    <h3 className="font-serif text-3xl text-white font-light uppercase tracking-wide mb-2">
                      {selectedProject.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-light mb-4">
                      <MapPin className="w-3.5 h-3.5 text-gold-500" />
                      <span>{selectedProject.location}</span>
                    </div>

                    <div className="border-t border-gold-900/30 my-4" />

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <span className="block text-[8px] font-mono text-gray-500 uppercase">CONFIG</span>
                        <span className="text-xs sm:text-sm text-white font-medium">{selectedProject.configuration}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-gray-500 uppercase">BUILT AREA</span>
                        <span className="text-xs sm:text-sm text-white font-medium">{selectedProject.builtArea}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-gray-500 uppercase">STARTING RATE</span>
                        <span className="text-xs sm:text-sm text-gold-400 font-semibold">{selectedProject.startingPrice}</span>
                      </div>
                    </div>

                    <h4 className="font-serif text-xs text-gray-300 font-bold tracking-widest uppercase mb-3">
                      PREMIUM SPEC HIGHLIGHTS:
                    </h4>
                    
                    {/* Tick Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {selectedProject.features.map((feat, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-300 leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gold-900/30 pt-6 mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getProjectWhatsappUrl(selectedProject.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-navy-950 font-display font-bold text-xs uppercase tracking-widest py-3 rounded transition-colors text-center shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      Inquire on WhatsApp
                    </a>
                    
                    <button
                      onClick={() => {
                        alert("Your request for PDF architectural Brochure has been submitted to Veloxa Concierge. We will share the details on your custom WhatsApp.");
                      }}
                      className="border border-white/10 hover:border-gold-500/40 text-xs font-display tracking-widest py-3 px-5 rounded text-white uppercase hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Get Brochure PDF
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
