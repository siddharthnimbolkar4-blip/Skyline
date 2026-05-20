import * as Icons from "lucide-react";
import { FEATURES } from "../data";

export function FeatureHighlights() {
  return (
    <section id="highlights" className="relative py-24 bg-gradient-to-b from-luxury-black to-navy-950/60 overflow-hidden">
      {/* Visual divider design */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading Pair */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-3">
            THE ESSENCE OF VELOXA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-[0.05em] uppercase">
            Four Pillars of <span className="italic text-gold-200">Uncompromised</span> Luxury
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="feature-grid">
          {FEATURES.map((feature, i) => {
            // Find icon dynamically
            const IconComponent = (Icons as any)[feature.iconName] || Icons.Sparkles;

            return (
              <div
                key={i}
                className="group relative rounded-lg border border-gold-900/15 bg-navy-950/30 backdrop-blur-md p-8 overflow-hidden transition-all duration-500 hover:border-gold-500/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(4,6,9,0.8)]"
                id={`feature-card-${i}`}
              >
                {/* Subtle Hover Gradient Aura */}
                <div className="absolute -inset-px bg-gradient-to-b from-gold-400/0 via-gold-400/0 to-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Aesthetic Icon Box */}
                <div className="w-12 h-12 rounded-lg bg-navy-900 border border-gold-900/45 flex items-center justify-center mb-6 group-hover:border-gold-500/60 group-hover:bg-gold-950/20 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-gold-400 group-hover:text-gold-300 group-hover:scale-110 transition-all" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg text-white font-medium tracking-wide mb-3 group-hover:text-gold-200 transition-colors uppercase">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
