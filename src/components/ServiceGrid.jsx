import React, { useState, useRef } from 'react';
import { 
  Wrench, Droplets, Disc, 
  ShieldCheck, ArrowRight, MessageSquare, BatteryCharging,
  Cpu, Cog, Wind, AlertTriangle, ChevronRight, ChevronLeft, Sparkles
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/carServiceData';

const SERVICE_PALETTE_MAP = {
  'engine-service': {
    icon: Cog,
    colorName: 'Ice Blue',
    tagBg: 'bg-ice/20 text-slate-900 border-ice/40',
    topBar: 'bg-ice',
    glow: 'hover:border-ice hover:shadow-[0_15px_35px_rgba(143,216,255,0.3)]',
    dotColor: 'bg-ice',
  },
  'brake-service': {
    icon: Disc,
    colorName: 'Lavender',
    tagBg: 'bg-lavender/25 text-slate-900 border-lavender/40',
    topBar: 'bg-lavender',
    glow: 'hover:border-lavender hover:shadow-[0_15px_35px_rgba(199,192,232,0.3)]',
    dotColor: 'bg-lavender',
  },
  'battery-service': {
    icon: BatteryCharging,
    colorName: 'Cyan',
    tagBg: 'bg-cyan/25 text-slate-900 border-cyan/40',
    topBar: 'bg-cyan',
    glow: 'hover:border-cyan hover:shadow-[0_15px_35px_rgba(157,231,229,0.3)]',
    dotColor: 'bg-cyan',
  },
  'ac-service': {
    icon: Wind,
    colorName: 'Aqua',
    tagBg: 'bg-aqua/25 text-slate-900 border-aqua/40',
    topBar: 'bg-aqua',
    glow: 'hover:border-aqua hover:shadow-[0_15px_35px_rgba(142,221,208,0.3)]',
    dotColor: 'bg-aqua',
  },
  'oil-change': {
    icon: Droplets,
    colorName: 'Soft Champagne',
    tagBg: 'bg-champagne/25 text-slate-900 border-champagne/40',
    topBar: 'bg-champagne',
    glow: 'hover:border-champagne hover:shadow-[0_15px_35px_rgba(220,201,166,0.3)]',
    dotColor: 'bg-champagne',
  },
  'general-service': {
    icon: Wrench,
    colorName: 'Soft Lime',
    tagBg: 'bg-lime/25 text-slate-900 border-lime/40',
    topBar: 'bg-lime',
    glow: 'hover:border-lime hover:shadow-[0_15px_35px_rgba(200,230,184,0.3)]',
    dotColor: 'bg-lime',
  },
  'car-diagnostics': {
    icon: Cpu,
    colorName: 'Cool Violet',
    tagBg: 'bg-violet/25 text-slate-900 border-violet/40',
    topBar: 'bg-violet',
    glow: 'hover:border-violet hover:shadow-[0_15px_35px_rgba(184,180,216,0.3)]',
    dotColor: 'bg-violet',
  },
  'emergency-repair': {
    icon: AlertTriangle,
    colorName: 'Graphite + Ice Blue',
    tagBg: 'bg-graphite text-ice border-ice/30',
    topBar: 'bg-ice',
    glow: 'hover:border-ice hover:shadow-[0_15px_35px_rgba(143,216,255,0.25)]',
    dotColor: 'bg-ice',
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
    <section id="services" className="py-16 md:py-24 bg-surface text-primary relative border-t border-border overflow-hidden">
      
      {/* Background Color Blooms: Aqua + Soft Lime */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[350px] bg-aqua/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-lime/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-ice text-xs font-bold uppercase tracking-widest border border-ice/30 font-mono">
              <Wrench className="w-3.5 h-3.5 text-ice" />
              <span>THE GARAGE ON WHEELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
              PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-aqua">CAR CARE</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl leading-relaxed">
              Professional service. Wherever your car is.
            </p>
          </div>

          {/* Carousel Navigation Controls (Desktop & Tablet) */}
          <div className="flex items-center space-x-2 self-start md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-white border border-border hover:border-ice text-secondary hover:text-primary transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-white border border-border hover:border-ice text-secondary hover:text-primary transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectService('General Service')}
              className="ml-2 px-5 py-2.5 btn-sport-primary font-black text-xs uppercase tracking-wider rounded-btn shadow-md transition-all active:scale-95"
            >
              <span>ALL SERVICES →</span>
            </button>
          </div>
        </div>

        {/* Mobile Swipe Notice & Multi-Color Progress Dots */}
        <div className="flex md:hidden items-center justify-between text-xs text-muted font-mono mb-3">
          <span>← Swipe to explore →</span>
          <div className="flex items-center space-x-1.5">
            {SERVICE_CATEGORIES.map((s, i) => {
              const pal = SERVICE_PALETTE_MAP[s.id] || SERVICE_PALETTE_MAP['general-service'];
              return (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? `${pal.dotColor} w-4 shadow-sm` : 'bg-titanium w-1.5'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Horizontal Swipeable Services Carousel on Mobile / Grid on Desktop */}
        <div 
          ref={scrollRef}
          onScroll={handleScrollEvent}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none no-scrollbar"
        >
          {SERVICE_CATEGORIES.map((service) => {
            const palette = SERVICE_PALETTE_MAP[service.id] || SERVICE_PALETTE_MAP['general-service'];
            const IconComponent = palette.icon;
            
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className={`premium-card p-5 sm:p-6 cursor-pointer flex flex-col justify-between group min-w-[280px] sm:min-w-[300px] md:min-w-0 snap-start shrink-0 ${palette.glow}`}
              >
                {/* 5% Top Soft Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${palette.topBar}`} />

                <div>
                  {/* Top: Icon & Price Tag */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-graphite border border-titanium/15 flex items-center justify-center text-ice group-hover:bg-ice group-hover:text-graphite transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border font-mono ${palette.tagBg}`}>
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-slate-950 transition-colors uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-secondary mt-1.5 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="mt-4 space-y-1.5 border-t border-border-soft pt-3 text-xs text-slate-600">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-ice shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-5 pt-3 border-t border-border-soft flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-black transition-colors">
                  <span className="flex items-center gap-1.5 font-mono">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan" /> Book on WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-ice" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Foam Wash & Detailing Showcase Card */}
        <div className="mt-8 rounded-card-lg bg-graphite text-white border border-ice/25 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-5">
            <div className="space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-ice/20 text-ice text-xs font-bold border border-ice/30 inline-block font-mono">
                ⚡ DOORSTEP FOAM WASH SPECIAL
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                High-Pressure Snow Foam Wash at Your Driveway
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                We bring water, power generator, pressure washer, and pH-neutral German shampoo right to your parking slot. Complete exterior decontamination &amp; interior vacuuming.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-1">
              <div>
                <span className="text-[11px] text-slate-400 block font-mono">Starting from</span>
                <span className="text-2xl font-black text-white font-mono">₹499 <span className="text-xs text-slate-400 font-normal font-sans">/ doorstep</span></span>
              </div>
              <button
                onClick={() => onSelectService('Doorstep Foam Wash & Detailing')}
                className="px-6 py-3 btn-sport-primary font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center space-x-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-cyan" />
                <span>Book Doorstep Wash →</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full overflow-hidden">
            <img 
              src="/images/gallery/detailing_wash.jpg" 
              alt="Doorstep Snow Foam Car Wash"
              className="w-full h-full object-cover object-center filter contrast-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-graphite via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}
