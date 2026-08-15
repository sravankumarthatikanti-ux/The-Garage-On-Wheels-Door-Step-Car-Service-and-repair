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
  'maruti-suzuki': 'from-graphite to-charcoal border-titanium/20',
  'hyundai': 'from-graphite to-charcoal border-titanium/20',
  'tata': 'from-graphite to-charcoal border-titanium/20',
  'mahindra': 'from-graphite to-charcoal border-titanium/20',
  'honda': 'from-graphite to-charcoal border-titanium/20',
  'toyota': 'from-graphite to-charcoal border-titanium/20',
  'kia': 'from-graphite to-charcoal border-titanium/20',
  'volkswagen': 'from-graphite to-charcoal border-titanium/20',
  'skoda': 'from-graphite to-charcoal border-titanium/20',
  'mg': 'from-graphite to-charcoal border-titanium/20',
  'renault': 'from-graphite to-charcoal border-titanium/20',
  'nissan': 'from-graphite to-charcoal border-titanium/20',
  'bmw': 'from-graphite to-charcoal border-titanium/20',
  'mercedes': 'from-graphite to-charcoal border-titanium/20',
  'audi': 'from-graphite to-charcoal border-titanium/20',
};

export default function CarBrandLogo({ brandId, className = "w-10 h-10" }) {
  const [hasError, setHasError] = useState(false);
  const logoPath = BRAND_SVG_MAP[brandId];
  const badgeStyle = BADGE_BG_MAP[brandId] || 'from-graphite to-charcoal border-titanium/20';

  if (!logoPath || hasError) {
    return (
      <div className={`rounded-card bg-gradient-to-br ${badgeStyle} border p-2 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm ${className}`}>
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
