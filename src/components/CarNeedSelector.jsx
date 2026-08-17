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
  Home,
  Snowflake,
  Settings,
  Cpu
} from 'lucide-react';
import { buildWhatsAppUrl, BUSINESS_INFO } from '../data/carServiceData';

/* -------------------------------------------------------------------------- */
/* PREMIUM TECHNICAL AUTOMOTIVE LINE-ART LOGO WATERMARKS (Thin-Line Outline)  */
/* -------------------------------------------------------------------------- */

// 1. SERVICE: Crossed Wrench & Spanner / Service Tools Outline
function ServiceToolsWatermark({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Primary Open-End Spanner */}
      <path d="M78 22 C73 14 62 12 55 17 L44 28 L54 38 L65 27 C70 20 79 20 78 22 Z" />
      <path d="M44 28 L18 74 C16 78 19 82 23 80 L32 75 L38 81 C42 85 48 83 49 78 L65 27" />
      <circle cx="28" cy="74" r="3" />
      {/* Secondary Socket / Ring Wrench Crossed */}
      <path d="M22 22 C30 14 42 16 47 23 L27 43 C20 38 18 26 22 22 Z" />
      <circle cx="34" cy="33" r="4.5" />
      <path d="M47 23 L79 73 C82 78 77 84 72 81 L68 77 L57 88" />
      {/* Precision Measurement Ticks */}
      <line x1="48" y1="52" x2="52" y2="48" />
      <line x1="53" y1="57" x2="57" y2="53" />
      <line x1="58" y1="62" x2="62" y2="58" />
    </svg>
  );
}

// 2. AC: Snowflake + Airflow Cooling Symbol Outline
function AcCoolingWatermark({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* 6-Axis Geometric Snowflake */}
      <line x1="50" y1="12" x2="50" y2="88" />
      <line x1="17" y1="31" x2="83" y2="69" />
      <line x1="17" y1="69" x2="83" y2="31" />
      {/* Snowflake Branch V-Notches */}
      <path d="M42 22 L50 28 L58 22" />
      <path d="M42 78 L50 72 L58 78" />
      <path d="M25 40 L33 40 L30 49" />
      <path d="M75 60 L67 60 L70 51" />
      <path d="M25 60 L33 60 L30 51" />
      <path d="M75 40 L67 40 L70 49" />
      {/* Concentric Cooling Airflow Streamlines */}
      <path d="M12 20 C28 14 72 14 88 20" strokeDasharray="3 3" />
      <path d="M8 82 C28 88 72 88 92 82" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="6" />
    </svg>
  );
}

// 3. BATTERY: Automotive Battery with Post Terminals & Voltage Wave
function BatteryTerminalsWatermark({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Battery Body */}
      <rect x="14" y="28" width="72" height="54" rx="4" />
      {/* Positive & Negative Raised Terminals */}
      <rect x="22" y="18" width="14" height="10" rx="1.5" />
      <rect x="64" y="18" width="14" height="10" rx="1.5" />
      {/* Positive Symbol (+) */}
      <line x1="29" y1="40" x2="29" y2="50" strokeWidth="1.5" />
      <line x1="24" y1="45" x2="34" y2="45" strokeWidth="1.5" />
      {/* Negative Symbol (-) */}
      <line x1="66" y1="45" x2="76" y2="45" strokeWidth="1.5" />
      {/* Center Dynamic Lightning / High Voltage Arc */}
      <path d="M52 38 L44 52 L53 52 L48 68" strokeWidth="1.4" />
      {/* Internal Cell Grids */}
      <line x1="40" y1="36" x2="40" y2="74" strokeDasharray="2 3" opacity="0.6" />
      <line x1="60" y1="36" x2="60" y2="74" strokeDasharray="2 3" opacity="0.6" />
    </svg>
  );
}

