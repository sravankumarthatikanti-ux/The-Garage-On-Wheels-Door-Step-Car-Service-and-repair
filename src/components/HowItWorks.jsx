import React from 'react';
import { MessageSquare, Car, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "BOOK",
      desc: "Choose the service you need in under 60 seconds on WhatsApp or via our booking flow.",
    },
    {
      num: "02",
      title: "WE COME TO YOU",
      desc: "Our fully equipped mobile service van and certified mechanics reach your exact location.",
    },
    {
      num: "03",
      title: "GET BACK ON THE ROAD",
      desc: "Professional car care, genuine parts unboxed in front of you, and zero garage waiting time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white text-primary border-t border-border relative overflow-hidden">
      
      {/* Subtle Mist Ambient Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-mist/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
            <Car className="w-3.5 h-3.5 text-steel-400" />
            <span>DOORSTEP PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
            HOW IT <span className="text-steel-600">WORKS</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Professional car care without visiting a traditional workshop.
          </p>
        </div>

        {/* 3 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
          {/* Thin Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-[1.5px] bg-gradient-to-r from-transparent via-titanium to-transparent pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="premium-card p-6 sm:p-7 relative flex flex-col justify-between hover:border-steel-400 z-10 bg-white"
            >
              <div>
                {/* Step Numeral Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-steel-400">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold text-muted uppercase tracking-widest font-mono">
                    Step {idx + 1} of 3
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border-soft flex items-center space-x-1.5 text-xs font-semibold text-steel-600 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Process</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Service Van Highlight Banner */}
        <div className="rounded-card-lg bg-surface border border-border p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-steel-700 font-mono">
              FULLY EQUIPPED MOBILE WORKSHOP
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              We Bring the Garage Directly to Your Driveway
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Our customized mobile service units carry hydraulic jacks, OBD-II scanner tablets, genuine synthetic oil drums, spark plugs, high-pressure foam injectors, and battery test equipment.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs uppercase tracking-widest rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center space-x-2 active:scale-95 border border-steel-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Service Van Visit</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-card border border-border shadow-sm">
            <img 
              src="/images/gallery/mobile_van.jpg" 
              alt="Mobile Service Van at Customer Location" 
              className="w-full h-full object-cover object-center filter contrast-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
