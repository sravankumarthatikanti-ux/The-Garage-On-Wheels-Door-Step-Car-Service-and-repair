import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { LOCAL_SERVICE_AREAS } from '../data/carServiceData';

export default function ServiceArea({ onOpenBooking }) {
  return (
    <section id="service-areas" className="py-20 md:py-28 bg-surface-warm text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-500 text-xs font-semibold uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" />
              <span>Coverage &amp; Rapid Dispatch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-sans tracking-tight">
              Doorstep Service <span className="text-brand-500">Coverage Areas</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl leading-relaxed">
              Mobile mechanics dispatched across Secunderabad &amp; Hyderabad with primary rapid hubs in Tirumalagiri and Cantonment zones.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-medium text-secondary">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Average Dispatch ETA: 30 - 45 Minutes</span>
          </div>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {LOCAL_SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              onClick={() => onOpenBooking('', '', area.name)}
              className={`p-3.5 rounded-card border text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center space-y-1.5 ${
                area.highlight
                  ? 'bg-brand-50 border-brand-300 text-brand-700 shadow-sm font-bold'
                  : 'bg-white border-border text-primary hover:border-brand-300 hover:shadow-premium'
              }`}
            >
              <MapPin className={`w-4 h-4 ${area.highlight ? 'text-brand-500' : 'text-muted'}`} />
              <span className="text-xs">{area.name}</span>
              {area.highlight && (
                <span className="text-[9px] uppercase tracking-wider text-brand-600 font-extrabold">Primary Hub</span>
              )}
            </div>
          ))}
        </div>

        {/* Local Dispatch Banner */}
        <div className="p-6 sm:p-8 rounded-card-lg bg-white border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-primary">Need Doorstep Service in Your Locality?</h3>
            <p className="text-xs sm:text-sm text-secondary">
              If your apartment or gated community isn't listed, our mobile team still covers all nearby twin-cities locations.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all flex items-center space-x-2 shrink-0 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Check Area Dispatch on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
