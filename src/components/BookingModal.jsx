import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ShieldCheck, CheckCircle2, ChevronRight, Fuel, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, LOCAL_SERVICE_AREAS, FUEL_TYPES, buildWhatsAppUrl } from '../data/carServiceData';

export default function BookingModal({ isOpen, onClose, initialBrand = '', initialService = '', initialArea = '' }) {
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [fuelType, setFuelType] = useState('Petrol');
  const [selectedService, setSelectedService] = useState(initialService || 'General Service');
  const [selectedLocality, setSelectedLocality] = useState(initialArea || 'Tirumalagiri');
  const [customNote, setCustomNote] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Sync state when modal opens
  useEffect(() => {
    if (initialBrand) {
      setSelectedBrand(initialBrand);
      const brandObj = CAR_BRANDS.find(b => b.name.toLowerCase() === initialBrand.toLowerCase());
      if (brandObj && brandObj.models.length > 0) {
        setSelectedModel(brandObj.models[0]);
      }
    }
    if (initialService) setSelectedService(initialService);
    if (initialArea) setSelectedLocality(initialArea);
  }, [initialBrand, initialService, initialArea, isOpen]);

  // When brand changes, update model choices
  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setSelectedBrand(brandName);
    const brandObj = CAR_BRANDS.find(b => b.name === brandName);
    if (brandObj && brandObj.models.length > 0) {
      setSelectedModel(brandObj.models[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildWhatsAppUrl({
      carBrand: selectedBrand,
      carModel: selectedModel,
      fuelType: fuelType,
      serviceName: selectedService,
      locality: selectedLocality,
      customNotes: customNote,
    });
    window.open(waUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#181E24] text-white rounded-modal max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#252C33] overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A7ADB4] hover:text-white hover:bg-[#101419] transition-colors border border-transparent hover:border-[#252C33]"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1.5 text-left">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#101419] text-ice border border-ice/30 text-[10px] font-bold uppercase tracking-widest font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
            <span>INSTANT WHATSAPP DISPATCH</span>
          </div>
          <h2 className="text-2xl font-black text-white font-heading tracking-tight">
            Book Doorstep Car Service
          </h2>
          <p className="text-xs text-[#A7ADB4] leading-relaxed font-sans">
            Select your car details below to generate an instant transparent quote directly on WhatsApp.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          {/* Brand & Model Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-ice uppercase tracking-wider mb-1 font-mono">
                1. Car Brand
              </label>
              <select
                value={selectedBrand}
                onChange={handleBrandChange}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3 py-2.5 cursor-pointer"
              >
                {CAR_BRANDS.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-cyan uppercase tracking-wider mb-1 font-mono">
                2. Car Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3 py-2.5 cursor-pointer"
              >
                {currentBrandObj.models.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Fuel Type Chips */}
          <div>
            <label className="block text-xs font-bold text-aqua uppercase tracking-wider mb-1 font-mono">
              3. Fuel Type
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {FUEL_TYPES.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFuelType(f)}
                  className={`py-1.5 text-xs font-bold rounded-btn border transition-all ${
                    fuelType === f
                      ? 'bg-ice text-graphite border-ice shadow-sm font-black'
                      : 'bg-[#101419] text-[#A7ADB4] border-[#252C33] hover:border-ice/40'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-lavender uppercase tracking-wider mb-1 font-mono">
              4. Service Required
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3 py-2.5 cursor-pointer"
            >
              {SERVICE_CATEGORIES.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="Custom Repair / Inspection">Custom Repair / Inspection</option>
            </select>
          </div>

          {/* Locality in Secunderabad / Hyderabad */}
          <div>
            <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono">
              5. Doorstep Location (Twin Cities)
            </label>
            <select
              value={selectedLocality}
              onChange={(e) => setSelectedLocality(e.target.value)}
              className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3 py-2.5 cursor-pointer"
            >
              {LOCAL_SERVICE_AREAS.map((a) => (
                <option key={a.id} value={a.name}>{a.name}</option>
              ))}
            </select>
          </div>

          {/* Notes / Special Request */}
          <div>
            <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono">
              6. Special Symptoms / Requirements (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., Squeaking brake noise, AC not cooling, sudden battery discharge..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3 py-2.5"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-lg flex items-center justify-center space-x-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-graphite" />
              <span>CONFIRM ON WHATSAPP →</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 bg-[#101419] hover:bg-[#252C33] text-[#A7ADB4] hover:text-white font-bold text-xs uppercase tracking-wider rounded-btn border border-[#252C33]"
            >
              Cancel
            </button>
          </div>

        </form>

        {/* Footer Guarantee */}
        <div className="mt-4 pt-3 border-t border-[#252C33] flex items-center justify-between text-[11px] text-[#A7ADB4] font-mono">
          <span className="flex items-center gap-1 text-white">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan" /> 100% Genuine Box Unboxing
          </span>
          <span>Zero Advance Payment</span>
        </div>

      </div>
    </div>
  );
}
