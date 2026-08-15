import React, { useState } from 'react';
import { Globe, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { CAR_BRANDS } from '../data/carServiceData';
import CarBrandLogo from './CarBrandLogo';

const REGION_FILTERS = [
  { key: 'all', label: 'All Brands' },
  { key: 'popular', label: 'Top Popular' },
  { key: 'Indian', label: '🇮🇳 Indian' },
  { key: 'Japanese', label: '🇯🇵 Japanese' },
  { key: 'German', label: '🇩🇪 German' },
  { key: 'South Korea', label: '🇰🇷 Korean' },
  { key: 'European', label: '🇪🇺 European' },
];

export default function BrandGrid({ onSelectBrand }) {
  const [filter, setFilter] = useState('all');

  const filteredBrands = CAR_BRANDS.filter(b => {
    if (filter === 'all') return true;
    if (filter === 'popular') return b.popular;
    if (filter === 'Indian') return b.originCountry.includes('India');
    if (filter === 'Japanese') return b.originCountry.includes('Japan');
    if (filter === 'German') return b.originCountry.includes('Germany');
    if (filter === 'South Korea') return b.originCountry.includes('South Korea');
    if (filter === 'European') return b.region === 'European';
    return true;
  });

  return (
    <section id="brands" className="py-20 md:py-28 bg-surface text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
              <Globe className="w-3.5 h-3.5 text-steel-400" />
              <span>MULTI-BRAND SPECIALIST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
              Browse by <span className="text-steel-600">Car Brand</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl leading-relaxed">
              We service and repair all Indian, Asian, and European car models at your doorstep across Tirumalagiri, Secunderabad, and Hyderabad.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-card border border-border self-start lg:self-auto shadow-sm">
            {REGION_FILTERS.map((tab) => {
              const isActive = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-3.5 py-1.5 rounded-btn text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-graphite text-steel-300 shadow-sm border border-titanium/20'
                      : 'text-secondary hover:text-primary hover:bg-surface-soft'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.name)}
              className="premium-card p-5 cursor-pointer flex flex-col justify-between group hover:border-steel-400"
            >
              {/* Top Row: Brand Icon & Country Badge */}
              <div className="flex items-center justify-between mb-4">
                <CarBrandLogo brandId={brand.id} className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
                <span className="px-2 py-0.5 rounded-md bg-surface-soft text-secondary border border-border text-[10px] font-semibold flex items-center gap-1 font-mono">
                  <span>{brand.originFlag}</span>
                  <span className="hidden sm:inline">{brand.originCountry}</span>
                </span>
              </div>

              {/* Brand Title & Tagline */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-primary group-hover:text-steel-600 transition-colors">
                    {brand.name}
                  </h3>
                  {brand.popular && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-steel-50 text-steel-700 border border-steel-200 font-mono">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-secondary line-clamp-2 mt-1.5 leading-relaxed">
                  {brand.tagline}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-5 pt-3 border-t border-border-soft flex items-center justify-between text-xs font-bold text-steel-700 group-hover:text-graphite">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <MessageSquare className="w-3.5 h-3.5" /> Book Service
                </span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-muted group-hover:text-graphite" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 rounded-card-lg bg-white border border-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-card bg-graphite text-steel-400 shrink-0 border border-titanium/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-primary">Don't see your specific car brand or model?</p>
              <p className="text-xs text-secondary mt-0.5">We service vintage, rare, luxury, and imported cars from all manufacturers.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectBrand('Custom Brand')}
            className="w-full sm:w-auto px-6 py-3 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs uppercase tracking-widest rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 shrink-0 active:scale-95 border border-steel-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Advisor on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
