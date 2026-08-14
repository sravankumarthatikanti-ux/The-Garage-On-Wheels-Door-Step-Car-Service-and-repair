import React, { useState, useEffect } from 'react';
import { MessageSquare, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Car Brands', href: '#brands' },
    { name: 'Spare Parts', href: '#parts' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Car Insights', href: '#insights' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-premium py-2.5' 
        : 'bg-charcoal-deep/90 backdrop-blur-md border-b border-white/5 py-3'
    }`}>
      {/* Top Banner Notice */}
      <div className={`hidden lg:block border-b py-1.5 px-4 text-xs font-medium transition-colors ${
        isScrolled 
          ? 'bg-surface-soft border-border text-secondary' 
          : 'bg-charcoal border-white/10 text-slate-300'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
            Doorstep Car Service &amp; Repair in Tirumalagiri, Secunderabad &amp; Hyderabad
          </span>
          <div className="flex items-center gap-5 text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-400" /> Tirumalagiri Hub
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Doorstep Slots Available Today
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size={isScrolled ? 'compact' : 'default'} isDark={!isScrolled} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold tracking-wide uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 hover:after:w-full after:transition-all ${
                  isScrolled ? 'text-secondary hover:text-brand-500' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all flex items-center space-x-2 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book a Service</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-2 bg-brand-500 text-white text-xs font-bold rounded-btn flex items-center space-x-1 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-btn transition-colors ${
                isScrolled ? 'text-primary hover:bg-surface-soft' : 'text-white hover:bg-charcoal'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border px-5 pt-4 pb-6 space-y-3 mt-2 shadow-premium">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-btn text-sm font-semibold text-primary hover:bg-surface-soft hover:text-brand-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-border flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-brand-500 hover:bg-brand-700 text-white font-bold text-sm rounded-btn flex items-center justify-center space-x-2 shadow-premium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Doorstep Service on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
