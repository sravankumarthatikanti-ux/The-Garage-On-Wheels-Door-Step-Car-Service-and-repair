import React from 'react';
import { 
  Wrench, Sparkles, Droplets, Gauge, Disc, 
  ShieldCheck, ArrowRight, MessageSquare, BatteryCharging,
  Cpu, Cog, Wind, AlertTriangle
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
  return (
    <section id="services" className="py-20 md:py-28 bg-graphite text-white relative border-t border-titanium/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-charcoal border border-titanium/20 text-steel-300 text-xs font-bold uppercase tracking-widest font-mono">
              <Wrench className="w-3.5 h-3.5 text-steel-400" />
              <span>THE GARAGE ON WHEELS • SERVICE CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
              Door Step <span className="text-steel-400">Car Services</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Every service includes certified master technicians, 100% genuine OEM parts, transparent pricing, and 1000 KM written warranty.
            </p>
          </div>

          <button
            onClick={() => onSelectService('General Service')}
            className="self-start md:self-auto px-6 py-3 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs uppercase tracking-widest rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center space-x-2 active:scale-95 border border-steel-300"
          >
            <span>BOOK A SERVICE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Foam Wash & Detailing Banner */}
        <div className="mb-14 rounded-card-lg bg-charcoal border border-titanium/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full bg-steel-400/15 text-steel-300 text-xs font-bold border border-steel-400/30 inline-block font-mono">
                ⚡ DOOR STEP FOAM WASH SPECIAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Doorstep High-Pressure Snow Foam Wash
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                We bring our own water source, pressure washer, and pH-neutral German foam shampoo right to your driveway or parking slot. Complete exterior decontamination, tyre gloss, and interior vacuuming.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div>
                <span className="text-xs text-slate-400 block font-mono">Starting from</span>
                <span className="text-2xl font-extrabold text-white">₹499 <span className="text-xs text-slate-400 font-normal">/ doorstep</span></span>
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

          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img 
              src="/images/gallery/detailing_wash.jpg" 
              alt="Doorstep Snow Foam Car Wash"
              className="w-full h-full object-cover object-center filter contrast-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal via-transparent to-transparent" />
          </div>
        </div>

        {/* 8-Core Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((service) => {
            const IconComponent = ICON_MAP[service.id] || Wrench;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="dark-card p-6 cursor-pointer flex flex-col justify-between group hover:border-steel-400/50 hover:bg-charcoal/95 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div>
                  {/* Top: Icon & Price Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-card bg-graphite border border-titanium/15 flex items-center justify-center text-steel-400 group-hover:border-steel-400/50 group-hover:bg-steel-400/10 group-hover:scale-105 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-titanium px-2.5 py-1 rounded-md bg-graphite border border-titanium/15 font-mono">
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-steel-300 transition-colors uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="mt-4 space-y-1.5 border-t border-titanium/10 pt-3 text-xs text-slate-300">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-steel-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-3 border-t border-titanium/10 flex items-center justify-between text-xs font-bold text-steel-400 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> Book on WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
