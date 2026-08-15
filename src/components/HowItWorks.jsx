import React, { useState } from 'react';
import { MessageSquare, Car, MapPin, CheckCircle2, ArrowRight, Wrench, Key } from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "BOOK",
      short: "Select Service",
      desc: "Choose the service you need in under 60 seconds on WhatsApp or via our booking flow.",
      color: "text-ice",
      badgeBg: "bg-ice/20 text-slate-900 border-ice/40",
      topBar: "bg-ice",
      glow: "hover:border-ice hover:shadow-[0_15px_35px_rgba(143,216,255,0.3)]",
    },
    {
      num: "02",
      title: "WE COME",
      short: "Mobile Van Dispatch",
      desc: "Our fully equipped mobile service van and certified mechanics reach your exact driveway.",
      color: "text-cyan",
      badgeBg: "bg-cyan/20 text-slate-900 border-cyan/40",
      topBar: "bg-cyan",
      glow: "hover:border-cyan hover:shadow-[0_15px_35px_rgba(157,231,229,0.3)]",
    },
    {
      num: "03",
      title: "WE SERVICE",
      short: "100% Genuine Care",
      desc: "OEM sealed parts unboxed before your eyes with live transparency & 40-point diagnostics.",
      color: "text-aqua",
      badgeBg: "bg-aqua/20 text-slate-900 border-aqua/40",
      topBar: "bg-aqua",
      glow: "hover:border-aqua hover:shadow-[0_15px_35px_rgba(142,221,208,0.3)]",
    },
    {
      num: "04",
      title: "YOU DRIVE",
      short: "Ready to Roll",
      desc: "Digital itemized invoice, warranty slip, and zero garage waiting time. Back on the road.",
      color: "text-lavender",
      badgeBg: "bg-lavender/25 text-slate-900 border-lavender/40",
      topBar: "bg-lavender",
      glow: "hover:border-lavender hover:shadow-[0_15px_35px_rgba(199,192,232,0.3)]",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white text-primary border-t border-border relative overflow-hidden">
      
      {/* Background Color Blooms */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-aqua/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-ice text-xs font-bold uppercase tracking-widest border border-ice/30 font-mono">
            <Car className="w-3.5 h-3.5 text-cyan" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
            DOORSTEP PROCESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-lavender">IN 4 STEPS</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Professional car care without visiting a traditional workshop.
          </p>
        </div>

        {/* 4 Step Timeline Cards with connecting multi-color gradient progress line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 relative">
          {/* Animated Connecting Line with Gradient: Ice Blue -> Cyan -> Aqua -> Lavender */}
          <div className="hidden lg:block absolute top-1/3 left-[10%] right-[10%] h-[2.5px] bg-gradient-to-r from-ice via-cyan via-aqua to-lavender pointer-events-none opacity-80" />

          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`premium-card p-6 relative flex flex-col justify-between z-10 bg-white cursor-pointer transition-all ${
                activeStep === idx ? 'border-ice shadow-xl scale-[1.02]' : ''
              } ${step.glow}`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${step.topBar}`} />

              <div>
                {/* Step Numeral Header */}
                <div className="flex items-center justify-between mb-4 mt-1">
                  <span className={`text-3xl sm:text-4xl font-black font-mono ${step.color}`}>
                    {step.num}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono ${step.badgeBg}`}>
                    Step {idx + 1} of 4
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border-soft flex items-center space-x-1.5 text-xs font-semibold text-slate-800 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan" />
                <span>{step.short}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Service Van Highlight Banner */}
        <div className="rounded-card-lg bg-surface border border-border p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700 font-mono">
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
                className="px-7 py-3.5 btn-sport-primary font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center space-x-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-cyan" />
                <span>Book Service Van Visit →</span>
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
