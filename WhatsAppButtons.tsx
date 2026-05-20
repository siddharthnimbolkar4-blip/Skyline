import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_PREFILLED_MSG } from "../data";

export function WhatsAppButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after some small scroll depth or immediately
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const encodedMsg = encodeURIComponent(WHATSAPP_PREFILLED_MSG);
  const finalWhatsappLink = `${WHATSAPP_LINK}?text=${encodedMsg}`;

  // Premium Custom WhatsApp SVG Logo
  const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.84.001-2.63-1.019-5.101-2.872-6.958C16.59 1.952 14.124.931 11.997.931c-5.444 0-9.866 4.416-9.869 9.843-.001 1.802.486 3.562 1.411 5.111l-.991 3.618 3.738-.981zm12.39-6.243c-.302-.151-1.786-.882-2.062-.983-.277-.101-.478-.151-.68.151-.2.302-.779.983-.956 1.184s-.351.226-.653.076c-.302-.151-1.274-.469-2.426-1.496-.897-.801-1.503-1.791-1.679-2.093-.176-.302-.019-.465.132-.614.136-.134.302-.351.453-.528.151-.176.201-.302.302-.503.101-.2.05-.377-.025-.528-.076-.151-.68-1.634-.931-2.24-.245-.589-.494-.509-.68-.519-.176-.01-.377-.01-.578-.01-.201 0-.528.076-.804.377-.276.302-1.056 1.031-1.056 2.516s1.081 2.917 1.232 3.118c.151.2 2.127 3.248 5.153 4.555.72.311 1.281.498 1.719.638.723.23 1.381.198 1.901.12.579-.087 1.786-.73 2.037-1.435.252-.704.252-1.308.176-1.435-.076-.127-.277-.201-.578-.352z" />
    </svg>
  );

  return (
    <>
      {/* Desktop Floating Action Circle (md up) */}
      <div
        className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ease-in-out transform ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-10 pointer-events-none"
        }`}
        id="whatsapp-floating-panel"
      >
        <a
          href={finalWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct chat with Veloxa Skyline"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#121c2c] border border-gold-500/50 text-[#25D366] hover:text-white hover:bg-[#25D366] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] cursor-pointer group"
          id="whatsapp-fab"
        >
          {/* Animated pulsing wave rings */}
          <span className="absolute -inset-1.5 rounded-full border border-[#25D366]/30 animate-ping pointer-events-none" />
          <span className="absolute -inset-3.5 rounded-full border border-[#25D366]/10 animate-pulse pointer-events-none" />

          {/* Icon */}
          <WhatsAppIcon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />

          {/* Direct descriptive hover popup tooltip */}
          <span className="absolute right-16 bg-navy-950 text-gold-300 border border-gold-900/40 font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            CONCIERGE ONLINE
          </span>
        </a>
      </div>

      {/* Sticky Mobile bottom bar layout (sm screens only) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-gold-900/40 p-3 shadow-2xl flex items-center justify-stretch">
        <a
          href={finalWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a] py-3.5 rounded font-display text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-green-950/40"
          id="mobile-sticky-whatsapp-btn"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          Chat on WhatsApp
        </a>
      </div>
    </>
  );
}
