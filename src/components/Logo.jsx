import React from 'react';

/**
 * The Garage On Wheels — Official Brand Logo Component
 * Luxury Automotive Performance Style with Electric Ice Blue (#8FD8FF) & Titanium (#C9D1D6).
 */
export default function Logo({ 
  size = 'default', 
  className = '', 
  isDark = true,
  showText = true 
}) {
  let emblemClass = 'h-10 w-10';
  let titleClass = 'text-base sm:text-lg';
  let subClass = 'text-base sm:text-lg';
  let taglineClass = 'text-[9px] sm:text-[10px]';

  if (size === 'compact') {
    emblemClass = 'h-8 w-8';
    titleClass = 'text-sm';
    subClass = 'text-sm';
    taglineClass = 'text-[8px]';
  } else if (size === 'large') {
    emblemClass = 'h-14 w-14 sm:h-16 sm:w-16';
    titleClass = 'text-xl sm:text-2xl';
    subClass = 'text-xl sm:text-2xl';
    taglineClass = 'text-xs sm:text-sm';
  } else if (size === 'hero') {
    emblemClass = 'h-16 w-16 sm:h-20 sm:w-20 shadow-2xl';
    titleClass = 'text-2xl sm:text-3xl lg:text-4xl';
    subClass = 'text-2xl sm:text-3xl lg:text-4xl';
    taglineClass = 'text-xs sm:text-sm';
  }

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Official Business Logo Emblem */}
      <div className={`relative shrink-0 ${emblemClass} rounded-xl overflow-hidden bg-white p-1 shadow-md border border-titanium/20 transition-all duration-300 group-hover:scale-105 group-hover:border-ice/50 group-hover:shadow-[0_0_15px_rgba(143,216,255,0.3)]`}>
        <img
          src="/images/business_logo.png"
          alt="The Garage On Wheels Logo"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Brand Typography Lockup using Outfit / Syne Heading Font */}
      {showText && (
        <div className="flex flex-col leading-none text-left">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`font-black tracking-tight font-heading ${titleClass} ${isDark ? 'text-white' : 'text-slate-900'}`}>
              THE GARAGE
            </span>
            <span className={`font-black tracking-wider text-ice font-heading ${subClass}`}>
              ON WHEELS
            </span>
          </div>
          <span className={`font-bold tracking-widest uppercase font-mono ${taglineClass} ${isDark ? 'text-titanium' : 'text-secondary'} mt-1`}>
            DOOR STEP CAR SERVICE &amp; REPAIR
          </span>
        </div>
      )}
    </div>
  );
}
