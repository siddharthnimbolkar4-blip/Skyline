import { CheckCircle, Award, ShieldCheck, Compass } from "lucide-react";
import aboutImg from "../assets/images/about_image_1779277725521.png";

export function About() {
  const stats = [
    { label: "Elite Projects Completed", value: "5+ Landmarks" },
    { label: "Elite Happy Families", value: "500+ Residents" },
    { label: "Premium Area Delivered", value: "2M+ Sq. Ft." }
  ];

  return (
    <section id="about" className="relative py-28 bg-luxury-black overflow-hidden">
      {/* Decorative backing pattern */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-navy-950/20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-gold-950/10 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Cinematic Building Entrance Exterior */}
          <div className="relative group overflow-hidden rounded-lg pr-4 pb-4" id="about-image-column">
            {/* Elegant Golden Picture Frame Outline */}
            <div className="absolute right-0 bottom-0 top-12 left-12 border border-gold-500/20 rounded-lg pointer-events-none z-0" />
            
            <div className="relative z-10 overflow-hidden rounded-lg border border-white/5 shadow-2xl">
              <img
                src={aboutImg}
                alt="Veloxa Luxury Building Entrance"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.9]"
              />
              {/* Image gradient masking */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Small Overlay Medal */}
              <div className="absolute bottom-6 left-6 right-6 bg-navy-950/90 backdrop-blur-md border border-gold-900/40 p-4 rounded flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-950/50 flex items-center justify-center border border-gold-500/40">
                  <Award className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono tracking-widest text-gold-300 uppercase">
                    CERTIFIED BY VELOXA
                  </span>
                  <span className="block text-xs text-white font-medium">
                    Sustainable & Smart Awwward Luxury Build
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Typography & Metrics */}
          <div className="flex flex-col text-left" id="about-narrative-column">
            <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-3">
              ESTABLISHING BENCHMARKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight uppercase mb-6">
              Designing For Those Who <span className="italic text-gold-200">Value the Infinite</span>
            </h2>
            
            <div className="w-20 h-px bg-gold-500 my-2" />

            <p className="font-sans text-gray-300 text-sm sm:text-base font-light leading-relaxed my-6">
              Veloxa Skyline is not simply a real estate group. We are curation directors of residential space. Driven by futuristic structural logic, clean minimalist lines, and premium hospitality standards, our estates represent Pune's most desirable private heights.
            </p>
            
            <p className="font-sans text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
              Every detail – from custom integrated linear warm illumination arrays to standard double height dimensions – is aligned to create absolute harmony. Located exclusively in Baner's prime postcodes, Veloxa projects stand as monuments of success.
            </p>

            {/* Premium Stat Divider Line */}
            <div className="border-t border-gold-900/30 my-2" />

            {/* Statistics Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6" id="about-stats-row">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl text-gold-400 font-light tracking-wide mb-1">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs tracking-wider text-gray-400 uppercase leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-b border-gold-900/30 mt-2 mb-8" />

            {/* Minimal Highlight badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span className="text-xs text-gray-300 font-medium font-sans">100% RERA Registered</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-gold-400" />
                <span className="text-xs text-gray-300 font-medium font-sans">Eco-Conscious Infrastructure</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
