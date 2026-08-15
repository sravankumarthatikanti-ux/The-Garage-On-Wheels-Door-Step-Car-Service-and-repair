import React from 'react';
import { 
  ShieldCheck, Clock, Award, CheckCircle2, 
  MapPin, MessageSquare, Wrench, Sparkles, UserCheck, CalendarCheck, Zap
} from 'lucide-react';
import CinematicParticles from './CinematicParticles';

const FEATURES = [
  {
    title: "DOORSTEP CONVENIENCE",
    desc: "Complete vehicle maintenance and repairs brought directly to your home, office, or apartment driveway with zero garage travel.",
    icon: MapPin,
    badge: "100% Mobile",
    color: "text-aqua",
    borderGlow: "hover:border-aqua hover:shadow-[0_20px_45px_rgba(142,221,208,0.25)]",
    topBar: "bg-aqua",
    iconBg: "text-aqua",
  },
  {
    title: "PROFESSIONAL CARE",
    desc: "Certified, background-verified master mechanics equipped with modern OBD-II diagnostic scanners and factory torque tools.",
    icon: UserCheck,
    badge: "Certified Experts",
    color: "text-ice",
    borderGlow: "hover:border-ice hover:shadow-[0_20px_45px_rgba(143,216,255,0.25)]",
    topBar: "bg-ice",
    iconBg: "text-ice",
  },
  {
    title: "TRANSPARENT SERVICE",
    desc: "100% Genuine OEM & OES spare parts unboxed before your eyes with itemized upfront pricing and live WhatsApp updates.",
    icon: ShieldCheck,
    badge: "Genuine Spares",
    color: "text-lavender",
    borderGlow: "hover:border-lavender hover:shadow-[0_20px_45px_rgba(199,192,232,0.25)]",
    topBar: "bg-lavender",
    iconBg: "text-lavender",
  },
  {
    title: "EASY BOOKING",
    desc: "Frictionless WhatsApp scheduling with zero waiting lines. Pick your convenient date and time slot in under 60 seconds.",
    icon: Zap,
    badge: "Fast Dispatch",
    color: "text-lime",
    borderGlow: "hover:border-lime hover:shadow-[0_20px_45px_rgba(200,230,184,0.25)]",
    topBar: "bg-lime",
    iconBg: "text-lime",
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-graphite text-white border-t border-titanium/15 relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* BACKGROUND COLOR BLOOMS: CYAN + VIOLET MOVING LIGHT           */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Cyan Mist & Cool Violet Ambient Glow Pools */}
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-cyan/[0.08] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-violet/[0.08] rounded-full blur-[130px]" />
        <div className="absolute top-10 left-10 w-[400px] h-[250px] bg-ice/[0.06] rounded-full blur-[100px]" />

        {/* Faint Aerodynamic Sports Car Silhouette */}
        <svg
          className="absolute right-[-10%] bottom-[-5%] w-[65%] h-[75%] opacity-[0.04] text-white hidden md:block"
          viewBox="0 0 1200 500"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 50 350 C 150 350 250 340 380 260 C 520 170 720 150 880 210 C 980 250 1080 330 1160 350 L 1180 350 C 1195 350 1200 365 1190 385 L 1160 410 C 1100 415 1060 415 1000 415 C 970 370 910 370 880 415 L 420 415 C 390 370 330 370 300 415 L 60 415 C 30 415 10 400 30 380 Z" />
          <circle cx="360" cy="415" r="55" />
          <circle cx="940" cy="415" r="55" />
          <path d="M 480 260 L 720 240 C 800 240 860 270 890 310 L 450 310 Z" opacity="0.5" />
        </svg>

        <CinematicParticles density={20} color="143, 216, 255" maxSpeed={0.16} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-charcoal border border-ice/30 text-ice text-xs font-bold uppercase tracking-widest font-mono">
            <Award className="w-3.5 h-3.5 text-cyan" />
            <span>THE GARAGE ON WHEELS STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            MORE THAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-lavender">A GARAGE.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A smarter way to take care of your car.
          </p>
        </div>

        {/* 4 Feature Cards with Exact Color Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`dark-card p-6 flex flex-col justify-between group shadow-lg ${item.borderGlow}`}
              >
                {/* 5% Top Soft Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.topBar}`} />

                <div>
                  {/* Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div className={`w-12 h-12 rounded-xl bg-graphite border border-titanium/15 flex items-center justify-center ${item.iconBg} group-hover:bg-charcoal transition-all shadow-sm`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-titanium px-2.5 py-0.5 rounded-full bg-graphite border border-titanium/15 uppercase tracking-widest font-mono">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-black text-white group-hover:text-ice transition-colors uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t border-titanium/10 flex items-center justify-between text-xs font-semibold ${item.color} font-mono`}>
                  <span className="text-[11px] text-slate-400 font-medium">Standard Included</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
