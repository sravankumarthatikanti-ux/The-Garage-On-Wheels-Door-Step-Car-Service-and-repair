import React from 'react';
import { 
  ShieldCheck, Clock, Award, CheckCircle2, 
  MapPin, MessageSquare, Wrench, Sparkles, UserCheck, CalendarCheck
} from 'lucide-react';
import CinematicParticles from './CinematicParticles';

const TRUST_PILLARS = [
  {
    title: "Doorstep Service",
    desc: "Complete vehicle maintenance and repairs brought directly to your home, office, or apartment driveway.",
    icon: MapPin,
    badge: "100% Mobile"
  },
  {
    title: "Professional Technicians",
    desc: "Certified, background-verified master mechanics equipped with modern OBD-II diagnostic scanners and OEM tools.",
    icon: UserCheck,
    badge: "Certified Experts"
  },
  {
    title: "Convenient Booking",
    desc: "Frictionless WhatsApp scheduling with zero waiting lines. Pick your convenient time slot in under 60 seconds.",
    icon: CalendarCheck,
    badge: "Zero Friction"
  },
  {
    title: "Reliable Car Care",
    desc: "100% Genuine OEM & OES spare parts backed by up to 1000 KMs / 1-month written service warranty.",
    icon: ShieldCheck,
    badge: "Genuine Parts"
  },
  {
    title: "Transparent Communication",
    desc: "Upfront itemized quotes with live photo & video updates sent directly on WhatsApp throughout the service.",
    icon: MessageSquare,
    badge: "No Hidden Costs"
  },
  {
    title: "Service At Your Location",
    desc: "No wasting 4+ hours driving to crowded workshops. We service your car while you spend time with family or work.",
    icon: Clock,
    badge: "Zero Downtime"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-graphite text-white border-t border-titanium/15 relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* CINEMATIC ATMOSPHERE & SUBTLE OVERSIZED AUTOMOTIVE SILHOUETTE */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ice Blue & Mist Blue Ambient Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-steel-400/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-steel-300/[0.03] rounded-full blur-[120px]" />

        {/* Ultra-Faint Luxury Sports Car Silhouette (Photographic/diffuse reflection ~0.035 opacity) */}
        <svg
          className="absolute right-[-10%] bottom-[-5%] w-[65%] h-[75%] opacity-[0.035] text-white hidden md:block"
          viewBox="0 0 1200 500"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 50 350 C 150 350 250 340 380 260 C 520 170 720 150 880 210 C 980 250 1080 330 1160 350 L 1180 350 C 1195 350 1200 365 1190 385 L 1160 410 C 1100 415 1060 415 1000 415 C 970 370 910 370 880 415 L 420 415 C 390 370 330 370 300 415 L 60 415 C 30 415 10 400 30 380 Z" />
          <circle cx="360" cy="415" r="55" />
          <circle cx="940" cy="415" r="55" />
          <path d="M 480 260 L 720 240 C 800 240 860 270 890 310 L 450 310 Z" opacity="0.5" />
        </svg>

        {/* Ambient Floating Micro-Particles */}
        <CinematicParticles density={18} color="143, 175, 194" maxSpeed={0.15} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-charcoal border border-titanium/20 text-steel-300 text-xs font-bold uppercase tracking-widest font-mono">
            <Award className="w-3.5 h-3.5 text-steel-400" />
            <span>THE GARAGE ON WHEELS STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            BUILT AROUND <span className="text-steel-400">YOUR CONVENIENCE.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We eliminate traditional garage delays, inflated repair bills, and counterfeit spare parts with transparent doorstep care.
          </p>
        </div>

        {/* 6 Trust Pillar Cards with Material Lighting & Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="dark-card p-6 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-card bg-graphite text-steel-400 border border-titanium/15 flex items-center justify-center group-hover:border-steel-400/50 group-hover:bg-steel-400/10 group-hover:scale-105 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-titanium px-2.5 py-1 rounded-full bg-graphite border border-titanium/15 uppercase tracking-widest font-mono">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-steel-400 shrink-0" />
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-steel-300 transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-titanium/10 flex items-center justify-between text-xs font-semibold text-steel-400">
                  <span className="text-[11px] text-slate-400 font-medium font-mono">The Garage On Wheels Standard</span>
                  <Sparkles className="w-3.5 h-3.5 text-steel-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
