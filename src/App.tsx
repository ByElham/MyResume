/**
 * @fileoverview Root application component orchestrator for Elham Rivaz's Developer Portfolio.
 * Initializes context providers (Theme, Sakura, Language) and mounts modular sections.
 * @author Elham Rivaz & AI Studio Team
 */

/**
 * @fileoverview Root application component orchestrator for Elham Rivaz's Developer Portfolio.
 * Initializes context providers (Theme, Sakura, Language) and mounts modular sections.
 * @author Elham Rivaz & AI Studio Team
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SakuraProvider } from './context/SakuraContext';
import { useScrollbarActivity } from './hooks/useScrollbarActivity';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { BlogSection } from './components/sections/BlogSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { SakuraPetalsCanvas } from './components/ui/SakuraPetalsCanvas';

/**
 * Main inner content component that consumes language direction and scroll hooks.
 */
const PortfolioContent: React.FC = () => {
  const { dir } = useLanguage();
  useScrollbarActivity();

  return (
    <div
      className="min-h-screen flex flex-col bg-primary text-content transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white"
      dir={dir}
    >
      {/* Falling Sakura Petals overlay when active */}
      <SakuraPetalsCanvas />

      {/* Sticky frosted Navbar with Bespoke Mobile Drawer */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

/**
 * Root Application entry wrapping the app with Global Providers.
 */
export default function App() {
  return (
    <ThemeProvider>
      <SakuraProvider>
        <LanguageProvider>
          <PortfolioContent />
        </LanguageProvider>
      </SakuraProvider>
    </ThemeProvider>
  );
}


