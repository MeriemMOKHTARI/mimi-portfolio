
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "AI/ML & Data Science",
      skills: ["Natural Language Processing (NLP)", "Speech-to-Text (Vosk)", "Transformer Models (Tiny-BERT, SmoILM)", "Computer Vision (OpenCV)", "Sentiment Analysis", "Model Optimization (Edge AI)", "Data Visualization (ELK, PowerBI)"],
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Mobile & Full-Stack Development",
      skills: ["Cross-Platform Apps (Flutter)", "Firebase", "Provider State Management", "REST APIs", "React.js", "Next.js", "Tailwind CSS", "Redux", "HTML5", "Python", "Node.js"],
      color: "from-rose-400 to-rose-600"
    },
    {
      title: "Cybersecurity",
      skills: ["APT Analysis and Simulation", "Blue Team Tools and Techniques", "Windows Forensics and Persistence Detection", "Incident Response", "Threat Detection and Response", "MITRE ATT&CK Framework", "ELK Stack", "YARA Rules", "Malware Analysis and Detection"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Network & Systems",
      skills: ["Network Configuration", "Active Directory", "Windows System Administration", "Remote Device Management", "Network Monitoring & Troubleshooting", "Software Development", "Reverse Engineering", "Forensics"],
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "IoT & Embedded Systems",
      skills: ["Raspberry Pi", "MQTT Protocol", "Edge Computing", "Sensor Integration", "Voice-Controlled Automation", "GPIO/PWM Device Control"],
      color: "from-pink-600 to-rose-400"
    },
    {
      title: "Cloud & DevOps Tools",
      skills: ["Firebase Services", "Docker", "CI/CD Pipelines", "AWS/GCP Basics", "Git", "Postman", "Figma", "Linux", "Ghidra", "Wireshark", "Volatility"],
      color: "from-rose-600 to-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`}></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-4 sm:p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-pink-500/10">
              <h4 className="text-lg font-bold text-pink-400 mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["Java", "JavaScript", "TypeScript", "Dart", "C", "Python", "R"].map((lang) => (
                  <span key={lang} className="px-2 py-1 text-xs bg-slate-700/50 text-pink-300 rounded-full border border-pink-500/30">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 sm:p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-pink-500/10">
              <h4 className="text-lg font-bold text-pink-400 mb-3">Operating Systems</h4>
              <div className="flex flex-wrap gap-2">
                {["Linux", "Windows"].map((os) => (
                  <span key={os} className="px-2 py-1 text-xs bg-slate-700/50 text-pink-300 rounded-full border border-pink-500/30">
                    {os}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 sm:p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-pink-500/10">
              <h4 className="text-lg font-bold text-pink-400 mb-3">Languages</h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">Arabic (Native)</div>
                <div className="text-sm text-gray-300">English (Professional)</div>
                <div className="text-sm text-gray-300">French (Intermediate)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
