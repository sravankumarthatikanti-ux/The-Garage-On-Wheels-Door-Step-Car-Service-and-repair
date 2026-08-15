import React from 'react';
import { ShieldCheck, Wrench, Clock, CheckCircle2, ArrowRight, MessageSquare, Sparkles, MapPin, Zap } from 'lucide-react';
import Logo from './Logo';

export default function AboutSection({ onOpenBooking }) {
  const trustPillars = [
    {
      title: "DOORSTEP SERVICE",
      desc: "Our mobile technicians bring tools, diagnostic scanners, and genuine spare parts directly to your home or office parking slot.",
      icon: MapPin,
    },
    {
      title: "PROFESSIONAL CARE",
      desc: "Every oil container, filter, brake pad, and component is unsealed in front of you with complete itemized transparency.",
      icon: ShieldCheck,
    },
    {
      title: "CONVENIENT BOOKING",
      desc: "Instant scheduling with zero workshop queues. Pick your time slot and get fast doorstep service across the twin cities.",
      icon: Zap,
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-surface-warm border-t border-border relative overflow-hidden">
      
      {/* Subtle Atmospheric Lighting: Lavender Grey / Steel Mist */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[350px] bg-lavender/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Column 1 (Mobile first, Desktop left): Premium Automotive Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-card-lg overflow-hidden border border-titanium/20 shadow-xl bg-graphite text-white p-6 sm:p-8">
              
              {/* Workshop Photo Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/gallery/garage_workshop.jpg" 
                  alt="Automotive Service Workshop Precision" 
                  className="w-full h-full object-cover opacity-20 filter grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/90 to-graphite/80" />
              </div>

              <div className="space-y-6 relative z-10 text-left">
                {/* Official Logo Badge */}
                <div className="inline-flex items-center gap-3.5 p-2.5 rounded-2xl bg-charcoal border border-titanium/20 backdrop-blur-md shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-sm shrink-0 border border-titanium/20">
                    <img 
                      src="/images/business_logo.png" 
                      alt="The Garage On Wheels Official Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black font-sans text-white tracking-tight">
                      THE GARAGE <span className="text-steel-400">ON WHEELS</span>
                    </h3>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-titanium font-mono">
                      Door Step Car Service &amp; Repair
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-steel-400 font-mono">
                    OUR CORE PHILOSOPHY
                  </span>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug">
                    Redefining Car Maintenance For The Modern World.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    You shouldn't have to spend your weekend driving through traffic or sitting in waiting rooms. <strong>The Garage On Wheels</strong> brings certified car service directly to your location with total price clarity.
                  </p>
                </div>

                {/* Verified Core Standards */}
                <div className="pt-3 border-t border-titanium/15 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-white font-mono">100% Mobile</div>
                    <div className="text-[11px] text-slate-400 font-medium">At your doorstep</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-steel-400 font-mono">100% Genuine</div>
                    <div className="text-[11px] text-slate-400 font-medium">OEM sealed parts</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Column 2 (Mobile second, Desktop right): Content & 3 Trust Points */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-2.5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-steel-400" />
                <span>ABOUT US</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight leading-tight">
                CAR CARE THAT <span className="text-steel-600">COMES TO YOU.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                We believe regular car servicing and repairs should be effortless. We dispatch certified mobile technicians directly to your residential parking or corporate office across Secunderabad and Hyderabad.
              </p>
            </div>

            {/* 3 Core Trust Pillars */}
            <div className="space-y-3 pt-1">
              {trustPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-card bg-white border border-border hover:border-steel-400 transition-all shadow-sm space-y-1.5"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="w-7 h-7 rounded-lg bg-surface text-steel-700 flex items-center justify-center border border-border shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide font-mono">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed pl-9">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs tracking-widest uppercase rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 active:scale-95 border border-steel-300"
              >
                <span>BOOK A SERVICE →</span>
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 bg-white border border-titanium hover:border-slate-800 text-slate-800 font-bold text-xs tracking-widest uppercase rounded-btn transition-colors flex items-center justify-center space-x-2"
              >
                <span>SEE HOW IT WORKS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
