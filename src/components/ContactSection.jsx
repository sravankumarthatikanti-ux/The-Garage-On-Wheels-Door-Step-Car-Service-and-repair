import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function ContactSection({ onOpenBooking }) {
  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl({ serviceName: "Direct Contact & Dispatch" });
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#080A0D] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[350px] bg-ice/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
            <Navigation className="w-3.5 h-3.5 text-cyan" />
            <span>DIRECT CONTACT &amp; DISPATCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            GET IN TOUCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-cyan">WITH OUR TEAM</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed">
            Directly connect with our certified service advisors in Tirumalagiri, Secunderabad.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Verified Workshop & Hub Location */}
          <div className="bg-[#181E24] border border-[#252C33] rounded-card p-6 sm:p-7 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#101419] text-ice flex items-center justify-center border border-[#252C33] shadow-sm">
                <MapPin className="w-5 h-5 text-ice" />
              </div>
              <h3 className="text-base font-black text-white font-mono uppercase tracking-tight">
                Head Hub &amp; Address
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed font-sans">
                {BUSINESS_INFO.address}
              </p>
            </div>
            
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-ice hover:text-white font-mono transition-colors gap-1.5"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <span className="text-sm">→</span>
            </a>
          </div>

          {/* Card 2: Direct Phone & Hotline */}
          <div className="bg-[#181E24] border border-[#252C33] rounded-card p-6 sm:p-7 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#101419] text-cyan flex items-center justify-center border border-[#252C33] shadow-sm">
                <Phone className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="text-base font-black text-white font-mono uppercase tracking-tight">
                Call Support
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed font-sans">
                Speak directly with our technical coordinator for fast dispatch or mechanical diagnosis.
              </p>
              <div className="text-lg font-black text-white font-mono">
                {BUSINESS_INFO.formattedPhone}
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="inline-flex items-center text-xs font-bold text-cyan hover:text-white font-mono transition-colors gap-1.5"
            >
              <span>CALL NOW</span>
              <span className="text-sm">→</span>
            </a>
          </div>

          {/* Card 3: Instant WhatsApp Dispatch */}
          <div className="bg-[#181E24] border border-[#252C33] rounded-card p-6 sm:p-7 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#101419] text-whatsapp flex items-center justify-center border border-[#252C33] shadow-sm">
                <MessageSquare className="w-5 h-5 text-whatsapp" />
              </div>
              <h3 className="text-base font-black text-white font-mono uppercase tracking-tight">
                WhatsApp Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed font-sans">
                Fastest way to get itemized parts quotes, photo diagnosis, and real-time technician ETA.
              </p>
              <div className="text-xs font-bold text-whatsapp font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
                <span>ONLINE: 8:00 AM – 8:00 PM</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center text-xs font-bold text-whatsapp hover:text-white font-mono transition-colors gap-1.5"
            >
              <span>CHAT ON WHATSAPP</span>
              <span className="text-sm">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
