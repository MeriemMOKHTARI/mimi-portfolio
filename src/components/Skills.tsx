
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
      skills: ["Natural Language Processing (NLP)", "Speech-to-Text (Vosk)", "Transformer Models", "Computer Vision (OpenCV)", "Sentiment Analysis", "Model Optimization"],
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Mobile & Full-Stack Development",
      skills: ["Flutter", "React.js", "Next.js", "Tailwind CSS", "Firebase", "Provider State Management", "Python", "Node.js"],
      color: "from-rose-400 to-rose-600"
    },
    {
      title: "Cybersecurity",
      skills: ["APT Analysis", "Blue Team Tools", "MITRE ATT&CK Framework", "ELK Stack", "YARA Rules", "Malware Analysis", "Incident Response"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Network & Systems",
      skills: ["Network Configuration", "Active Directory", "Windows System Administration", "Remote Device Management", "Network Monitoring"],
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "IoT & Embedded Systems",
      skills: ["Raspberry Pi", "MQTT Protocol", "Edge Computing", "Sensor Integration", "Voice-Controlled Automation"],
      color: "from-pink-600 to-rose-400"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Ghidra", "Wireshark", "Volatility", "Linux", "Postman", "Figma"],
      color: "from-rose-600 to-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
