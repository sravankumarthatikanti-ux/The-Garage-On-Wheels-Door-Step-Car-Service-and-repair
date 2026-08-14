import React from 'react';
import { 
  Wrench, Sparkles, Droplets, Gauge, Disc, 
  ShieldCheck, ArrowRight, MessageSquare, BatteryCharging,
  Cpu, Cog, Wind
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/carServiceData';

const ICON_MAP = {
  'periodic-service': Wrench,
  'deep-cleaning': Sparkles,
  'denting-painting': Droplets,
  'ac-service': Wind,
  'battery-replacement': BatteryCharging,
  'tyre-wheel-care': Gauge,
  'windshield-glass': ShieldCheck,
  'clutch-brakes': Disc,
  'suspension-fitment': Cog,
  'diagnostics-electrical': Cpu,
};

export default function ServiceGrid({ onSelectService }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-charcoal-deep text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-400 text-xs font-semibold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Full Spectrum Maintenance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
              Premium <span className="text-brand-400">Car Services</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Every service includes genuine parts, precision diagnostics, and doorstep convenience with comprehensive warranty coverage.
            </p>
          </div>

          <button
            onClick={() => onSelectService('General Service')}
            className="self-start md:self-auto px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-btn border border-white/15 transition-all flex items-center space-x-2"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Foam Wash & Detailing Banner */}
        <div className="mb-14 rounded-card-lg bg-charcoal border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold border border-brand-500/30 inline-block">
                ⚡ Most Popular Doorstep Service
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
                <span className="text-xs text-slate-400 block">Starting from</span>
                <span className="text-2xl font-extrabold text-white">₹499 <span className="text-xs text-slate-400 font-normal">/ doorstep</span></span>
              </div>
              <button
                onClick={() => onSelectService('Car Washing & Deep Cleaning')}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all flex items-center space-x-2 active:scale-95"
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
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal via-transparent to-transparent" />
          </div>
        </div>

        {/* 10-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((service) => {
            const IconComponent = ICON_MAP[service.id] || Wrench;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="dark-card p-6 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Icon & Price Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-card bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:border-brand-500/40 group-hover:bg-brand-500/10 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3 text-xs text-slate-300">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-brand-400 group-hover:text-brand-300">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> Book Doorstep Service
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
