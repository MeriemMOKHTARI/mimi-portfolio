
import { motion } from "framer-motion";
import { Code, Shield, Smartphone, Brain, ArrowDown } from "lucide-react";

interface HeroProps {
  onNavigateToCategory: (category: string) => void;
}

const Hero = ({ onNavigateToCategory }: HeroProps) => {
  const roles = [
    { icon: Smartphone, text: "Mobile Developer", category: "mobile" },
    { icon: Code, text: "Web Developer", category: "web" },
    { icon: Shield, text: "Cybersecurity", category: "cybersecurity" },
    { icon: Brain, text: "AI Enthusiast", category: "ai" },
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('about');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-16 sm:pt-20">
      <div className="container mx-auto text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-wide px-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MOKHTARI MERIEM HADJIA
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light italic px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "I'm Your Technical Partner: Computer Engineering, Mobile & Web Development, Cyber Security & AI Enthusiast and UI/UX Design Expert ..."
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-12 sm:mt-16 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.text}
                className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center text-center min-h-[160px]"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                onClick={() => onNavigateToCategory(role.category)}
              >
                <role.icon className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 font-medium text-base sm:text-lg">{role.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToPortfolio}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-pink-400/50 flex items-center justify-center hover:border-pink-400 transition-all duration-300 mx-auto group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
