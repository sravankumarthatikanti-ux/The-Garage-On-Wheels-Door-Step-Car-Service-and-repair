import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function MobileStickyBar({ onOpenBooking }) {
  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl({ serviceName: "Mobile Quick Booking" });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden pointer-events-auto">
      <div className="bg-graphite/95 border border-titanium/20 backdrop-blur-xl rounded-full p-1.5 shadow-2xl flex items-center justify-between gap-1 max-w-md mx-auto">
        
        {/* 1. CALL BUTTON */}
        <a
          href={`tel:${BUSINESS_INFO.whatsappNumber}`}
          className="flex-1 py-2.5 px-3 rounded-full bg-charcoal hover:bg-charcoal-soft text-white text-xs font-bold font-mono tracking-wider flex items-center justify-center space-x-1.5 transition-all border border-titanium/15 active:scale-95"
          aria-label="Call Garage on Wheels"
        >
          <Phone className="w-3.5 h-3.5 text-steel-400" />
          <span>CALL</span>
        </a>

        {/* 2. WHATSAPP BUTTON */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 py-2.5 px-3 rounded-full bg-charcoal hover:bg-charcoal-soft text-white text-xs font-bold font-mono tracking-wider flex items-center justify-center space-x-1.5 transition-all border border-titanium/15 active:scale-95"
          aria-label="WhatsApp Garage on Wheels"
        >
          <MessageSquare className="w-3.5 h-3.5 text-steel-400" />
          <span>WHATSAPP</span>
        </button>

        {/* 3. BOOK BUTTON (Primary CTA Highlight) */}
        <button
          onClick={() => onOpenBooking()}
          className="flex-1 py-2.5 px-3 rounded-full bg-steel-400 hover:bg-steel-500 text-graphite text-xs font-black font-mono tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-md active:scale-95 border border-steel-300"
          aria-label="Book Doorstep Car Service"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK</span>
        </button>

      </div>
    </div>
  );
}
