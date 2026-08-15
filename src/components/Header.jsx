import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';
import Logo from './Logo';
import AdvertisingBar from './AdvertisingBar';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'how-it-works', 'gallery', 'why-us', 'parts', 'booking', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', id: 'home' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'HOW IT WORKS', href: '#how-it-works', id: 'how-it-works' },
    { name: 'GALLERY', href: '#gallery', id: 'gallery' },
    { name: 'WHY US', href: '#why-us', id: 'why-us' },
    { name: 'PARTS', href: '#parts', id: 'parts' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl({ serviceName: "Doorstep Consultation" });
    window.open(url, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. TOP ADVERTISING / ADVISORY TICKER BAR WITH SPECIFIC INFORMATION */}
      <AdvertisingBar onOpenBooking={onOpenBooking} />

      {/* 2. MAIN GLASS NAVBAR */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080A0D]/95 backdrop-blur-[18px] border-b border-[#252C33] shadow-[0_8px_30px_rgba(0,0,0,0.7)] py-2.5' 
            : 'bg-[#080A0D]/85 backdrop-blur-[18px] border-b border-[#252C33]/60 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Official Brand Logo */}
            <div className="flex items-center">
              <Logo isDark={true} size="default" />
            </div>

            {/* Desktop Navigation Links with Scroll-Aware Active State */}
            <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-[#101419]/90 border border-[#252C33] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-[11px] font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 tracking-widest font-heading flex items-center gap-1.5 ${
                      isActive 
                        ? 'bg-[#181E24] text-ice border border-ice/30 shadow-[0_0_10px_rgba(143,216,255,0.2)]' 
                        : 'text-[#F1F3F5] hover:text-white hover:bg-[#181E24]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-ice shadow-[0_0_6px_#8FD8FF]" />}
                  </a>
                );
              })}
            </nav>

            {/* Right Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-3.5">
              <a
                href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                className="hidden xl:flex items-center space-x-2 text-xs font-bold text-[#A7ADB4] hover:text-white px-3.5 py-2 rounded-full transition-all border border-[#252C33] bg-[#101419] hover:border-cyan/40 hover:shadow-[0_0_15px_rgba(157,231,229,0.2)] font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span>{BUSINESS_INFO.formattedPhone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 btn-sport-gradient font-black text-xs uppercase tracking-wider rounded-btn shadow-md flex items-center space-x-2 active:scale-95"
              >
                <span>BOOK A SERVICE</span>
                <ArrowRight className="w-3.5 h-3.5 btn-arrow text-graphite" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center space-x-2.5 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="sm:hidden px-3.5 py-2 btn-sport-gradient font-black text-[11px] uppercase tracking-wider rounded-btn shadow-sm"
              >
                BOOK
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-btn bg-[#181E24] text-[#F1F3F5] hover:text-white border border-[#252C33] transition-colors active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-ice" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#080A0D]/98 border-b border-[#252C33] px-6 py-6 space-y-4 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-[#F1F3F5] hover:text-ice py-2.5 px-3 rounded-card hover:bg-[#181E24] border border-transparent hover:border-ice/20 tracking-wider font-heading flex items-center justify-between transition-all"
              >
                <span>{link.name}</span>
                <span className="text-ice text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2.5 border-t border-[#252C33]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-btn shadow-md flex items-center justify-center space-x-2"
            >
              <span>BOOK A SERVICE</span>
              <ArrowRight className="w-4 h-4 text-graphite btn-arrow" />
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full py-3.5 btn-whatsapp font-bold text-xs uppercase tracking-widest rounded-btn flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-whatsapp" />
              <span>WHATSAPP US</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
