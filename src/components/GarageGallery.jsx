import React, { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { buildWhatsAppUrl } from '../data/carServiceData';

const GALLERY_CATEGORIES = [
  { id: 'all', label: 'ALL SHOTS', color: '#FFFFFF' },
  { id: 'workshop', label: 'HI-TECH WORKSHOP', color: '#3B82F6' },
  { id: 'mechanical', label: 'MECHANICAL & ENGINE', color: '#8FD8FF' },
  { id: 'doorstep', label: 'DOORSTEP SERVICE', color: '#F59E0B' },
  { id: 'electrical', label: 'BATTERY & ELECTRICAL', color: '#9DE7E5' },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Master Engine Diagnostics & Tuning",
    category: "mechanical",
    categoryLabel: "MECHANICAL & ENGINE",
    categoryColor: "#8FD8FF",
    image: "/images/gallery/engine_diagnostic.jpg",
    description: "OBD-II live ECU telemetry analysis, spark plug inspection, and valve calibration by master mechanics.",
    tags: ["ECU Tuning", "Compression Test", "OEM Sensors"]
  },
  {
    id: 2,
    title: "On-Site Technician Inspection & Diagnostic",
    category: "doorstep",
    categoryLabel: "DOORSTEP SERVICE",
    categoryColor: "#F59E0B",
    image: "/images/gallery/mobile_van.jpg",
    description: "Certified technician visiting your home or office with computerized diagnostics, multi-point inspection tools, and genuine spares.",
    tags: ["On-Site Visit", "Doorstep Care", "Secunderabad"]
  },
  {
    id: 3,
    title: "Ceramic Brake Rotor & Pad Fitment",
    category: "mechanical",
    categoryLabel: "MECHANICAL & ENGINE",
    categoryColor: "#8FD8FF",
    image: "/images/gallery/brake_repair.jpg",
    description: "Bosch and TVS high-friction ceramic brake pads, micrometer disc trueing, and DOT-4 fluid bleed.",
    tags: ["Brake Overhaul", "DOT-4 Bleed", "TVS Spares"]
  },
  {
    id: 4,
    title: "Advanced Automotive Workshop Hub",
    category: "workshop",
    categoryLabel: "HI-TECH WORKSHOP",
    categoryColor: "#3B82F6",
    image: "/images/gallery/garage_workshop.jpg",
    description: "State-of-the-art repair bays in Tirumalagiri with hydraulic scissor lifts, computerized alignment, and test benches.",
    tags: ["Tirumalagiri Hub", "Scissor Lifts", "Wheel Align"]
  },
  {
    id: 5,
    title: "Battery & Alternator Electrical Health Check",
    category: "electrical",
    categoryLabel: "BATTERY & ELECTRICAL",
    categoryColor: "#9DE7E5",
    image: "/images/gallery/engine_diagnostic.jpg",
    description: "Amaron and Exide computerized load test, terminal de-corrosion, alternator output measurement, and doorstep fitment.",
    tags: ["Battery Health", "Load Test", "Amaron/Exide"]
  },
  {
    id: 6,
    title: "Transmission & Gearbox Calibration",
    category: "mechanical",
    categoryLabel: "MECHANICAL & ENGINE",
    categoryColor: "#8FD8FF",
    image: "/images/gallery/gearbox_repair.jpg",
    description: "Clutch plate overhaul, synthetic gear oil flush, and precision synchromesh calibration for smooth shifting.",
    tags: ["Gearbox Overhaul", "Clutch Plate", "Synthetic Lube"]
  }
];

export default function GarageGallery({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleNext = (e) => {
    e.stopPropagation();
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[prevIndex]);
  };

  const handleWhatsAppBooking = (item) => {
    const url = buildWhatsAppUrl({
      serviceName: `Gallery Inquiry: ${item.title}`
    });
    window.open(url, '_blank');
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#080A0D] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* Background Color Ambient Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-ice/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] text-ice text-xs font-bold uppercase tracking-widest border border-[#252C33] font-mono">
            <Camera className="w-3.5 h-3.5 text-cyan" />
            <span>PHOTOGRAPHY &amp; PROOF OF WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            AUTOMOTIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-lavender">GALLERY</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed">
            Real doorstep car repairs, advanced workshop diagnostics, and certified technician execution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 sm:mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-ice text-graphite border-ice shadow-[0_0_15px_rgba(143,216,255,0.4)]'
                    : 'bg-[#181E24] text-[#A7ADB4] border-[#252C33] hover:text-white hover:border-ice/40'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: isActive ? '#080A0D' : cat.color }} 
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="bg-[#181E24] border border-[#252C33] rounded-card overflow-hidden shadow-card cursor-pointer group transition-all duration-300 hover:border-ice/60 hover:-translate-y-1.5"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#101419]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span 
                    className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase font-mono tracking-wider border backdrop-blur-md"
                    style={{
                      backgroundColor: 'rgba(8, 10, 13, 0.85)',
                      color: item.categoryColor,
                      borderColor: `${item.categoryColor}50`
                    }}
                  >
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Reveal Zoom Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-ice text-graphite flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 text-left space-y-2">
                <h3 className="text-base font-black text-white font-heading tracking-tight group-hover:text-ice transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A7ADB4] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold text-[#F1F3F5] bg-[#101419] border border-[#252C33] px-2 py-0.5 rounded font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxItem(null)}
        >
          <div 
            className="relative bg-[#101419] border border-[#252C33] rounded-card-lg max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#181E24] text-white hover:text-ice border border-[#252C33] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Image Area */}
            <div className="md:w-3/5 bg-[#080A0D] relative flex items-center justify-center min-h-[300px] md:min-h-[460px]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#181E24]/80 text-white hover:text-ice border border-[#252C33] backdrop-blur-md transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#181E24]/80 text-white hover:text-ice border border-[#252C33] backdrop-blur-md transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right/Info Panel */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase font-mono tracking-wider border"
                  style={{
                    backgroundColor: 'rgba(24, 30, 36, 0.9)',
                    color: lightboxItem.categoryColor,
                    borderColor: `${lightboxItem.categoryColor}40`
                  }}
                >
                  {lightboxItem.categoryLabel}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight leading-tight">
                  {lightboxItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed font-sans">
                  {lightboxItem.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold uppercase text-[#6F7780] font-mono tracking-wider">
                    TECHNICAL PARAMETERS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {lightboxItem.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-bold text-ice bg-[#181E24] border border-[#252C33] px-2.5 py-1 rounded-md font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="space-y-2.5 pt-4 border-t border-[#252C33]">
                <button
                  onClick={() => {
                    setLightboxItem(null);
                    onOpenBooking && onOpenBooking('', lightboxItem.title);
                  }}
                  className="w-full py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2"
                >
                  <span>BOOK THIS SERVICE →</span>
                  <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
                </button>

                <button
                  onClick={() => handleWhatsAppBooking(lightboxItem)}
                  className="w-full py-3 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-btn flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-whatsapp" />
                  <span>WHATSAPP INQUIRY</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
