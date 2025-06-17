
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block border-2 border-white px-12 py-6 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-[0.2em]">
              PORTFOLIO
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an Artificial Intelligence & Data Science Engineer, PhD Candidate, and Mobile Developer, 
              having graduated from ESI-SBA. With a strong background in AI, data science, and mobile development, 
              as well as expertise in UI/UX design, I've successfully managed various academic and professional projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in creating innovative solutions that bridge the gap between cutting-edge technology 
              and user-centered design. I specialize in developing secure, scalable applications while ensuring 
              the highest standards of cybersecurity.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing advanced research in AI and machine learning, I'm excited about the potential 
              to integrate intelligent solutions into real-world applications that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-pink-400/30">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-full blur-xl"></div>
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">🎓 PhD Candidate - AI & Data Science</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">💻 Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">📱 Mobile App Developer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">🛡️ Cybersecurity Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">🎨 UI/UX Designer</span>
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
