import React, { useState } from 'react';
import { 
  Wrench, 
  Wind, 
  BatteryCharging, 
  Disc, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageSquare,
  Flame,
  Layers,
  ShieldCheck,
  Building2,
  Home
} from 'lucide-react';
import { buildWhatsAppUrl } from '../data/carServiceData';

// 7 Interactive Issue Needs with Master Soft Automotive Accents & Honest Venue Distinction
const CAR_NEEDS = [
  {
    id: 'service',
    title: 'PERIODIC SERVICE',
    shortLabel: 'SERVICE',
    subtitle: 'Lube, Filters, Multi-Point Check',
    icon: Wrench,
    accentColor: '#C8E6B8', // Soft Lime
    glowColor: 'rgba(200, 230, 184, 0.25)',
    serviceKey: 'General Periodic Service',
    serviceVenue: 'Doorstep Ready',
    estimatedStarting: 'Quote on WhatsApp',
    deliveryTime: '60–90 Mins',
    recommendation: 'Small and general periodic services are completed right at your doorstep, including synthetic oil change, air/oil filter replacements, and a multi-point safety check.',
  },
  {
    id: 'ac',
    title: 'AC NOT COOLING',
    shortLabel: 'AC',
    subtitle: 'Gas Refill, Compressor, Filter',
    icon: Wind,
    accentColor: '#8EDDD0', // Aqua
    glowColor: 'rgba(142, 221, 208, 0.25)',
    serviceKey: 'AC Service & Gas Top-up',
    serviceVenue: 'Doorstep Check / Workshop for Major',
    estimatedStarting: 'Quote on WhatsApp',
    deliveryTime: '45–60 Mins',
    recommendation: 'On-site AC gas pressure check, top-up, and cabin filter cleaning at your doorstep. Major compressor replacements or cooling coil repairs are serviced at our workshop.',
  },
  {
    id: 'battery',
    title: 'BATTERY / JUMPSTART',
    shortLabel: 'BATTERY',
    subtitle: 'Dead Battery, Slow Cranking',
    icon: BatteryCharging,
    accentColor: '#9DE7E5', // Cyan Mist
    glowColor: 'rgba(157, 231, 229, 0.25)',
    serviceKey: 'Battery Replacement & Jumpstart',
    serviceVenue: 'Doorstep Ready',
    estimatedStarting: 'Quote on WhatsApp',
    deliveryTime: '30–45 Mins',
    recommendation: 'Quick doorstep jumpstart and on-site Amaron or Exide battery replacement with official barcode warranty unboxed in front of you.',
  },
  {
    id: 'dpf',
    title: 'DPF SERVICE & REGENERATION',
    shortLabel: 'DPF SERVICE',
    subtitle: 'Soot Scan, Cleaning, Regeneration',
    icon: Flame,
    accentColor: '#FFB86C', // Soft Amber
    glowColor: 'rgba(255, 184, 108, 0.25)',
    serviceKey: 'DPF Service & Regeneration',
    serviceVenue: 'On-Site Scan / Workshop Deep Clean',
    estimatedStarting: 'Quote on WhatsApp',
    deliveryTime: 'Scan: 30 Mins | Deep Clean: Workshop',
    recommendation: 'On-site computerized DPF soot-level scan and forced regeneration. Severe filter blockages or chemical decarbonization are handled at our specialized workshop.',
  },
  {
    id: 'brakes',
    title: 'BRAKE NOISE / WEAR',
    shortLabel: 'BRAKES',
    subtitle: 'Pads, Rotor, Fluid Bleed',
    icon: Disc,
    accentColor: '#C7C0E8', // Soft Lavender
    glowColor: 'rgba(199, 192, 232, 0.25)',
    serviceKey: 'Brake Service & Pad Replacement',
    serviceVenue: 'Doorstep Pads / Workshop for Rotors',
    estimatedStarting: 'Quote on WhatsApp',
    deliveryTime: '45–60 Mins',
    recommendation: 'On-site brake pad inspection and replacement. Disc rotor lathe trueing, caliper rebuilds, or master cylinder overhauls are performed at our workshop.',
  },
  {
    id: 'warning',
    title: 'WARNING LIGHT ON',
    shortLabel: 'WARNING LIGHT',
    subtitle: 'Check Engine, ABS, Sensors',
    icon: AlertTriangle,
    accentColor: '#8FD8FF', // Ice Blue
    glowColor: 'rgba(143, 216, 255, 0.25)',
    serviceKey: 'OBD-II Computer Diagnostics',
    serviceVenue: 'Doorstep Scan',
    estimatedStarting: 'Quote on WhatsApp',
    deliveryTime: '30–45 Mins',
    recommendation: 'Full OBD-II computerized ECU scanning, error code clearing, and sensor live data check at your location. Deep wiring or module repairs are taken to our workshop.',
  },
  {
    id: 'repair',
    title: 'MAJOR MECHANICAL REPAIR',
    shortLabel: 'MAJOR REPAIR',
    subtitle: 'Suspension, Clutch, Transmission',
    icon: Sparkles,
    accentColor: '#DCC9A6', // Soft Champagne
    glowColor: 'rgba(220, 201, 166, 0.25)',
    serviceKey: 'Custom Mechanical Repair',
    serviceVenue: 'Workshop Execution',
    estimatedStarting: 'Quote on WhatsApp',
    deliveryTime: 'Workshop Booking',
    recommendation: 'Our technician inspects your vehicle on-site. For heavy suspension, clutch overhauls, gearbox repairs, or engine work, your car is safely brought to our workshop.',
  },
];

