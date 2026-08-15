import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, ArrowRight, Navigation } from 'lucide-react';
import { BUSINESS_INFO, LOCAL_SERVICE_AREAS, buildWhatsAppUrl } from '../data/carServiceData';

export default function ContactSection({ onOpenBooking }) {
  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl({ serviceName: "Doorstep Consultation" });
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-surface-warm text-primary border-t border-border relative overflow-hidden">
      
      {/* Subtle Mist Ambient Lighting */}
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[300px] bg-mist/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
            <Navigation className="w-3.5 h-3.5 text-steel-400" />
            <span>DIRECT CONTACT &amp; DISPATCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
            GET IN TOUCH <span className="text-steel-600">WITH OUR TEAM</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Directly connect with our certified service advisors in Tirumalagiri, Secunderabad.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Verified Workshop & Hub Location */}
          <div className="premium-card p-6 sm:p-7 space-y-4 bg-white flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-graphite text-steel-400 flex items-center justify-center border border-titanium/20 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900 font-mono uppercase tracking-tight">
                Head Hub &amp; Address
              </h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>
            <div className="pt-3 border-t border-border-soft text-[11px] font-mono text-steel-700 font-semibold">
              📍 Primary Dispatch Zone: Secunderabad &amp; Hyderabad
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="premium-card p-6 sm:p-7 space-y-4 bg-white flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-graphite text-steel-400 flex items-center justify-center border border-titanium/20 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900 font-mono uppercase tracking-tight">
                Call &amp; WhatsApp
              </h3>
              <div className="space-y-1">
                <a 
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                  className="text-base font-black text-slate-900 hover:text-steel-600 block transition-colors font-mono"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
                <p className="text-xs text-secondary">
                  Direct line to our master technician desk.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-border-soft">
              <button
                onClick={handleWhatsApp}
                className="text-xs font-bold text-steel-700 hover:text-slate-900 flex items-center gap-1.5 font-mono uppercase tracking-wider"
              >
                <MessageSquare className="w-3.5 h-3.5 text-steel-500" />
                <span>Chat on WhatsApp →</span>
              </button>
            </div>
          </div>

          {/* Card 3: Working Hours & Availability */}
          <div className="premium-card p-6 sm:p-7 space-y-4 bg-white flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-graphite text-steel-400 flex items-center justify-center border border-titanium/20 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900 font-mono uppercase tracking-tight">
                Service Timings
              </h3>
              <div className="space-y-1">
                <p className="text-base font-black text-slate-900 font-mono">
                  {BUSINESS_INFO.workingHours}
                </p>
                <p className="text-xs text-secondary">
                  Open 7 Days a Week • Same-day mobile appointments.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-border-soft flex items-center space-x-1.5 text-xs text-emerald-700 font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Doorstep Dispatch Active Today</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
