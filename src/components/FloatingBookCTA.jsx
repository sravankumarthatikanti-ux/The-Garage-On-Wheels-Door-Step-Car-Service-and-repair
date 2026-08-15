import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FloatingBookCTA({ onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block fixed bottom-6 left-6 z-40 transition-all duration-300 animate-fadeIn">
      <button
        onClick={() => onOpenBooking && onOpenBooking()}
        className="px-6 py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-full shadow-2xl flex items-center space-x-2 active:scale-95 group border border-ice"
        aria-label="Book Doorstep Car Service"
      >
        <Calendar className="w-4 h-4 text-graphite" />
        <span>BOOK A SERVICE →</span>
        <ArrowRight className="w-3.5 h-3.5 btn-arrow text-graphite" />
      </button>
    </div>
  );
}
