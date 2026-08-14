import React from 'react';

/**
 * The Garage On Wheels — Official Business Brand Logo Component
 * Incorporates the verified mechanic badge emblem with modern luxury showroom typography.
 */
export default function Logo({ size = 'default', className = '', isDark = false }) {
  const isCompact = size === 'compact';
  const logoHeight = isCompact ? 'h-9 w-9' : 'h-11 w-11';

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Official Mechanic & Wrench Business Logo Emblem */}
      <div className={`relative shrink-0 ${logoHeight} rounded-full overflow-hidden bg-white p-0.5 shadow-sm border border-border transition-transform duration-300 group-hover:scale-105`}>
        <img
          src="/images/business_logo.png"
          alt="The Garage On Wheels Official Business Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight select-none">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-extrabold tracking-tight font-sans ${isCompact ? 'text-sm' : 'text-base sm:text-lg'} ${isDark ? 'text-white' : 'text-primary'}`}>
            THE GARAGE
          </span>
          <span className={`font-bold tracking-wider text-brand-500 ${isCompact ? 'text-xs' : 'text-xs sm:text-sm'}`}>
            ON WHEELS
          </span>
        </div>
        <span className={`font-medium tracking-widest uppercase text-secondary ${isCompact ? 'text-[8px]' : 'text-[9px] sm:text-[10px]'}`}>
          Doorstep Car Service &amp; Repair
        </span>
      </div>
    </div>
  );
}
