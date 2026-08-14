import React, { useState } from 'react';

// Map brand IDs to official SVG file paths stored in /public/logos/
const BRAND_SVG_MAP = {
  'maruti-suzuki': '/logos/maruti-suzuki.svg',
  'hyundai': '/logos/hyundai.svg',
  'tata': '/logos/tata.svg',
  'mahindra': '/logos/mahindra.svg',
  'honda': '/logos/honda.svg',
  'toyota': '/logos/toyota.svg',
  'kia': '/logos/kia.svg',
  'volkswagen': '/logos/volkswagen.svg',
  'skoda': '/logos/skoda.svg',
  'mg': '/logos/mg.svg',
  'renault': '/logos/renault.svg',
  'nissan': '/logos/nissan.svg',
  'bmw': '/logos/bmw.svg',
  'mercedes': '/logos/mercedes.svg',
  'audi': '/logos/audi.svg',
};

// Brand metallic badge background styles
const BADGE_BG_MAP = {
  'maruti-suzuki': 'from-blue-700 to-slate-900 border-blue-600/30',
  'hyundai': 'from-sky-700 to-slate-900 border-sky-600/30',
  'tata': 'from-teal-700 to-slate-900 border-teal-600/30',
  'mahindra': 'from-red-700 to-slate-900 border-red-600/30',
  'honda': 'from-red-800 to-slate-900 border-red-700/30',
  'toyota': 'from-rose-800 to-slate-900 border-rose-700/30',
  'kia': 'from-slate-700 to-slate-900 border-slate-600/30',
  'volkswagen': 'from-blue-800 to-slate-900 border-blue-700/30',
  'skoda': 'from-emerald-800 to-slate-900 border-emerald-700/30',
  'mg': 'from-rose-800 to-slate-900 border-rose-700/30',
  'renault': 'from-amber-700 to-slate-900 border-amber-600/30',
  'nissan': 'from-neutral-700 to-neutral-900 border-neutral-600/30',
  'bmw': 'from-sky-800 to-slate-900 border-sky-700/30',
  'mercedes': 'from-slate-700 to-slate-900 border-slate-600/30',
  'audi': 'from-zinc-800 to-slate-900 border-zinc-700/30',
};

export default function CarBrandLogo({ brandId, className = "w-10 h-10" }) {
  const [hasError, setHasError] = useState(false);
  const logoPath = BRAND_SVG_MAP[brandId];
  const badgeStyle = BADGE_BG_MAP[brandId] || 'from-slate-800 to-slate-900 border-slate-700';

  if (!logoPath || hasError) {
    return (
      <div className={`rounded-card bg-gradient-to-br ${badgeStyle} border p-2 flex items-center justify-center text-white font-bold text-xs shadow-sm ${className}`}>
        {brandId ? brandId.substring(0, 2).toUpperCase() : 'CAR'}
      </div>
    );
  }

  return (
    <div className={`relative rounded-card bg-gradient-to-br ${badgeStyle} border p-2 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105 ${className}`}>
      <img
        src={logoPath}
        alt={`${brandId} official logo`}
        onError={() => setHasError(true)}
        className="w-full h-full object-contain filter invert brightness-0 invert-100 drop-shadow-sm"
      />
    </div>
  );
}
