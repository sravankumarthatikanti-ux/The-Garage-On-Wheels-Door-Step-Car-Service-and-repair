import React, { useState } from 'react';
import { 
  Camera, X, ChevronLeft, ChevronRight, MessageSquare, 
  Sparkles, Maximize2, ShieldCheck, CheckCircle2, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Shots' },
  { id: 'workshop', label: 'Hi-Tech Workshop' },
  { id: 'mechanical', label: 'Mechanical & Engine' },
  { id: 'doorstep', label: 'Doorstep Service' },
  { id: 'detailing', label: 'Detailing & Care' },
];

const GALLERY_IMAGES = [
  {
    id: 'shot-1',
    title: 'Precision Multi-Bay Auto Workshop',
    category: 'workshop',
    categoryLabel: 'Hi-Tech Workshop',
    image: '/images/gallery/garage_workshop.jpg',
    description: 'Equipped with hydraulic vehicle lifts, computerized wheel aligners, and German torque calibration tools.',
    technicalSpecs: ['Hydraulic 4-Post Lifts', 'German Torque Tools', 'OBD-II Multi-Brand Scanners'],
    span: 'large',
  },
  {
    id: 'shot-2',
    title: 'Computerized OBD-II Diagnostic Suite',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Engine',
    image: '/images/gallery/engine_diagnostic.jpg',
    description: 'Master mechanic performing real-time ECU fault code scanning, live sensor stream monitoring, and injector calibration.',
    technicalSpecs: ['Live Sensor Telemetry', 'ECU Coding & Flash', 'Emissions Compliance Testing'],
    span: 'normal',
  },
  {
    id: 'shot-3',
    title: 'Brembo & TVS Ventilated Brake Overhaul',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Engine',
    image: '/images/gallery/brake_repair.jpg',
    description: 'Complete brake disc rotor machining, ceramic brake pad fitment, and electronic caliper EPB retraction.',
    technicalSpecs: ['Ceramic Low-Dust Pads', 'DOT-4 High-Temp Fluid', 'Micrometer Rotor Trueing'],
    span: 'normal',
  },
  {
    id: 'shot-4',
    title: 'Doorstep Mobile Service Van Deployment',
    category: 'doorstep',
    categoryLabel: 'Doorstep Service',
    image: '/images/gallery/mobile_van.jpg',
    description: 'Technicians arriving with on-board pneumatic tools, oil evacuation tanks, and battery testing kits in Tirumalagiri.',
    technicalSpecs: ['Zero Oil Spill Rig', '12V Digital Battery Analyzer', 'Doorstep Fast Dispatch'],
    span: 'large',
  },
  {
    id: 'shot-5',
    title: 'High-Pressure Snow Foam Paint Wash',
    category: 'detailing',
    categoryLabel: 'Detailing & Care',
    image: '/images/gallery/detailing_wash.jpg',
    description: 'PH-neutral German snow foam shampoo application, microfiber two-bucket wash, and ceramic gloss boost.',
    technicalSpecs: ['pH-Neutral Snow Foam', 'Two-Bucket Grit Guard', 'Hydrophobic Sealant Coat'],
    span: 'normal',
  },
  {
    id: 'shot-6',
    title: 'Manual & Automatic Transmission Rebuild',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Engine',
    image: '/images/gallery/gearbox_repair.jpg',
    description: 'Clutch plate replacement, flywheel resurfacing, and synthetic gear oil flushing for silky smooth gear shifts.',
    technicalSpecs: ['OEM Valeo Clutch Kits', 'Hydraulic Slave Cylinder', 'Synthetic 75W-90 Gear Oil'],
    span: 'normal',
  },
];

export default function GarageGallery({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-surface text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-graphite text-steel-300 text-xs font-bold uppercase tracking-widest border border-titanium/20 font-mono">
              <Camera className="w-3.5 h-3.5 text-steel-400" />
              <span>EDITORIAL WORKSHOP GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
              Workshop &amp; <span className="text-steel-600">Service Album</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl leading-relaxed">
              Real high-resolution photographs from our hi-tech workshop and doorstep service visits across Secunderabad and Hyderabad.
            </p>
          </div>

          {/* Floating Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-card border border-border self-start lg:self-auto shadow-sm">
            {GALLERY_CATEGORIES.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-btn text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-graphite text-steel-300 shadow-sm border border-titanium/20'
                      : 'text-secondary hover:text-primary hover:bg-surface-soft'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Banner: BUILT AROUND YOUR CAR */}
        <div className="mb-12 rounded-card-lg bg-graphite text-white border border-titanium/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl relative">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 relative z-10">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-steel-400 font-mono">
                PRECISION STANDARDS
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                BUILT AROUND YOUR CAR.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Every vehicle is diagnosed with manufacturer-grade diagnostic software, serviced with 100% genuine sealed fluids, and tested on road by certified master mechanics.
              </p>
            </div>
            <div>
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs uppercase tracking-widest rounded-btn shadow-md hover:shadow-steel-glow transition-all inline-flex items-center space-x-2 active:scale-95 border border-steel-300"
              >
                <span>Explore Our Service Process</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img 
              src="/images/gallery/garage_workshop.jpg" 
              alt="The Garage On Wheels High-Tech Facility" 
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-graphite via-transparent to-transparent" />
          </div>
        </div>

        {/* Editorial Photo Grid with Mixed Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="premium-card overflow-hidden cursor-pointer flex flex-col justify-between group hover:border-steel-400"
            >
              {/* Image Container with Zoom Button */}
              <div className="relative aspect-[16/11] overflow-hidden bg-surface-soft">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-graphite/90 backdrop-blur-md text-steel-300 font-mono font-semibold text-[10px] shadow-sm border border-titanium/20">
                  {item.categoryLabel}
                </div>

                {/* Circular Zoom Button on Hover */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-graphite text-steel-400 border border-titanium/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-primary group-hover:text-steel-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-secondary mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Technical Tags */}
                <div className="pt-3 border-t border-border-soft flex flex-wrap gap-1.5">
                  {item.technicalSpecs.slice(0, 2).map((spec, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-medium bg-surface-soft text-secondary px-2 py-0.5 rounded-md border border-border font-mono">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Refined Luxury Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-steel-400 hover:text-graphite text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Card Two-Pane Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-graphite border border-titanium/20 rounded-modal overflow-hidden max-w-5xl w-full max-h-[90vh] grid grid-cols-1 lg:grid-cols-12 shadow-2xl relative"
            >
              {/* Left: Big Sharp Image View */}
              <div className="lg:col-span-7 bg-graphite-deep relative min-h-[300px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="w-full h-full object-cover object-center max-h-[60vh] lg:max-h-[85vh]"
                />

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-steel-400 hover:text-graphite text-white transition-colors border border-titanium/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-steel-400 hover:text-graphite text-white transition-colors border border-titanium/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right: Technical Information Panel */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[40vh] lg:max-h-[85vh]">
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded-md bg-steel-400/20 text-steel-300 text-xs font-bold border border-steel-400/30 inline-block font-mono">
                    {currentLightboxItem.categoryLabel}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {currentLightboxItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentLightboxItem.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block font-mono">
                      Technical Specifications
                    </span>
                    <div className="space-y-1.5">
                      {currentLightboxItem.technicalSpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-steel-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-titanium/15 space-y-3">
                  <button
                    onClick={() => {
                      closeLightbox();
                      onOpenBooking('', currentLightboxItem.title);
                    }}
                    className="w-full py-3 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs uppercase tracking-widest rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center justify-center space-x-2 active:scale-95 border border-steel-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Book This Service on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
