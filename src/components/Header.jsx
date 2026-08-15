import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';
import Logo from './Logo';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'HOW IT WORKS', href: '#how-it-works' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'PARTS', href: '#parts' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl({ serviceName: "Doorstep Consultation" });
    window.open(url, '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0D1014]/98 backdrop-blur-2xl border-b border-titanium/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)] ${
        isScrolled ? 'py-3 border-ice/25' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <div className="flex items-center">
            <Logo isDark={true} size="default" />
          </div>

          {/* Desktop Navigation Links with Stylish Hover Indicator */}
          <nav className="hidden lg:flex items-center space-x-1.5 p-1 rounded-full bg-charcoal/60 border border-titanium/15 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold text-titanium/90 hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-200 tracking-widest font-heading hover:bg-graphite/80 hover:text-ice relative group flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-ice opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#8FD8FF]" />
              </a>
            ))}
          </nav>

          {/* Right Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="hidden xl:flex items-center space-x-2 text-xs font-bold text-titanium hover:text-white px-3.5 py-2 rounded-full transition-all border border-titanium/20 bg-charcoal/50 hover:border-cyan/40 hover:shadow-[0_0_15px_rgba(157,231,229,0.2)] font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 btn-sport-primary font-black text-xs uppercase tracking-wider rounded-btn shadow-md flex items-center space-x-2 active:scale-95"
            >
              <span>BOOK SERVICE</span>
              <ArrowRight className="w-3.5 h-3.5 btn-arrow text-ice" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2.5 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3.5 py-2 btn-sport-primary text-white font-black text-[11px] uppercase tracking-wider rounded-btn shadow-sm"
            >
              BOOK
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-btn bg-charcoal text-titanium hover:text-white border border-titanium/25 transition-colors active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-ice" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation (Cockpit Style) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-graphite/98 border-b border-ice/25 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-titanium hover:text-ice py-2.5 px-3 rounded-card hover:bg-charcoal/60 border border-transparent hover:border-ice/20 tracking-wider font-heading flex items-center justify-between transition-all"
              >
                <span>{link.name}</span>
                <span className="text-ice text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2.5 border-t border-titanium/15">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 btn-sport-primary font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2"
            >
              <span>BOOK A SERVICE</span>
              <ArrowRight className="w-4 h-4 text-ice btn-arrow" />
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full py-3.5 btn-sport-secondary font-bold text-xs uppercase tracking-widest rounded-btn flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-cyan" />
              <span>WHATSAPP US</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
