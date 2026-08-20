import React, { useState } from 'react';
import { 
  PhoneCall, 
  Truck, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  Clock,
  RotateCcw,
  Star
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function HowItWorks({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleWhatsAppBooking = () => {
    if (onOpenBooking) {
      onOpenBooking('', 'General Service', 'Booking inquiry from How It Works');
    } else {
      const url = buildWhatsAppUrl({ serviceName: "4-Step Process Booking" });
      window.open(url, '_blank');
    }
  };

  const steps = [
    {
      num: "01",
      title: "BOOK YOUR SERVICE",
      tagline: "Call or WhatsApp",
      desc: "Book an appointment through Call or WhatsApp. Contact our team directly to choose your preferred time and discuss your vehicle needs.",
      icon: PhoneCall,
      accentColor: "#8FD8FF", // Electric Ice Blue
      badge: "Easy Contact",
      highlights: ["Direct Phone Booking", "Instant WhatsApp Chat", "Quick Confirmation"],
      hasActions: true,
    },
    {
      num: "02",
      title: "SCHEDULE & PICKUP",
      tagline: "Doorstep Vehicle Transit",
      desc: "We pick up your vehicle from your location at the scheduled time and safely bring it to our workshop. You never have to worry about driving to a garage.",
      icon: Truck,
      accentColor: "#9DE7E5", // Cyan Mist
      badge: "We Come To You",
      highlights: ["Doorstep Pickup", "Safe Workshop Transit", "Zero Hassle for You"],
      hasActions: false,
    },
    {
      num: "03",
      title: "SERVICE & REPAIR",
      tagline: "Certified Workshop Care",
      desc: "Our certified technicians perform all required service and repairs using genuine spare parts and quality workmanship to keep your car running like new.",
      icon: Wrench,
      accentColor: "#8EDDD0", // Aqua
      badge: "OEM Genuine Parts",
      highlights: ["Certified Technicians", "Genuine Spare Parts", "Quality Workmanship"],
      hasActions: false,
    },
    {
      num: "04",
      title: "DELIVERY & FEEDBACK",
      tagline: "Safe Return & Follow-Up",
      desc: "We deliver your car back to you on time after the service and follow up to ensure your complete satisfaction and peace of mind on the road.",
      icon: RotateCcw,
      accentColor: "#C7C0E8", // Soft Lavender
      badge: "100% Satisfaction",
      highlights: ["On-Time Delivery", "Service Follow-Up", "Customer Satisfaction"],
      hasActions: false,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F5F7F8] text-[#080A0D] border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Soft Studio Color Blooms */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-ice/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-lavender/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#080A0D] text-ice text-xs font-bold uppercase tracking-widest border border-ice/30 font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight uppercase">
            HOW IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600">WORKS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed font-sans max-w-2xl mx-auto">
            Experience Hassle-Free Car Service With Our Simple 4-Step Process
          </p>
        </div>

        {/* 4-Step Visual Journey Flow Banner */}
        <div className="mb-12 bg-white border border-slate-200 rounded-card-lg p-5 sm:p-6 shadow-sm">
          <div className="text-[11px] font-extrabold uppercase font-mono tracking-wider text-slate-500 mb-4 text-center sm:text-left">
            4-STEP SERVICE JOURNEY
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
            
            {/* Step 1 Pill */}
            <div className="p-3.5 rounded-card bg-[#F8FAFC] border border-slate-200 text-left space-y-1">
              <div className="text-[10px] font-bold text-cyan-700 font-mono flex items-center justify-between">
                <span>01 BOOK</span>
                <PhoneCall className="w-3.5 h-3.5 text-cyan-600" />
              </div>
              <div className="text-xs font-extrabold text-slate-900">Book Your Service</div>
              <div className="text-[11px] text-slate-500 font-sans">Call or WhatsApp</div>
            </div>

            {/* Step 2 Pill */}
            <div className="p-3.5 rounded-card bg-[#F8FAFC] border border-slate-200 text-left space-y-1">
              <div className="text-[10px] font-bold text-teal-700 font-mono flex items-center justify-between">
                <span>02 PICKUP</span>
                <Truck className="w-3.5 h-3.5 text-teal-600" />
              </div>
              <div className="text-xs font-extrabold text-slate-900">Schedule &amp; Pickup</div>
              <div className="text-[11px] text-slate-500 font-sans">We Pick Up Your Car</div>
            </div>

            {/* Step 3 Pill */}
            <div className="p-3.5 rounded-card bg-[#080A0D] text-white border border-ice/40 shadow-sm text-left space-y-1">
              <div className="text-[10px] font-bold text-[#8FD8FF] font-mono flex items-center justify-between">
                <span>03 WORKSHOP</span>
                <Wrench className="w-3.5 h-3.5 text-[#8EDDD0]" />
              </div>
              <div className="text-xs font-extrabold text-white">Service &amp; Repair</div>
              <div className="text-[11px] text-[#C9D1D6] font-sans">Certified Techs &amp; OEM Spares</div>
            </div>

            {/* Step 4 Pill */}
            <div className="p-3.5 rounded-card bg-[#F8FAFC] border border-slate-200 text-left space-y-1">
              <div className="text-[10px] font-bold text-indigo-700 font-mono flex items-center justify-between">
                <span>04 RETURN</span>
                <RotateCcw className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <div className="text-xs font-extrabold text-slate-900">Delivery &amp; Feedback</div>
              <div className="text-[11px] text-slate-500 font-sans">On-Time Return &amp; Follow-Up</div>
            </div>

          </div>
        </div>

        {/* 4 Detailed Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                className={`bg-white border border-slate-200 rounded-card p-6 relative flex flex-col justify-between z-10 text-left transition-all duration-300 group hover:-translate-y-2 shadow-sm ${
                  isHovered ? 'shadow-xl border-cyan-500' : ''
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

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-base font-black text-slate-900 font-heading tracking-tight">
                      {step.num} — {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium font-sans mt-0.5">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans min-h-[55px]">
                    {step.desc}
                  </p>

                  {/* Highlights Pill List */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {step.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Prominent CALL & WHATSAPP Buttons on Step 1 */}
                  {step.hasActions && (
                    <div className="pt-3 grid grid-cols-2 gap-2">
                      <a
                        href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                        className="py-2 px-2.5 bg-[#080A0D] text-cyan hover:text-white hover:bg-slate-900 rounded-btn text-center text-xs font-mono font-bold flex items-center justify-center space-x-1.5 transition-colors border border-cyan/40"
                      >
                        <Phone className="w-3.5 h-3.5 text-cyan animate-pulse" />
                        <span>CALL</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="py-2 px-2.5 btn-whatsapp text-white rounded-btn text-center text-xs font-mono font-bold flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>WHATSAPP</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer Micro Check */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] text-slate-500 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-cyan-700 shrink-0" />
                  <span>The Garage On Wheels Verified</span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA Callout */}
        <div className="text-center pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="w-full sm:w-auto px-8 py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md inline-flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>BOOK A SERVICE</span>
            <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
          </button>

          <button
            onClick={handleWhatsAppBooking}
            className="w-full sm:w-auto px-6 py-3.5 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn inline-flex items-center justify-center space-x-2 active:scale-95 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WHATSAPP US</span>
          </button>
        </div>

      </div>
    </section>
  );
}
