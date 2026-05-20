import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { BRAND_NAME, PHONE_NUMBER, EMAIL_ADDRESS, OFFICE_ADDRESS, PROJECTS, WHATSAPP_LINK } from "../data";
import { InquiryForm } from "../types";

export function Contact() {
  const [formData, setFormData] = useState<InquiryForm>({
    name: "",
    mobile: "",
    email: "",
    project: PROJECTS[0].name,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile dynamic rich text for WhatsApp lead redirection
    const heading = `Hello ${BRAND_NAME} Residency Group,\n\nI would like to file an official site visit request. Details as entered:\n\n`;
    const details = `• Name: ${formData.name || "Intersted Client"}\n• Mobile: ${formData.mobile || "Specified on chat"}\n• Email: ${formData.email || "Not specified"}\n• Selected Project: ${formData.project}\n• Message: ${formData.message || "Intersted in luxury site consult"}`;
    const fullText = heading + details;

    const encodedText = encodeURIComponent(fullText);
    const finalLink = `${WHATSAPP_LINK}?text=${encodedText}`;

    setSubmitted(true);

    // Let state refresh and trigger redirect
    setTimeout(() => {
      window.open(finalLink, "_blank");
      setSubmitted(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-navy-950/40 to-luxury-black overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-3/4 left-10 w-96 h-96 bg-navy-800/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Alignment header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-3">
            PORTAL FOR THE EXCLUSIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-[0.05em] uppercase">
            Inquire & <span className="italic text-gold-200">Register</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 font-light mt-3">
            Submit your information below to automatically configure your custom visitation pass. All entries redirect securely to our private digital WhatsApp concierge.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="contact-panel-matrix">
          
          {/* Left Column: Client Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7 bg-navy-950/40 border border-gold-900/15 rounded-lg p-8 md:p-10 shadow-2xl relative" id="inquiry-form-card">
            
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            <h3 className="font-serif text-2xl text-white font-light uppercase tracking-wide mb-6 text-left">
              Bespoke Site Visit Registration
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-[10px] text-gold-400 tracking-widest uppercase">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Anand Singhania"
                    className="bg-navy-900 border border-white/5 hover:border-gold-900 focus:border-gold-500 transition-colors rounded p-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                {/* Mobile number field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="mobile" className="font-mono text-[10px] text-gold-400 tracking-widest uppercase">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98XXX XXXXX"
                    className="bg-navy-900 border border-white/5 hover:border-gold-900 focus:border-gold-500 transition-colors rounded p-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email address field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-[10px] text-gold-400 tracking-widest uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. anand@singhania.com"
                    className="bg-navy-900 border border-white/5 hover:border-gold-900 focus:border-gold-500 transition-colors rounded p-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                {/* Project selector dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="project" className="font-mono text-[10px] text-gold-400 tracking-widest uppercase">
                    Select Elite Project *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="bg-navy-900 border border-white/5 hover:border-gold-900 focus:border-gold-500 transition-colors rounded p-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                  >
                    {PROJECTS.map((proj) => (
                      <option key={proj.id} value={proj.name}>
                        {proj.name} ({proj.type})
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Message text area */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[10px] text-gold-400 tracking-widest uppercase">
                  Custom Consultation Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your preferred sizing, custom configuration preferences, or ideal site visit schedule..."
                  className="bg-navy-900 border border-white/5 hover:border-gold-900 focus:border-gold-500 transition-colors rounded p-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-500 resize-none"
                />
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-display font-bold text-xs uppercase tracking-widest py-4 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,185,40,0.35)] cursor-pointer"
                id="contact-submit-btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {submitted ? "Redirecting Securely to WhatsApp..." : "Initialize Booking on WhatsApp"}
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <span className="block text-center text-[10px] text-gray-400 font-mono">
                * Zero third-party indexing. We strictly value absolute client NDA confidentiality.
              </span>

            </form>

          </div>

          {/* Right Column: Corporate Contacts Details Card (5 Columns) */}
          <div className="lg:col-span-1" /> {/* Layout space buffer */}
          <div className="lg:col-span-4 space-y-8 flex flex-col text-left" id="contact-address-card">
            
            {/* Header */}
            <div>
              <span className="font-mono text-[10px] text-gold-400 tracking-[0.3em] uppercase block mb-1">
                CORPORATE OFFICING
              </span>
              <h3 className="font-serif text-2xl text-white font-light uppercase tracking-wide">
                Private Concierge
              </h3>
              <p className="font-sans text-xs text-gray-400 mt-2 font-light leading-relaxed">
                Our Baner experience lounge is active for in-person floor visualizer walks and landscape walkthroughs.
              </p>
            </div>

            <div className="border-t border-gold-900/40 my-1" />

            {/* List Contact Details */}
            <div className="space-y-6">
              
              {/* Address detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-gold-900/30 bg-navy-950/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-none mb-1.5">
                    EXCHANGE LOUNGE ADDRESS
                  </span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {OFFICE_ADDRESS}
                  </span>
                </div>
              </div>

              {/* Phone detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-gold-900/30 bg-navy-950/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-none mb-1.5">
                    DIRECT PRIVATE RING
                  </span>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-white hover:text-gold-300 transition-colors font-medium">
                    +91 {PHONE_NUMBER}
                  </a>
                  <span className="text-[10px] text-gray-400 font-sans mt-0.5 font-light">Available 9:00 AM — 9:00 PM</span>
                </div>
              </div>

              {/* Email detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-gold-900/30 bg-navy-950/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-none mb-1.5">
                    NDA EMAIL EXCHANGE
                  </span>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-sm text-white hover:text-gold-300 transition-colors font-medium">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              {/* Hours detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-gold-900/30 bg-navy-950/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-none mb-1.5">
                    VISITATION TIMINGS
                  </span>
                  <span className="text-xs text-gray-300 font-light">
                    Monday — Sunday // 10:00 AM — 08:30 PM
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