export default function CarNeedSelector({ onOpenBooking }) {
  const [selectedNeedId, setSelectedNeedId] = useState('service');

  const activeNeed = CAR_NEEDS.find((n) => n.id === selectedNeedId) || CAR_NEEDS[0];
  const ActiveIcon = activeNeed.icon;

  const handleWhatsAppHelp = () => {
    const url = buildWhatsAppUrl({
      serviceName: activeNeed.serviceKey
    });
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-[#080A0D] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* CINEMATIC DARK AUTOMOTIVE WORKSHOP BACKGROUND LAYER           */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Modern Dark Car & Workshop Studio Atmosphere */}
        <img 
          src="/images/car_need_bg.jpg" 
          alt="Automotive Workshop Silhouette" 
          className="w-full h-full object-cover object-center opacity-30 filter contrast-110 saturate-[1.1] transition-opacity duration-700"
        />

        {/* Subtle Technical Hexagonal Matrix Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(143, 216, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Top, Bottom & Edge Gradient Vales for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D] via-transparent to-[#080A0D] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D]/90 via-transparent to-[#080A0D]/90" />

        {/* Active Selection Dynamic Ambient Color Bloom */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] rounded-full blur-[150px] pointer-events-none transition-all duration-700 opacity-25"
          style={{ backgroundColor: activeNeed.accentColor }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>DIAGNOSIS &amp; SERVICE FINDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            WHAT DOES <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-aqua">YOUR CAR NEED?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed">
            Small &amp; general services at your doorstep. Major repairs handled at our workshop.
          </p>
        </div>

        {/* 7 Interactive Needs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3.5 mb-8">
          {CAR_NEEDS.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedNeedId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedNeedId(item.id)}
                className={`p-3.5 rounded-card border text-left transition-all duration-300 relative flex flex-col justify-between h-[135px] sm:h-[148px] group ${
                  isSelected
                    ? 'bg-[#181E24] -translate-y-1.5 shadow-lg'
                    : 'bg-[#101419] border-[#252C33] hover:border-[#A7ADB4]/30 hover:bg-[#181E24]/60'
                }`}
                style={{
                  borderColor: isSelected ? item.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 25px ${item.glowColor}` : undefined,
                }}
              >
                {/* Active Indicator Top Light Bar */}
                {isSelected && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-card"
                    style={{ backgroundColor: item.accentColor }}
                  />
                )}

                <div 
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                    isSelected ? 'shadow-sm' : 'bg-[#181E24] text-[#A7ADB4]'
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${item.accentColor}25` : undefined,
                    color: isSelected ? item.accentColor : undefined,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <h4 className="text-[11px] sm:text-xs font-black text-white font-heading tracking-tight leading-tight">
                    {item.shortLabel}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-[#A7ADB4] font-medium truncate mt-0.5 font-sans">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Issue Detailed Action Panel */}
        <div className="bg-[#181E24] border border-[#252C33] rounded-card-lg p-6 sm:p-8 shadow-premium text-left relative overflow-hidden transition-all duration-500">
          
          <div 
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ backgroundColor: activeNeed.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase font-mono tracking-wider border"
                  style={{
                    backgroundColor: `${activeNeed.accentColor}18`,
                    color: activeNeed.accentColor,
                    borderColor: `${activeNeed.accentColor}40`,
                  }}
                >
                  RECOMMENDED ACTION
                </span>
                
                <span className="text-xs font-bold text-ice font-mono flex items-center gap-1 bg-[#101419] px-2.5 py-1 rounded-full border border-[#252C33]">
                  <span>Venue:</span>
                  <strong className="text-white">{activeNeed.serviceVenue}</strong>
                </span>

                <span className="text-xs font-bold text-[#A7ADB4] font-mono">
                  Price: <strong style={{ color: activeNeed.accentColor }}>{activeNeed.estimatedStarting}</strong>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight">
                {activeNeed.title}
              </h3>

              <p className="text-sm text-[#A7ADB4] leading-relaxed max-w-3xl font-sans">
                {activeNeed.recommendation}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenBooking && onOpenBooking('', activeNeed.serviceKey)}
                className="w-full py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2"
              >
                <span>BOOK SERVICE →</span>
                <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
              </button>

              <button
                onClick={handleWhatsAppHelp}
                className="w-full py-3 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-whatsapp" />
                <span>CHAT WITH TECHNICIAN</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
