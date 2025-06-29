
import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectCategory from "../components/ProjectCategory";
import AnimatedBackground from "../components/AnimatedBackground";
import Navigation from "../components/Navigation";
import { AppSidebar } from "../components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | string>('home');

  const handleNavigateToCategory = (category: string) => {
    setCurrentView(category);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <SidebarProvider>
      <div className="relative min-h-screen bg-gray-900 overflow-x-hidden w-full">
        <AnimatedBackground />
        <Navigation />
        <AppSidebar />
        <main className="relative z-10 w-full">
          {currentView === 'home' ? (
            <>
              <Hero onNavigateToCategory={handleNavigateToCategory} />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          ) : (
            <ProjectCategory category={currentView} onBack={handleBackToHome} />
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
