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
  ChevronDown,
  Zap,
  Phone
} from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, buildWhatsAppUrl, BUSINESS_INFO } from '../data/carServiceData';

/**
 * Atmospheric Floating Dust & Light Particle Simulation
 */
function CinematicParticles({ density = 28, color = "143, 216, 255", maxSpeed = 0.2 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let animationFrameId;

      const handleResize = () => {
        if (!canvas) return;
        canvas.width = canvas.offsetWidth || window.innerWidth || 300;
        canvas.height = canvas.offsetHeight || window.innerHeight || 300;
      };
      handleResize();
      window.addEventListener('resize', handleResize);

      const particles = [];
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * (canvas.width || 300),
          y: Math.random() * (canvas.height || 300),
          radius: Math.random() * 1.6 + 0.6,
          speedX: (Math.random() - 0.5) * maxSpeed,
          speedY: (Math.random() - 0.5) * maxSpeed - 0.05,
          alpha: Math.random() * 0.4 + 0.15,
        });
      }

      const render = () => {
        try {
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
        } catch (err) {
          // Ignore render frame errors
        }
      };
      render();

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    } catch (e) {
      // Canvas gracefully fallback
    }
  }, [density, color, maxSpeed]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75"
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
    if (onOpenBooking) {
      onOpenBooking(selectedBrand, selectedService, `Quick Doorstep Estimate for ${selectedBrand} ${selectedModel} (${fuelType})`);
    } else {
      const url = buildWhatsAppUrl({
        carBrand: selectedBrand,
        carModel: selectedModel,
        serviceName: selectedService,
        issueDescription: `Quick Doorstep Estimate for ${selectedBrand} ${selectedModel} (${fuelType})`
      });
      window.open(url, '_blank');
    }
  };

  const handleDirectWhatsApp = () => {
    if (onOpenBooking) {
      onOpenBooking(selectedBrand, selectedService, "Doorstep Car Care Enquiry");
    } else {
      const url = buildWhatsAppUrl({
        serviceName: "Doorstep Car Care Enquiry"
      });
      window.open(url, '_blank');
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-[#080A0D] text-white select-none"
    >
      {/* ------------------------------------------------------------- */}
      {/* MULTI-COLOR AUTOMOTIVE WORKSHOP BGI & LIGHTING SYSTEM        */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* High-Clarity Authentic Workshop Hub Background */}
        <img 
          src="/images/hero_workshop_bgi.jpg" 
          alt="The Garage On Wheels Advanced Automotive Workshop Hub" 
          className="w-full h-full object-cover object-center opacity-75 filter brightness-100 contrast-[1.08] saturate-[1.05]"
        />
        
        {/* Balanced Cinematic Overlays for Text Legibility & Image Clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D]/95 via-[#080A0D]/75 md:via-[#080A0D]/50 to-[#080A0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/75" />

        {/* 1. Large Diffused Studio Spotlight: Soft Ice Blue */}
        <div 
          className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[650px] h-[450px] rounded-full blur-[140px] opacity-25 bg-[#8FD8FF]/30 animate-spotlight"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        />

        {/* 2. Soft Cyan Mist Atmospheric Rim Light */}
        <div className="absolute top-1/4 right-[25%] w-[500px] h-[320px] rounded-full blur-[120px] opacity-20 bg-[#9DE7E5]/30" />

        {/* 3. Soft Luxury Lavender Accent Glow */}
        <div className="absolute bottom-1/4 right-[5%] w-[450px] h-[280px] rounded-full blur-[110px] opacity-20 bg-[#C7C0E8]/30" />

        {/* 4. Soft Aqua Ambient Ground Light */}
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[200px] rounded-full blur-[130px] opacity-15 bg-[#8EDDD0]/25" />

        {/* Floating Micro-Particles Simulation */}
        <CinematicParticles density={28} color="143, 216, 255" maxSpeed={0.2} />

        {/* Faint Horizontal Light Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8FD8FF]/[0.08] to-transparent w-[35%] h-full animate-light-sweep pointer-events-none" />
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
            
            {/* Category Soft Glowing Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#181E24]/90 border border-[#8FD8FF]/40 text-[#8FD8FF] text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_15px_rgba(143,216,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#9DE7E5] animate-pulse" />
              <span>DOORSTEP SERVICE &amp; WORKSHOP REPAIRS</span>
            </div>

            {/* Core Ultra-Bold Headline with Soft Gradient Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white font-heading tracking-tight leading-[1.05]">
              CAR CARE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8FD8FF] via-[#9DE7E5] to-[#8EDDD0]">
                WHEREVER YOU ARE.
              </span>
            </h1>

            {/* Short Supporting Text with Clear Distinction */}
            <p className="text-base sm:text-lg text-[#C9D1D6] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed font-sans">
              Small &amp; general services at your doorstep. Major repairs handled at our workshop. Transparent pricing, certified technicians, and genuine sealed OEM parts.
            </p>

            {/* Primary, WhatsApp & Instant Call Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 relative">
              
              {/* Soft Atmospheric Glow Behind Primary Button */}
              <div className="absolute -left-2 top-0 w-52 h-14 bg-[#8FD8FF]/25 rounded-full blur-xl pointer-events-none" />

              {/* LEVEL 1: Primary Filled CTA */}
              <button
                onClick={() => onOpenBooking(selectedBrand, selectedService)}
                className="w-full sm:w-auto px-7 py-3.5 btn-sport-gradient font-black text-xs tracking-widest uppercase rounded-btn flex items-center justify-center space-x-2 z-10 shadow-lg active:scale-95"
              >
                <span>BOOK A SERVICE →</span>
                <ArrowRight className="w-4 h-4 btn-arrow text-graphite" />
              </button>

              {/* LEVEL 2: WhatsApp CTA with soft green glow */}
              <button
                onClick={handleDirectWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 btn-whatsapp font-bold text-xs tracking-wider uppercase rounded-btn flex items-center justify-center space-x-2 z-10 shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP US</span>
              </button>

              {/* LEVEL 3: Direct Instant Call Button */}
              <a
                href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                className="w-full sm:w-auto px-5 py-3.5 bg-[#181E24] hover:bg-[#202730] text-cyan hover:text-white font-mono font-bold text-xs tracking-wider uppercase rounded-btn border border-cyan/40 hover:border-cyan flex items-center justify-center space-x-2 z-10 transition-all shadow-sm active:scale-95"
              >
                <Phone className="w-4 h-4 text-cyan animate-pulse" />
                <span>INSTANT CALL</span>
              </a>

            </div>

            {/* Micro Trust Indicators with Soft Colors */}
            <div className="pt-5 border-t border-[#252C33] grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-2.5 rounded-xl bg-[#101419]/80 border border-[#8FD8FF]/20 space-y-1 hover:border-[#8FD8FF]/40 transition-all">
                <div className="text-xs sm:text-sm font-black text-[#8FD8FF] font-mono flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#8FD8FF]" /> On-Site
                </div>
                <p className="text-[10px] text-[#A7ADB4] font-medium leading-tight">Doorstep Inspection</p>
              </div>

              <div className="p-2.5 rounded-xl bg-[#101419]/80 border border-[#9DE7E5]/20 space-y-1 hover:border-[#9DE7E5]/40 transition-all">
                <div className="text-xs sm:text-sm font-black text-[#9DE7E5] font-mono flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#9DE7E5] fill-[#9DE7E5]" /> 4.9 / 5
                </div>
                <p className="text-[10px] text-[#A7ADB4] font-medium leading-tight">Customer Rating</p>
              </div>

              <div className="p-2.5 rounded-xl bg-[#101419]/80 border border-[#C7C0E8]/20 space-y-1 hover:border-[#C7C0E8]/40 transition-all">
                <div className="text-xs sm:text-sm font-black text-[#C7C0E8] font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C7C0E8]" /> Genuine
                </div>
                <p className="text-[10px] text-[#A7ADB4] font-medium leading-tight">OEM Sealed Spares</p>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Vehicle Estimation Selector Card in Soft White Styling */}
          <div 
            className="lg:col-span-5 transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`,
            }}
          >
            <div className="bg-white/95 text-slate-900 border border-slate-200/90 rounded-card-lg p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative backdrop-blur-xl overflow-hidden group hover:border-[#8FD8FF] transition-all">
              
              {/* Soft Multi-Color Top Edge Bar */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#8FD8FF] via-[#9DE7E5] to-[#C7C0E8]" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#080A0D] border border-slate-800 flex items-center justify-center text-ice shadow-sm">
                    <Wrench className="w-4 h-4 text-ice" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider font-heading">
                      QUICK DOORSTEP ESTIMATE
                    </h3>
                    <p className="text-[10px] text-cyan font-mono font-bold">
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
                  <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                    1. Select Car Brand
                  </label>
                  <div className="relative">
                    <select
                      value={selectedBrand}
                      onChange={handleBrandChange}
                      className="w-full bg-[#F8FAFC] text-slate-900 text-xs font-semibold rounded-btn px-3.5 py-2.5 appearance-none cursor-pointer pr-10 border border-slate-300 focus:outline-none focus:border-ice focus:ring-2 focus:ring-ice/20 shadow-sm"
                    >
                      {CAR_BRANDS.map((b) => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Car Model */}
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                    2. Select Model
                  </label>
                  <div className="relative">
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full bg-[#F8FAFC] text-slate-900 text-xs font-semibold rounded-btn px-3.5 py-2.5 appearance-none cursor-pointer pr-10 border border-slate-300 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 shadow-sm"
                    >
                      {currentBrandObj.models.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 3. Fuel Type Chips */}
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                    3. Fuel Type
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {['Petrol', 'Diesel', 'CNG', 'EV'].map((fuel) => (
                      <button
                        key={fuel}
                        type="button"
                        onClick={() => setFuelType(fuel)}
                        className={`py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                          fuelType === fuel
                            ? 'bg-[#080A0D] text-ice border-[#080A0D] shadow-sm font-black'
                            : 'bg-[#F8FAFC] text-slate-700 border-slate-300 hover:border-slate-400 font-semibold'
                        }`}
                      >
                        {fuel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Service Category */}
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                    4. Service Required
                  </label>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#F8FAFC] text-slate-900 text-xs font-semibold rounded-btn px-3.5 py-2.5 appearance-none cursor-pointer pr-10 border border-slate-300 focus:outline-none focus:border-lavender focus:ring-2 focus:ring-lavender/20 shadow-sm"
                    >
                      {SERVICE_CATEGORIES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Form Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2 active:scale-95 text-graphite"
                  >
                    <span>GET INSTANT WHATSAPP QUOTE →</span>
                  </button>
                </div>

              </form>

              {/* Verified Dispatch Footer */}
              <div className="mt-3.5 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-600 font-mono font-semibold">
                <span className="flex items-center gap-1 text-slate-700">
                  <MapPin className="w-3 h-3 text-cyan" /> Doorstep &amp; Workshop Care
                </span>
                <span className="flex items-center gap-1 text-slate-700">
                  <Clock className="w-3 h-3 text-ice" /> 24/7 Open (24 Hours)
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
