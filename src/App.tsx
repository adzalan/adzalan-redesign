import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AmbientBackground } from './components/layout/AmbientBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { VirtualHQSection } from './components/sections/VirtualHQSection';
import { ProductionShowcase } from './components/sections/ProductionShowcase';
import { SaaSEcosystem } from './components/sections/SaaSEcosystem';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { AdvisoryModal } from './components/modals/AdvisoryModal';

function PortfolioApp() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedScope, setPreselectedScope] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const handleOpenBooking = () => {
    setPreselectedScope(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-obsidian-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-500 selection:text-white dark:selection:bg-gold-500 dark:selection:text-obsidian-950 antialiased overflow-x-hidden transition-colors duration-300">
      {/* Ambient Lighting & Mouse Spotlight Background */}
      <AmbientBackground />

      {/* Navigation Bar with Light/Dark/System Theme Toggle */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections mirroring adzalan.com with modern luxury theme */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Flagship Hero: Engineering Digital Foundations */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Live Platform Preview: The Virtual Headquarters (app.adzalan.com) */}
        <VirtualHQSection />

        {/* 3. Live Client Production Showcase: Umbi Kasih Retreat (umbikasih.com) */}
        <ProductionShowcase />

        {/* 4. Vertical SaaS: The Adzalan Core Ecosystem */}
        <SaaSEcosystem />

        {/* 5. Consulting & Delivery: Custom Engineering & Solutions */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 6. About Me & Technical Skills (Adzalan Yanggang) */}
        <AboutSection />

        {/* 7. Connect: Initiate a Conversation & Contact Form */}
        <ContactSection />
      </main>

      {/* Clean Modern Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Advisory & Inquiry Modal */}
      <AdvisoryModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedScope={preselectedScope}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
