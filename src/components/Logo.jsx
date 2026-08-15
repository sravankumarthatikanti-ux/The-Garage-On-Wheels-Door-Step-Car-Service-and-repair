import React from 'react';

/**
 * The Garage On Wheels — Official Brand Logo Component
 * Renders the official mechanic badge emblem and brand typography with crisp scaling.
 */
export default function Logo({ 
  size = 'default', 
  className = '', 
  isDark = false,
  showText = true 
}) {
  let emblemClass = 'h-11 w-11';
  let titleClass = 'text-base sm:text-lg';
  let subClass = 'text-xs sm:text-sm';
  let taglineClass = 'text-[9px] sm:text-[10px]';

  if (size === 'compact') {
    emblemClass = 'h-9 w-9';
    titleClass = 'text-sm';
    subClass = 'text-xs';
    taglineClass = 'text-[8px]';
  } else if (size === 'large') {
    emblemClass = 'h-14 w-14 sm:h-16 sm:w-16';
    titleClass = 'text-xl sm:text-2xl';
    subClass = 'text-sm sm:text-base';
    taglineClass = 'text-xs sm:text-sm';
  } else if (size === 'hero') {
    emblemClass = 'h-24 w-24 sm:h-28 sm:w-28 shadow-2xl';
    titleClass = 'text-2xl sm:text-4xl';
    subClass = 'text-lg sm:text-2xl';
    taglineClass = 'text-xs sm:text-sm';
  }

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Official Business Logo Emblem */}
      <div className={`relative shrink-0 ${emblemClass} rounded-2xl overflow-hidden bg-white p-1 shadow-md border border-white/20 transition-all duration-300 group-hover:scale-105`}>
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
            <span className={`font-extrabold tracking-tight font-sans ${titleClass} ${isDark ? 'text-white' : 'text-slate-900'}`}>
              THE GARAGE
            </span>
            <span className={`font-bold tracking-wider text-brand-500 ${subClass}`}>
              ON WHEELS
            </span>
          </div>
          <span className={`font-semibold tracking-wider uppercase ${taglineClass} ${isDark ? 'text-slate-300' : 'text-slate-600'} mt-0.5`}>
            Door Step Car Service &amp; Repair
          </span>
        </div>
      )}
    </div>
  );
}
