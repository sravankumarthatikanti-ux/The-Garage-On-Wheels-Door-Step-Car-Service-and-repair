import React from 'react';
import { ShieldCheck, Clock, Award, Sparkles, MapPin } from 'lucide-react';

export default function MarqueeTicker() {
  const tickerItems = [
    { icon: ShieldCheck, text: "100% Genuine OEM & OES Spare Parts" },
    { icon: Award, text: "Certified Master Auto Technicians" },
    { icon: Clock, text: "Doorstep Mechanics in 30-45 Mins" },
    { icon: Sparkles, text: "1000 KM / 1-Month Warranty on All Repairs" },
    { icon: MapPin, text: "Serving Tirumalagiri, Secunderabad & Hyderabad" },
    { icon: ShieldCheck, text: "Zero Hidden Charges & Full Price Transparency" },
  ];

  return (
    <div className="bg-graphite-deep border-y border-titanium/15 py-3.5 overflow-hidden select-none">
      <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
        {tickerItems.concat(tickerItems).map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3 text-xs font-semibold tracking-wide text-titanium">
              <span className="w-1.5 h-1.5 rounded-full bg-steel-400" />
              <Icon className="w-4 h-4 text-steel-400 shrink-0" />
              <span className="text-white font-medium">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