// 4. DPF SERVICE: Diesel Exhaust Particulate Filter & Flow Matrix Symbol
function DpfExhaustWatermark({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Main Exhaust Filter Canister */}
      <rect x="28" y="20" width="44" height="60" rx="10" />
      {/* Inlet & Outlet Pipes */}
      <path d="M50 8 L50 20" strokeWidth="2" />
      <path d="M50 80 L50 92" strokeWidth="2" />
      <path d="M42 8 L58 8" strokeWidth="2" />
      <path d="M42 92 L58 92" strokeWidth="2" />
      {/* Internal Honeycomb Matrix Lines */}
      <line x1="36" y1="30" x2="64" y2="30" strokeDasharray="2 2" />
      <line x1="34" y1="40" x2="66" y2="40" strokeDasharray="2 2" />
      <line x1="34" y1="50" x2="66" y2="50" strokeDasharray="2 2" />
      <line x1="34" y1="60" x2="66" y2="60" strokeDasharray="2 2" />
      <line x1="36" y1="70" x2="64" y2="70" strokeDasharray="2 2" />
      {/* Differential Pressure Sensor Ports */}
      <circle cx="28" cy="34" r="2.5" />
      <circle cx="28" cy="66" r="2.5" />
      <path d="M25 34 L18 34 L18 66 L25 66" />
      {/* Hot Regeneration Flame Micro-Motif */}
      <path d="M50 38 C54 44 56 48 50 56 C44 48 46 44 50 38 Z" />
    </svg>
  );
}

// 5. BRAKES: Vented Brake Disc Rotor & Caliper Outline
function BrakeRotorWatermark({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Outer Slotted Rotor Disc */}
      <circle cx="52" cy="52" r="38" />
      <circle cx="52" cy="52" r="28" />
      {/* Central Hub & Wheel Bolt Pattern */}
      <circle cx="52" cy="52" r="14" />
      <circle cx="52" cy="52" r="6" />
      <circle cx="52" cy="42" r="2" />
      <circle cx="61.5" cy="48.9" r="2" />
      <circle cx="57.9" cy="60.1" r="2" />
      <circle cx="46.1" cy="60.1" r="2" />
      <circle cx="42.5" cy="48.9" r="2" />
      {/* Curved Performance Ventilation Slots */}
      <path d="M52 24 C57 28 59 34 58 40" strokeDasharray="2 2" />
      <path d="M76 44 C74 50 70 55 64 56" strokeDasharray="2 2" />
      <path d="M68 72 C62 72 56 68 54 62" strokeDasharray="2 2" />
      <path d="M36 68 C34 62 36 56 42 54" strokeDasharray="2 2" />
      {/* Clamping Hydraulic Brake Caliper */}
      <path d="M16 28 C24 16 38 12 50 14 L46 30 C38 28 28 32 24 40 Z" strokeWidth="1.5" />
    </svg>
  );
}

