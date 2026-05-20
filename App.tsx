import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeatureHighlights } from "./components/FeatureHighlights";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Amenities } from "./components/Amenities";
import { Lifestyle } from "./components/Lifestyle";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButtons } from "./components/WhatsAppButtons";

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="main-app" className="relative min-h-screen bg-luxury-black text-gray-100 overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
      {/* Immersive glow background vectors hidden behind */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-navy-950/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[50vw] h-[50vw] bg-gold-950/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating interactive header navbar */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* Hero section intro */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* Feature highlights badge grid */}
      <FeatureHighlights />

      {/* Split building exterior and metrics about section */}
      <About />

      {/* Premium signature series properties show */}
      <Projects />

      {/* Curated luxury assets/amenities */}
      <Amenities />

      {/* Interactive lounge/lifestyle ambient display */}
      <Lifestyle />

      {/* Verified homeowner testimonials */}
      <Testimonials />

      {/* Secured WhatsApp concierge contact portal */}
      <Contact />

      <div className="border-t border-gold-900/10" />

      {/* Final footer branding and copyright */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Floating & sticky WhatsApp call action modules */}
      <WhatsAppButtons />
    </div>
  );
}
