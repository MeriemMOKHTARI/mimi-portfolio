
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Determine current section
      const sections = ["home", "about", "projects", "skills", "certificates", "contact"];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && scrollPosition >= section.offsetTop - 200) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Portfolio" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "CV" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!scrolled) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-pink-400/20"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-lg sm:text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            MOKHTARI MERIEM
          </motion.div>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 relative px-3 lg:px-4 py-2 ${
                  currentSection === item.id 
                    ? "text-pink-400 bg-pink-400/10 rounded-lg" 
                    : "text-gray-300 hover:text-pink-400"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
