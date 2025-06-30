
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const projects = [
  {
    title: "AI-Automated IoT Voice Assistant for Smart Living",
    description: "Built offline voice assistant using Vosk (STT) and Tiny-BERT (95% accuracy) on Raspberry Pi. Designed MQTT-based IoT control for smart devices. Developed SVM speaker recognition for secure authentication.",
    tech: ["AI/ML","LLM", "IoT", "Vosk", "Tiny-BERT", "Raspberry Pi", "MQTT", "SVM"],
    image: "/assets/images/iot.jpg",
    gradient: "from-pink-400 to-rose-400",
    category: "AI/ML & IoT",
    github: "https://github.com/MeriemMOKHTARI/AI-IoT-Voice-Assistant-for-Smart-Living"
  },
  {
    title: "APT Detection & Cybersecurity Analysis",
    description: "Researched APT groups, simulated attacks, and developed MITRE ATT&CK-based detection rules for Windows environments. Deployed ELK stack for threat monitoring and authored custom detection rules to identify persistence mechanisms/IoCs.",
    tech: ["MITRE ATT&CK", "ELK Stack", "YARA Rules", "Windows Security", "Blue Team"],
    image: "/assets/images/velo.png",
    gradient: "from-rose-400 to-pink-600",
    category: "Cybersecurity",
    github: "https://www.linkedin.com/feed/update/urn:li:activity:7258245907396149248/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BVGnjsqaoS5q4fqA7gZccIQ%3D%3D"
  },
  {
    title: "AI-Powered Book App",
    description: "Developed Flutter mobile app with NLP-driven book recommendations and voice-enabled AI assistant. Integrated mood/interest-based search and purchase features. Trained models for fake face detection and code prediction. Won 3rd Place MobAI Hackathon.",
    tech: ["Flutter", "NLP", "AI/ML", "Computer Vision", "Firebase", "Voice AI","Chatboat"],
    image: "/assets/images/bookini.jpg",
    gradient: "from-pink-500 to-rose-500",
    category: "Mobile & AI",
    award: "🏆 MobAI 3rd Place 2025",
    github: "https://github.com/MeriemMOKHTARI/mob_ai_app"
  },
  {
    title: "Chrily Multi-Vendor E-Commerce Platform",
    description: "Developed Flutter mobile app with Firebase backend for a marketplace connecting multiple sellers and buyers. Features vendor onboarding, store management dashboards, admin panel for product/category/banner management, and order processing with delivery scheduling.",
    tech: ["Flutter", "Firebase", "E-Commerce", "Multi-Vendor", "Admin Panel"],
    image: "/assets/images/chrily.jpg",
    gradient: "from-pink-400 to-rose-600",
    category: "Mobile App & Web",
    github: {
      app: "https://github.com/MeriemMOKHTARI/Multi-Vendor-E-Commerce-App",
      admin: "https://github.com/MeriemMOKHTARI/Multi-Vendor-E-Commerce-Admin"
    }
  },
  {
    title: "Key2QR - Forensics CTF Challenge",
    description: "Created a forensics CTF challenge, where participants repair a corrupted GIF to extract a key and the first part of a flag, then use the key to decrypt a locked QR code revealing the second part. Involves fixing the GIF header, extracting frames, and scanning the QR code with tools like hexedit, ffmpeg, eog, gpg, and zbarimg",
    tech: ["Forensics","hexedit", "ffmpeg"," eog", "gpg", "zbarimg","GIF Analysis","QR Code Decryption","CTF"],
    image: "/assets/images/qrcode.jpg",
    gradient: "from-rose-600 to-pink-400",
    category: "Cybersecurity",
    award: "🏆 CTF author",
    github: "https://github.com/MeriemMOKHTARI/Alphabit_minictf_2k25/tree/master/forensics/Key2QR"
  },
  {
    title: "AI-Powered Postal Service Analytics",
    description: "Created AI-powered dashboard for sentiment analysis of social media/QR feedback. Designed mobile app with chat support and video tutorials to enhance customer experience. Won Inov 2nd Place post Hackathon 2024.",
    tech: ["AI/ML", "NLP", "Sentiment Analysis", "React", "Flutter", "Firebase"],
    image: "/assets/images/baridi.jpg",
    gradient: "from-rose-600 to-pink-400",
    category: "AI/ML & Mob App & Web",
    award: "🏆 Inov 2nd Place 2024",
    github: {
      web: "https://github.com/MeriemMOKHTARI/AI-Postal-Service-Analytics-Web",
      app: "https://github.com/MeriemMOKHTARI/AI-Postal-Service-Analytics-App"
    }
  },
  {
    title: "AI-Traffic Management (SafeRoad)",
    description: "Developed AI-driven traffic optimization system using computer vision for dynamic speed limits and smart traffic lights. Built real-time analytics dashboard and mobile app for accident alerts and transport integration.",
    tech: ["AI/ML", "Computer Vision", "React", "Flutter", "Firebase", "IoT"],
    image: "/assets/images/saferoad.jpg",
    gradient: "from-pink-600 to-rose-400",
    category: "AI/ML & Mob App & Web",
    github: {
      web: "https://github.com/MeriemMOKHTARI/AI-Traffic-Management-Web",
      app: "https://github.com/MeriemMOKHTARI/AI-Traffic-Management-App"
    }
  },
  {
    title: "StockKeep Inventory System",
    description: "Automated stock tracking (orders, deliveries, expiry alerts). Role-based dashboards (Admin, Storekeeper, Director) using React/Next.js + Django. Real-time notifications and data analytics.",
    tech: ["React", "Next.js", "Django", "Flutter", "Firebase", "Real-time"],
    image: "/assets/images/stock.jpg",
    gradient: "from-rose-500 to-pink-500",
    category: "Web & Mobile",
    subtitle: "ESI Academic Project",
    github: "https://github.com/MeriemMOKHTARI/StockKeep-Inventory-System"
  },
  {
    title: "ColorPNG - Forensics CTF Challenge",
    description: "Created a forensics CTF challenge,where a hidden flag is embedded in the red channel of a PNG image using steganography. The flag is encoded as ASCII values in consecutive pixels, terminated by a red value of 0. Provided a Python script using the PIL library to extract the flag by analyzing pixel data.",
    tech: ["Forensics","Steganography","Image Analysis","Python","CTF","Pixel Manipulation"],
    image: "/assets/images/spectrum_art.bmp",
    gradient: "from-rose-600 to-pink-400",
    category: "Cybersecurity",
    award: "🏆 CTF author",
    github: "https://github.com/MeriemMOKHTARI/Alphabit_minictf_2k25/tree/master/forensics/ColorPNG"
  },
  {
    title: "Needy Geolocation-Based Mobile Application",
    description: "Developed a Flutter mobile app connecting users with nearby assistance services using real-time geolocation. Features dynamic help matching system, dual functionality for requesting/offering services, interactive map interface, and donation system for free help exchanges.",
    tech: ["Flutter", "Geolocation", "Maps", "Real-time", "Firebase", "Location Services"],
    image: "/assets/images/needy.jpg",
    gradient: "from-rose-600 to-pink-400",
    category: "Mobile App",
    github: "https://github.com/MeriemMOKHTARI/NeedyApp"
  },
  {
    title: "Reverse Shells & Backdoors Analysis",
    description: "Research and analysis on reverse shells and backdoors, including a practical demonstration.",
    tech: ["Backdoors", "Reverse Shells", "NC", "MSFVenom", "Blue Team"],
    image: "/assets/images/reverse.jpg",
    gradient: "from-rose-600 to-pink-400",
    category: "Cybersecurity"
  }
];


  const renderGithubLinks = (project: any) => {
    if (typeof project.github === 'string') {
      return (
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-4 h-4" />
          <span className="text-sm">Code</span>
        </motion.a>
      );
    }

    if (typeof project.github === 'object') {
      return (
        <div className="flex space-x-3">
          {project.github.web && (
            <motion.a
              href={project.github.web}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-pink-400 hover:text-pink-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <Globe className="w-3 h-3" />
              <span className="text-sm">Web</span>
            </motion.a>
          )}
          {project.github.app && (
            <motion.a
              href={project.github.app}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-pink-400 hover:text-pink-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <Smartphone className="w-3 h-3" />
              <span className="text-sm">App</span>
            </motion.a>
          )}
          {project.github.admin && (
            <motion.a
              href={project.github.admin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-pink-400 hover:text-pink-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">Admin</span>
            </motion.a>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                {project.award && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {project.award}
                  </div>
                )}
              </div>
              
              <div className="relative p-4 sm:p-6">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30 mb-2">
                    {project.category}
                  </span>
                  {project.subtitle && (
                    <p className="text-xs text-gray-400 italic">{project.subtitle}</p>
                  )}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-pink-300 rounded-full border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {renderGithubLinks(project)}
                  </div>
                  {/* <motion.button
                    className="flex items-center space-x-2 text-rose-400 hover:text-rose-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </motion.button> */}
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
