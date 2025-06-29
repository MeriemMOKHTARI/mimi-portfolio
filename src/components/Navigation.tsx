
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Determine current section
      const sections = ["home", "about", "projects", "skills", "contact"];
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
    { id: "contact", label: "Contact" },
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
          
          {/* Desktop Navigation - Always visible on larger screens */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 relative px-4 py-2 ${
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

          {/* Medium screens - Show some items + sidebar trigger */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.slice(0, 3).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 relative px-3 py-2 ${
                  currentSection === item.id 
                    ? "text-pink-400 bg-pink-400/10 rounded-lg" 
                    : "text-gray-300 hover:text-pink-400"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
            <SidebarTrigger className="text-gray-300 hover:text-pink-400 transition-colors duration-300 p-2">
              <Menu className="w-6 h-6" />
            </SidebarTrigger>
          </div>

          {/* Mobile - Only sidebar trigger */}
          <div className="md:hidden">
            <SidebarTrigger className="text-gray-300 hover:text-pink-400 transition-colors duration-300 p-2">
              <Menu className="w-6 h-6" />
            </SidebarTrigger>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
