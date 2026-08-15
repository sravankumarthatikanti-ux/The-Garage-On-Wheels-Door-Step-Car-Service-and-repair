import React from 'react';
import { MapPin, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    {
      icon: MapPin,
      title: "DOORSTEP SERVICE",
      subtitle: "We come to you across Twin Cities.",
      accentColor: "#9DE7E5", // Cyan Mist
      bgColor: "bg-[#9DE7E5]/15",
      borderColor: "border-[#9DE7E5]/30 hover:border-[#9DE7E5]",
      glow: "hover:shadow-[0_0_20px_rgba(157,231,229,0.25)]",
    },
    {
      icon: ShieldCheck,
      title: "PROFESSIONAL CARE",
      subtitle: "Certified mechanics & OEM sealed parts.",
      accentColor: "#8FD8FF", // Electric Ice Blue
      bgColor: "bg-[#8FD8FF]/15",
      borderColor: "border-[#8FD8FF]/30 hover:border-[#8FD8FF]",
      glow: "hover:shadow-[0_0_20px_rgba(143,216,255,0.25)]",
    },
    {
      icon: Zap,
      title: "EASY BOOKING",
      subtitle: "Call or WhatsApp dispatch in seconds.",
      accentColor: "#C8E6B8", // Soft Lime
      bgColor: "bg-[#C8E6B8]/15",
      borderColor: "border-[#C8E6B8]/30 hover:border-[#C8E6B8]",
      glow: "hover:shadow-[0_0_20px_rgba(200,230,184,0.25)]",
    },
  ];

  return (
    <section className="bg-[#101419] border-y border-[#252C33] py-4 sm:py-5 relative z-20 overflow-hidden">
      
      {/* Background Soft Diffused Light Blooms */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[150px] bg-[#9DE7E5]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[150px] bg-[#8FD8FF]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 items-center">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center space-x-3.5 justify-center sm:justify-start py-2.5 px-4 rounded-xl bg-[#181E24]/80 border transition-all duration-300 ${pt.borderColor} ${pt.glow}`}
              >
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white/10 ${pt.bgColor}`}
                  style={{ color: pt.accentColor }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 
                    className="text-xs sm:text-sm font-black uppercase tracking-wider font-heading"
                    style={{ color: pt.accentColor }}
                  >
                    {pt.title}
                  </h4>
                  <p className="text-xs text-[#C9D1D6] font-medium font-sans">
                    {pt.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
