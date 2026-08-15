import React, { useRef, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  Wrench,
  CheckCircle2,
  Cog,
  Disc,
  BatteryCharging,
  Wind,
  Droplets,
  ShieldCheck,
  Cpu,
  Car
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/carServiceData';

// Map icons
const ICON_MAP = {
  Cog: Cog,
  Disc: Disc,
  BatteryCharging: BatteryCharging,
  Wind: Wind,
  Droplets: Droplets,
  Wrench: Wrench,
  Cpu: Cpu,
  Car: Car
};

// Strict Master Service Accent Color System
const SERVICE_ACCENTS = {
  "Engine Service": {
    accentColor: "#8FD8FF", // Ice Blue
    borderColor: "hover:border-[#8FD8FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(143,216,255,0.25)]",
    badgeBg: "bg-[#8FD8FF]/15 text-[#8FD8FF] border-[#8FD8FF]/30",
    iconBg: "bg-[#8FD8FF]/15 text-[#8FD8FF]",
    dotBg: "bg-[#8FD8FF]",
    barColor: "from-[#8FD8FF] to-transparent",
  },
  "Brake Service": {
    accentColor: "#C7C0E8", // Soft Lavender
    borderColor: "hover:border-[#C7C0E8]",
    glowColor: "hover:shadow-[0_0_30px_rgba(199,192,232,0.25)]",
    badgeBg: "bg-[#C7C0E8]/15 text-[#C7C0E8] border-[#C7C0E8]/30",
    iconBg: "bg-[#C7C0E8]/15 text-[#C7C0E8]",
    dotBg: "bg-[#C7C0E8]",
    barColor: "from-[#C7C0E8] to-transparent",
  },
  "Battery Service": {
    accentColor: "#9DE7E5", // Cyan Mist
    borderColor: "hover:border-[#9DE7E5]",
    glowColor: "hover:shadow-[0_0_30px_rgba(157,231,229,0.25)]",
    badgeBg: "bg-[#9DE7E5]/15 text-[#9DE7E5] border-[#9DE7E5]/30",
    iconBg: "bg-[#9DE7E5]/15 text-[#9DE7E5]",
    dotBg: "bg-[#9DE7E5]",
    barColor: "from-[#9DE7E5] to-transparent",
  },
  "AC Service": {
    accentColor: "#8EDDD0", // Aqua
    borderColor: "hover:border-[#8EDDD0]",
    glowColor: "hover:shadow-[0_0_30px_rgba(142,221,208,0.25)]",
    badgeBg: "bg-[#8EDDD0]/15 text-[#8EDDD0] border-[#8EDDD0]/30",
    iconBg: "bg-[#8EDDD0]/15 text-[#8EDDD0]",
    dotBg: "bg-[#8EDDD0]",
    barColor: "from-[#8EDDD0] to-transparent",
  },
  "Oil Change": {
    accentColor: "#DCC9A6", // Soft Champagne
    borderColor: "hover:border-[#DCC9A6]",
    glowColor: "hover:shadow-[0_0_30px_rgba(220,201,166,0.25)]",
    badgeBg: "bg-[#DCC9A6]/15 text-[#DCC9A6] border-[#DCC9A6]/30",
    iconBg: "bg-[#DCC9A6]/15 text-[#DCC9A6]",
    dotBg: "bg-[#DCC9A6]",
    barColor: "from-[#DCC9A6] to-transparent",
  },
  "General Service": {
    accentColor: "#C8E6B8", // Soft Lime
    borderColor: "hover:border-[#C8E6B8]",
    glowColor: "hover:shadow-[0_0_30px_rgba(200,230,184,0.25)]",
    badgeBg: "bg-[#C8E6B8]/15 text-[#C8E6B8] border-[#C8E6B8]/30",
    iconBg: "bg-[#C8E6B8]/15 text-[#C8E6B8]",
    dotBg: "bg-[#C8E6B8]",
    barColor: "from-[#C8E6B8] to-transparent",
  },
  "Car Diagnostics": {
    accentColor: "#8FD8FF", // Ice Blue
    borderColor: "hover:border-[#8FD8FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(143,216,255,0.25)]",
    badgeBg: "bg-[#8FD8FF]/15 text-[#8FD8FF] border-[#8FD8FF]/30",
    iconBg: "bg-[#8FD8FF]/15 text-[#8FD8FF]",
    dotBg: "bg-[#8FD8FF]",
    barColor: "from-[#8FD8FF] to-transparent",
  },
  "Custom Repair": {
    accentColor: "#9DE7E5", // Cyan Mist
    borderColor: "hover:border-[#9DE7E5]",
    glowColor: "hover:shadow-[0_0_30px_rgba(157,231,229,0.25)]",
    badgeBg: "bg-[#9DE7E5]/15 text-[#9DE7E5] border-[#9DE7E5]/30",
    iconBg: "bg-[#9DE7E5]/15 text-[#9DE7E5]",
    dotBg: "bg-[#9DE7E5]",
    barColor: "from-[#9DE7E5] to-transparent",
  },
};

export default function ServiceGrid({ onSelectService }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollEvent = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 300;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, SERVICE_CATEGORIES.length - 1));
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#101419] text-white relative border-t border-[#252C33] overflow-hidden">
      
      {/* Background Color Blooms: Aqua + Ice Blue Subtle Studio Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[350px] bg-aqua/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-ice/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-5">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
              <Wrench className="w-3.5 h-3.5 text-ice" />
              <span>THE GARAGE ON WHEELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
              PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-aqua">CAR CARE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB4] max-w-2xl leading-relaxed">
              Professional doorstep automotive services engineered for all vehicle makes and models.
            </p>
          </div>

          {/* Carousel Navigation Controls (Desktop & Tablet) */}
          <div className="flex items-center space-x-2 self-start md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-[#181E24] border border-[#252C33] hover:border-ice text-[#A7ADB4] hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-[#181E24] border border-[#252C33] hover:border-ice text-[#A7ADB4] hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Swipeable Card Track */}
        <div
          ref={scrollRef}
          onScroll={handleScrollEvent}
          className="flex space-x-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICE_CATEGORIES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Wrench;
            const accent = SERVICE_ACCENTS[service.title] || SERVICE_ACCENTS["General Service"];

            return (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service.title)}
                className={`snap-start shrink-0 w-[290px] sm:w-[330px] md:w-[350px] bg-[#181E24] border border-[#252C33] rounded-card p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${accent.borderColor} ${accent.glowColor} group relative overflow-hidden text-left hover:-translate-y-2`}
              >
                {/* Thin Accent Bar on top edge */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accent.barColor}`} />

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-[#252C33] shadow-sm transition-transform duration-300 group-hover:scale-110 ${accent.iconBg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border font-mono ${accent.badgeBg}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title & Starting Price */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-lg font-black text-white font-heading tracking-tight group-hover:text-ice transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs font-extrabold text-ice font-mono">
                      {service.startingPrice}
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-[#A7ADB4] leading-relaxed mb-5 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6 border-t border-[#252C33] pt-4">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2 text-xs text-[#F1F3F5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA Button */}
                <div className="pt-2 border-t border-[#252C33] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F1F3F5] group-hover:text-ice transition-colors font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <span>BOOK SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 btn-arrow transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                  <span className="text-[10px] text-[#6F7780] font-mono">Doorstep Ready</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Pagination Dots with Multi-Color accents */}
        <div className="flex justify-center space-x-1.5 mt-4 sm:hidden">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const accent = SERVICE_ACCENTS[cat.title] || SERVICE_ACCENTS["General Service"];
            return (
              <button
                key={idx}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: idx * 300, behavior: 'smooth' });
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? `w-6 ${accent.dotBg}` : 'w-1.5 bg-[#252C33]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
