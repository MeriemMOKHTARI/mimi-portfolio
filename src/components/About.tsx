
import { motion } from "framer-motion";
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
                  <h5 className="font-semibold text-pink-400 text-base sm:text-lg">Mobile and Web Developer</h5>
                  <p className="text-gray-400 text-sm sm:text-base">at DATALOCK company (Oct 2024 - Present)</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
                  <h5 className="font-semibold text-pink-400 text-base sm:text-lg">Cybersecurity Intern</h5>
                  <p className="text-gray-400 text-sm sm:text-base">Digital Forensics & Blue Teaming (2023-2024)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I'm always excited to take on new challenges and collaborate on innovative projects. Whether you need 
                mobile app development, web solutions, cybersecurity consulting, or AI implementation, I'm here to help 
                bring your vision to life.
              </p>
              
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm sm:text-base">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm sm:text-base">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm sm:text-base">Consulting and technical expertise</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-pink-400/30 shadow-2xl shadow-pink-400/20">
                <img 
                  src="/lovable-uploads/me.jpg" 
                  alt="Mokhtari Meriem" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">Based in Algeria</p>
                    <p className="text-xs sm:text-sm opacity-90">Available for remote work worldwide</p>
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
