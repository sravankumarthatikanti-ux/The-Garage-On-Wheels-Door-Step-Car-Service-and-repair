import React from 'react';

/**
 * The Garage On Wheels — Official Brand Logo Component
 * Luxury Automotive Showroom Aesthetic with Soft Steel Blue (#8FAFC2) and Titanium (#C7D0D6) accents.
 */
export default function Logo({ 
  size = 'default', 
  className = '', 
  isDark = false,
  showText = true 
}) {
  let emblemClass = 'h-10 w-10';
  let titleClass = 'text-base sm:text-lg';
  let subClass = 'text-xs sm:text-sm';
  let taglineClass = 'text-[9px] sm:text-[10px]';

  if (size === 'compact') {
    emblemClass = 'h-8 w-8';
    titleClass = 'text-sm';
    subClass = 'text-xs';
    taglineClass = 'text-[8px]';
  } else if (size === 'large') {
    emblemClass = 'h-14 w-14 sm:h-16 sm:w-16';
    titleClass = 'text-xl sm:text-2xl';
    subClass = 'text-sm sm:text-base';
    taglineClass = 'text-xs sm:text-sm';
  } else if (size === 'hero') {
    emblemClass = 'h-20 w-20 sm:h-24 sm:w-24 shadow-2xl';
    titleClass = 'text-2xl sm:text-3xl lg:text-4xl';
    subClass = 'text-lg sm:text-2xl';
    taglineClass = 'text-xs sm:text-sm';
  }

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Official Business Logo Emblem */}
      <div className={`relative shrink-0 ${emblemClass} rounded-xl overflow-hidden bg-white p-1 shadow-md border border-titanium/20 transition-transform duration-300 group-hover:scale-105`}>
        <img
          src="/images/business_logo.png"
          alt="The Garage On Wheels Logo"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Brand Typography Lockup */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className={`font-black tracking-tight font-sans ${titleClass} ${isDark ? 'text-white' : 'text-slate-900'}`}>
              THE GARAGE
            </span>
            <span className={`font-black tracking-wider text-steel-400 ${subClass}`}>
              ON WHEELS
            </span>
          </div>
          <span className={`font-semibold tracking-widest uppercase ${taglineClass} ${isDark ? 'text-titanium' : 'text-secondary'} mt-0.5`}>
            Door Step Car Service &amp; Repair
          </span>
        </div>
      )}
    </div>
  );
}
