
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
            <h3 className="text-3xl font-bold text-pink-400 mb-6">Who I am?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a 4th-year Computer Systems Engineering student at the Higher School of Computer Science 
              and a Mobile & Web Developer at DATALOCK company, with a strong passion for cybersecurity 
              experienced in digital forensics, blue teaming, and detection engineering—as well as a keen 
              interest in networks, AI, and UI/UX design.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I've completed several academic projects, freelance work, and internships. My diverse experience 
              and passion for technology make me a valuable asset for your next project—let's collaborate to 
              turn your ideas into exceptional digital solutions.
            </p>
            
            <div className="space-y-4 mt-8">
              <h4 className="text-xl font-bold text-white">My Experience</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <span className="text-pink-300 font-semibold">Mobile and Web Developer</span>
                    <span className="text-gray-400"> at DATALOCK (Oct 2024 - Present)</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <span className="text-pink-300 font-semibold">Cybersecurity Detection Engineering Intern</span>
                    <span className="text-gray-400"> at Realistic Security (Sep - Oct 2024)</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <span className="text-pink-300 font-semibold">IT Network and Systems Intern</span>
                    <span className="text-gray-400"> at Sonelgaz Company (Aug - Sep 2024)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-pink-400/30">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="w-64 h-80 bg-gradient-to-br from-pink-400/20 to-slate-700/50 rounded-xl flex items-center justify-center border border-pink-400/30">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616c96b4c5a?w=300&h=400&fit=crop&crop=face" 
                    alt="Meriem Mokhtari" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-white">Meriem Mokhtari</h3>
                  <p className="text-pink-400">Computer Systems Engineer</p>
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
