import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, ChevronRight, Heart } from 'lucide-react';
import { BUSINESS_INFO, LOCAL_SERVICE_AREAS, buildWhatsAppUrl } from '../data/carServiceData';
import Logo from './Logo';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-deep text-slate-300 border-t border-white/10 pt-16 pb-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Business Branding & Address (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="default" isDark={true} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Hyderabad &amp; Secunderabad's premier doorstep car maintenance, detailing, and repair marketplace. Certified master mechanics, 100% genuine OEM spare parts, and doorstep convenience right at your home or office.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{BUSINESS_INFO.warrantyText}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {['Services', 'Car Brands', 'Spare Parts', 'How It Works', 'Why Us', 'Car Insights', 'Gallery', 'Reviews'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                'Periodic Car Service',
                'Doorstep Foam Wash',
                'Denting & Painting',
                'Car AC Repair',
                'Battery Replacement',
                'Brakes & Suspension',
                'ECU Diagnostics',
              ].map((svc) => (
                <li key={svc}>
                  <button
                    onClick={() => onOpenBooking('', svc)}
                    className="hover:text-white transition-colors text-left flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{svc}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: WhatsApp Direct Booking (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Doorstep Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions or need an urgent breakdown technician? Connect instantly with our service advisor on WhatsApp.
            </p>

            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Service on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Local Areas Marquee List */}
        <div className="pt-8 border-t border-white/10 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Covered Neighbourhoods in Secunderabad &amp; Hyderabad:
          </span>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {LOCAL_SERVICE_AREAS.map((a) => (
              <span key={a.id} className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenBooking('', '', a.name)}>
                {a.name} •
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {BUSINESS_INFO.fullName}. All rights reserved.</p>
          <p className="flex items-center space-x-1 text-slate-400">
            <span>Precision doorstep automotive maintenance</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
