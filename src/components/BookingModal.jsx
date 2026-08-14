import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ShieldCheck, CheckCircle2, ChevronRight, Fuel, MapPin, Sparkles } from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, LOCAL_SERVICE_AREAS, FUEL_TYPES, buildWhatsAppUrl } from '../data/carServiceData';

export default function BookingModal({ isOpen, onClose, initialBrand = '', initialService = '', initialArea = '' }) {
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [fuelType, setFuelType] = useState('Petrol');
  const [selectedService, setSelectedService] = useState(initialService || 'Periodic Car Service');
  const [selectedLocality, setSelectedLocality] = useState(initialArea || 'Tirumalagiri');
  const [customNote, setCustomNote] = useState('');

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
      brand: selectedBrand,
      model: selectedModel,
      fuelType: fuelType,
      serviceName: selectedService,
      serviceArea: selectedLocality,
      customNotes: customNote,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white text-primary rounded-modal max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-secondary hover:text-primary hover:bg-surface-soft transition-colors"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1 text-left">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-500 border border-brand-200 text-[10px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Instant WhatsApp Dispatch</span>
          </div>
          <h2 className="text-2xl font-extrabold text-primary font-sans">
            Book Doorstep Car Service
          </h2>
          <p className="text-xs text-secondary leading-relaxed">
            Select your car details below to generate an instant transparent quote directly on WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          {/* Brand & Model Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                Car Brand
              </label>
              <div className="relative">
                <select
                  value={selectedBrand}
                  onChange={handleBrandChange}
                  className="w-full bg-surface-soft border border-border text-primary rounded-input px-3 py-2.5 text-xs font-medium focus:border-brand-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  {CAR_BRANDS.map((b) => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                  <option value="Other / Custom Brand">Other / Custom Brand</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-secondary">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                Car Model
              </label>
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-surface-soft border border-border text-primary rounded-input px-3 py-2.5 text-xs font-medium focus:border-brand-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  {currentBrandObj ? (
                    currentBrandObj.models.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))
                  ) : (
                    <option value="Standard Model">Standard Model</option>
                  )}
                  <option value="Other Model">Other Model</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-secondary">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>
          </div>

          {/* Fuel Type Pills */}
          <div>
            <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
              Fuel Engine Type
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {FUEL_TYPES.map((fuel) => {
                const isSelected = fuelType === fuel;
                return (
                  <button
                    key={fuel}
                    type="button"
                    onClick={() => setFuelType(fuel)}
                    className={`py-2 px-1 text-center rounded-btn text-[11px] font-semibold border transition-all ${
                      isSelected
                        ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                        : 'bg-surface-soft text-secondary border-border hover:text-primary hover:border-brand-200'
                    }`}
                  >
                    {fuel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
              Service Category Needed
            </label>
            <div className="relative">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-surface-soft border border-border text-primary rounded-input px-3 py-2.5 text-xs font-medium focus:border-brand-500 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {SERVICE_CATEGORIES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title} ({s.startingPrice})</option>
                ))}
                <option value="Doorstep Car Wash & Detailing">Doorstep Car Wash &amp; Detailing</option>
                <option value="General Mechanical Inspection">General Mechanical Inspection</option>
                <option value="Emergency Breakdown Assistance">Emergency Breakdown Assistance</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-secondary">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Locality in Hyderabad / Secunderabad */}
          <div>
            <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
              Doorstep Location
            </label>
            <div className="relative">
              <select
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                className="w-full bg-surface-soft border border-border text-primary rounded-input px-3 py-2.5 text-xs font-medium focus:border-brand-500 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {LOCAL_SERVICE_AREAS.map((a) => (
                  <option key={a.id} value={a.name}>
                    {a.name} {a.highlight ? '★ (Primary Hub - 30 Min Dispatch)' : ''}
                  </option>
                ))}
                <option value="Other Locality in Hyderabad">Other Locality in Hyderabad</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-secondary">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Custom Note Input */}
          <div>
            <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
              Specific Problem or Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="e.g., Squeaking brake noise, AC not cooling, synthetic oil change required..."
              className="w-full bg-surface-soft border border-border text-primary rounded-input px-3 py-2 text-xs focus:border-brand-500 focus:outline-none transition-colors placeholder:text-muted"
            />
          </div>

          {/* Monospace Message Preview */}
          <div className="p-3 rounded-card bg-surface-soft border border-border text-[11px] text-secondary font-mono">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-1 font-sans">
              Auto-Generated WhatsApp Quote Text:
            </span>
            <div className="truncate text-primary">
              🚘 {selectedBrand} {selectedModel} ({fuelType}) • 🛠️ {selectedService} • 📍 {selectedLocality}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Quote Request on WhatsApp</span>
            </button>
            <p className="text-[10px] text-center text-muted mt-2">
              Instant reply from our certified service advisor in Tirumalagiri.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
