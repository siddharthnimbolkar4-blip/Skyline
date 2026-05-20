import * as Icons from "lucide-react";
import { AMENITIES } from "../data";

export function Amenities() {
  return (
    <section id="amenities" className="relative py-26 bg-luxury-black overflow-hidden">
      {/* Decorative grids or soft background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-950/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading Pair */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-3">
            EQUIPPED FOR THE ELITE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-[0.05em] uppercase">
            Curated Resort <span className="italic text-gold-200">Amenities</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 font-light mt-3">
            At Veloxa Skyline, standard living is elevated into a permanent collection of active resort assets, managed under 5-star hospitality guidelines.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Icons Grid with clean aesthetic cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="amenities-grid">
          {AMENITIES.map((amenity) => {
            // Dynamically load the correct icon
            const IconComponent = (Icons as any)[amenity.iconName] || Icons.HelpCircle;

            return (
              <div
                key={amenity.id}
                className="group relative rounded border border-white/5 bg-navy-950/20 p-6 flex flex-col text-left transition-all duration-400 hover:border-gold-500/25 hover:bg-navy-950/40"
                id={`amenity-card-${amenity.id}`}
              >
                {/* Micro Border Glow */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 group-hover:w-full" />

                {/* Minimalist layout with icon top-left */}
                <div className="w-10 h-10 rounded bg-navy-900 border border-gold-900/40 flex items-center justify-center mb-5 group-hover:border-gold-500/50 group-hover:bg-gold-950/10 transition-colors">
                  <IconComponent className="w-4 h-4 text-gold-400 group-hover:text-gold-200" />
                </div>

                <h3 className="font-serif text-base text-white font-medium tracking-wide uppercase mb-2 group-hover:text-gold-300 transition-colors">
                  {amenity.name}
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
