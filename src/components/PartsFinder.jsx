import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, MessageSquare, Search, Tag, Cpu, Layers } from 'lucide-react';
import { CAR_BRANDS, SPARE_PARTS, buildWhatsAppUrl } from '../data/carServiceData';

export default function PartsFinder({ onOpenBooking }) {
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [selectedCategory, setSelectedCategory] = useState('Braking & Safety');
  const [selectedPartName, setSelectedPartName] = useState('Front Ceramic Brake Pads');

  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setSelectedBrand(brandName);
    const brandObj = CAR_BRANDS.find(b => b.name === brandName);
    if (brandObj && brandObj.models.length > 0) {
      setSelectedModel(brandObj.models[0]);
    }
  };

  const currentCategoryParts = SPARE_PARTS.filter(
    part => part.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const handleWhatsAppPartInquiry = () => {
    const message = `Hello The Garage On Wheels! 🚗\n\nI need a genuine OEM part quote:\n🚘 *Car:* ${selectedBrand} ${selectedModel}\n⚙️ *Category:* ${selectedCategory}\n📦 *Part:* ${selectedPartName}\n\nPlease share price with doorstep installation.`;
    const url = `https://wa.me/918121404113?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const stepsColorMap = [
    { step: "01", label: "Brand", color: "text-ice", border: "focus:border-ice" },
    { step: "02", label: "Model", color: "text-cyan", border: "focus:border-cyan" },
    { step: "03", label: "Category", color: "text-aqua", border: "focus:border-aqua" },
    { step: "04", label: "Part", color: "text-lavender", border: "focus:border-lavender" },
  ];

  return (
    <section id="parts" className="py-16 md:py-24 bg-[#101419] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* Background Studio Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[350px] bg-ice/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
            <span>100% GENUINE OEM SPARE PARTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            FIND YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-lavender">CAR PART</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed">
            Sealed barcode warranty, manufacturer-backed components, and certified doorstep installation.
          </p>
        </div>

        {/* 4-Step Interactive Discovery Selector */}
        <div className="bg-[#181E24] border border-[#252C33] rounded-card-lg p-6 sm:p-9 shadow-premium text-left relative">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            {/* Step 1: Select Brand */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-ice uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#101419] border border-ice/40 text-[9px] flex items-center justify-center">1</span>
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={handleBrandChange}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-3 cursor-pointer"
              >
                {CAR_BRANDS.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            {/* Step 2: Select Model */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-cyan uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#101419] border border-cyan/40 text-[9px] flex items-center justify-center">2</span>
                Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-3 cursor-pointer"
              >
                {currentBrandObj.models.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Step 3: Select Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-aqua uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#101419] border border-aqua/40 text-[9px] flex items-center justify-center">3</span>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-3 cursor-pointer"
              >
                <option value="Braking & Safety">Braking &amp; Safety</option>
                <option value="Filters & Lubricants">Filters &amp; Lubricants</option>
                <option value="Electrical & Battery">Electrical &amp; Battery</option>
                <option value="Suspension & Steering">Suspension &amp; Steering</option>
                <option value="Cooling & AC">Cooling &amp; AC</option>
              </select>
            </div>

            {/* Step 4: Select Part */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-lavender uppercase tracking-wider font-mono flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#101419] border border-lavender/40 text-[9px] flex items-center justify-center">4</span>
                Specific Component
              </label>
              <select
                value={selectedPartName}
                onChange={(e) => setSelectedPartName(e.target.value)}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-3 cursor-pointer"
              >
                {currentCategoryParts.map((p, idx) => (
                  <option key={idx} value={p.name}>{p.name}</option>
                ))}
                <option value="Custom OEM Part Inquiry">Other / Custom OEM Component</option>
              </select>
            </div>

          </div>

          {/* Action Row & Live Summary */}
          <div className="pt-6 border-t border-[#252C33] flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-bold text-[#A7ADB4] font-mono">
                Matching Component For: <strong className="text-white">{selectedBrand} {selectedModel}</strong>
              </div>
              <div className="text-sm font-black text-ice font-heading">
                {selectedPartName}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleWhatsAppPartInquiry}
                className="px-7 py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2"
              >
                <span>FIND MY PART →</span>
                <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
              </button>

              <button
                onClick={() => onOpenBooking && onOpenBooking(selectedBrand, `Part: ${selectedPartName}`)}
                className="px-6 py-3.5 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-whatsapp" />
                <span>BOOK INSTALLATION</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
