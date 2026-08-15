import React, { useState } from 'react';
import { Wrench, Wind, BatteryCharging, Disc, AlertTriangle, Cog, ArrowRight, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/carServiceData';

const NEED_OPTIONS = [
  {
    id: 'service',
    title: '🔧 SERVICE',
    icon: Wrench,
    accentColor: 'border-lime/60 bg-lime/10 hover:border-lime',
    pillColor: 'bg-lime/30 text-slate-900 border border-lime/50',
    topBar: 'bg-lime',
    glowColor: 'rgba(200, 230, 184, 0.4)',
    summary: 'Complete engine synthetic oil change, all filters replaced, 40-point full vehicle health scan at your doorstep.',
    priceEst: 'From ₹1,999',
    serviceKey: 'Periodic General Service'
  },
  {
    id: 'ac',
    title: '❄️ AC',
    icon: Wind,
    accentColor: 'border-aqua/60 bg-aqua/10 hover:border-aqua',
    pillColor: 'bg-aqua/30 text-slate-900 border border-aqua/50',
    topBar: 'bg-aqua',
    glowColor: 'rgba(142, 221, 208, 0.4)',
    summary: 'High-precision AC refrigerant gas top-up, condenser leak test, antibacterial cabin blower sanitization.',
    priceEst: 'From ₹1,299',
    serviceKey: 'AC Service & Gas Top-Up'
  },
  {
    id: 'battery',
    title: '🔋 BATTERY',
    icon: BatteryCharging,
    accentColor: 'border-cyan/60 bg-cyan/10 hover:border-cyan',
    pillColor: 'bg-cyan/30 text-slate-900 border border-cyan/50',
    topBar: 'bg-cyan',
    glowColor: 'rgba(157, 231, 229, 0.4)',
    summary: 'Digital cranking voltage test, alternator charging test, doorstep jumpstart & OEM battery fitment.',
    priceEst: 'From ₹499',
    serviceKey: 'Battery Health Check & Jumpstart'
  },
  {
    id: 'brakes',
    title: '🛞 BRAKES',
    icon: Disc,
    accentColor: 'border-lavender/60 bg-lavender/10 hover:border-lavender',
    pillColor: 'bg-lavender/30 text-slate-900 border border-lavender/50',
    topBar: 'bg-lavender',
    glowColor: 'rgba(199, 192, 232, 0.4)',
    summary: 'Brake pad thickness micrometer check, disc rotor trueing, high-temp caliper pin synthetic lubrication.',
    priceEst: 'From ₹899',
    serviceKey: 'Brake Inspection & Pad Fitment'
  },
  {
    id: 'warning',
    title: '⚠️ WARNING LIGHT',
    icon: AlertTriangle,
    accentColor: 'border-violet/60 bg-violet/10 hover:border-violet',
    pillColor: 'bg-violet/30 text-slate-900 border border-violet/50',
    topBar: 'bg-violet',
    glowColor: 'rgba(184, 180, 216, 0.4)',
    summary: 'Live OBD-II sensor telemetry scanning, ECU fault clear, sensor troubleshooting & system diagnostics.',
    priceEst: 'From ₹799',
    serviceKey: 'OBD-II ECU Computer Diagnostics'
  },
  {
    id: 'repair',
    title: '🛠 REPAIR',
    icon: Cog,
    accentColor: 'border-ice/60 bg-ice/10 hover:border-ice',
    pillColor: 'bg-ice/30 text-slate-900 border border-ice/50',
    topBar: 'bg-ice',
    glowColor: 'rgba(143, 216, 255, 0.4)',
    summary: 'Suspension bushing, clutch overhaul, steering vibration, water pump & serpentine belt inspection.',
    priceEst: 'From ₹999',
    serviceKey: 'Mechanical Repair & Inspection'
  }
];

export default function CarNeedSelector({ onOpenBooking }) {
  const [activeNeed, setActiveNeed] = useState(NEED_OPTIONS[0]);

  const handleGetHelp = () => {
    const url = buildWhatsAppUrl({
      serviceName: activeNeed.serviceKey
    });
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white text-primary border-t border-border relative overflow-hidden">
      
      {/* Background Color Blooms based on active selection */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none transition-all duration-700"
        style={{ backgroundColor: activeNeed.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-ice text-xs font-bold uppercase tracking-widest border border-ice/30 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>INSTANT DIAGNOSIS SELECTOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
            WHAT DOES <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-cyan">YOUR CAR NEED?</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Tap the issue below for instant doorstep pricing and recommended technician action.
          </p>
        </div>

        {/* 6 Interactive Needs Grid with exact colors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {NEED_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = activeNeed.id === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveNeed(opt)}
                className={`p-4 rounded-card border text-left transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? 'bg-graphite text-white border-ice shadow-xl scale-[1.04]'
                    : `bg-surface-soft text-slate-800 border-border hover:bg-white ${opt.accentColor}`
                }`}
              >
                {/* 5% Top Soft Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${opt.topBar}`} />

                <div>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 mt-1 transition-colors ${
                    isSelected ? 'bg-charcoal text-ice' : 'bg-white text-slate-700 shadow-sm'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-black uppercase font-mono tracking-tight leading-tight">
                    {opt.title}
                  </h3>
                </div>
                <div className="mt-4 pt-2 border-t border-titanium/15 flex items-center justify-between text-[10px] font-mono font-semibold">
                  <span className={isSelected ? 'text-ice font-bold' : 'text-secondary'}>
                    {opt.priceEst}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan animate-pulse' : 'bg-titanium'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Solution Focus Card */}
        <div className="rounded-card-lg bg-surface border border-titanium/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider ${activeNeed.pillColor}`}>
                Recommended Action
              </span>
              <span className="text-xs font-mono font-bold text-slate-900">
                {activeNeed.priceEst} (Doorstep All-Inclusive)
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 uppercase">
              {activeNeed.serviceKey}
            </h4>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              {activeNeed.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenBooking('', activeNeed.serviceKey)}
              className="w-full sm:w-auto px-7 py-3.5 btn-sport-primary font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2 active:scale-95"
            >
              <span>GET HELP →</span>
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
            <button
              onClick={handleGetHelp}
              className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-surface-soft text-slate-800 font-bold text-xs uppercase tracking-wider rounded-btn border border-titanium flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-cyan" />
              <span>WhatsApp Advisor</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
