import React, { useState } from 'react';
import { 
  PhoneCall, 
  Search, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Home, 
  Sparkles,
  MapPin,
  Car,
  RotateCcw
} from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Book Your Service",
      subtitle: "WhatsApp or Call",
      desc: "Book your car service easily through WhatsApp or by calling us.",
      icon: PhoneCall,
      accentColor: "#8FD8FF", // Ice Blue
      badge: "Easy Booking",
    },
    {
      num: "02",
      title: "Vehicle Inspection",
      subtitle: "On-Site Diagnosis",
      desc: "Our technician visits your location, checks your vehicle and understands the service or repair required.",
      icon: Search,
      accentColor: "#9DE7E5", // Cyan Mist
      badge: "Technician Visit",
    },
    {
      num: "03",
      title: "Service & Repairs",
      subtitle: "Doorstep or Workshop",
      desc: "For small and general services, our technician completes the work at your doorstep. For major or complex repairs, your car is taken to our workshop for proper servicing.",
      icon: Wrench,
      accentColor: "#8EDDD0", // Aqua
      badge: "Doorstep / Workshop",
    },
    {
      num: "04",
      title: "Delivery & Follow-Up",
      subtitle: "Return & Satisfaction",
      desc: "Once the required work is completed, we return your car and follow up to make sure you are completely satisfied.",
      icon: RotateCcw,
      accentColor: "#C7C0E8", // Soft Lavender
      badge: "Satisfaction Guaranteed",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F5F7F8] text-[#080A0D] border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Soft Studio Color Blooms */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-ice/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-lavender/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#080A0D] text-ice text-xs font-bold uppercase tracking-widest border border-ice/30 font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            OUR PROVEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-aqua to-lavender">SERVICE PROCESS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            Small &amp; general services at your doorstep. Major repairs handled at our workshop.
          </p>
        </div>

        {/* Visual Process Flow Diagram Banner */}
        <div className="mb-12 bg-white border border-slate-200 rounded-card-lg p-5 sm:p-6 shadow-sm">
          <div className="text-[11px] font-extrabold uppercase font-mono tracking-wider text-slate-500 mb-3 text-center sm:text-left">
            SERVICE FLOW OVERVIEW
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center">
            
            {/* Step 1 Pill */}
            <div className="p-3 rounded-card bg-[#F8FAFC] border border-slate-200 space-y-1">
              <div className="text-[10px] font-bold text-ice font-mono">01 LOCATION</div>
              <div className="text-xs font-extrabold text-slate-900">Customer Location</div>
            </div>

            {/* Step 2 Pill */}
            <div className="p-3 rounded-card bg-[#F8FAFC] border border-slate-200 space-y-1">
              <div className="text-[10px] font-bold text-cyan font-mono">02 VISIT</div>
              <div className="text-xs font-extrabold text-slate-900">Technician Inspection</div>
            </div>

            {/* Step 3 Forked Decision Pill (Key Distinction) */}
            <div className="p-3 rounded-card bg-[#080A0D] text-white border border-ice/40 shadow-sm space-y-1">
              <div className="text-[10px] font-bold text-[#8FD8FF] font-mono">03 EXECUTION</div>
              <div className="text-[11px] font-bold leading-tight">
                <span className="text-[#C8E6B8]">Small Service:</span> Doorstep <br />
                <span className="text-[#8FD8FF]">Major Repair:</span> Workshop
              </div>
            </div>

            {/* Step 4 Pill */}
            <div className="p-3 rounded-card bg-[#F8FAFC] border border-slate-200 space-y-1">
              <div className="text-[10px] font-bold text-lavender font-mono">04 RETURN</div>
              <div className="text-xs font-extrabold text-slate-900">Car Returned</div>
            </div>

            {/* Step 5 Pill */}
            <div className="p-3 rounded-card bg-[#F8FAFC] border border-slate-200 space-y-1">
              <div className="text-[10px] font-bold text-emerald-500 font-mono">05 SUPPORT</div>
              <div className="text-xs font-extrabold text-slate-900">Follow-Up &amp; Care</div>
            </div>

          </div>
        </div>

        {/* 4-Step Detailed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          
          {/* Connecting Progress Line for Desktop */}
          <div className="hidden lg:block absolute top-1/3 left-[12%] right-[12%] h-[2.5px] bg-gradient-to-r from-ice via-cyan to-lavender opacity-70 pointer-events-none" />

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
                      style={{ color: step.accentColor }}
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
                      {step.num} — {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium font-sans mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans min-h-[60px]">
                    {step.desc}
                  </p>
                </div>

                {/* Footer Micro Check */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-cyan shrink-0" />
                  <span>Verified Service Protocol</span>
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
            <span>BOOK YOUR CAR SERVICE →</span>
            <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
          </button>
        </div>

      </div>
    </section>
  );
}
