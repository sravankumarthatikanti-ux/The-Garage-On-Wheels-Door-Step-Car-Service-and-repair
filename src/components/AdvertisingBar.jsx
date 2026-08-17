import React, { useState, useEffect } from 'react';
import { 
  Megaphone, 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare,
  Zap
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function AdvertisingBar({ onOpenBooking }) {
  const [activeMessageIdx, setActiveMessageIdx] = useState(0);

  const announcements = [
    {
      id: 1,
      badge: "LIVE ADVISORY",
      badgeColor: "bg-[#8FD8FF]/20 text-[#8FD8FF] border-[#8FD8FF]/40",
      icon: Zap,
      iconColor: "text-[#8FD8FF]",
      text: "Small & General Services at Your Doorstep • Major Repairs Handled at Our Workshop",
      cta: "Book Now",
      action: () => onOpenBooking && onOpenBooking()
    },
    {
      id: 2,
      badge: "GENUINE SPARES",
      badgeColor: "bg-[#9DE7E5]/20 text-[#9DE7E5] border-[#9DE7E5]/40",
      icon: ShieldCheck,
      iconColor: "text-[#9DE7E5]",
      text: "100% Sealed OEM Spare Parts with Barcode Warranty & Transparent WhatsApp Quotes",
      cta: "Find Parts",
      action: () => {
        const el = document.getElementById('parts');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 3,
      badge: "WHATSAPP QUOTE",
      badgeColor: "bg-[#C8E6B8]/20 text-[#C8E6B8] border-[#C8E6B8]/40",
      icon: MessageSquare,
      iconColor: "text-[#25D366]",
      text: "Direct Customized Estimates Provided on WhatsApp by the Owner",
      cta: "Chat with Owner",
      action: () => {
        const url = buildWhatsAppUrl({ serviceName: "Direct Owner Quote Request" });
        window.open(url, '_blank');
      }
    },
    {
      id: 4,
      badge: "24/7 SERVICE",
      badgeColor: "bg-[#C7C0E8]/20 text-[#C7C0E8] border-[#C7C0E8]/40",
      icon: Clock,
      iconColor: "text-[#C7C0E8]",
      text: "24 Hours Service & Emergency Support • Hub: Tirumalagiri, Secunderabad 500015",
      cta: "Call 24/7",
      action: () => {
        window.location.href = `tel:${BUSINESS_INFO?.whatsappNumber || '918519997231'}`;
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMessageIdx((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const current = announcements[activeMessageIdx] || announcements[0];
  const CurrentIcon = current?.icon || Zap;

  return (
    <div className="bg-[#050709] border-b border-[#252C33] text-white py-2 px-3 sm:px-6 relative z-50 text-xs font-mono select-none overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-full bg-[#8FD8FF]/5 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Interactive Rotating Announcement with Icon */}
        <div className="flex items-center space-x-2.5 overflow-hidden text-left flex-1">
          
          <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border font-mono shrink-0 transition-all duration-300 ${current?.badgeColor || ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
            {current?.badge || 'ADVISORY'}
          </span>

          <div className="flex items-center space-x-2 truncate">
            <CurrentIcon className={`w-3.5 h-3.5 shrink-0 ${current?.iconColor || 'text-ice'}`} />
            <span className="text-[11px] sm:text-xs text-[#F1F3F5] truncate font-medium">
              {current?.text || ''}
            </span>
          </div>
        </div>

        {/* Right: Direct Quick Action & Verified Hotline */}
        <div className="flex items-center space-x-3 shrink-0">
          
          {current?.cta && (
            <button
              onClick={current.action}
              className="hidden md:inline-flex items-center space-x-1 text-[11px] font-bold text-[#8FD8FF] hover:text-white transition-colors group cursor-pointer"
            >
              <span>{current.cta}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          <div className="hidden lg:block h-3 w-[1px] bg-[#252C33]" />

          {/* Quick Direct WhatsApp Button */}
          <a
            href={`https://wa.me/${BUSINESS_INFO?.whatsappNumber || '918519997231'}?text=${encodeURIComponent("Hello! I need doorstep car service assistance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#181E24] hover:bg-[#252C33] border border-[#25D366]/40 hover:border-[#25D366] text-white px-2.5 py-1 rounded-full text-[10px] font-bold transition-all shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] font-mono">WhatsApp Owner</span>
          </a>

        </div>

      </div>

    </div>
  );
}
