import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  User, 
  Car, 
  Hash, 
  Wrench, 
  FileText, 
  AlertCircle, 
  Loader2, 
  RotateCcw, 
  ExternalLink 
} from 'lucide-react';
import { 
  CAR_BRANDS, 
  SERVICE_CATEGORIES, 
  buildWhatsAppUrl, 
  BUSINESS_INFO 
} from '../data/carServiceData';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  initialBrand = '', 
  initialService = '', 
  initialIssue = '' 
}) {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'General Service');
  const [problemDescription, setProblemDescription] = useState(initialIssue || '');

  // Geolocation State
  // status: 'idle' | 'loading' | 'granted' | 'denied' | 'error'
  const [locationStatus, setLocationStatus] = useState('idle');
  const [locationCoords, setLocationCoords] = useState(null); // { lat, lng, accuracy }
  const [locationUrl, setLocationUrl] = useState('');
  const [locationErrorMsg, setLocationErrorMsg] = useState('');

  // Validation errors
  const [errors, setErrors] = useState({});

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

  // Sync state when modal opens with new initial props
  useEffect(() => {
    if (initialBrand) {
      setSelectedBrand(initialBrand);
      const brandObj = CAR_BRANDS.find(b => b.name.toLowerCase() === initialBrand.toLowerCase());
      if (brandObj && brandObj.models.length > 0) {
        setSelectedModel(brandObj.models[0]);
      }
    }
    if (initialService) setSelectedService(initialService);
    if (initialIssue) setProblemDescription(initialIssue);
  }, [initialBrand, initialService, initialIssue, isOpen]);

  // When brand changes, update model choices
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

  // Browser Geolocation Handler
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('error');
      setLocationErrorMsg('Geolocation is not supported by your browser.');
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
          msg = 'Location information unavailable.';
        } else if (error.code === error.TIMEOUT) {
          msg = 'Location request timed out.';
        }
        setLocationStatus('denied');
        setLocationErrorMsg(msg);
        setLocationUrl('');
        setLocationCoords(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 0,
      }
    );
  };

  const handleResetLocation = () => {
    setLocationStatus('idle');
    setLocationCoords(null);
    setLocationUrl('');
    setLocationErrorMsg('');
  };

  const validateForm = () => {
    const errs = {};
    if (!customerName.trim()) {
      errs.customerName = 'Please enter your name';
    }
    if (!phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const waUrl = buildWhatsAppUrl({
      customerName: customerName,
      phone: phone,
      carBrand: selectedBrand,
      carModel: selectedModel,
      vehicleNumber: vehicleNumber,
      serviceName: selectedService,
      issueDescription: problemDescription,
      locationUrl: locationStatus === 'granted' ? locationUrl : '',
    });

    window.open(waUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#181E24] text-white rounded-modal max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-[#252C33] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-ice via-cyan to-aqua" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#A7ADB4] hover:text-white hover:bg-[#101419] transition-colors border border-transparent hover:border-[#252C33]"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 space-y-1.5 text-left pr-8">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#101419] text-ice border border-ice/30 text-[10px] font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>DIRECT WHATSAPP BOOKING</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight">
            Book / Enquire Service
          </h2>
          <p className="text-xs text-[#A7ADB4] leading-relaxed font-sans">
            Fill in your details below to share your vehicle info and location directly on WhatsApp.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          {/* 1. Customer Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-ice uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-ice" />
                <span>Customer Name *</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Sravan Kumar"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  if (errors.customerName) setErrors(prev => ({ ...prev, customerName: '' }));
                }}
                className={`w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 ${
                  errors.customerName ? 'border-red-500 ring-1 ring-red-500' : ''
                }`}
              />
              {errors.customerName && (
                <p className="text-[10px] text-red-400 mt-1 font-mono">{errors.customerName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-cyan uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                placeholder="e.g., 9876543210"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                }}
                className={`w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 ${
                  errors.phone ? 'border-red-500 ring-1 ring-red-500' : ''
                }`}
              />
              {errors.phone && (
                <p className="text-[10px] text-red-400 mt-1 font-mono">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* 2. Car Brand & Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#A7ADB4]" />
                <span>Car Brand</span>
              </label>
              <select
                value={selectedBrand}
                onChange={handleBrandChange}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 cursor-pointer"
              >
                {CAR_BRANDS.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
                <option value="Other Brand">Other Brand</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono">
                <span>Car Model</span>
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 cursor-pointer"
              >
                {currentBrandObj?.models?.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
                <option value="Other Model">Other Model</option>
              </select>
            </div>
          </div>

          {/* 3. Vehicle Number & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-lavender uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-lavender" />
                <span>Vehicle Number</span>
              </label>
              <input
                type="text"
                placeholder="e.g., TS 09 EU 6363"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-mono font-semibold rounded-btn px-3.5 py-2.5 uppercase"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-aqua uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-aqua" />
                <span>Service Required</span>
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[#101419] input-smart-focus text-white text-xs font-semibold rounded-btn px-3.5 py-2.5 cursor-pointer"
              >
                {SERVICE_CATEGORIES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="Car Repair">Car Repair</option>
                <option value="Inspection / Diagnostic">Inspection / Diagnostic</option>
                <option value="Battery Service">Battery Service</option>
                <option value="Brake Service">Brake Service</option>
                <option value="Oil Change">Oil Change</option>
                <option value="DPF Service">DPF Service</option>
              </select>
            </div>
          </div>

          {/* 4. Short Description of Problem */}
          <div>
            <label className="block text-xs font-bold text-[#A7ADB4] uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#A7ADB4]" />
              <span>Short Description of the Problem</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Squeaking brake noise, AC slow cooling, battery slow crank..."
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
              className="w-full bg-[#101419] input-smart-focus text-white text-xs rounded-btn px-3.5 py-2.5"
            />
          </div>

          {/* 5. Geolocation Location Sharing Section */}
          <div className="pt-1">
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan" />
              <span>Service Location</span>
            </label>

            {locationStatus === 'idle' && (
              <button
                type="button"
                onClick={handleGetLocation}
                className="w-full py-3 px-4 rounded-btn bg-[#101419] hover:bg-[#202730] border border-cyan/40 hover:border-cyan text-cyan text-xs font-mono font-bold flex items-center justify-center space-x-2 transition-all group shadow-sm active:scale-[0.99]"
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
                  <span className="truncate">
                    GPS: {locationCoords?.lat.toFixed(4)}, {locationCoords?.lng.toFixed(4)} (±{locationCoords?.accuracy}m)
                  </span>
                  <a
                    href={locationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ice hover:underline flex items-center gap-1 shrink-0 ml-2"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {(locationStatus === 'denied' || locationStatus === 'error') && (
              <div className="p-3 rounded-btn bg-[#101419] border border-amber-500/30 text-left flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-amber-400 font-mono">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Location not shared ({locationErrorMsg || 'Permission denied'})</span>
                </div>
                <button
                  type="button"
                  onClick={handleGetLocation}
                  className="text-[10px] text-cyan hover:underline font-mono ml-2 shrink-0"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          {/* 6. Important Business Rule Policy Notice */}
          <div className="p-3 rounded-card bg-[#101419]/90 border border-[#252C33] text-[11px] text-[#A7ADB4] leading-relaxed text-left flex items-start space-x-2 font-sans">
            <ShieldCheck className="w-4 h-4 text-ice shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Doorstep &amp; Workshop Policy:</strong> Small repairs and general services can be handled at your doorstep. For major or workshop-level repairs, our technician will inspect the vehicle and advise bringing it to our workshop.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-4 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-lg flex items-center justify-center space-x-2 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-graphite" />
              <span>CONTINUE TO WHATSAPP →</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-4 bg-[#101419] hover:bg-[#252C33] text-[#A7ADB4] hover:text-white font-bold text-xs uppercase tracking-wider rounded-btn border border-[#252C33]"
            >
              Cancel
            </button>
          </div>

        </form>

        {/* Footer Guarantee */}
        <div className="mt-4 pt-3 border-t border-[#252C33] flex items-center justify-between text-[11px] text-[#A7ADB4] font-mono">
          <span className="flex items-center gap-1 text-white">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan" /> 100% Genuine OEM Spares
          </span>
          <span className="text-ice">24/7 Service Available</span>
        </div>

      </div>
    </div>
  );
}
