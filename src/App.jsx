import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServiceGrid from './components/ServiceGrid';
import CarNeedSelector from './components/CarNeedSelector';
import HowItWorks from './components/HowItWorks';
import EditorialStatement from './components/EditorialStatement';
import GarageGallery from './components/GarageGallery';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import PartsFinder from './components/PartsFinder';
import ProgressiveBooking from './components/ProgressiveBooking';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import SmartAssistant from './components/SmartAssistant';
import FloatingBookCTA from './components/FloatingBookCTA';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState('Maruti Suzuki');
  const [activeService, setActiveService] = useState('General Service');
  const [activeIssue, setActiveIssue] = useState('');

  const handleOpenBooking = (brand = '', service = '', issue = '') => {
    if (brand) setActiveBrand(brand);
    if (service) setActiveService(service);
    if (issue) setActiveIssue(issue);
    else setActiveIssue('');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080A0D] text-white flex flex-col font-sans selection:bg-ice selection:text-graphite pb-16 lg:pb-0">
      
      {/* 1. Dynamic Scroll-Aware Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections Flow */}
      <main className="flex-grow">
        
        {/* 2. Cinematic Automotive Hero: CAR CARE. WHEREVER YOU ARE. */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Trust Strip: Doorstep Service • Professional Care • Easy Booking */}
        <TrustStrip />

        {/* 4. Precision Car Care: Master Service Card System */}
        <ServiceGrid onSelectService={(service) => handleOpenBooking('', service)} />

        {/* 5. Interactive Diagnosis: WHAT DOES YOUR CAR NEED? */}
        <CarNeedSelector onOpenBooking={handleOpenBooking} />

        {/* 6. How It Works: 4-Step Cinematic Journey */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 7. Large Typographic Statement: YOUR CAR. YOUR LOCATION. OUR EXPERTISE. */}
        <EditorialStatement onOpenBooking={handleOpenBooking} />

        {/* 8. Automotive Photography Gallery with Filter Tabs & Lightbox */}
        <GarageGallery onOpenBooking={handleOpenBooking} />

        {/* 9. Car Care That Comes To You: About Section */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 10. More Than A Garage: Why Us Section */}
        <WhyChooseUs />

        {/* 11. Find Your Car Part: 4-Step Discovery */}
        <PartsFinder onOpenBooking={handleOpenBooking} />

        {/* 12. Progressive Booking: READY TO TAKE BETTER CARE OF YOUR CAR? */}
        <ProgressiveBooking />

        {/* 13. Contact: Verified Call / WhatsApp / Location */}
        <ContactSection onOpenBooking={handleOpenBooking} />

      </main>

      {/* 14. Master Dark Automotive Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 15. Mobile Sticky Action Bar: CALL | WHATSAPP | BOOK */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* 16. Floating Book CTA (Desktop when scrolled) */}
      <FloatingBookCTA onOpenBooking={handleOpenBooking} />

      {/* 17. Smart Service Assistant */}
      <SmartAssistant onOpenBooking={handleOpenBooking} />

      {/* Contextual Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialBrand={activeBrand}
        initialService={activeService}
        initialIssue={activeIssue}
      />

    </div>
  );
}
