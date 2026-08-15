import React, { useState } from 'react';
import { 
  Smartphone, 
  Car, 
  Wrench, 
  Key, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "BOOK IN SECONDS",
      subtitle: "Choose Service & Time",
      desc: "Select your vehicle make and required service on WhatsApp or phone. Receive immediate transparent pricing.",
      icon: Smartphone,
      accentColor: "#8FD8FF", // Ice Blue
      badge: "Fast Dispatch",
    },
    {
      num: "02",
      title: "WE COME TO YOU",
      subtitle: "Mobile Van Dispatched",
      desc: "Our fully equipped mobile service van arrives at your home, office, or roadside location in Secunderabad & Hyderabad.",
      icon: Car,
      accentColor: "#9DE7E5", // Cyan Mist
      badge: "100% Mobile",
    },
    {
      num: "03",
      title: "EXPERT SERVICE",
      subtitle: "Genuine Spares Unboxing",
      desc: "Certified technicians perform the work right in front of you using sealed OEM parts with barcode warranty.",
      icon: Wrench,
      accentColor: "#8EDDD0", // Aqua
      badge: "OEM Sealed Parts",
    },
    {
      num: "04",
      title: "YOU DRIVE",
      subtitle: "Zero Advance Pay",
      desc: "Take a test drive to ensure 100% satisfaction. Pay digitally after complete satisfaction. Drive with confidence.",
      icon: Key,
      accentColor: "#C7C0E8", // Soft Lavender
      badge: "Pay After Service",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F5F7F8] text-[#080A0D] border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Soft Studio Color Blooms */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-ice/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-lavender/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#080A0D] text-ice text-xs font-bold uppercase tracking-widest border border-ice/30 font-mono shadow-sm">
            <Car className="w-3.5 h-3.5 text-cyan" />
            <span>DOORSTEP PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            HOW IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-aqua to-lavender">WORKS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Professional car care without visiting a traditional workshop.
          </p>
        </div>

        {/* 4-Step Journey Grid with Connecting Gradient Line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          
          {/* Connecting Progress Line for Desktop */}
          <div className="hidden lg:block absolute top-1/3 left-[12%] right-[12%] h-[2.5px] bg-gradient-to-r from-ice via-cyan to-lavender opacity-80 pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                className={`bg-white border border-slate-200 rounded-card p-6 relative flex flex-col justify-between z-10 text-left transition-all duration-300 group hover:-translate-y-2 shadow-sm ${
                  isHovered ? 'shadow-xl border-ice' : ''
                }`}
              >
                {/* Top Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3.5px] rounded-t-card"
                  style={{ backgroundColor: step.accentColor }}
                />

                <div className="space-y-4">
                  {/* Step Num & Icon */}
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-3xl font-black font-mono tracking-tighter"
                      style={{ color: step.accentColor }}
                    >
                      {step.num}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#080A0D]"
                      style={{
                        color: step.accentColor,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Badge */}
                  <span 
                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider border bg-[#080A0D]"
                    style={{
                      color: step.accentColor,
                      borderColor: `${step.accentColor}50`,
                    }}
                  >
                    {step.badge}
                  </span>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-base font-black text-slate-900 font-heading tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium font-sans mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                {/* Footer Micro Check */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-cyan shrink-0" />
                  <span>Guaranteed doorstep execution</span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA Callout */}
        <div className="text-center pt-2">
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="px-8 py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md inline-flex items-center space-x-2"
          >
            <span>START YOUR DOORSTEP BOOKING →</span>
            <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
          </button>
        </div>

      </div>
    </section>
  );
}
