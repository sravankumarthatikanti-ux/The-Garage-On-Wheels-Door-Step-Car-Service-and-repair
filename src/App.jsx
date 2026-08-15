import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServiceGrid from './components/ServiceGrid';
import CarNeedSelector from './components/CarNeedSelector';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import PartsFinder from './components/PartsFinder';
import ProgressiveBooking from './components/ProgressiveBooking';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import SmartAssistant from './components/SmartAssistant';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState('Maruti Suzuki');
  const [activeService, setActiveService] = useState('General Service');

  const handleOpenBooking = (brand = '', service = '') => {
    if (brand) setActiveBrand(brand);
    if (service) setActiveService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-surface text-primary flex flex-col font-sans selection:bg-ice selection:text-graphite pb-16 lg:pb-0">
      
      {/* 1. Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections Flow */}
      <main className="flex-grow">
        
        {/* 2. Cinematic Sporty Hero: CAR CARE. WHEREVER YOU ARE. */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Trust Strip: Doorstep Service • Professional Care • Easy Booking */}
        <TrustStrip />

        {/* 4. Precision Car Care: Multi-Color Soft Paint Accents & Swipeable Carousel */}
        <ServiceGrid onSelectService={(service) => handleOpenBooking('', service)} />

        {/* 5. Interactive Diagnosis: WHAT DOES YOUR CAR NEED? */}
        <CarNeedSelector onOpenBooking={handleOpenBooking} />

        {/* 6. How It Works: 01 BOOK • 02 WE COME TO YOU • 03 GET BACK ON THE ROAD */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 7. Car Care That Comes To You: About Section */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 8. More Than A Garage: Why Us Section */}
        <WhyChooseUs />

        {/* 9. Find Your Car Part: 4-Step Discovery with Color Progression */}
        <PartsFinder onOpenBooking={handleOpenBooking} />

        {/* 10. Your Car Deserves Better Care: Progressive Booking */}
        <ProgressiveBooking />

        {/* 11. Contact: Verified Call / WhatsApp / Location */}
        <ContactSection onOpenBooking={handleOpenBooking} />

      </main>

      {/* 12. Premium Footer with Soft Champagne & Ice Blue Lighting */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 13. Mobile Sticky Action Bar: CALL | WHATSAPP | BOOK */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* 14. Smart Service Assistant */}
      <SmartAssistant onOpenBooking={handleOpenBooking} />

      {/* Contextual Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialBrand={activeBrand}
        initialService={activeService}
      />

    </div>
  );
}
