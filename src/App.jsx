import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import AboutSection from './components/AboutSection';
import ServiceGrid from './components/ServiceGrid';
import BrandGrid from './components/BrandGrid';
import PartsGrid from './components/PartsGrid';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CarInsights from './components/CarInsights';
import GarageGallery from './components/GarageGallery';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState('Maruti Suzuki');
  const [activeService, setActiveService] = useState('General Service');

  const handleOpenBooking = (brand = '', service = '', area = '') => {
    if (brand) setActiveBrand(brand);
    if (service) setActiveService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-surface text-primary flex flex-col font-sans">
      {/* Header Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Prominent Official Logo */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Brand Marquee Ticker */}
        <MarqueeTicker />

        {/* 2. About Section: CAR CARE THAT COMES TO YOU */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 3. Service Categories Grid (8 Core Services) */}
        <ServiceGrid onSelectService={(service) => handleOpenBooking('', service)} />

        {/* 4. Car Brands Grid */}
        <BrandGrid onSelectBrand={(brand) => handleOpenBooking(brand, '')} />

        {/* 5. Spare Parts Catalog */}
        <PartsGrid onSelectPart={(partName) => handleOpenBooking('', `Genuine Part: ${partName}`)} />

        {/* 6. How It Works (4 Steps to Doorstep Care) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 7. Why Choose Us (6 Trust Pillars) */}
        <WhyChooseUs />

        {/* 8. Expert Car Insights & Repair Standards */}
        <CarInsights onOpenBooking={handleOpenBooking} />

        {/* 9. Garage & Mechanical Photo Gallery Album */}
        <GarageGallery onOpenBooking={handleOpenBooking} />

        {/* 10. Service Coverage Areas */}
        <ServiceArea onOpenBooking={handleOpenBooking} />

        {/* 11. Testimonials & Social Proof */}
        <Testimonials onOpenBooking={handleOpenBooking} />

        {/* 12. High-Impact Booking CTA: NEED CAR SERVICE? WE COME TO YOU */}
        <BookingCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Site Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* Interactive WhatsApp Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialBrand={activeBrand}
        initialService={activeService}
      />
    </div>
  );
}
