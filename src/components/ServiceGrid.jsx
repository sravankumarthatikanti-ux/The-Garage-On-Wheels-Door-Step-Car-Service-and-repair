import React, { useRef } from 'react';
import { 
  Wrench, Droplets, Disc, 
  ShieldCheck, ArrowRight, MessageSquare, BatteryCharging,
  Cpu, Cog, Wind, AlertTriangle, ChevronRight, ChevronLeft, Sparkles
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/carServiceData';

const ICON_MAP = {
  'engine-service': Cog,
  'brake-service': Disc,
  'battery-service': BatteryCharging,
  'ac-service': Wind,
  'oil-change': Droplets,
  'general-service': Wrench,
  'car-diagnostics': Cpu,
  'emergency-repair': AlertTriangle,
};

export default function ServiceGrid({ onSelectService }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-surface text-primary relative border-t border-border overflow-hidden">
      
      {/* Subtle Sage Mist Glow in background */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[350px] bg-sage/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
              <Wrench className="w-3.5 h-3.5 text-steel-400" />
              <span>THE GARAGE ON WHEELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
              PRECISION <span className="text-steel-600">CAR CARE</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl leading-relaxed">
              Professional service. Wherever your car is.
            </p>
          </div>

          {/* Carousel Navigation Arrows (Desktop / Tablet) */}
          <div className="flex items-center space-x-2 self-start md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-white border border-border hover:border-steel-400 text-secondary hover:text-primary transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-white border border-border hover:border-steel-400 text-secondary hover:text-primary transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectService('General Service')}
              className="ml-2 px-5 py-2.5 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs uppercase tracking-wider rounded-btn shadow-md transition-all active:scale-95 border border-steel-300"
            >
              <span>ALL SERVICES</span>
            </button>
          </div>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex items-center justify-between text-xs text-muted font-mono mb-3 md:hidden">
          <span>← Swipe to explore services →</span>
        </div>

        {/* Horizontal Swipeable Services Carousel on Mobile / Grid on Desktop */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none no-scrollbar"
        >
          {SERVICE_CATEGORIES.map((service) => {
            const IconComponent = ICON_MAP[service.id] || Wrench;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="premium-card p-5 sm:p-6 cursor-pointer flex flex-col justify-between group min-w-[280px] sm:min-w-[300px] md:min-w-0 snap-start shrink-0"
              >
                <div>
                  {/* Top: Icon & Price Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-graphite border border-titanium/15 flex items-center justify-center text-steel-400 group-hover:bg-steel-400 group-hover:text-graphite transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 px-2.5 py-1 rounded-md bg-surface-soft border border-border font-mono">
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-steel-600 transition-colors uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-secondary mt-1.5 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="mt-4 space-y-1.5 border-t border-border-soft pt-3 text-xs text-slate-600">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-steel-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-5 pt-3 border-t border-border-soft flex items-center justify-between text-xs font-bold text-steel-600 group-hover:text-graphite transition-colors">
                  <span className="flex items-center gap-1.5 font-mono">
                    <MessageSquare className="w-3.5 h-3.5" /> Book on WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Foam Wash & Detailing Showcase Card */}
        <div className="mt-8 rounded-card-lg bg-graphite text-white border border-titanium/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-5">
            <div className="space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-steel-400/20 text-steel-300 text-xs font-bold border border-steel-400/30 inline-block font-mono">
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
                className="px-6 py-3 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs uppercase tracking-widest rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center space-x-2 active:scale-95 border border-steel-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Doorstep Wash</span>
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
