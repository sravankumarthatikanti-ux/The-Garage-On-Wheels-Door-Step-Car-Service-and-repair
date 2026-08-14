import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function FloatingWhatsApp({ onOpenBooking }) {
  const handleClick = () => {
    onOpenBooking();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-premium hover:shadow-premium-hover transition-all duration-300 active:scale-95"
        aria-label="Direct WhatsApp Booking"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block ml-2 text-xs font-bold tracking-wide">
          Doorstep Mechanic Active
        </span>
      </button>
    </div>
  );
}
