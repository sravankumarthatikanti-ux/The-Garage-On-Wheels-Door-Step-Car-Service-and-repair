import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-graphite/90 backdrop-blur-xl border-b border-titanium/15 shadow-2xl py-3' 
          : 'bg-gradient-to-b from-graphite/95 via-graphite/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Component */}
          <div className="flex items-center">
            <Logo isDark={true} size="default" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-titanium/90 hover:text-white transition-colors tracking-widest font-mono py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-ice to-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Desktop CTA Action */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="hidden xl:flex items-center space-x-2 text-xs font-bold text-titanium hover:text-white px-3.5 py-2 rounded-btn transition-colors border border-titanium/20 hover:border-ice/50 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-cyan" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 btn-sport-primary font-black text-xs uppercase tracking-wider rounded-btn flex items-center space-x-1.5 active:scale-95"
            >
              <span>BOOK A SERVICE</span>
              <ArrowRight className="w-3.5 h-3.5 btn-arrow text-ice" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3.5 py-2 btn-sport-primary font-black text-[11px] uppercase tracking-wider rounded-btn shadow-sm"
            >
              BOOK
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-btn bg-charcoal text-titanium hover:text-white border border-titanium/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-graphite/98 border-b border-titanium/20 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold text-white hover:text-ice tracking-wider font-mono py-2 border-b border-titanium/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 btn-sport-primary font-black text-xs uppercase tracking-widest rounded-btn flex items-center justify-center space-x-2"
            >
              <span>BOOK A SERVICE →</span>
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
