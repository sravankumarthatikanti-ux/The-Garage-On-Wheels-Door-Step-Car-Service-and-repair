import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl, LOCAL_SERVICE_AREAS } from '../data/carServiceData';
import Logo from './Logo';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl({ serviceName: "Footer Contact Link" });
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-[#080A0D] text-white border-t border-[#252C33] pt-14 pb-10 relative overflow-hidden">
      
      {/* Background Soft Studio Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-ice/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[250px] bg-lavender/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#252C33]">
          
          {/* Col 1: Official Brand Lockup */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <Logo isDark={true} size="default" />
            
            <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed max-w-sm font-sans pt-1">
              Secunderabad and Hyderabad's premier mobile doorstep car service and repair solution. Certified mechanics, 100% genuine sealed spares, and transparent upfront pricing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="px-5 py-2.5 btn-sport-gradient font-black text-xs uppercase tracking-wider rounded-btn shadow-md inline-flex items-center space-x-2"
              >
                <span>BOOK SERVICE</span>
                <ArrowRight className="w-3.5 h-3.5 text-graphite btn-arrow" />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="px-5 py-2.5 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn inline-flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-whatsapp" />
                <span>WHATSAPP US</span>
              </button>
            </div>
          </div>

          {/* Col 2: Fast Navigation Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-ice font-mono">
              SERVICES &amp; PAGES
            </h4>
            <ul className="space-y-2 text-xs text-[#A7ADB4] font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">Periodic General Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ceramic Brake Overhaul</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Battery Jumpstart &amp; Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AC Pressure Test &amp; Gas Refill</a></li>
              <li><a href="#parts" className="hover:text-white transition-colors">Genuine OEM Spare Parts</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Automotive Gallery</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Our Certified Workshop</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Verified Contact & Location */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-cyan font-mono">
              WORKSHOP HUB &amp; CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-[#A7ADB4] font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-ice shrink-0" />
                <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="font-mono text-white hover:text-ice font-bold">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-aqua shrink-0" />
                <span className="font-mono">{BUSINESS_INFO.workingHours}</span>
              </div>
              <div className="pt-2 text-[11px] text-[#6F7780] font-mono">
                Serving: Tirumalagiri, Secunderabad, Sainikpuri, Alwal, Begumpet, Jubilee Hills, Gachibowli &amp; surrounding areas.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6F7780] font-mono gap-3">
          <div>
            &copy; {currentYear} The Garage On Wheels. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-cyan">100% Genuine OEM Spares</span>
            <span>•</span>
            <span className="text-ice">Doorstep &amp; Workshop Care</span>
            <span>•</span>
            <span className="text-whatsapp">Official WhatsApp Dispatch</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
