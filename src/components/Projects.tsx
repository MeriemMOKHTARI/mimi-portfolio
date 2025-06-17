
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Mobile Security App",
      description: "React Native app for mobile device security scanning and protection",
      tech: ["React Native", "Cybersecurity", "Firebase"],
      gradient: "from-pink-400 to-purple-600"
    },
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot using natural language processing and machine learning",
      tech: ["Python", "TensorFlow", "NLP", "API"],
      gradient: "from-purple-600 to-pink-400"
    },
    {
      title: "Web Vulnerability Scanner",
      description: "Automated tool for identifying security vulnerabilities in web applications",
      tech: ["Python", "Security", "OWASP", "CLI"],
      gradient: "from-pink-600 to-purple-400"
    },
    {
      title: "Portfolio Dashboard",
      description: "Modern dashboard for tracking cryptocurrency portfolio with real-time data",
      tech: ["Vue.js", "Chart.js", "API", "WebSocket"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Home IoT",
      description: "IoT solution for smart home automation with mobile app control",
      tech: ["Arduino", "Flutter", "Firebase", "IoT"],
      gradient: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-700/50 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
