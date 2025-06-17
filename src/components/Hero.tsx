
import { motion } from "framer-motion";
import { Code, Shield, Smartphone, Brain } from "lucide-react";

const Hero = () => {
  const roles = [
    { icon: Code, text: "Web Developer" },
    { icon: Smartphone, text: "Mobile Developer" },
    { icon: Shield, text: "Cybersecurity" },
    { icon: Brain, text: "AI Enthusiast" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Systems Student passionate about creating innovative solutions
            across web, mobile, cybersecurity, and AI domains.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.text}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <role.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-gray-300 font-medium">{role.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
