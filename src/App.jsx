import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import BrandGrid from './components/BrandGrid';
import ServiceGrid from './components/ServiceGrid';
import PartsGrid from './components/PartsGrid';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import GarageGallery from './components/GarageGallery';
import CarInsights from './components/CarInsights';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState('Maruti Suzuki');
  const [activeService, setActiveService] = useState('Periodic Car Service');

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
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Next-Gen Marquee Ticker */}
        <MarqueeTicker />

        {/* 2. Car Brands Grid */}
        <BrandGrid onSelectBrand={(brand) => handleOpenBooking(brand, '')} />

        {/* 3. Service Categories Grid */}
        <ServiceGrid onSelectService={(service) => handleOpenBooking('', service)} />

        {/* 4. Spare Parts Catalog */}
        <PartsGrid onSelectPart={(partName) => handleOpenBooking('', `Genuine Part: ${partName}`)} />

        {/* 5. How It Works */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* Expert Car Insights & Repair Guide */}
        <CarInsights onOpenBooking={handleOpenBooking} />

        {/* 7. Garage & Mechanical Photo Gallery Album */}
        <GarageGallery onOpenBooking={handleOpenBooking} />

        {/* 8. Service Coverage Areas */}
        <ServiceArea onOpenBooking={handleOpenBooking} />

        {/* 8. Testimonials & Social Proof */}
        <Testimonials onOpenBooking={handleOpenBooking} />
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
