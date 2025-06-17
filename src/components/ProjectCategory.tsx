
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  gradient: string;
}

interface ProjectCategoryProps {
  category: string;
  onBack: () => void;
}

const ProjectCategory = ({ category, onBack }: ProjectCategoryProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectData: Record<string, { title: string; projects: Project[] }> = {
    mobile: {
      title: "Mobile App Projects",
      projects: [
        {
          title: "AI-Powered Traffic Management (SafeRoad)",
          description: "AI-driven traffic optimization system with real-time analytics dashboard and mobile app for accident alerts",
          tech: ["Flutter", "Provider State Management", "Firebase"],
          image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
          gradient: "from-pink-400 to-rose-400"
        },
        {
          title: "AI-powered Postal Service Analytics",
          description: "AI-powered dashboard for sentiment analysis with mobile app and chat support. Won Inov 2nd Place 2024",
          tech: ["Flutter", "Provider State Management", "Firebase"],
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          gradient: "from-rose-400 to-pink-600"
        },
        {
          title: "AI-Powered Book App",
          description: "Flutter mobile app with NLP-driven recommendations and voice-enabled AI assistant. Won 3rd Place MobAI Hackathon",
          tech: ["Flutter", "Provider State Management", "Firebase"],
          image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
          gradient: "from-pink-600 to-rose-400"
        },
        {
          title: "StockKeep Inventory App",
          description: "Automated stock tracking with orders, deliveries, expiry alerts and role-based dashboards",
          tech: ["Flutter", "Provider State Management", "Firebase"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
          gradient: "from-rose-600 to-pink-400"
        },
        {
          title: "Chrily - Multi-Vendor E-Commerce",
          description: "Multi-vendor marketplace connecting sellers and buyers with store management and order processing",
          tech: ["Flutter", "Provider State Management", "Firebase"],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
          gradient: "from-pink-500 to-rose-500"
        },
        {
          title: "Needy - Geolocation-Based App",
          description: "Connecting users with nearby assistance services using real-time geolocation and interactive maps",
          tech: ["Flutter", "Provider State Management", "Firebase"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
          gradient: "from-rose-500 to-pink-500"
        }
      ]
    },
    web: {
      title: "Web Development Projects",
      projects: [
        {
          title: "AI-Powered Traffic Management (SafeRoad)",
          description: "Web dashboard for traffic optimization with dynamic speed limits and smart traffic lights management",
          tech: ["React", "JSX", "Tailwind"],
          image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
          gradient: "from-pink-400 to-rose-400"
        },
        {
          title: "AI-powered Postal Service Analytics",
          description: "Web dashboard for sentiment analysis of social media and QR feedback with data visualization",
          tech: ["React", "JSX", "Tailwind"],
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          gradient: "from-rose-400 to-pink-600"
        },
        {
          title: "StockKeep Inventory Web",
          description: "Web-based inventory management system with automated tracking and analytics dashboard",
          tech: ["React", "JSX", "Tailwind"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
          gradient: "from-pink-600 to-rose-400"
        }
      ]
    },
    security: {
      title: "Cybersecurity Projects",
      projects: [
        {
          title: "APT Detection & Cybersecurity Analysis",
          description: "Research on APT groups with MITRE ATT&CK-based detection rules and ELK stack deployment for threat monitoring",
          tech: ["MITRE ATT&CK", "ELK Stack", "YARA Rules"],
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
          gradient: "from-rose-600 to-pink-400"
        }
      ]
    },
    ai: {
      title: "AI & Machine Learning Projects",
      projects: [
        {
          title: "AI-Powered Traffic Management (SafeRoad)",
          description: "Computer vision-based traffic optimization with dynamic speed control and smart analytics",
          tech: ["AI/ML", "Computer Vision", "IoT"],
          image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
          gradient: "from-pink-400 to-rose-400"
        },
        {
          title: "AI-Automated IoT Voice Assistant",
          description: "Offline voice assistant using Vosk and Tiny-BERT with MQTT-based IoT control and SVM speaker recognition",
          tech: ["AI/ML", "IoT", "Voice Recognition"],
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
          gradient: "from-rose-400 to-pink-600"
        },
        {
          title: "AI-powered Postal Service Analytics",
          description: "Sentiment analysis AI system for social media and customer feedback processing",
          tech: ["AI/ML", "NLP", "Sentiment Analysis"],
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          gradient: "from-pink-600 to-rose-400"
        },
        {
          title: "AI-Powered Book App",
          description: "NLP-driven book recommendations with mood/interest-based search and fake face detection models",
          tech: ["AI/ML", "NLP", "Computer Vision"],
          image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
          gradient: "from-rose-600 to-pink-400"
        }
      ]
    }
  };

  const categoryData = projectData[category];
  if (!categoryData) return null;

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {categoryData.title.split(' ').map((word, index) => 
              word === 'Projects' || word === 'Development' ? (
                <span key={index} className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  {word}
                </span>
              ) : word + ' '
            )}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.projects.map((project, index) => (
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
              </div>
              
              <div className="relative p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 flex-grow text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-slate-700/50 text-pink-300 rounded-full border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center space-x-2 text-rose-400 hover:text-rose-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
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

export default ProjectCategory;
