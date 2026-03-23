
import { motion } from "framer-motion";

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

        {/* About Me + Photo - Side by side */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4 sm:mb-6">
              Who I am?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              State Engineer in Computer Systems Engineering, graduated from the Higher School of Computer Science (ESI-SBA), specialized in web and mobile application development, artificial intelligence, and cybersecurity
              (digital forensics, blue teaming, and detection engineering) as well as a keen
              interest in networks, embedded systems, and UI/UX design. I integrate security from the design phase and leverage AI to enhance performance and user experience.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I've completed several academic projects, freelance work, and internships. My diverse experience
              and passion for technology make me a valuable asset for your next project let's collaborate to
              turn your ideas into exceptional digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:order-last order-first"
          >
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-pink-400/30">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="w-48 h-60 sm:w-64 sm:h-80 bg-gradient-to-br from-pink-400/20 to-slate-700/50 rounded-xl flex items-center justify-center border border-pink-400/30">
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

        {/* Experience Section - Full width below */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <h4 className="text-xl sm:text-2xl font-bold text-pink-400 mb-6 sm:mb-8">My Experience</h4>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
              <span className="text-xl text-pink-300 font-bold">Flutter Developer</span>
              <span className="text-lg text-gray-400"> at INNOVIA (Feb 2026 - Present)</span>
              <p className="text-gray-300 mt-2">
                Developing Flutter mobile applications with integrated AI features for intelligent user experiences, along with API integration, performance optimization, and scalable architecture design
              </p>
            </div>

            <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
              <span className="text-xl text-pink-300 font-bold">Flutter & React Developer</span>
              <span className="text-lg text-gray-400"> at AMIMER ENERGIE (Oct 2025 - Feb 2026)</span>
              <p className="text-gray-300 mt-2">
                Developed a full employee evaluation system featuring mobile applications for self-evaluation and attendance tracking, and a web platform for performance monitoring, analytics, and decision support.
              </p>
            </div>

            <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
              <span className="text-xl text-pink-300 font-bold">Mobile and Web Development Engineer</span>
              <span className="text-lg text-gray-400"> at DATALOCK (Oct 2024 - Oct 2025)</span>
              <p className="text-gray-300 mt-2">
                Led an agile team in building cross-platform mobile applications for VTC and e-commerce projects.
                Developed responsive websites and admin dashboards with React, and contributed to secure backend
                architectures using Appwrite, Firebase, and Node.js.
              </p>
            </div>

            <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
              <span className="text-xl text-pink-300 font-bold">Flutter & React Developer</span>
              <span className="text-lg text-gray-400"> - Freelance ERP Project (Jan 2024 - Jun 2024)</span>
              <p className="text-gray-300 mt-2">
                Developed a complete ERP inventory management platform with real-time dashboards and a synchronized
                mobile application using React, Django, and Flutter.
              </p>
            </div>

            <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
              <span className="text-xl text-pink-300 font-bold">Cybersecurity Detection Engineering Intern</span>
              <span className="text-lg text-gray-400"> at Realistic Security (Sep 2024 - Oct 2024)</span>
              <p className="text-gray-300 mt-2">
                Created MITRE ATT&CK-based detection rules and YARA signatures to identify advanced threats,
                and integrated detection mechanisms into the ELK stack to improve threat visibility.
              </p>
            </div>

            <div className="border-l-2 border-pink-400 pl-4 sm:pl-6">
              <span className="text-xl text-pink-300 font-bold">Network and Development Intern</span>
              <span className="text-lg text-gray-400"> at Sonelgaz (Aug 2024 - Sep 2024)</span>
              <p className="text-gray-300 mt-2">
                Contributed to the development of a billing system and a payment application, while participating
                in network configuration and security tasks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
