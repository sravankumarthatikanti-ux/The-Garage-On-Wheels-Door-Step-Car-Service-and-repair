import React from 'react';
import { MessageSquare, ArrowRight, Phone, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function BookingCTA({ onOpenBooking }) {
  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl({
      serviceName: "Immediate Doorstep Booking"
    });
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-graphite text-white border-t border-titanium/15 relative overflow-hidden">
      {/* Ambient subtle steel blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-steel-400/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Brand Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal border border-titanium/20 text-steel-300 text-xs font-bold uppercase tracking-widest mb-6 font-mono">
          <ShieldCheck className="w-4 h-4 text-steel-400" />
          <span>DOORSTEP CAR SERVICE &amp; REPAIR</span>
        </div>

        {/* Big Impact Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-sans tracking-tight leading-tight mb-4">
          NEED CAR SERVICE? <br />
          <span className="text-steel-400">WE COME TO YOU.</span>
        </h2>

        {/* Subhead Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Skip the traffic and garage queues. Our certified mobile mechanics arrive at your doorstep in Tirumalagiri, Secunderabad, and Hyderabad with genuine OEM parts and specialized tools.
        </p>

        {/* Feature Checkpoints */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium mb-10">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-steel-400" /> 100% Genuine Spare Parts
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-steel-400" /> Zero Garage Downtime
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-steel-400" /> 1000 KM Written Warranty
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs tracking-widest uppercase rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 active:scale-95 border border-steel-300"
          >
            <span>BOOK A SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-charcoal hover:bg-charcoal-soft text-white font-bold text-xs tracking-widest uppercase rounded-btn transition-all flex items-center justify-center space-x-2 border border-titanium/25 hover:border-steel-400 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-steel-400" />
            <span>WHATSAPP US DIRECTLY</span>
          </button>
        </div>

        {/* Contact Info Strip */}
        <div className="mt-8 pt-6 border-t border-titanium/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-steel-400" /> {BUSINESS_INFO.address}
          </span>
          <a 
            href={`tel:${BUSINESS_INFO.whatsappNumber}`} 
            className="flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-steel-400" /> {BUSINESS_INFO.formattedPhone}
          </a>
        </div>

      </div>
    </section>
  );
}
