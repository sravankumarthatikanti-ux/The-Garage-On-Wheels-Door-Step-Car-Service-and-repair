import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, CheckCircle2, ChevronRight, MapPin, Calendar, Clock, Car } from 'lucide-react';
import { CAR_BRANDS, SERVICE_CATEGORIES, LOCAL_SERVICE_AREAS, buildWhatsAppUrl } from '../data/carServiceData';

export default function ProgressiveBooking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('Periodic General Service');
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [fuelType, setFuelType] = useState('Petrol');
  const [selectedLocation, setSelectedLocation] = useState('Tirumalagiri');
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [preferredSlot, setPreferredSlot] = useState('Morning (9:00 AM - 12:00 PM)');

  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const bName = e.target.value;
    setSelectedBrand(bName);
    const bObj = CAR_BRANDS.find(b => b.name === bName);
    if (bObj && bObj.models.length > 0) {
      setSelectedModel(bObj.models[0]);
    }
  };

  const handleFinalBooking = (e) => {
    e.preventDefault();
    const message = `Hello The Garage on Wheels,\nI would like to book a car service.\n\n• Service Required: ${selectedService}\n• Car: ${selectedBrand} ${selectedModel} (${fuelType})\n• Location: ${selectedLocation}\n• Preferred Date/Time: ${preferredDate} - ${preferredSlot}\n\nPlease confirm the doorstep service technician arrival.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918121404113?text=${encoded}`, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const url = buildWhatsAppUrl({
      serviceName: "Direct WhatsApp Booking"
    });
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-surface text-primary border-t border-border relative overflow-hidden">
      
      {/* Background Color Blooms: Ice Blue + Lavender + Aqua */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-ice/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-lavender/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 w-[600px] h-[300px] bg-aqua/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-ice text-xs font-bold uppercase tracking-widest border border-ice/30 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
            <span>PROGRESSIVE DOORSTEP BOOKING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            YOUR CAR DESERVES <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-aqua">BETTER CARE.</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-xl mx-auto leading-relaxed">
            Tell us what your car needs. We'll come to you.
          </p>
        </div>

        {/* Progressive 4-Step Booking Container */}
        <div className="bg-white border border-border rounded-card-lg p-6 sm:p-9 shadow-premium text-left relative">
          
          {/* Step Progress Indicators with Multi-Color Line */}
          <div className="flex items-center justify-between border-b border-border-soft pb-5 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(s)}
                className={`flex items-center space-x-2 text-xs font-bold font-mono transition-all ${
                  step === s
                    ? 'text-slate-900 border-b-2 border-ice pb-1 -mb-[21px]'
                    : step > s
                    ? 'text-aqua'
                    : 'text-muted'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                  step === s ? 'bg-graphite text-ice shadow-sm' : step > s ? 'bg-aqua/20 text-slate-900' : 'bg-surface-soft border border-border text-secondary'
                }`}>
                  {s}
                </span>
                <span className="hidden sm:inline">
                  {s === 1 && "SERVICE"}
                  {s === 2 && "CAR INFO"}
                  {s === 3 && "LOCATION"}
                  {s === 4 && "TIME SLOT"}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleFinalBooking} className="space-y-6">
            
            {/* STEP 1: WHAT DOES YOUR CAR NEED? */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-mono uppercase">
                    STEP 1: WHAT DOES YOUR CAR NEED?
                  </h3>
                  <span className="text-xs text-muted font-mono">1 of 4</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'Periodic General Service', price: '₹1,999', dot: 'bg-lime' },
                    { title: 'Brake Inspection & Pad Fitment', price: '₹899', dot: 'bg-lavender' },
                    { title: 'AC Service & Gas Top-Up', price: '₹1,299', dot: 'bg-aqua' },
                    { title: 'Battery Health Check & Jumpstart', price: '₹499', dot: 'bg-cyan' },
                    { title: 'High-Pressure Doorstep Foam Wash', price: '₹499', dot: 'bg-ice' },
                    { title: 'OBD-II ECU Computer Diagnostics', price: '₹799', dot: 'bg-violet' },
                  ].map((s) => (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setSelectedService(s.title)}
                      className={`p-3.5 rounded-card border text-left transition-all flex items-center justify-between group ${
                        selectedService === s.title
                          ? 'bg-graphite text-white border-ice shadow-md'
                          : 'bg-surface-soft text-slate-800 border-border hover:border-ice'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                        <span className="text-xs font-bold">{s.title}</span>
                      </div>
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        selectedService === s.title ? 'bg-charcoal text-ice' : 'bg-white text-secondary shadow-sm'
                      }`}>
                        {s.price}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-7 py-3 btn-sport-primary font-black text-xs uppercase tracking-wider rounded-btn shadow-md flex items-center space-x-1.5"
                  >
                    <span>NEXT: CAR INFO →</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: TELL US ABOUT YOUR CAR */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-mono uppercase">
                    STEP 2: TELL US ABOUT YOUR CAR
                  </h3>
                  <span className="text-xs text-muted font-mono">2 of 4</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Car Brand
                    </label>
                    <select
                      value={selectedBrand}
                      onChange={handleBrandChange}
                      className="w-full bg-surface-soft input-smart-focus text-slate-900 text-xs font-semibold rounded-btn px-3 py-2.5 cursor-pointer"
                    >
                      {CAR_BRANDS.map((b) => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Car Model
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full bg-surface-soft input-smart-focus text-slate-900 text-xs font-semibold rounded-btn px-3 py-2.5 cursor-pointer"
                    >
                      {currentBrandObj.models.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Fuel Type
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFuelType(f)}
                        className={`py-2 text-xs font-bold rounded-btn border transition-all ${
                          fuelType === f
                            ? 'bg-graphite text-ice border-ice shadow-sm'
                            : 'bg-surface-soft text-secondary border-border hover:border-ice'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-secondary hover:text-primary text-xs font-bold uppercase tracking-wider font-mono"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-7 py-3 btn-sport-primary font-black text-xs uppercase tracking-wider rounded-btn shadow-md flex items-center space-x-1.5"
                  >
                    <span>NEXT: LOCATION →</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: WHERE SHOULD WE COME? */}
            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-mono uppercase">
                    STEP 3: WHERE SHOULD WE COME?
                  </h3>
                  <span className="text-xs text-muted font-mono">3 of 4</span>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Doorstep Locality (Twin Cities)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {LOCAL_SERVICE_AREAS.slice(0, 9).map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => setSelectedLocation(a.name)}
                        className={`p-2.5 rounded-btn border text-xs font-bold transition-all text-left flex items-center space-x-2 ${
                          selectedLocation === a.name
                            ? 'bg-graphite text-ice border-ice shadow-sm'
                            : 'bg-surface-soft text-secondary border-border hover:border-ice'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-cyan shrink-0" />
                        <span className="truncate">{a.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 text-secondary hover:text-primary text-xs font-bold uppercase tracking-wider font-mono"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-7 py-3 btn-sport-primary font-black text-xs uppercase tracking-wider rounded-btn shadow-md flex items-center space-x-1.5"
                  >
                    <span>NEXT: TIME SLOT →</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: WHEN DO YOU NEED US? & FINAL CONFIRMATION */}
            {step === 4 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-mono uppercase">
                    STEP 4: WHEN DO YOU NEED US?
                  </h3>
                  <span className="text-xs text-muted font-mono">4 of 4</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Preferred Day
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Today (Urgent)', 'Tomorrow', 'Weekend'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setPreferredDate(d)}
                          className={`p-2.5 rounded-btn border text-xs font-bold transition-all text-center ${
                            preferredDate === d
                              ? 'bg-graphite text-ice border-ice shadow-sm'
                              : 'bg-surface-soft text-secondary border-border hover:border-ice'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Preferred Time Slot
                    </label>
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full bg-surface-soft input-smart-focus text-slate-900 text-xs font-semibold rounded-btn px-3 py-2.5 cursor-pointer"
                    >
                      <option value="Morning (8:30 AM - 11:30 AM)">Morning (8:30 AM - 11:30 AM)</option>
                      <option value="Afternoon (12:00 PM - 3:30 PM)">Afternoon (12:00 PM - 3:30 PM)</option>
                      <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Booking Summary Box */}
                <div className="p-4 rounded-card bg-graphite text-white border border-ice/30 text-xs space-y-1 font-mono shadow-md">
                  <div className="text-ice font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-aqua" />
                    <span>Booking Summary Preview:</span>
                  </div>
                  <div className="text-white font-medium pt-0.5">
                    🛠️ {selectedService} • 🚘 {selectedBrand} {selectedModel} ({fuelType}) • 📍 {selectedLocation}
                  </div>
                </div>

                {/* Final Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-4 py-2.5 text-secondary hover:text-primary text-xs font-bold uppercase tracking-wider font-mono self-start sm:self-auto"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-lg flex items-center justify-center space-x-2.5 active:scale-95"
                  >
                    <span>BOOK MY SERVICE →</span>
                    <ArrowRight className="w-4 h-4 btn-arrow text-graphite" />
                  </button>
                </div>
              </div>
            )}

          </form>

          {/* Secondary Direct WhatsApp Action */}
          <div className="mt-6 pt-4 border-t border-border-soft flex items-center justify-between text-xs text-secondary">
            <span>Want instant advice?</span>
            <button
              onClick={handleDirectWhatsApp}
              className="text-slate-900 hover:text-black font-bold flex items-center gap-1.5 font-mono uppercase tracking-wider"
            >
              <MessageSquare className="w-3.5 h-3.5 text-cyan" />
              <span>PREFER WHATSAPP? CHAT WITH US →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
