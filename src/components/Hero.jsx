import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Clock,
  Wrench,
  Fuel,
  Star,
  ChevronDown
} from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, buildWhatsAppUrl } from '../data/carServiceData';

/**
 * Atmospheric Floating Dust & Light Particle Simulation
 */
function CinematicParticles({ density = 24, color = "143, 216, 255", maxSpeed = 0.18 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const particles = [];
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * maxSpeed,
        speedY: (Math.random() - 0.5) * maxSpeed - 0.05,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, color, maxSpeed]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"
    />
  );
}

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
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#080A0D] text-white select-none"
    >
      {/* ------------------------------------------------------------- */}
      {/* MULTI-COLOR AUTOMOTIVE STUDIO LIGHTING SYSTEM                 */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Commercial Automotive Studio Photography Base */}
        <img 
          src="/images/hero_car_studio.jpg" 
          alt="The Garage On Wheels Cinematic Automotive Care" 
          className="w-full h-full object-cover object-right md:object-center opacity-40 filter brightness-95 contrast-115"
        />
        
        {/* Left Negative Space Deep Background Gradient Vales */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/90" />

        {/* 1. Large Diffused Studio Spotlight behind the Car */}
        <div 
          className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[700px] h-[550px] rounded-full blur-[140px] opacity-40 bg-ice/30 animate-spotlight"
          style={{
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          }}
        />

        {/* 2. Secondary Cyan Mist Atmospheric Rim Light */}
        <div className="absolute top-1/4 right-[25%] w-[500px] h-[350px] rounded-full blur-[120px] opacity-30 bg-cyan/25" />

        {/* 3. Luxury Lavender Rim Light Accent */}
        <div className="absolute bottom-1/4 right-[5%] w-[450px] h-[300px] rounded-full blur-[110px] opacity-25 bg-lavender/25" />

        {/* 4. Realistic Grounding Car Floor Shadow & Reflection */}
        <div className="absolute bottom-6 right-[4%] w-[55%] h-[120px] car-floor-reflection pointer-events-none hidden md:block" />
        <div className="absolute bottom-4 right-[6%] w-[50%] h-[60px] car-ground-shadow pointer-events-none hidden md:block" />

        {/* Floating Micro-Particles Simulation */}
        <CinematicParticles density={24} color="143, 216, 255" maxSpeed={0.18} />

        {/* Faint Horizontal Light Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ice/[0.06] to-transparent w-[35%] h-full animate-light-sweep pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CONTENT & HERO STAGE                                          */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2 sm:pt-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Headline & Direct CTAs */}
          <div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${-mousePos.x * 0.25}px, ${-mousePos.y * 0.25}px, 0)`,
            }}
          >
            
            {/* Category Micro-Indicator */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181E24] border border-[#252C33] text-ice text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>DOORSTEP CAR SERVICE &amp; REPAIR</span>
            </div>

            {/* Core Ultra-Bold Headline (800-900 Weight) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white font-heading tracking-tight leading-[1.05]">
              CAR CARE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-ice">
                WHEREVER YOU ARE.
              </span>
            </h1>

            {/* Short Supporting Text */}
            <p className="text-base sm:text-lg text-[#A7ADB4] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Professional car service and repair brought directly to your doorstep. Certified technicians, transparent pricing, and genuine OEM parts.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 relative">
              
              {/* Soft Atmospheric Glow Behind Primary Button */}
              <div className="absolute -left-2 top-0 w-48 h-14 bg-ice/20 rounded-full blur-xl pointer-events-none" />

              {/* LEVEL 1: Primary Filled CTA */}
              <button
                onClick={() => onOpenBooking(selectedBrand, selectedService)}
                className="w-full sm:w-auto px-8 py-4 btn-sport-gradient font-black text-xs tracking-widest uppercase rounded-btn flex items-center justify-center space-x-2.5 z-10"
              >
                <span>BOOK A SERVICE →</span>
                <ArrowRight className="w-4 h-4 btn-arrow text-graphite" />
              </button>

              {/* LEVEL 2: WhatsApp CTA */}
              <button
                onClick={handleDirectWhatsApp}
                className="w-full sm:w-auto px-7 py-4 btn-whatsapp font-bold text-xs tracking-wider uppercase rounded-btn flex items-center justify-center space-x-2 z-10"
              >
                <MessageSquare className="w-4 h-4 text-whatsapp" />
                <span>WHATSAPP US</span>
              </button>

            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-[#252C33]/80 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-0.5">
                <div className="text-sm font-black text-white font-mono flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-ice" /> 100%
                </div>
                <p className="text-[10px] text-[#A7ADB4] font-medium leading-tight">Doorstep Delivery</p>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-black text-white font-mono flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-cyan fill-cyan" /> 4.9 / 5
                </div>
                <p className="text-[10px] text-[#A7ADB4] font-medium leading-tight">Customer Rating</p>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-black text-white font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-aqua" /> Genuine
                </div>
                <p className="text-[10px] text-[#A7ADB4] font-medium leading-tight">OEM Sealed Spares</p>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Vehicle Estimation Selector Card */}
          <div 
            className="lg:col-span-5 transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`,
            }}
          >
            <div className="bg-[#181E24] border border-[#252C33] rounded-card-lg p-6 sm:p-7 shadow-premium relative backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#252C33]">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#101419] border border-[#252C33] flex items-center justify-center text-ice shadow-sm">
                    <Wrench className="w-4 h-4 text-ice" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading">
                      QUICK DOORSTEP ESTIMATE
                    </h3>
                    <p className="text-[10px] text-[#A7ADB4] font-mono">
                      SECUNDERABAD &amp; HYDERABAD
                    </p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-ping" />
              </div>

              {/* Form Controls */}
              <form onSubmit={handleQuickWhatsApp} className="space-y-3.5 text-left">
                
                {/* 1. Car Brand */}
                <div>
                  <label className="block text-[11px] font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono">
                    Select Car Brand
                  </label>
                  <div className="relative">
                    <select
                      value={selectedBrand}
                      onChange={handleBrandChange}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 appearance-none cursor-pointer pr-10"
                    >
                      {CAR_BRANDS.map((b) => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#A7ADB4] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Car Model */}
                <div>
                  <label className="block text-[11px] font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono">
                    Select Model
                  </label>
                  <div className="relative">
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 appearance-none cursor-pointer pr-10"
                    >
                      {currentBrandObj.models.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#A7ADB4] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 3. Fuel Type Chips */}
                <div>
                  <label className="block text-[11px] font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono">
                    Fuel Type
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {['Petrol', 'Diesel', 'CNG', 'EV'].map((fuel) => (
                      <button
                        key={fuel}
                        type="button"
                        onClick={() => setFuelType(fuel)}
                        className={`py-1 text-[11px] font-bold rounded-lg border transition-all ${
                          fuelType === fuel
                            ? 'bg-[#101419] text-ice border-ice shadow-sm'
                            : 'bg-[#101419]/60 text-[#A7ADB4] border-[#252C33] hover:border-ice/40'
                        }`}
                      >
                        {fuel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Service Category */}
                <div>
                  <label className="block text-[11px] font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono">
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 appearance-none cursor-pointer pr-10"
                    >
                      {SERVICE_CATEGORIES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title} ({s.startingPrice})</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#A7ADB4] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Form Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>GET INSTANT WHATSAPP QUOTE →</span>
                  </button>
                </div>

              </form>

              {/* Verified Dispatch Footer */}
              <div className="mt-3.5 pt-3 border-t border-[#252C33] flex items-center justify-between text-[10px] text-[#A7ADB4] font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan" /> Doorstep Service Unit
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-ice" /> 8:00 AM – 8:00 PM
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
