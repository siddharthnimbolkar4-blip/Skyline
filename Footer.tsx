import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { BRAND_NAME, OFFICE_ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS } from "../data";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    onScrollToSection("home");
  };

  return (
    <footer className="relative bg-luxury-black border-t border-gold-900/30 pt-20 pb-16 overflow-hidden">
      {/* Golden vector lights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand details (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <button
              onClick={() => onScrollToSection("home")}
              className="flex items-center gap-3 cursor-pointer group text-left mb-6"
              id="footer-logo-btn"
            >
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold-500/20 group-hover:border-gold-400 bg-navy-950 flex items-center justify-center transition-all duration-300">
                <img
                  src="/input_file_8.png"
                  alt="Veloxa Skyline Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    if (e.currentTarget.src.includes('input_file_8')) {
                      e.currentTarget.src = '/input_file_7.png';
                    } else if (e.currentTarget.src.includes('input_file_7')) {
                      e.currentTarget.src = '/input_file_0.png';
                    } else {
                      e.currentTarget.style.display = 'none';
                    }
                  }}
                />
              </div>
              <div>
                <span className="block font-display font-bold tracking-widest text-lg bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 text-transparent bg-clip-text">
                  VELOXA
                </span>
                <span className="block font-sans text-[9px] tracking-[0.25em] text-gray-400 font-medium">
                  SKYLINE GROUP
                </span>
              </div>
            </button>
            
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-6">
              Veloxa Skyline is Pune's signature developer group, delivering hyper-polished concrete-and-glass duplex penthouses and custom double-height private estates to select families.
            </p>

            {/* Social media circle badges */}
            <div className="flex items-center gap-3" id="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold-500/30 bg-navy-950/60 flex items-center justify-center text-gray-400 hover:text-gold-300 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold-500/30 bg-navy-950/60 flex items-center justify-center text-gray-400 hover:text-gold-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin Company"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold-500/30 bg-navy-950/60 flex items-center justify-center text-gray-400 hover:text-gold-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube Channel"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold-500/30 bg-navy-950/60 flex items-center justify-center text-gray-400 hover:text-gold-300 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Map (3 Cols) */}
          <div className="md:col-span-1" /> {/* Layout Buffer */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-400 font-light">
              <li>
                <button onClick={() => onScrollToSection("home")} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection("about")} className="hover:text-gold-300 transition-colors cursor-pointer">
                  The Architects (About)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection("projects")} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Signature Skyline Series
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection("amenities")} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Resort Amenities
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection("gallery")} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Interior Space gallery
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection("contact")} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Site Visit Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Contacts (3 Cols) */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase mb-6">
              LEGAL ADDRESS
            </span>
            <p className="font-sans text-[11px] sm:text-xs text-gray-400 font-light leading-relaxed mb-4">
              {OFFICE_ADDRESS}
            </p>
            <p className="font-sans text-[11px] sm:text-xs text-gray-400 font-light mb-1">
              Ring: <a href={`tel:${PHONE_NUMBER}`} className="text-white hover:text-gold-300 font-normal">+91 {PHONE_NUMBER}</a>
            </p>
            <p className="font-sans text-[11px] sm:text-xs text-gray-400 font-light">
              Mail: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white hover:text-gold-300 font-normal">{EMAIL_ADDRESS}</a>
            </p>
          </div>

        </div>

        {/* Divider hairline */}
        <div className="border-t border-gold-900/20 py-1" />

        {/* Copyright and back-to-top layout footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 text-[10px] sm:text-xs text-gray-500 font-mono" id="copyright-box">
          <div className="text-center sm:text-left">
            <span>© {currentYear} {BRAND_NAME} GROUP. ALL RIGHTS CONFERRED INDEPENDENTLY.</span>
          </div>

          {/* Back to top click trigger */}
          <button
            onClick={handleBackToTop}
            className="group flex items-center gap-1.5 text-gold-400 hover:text-gold-200 uppercase transition-colors font-semibold cursor-pointer"
            id="back-to-top-btn"
          >
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
