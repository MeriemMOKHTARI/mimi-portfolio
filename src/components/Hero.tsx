
import { motion } from "framer-motion";
import { Code, Shield, Smartphone, Brain, ArrowDown } from "lucide-react";

const Hero = () => {
  const roles = [
    { icon: Code, text: "Web Developer" },
    { icon: Smartphone, text: "Mobile Developer" },
    { icon: Shield, text: "Cybersecurity" },
    { icon: Brain, text: "AI Enthusiast" },
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('about');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MOKHTARI MERIEM HADJIA
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "I'm Your Technical Partner: Computer Engineering, Mobile & Web Development, 
            and UI/UX Design Expert, AI and Cyber Security Enthusiast..."
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.text}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <role.icon className="w-10 h-10 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 font-medium text-lg">{role.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToPortfolio}
              className="w-16 h-16 rounded-full border-2 border-pink-400/50 flex items-center justify-center hover:border-pink-400 transition-all duration-300 mx-auto group"
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
              <ArrowDown className="w-6 h-6 text-pink-400 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
