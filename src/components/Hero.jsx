import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, MessageSquare, 
  Star, ChevronDown, Sparkles, ExternalLink, ShieldCheck, Phone
} from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, buildWhatsAppUrl, BUSINESS_INFO } from '../data/carServiceData';
import HeroHeritageBackground from './HeroHeritageBackground';

export default function Hero({ onOpenBooking }) {
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [selectedService, setSelectedService] = useState('General Service');
  const [fuelType, setFuelType] = useState('Petrol');

  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setSelectedBrand(brandName);
    const brandObj = CAR_BRANDS.find(b => b.name === brandName);
    if (brandObj && brandObj.models.length > 0) {
      setSelectedModel(brandObj.models[0]);
    }
  };

  const handleQuickWhatsApp = (e) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      carBrand: selectedBrand,
      carModel: selectedModel,
      fuelType: fuelType,
      serviceName: selectedService,
      locality: "Tirumalagiri / Secunderabad"
    });
    window.open(url, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const url = buildWhatsAppUrl({
      carBrand: selectedBrand,
      carModel: selectedModel,
      serviceName: "Doorstep Inspection & Quote"
    });
    window.open(url, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-graphite text-white">
      
      {/* 1. Background Cinematic Workshop Lights Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/workshop_lights_bg.jpg" 
          alt="High-Tech Precision Mechanic Shop & Workshop Lighting" 
          className="w-full h-full object-cover object-center scale-105 opacity-25 filter brightness-95 contrast-115 grayscale-[20%]"
        />
        {/* Soft Graphite & Subtle Steel Blue Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/90 to-graphite/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/90" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-steel-400/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* 2. Global Automotive Heritage Background Layer */}
      <HeroHeritageBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Official Logo, Brand Hero & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* OFFICIAL LOGO & PRIMARY BRAND LOCKUP */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2.5 sm:pr-6 rounded-2xl bg-charcoal/80 border border-titanium/15 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-steel-400/40">
              <div className="relative shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-white p-1 shadow-md border border-titanium/20">
                <img
                  src="/images/business_logo.png"
                  alt="The Garage On Wheels Official Business Logo"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-xl sm:text-2xl font-black tracking-tight font-sans text-white">
                    THE GARAGE
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-wider text-steel-400">
                    ON WHEELS
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-titanium mt-0.5">
                  DOOR STEP CAR SERVICE &amp; REPAIR
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] text-steel-300 font-semibold mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-steel-400 animate-pulse" />
                  <span>DOORSTEP SERVICE • PROFESSIONAL TECHNICIANS • CAR CARE • ANYWHERE</span>
                </div>
              </div>
            </div>

            {/* Core Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white font-sans tracking-tight leading-[1.1]">
              Professional Car Care, <br />
              <span className="text-steel-400">Wherever Your Car Is.</span>
            </h1>

            {/* Subhead Quote / Description */}
            <p className="text-base sm:text-lg text-titanium max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Expert car service and repair brought directly to your doorstep.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Save valuable time and avoid garage waiting lines. Our master mechanics arrive at your residence, office, or apartment with OEM diagnostic tools and genuine parts.
            </p>

            {/* Technical Feature Chips with Thin Titanium Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-medium text-slate-300">
              <div className="flex items-center space-x-2.5 bg-charcoal/90 border border-titanium/15 p-3 rounded-card">
                <CheckCircle2 className="w-4 h-4 text-steel-400 shrink-0" />
                <span>100% Genuine OEM Parts</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-charcoal/90 border border-titanium/15 p-3 rounded-card">
                <CheckCircle2 className="w-4 h-4 text-steel-400 shrink-0" />
                <span>Doorstep Convenience</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-charcoal/90 border border-titanium/15 p-3 rounded-card">
                <CheckCircle2 className="w-4 h-4 text-steel-400 shrink-0" />
                <span>1000 KM / 1-Mo Warranty</span>
              </div>
            </div>

            {/* Prominent Action Buttons: BOOK A SERVICE & WHATSAPP US */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs tracking-widest uppercase rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 active:scale-95 border border-steel-300"
              >
                <span>BOOK A SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDirectWhatsApp}
                className="w-full sm:w-auto px-8 py-4 bg-charcoal hover:bg-charcoal-soft text-white font-bold text-xs tracking-widest uppercase rounded-btn transition-all flex items-center justify-center space-x-2 border border-titanium/25 hover:border-steel-400 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-steel-400" />
                <span>WHATSAPP US</span>
              </button>
            </div>

            {/* Verified Rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-graphite bg-charcoal text-titanium flex items-center justify-center text-xs font-bold border border-titanium/20">SK</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-graphite bg-charcoal-soft text-white flex items-center justify-center text-xs font-bold border border-titanium/20">RR</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-graphite bg-charcoal text-steel-400 flex items-center justify-center text-xs font-bold border border-titanium/20">VN</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-graphite bg-graphite-deep text-titanium flex items-center justify-center text-xs font-bold border border-titanium/20">+</span>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-steel-400 text-steel-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-400">Over 1,200+ car owners served across Secunderabad &amp; Hyderabad</p>
              </div>
            </div>

          </div>

          {/* Right Column: Instant WhatsApp Quote Calculator Card */}
          <div className="lg:col-span-5">
            <div className="bg-charcoal border border-titanium/15 rounded-card-lg p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-titanium/15 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-steel-400 font-mono">Instant Estimate</span>
                  <h2 className="text-lg font-bold text-white mt-0.5">Doorstep Service Calculator</h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-steel-400/15 text-steel-300 text-[10px] font-bold border border-steel-400/30">
                  ⚡ Live Today
                </span>
              </div>

              <form onSubmit={handleQuickWhatsApp} className="space-y-4 text-left">
                
                {/* 1. Car Brand */}
                <div>
                  <label className="block text-xs font-semibold text-titanium mb-1.5">
                    1. Select Car Brand
                  </label>
                  <div className="relative">
                    <select
                      value={selectedBrand}
                      onChange={handleBrandChange}
                      className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium"
                    >
                      {CAR_BRANDS.map((b) => (
                        <option key={b.id} value={b.name} className="bg-graphite text-white">
                          {b.name} ({b.originFlag} {b.originCountry})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Car Model & Fuel */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-titanium mb-1.5">
                      2. Car Model
                    </label>
                    <div className="relative">
                      <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium"
                      >
                        {currentBrandObj.models.map((m) => (
                          <option key={m} value={m} className="bg-graphite text-white">
                            {m}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-titanium mb-1.5">
                      Fuel Type
                    </label>
                    <div className="relative">
                      <select
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium"
                      >
                        <option value="Petrol" className="bg-graphite text-white">Petrol</option>
                        <option value="Diesel" className="bg-graphite text-white">Diesel</option>
                        <option value="CNG" className="bg-graphite text-white">CNG</option>
                        <option value="Electric (EV)" className="bg-graphite text-white">Electric (EV)</option>
                        <option value="Hybrid" className="bg-graphite text-white">Hybrid</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* 3. Service Package */}
                <div>
                  <label className="block text-xs font-semibold text-titanium mb-1.5">
                    3. Required Service
                  </label>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium"
                    >
                      {SERVICE_CATEGORIES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-graphite text-white">
                          {s.title} ({s.startingPrice})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs tracking-widest uppercase rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 active:scale-98 border border-steel-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Instant WhatsApp Quote</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    ✓ No advance payment required • Free doorstep quote
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
            className="group block px-[18px] py-[14px] rounded-[12px] bg-charcoal/70 hover:bg-charcoal border border-titanium/15 hover:border-steel-400/40 backdrop-blur-md shadow-lg transition-all duration-250 text-left"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white font-mono flex items-center justify-between">
              <span>AUTOMOTIVE BRAND REFERENCE</span>
              <ExternalLink className="w-3.5 h-3.5 text-steel-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Explore global automotive manufacturers &amp; countries of origin
            </p>
            <div className="text-[11px] font-semibold text-steel-400 group-hover:text-white group-hover:underline mt-2 flex items-center gap-1">
              <span>smartwebsolutions.org ↗</span>
            </div>
          </a>

          {/* Reference 2: Mechanic Shop Lighting Efficiency (PacLights) */}
          <a
            href="https://www.paclights.com/explore/mechanic-shop-lights-the-overlooked-factor-in-lighting-efficiency/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-[18px] py-[14px] rounded-[12px] bg-charcoal/70 hover:bg-charcoal border border-titanium/15 hover:border-steel-400/40 backdrop-blur-md shadow-lg transition-all duration-250 text-left"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white font-mono flex items-center justify-between">
              <span>WORKSHOP LIGHTING EFFICIENCY</span>
              <ExternalLink className="w-3.5 h-3.5 text-steel-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Mechanic shop lights: The overlooked factor in inspection &amp; safety
            </p>
            <div className="text-[11px] font-semibold text-steel-400 group-hover:text-white group-hover:underline mt-2 flex items-center gap-1">
              <span>paclights.com ↗</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
