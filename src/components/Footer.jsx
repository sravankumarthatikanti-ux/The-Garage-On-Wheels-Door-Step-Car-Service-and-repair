import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, 
  ShieldCheck, ArrowRight, MessageSquare, Heart, Sparkles, Navigation
} from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CATEGORIES, LOCAL_SERVICE_AREAS, buildWhatsAppUrl } from '../data/carServiceData';
import Logo from './Logo';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl({ serviceName: "General Inquiries" });
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-graphite text-slate-300 border-t border-titanium/15 relative overflow-hidden">
      
      {/* Background Color Blooms: Lavender + Ice Blue + Champagne */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-lavender/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[550px] h-[250px] bg-ice/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[150px] bg-champagne/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-sm shrink-0 border border-titanium/20">
                <img 
                  src="/images/business_logo.png" 
                  alt="The Garage On Wheels" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-black text-white tracking-tight">
                  THE GARAGE <span className="text-ice">ON WHEELS</span>
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-titanium font-mono">
                  Door Step Car Service &amp; Repair
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Secunderabad and Hyderabad's premier doorstep automotive service. Bringing certified mechanics, precision computer diagnostic equipment, and 100% genuine OEM spare parts directly to your parking slot.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 btn-sport-primary font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center space-x-1.5 active:scale-95"
              >
                <span>BOOK SERVICE →</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-4 py-2.5 bg-charcoal hover:bg-charcoal-soft text-white font-bold text-xs uppercase tracking-wider rounded-btn border border-titanium/25 hover:border-ice transition-colors flex items-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Column 2: Precision Doorstep Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ice font-mono border-b border-titanium/15 pb-2">
              Precision Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICE_CATEGORIES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenBooking('', service.title)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 group text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ice/60 group-hover:bg-ice transition-colors" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Doorstep Coverage Localities */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan font-mono border-b border-titanium/15 pb-2">
              Coverage Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              {LOCAL_SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.id} className="flex items-center space-x-1.5">
                  <Navigation className="w-3 h-3 text-cyan/70 shrink-0" />
                  <span className="truncate">{area.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-lavender font-mono border-b border-titanium/15 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-ice shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                  className="font-mono text-white hover:text-ice font-bold transition-colors"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-champagne shrink-0" />
                <span className="font-mono">
                  {BUSINESS_INFO.workingHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-6 border-t border-titanium/15 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="font-mono">
            &copy; {currentYear} <strong>The Garage On Wheels</strong>. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-[11px] font-mono text-titanium">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>Mobile Doorstep Units Active in Hyderabad &amp; Secunderabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
