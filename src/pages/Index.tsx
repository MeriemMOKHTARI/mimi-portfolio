
import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectCategory from "../components/ProjectCategory";
import AnimatedBackground from "../components/AnimatedBackground";
import Navigation from "../components/Navigation";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | string>('home');

  const handleNavigateToCategory = (category: string) => {
    setCurrentView(category);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        {currentView === 'home' ? (
          <>
            <Hero onNavigateToCategory={handleNavigateToCategory} />
            <About />
            <Skills />
            <Contact />
          </>
        ) : (
          <ProjectCategory category={currentView} onBack={handleBackToHome} />
        )}
      </main>
    </div>
  );
};

export default Index;
