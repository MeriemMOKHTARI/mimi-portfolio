
import { inView, motion } from "framer-motion";
import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="border-2 border-white px-8 sm:px-12 py-4 sm:py-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider">
                PORTFOLIO
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4 sm:mb-6">
                Who I am?
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                I'm a final year Computer Systems Engineering student at the Higher School of Computer Science,
                and a Mobile & Web Developer at DATALOCK company, with a strong passion for cybersecurity
                experienced in digital forensics, blue teaming, and detection engineering as well as a keen
                interest in networks, AI, and UI/UX design.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I've completed several academic projects, freelance work, and internships. My diverse experience
                and passion for technology make me a valuable asset for your next project let's collaborate to
                turn your ideas into exceptional digital solutions.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-xl sm:text-2xl font-bold text-pink-400">My Experience</h4>
              <div className="space-y-4">
                <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
                  <span className="text-xl text-pink-300 font-bold">Mobile and Web Developer</span>
                  <span className="text-lg text-gray-400"> at DATALOCK company (Oct 2024 - Present)</span>
                </div>
                <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
                  <span className="text-xl text-pink-300 font-bold">Cybersecurity Detection Engineering Intern</span>
                  <span className="text-lg text-gray-400"> at Realistic Security company (Sep - Oct 2024)</span>
                </div>
                <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
                  <span className="text-xl text-pink-300 font-bold">IT Network and Systems Intern</span>
                  <span className="text-lg text-gray-400"> at Sonelgaz Company (Aug - Sep 2024)</span>
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
                    src="/assets/images/me.jpg"
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
