import React, { useState, useEffect, useRef } from 'react';

/**
 * Global Automotive Heritage Background Layer
 * Renders an asymmetric, multi-layered luxury automotive brand wall
 * with blueprint lines, abstract world coordinates, and vehicle silhouettes.
 */

const HERITAGE_BRANDS = [
  // Top Left / Corner
  {
    id: 'toyota',
    brand: 'TOYOTA',
    country: 'JAPAN',
    code: 'JPN • 35.0844° N, 137.1562° E',
    position: 'top-[8%] left-[3%] lg:left-[5%]',
    size: 'text-2xl sm:text-3xl lg:text-4xl',
    floatDelay: '0s',
    showMobile: true,
  },
  // Top Center-Right
  {
    id: 'bmw',
    brand: 'BMW',
    country: 'GERMANY',
    code: 'DEU • 48.1772° N, 11.5583° E',
    position: 'top-[6%] right-[10%] lg:right-[18%]',
    size: 'text-2xl sm:text-3xl lg:text-5xl',
    floatDelay: '2s',
    showMobile: true,
  },
  // Middle Left
  {
    id: 'tata',
    brand: 'TATA MOTORS',
    country: 'INDIA',
    code: 'IND • 18.9322° N, 72.8333° E',
    position: 'top-[36%] left-[1%] lg:left-[3%]',
    size: 'text-xl sm:text-2xl lg:text-3xl',
    floatDelay: '4s',
    showMobile: true,
  },
  // Far Top Right Corner
  {
    id: 'ferrari',
    brand: 'FERRARI',
    country: 'ITALY',
    code: 'ITA • 44.5323° N, 10.8644° E',
    position: 'top-[14%] right-[2%] lg:right-[4%]',
    size: 'text-lg sm:text-xl lg:text-2xl',
    floatDelay: '1s',
    showMobile: false,
  },
  // Bottom Left
  {
    id: 'porsche',
    brand: 'PORSCHE',
    country: 'GERMANY',
    code: 'DEU • 48.8354° N, 9.1523° E',
    position: 'bottom-[12%] left-[2%] lg:left-[6%]',
    size: 'text-xl sm:text-2xl lg:text-3xl',
    floatDelay: '3s',
    showMobile: false,
  },
  // Bottom Center-Left
  {
    id: 'mahindra',
    brand: 'MAHINDRA',
    country: 'INDIA',
    code: 'IND • 19.0176° N, 72.8461° E',
    position: 'bottom-[4%] left-[22%] lg:left-[28%]',
    size: 'text-xl sm:text-2xl lg:text-3xl',
    floatDelay: '5s',
    showMobile: true,
  },
  // Bottom Right
  {
    id: 'mercedes',
    brand: 'MERCEDES-BENZ',
    country: 'GERMANY',
    code: 'DEU • 48.7904° N, 9.2319° E',
    position: 'bottom-[6%] right-[4%] lg:right-[8%]',
    size: 'text-2xl sm:text-3xl lg:text-4xl',
    floatDelay: '2.5s',
    showMobile: true,
  },
  // Middle Right
  {
    id: 'honda',
    brand: 'HONDA',
    country: 'JAPAN',
    code: 'JPN • 35.6664° N, 139.7199° E',
    position: 'top-[42%] right-[1%] lg:right-[3%]',
    size: 'text-xl sm:text-2xl lg:text-3xl',
    floatDelay: '3.5s',
    showMobile: false,
  },
  // Upper Mid Right
  {
    id: 'hyundai',
    brand: 'HYUNDAI',
    country: 'SOUTH KOREA',
    code: 'KOR • 37.4638° N, 127.0428° E',
    position: 'top-[26%] right-[28%] lg:right-[32%]',
    size: 'text-lg sm:text-xl lg:text-2xl',
    floatDelay: '1.5s',
    showMobile: false,
  },
  // Bottom Far Left
  {
    id: 'volvo',
    brand: 'VOLVO',
    country: 'SWEDEN',
    code: 'SWE • 57.7089° N, 11.9746° E',
    position: 'bottom-[24%] left-[1%]',
    size: 'text-lg sm:text-xl lg:text-2xl',
    floatDelay: '4.5s',
    showMobile: false,
  },
  // Middle Upper Left
  {
    id: 'suzuki',
    brand: 'SUZUKI',
    country: 'JAPAN',
    code: 'JPN • 34.6913° N, 137.6865° E',
    position: 'top-[22%] left-[14%] lg:left-[18%]',
    size: 'text-lg sm:text-xl lg:text-2xl',
    floatDelay: '0.5s',
    showMobile: false,
  },
  // Far Top Left
  {
    id: 'volkswagen',
    brand: 'VOLKSWAGEN',
    country: 'GERMANY',
    code: 'DEU • 52.4288° N, 10.7897° E',
    position: 'top-[2%] left-[30%] lg:left-[35%]',
    size: 'text-lg sm:text-xl lg:text-2xl',
    floatDelay: '3s',
    showMobile: false,
  },
  // Far Right Bottom
  {
    id: 'peugeot',
    brand: 'PEUGEOT',
    country: 'FRANCE',
    code: 'FRA • 48.8756° N, 2.3021° E',
    position: 'bottom-[20%] right-[1%] lg:right-[2%]',
    size: 'text-base sm:text-lg lg:text-xl',
    floatDelay: '5.5s',
    showMobile: false,
  },
  // Top Far Right
  {
    id: 'ford',
    brand: 'FORD',
    country: 'USA',
    code: 'USA • 42.3223° N, 83.1763° W',
    position: 'top-[3%] right-[4%]',
    size: 'text-lg sm:text-xl lg:text-2xl',
    floatDelay: '2s',
    showMobile: false,
  },
];

