import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function EditorialStatement({ onOpenBooking }) {
  return (
    <section className="py-14 sm:py-20 bg-[#080A0D] text-white border-y border-[#252C33] relative overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-ice/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
          <Sparkles className="w-3.5 h-3.5 text-cyan" />
          <span>PRECISION DOORSTEP AUTOMOTIVE PLATFORM</span>
        </div>

        {/* Large Typographic Editorial Statement */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-heading tracking-tight leading-[1.08] max-w-5xl mx-auto">
          YOUR CAR. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-ice">
            YOUR LOCATION.
          </span> <br />
          OUR EXPERTISE.
        </h2>

        <p className="text-sm sm:text-base text-[#A7ADB4] max-w-2xl mx-auto font-sans leading-relaxed">
          Secunderabad &amp; Hyderabad's premier mobile garage service. Certified technicians, transparent live pricing, and 100% genuine OEM components at your doorstep.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="px-8 py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md inline-flex items-center space-x-2 active:scale-95"
          >
            <span>BOOK AT YOUR DOORSTEP →</span>
            <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
