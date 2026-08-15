import React from 'react';
import { ShieldCheck, Wrench, Clock, CheckCircle2, ArrowRight, MessageSquare, Sparkles, MapPin, Award } from 'lucide-react';
import Logo from './Logo';

export default function AboutSection({ onOpenBooking }) {
  const highlights = [
    {
      label: "DOORSTEP SERVICE",
      title: "No Waiting in Garages",
      desc: "Save 3 to 5 hours of weekend traffic and waiting room delays. We work in your parking slot while you relax at home or work.",
      icon: Clock
    },
    {
      label: "PROFESSIONAL CARE",
      title: "100% Genuine OEM Spares",
      desc: "Every oil bottle, filter, brake pad, and spark plug is unsealed right in front of your eyes with manufacturer barcode warranty.",
      icon: ShieldCheck
    },
    {
      label: "CONVENIENT BOOKING",
      title: "Master Mobile Mechanics",
      desc: "Our mobile units carry advanced OBD-II diagnostic scanners, precision hydraulic jacks, and factory torque tools for exact spec work.",
      icon: Wrench
    },
    {
      label: "WRITTEN WARRANTY",
      title: "1000 KM Assurance",
      desc: "Every service performed by The Garage On Wheels is backed by our documented doorstep service & workmanship warranty.",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-surface border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Automotive Dark Cinematic Card with Official Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-card-lg overflow-hidden border border-titanium/20 shadow-2xl bg-graphite text-white p-8">
              
              {/* Background Image Layer with Dark Cinematic Treatment */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/gallery/garage_workshop.jpg" 
                  alt="Automotive Workshop Precision" 
                  className="w-full h-full object-cover opacity-15 filter grayscale-[40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/90 to-graphite/80" />
              </div>

              {/* Subtle Steel Blue Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-steel-400/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10 text-center sm:text-left">
                {/* Official Logo Emblem */}
                <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-charcoal border border-titanium/20 backdrop-blur-md shadow-md">
                  <div className="w-14 h-14 rounded-xl bg-white p-1 shadow-sm shrink-0 border border-titanium/20">
                    <img 
                      src="/images/business_logo.png" 
                      alt="The Garage On Wheels Official Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-sans text-white tracking-tight">
                      THE GARAGE <span className="text-steel-400">ON WHEELS</span>
                    </h3>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-titanium">
                      Door Step Car Service &amp; Repair
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-steel-400 font-mono">
                    OUR CORE PHILOSOPHY
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Redefining Car Maintenance For The Modern World.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Customers don't always need to drive their car to a garage. <strong>The Garage On Wheels</strong> brings professional car service and repair directly to the customer's location with zero friction and complete pricing transparency.
                  </p>
                </div>

                {/* Badges with Titanium Dividers */}
                <div className="pt-4 border-t border-titanium/15 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-2xl font-black text-white font-sans">1,200+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Cars Serviced at Doorstep</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-steel-400 font-sans">100%</div>
                    <div className="text-[11px] text-slate-400 font-medium">Genuine OEM Parts</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: About Content & Information Labels */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20">
                <Sparkles className="w-3.5 h-3.5 text-steel-400" />
                <span>ABOUT THE GARAGE ON WHEELS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight leading-tight">
                CAR CARE THAT <span className="text-steel-600">COMES TO YOU.</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Customers don't always need to drive their car to a traditional garage. <strong>The Garage On Wheels</strong> brings professional car service and repair directly to your home, office, or residential parking in Tirumalagiri, Secunderabad, and Hyderabad.
              </p>
            </div>

            {/* Feature Matrix with Information Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-card bg-white border border-border hover:border-steel-400 transition-all duration-300 shadow-sm hover:shadow-md space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-btn bg-surface text-steel-700 group-hover:bg-graphite group-hover:text-steel-300 transition-colors flex items-center justify-center border border-border">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase font-mono">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-graphite transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs tracking-widest uppercase rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 active:scale-95 border border-steel-300"
              >
                <span>BOOK A SERVICE</span>
                <ArrowRight className="w-4 h-4" />
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
