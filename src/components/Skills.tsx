import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { 
  Github, 
  Gitlab, 
  Container, 
  Figma, 
  Chrome,
  Database,
  Code,
  Layers,
  Zap,
  Globe,
  Server,
  Coffee,
  ChevronLeft,
  ChevronRight,
  Shield,
  Brain,
  Cpu,
  Network
} from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  const skills = [
    { name: "React", icon: <Layers className="w-8 h-8" /> },
    { name: "Next.js", icon: <Globe className="w-8 h-8" /> },
    { name: "JavaScript", icon: <Code className="w-8 h-8" /> },
    { name: "TypeScript", icon: <Code className="w-8 h-8" /> },
    { name: "Python", icon: <Coffee className="w-8 h-8" /> },
    { name: "Flutter", icon: <Chrome className="w-8 h-8" /> },
    { name: "Firebase", icon: <Zap className="w-8 h-8" /> },
    { name: "Node.js", icon: <Server className="w-8 h-8" /> },
    { name: "HTML5", icon: <Globe className="w-8 h-8" /> },
    { name: "Tailwind CSS", icon: <Layers className="w-8 h-8" /> },
    { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
    { name: "Docker", icon: <Container className="w-8 h-8" /> },
    { name: "GitHub", icon: <Github className="w-8 h-8" /> },
    { name: "GitLab", icon: <Gitlab className="w-8 h-8" /> },
    { name: "Figma", icon: <Figma className="w-8 h-8" /> },
    { name: "Java", icon: <Coffee className="w-8 h-8" /> },
    { name: "Dart", icon: <Code className="w-8 h-8" /> },
    { name: "Redux", icon: <Layers className="w-8 h-8" /> },
  ];

  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-12 h-12" />,
      gradient: "from-red-500/20 to-orange-500/20",
      borderGradient: "from-red-400 to-orange-400",
      skills: [
        "APT Analysis and Simulation",
        "Blue Team Tools and Techniques", 
        "Windows Forensics and Persistence Detection",
        "Incident Response",
        "Threat Detection and Response",
        "MITRE ATT&CK Framework",
        "ELK Stack",
        "YARA Rules",
        "Malware Analysis and Detection"
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-12 h-12" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-400 to-pink-400",
      skills: [
        "Natural Language Processing (NLP)",
        "Speech-to-Text (Vosk)",
        "Transformer Models (Tiny-BERT, SmoILM)",
        "Computer Vision (OpenCV)",
        "Sentiment Analysis",
        "Model Optimization (Edge AI)",
        "Data Visualization (ELK, PowerBI)"
      ]
    },
    {
      title: "IoT & Embedded Systems",
      icon: <Cpu className="w-12 h-12" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-400 to-cyan-400",
      skills: [
        "Raspberry Pi",
        "MQTT Protocol",
        "Edge Computing",
        "Sensor Integration",
        "Voice-Controlled Automation",
        "GPIO/PWM Device Control"
      ]
    },
    {
      title: "Network & Systems",
      icon: <Network className="w-12 h-12" />,
      gradient: "from-green-500/20 to-teal-500/20",
      borderGradient: "from-green-400 to-teal-400",
      skills: [
        "Network Configuration",
        "Active Directory",
        "Windows System Administration",
        "Remote Device Management",
        "Network Monitoring & Troubleshooting",
        "Software Development",
        "Reverse Engineering",
        "Forensics",
        "Linux",
        "Windows"
      ]
    }
  ];

  const duplicatedSkills = [...skills, ...skills];

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer || !isAutoScrolling) return;

      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    }, 50);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  const scrollLeft = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    setIsAutoScrolling(false);
    scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollRight = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    setIsAutoScrolling(false);
    scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isAutoScrolling]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleMouseEnter = () => setIsAutoScrolling(false);
    const handleMouseLeave = () => setIsAutoScrolling(true);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Technologies I work with</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={scrollLeft}
            className="group relative p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-pink-500/30 hover:border-pink-400 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
          </button>
          <button
            onClick={scrollRight}
            className="group relative p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-pink-500/30 hover:border-pink-400 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-20"
        >
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto py-8 cursor-grab active:cursor-grabbing scrollbar-hide"
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 group relative"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <div className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                      {skill.icon}
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Expertise - Fixed Container with Internal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative my-24"
        >
          {/* Fixed Header */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-pink-500/10 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
            <div className="flex items-center justify-start relative">
              <span className="bg-slate-900 absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md border border-pink-500/30 z-10">
                SPECIALIZED EXPERTISE
              </span>
              <span className="w-full h-[2px] bg-gradient-to-r from-pink-400 to-rose-400"></span>
            </div>
          </div>

          {/* Fixed Container with Internal Scroll */}
          <div className="relative h-[600px] bg-slate-900/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl overflow-hidden">
            {/* Decorative background grid */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 1170 403" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1170 57.3509H0V56.5132H1170V57.3509Z" fill="white" fillOpacity="0.3"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M410.388 402.472L410.388 0.933594L411.226 0.933594L411.226 402.472L410.388 402.472Z" fill="white" fillOpacity="0.3"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M841.791 402.472L841.791 0.933594L842.628 0.933594L842.628 402.472L841.791 402.472Z" fill="white" fillOpacity="0.3"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M1170 143.631H0V142.793H1170V143.631Z" fill="white" fillOpacity="0.3"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M324.108 402.472L324.108 0.933594L324.946 0.933594L324.946 402.472L324.108 402.472Z" fill="white" fillOpacity="0.3"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M755.51 402.472L755.51 0.933594L756.348 0.933594L756.348 402.472L755.51 402.472Z" fill="white" fillOpacity="0.3"></path>
              </svg>
            </div>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto p-6 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-pink-500/50 hover:scrollbar-thumb-pink-400/70">
              <div className="space-y-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:bg-slate-800/70 group"
                  >
                    {/* Decorative dots */}
                    <div className="flex flex-row space-x-2 absolute top-4 left-4">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-6 pt-4">
                      <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.borderGradient} mb-3`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                        {category.title}
                      </h4>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.05 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30 backdrop-blur-sm border border-pink-500/10 hover:border-pink-400/30 transition-all duration-300 hover:bg-slate-700/50"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors duration-300">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-thin {
            scrollbar-width: thin;
          }
          .scrollbar-track-slate-800::-webkit-scrollbar-track {
            background: rgb(30 41 59);
            border-radius: 0.375rem;
          }
          .scrollbar-thumb-pink-500\/50::-webkit-scrollbar-thumb {
            background: rgba(236, 72, 153, 0.5);
            border-radius: 0.375rem;
          }
          .scrollbar-thumb-pink-500\/50::-webkit-scrollbar-thumb:hover {
            background: rgba(236, 72, 153, 0.7);
          }
          .scrollbar-thin::-webkit-scrollbar {
            width: 8px;
          }
        `
      }} />
    </section>
  );
};

export default Skills;
