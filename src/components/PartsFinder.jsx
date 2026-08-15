import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, CheckCircle2, ChevronDown, Wrench, Sparkles, Filter } from 'lucide-react';
import { CAR_BRANDS, SPARE_PARTS, buildWhatsAppUrl } from '../data/carServiceData';

const YEARS = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015 & Older'];
const PART_TYPES = [
  'Synthetic Engine Oil & Filter',
  'Brembo / TVS Ceramic Brake Pads',
  'Amaron / Exide Heavy-Duty Battery',
  'Denso / Bosch Cabin & AC Filter',
  'Bosch Iridium Spark Plugs',
  'Valeo / Sachs Clutch Assembly Kit',
  'Wiper Blades & Washer Kit',
  'Other Genuine Spare Part'
];

export default function PartsFinder({ onOpenBooking }) {
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [selectedYear, setSelectedYear] = useState('2022');
  const [selectedPart, setSelectedPart] = useState('Synthetic Engine Oil & Filter');

  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const bName = e.target.value;
    setSelectedBrand(bName);
    const bObj = CAR_BRANDS.find(b => b.name === bName);
    if (bObj && bObj.models.length > 0) {
      setSelectedModel(bObj.models[0]);
    }
  };

  const handleFindPart = (e) => {
    e.preventDefault();
    const message = `Hello The Garage on Wheels,\nI would like to check availability and doorstep fitment for a genuine spare part:\n• Car: ${selectedBrand} ${selectedModel} (${selectedYear})\n• Part Needed: ${selectedPart}\nPlease confirm part pricing and delivery slot.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918121404113?text=${encoded}`, '_blank');
  };

  return (
    <section id="parts" className="py-16 md:py-24 bg-surface text-primary border-t border-border relative overflow-hidden">
      
      {/* Subtle Mist Blue Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[350px] bg-mist/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-steel-400" />
            <span>100% GENUINE OEM SPARE PARTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
            FIND YOUR <span className="text-steel-600">CAR PART</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Sealed barcode warranty, manufacturer-backed components, and certified doorstep installation.
          </p>
        </div>

        {/* 4-Step Interactive Discovery with Step Colors: Ice Blue -> Mist Blue -> Sage Mist -> Lavender Grey */}
        <div className="max-w-4xl mx-auto mb-14 bg-white border border-border rounded-card-lg p-6 sm:p-8 shadow-premium hover:border-steel-400/50 transition-all">
          <form onSubmit={handleFindPart} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Step 1: Select Brand (Ice Blue Accent) */}
              <div className="relative p-3 rounded-card bg-surface-soft border border-ice/50 hover:border-ice transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] font-bold text-slate-800 uppercase tracking-widest font-mono">
                    01 BRAND
                  </label>
                  <span className="w-2 h-2 rounded-full bg-ice" />
                </div>
                <div className="relative">
                  <select
                    value={selectedBrand}
                    onChange={handleBrandChange}
                    className="w-full bg-white border border-border text-slate-900 text-xs font-bold rounded-btn px-2.5 py-2 pr-7 appearance-none focus:outline-none focus:border-steel-400 cursor-pointer"
                  >
                    {CAR_BRANDS.map((b) => (
                      <option key={b.id} value={b.name}>{b.name}</option>
                    ))}
                    <option value="Other Brand">Other Brand</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-muted absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Step 2: Select Model (Mist Blue Accent) */}
              <div className="relative p-3 rounded-card bg-surface-soft border border-mist/50 hover:border-mist transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] font-bold text-slate-800 uppercase tracking-widest font-mono">
                    02 MODEL
                  </label>
                  <span className="w-2 h-2 rounded-full bg-mist" />
                </div>
                <div className="relative">
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-white border border-border text-slate-900 text-xs font-bold rounded-btn px-2.5 py-2 pr-7 appearance-none focus:outline-none focus:border-steel-400 cursor-pointer"
                  >
                    {currentBrandObj.models.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                    <option value="Other Model">Other Model</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-muted absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Step 3: Select Variant / Year (Sage Mist Accent) */}
              <div className="relative p-3 rounded-card bg-surface-soft border border-sage/50 hover:border-sage transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] font-bold text-slate-800 uppercase tracking-widest font-mono">
                    03 VARIANT/YEAR
                  </label>
                  <span className="w-2 h-2 rounded-full bg-sage" />
                </div>
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full bg-white border border-border text-slate-900 text-xs font-bold rounded-btn px-2.5 py-2 pr-7 appearance-none focus:outline-none focus:border-steel-400 cursor-pointer"
                  >
                    {YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-muted absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Step 4: Select Part (Lavender Grey Accent) */}
              <div className="relative p-3 rounded-card bg-surface-soft border border-lavender/60 hover:border-lavender transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] font-bold text-slate-800 uppercase tracking-widest font-mono">
                    04 PART
                  </label>
                  <span className="w-2 h-2 rounded-full bg-lavender" />
                </div>
                <div className="relative">
                  <select
                    value={selectedPart}
                    onChange={(e) => setSelectedPart(e.target.value)}
                    className="w-full bg-white border border-border text-slate-900 text-xs font-bold rounded-btn px-2.5 py-2 pr-7 appearance-none focus:outline-none focus:border-steel-400 cursor-pointer"
                  >
                    {PART_TYPES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-muted absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-soft">
              <div className="text-xs text-secondary font-medium text-left">
                📦 <strong className="text-slate-900">100% Genuine Box Unsealing:</strong> You receive the empty OEM box and old replaced part.
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 btn-sport-primary font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2 active:scale-95 shrink-0"
              >
                <span>FIND MY PART →</span>
                <ArrowRight className="w-4 h-4 btn-arrow text-ice" />
              </button>
            </div>
          </form>
        </div>

        {/* Featured Spare Parts Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPARE_PARTS.slice(0, 4).map((part) => (
            <div
              key={part.id}
              onClick={() => onOpenBooking('', `Spare Part: ${part.name}`)}
              className="premium-card overflow-hidden cursor-pointer flex flex-col justify-between group hover:border-steel-400 bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
                <img 
                  src={part.image} 
                  alt={part.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-graphite/90 backdrop-blur-md text-white font-mono font-bold text-xs shadow-sm border border-titanium/20">
                  {part.price}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-muted font-medium mb-1 font-mono">
                    <span>{part.brand}</span>
                    <span className="text-steel-700 font-semibold">{part.warranty}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-primary group-hover:text-steel-600 transition-colors">
                    {part.name}
                  </h3>
                  <p className="text-xs text-secondary mt-1 line-clamp-2 leading-relaxed">
                    {part.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-soft flex items-center justify-between text-xs font-bold text-steel-600 group-hover:text-graphite">
                  <span className="flex items-center gap-1.5 font-mono">
                    <MessageSquare className="w-3.5 h-3.5 text-steel-500" /> Order on WhatsApp
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
