import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Car, 
  Clock, 
  MapPin, 
  Wrench, 
  Fuel, 
  Calendar,
  Sparkles,
  Phone
} from 'lucide-react';
import { 
  CAR_BRANDS, 
  SERVICE_CATEGORIES, 
  LOCAL_SERVICE_AREAS, 
  FUEL_TYPES,
  buildWhatsAppUrl,
  BUSINESS_INFO 
} from '../data/carServiceData';

export default function ProgressiveBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [fuelType, setFuelType] = useState('Petrol');
  const [selectedService, setSelectedService] = useState('General Service');
  const [selectedLocality, setSelectedLocality] = useState('Tirumalagiri');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Morning (8 AM - 12 PM)');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [notes, setNotes] = useState('');

  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setSelectedBrand(brandName);
    const brandObj = CAR_BRANDS.find(b => b.name === brandName);
    if (brandObj && brandObj.models.length > 0) {
      setSelectedModel(brandObj.models[0]);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildWhatsAppUrl({
      carBrand: selectedBrand,
      carModel: selectedModel,
      fuelType: fuelType,
      serviceName: selectedService,
      locality: selectedLocality,
      customNotes: `Customer: ${userName || 'Direct Booking'} | Phone: ${userPhone || 'Provided on chat'} | Slot: ${selectedTimeSlot} | Address: ${userAddress} | Note: ${notes}`,
    });
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-[#101419] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* Background Color Blooms: Ice Blue + Lavender */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-ice/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
            <span>PROGRESSIVE DOORSTEP BOOKING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            READY TO TAKE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-aqua">
              BETTER CARE OF YOUR CAR?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] max-w-xl mx-auto leading-relaxed font-sans">
            Tell us what your car needs. We'll dispatch a certified mobile service unit to you.
          </p>
        </div>

        {/* Progressive 4-Step Booking Container */}
        <div className="bg-[#181E24] border border-[#252C33] rounded-card-lg p-6 sm:p-9 shadow-premium text-left relative">
          
          {/* Step Progress Indicators */}
          <div className="flex items-center justify-between border-b border-[#252C33] pb-5 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setCurrentStep(s)}
                className={`flex items-center space-x-2 text-xs font-mono font-bold transition-all ${
                  currentStep === s 
                    ? 'text-ice font-extrabold scale-105' 
                    : currentStep > s 
                    ? 'text-cyan' 
                    : 'text-[#6F7780]'
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                  currentStep === s 
                    ? 'bg-ice text-graphite font-black shadow-[0_0_12px_rgba(143,216,255,0.4)]' 
                    : currentStep > s 
                    ? 'bg-[#101419] text-cyan border border-cyan/40' 
                    : 'bg-[#101419] text-[#6F7780] border border-[#252C33]'
                }`}>
                  {currentStep > s ? '✓' : s}
                </div>
                <span className="hidden sm:inline">
                  {s === 1 ? 'Vehicle' : s === 2 ? 'Service' : s === 3 ? 'Location' : 'Confirm'}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleFinalSubmit} className="space-y-6">
            
            {/* STEP 1: VEHICLE INFORMATION */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-[#252C33] pb-3">
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                    Step 1: Select Your Car
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    Choose the brand and fuel type so we bring matching OEM tools and spares.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ice uppercase tracking-wider mb-1.5 font-mono">
                      Car Brand
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

                  <div>
                    <label className="block text-xs font-bold text-cyan uppercase tracking-wider mb-1.5 font-mono">
                      Car Model
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
                </div>

                <div>
                  <label className="block text-xs font-bold text-aqua uppercase tracking-wider mb-1.5 font-mono">
                    Fuel Type
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {FUEL_TYPES.map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFuelType(f)}
                        className={`py-2 text-xs font-bold rounded-btn border transition-all ${
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

                <div className="pt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn flex items-center space-x-2"
                  >
                    <span>NEXT: CHOOSE SERVICE</span>
                    <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SERVICE SELECTION */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-[#252C33] pb-3">
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                    Step 2: Choose Service &amp; Notes
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    Pick from standard periodic packages or describe custom symptoms.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ice uppercase tracking-wider mb-1.5 font-mono">
                    Required Service Package
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-3 cursor-pointer"
                  >
                    {SERVICE_CATEGORIES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Custom Mechanical Repair">Custom Mechanical Repair / Diagnostics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1.5 font-mono">
                    Describe any specific symptoms (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Squeaking brake noise, AC not cooling fast, battery slow cranking in morning..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn p-3"
                  />
                </div>

                <div className="pt-3 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-3 bg-[#101419] text-[#A7ADB4] hover:text-white font-bold text-xs uppercase tracking-wider rounded-btn border border-[#252C33]"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn flex items-center space-x-2"
                  >
                    <span>NEXT: LOCATION &amp; TIME</span>
                    <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: LOCATION & TIME SLOT */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-[#252C33] pb-3">
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                    Step 3: Doorstep Location &amp; Time
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    Where and when should our certified technician visit?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ice uppercase tracking-wider mb-1.5 font-mono">
                      Service Locality
                    </label>
                    <select
                      value={selectedLocality}
                      onChange={(e) => setSelectedLocality(e.target.value)}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-3 cursor-pointer"
                    >
                      {LOCAL_SERVICE_AREAS.map((a) => (
                        <option key={a.id} value={a.name}>{a.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cyan uppercase tracking-wider mb-1.5 font-mono">
                      Preferred Time Slot
                    </label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-3 cursor-pointer"
                    >
                      <option value="Morning (8 AM - 12 PM)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4:00 PM – 8:00 PM)</option>
                      <option value="Immediate Emergency Dispatch">Immediate / As Soon As Possible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1.5 font-mono">
                    Street Address / Landmark
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Flat 302, Asha Officers Colony, Tirumalagiri"
                    value={userAddress}
                    onChange={(e) => setUserAddress(e.target.value)}
                    className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3.5 py-3"
                  />
                </div>

                <div className="pt-3 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-3 bg-[#101419] text-[#A7ADB4] hover:text-white font-bold text-xs uppercase tracking-wider rounded-btn border border-[#252C33]"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="px-6 py-3 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn flex items-center space-x-2"
                  >
                    <span>NEXT: REVIEW &amp; CONFIRM</span>
                    <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW & CONFIRM */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-[#252C33] pb-3">
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                    Step 4: Review &amp; Dispatch Confirmation
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    Review your vehicle details and connect with dispatch on WhatsApp.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-[#101419] border border-[#252C33] rounded-card p-4 sm:p-5 space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <div className="text-[10px] text-[#6F7780] font-mono uppercase">Vehicle</div>
                      <div className="font-black text-white font-mono">{selectedBrand} {selectedModel}</div>
                      <div className="text-[11px] text-cyan">{fuelType}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6F7780] font-mono uppercase">Service</div>
                      <div className="font-black text-ice font-mono">{selectedService}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6F7780] font-mono uppercase">Location</div>
                      <div className="font-bold text-white font-mono">{selectedLocality}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6F7780] font-mono uppercase">Slot</div>
                      <div className="font-bold text-lavender font-mono">{selectedTimeSlot.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>

                {/* Customer Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Sravan Kumar"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3.5 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1.5 font-mono">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g., 9876543210"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3.5 py-3"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>BOOK MY SERVICE →</span>
                    <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const url = buildWhatsAppUrl({
                        carBrand: selectedBrand,
                        carModel: selectedModel,
                        serviceName: selectedService
                      });
                      window.open(url, '_blank');
                    }}
                    className="w-full sm:w-auto px-6 py-4 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4 text-whatsapp" />
                    <span>WHATSAPP US</span>
                  </button>
                </div>

                <div className="pt-2 text-center text-[11px] text-[#A7ADB4] font-mono flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan" />
                  <span>100% Genuine OEM Spares • Small Services at Doorstep • Major at Workshop</span>
                </div>
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
