import React from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SPARE_PARTS } from '../data/carServiceData';

export default function PartsGrid({ onSelectPart }) {
  return (
    <section id="parts" className="py-20 md:py-28 bg-surface-warm text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-steel-400" />
              <span>100% GENUINE OEM &amp; OES SPARES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
              Spare Parts <span className="text-steel-600">Catalog</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl leading-relaxed">
              Every part installed comes with manufacturer warranty, sealed barcode authentication, and doorstep installation by certified mechanics.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-secondary font-mono">
            <span className="w-2 h-2 rounded-full bg-steel-400" />
            <span>OEM Stock Available for Same-Day Dispatch</span>
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPARE_PARTS.map((part) => (
            <div
              key={part.id}
              onClick={() => onSelectPart(part.name)}
              className="premium-card overflow-hidden cursor-pointer flex flex-col justify-between group hover:border-steel-400"
            >
              {/* Top Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
                <img 
                  src={part.image} 
                  alt={part.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-graphite/90 backdrop-blur-md text-white font-mono font-bold text-xs shadow-sm border border-titanium/20">
                  {part.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-muted font-medium mb-1 font-mono">
                    <span>{part.brand}</span>
                    <span className="text-steel-700 font-semibold">{part.warranty}</span>
                  </div>
                  <h3 className="text-base font-bold text-primary group-hover:text-steel-600 transition-colors">
                    {part.name}
                  </h3>
                  <p className="text-xs text-secondary mt-1 line-clamp-2 leading-relaxed">
                    {part.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-border-soft flex items-center justify-between text-xs font-bold text-steel-700 group-hover:text-graphite">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-steel-500" /> Order with Doorstep Fitment
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Bar */}
        <div className="mt-12 p-5 rounded-card bg-white border border-border flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-secondary shadow-sm">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-steel-600" /> Bosch, Mobil 1, Amaron, Castrol, Valeo Authorised Spares
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-steel-600" /> Free Old Part Handover &amp; Box Unsealing in Front of You
          </span>
        </div>

      </div>
    </section>
  );
}