export default function HeroHeritageBackground() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const containerRef = useRef(null);

  // Gentle Mouse Parallax Tracker (Desktop Only)
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return; // Disabled on mobile
      const { innerWidth, innerHeight } = window;
      // Subtle 2px to 6px offset range
      const targetX = (e.clientX / innerWidth - 0.5) * 8;
      const targetY = (e.clientY / innerHeight - 0.5) * 8;

      animationFrameId = requestAnimationFrame(() => {
        setMouseOffset({ x: targetX, y: targetY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* ------------------------------------------------------------- */}
      {/* LAYER 1: Abstract World Map Grid, Coordinates & Technical Lines */}
      {/* ------------------------------------------------------------- */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern id="heritageGrid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
            <circle cx="120" cy="0" r="1.5" fill="currentColor" />
            <circle cx="0" cy="120" r="1.5" fill="currentColor" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#heritageGrid)" />

        {/* Global Continental Schematic Vectors & Technical Arcs */}
        <g stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.6">
          {/* Asia-Europe Connection Arc */}
          <path d="M 150 180 Q 500 80 850 140 T 1300 220" />
          {/* Trans-Atlantic Route Line */}
          <path d="M 100 450 Q 600 320 1100 480" />
          {/* Crosshair Coordinates */}
          <line x1="80" y1="20" x2="80" y2="100" strokeWidth="0.5" />
          <line x1="40" y1="60" x2="120" y2="60" strokeWidth="0.5" />
          <circle cx="80" cy="60" r="18" strokeWidth="0.5" />

          <line x1="1180" y1="420" x2="1180" y2="500" strokeWidth="0.5" />
          <line x1="1140" y1="460" x2="1220" y2="460" strokeWidth="0.5" />
          <circle cx="1180" cy="460" r="18" strokeWidth="0.5" />
        </g>
      </svg>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 2: Subtle Automotive Silhouette Blueprints              */}
      {/* ------------------------------------------------------------- */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] text-white hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        fill="none"
      >
        {/* Top-Right: Aerodynamic Sports Coupe Silhouette */}
        <g transform="translate(1050, 60) scale(0.65)" stroke="currentColor" strokeWidth="1.75">
          <path d="M 50 160 C 120 160 180 150 260 110 C 350 70 480 60 580 90 C 650 110 720 150 780 160 L 800 160 C 820 160 830 170 820 185 L 800 200 C 760 205 740 205 700 205 C 680 175 640 175 620 205 L 280 205 C 260 175 220 175 200 205 L 40 205 C 20 205 10 195 20 180 Z" />
          <circle cx="240" cy="205" r="32" />
          <circle cx="660" cy="205" r="32" />
          <path d="M 320 110 L 480 100 C 530 100 570 120 590 145 L 300 145 Z" strokeDasharray="3 3" />
        </g>

        {/* Bottom-Left: Technical Chassis & Suspension Blueprint */}
        <g transform="translate(60, 560) scale(0.6)" stroke="currentColor" strokeWidth="1.5">
          <rect x="100" y="80" width="500" height="180" rx="20" strokeDasharray="4 4" />
          <circle cx="160" cy="170" r="45" />
          <circle cx="540" cy="170" r="45" />
          <line x1="160" y1="170" x2="540" y2="170" strokeWidth="2" />
          <line x1="350" y1="40" x2="350" y2="300" strokeDasharray="2 3" />
          <text x="120" y="60" fill="currentColor" fontSize="14" fontFamily="monospace" letterSpacing="2">
            CHASSIS AXLE SPEC // WHEELBASE: 2750mm
          </text>
        </g>
      </svg>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 3: Global Brand Names & Country Labels (Asymmetric Wall)*/}
      {/* ------------------------------------------------------------- */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        {HERITAGE_BRANDS.map((item) => {
          const isHovered = hoveredBrand === item.id;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredBrand(item.id)}
              onMouseLeave={() => setHoveredBrand(null)}
              className={`absolute ${item.position} ${
                item.showMobile ? 'block' : 'hidden md:block'
              } pointer-events-auto cursor-default transition-all duration-500`}
              style={{
                animation: `heritageFloat 16s ease-in-out infinite alternate`,
                animationDelay: item.floatDelay,
              }}
            >
              {/* Brand Typography */}
              <div className="flex flex-col items-start leading-none group">
                <span
                  className={`font-black font-sans tracking-[0.18em] transition-all duration-300 ${item.size} ${
                    isHovered
                      ? 'text-white opacity-25 scale-[1.02]'
                      : 'text-white opacity-[0.065] lg:opacity-[0.08]'
                  }`}
                  style={{
                    textShadow: isHovered ? '0 0 20px rgba(217, 75, 75, 0.3)' : 'none',
                  }}
                >
                  {item.brand}
                </span>

                {/* Country of Origin & Technical Coordinates */}
                <div className="flex items-center gap-2 mt-1.5">
                  <span
                    className={`text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.25em] uppercase font-mono transition-all duration-300 ${
                      isHovered
                        ? 'text-brand-400 opacity-60'
                        : 'text-slate-300 opacity-[0.045] lg:opacity-[0.055]'
                    }`}
                  >
                    {item.country}
                  </span>

                  {/* Subtle Red Accent Underline Marker on Hover */}
                  <span
                    className={`h-[1px] bg-brand-500 transition-all duration-300 ${
                      isHovered ? 'w-8 opacity-70' : 'w-0 opacity-0'
                    }`}
                  />

                  {/* Micro Coordinate Tag */}
                  <span
                    className={`hidden xl:inline-block text-[8px] font-mono tracking-wider transition-opacity duration-300 ${
                      isHovered ? 'text-slate-400 opacity-40' : 'opacity-0'
                    }`}
                  >
                    {item.code}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 4: Soft Radial Gradient Mask (Keeps Center Pristine)    */}
      {/* ------------------------------------------------------------- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(21, 23, 25, 0.4) 0%, rgba(21, 23, 25, 0.85) 65%, rgba(21, 23, 25, 0.98) 100%)`,
        }}
      />

      {/* Keyframe Style for Micro Slow Floating */}
      <style>{`
        @keyframes heritageFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(0.15deg);
          }
          100% {
            transform: translateY(4px) rotate(-0.15deg);
          }
        }
      `}</style>
    </div>
  );
}
