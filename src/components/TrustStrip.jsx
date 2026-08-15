import React from 'react';
import { MapPin, ShieldCheck, Zap } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    {
      icon: MapPin,
      title: "DOORSTEP SERVICE",
      subtitle: "We come to you.",
    },
    {
      icon: ShieldCheck,
      title: "PROFESSIONAL CARE",
      subtitle: "Your car is handled with care.",
    },
    {
      icon: Zap,
      title: "EASY BOOKING",
      subtitle: "Call or WhatsApp in seconds.",
    },
  ];

  return (
    <section className="bg-charcoal border-y border-titanium/15 py-4 sm:py-5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center space-x-3.5 justify-center sm:justify-start py-1"
              >
                <div className="w-10 h-10 rounded-xl bg-graphite border border-titanium/20 flex items-center justify-center text-steel-400 shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-mono">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-titanium/80 font-medium">
                    {pt.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
