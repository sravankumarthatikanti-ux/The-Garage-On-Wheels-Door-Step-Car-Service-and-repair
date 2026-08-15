import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function MobileStickyBar({ onOpenBooking }) {
  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl({ serviceName: "Mobile Bottom Action" });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#101419]/95 backdrop-blur-xl border-t border-[#252C33] px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 items-center">
        
        {/* 1. Direct Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.whatsappNumber}`}
          className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-btn bg-[#181E24] border border-[#252C33] text-white hover:text-cyan font-mono text-[11px] font-bold active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-cyan" />
          <span>CALL</span>
        </a>

        {/* 2. Direct WhatsApp Button */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-btn bg-[#181E24] border border-[#252C33] text-white hover:border-[#25D366] font-mono text-[11px] font-bold active:scale-95 transition-all shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5 text-whatsapp" />
          <span>WHATSAPP</span>
        </button>

        {/* 3. Primary Booking CTA */}
        <button
          type="button"
          onClick={() => onOpenBooking && onOpenBooking()}
          className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-btn btn-sport-gradient text-graphite font-heading text-[11px] font-black uppercase tracking-wider active:scale-95 transition-all shadow-md"
        >
          <span>BOOK</span>
          <ArrowRight className="w-3.5 h-3.5 text-graphite btn-arrow" />
        </button>

      </div>
    </div>
  );
}
