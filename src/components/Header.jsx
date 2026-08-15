import React, { useState, useEffect } from 'react';
import { MessageSquare, MapPin, Menu, X, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data/carServiceData';

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
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'HOW IT WORKS', href: '#how-it-works' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-graphite/95 backdrop-blur-md border-b border-titanium/10 shadow-2xl py-2.5' 
        : 'bg-graphite/90 backdrop-blur-md border-b border-white/5 py-3'
    }`}>
      {/* Top Banner Notice */}
      <div className="hidden lg:block border-b border-white/5 py-1 px-4 text-xs font-medium bg-graphite-deep text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-steel-400" />
            <strong className="text-white font-bold">THE GARAGE ON WHEELS</strong> – Door Step Car Service &amp; Repair in Tirumalagiri, Secunderabad &amp; Hyderabad
          </span>
          <div className="flex items-center gap-5 text-[11px] text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-steel-400" /> Tirumalagiri Cantonment Hub
            </span>
            <a 
              href={`tel:${BUSINESS_INFO.whatsappNumber}`} 
              className="flex items-center gap-1 hover:text-steel-400 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-steel-400" /> {BUSINESS_INFO.formattedPhone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center">
            <Logo size={isScrolled ? 'compact' : 'default'} isDark={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-wider text-titanium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors py-1 relative hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-steel-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-xs tracking-wider uppercase rounded-btn shadow-md hover:shadow-steel-glow transition-all flex items-center space-x-2 active:scale-95 border border-steel-300"
            >
              <span>BOOK A SERVICE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-2 bg-steel-400 text-graphite text-xs font-black tracking-wider uppercase rounded-btn flex items-center space-x-1 shadow-sm"
            >
              <span>BOOK</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-btn text-white hover:bg-charcoal transition-colors border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-graphite border-b border-titanium/15 px-5 pt-4 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-btn text-sm font-bold tracking-wider text-titanium hover:bg-charcoal hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-steel-400 hover:bg-steel-500 text-graphite font-black text-sm uppercase tracking-wider rounded-btn flex items-center justify-center space-x-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>BOOK A SERVICE (WHATSAPP)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
