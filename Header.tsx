import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageSquare } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_PREFILLED_MSG } from "../data";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Header({ onScrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Amenities", id: "amenities" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  const encodedMsg = encodeURIComponent(WHATSAPP_PREFILLED_MSG);
  const finalWhatsappLink = `${WHATSAPP_LINK}?text=${encodedMsg}`;

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-luxury-black/90 backdrop-blur-md border-b border-gold-900/40 py-3 shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and branding */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 cursor-pointer group text-left"
          id="nav-logo-btn"
        >
          <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold-500/30 group-hover:border-gold-400 bg-navy-950 flex items-center justify-center transition-all duration-300">
            <img
              src="/input_file_8.png"
              alt="Veloxa Skyline Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                // Try fallback
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

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-sans text-xs tracking-widest text-gray-300 hover:text-gold-300 transition-colors uppercase cursor-pointer relative py-1 group"
              id={`nav-link-${item.id}`}
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Action Button & Collapsible menu */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={finalWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded bg-gradient-to-r from-gold-600 to-gold-500 px-5 py-2.5 text-xs font-semibold tracking-widest text-navy-950 uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(230,185,40,0.4)]"
            id="navbar-cta-btn"
          >
            <span className="relative z-10 flex items-center gap-2 font-display">
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              Book a Site Visit
            </span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href={finalWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-gold-500 px-3 py-1.5 rounded text-[10px] font-bold tracking-widest text-navy-950 uppercase"
            id="mobile-quick-cta"
          >
            Site Visit
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-200 hover:text-gold-300 transition-colors focus:outline-none p-1"
            aria-label="Toggle Menu"
            id="mobile-menu-burger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gold-900/30 bg-navy-950/95 backdrop-blur-lg overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item, index) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="font-sans text-sm tracking-widest text-gray-300 hover:text-gold-300 text-left uppercase py-2 border-b border-white/5"
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.name}
                </motion.button>
              ))}
              <a
                href={finalWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 py-3 rounded font-display text-xs font-bold tracking-widest text-navy-950 uppercase mt-2 shadow-lg"
                id="mobile-drawer-cta"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Book a Site Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
