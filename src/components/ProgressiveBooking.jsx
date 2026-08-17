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
  Phone,
  User,
  Hash,
  FileText,
  Loader2,
  RotateCcw,
  ExternalLink,
  AlertCircle
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
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Immediate 24/7 Dispatch');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [problemDescription, setProblemDescription] = useState('');

  // Geolocation State
  const [locationStatus, setLocationStatus] = useState('idle');
  const [locationCoords, setLocationCoords] = useState(null);
  const [locationUrl, setLocationUrl] = useState('');
  const [locationErrorMsg, setLocationErrorMsg] = useState('');

  const currentBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[0];

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setSelectedBrand(brandName);
    const brandObj = CAR_BRANDS.find(b => b.name === brandName);
    if (brandObj && brandObj.models.length > 0) {
      setSelectedModel(brandObj.models[0]);
    } else {
      setSelectedModel('');
    }
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('error');
      setLocationErrorMsg('Geolocation not supported by browser.');
      return;
    }

    setLocationStatus('loading');
    setLocationErrorMsg('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setLocationCoords({ lat: latitude, lng: longitude, accuracy: Math.round(accuracy) });
        setLocationUrl(mapsLink);
        setLocationStatus('granted');
      },
      (error) => {
        let msg = 'Location access not granted.';
        if (error.code === error.PERMISSION_DENIED) {
          msg = 'Location permission denied.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg = 'Location unavailable.';
        } else if (error.code === error.TIMEOUT) {
          msg = 'Location timed out.';
        }
        setLocationStatus('denied');
        setLocationErrorMsg(msg);
        setLocationUrl('');
        setLocationCoords(null);
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
    );
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildWhatsAppUrl({
      customerName: userName,
      phone: userPhone,
      carBrand: selectedBrand,
      carModel: selectedModel,
      vehicleNumber: vehicleNumber,
      serviceName: selectedService,
      issueDescription: problemDescription || `Slot: ${selectedTimeSlot} | Area: ${selectedLocality}`,
      locationUrl: locationStatus === 'granted' ? locationUrl : '',
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
            Tell us what your car needs. We'll connect you directly with our workshop &amp; doorstep dispatch team on WhatsApp.
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
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${
                  currentStep === s 
                    ? 'bg-ice text-graphite border-ice font-black' 
                    : currentStep > s 
                    ? 'bg-cyan/20 text-cyan border-cyan/40' 
                    : 'bg-[#101419] text-[#6F7780] border-[#252C33]'
                }`}>
                  {currentStep > s ? '✓' : s}
                </span>
                <span className="hidden sm:inline">
                  {s === 1 && 'Vehicle'}
                  {s === 2 && 'Service'}
                  {s === 3 && 'Location & Time'}
                  {s === 4 && 'Details & WhatsApp'}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleFinalSubmit}>
            
            {/* STEP 1: VEHICLE MAKE & FUEL */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-[#252C33] pb-3">
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                    Step 1: Choose Your Car &amp; Fuel Type
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    Select your vehicle brand and model for authentic OEM compatibility.
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
                      <option value="Other Brand">Other Brand</option>
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
                      {currentBrandObj?.models?.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                      <option value="Other Model">Other Model</option>
                    </select>
                  </div>
                </div>

                {/* Fuel Selector Chips */}
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
                        className={`py-2.5 text-xs font-bold rounded-btn border transition-all ${
                          fuelType === f
                            ? 'bg-ice text-graphite border-ice font-black shadow-sm'
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
                    className="px-6 py-3 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn flex items-center space-x-2 shadow-md"
                  >
                    <span>NEXT: SELECT SERVICE</span>
                    <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SELECT REQUIRED SERVICE */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-[#252C33] pb-3">
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                    Step 2: What Service Does Your Car Need?
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    Pick a service category to get an instant tailored WhatsApp quote.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                  {SERVICE_CATEGORIES.map((s) => {
                    const isSelected = selectedService === s.title;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.title)}
                        className={`p-3.5 rounded-card border text-left transition-all ${
                          isSelected
                            ? 'bg-[#101419] border-ice text-white shadow-sm ring-1 ring-ice'
                            : 'bg-[#101419]/60 border-[#252C33] text-[#A7ADB4] hover:border-[#A7ADB4]/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold font-heading text-white">{s.title}</span>
                          <span className="text-[10px] text-ice font-mono">Quote on WhatsApp</span>
                        </div>
                        <p className="text-[11px] text-[#6F7780] font-sans truncate mt-1">{s.shortDesc}</p>
                      </button>
                    );
                  })}
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
                    Share your current location or choose your locality in Hyderabad / Secunderabad.
                  </p>
                </div>

                {/* Geolocation Button */}
                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5 font-mono flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan" />
                    <span>Current GPS Location</span>
                  </label>

                  {locationStatus === 'idle' && (
                    <button
                      type="button"
                      onClick={handleGetLocation}
                      className="w-full py-3 px-4 rounded-btn bg-[#101419] hover:bg-[#202730] border border-cyan/40 hover:border-cyan text-cyan text-xs font-mono font-bold flex items-center justify-center space-x-2 transition-all group"
                    >
                      <MapPin className="w-4 h-4 text-cyan group-hover:scale-110 transition-transform" />
                      <span>📍 Share My Current Location</span>
                    </button>
                  )}

                  {locationStatus === 'loading' && (
                    <div className="w-full py-3 px-4 rounded-btn bg-[#101419] border border-ice/40 text-ice text-xs font-mono font-bold flex items-center justify-center space-x-2 animate-pulse">
                      <Loader2 className="w-4 h-4 animate-spin text-ice" />
                      <span>Detecting your GPS location...</span>
                    </div>
                  )}

                  {locationStatus === 'granted' && (
                    <div className="p-3.5 rounded-btn bg-[#101419] border border-emerald-500/40 text-left space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-400 font-mono">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>✓ Location captured successfully</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleGetLocation}
                          className="text-[10px] text-slate-400 hover:text-white font-mono flex items-center gap-1 hover:underline"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Re-detect</span>
                        </button>
                      </div>
                      <div className="text-[11px] text-[#A7ADB4] font-mono flex items-center justify-between border-t border-[#252C33] pt-2">
                        <span>GPS: {locationCoords?.lat.toFixed(4)}, {locationCoords?.lng.toFixed(4)}</span>
                        <a href={locationUrl} target="_blank" rel="noreferrer" className="text-ice hover:underline flex items-center gap-1">
                          <span>View Map</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {(locationStatus === 'denied' || locationStatus === 'error') && (
                    <div className="p-3 rounded-btn bg-[#101419] border border-amber-500/30 text-left flex items-center justify-between text-xs text-amber-400 font-mono">
                      <span>Location not shared ({locationErrorMsg || 'Permission denied'})</span>
                      <button type="button" onClick={handleGetLocation} className="text-cyan underline">Try Again</button>
                    </div>
                  )}
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
                      <option value="Immediate 24/7 Dispatch">Immediate 24/7 Emergency Dispatch (30–45 Mins)</option>
                      <option value="Morning (8 AM - 12 PM)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4:00 PM – 8:00 PM)</option>
                      <option value="Night / Late 24hr Slot">Night / Late 24hr Slot (8:00 PM – 8:00 AM)</option>
                    </select>
                  </div>
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
                    <span>NEXT: CONTACT &amp; CONFIRM</span>
                    <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT, VEHICLE NO & WHATSAPP CONFIRM */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="border-b border-[#252C33] pb-3">
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                    Step 4: Contact &amp; WhatsApp Redirect
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    Review your details and connect with our dispatch team on WhatsApp.
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
                      <div className="font-bold text-white font-mono">
                        {locationStatus === 'granted' ? '📍 GPS Attached' : selectedLocality}
                      </div>
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
                    <label className="block text-xs font-bold text-ice uppercase tracking-wider mb-1.5 font-mono flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-ice" />
                      <span>Customer Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Sravan Kumar"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3.5 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cyan uppercase tracking-wider mb-1.5 font-mono flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-cyan" />
                      <span>Mobile Number *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g., 9876543210"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      required
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3.5 py-3"
                    />
                  </div>
                </div>

                {/* Vehicle Number & Problem Description */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-lavender uppercase tracking-wider mb-1.5 font-mono flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-lavender" />
                      <span>Vehicle Number</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., TS 09 EU 6363"
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs font-mono rounded-btn px-3.5 py-3 uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1.5 font-mono flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#A7ADB4]" />
                      <span>Issue / Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Squeaking brake noise, AC slow cooling..."
                      value={problemDescription}
                      onChange={(e) => setProblemDescription(e.target.value)}
                      className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3.5 py-3"
                    />
                  </div>
                </div>

                {/* Important Business Rule Policy Notice */}
                <div className="p-3 rounded-card bg-[#101419]/90 border border-[#252C33] text-[11px] text-[#A7ADB4] leading-relaxed text-left flex items-start space-x-2 font-sans">
                  <ShieldCheck className="w-4 h-4 text-ice shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Doorstep &amp; Workshop Policy:</strong> Small repairs and general services can be handled at your doorstep. For major or workshop-level repairs, our technician will inspect the vehicle and advise bringing it to our workshop.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>CONTINUE TO WHATSAPP →</span>
                    <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="w-full sm:w-auto px-5 py-4 bg-[#101419] text-[#A7ADB4] hover:text-white font-bold text-xs uppercase tracking-wider rounded-btn border border-[#252C33]"
                  >
                    ← Back
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
