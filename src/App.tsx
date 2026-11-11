import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AmbientBackground } from './components/layout/AmbientBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { VenturesBento } from './components/sections/VenturesBento';
import { TechEngine } from './components/sections/TechEngine';
import { CaseStudies } from './components/sections/CaseStudies';
import { RoiCalculator } from './components/sections/RoiCalculator';
import { MilestonesTimeline } from './components/sections/MilestonesTimeline';
import { TestimonialsMarquee } from './components/sections/TestimonialsMarquee';
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

  const handleSelectScope = (name: string, price: number) => {
    setPreselectedScope({ name, price });
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-obsidian-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-500 selection:text-white dark:selection:bg-gold-500 dark:selection:text-obsidian-950 antialiased overflow-x-hidden transition-colors duration-300">
      {/* Ambient Lighting & Mouse Spotlight Background */}
      <AmbientBackground />

      {/* Navigation Bar with Theme Toggle */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Flagship Hero Section & Live Metrics */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Flagship Ventures Bento Grid Showcase */}
        <VenturesBento />

        {/* 3. The Solo Founder Tech & Growth Engine */}
        <TechEngine />

        {/* 4. Proven Case Studies & High-Impact Client Results */}
        <CaseStudies />

        {/* 5. Interactive Project Scope & ROI Estimator */}
        <RoiCalculator onSelectScope={handleSelectScope} />

        {/* 6. Milestones & Proven Trajectory Timeline */}
        <MilestonesTimeline />

        {/* 7. Infinite Testimonials & Social Proof Marquee */}
        <TestimonialsMarquee />
      </main>

      {/* High-Conversion Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Strategic Advisory / Scope Booking Modal */}
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
