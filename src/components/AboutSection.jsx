import React from 'react';
import { ShieldCheck, Wrench, Clock, CheckCircle2, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function AboutSection({ onOpenBooking }) {
  const highlights = [
    {
      title: "No Waiting in Garages",
      desc: "Save 3 to 5 hours of weekend traffic and waiting room delays. We work in your parking slot while you relax at home.",
      icon: Clock
    },
    {
      title: "100% Genuine OEM Spares",
      desc: "Every oil bottle, filter, brake pad, and spark plug is unsealed right in front of your eyes with manufacturer barcode warranty.",
      icon: ShieldCheck
    },
    {
      title: "Master Mobile Mechanics",
      desc: "Our vans carry advanced OBD-II diagnostic scanners, precision hydraulic jacks, and factory torque tools for exact spec work.",
      icon: Wrench
    },
    {
      title: "1000 KM Written Warranty",
      desc: "Every service performed by The Garage On Wheels is backed by our documented doorstep service & workmanship warranty.",
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-warm border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Brand Card with Official Logo & Workshop Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-card-lg overflow-hidden border border-border shadow-2xl bg-charcoal-deep text-white p-8">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10 text-center sm:text-left">
                {/* Official Logo Emblem */}
                <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-md">
                  <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-md shrink-0">
                    <img 
                      src="/images/business_logo.png" 
                      alt="The Garage On Wheels Official Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-sans text-white tracking-tight">
                      THE GARAGE <span className="text-brand-400">ON WHEELS</span>
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      Door Step Car Service &amp; Repair
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                    Our Core Philosophy
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Redefining Car Maintenance For The Modern World.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Customers don't always need to drive their car to a garage. <strong>The Garage On Wheels</strong> brings professional car service and repair directly to the customer's location with zero friction and complete pricing transparency.
                  </p>
                </div>

                {/* Badges */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-2xl font-black text-white font-sans">1,200+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Cars Serviced at Doorstep</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand-400 font-sans">100%</div>
                    <div className="text-[11px] text-slate-400 font-medium">Genuine OEM Parts</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: About Content & Pillars */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT THE GARAGE ON WHEELS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight leading-tight">
                CAR CARE THAT <span className="text-brand-500">COMES TO YOU.</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Customers don't always need to drive their car to a traditional garage. <strong>The Garage On Wheels</strong> brings professional car service and repair directly to your home, office, or residential parking in Tirumalagiri, Secunderabad, and Hyderabad.
              </p>
            </div>

            {/* Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-card bg-white border border-border hover:border-brand-500/30 transition-all duration-300 shadow-sm hover:shadow-md space-y-2 group"
                  >
                    <div className="w-9 h-9 rounded-btn bg-surface-soft text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 bg-brand-500 hover:bg-brand-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-btn shadow-premium transition-all flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>BOOK A SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 bg-white border border-border hover:border-slate-400 text-slate-800 font-bold text-xs tracking-wider uppercase rounded-btn transition-colors flex items-center justify-center space-x-2"
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
