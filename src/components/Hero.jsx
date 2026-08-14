import React, { useState } from 'react';
import { 
  ShieldCheck, Star, ArrowRight, MessageSquare, 
  Car, Sparkles, CheckCircle2, ChevronRight, Fuel, MapPin, ExternalLink
} from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, LOCAL_SERVICE_AREAS, FUEL_TYPES, buildWhatsAppUrl } from '../data/carServiceData';
import HeroHeritageBackground from './HeroHeritageBackground';

export default function Hero({ onOpenBooking }) {
  const [quickBrand, setQuickBrand] = useState('Maruti Suzuki');
  const [quickModel, setQuickModel] = useState('Swift');
  const [quickFuel, setQuickFuel] = useState('Petrol');
  const [quickService, setQuickService] = useState('periodic-service');
  const [quickArea, setQuickArea] = useState('Tirumalagiri');

  const currentBrandObj = CAR_BRANDS.find(b => b.name === quickBrand) || CAR_BRANDS[0];

  const handleQuickWhatsApp = (e) => {
    e.preventDefault();
    const serviceObj = SERVICE_CATEGORIES.find(s => s.id === quickService);
    const serviceName = serviceObj ? serviceObj.title : 'General Car Service';
    const waUrl = buildWhatsAppUrl({
      brand: quickBrand,
      model: quickModel,
      fuelType: quickFuel,
      serviceName: serviceName,
      serviceArea: quickArea,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-charcoal-deep text-white">
      
      {/* 1. Background Cinematic Workshop Lights Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/workshop_lights_bg.jpg" 
          alt="High-Tech Precision Mechanic Shop & Workshop Lighting" 
          className="w-full h-full object-cover object-center scale-105 opacity-35 filter brightness-105 contrast-110"
        />
        {/* Soft Ambient Cinematic Glow & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/95 via-charcoal-deep/75 to-charcoal-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-charcoal-deep/80" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* 2. Global Automotive Heritage & Country of Origin Background Layer */}
      <HeroHeritageBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Small Elegant Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-slate-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-400" />
              <span>PREMIUM AUTOMOTIVE CARE</span>
            </div>

            {/* Main Luxury Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white font-sans tracking-tight leading-[1.1]">
              YOUR CAR. <br />
              CARED FOR <span className="text-brand-400">BETTER.</span>
            </h1>

            {/* Short Elegant Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">The Garage On Wheels</strong> brings certified master technicians, 100% genuine OEM spare parts, and transparent pricing directly to your doorstep in Tirumalagiri, Secunderabad, and Hyderabad.
            </p>

            {/* Feature Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-medium text-slate-200">
              <div className="flex items-center space-x-2.5 bg-charcoal/80 border border-white/10 p-3 rounded-card">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>100% Genuine OEM Parts</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-charcoal/80 border border-white/10 p-3 rounded-card">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Doorstep Convenience</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-charcoal/80 border border-white/10 p-3 rounded-card">
                <CheckCircle2 className="w-4 h-4 text-metallic-light shrink-0" />
                <span>1000 KM / 1-Mo Warranty</span>
              </div>
            </div>

            {/* CTAs & Social Proof Rating */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 bg-brand-500 hover:bg-brand-700 text-white font-bold text-sm rounded-btn shadow-premium transition-all flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/20 hover:border-white text-white font-semibold text-sm rounded-btn transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Verified Google Reviews Rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-1">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-charcoal-deep bg-slate-700 flex items-center justify-center text-xs font-bold text-white">SK</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-charcoal-deep bg-brand-700 flex items-center justify-center text-xs font-bold text-white">RR</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-charcoal-deep bg-emerald-700 flex items-center justify-center text-xs font-bold text-white">VN</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-charcoal-deep bg-slate-800 flex items-center justify-center text-xs font-bold text-white">+</span>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-metallic text-metallic" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-400">Over 1,200+ car owners served in Secunderabad</p>
              </div>
            </div>

          </div>

          {/* Right Column: Instant WhatsApp Quote Calculator Card */}
          <div className="lg:col-span-5">
            <div className="bg-charcoal border border-white/10 rounded-card-lg p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-400">Instant Estimate</span>
                  <h2 className="text-lg font-bold text-white mt-0.5">Doorstep Service Calculator</h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  ⚡ Live Today
                </span>
              </div>

              <form onSubmit={handleQuickWhatsApp} className="space-y-4 text-left">
                
                {/* 1. Car Brand */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    1. Select Car Brand
                  </label>
                  <div className="relative">
                    <select
                      value={quickBrand}
                      onChange={(e) => {
                        setQuickBrand(e.target.value);
                        const bObj = CAR_BRANDS.find(b => b.name === e.target.value);
                        if (bObj && bObj.models.length > 0) setQuickModel(bObj.models[0]);
                      }}
                      className="w-full bg-charcoal-deep border border-white/15 text-white rounded-input px-3.5 py-2.5 text-xs font-medium focus:border-brand-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {CAR_BRANDS.map(brand => (
                        <option key={brand.id} value={brand.name} className="bg-charcoal-deep text-white">
                          {brand.name} ({brand.originCountry})
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* 2. Car Model & Fuel Type */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      2. Car Model
                    </label>
                    <div className="relative">
                      <select
                        value={quickModel}
                        onChange={(e) => setQuickModel(e.target.value)}
                        className="w-full bg-charcoal-deep border border-white/15 text-white rounded-input px-3 py-2.5 text-xs font-medium focus:border-brand-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        {currentBrandObj.models.map(model => (
                          <option key={model} value={model} className="bg-charcoal-deep text-white">{model}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Fuel Type
                    </label>
                    <div className="relative">
                      <select
                        value={quickFuel}
                        onChange={(e) => setQuickFuel(e.target.value)}
                        className="w-full bg-charcoal-deep border border-white/15 text-white rounded-input px-3 py-2.5 text-xs font-medium focus:border-brand-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        {FUEL_TYPES.map(fuel => (
                          <option key={fuel} value={fuel} className="bg-charcoal-deep text-white">{fuel}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Service Needed */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    3. Service Category
                  </label>
                  <div className="relative">
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full bg-charcoal-deep border border-white/15 text-white rounded-input px-3.5 py-2.5 text-xs font-medium focus:border-brand-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {SERVICE_CATEGORIES.map(service => (
                        <option key={service.id} value={service.id} className="bg-charcoal-deep text-white">
                          {service.title}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* 4. Local Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    4. Doorstep Location
                  </label>
                  <div className="relative">
                    <select
                      value={quickArea}
                      onChange={(e) => setQuickArea(e.target.value)}
                      className="w-full bg-charcoal-deep border border-white/15 text-white rounded-input px-3.5 py-2.5 text-xs font-medium focus:border-brand-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {LOCAL_SERVICE_AREAS.map(area => (
                        <option key={area.id} value={area.name} className="bg-charcoal-deep text-white">
                          {area.name} {area.highlight ? '★ (Primary Hub)' : ''}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Instant WhatsApp Quote</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    🔒 No spam. Instant direct quote from local technician on WhatsApp.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

        {/* Visible Clickable Technical Authority & Reference Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Reference 1: Automotive Brands & Origin */}
          <a
            href="https://www.smartwebsolutions.org/blog/top-10-car-companies-and-their-country-of-origin-cars-country-of-origin-list/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-[18px] py-[14px] rounded-[12px] bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.12] hover:border-brand-400/40 backdrop-blur-md shadow-premium transition-all duration-250 text-left"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white font-mono flex items-center justify-between">
              <span>AUTOMOTIVE BRAND REFERENCE</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D94B4B] group-hover:text-[#FF6B6B] transform group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-xs text-[#A7ADB4] mt-1">
              Explore global automotive manufacturers &amp; countries of origin
            </p>
            <div className="text-[11px] font-semibold text-[#D94B4B] group-hover:text-[#FF6B6B] group-hover:underline mt-2 flex items-center gap-1">
              <span>smartwebsolutions.org ↗</span>
            </div>
          </a>

          {/* Reference 2: Mechanic Shop Lighting Efficiency (PacLights) */}
          <a
            href="https://www.paclights.com/explore/mechanic-shop-lights-the-overlooked-factor-in-lighting-efficiency/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-[18px] py-[14px] rounded-[12px] bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.12] hover:border-brand-400/40 backdrop-blur-md shadow-premium transition-all duration-250 text-left"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white font-mono flex items-center justify-between">
              <span>WORKSHOP LIGHTING EFFICIENCY</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D94B4B] group-hover:text-[#FF6B6B] transform group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-xs text-[#A7ADB4] mt-1">
              Mechanic shop lights: The overlooked factor in inspection &amp; safety
            </p>
            <div className="text-[11px] font-semibold text-[#D94B4B] group-hover:text-[#FF6B6B] group-hover:underline mt-2 flex items-center gap-1">
              <span>paclights.com ↗</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
