import React from 'react';
import { ShieldCheck, MapPin, Award, CheckCircle2, ArrowRight, Sparkles, Clock, Users, Wrench } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function AboutSection({ onOpenBooking }) {
  const handleWhatsAppChat = () => {
    const url = buildWhatsAppUrl({ serviceName: "Doorstep Consultation" });
    window.open(url, '_blank');
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#080A0D] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* Background Soft Studio Ambient Lighting: Ice Blue + Lavender */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-ice/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-lavender/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Column 1: Verified Workshop Hub Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-card-lg overflow-hidden border border-[#252C33] shadow-premium bg-[#181E24] p-6 sm:p-8">
              
              {/* Workshop Ambience Background Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/gallery/garage_workshop.jpg" 
                  alt="Automotive Service Workshop Precision" 
                  className="w-full h-full object-cover opacity-20 filter grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#080A0D] via-[#101419]/90 to-lavender/10" />
              </div>

              <div className="space-y-6 relative z-10 text-left">
                {/* Clean Standards Indicator */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#101419] border border-[#252C33] text-ice text-xs font-bold uppercase tracking-widest font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span>THE GARAGE ON WHEELS STANDARDS</span>
                </div>

                <div className="space-y-2.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cyan font-mono">
                    OUR CORE PHILOSOPHY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white tracking-tight leading-snug">
                    Redefining doorstep car care in Secunderabad with certified mechanics.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed font-sans">
                    Founded in Tirumalagiri, Secunderabad, The Garage On Wheels was built on one clear mission: eliminating the inconvenience, hidden charges, and delays of conventional car workshops.
                  </p>
                </div>

                {/* Verified Core Standards */}
                <div className="pt-3 border-t border-[#252C33] grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-white font-mono">100% Mobile</div>
                    <div className="text-[11px] text-[#A7ADB4] font-medium font-sans">At your doorstep</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-ice font-mono">100% Genuine</div>
                    <div className="text-[11px] text-[#A7ADB4] font-medium font-sans">OEM sealed parts</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Content & 3 Trust Points */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-2.5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan" />
                <span>ABOUT US</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
                CAR CARE THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-lavender">COMES TO YOU.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed font-sans">
                We believe your time is valuable. Our mobile service vans bring precision tools, computerized scanners, and master mechanics right to your doorstep.
              </p>
            </div>

            {/* 3 Core Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              
              <div className="p-4 rounded-card bg-[#181E24] border border-[#252C33] space-y-2 hover:border-cyan/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#101419] text-cyan flex items-center justify-center border border-[#252C33]">
                  <Wrench className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">
                  Master Technicians
                </h4>
                <p className="text-[11px] text-[#A7ADB4] font-medium leading-relaxed font-sans">
                  Certified mechanics trained across Asian &amp; European cars.
                </p>
              </div>

              <div className="p-4 rounded-card bg-[#181E24] border border-[#252C33] space-y-2 hover:border-lavender/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#101419] text-lavender flex items-center justify-center border border-[#252C33]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">
                  Sealed Spares
                </h4>
                <p className="text-[11px] text-[#A7ADB4] font-medium leading-relaxed font-sans">
                  OEM barcode parts unboxed in front of you.
                </p>
              </div>

              <div className="p-4 rounded-card bg-[#181E24] border border-[#252C33] space-y-2 hover:border-lime/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#101419] text-lime flex items-center justify-center border border-[#252C33]">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">
                  Fast Dispatch
                </h4>
                <p className="text-[11px] text-[#A7ADB4] font-medium leading-relaxed font-sans">
                  30–60 min ETA across Secunderabad &amp; Hyderabad.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="px-7 py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md inline-flex items-center justify-center space-x-2"
              >
                <span>BOOK A DOORSTEP SERVICE →</span>
              </button>

              <button
                onClick={handleWhatsAppChat}
                className="px-6 py-3.5 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn inline-flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4 text-whatsapp" />
                <span>SPEAK WITH AN EXPERT</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