// 6. WARNING LIGHT: Dashboard Warning Triangle & Telemetry Wave
function WarningDiagnosticsWatermark({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* ISO Warning Triangle Frame */}
      <path d="M50 14 L88 78 C90 82 87 86 82 86 L18 86 C13 86 10 82 12 78 Z" strokeWidth="1.4" />
      <path d="M50 24 L78 74 C80 77 78 80 74 80 L26 80 C22 80 20 77 22 74 Z" strokeDasharray="2 2" opacity="0.6" />
      {/* Exclamation Symbol */}
      <line x1="50" y1="38" x2="50" y2="56" strokeWidth="2.5" />
      <circle cx="50" cy="68" r="2" fill="currentColor" />
      {/* OBD Computer Telemetry / Heartbeat Rays */}
      <path d="M8 50 L26 50 L32 38 L38 62 L44 48 L50 50 L92 50" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

// 7. MAJOR REPAIR: Engine Block & Interlocking Cogwheel Gear
function EngineGearWatermark({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Precision 8-Tooth Mechanical Gear / Cog */}
      <circle cx="48" cy="50" r="16" />
      <circle cx="48" cy="50" r="7" />
      {/* Gear Teeth Outer Profile */}
      <path d="M44 26 L52 26 L53 32 C57 33 60 36 63 39 L69 36 L73 42 L68 47 C69 50 69 54 68 57 L73 62 L69 68 L63 65 C60 68 57 71 53 72 L52 78 L44 78 L43 72 C39 71 36 68 33 65 L27 68 L23 62 L28 57 C27 54 27 50 28 47 L23 42 L27 36 L33 39 C36 36 39 33 43 32 Z" />
      {/* Engine Cylinder Piston / Head Frame Lines */}
      <path d="M12 20 L24 20 L24 28" />
      <path d="M88 20 L76 20 L76 28" />
      <path d="M12 84 L30 84" />
      <path d="M88 84 L70 84" />
      <line x1="48" y1="12" x2="48" y2="20" strokeWidth="2" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* 7 INTERACTIVE ISSUE NEEDS CONFIGURATION WITH CUSTOM IMAGES                 */
/* -------------------------------------------------------------------------- */

const CAR_NEEDS = [
  {
    id: 'service',
    title: 'PERIODIC SERVICE',
    shortLabel: 'SERVICE',
    subtitle: 'Lube, Filters, Multi-Point Check',
    icon: Wrench,
    image: 'https://www.differencebetween.net/wp-content/uploads/2017/10/Differencebetween-product-and-service-1.jpg',
    fallbackImage: '/images/gallery/engine_diagnostic.jpg',
    WatermarkComponent: ServiceToolsWatermark,
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
    image: 'https://adityacarairconditioners.com/wp-content/uploads/2025/06/repairman-holdingmonitor-tool-check-600nw-2279387293-1-1-1-1.webp',
    fallbackImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    WatermarkComponent: AcCoolingWatermark,
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUGj52yrcMfP0ClUiH6fB4sM6EXm9RMNtl787DRLV77MSRV2K4i92pg&s=10',
    fallbackImage: '/images/gallery/battery_electrical.jpg',
    WatermarkComponent: BatteryTerminalsWatermark,
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgQnlnh0nBfOIcYaj1O5_CM6ZNaXmEB37jmPlDROick2bNCXz2JqVtr18&s=10',
    fallbackImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    WatermarkComponent: DpfExhaustWatermark,
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
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/LZ/AI/NN/2437456/car-brakesystem-services.jpg',
    fallbackImage: '/images/gallery/brake_repair.jpg',
    WatermarkComponent: BrakeRotorWatermark,
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeyrfB7phMyj9ZTHQlAxa2HgjveOANtRDtp1hG-hobEf1wDzovMzL3Q7s&s=10',
    fallbackImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    WatermarkComponent: WarningDiagnosticsWatermark,
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
    image: 'https://blogs.gomechanic.com/wp-content/uploads/2025/09/Insider-Basic-CarRepairs-Every-Owner-Should-Know.png',
    fallbackImage: '/images/gallery/gearbox_repair.jpg',
    WatermarkComponent: EngineGearWatermark,
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
    if (onOpenBooking) {
      onOpenBooking('', activeNeed.serviceKey, `${activeNeed.title} - ${activeNeed.subtitle}`);
    } else {
      const url = buildWhatsAppUrl({
        serviceName: activeNeed.serviceKey,
        issueDescription: `${activeNeed.title} - ${activeNeed.subtitle}`
      });
      window.open(url, '_blank');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#080A0D] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* CINEMATIC DARK AUTOMOTIVE BACKGROUND ATMOSPHERE LAYER         */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Subtle Technical Grid Matrix Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(143, 216, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Top, Bottom & Edge Gradient Vales */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D] via-transparent to-[#080A0D] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D]/90 via-transparent to-[#080A0D]/90" />

        {/* Active Selection Dynamic Ambient Color Bloom */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] rounded-full blur-[150px] pointer-events-none transition-all duration-700 opacity-20"
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

        {/* 7 Interactive Needs Grid with Custom Uploaded Service Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3.5 mb-8">
          {CAR_NEEDS.map((item) => {
            const Icon = item.icon;
            const Watermark = item.WatermarkComponent;
            const isSelected = selectedNeedId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedNeedId(item.id)}
                className={`p-3.5 rounded-card border text-left transition-all duration-300 relative flex flex-col justify-between h-[145px] sm:h-[155px] overflow-hidden group ${
                  isSelected
                    ? 'bg-[#181E24] -translate-y-1.5 shadow-lg ring-1'
                    : 'bg-[#101419] border-[#252C33] hover:border-[#A7ADB4]/40 hover:bg-[#181E24]/80'
                }`}
                style={{
                  borderColor: isSelected ? item.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 25px ${item.glowColor}` : undefined,
                  outlineColor: isSelected ? item.accentColor : undefined,
                }}
              >
                {/* 1. Background Service Image Layer with Ambient Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-card">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    onError={(e) => {
                      if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                        e.currentTarget.src = item.fallbackImage;
                      }
                    }}
                    className={`w-full h-full object-cover object-center transition-all duration-500 ${
                      isSelected 
                        ? 'opacity-30 scale-110 filter saturate-125 contrast-110' 
                        : 'opacity-15 group-hover:opacity-25 group-hover:scale-105 filter grayscale-[30%]'
                    }`}
                  />
                  {/* Subtle Dark Automotive Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isSelected 
                      ? 'bg-gradient-to-t from-[#181E24] via-[#181E24]/80 to-[#181E24]/40' 
                      : 'bg-gradient-to-t from-[#101419] via-[#101419]/85 to-[#101419]/50'
                  }`} />
                </div>

                {/* 2. Large Thin-Line Automotive Logo Watermark (Right/Bottom-Right Cropped) */}
                <div 
                  className={`absolute -right-3.5 -bottom-3.5 sm:-right-4 sm:-bottom-4 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none transition-all duration-500 z-1 ${
                    isSelected 
                      ? 'opacity-[0.22] scale-105 rotate-3' 
                      : 'opacity-[0.08] group-hover:opacity-[0.16] group-hover:scale-105 group-hover:rotate-2'
                  }`}
                  style={{
                    color: isSelected ? item.accentColor : '#A7ADB4',
                  }}
                >
                  <Watermark className="w-full h-full" />
                </div>

                {/* 3. Active Indicator Top Light Bar */}
                {isSelected && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-card z-20"
                    style={{ backgroundColor: item.accentColor }}
                  />
                )}

                {/* 4. Service Icon */}
                <div 
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 relative z-10 backdrop-blur-xs ${
                    isSelected ? 'shadow-sm' : 'bg-[#101419]/90 text-[#A7ADB4] border border-[#252C33]'
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${item.accentColor}30` : undefined,
                    color: isSelected ? item.accentColor : undefined,
                    borderColor: isSelected ? `${item.accentColor}60` : undefined,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* 5. Service Typography & Description */}
                <div className="relative z-10 mt-auto pt-2">
                  <h4 className="text-[11px] sm:text-xs font-black text-white font-heading tracking-tight leading-tight drop-shadow-md">
                    {item.shortLabel}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-[#A7ADB4] group-hover:text-white font-medium truncate mt-0.5 font-sans transition-colors drop-shadow-sm">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Issue Detailed Action Panel with Featured Image Card */}
        <div className="bg-[#181E24] border border-[#252C33] rounded-card-lg p-6 sm:p-8 shadow-premium text-left relative overflow-hidden transition-all duration-500">
          
          <div 
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ backgroundColor: activeNeed.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Featured Image Thumbnail Column */}
            <div className="lg:col-span-4 relative rounded-xl overflow-hidden border border-[#252C33] group/img aspect-video sm:aspect-[16/10] lg:aspect-[4/3] bg-[#101419] shadow-md">
              <img 
                src={activeNeed.image} 
                alt={activeNeed.title}
                onError={(e) => {
                  if (activeNeed.fallbackImage && e.currentTarget.src !== activeNeed.fallbackImage) {
                    e.currentTarget.src = activeNeed.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/90 via-[#080A0D]/30 to-transparent" />
              
              {/* Overlay Venue Badge on Image */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#080A0D]/85 backdrop-blur-md border border-[#252C33] text-[11px] font-mono font-bold text-white">
                <ActiveIcon className="w-3.5 h-3.5" style={{ color: activeNeed.accentColor }} />
                <span>{activeNeed.serviceVenue}</span>
              </div>

              {/* Service Tag at Bottom */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span 
                  className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-mono border"
                  style={{
                    backgroundColor: `${activeNeed.accentColor}20`,
                    color: activeNeed.accentColor,
                    borderColor: `${activeNeed.accentColor}50`,
                  }}
                >
                  {activeNeed.shortLabel}
                </span>
                <span className="text-[11px] text-gray-300 font-mono">
                  {activeNeed.deliveryTime}
                </span>
              </div>
            </div>

            {/* Diagnostic Information */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
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

              <p className="text-sm text-[#A7ADB4] leading-relaxed font-sans">
                {activeNeed.recommendation}
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenBooking && onOpenBooking('', activeNeed.serviceKey)}
                className="w-full py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <span>BOOK SERVICE →</span>
                <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
              </button>

              <button
                onClick={handleWhatsAppHelp}
                className="w-full py-3 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn flex items-center justify-center space-x-2 active:scale-95 transition-all"
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
