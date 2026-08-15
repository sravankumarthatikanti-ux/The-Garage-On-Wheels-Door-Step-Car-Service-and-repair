import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, MessageSquare, 
  Star, ChevronDown, Sparkles, ExternalLink, ShieldCheck, Phone
} from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, buildWhatsAppUrl, BUSINESS_INFO } from '../data/carServiceData';
import HeroHeritageBackground from './HeroHeritageBackground';
import CinematicParticles from './CinematicParticles';

export default function Hero({ onOpenBooking }) {
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [selectedService, setSelectedService] = useState('General Service');
  const [fuelType, setFuelType] = useState('Petrol');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setSelectedBrand(brandName);
    const brandObj = CAR_BRANDS.find(b => b.name === brandName);
    if (brandObj && brandObj.models.length > 0) {
      setSelectedModel(brandObj.models[0]);
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 14;
    const y = (clientY / innerHeight - 0.5) * 14;
    setMousePos({ x, y });
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
      serviceName: "Doorstep Car Care Enquiry"
    });
    window.open(url, '_blank');
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-graphite text-white select-none"
    >
      {/* ------------------------------------------------------------- */}
      {/* LAYER 1: CINEMATIC STUDIO AUTOMOTIVE PHOTOGRAPHY BASE         */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* High-End Studio Commercial Automotive Photography (Car on Right, Dark Negative on Left) */}
        <img 
          src="/images/hero_car_studio.jpg" 
          alt="The Garage On Wheels High-End Cinematic Automotive Care" 
          className="w-full h-full object-cover object-right md:object-center opacity-35 filter brightness-95 contrast-110"
        />
        
        {/* Left-Side Negative Space Deep Graphite Gradient Vales (Ensures 100% Typography Readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/90 to-graphite/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/95" />
        
        {/* Layer 2: Ice Blue & Mist Blue Ambient Studio Lighting */}
        <div 
          className="absolute top-1/4 left-1/3 w-[800px] h-[450px] bg-gradient-to-tr from-ice/12 via-mist/6 to-transparent rounded-full blur-[140px] transition-transform duration-1000 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
          }}
        />
      </div>

      {/* Blueprint & Automotive Heritage Vector Grid Layer */}
      <HeroHeritageBackground />

      {/* ------------------------------------------------------------- */}
      {/* LAYER 3: CINEMATIC STUDIO SPOTLIGHT & PARTICLES               */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        {/* Soft Automotive Studio Spotlight */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-radial from-steel-400/8 via-steel-400/3 to-transparent rounded-full blur-[120px] animate-spotlight"
        />

        {/* Layer 6: Floating Micro-Particles Simulation */}
        <CinematicParticles density={24} color="175, 196, 209" maxSpeed={0.18} />

        {/* Faint Horizontal Light Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ice/[0.04] to-transparent w-[35%] h-full animate-light-sweep pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 4: CONTENT & HERO STAGE (MOBILE-FIRST ORDER)            */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Logo, Brand, Headline & Direct CTAs */}
          <div 
            className="lg:col-span-7 space-y-5 text-center lg:text-left transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${-mousePos.x * 0.25}px, ${-mousePos.y * 0.25}px, 0)`,
            }}
          >
            
            {/* 1. OFFICIAL LOGO & BRAND BADGE */}
            <div className="inline-flex items-center gap-3.5 p-2 pr-5 rounded-2xl bg-charcoal/85 border border-titanium/20 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-steel-400/50">
              <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white p-1 shadow-sm border border-titanium/20">
                <img
                  src="/images/business_logo.png"
                  alt="The Garage On Wheels Official Logo"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-black tracking-tight text-white">
                    THE GARAGE
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-wider text-steel-400">
                    ON WHEELS
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-titanium font-mono">
                  DOOR STEP CAR SERVICE &amp; REPAIR
                </p>
              </div>
            </div>

            {/* 2. CORE HEADLINE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white font-sans tracking-tight leading-[1.05]">
              CAR CARE. <br />
              <span className="text-steel-400">WHEREVER YOU ARE.</span>
            </h1>

            {/* 3. SHORT SUPPORTING TEXT */}
            <p className="text-base sm:text-lg text-titanium max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Professional car service and repair brought directly to your doorstep.
            </p>

            {/* 4. PRIMARY & SECONDARY ACTION BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs tracking-widest uppercase rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 active:scale-95 border border-steel-300"
              >
                <span>BOOK A SERVICE →</span>
              </button>

              <button
                onClick={handleDirectWhatsApp}
                className="w-full sm:w-auto px-8 py-4 bg-charcoal hover:bg-charcoal-soft text-white font-bold text-xs tracking-widest uppercase rounded-btn transition-all flex items-center justify-center space-x-2 border border-titanium/25 hover:border-steel-400 active:scale-95 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-steel-400" />
                <span>WHATSAPP US</span>
              </button>
            </div>

            {/* Verified Trust Strip Indicator */}
            <div className="pt-1 flex items-center justify-center lg:justify-start space-x-4 text-xs text-slate-300 font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Mobile Units Active in Secunderabad &amp; Hyderabad</span>
              </div>
            </div>

          </div>

          {/* Right Column: Progressive Instant Quote Calculator with Grounding Shadow */}
          <div 
            className="lg:col-span-5 relative transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`,
            }}
          >
            {/* Layer 5: Natural Floor Shadow & Ambient Reflection */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[90%] h-12 car-ground-shadow rounded-full pointer-events-none" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[80%] h-16 car-floor-reflection rounded-full pointer-events-none" />

            <div className="bg-charcoal/95 border border-titanium/20 rounded-card-lg p-6 sm:p-7 shadow-2xl relative backdrop-blur-xl hover:border-steel-400/40 transition-all duration-300">
              
              <div className="flex items-center justify-between border-b border-titanium/15 pb-3.5 mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-steel-400 font-mono">Instant Estimate</span>
                  <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">Doorstep Service Calculator</h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-steel-400/15 text-steel-300 text-[10px] font-bold border border-steel-400/30 font-mono">
                  ⚡ Doorstep
                </span>
              </div>

              <form onSubmit={handleQuickWhatsApp} className="space-y-3.5 text-left">
                
                {/* 1. Car Brand */}
                <div>
                  <label className="block text-xs font-semibold text-titanium mb-1 font-mono">
                    1. Car Brand
                  </label>
                  <div className="relative">
                    <select
                      value={selectedBrand}
                      onChange={handleBrandChange}
                      className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium cursor-pointer"
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
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-titanium mb-1 font-mono">
                      2. Model
                    </label>
                    <div className="relative">
                      <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium cursor-pointer"
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
                    <label className="block text-xs font-semibold text-titanium mb-1 font-mono">
                      Fuel
                    </label>
                    <div className="relative">
                      <select
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium cursor-pointer"
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
                  <label className="block text-xs font-semibold text-titanium mb-1 font-mono">
                    3. Required Service
                  </label>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-graphite border border-titanium/20 text-white text-xs rounded-btn px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400 transition-all font-medium cursor-pointer"
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
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
