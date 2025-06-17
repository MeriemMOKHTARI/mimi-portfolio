
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              As a dedicated Computer Systems student, I'm passionate about leveraging technology 
              to create meaningful solutions. My journey spans across multiple domains, allowing 
              me to approach problems from different perspectives.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From crafting responsive web applications to developing secure mobile solutions, 
              I thrive on challenges that push the boundaries of what's possible. My interest 
              in cybersecurity ensures that security is always at the forefront of my development process.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently exploring the fascinating world of AI and machine learning, I'm excited 
              about the potential to integrate intelligent solutions into everyday applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-xl"></div>
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">🎓 Computer Systems Student</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">💻 Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">🛡️ Security Focused</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">🤖 AI Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
