import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function EditorialStatement() {
  return (
    <section className="py-14 sm:py-20 bg-graphite text-white border-t border-titanium/15 relative overflow-hidden select-none">
      
      {/* Background Multi-Color Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-ice/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[200px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-charcoal border border-ice/30 text-ice text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan" />
          <span>EDITORIAL AUTOMOTIVE STANDARD</span>
        </div>

        <h2 className="font-sans font-black tracking-[-0.05em] leading-[0.95] text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
          <span className="text-white block sm:inline">YOUR CAR. </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-cyan block sm:inline">YOUR LOCATION. </span>
          <span className="text-titanium block sm:inline">OUR EXPERTISE.</span>
        </h2>

        <p className="mt-5 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Experience premium doorstep car care engineered for convenience, built with OEM precision, and delivered directly to your doorstep.
        </p>

      </div>
    </section>
  );
}
