
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
    // Scroll to top immediately when switching to category view
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    // Scroll to top immediately when returning to home
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Effect to ensure immediate display of category content
  useEffect(() => {
    if (currentView !== 'home') {
      // Force re-render and immediate display
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  return (
    <SidebarProvider>
      <div className="relative min-h-screen bg-gray-900 overflow-x-hidden w-full">
        <AnimatedBackground />
        <Navigation />
        
        {/* Sidebar only for mobile and tablet when needed */}
        <div className="md:hidden">
          <AppSidebar onNavigateToCategory={handleNavigateToCategory} />
        </div>
        
        <main className="relative z-10 w-full">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Hero onNavigateToCategory={handleNavigateToCategory} />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key={currentView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCategory category={currentView} onBack={handleBackToHome} />
            </motion.div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
