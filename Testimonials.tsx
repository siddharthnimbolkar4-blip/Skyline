import { Star, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-26 bg-luxury-black overflow-hidden">
      {/* Structural divider lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title elements */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-3">
            VERIFIED RESIDENT OPINIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-[0.05em] uppercase">
            Voices of the <span className="italic text-gold-200">Sovereign</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 font-light mt-3">
            Read authentic statements from the industrial leaders, tech partners, and health practitioners who have chosen Veloxa Skyline as their base.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Testimonials Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="group relative rounded border border-white/5 bg-navy-950/25 p-8 flex flex-col justify-between text-left transition-all duration-400 hover:border-gold-500/25 hover:bg-navy-950/45 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              id={`testimonial-card-${idx}`}
            >
              {/* Top border dynamic highlight line */}
              <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div>
                {/* Gold star rating layout */}
                <div className="flex items-center gap-1 mb-6" id={`stars-rating-t-${t.id}`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold-400 fill-current"
                    />
                  ))}
                </div>

                <p className="font-serif text-sm sm:text-base text-gray-200 font-light italic leading-relaxed mb-6">
                  “{t.content}”
                </p>
              </div>

              <div>
                <div className="border-t border-white/5 my-4" />
                <div className="flex flex-col">
                  <span className="font-sans text-sm text-white font-medium">
                    {t.name}
                  </span>
                  <span className="font-mono text-[9px] text-gold-300 uppercase tracking-widest mt-0.5">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
