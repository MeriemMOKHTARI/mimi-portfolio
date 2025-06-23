
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
  ChevronRight
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
    { name: "React", icon: <Layers className="w-8 h-8" />, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: <Globe className="w-8 h-8" />, color: "from-gray-700 to-black" },
    { name: "JavaScript", icon: <Code className="w-8 h-8" />, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", icon: <Code className="w-8 h-8" />, color: "from-blue-400 to-blue-600" },
    { name: "Python", icon: <Coffee className="w-8 h-8" />, color: "from-green-400 to-blue-500" },
    { name: "Flutter", icon: <Chrome className="w-8 h-8" />, color: "from-blue-300 to-cyan-400" },
    { name: "Firebase", icon: <Zap className="w-8 h-8" />, color: "from-orange-400 to-red-500" },
    { name: "Node.js", icon: <Server className="w-8 h-8" />, color: "from-green-400 to-green-600" },
    { name: "HTML5", icon: <Globe className="w-8 h-8" />, color: "from-orange-400 to-red-500" },
    { name: "Tailwind CSS", icon: <Layers className="w-8 h-8" />, color: "from-cyan-400 to-blue-500" },
    { name: "MongoDB", icon: <Database className="w-8 h-8" />, color: "from-green-400 to-green-600" },
    { name: "Docker", icon: <Container className="w-8 h-8" />, color: "from-blue-400 to-cyan-500" },
    { name: "GitHub", icon: <Github className="w-8 h-8" />, color: "from-gray-600 to-gray-800" },
    { name: "GitLab", icon: <Gitlab className="w-8 h-8" />, color: "from-orange-500 to-red-600" },
    { name: "Figma", icon: <Figma className="w-8 h-8" />, color: "from-purple-400 to-pink-500" },
    { name: "Java", icon: <Coffee className="w-8 h-8" />, color: "from-red-500 to-orange-600" },
    { name: "Dart", icon: <Code className="w-8 h-8" />, color: "from-blue-400 to-cyan-500" },
    { name: "Redux", icon: <Layers className="w-8 h-8" />, color: "from-purple-500 to-purple-700" },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer || !isAutoScrolling) return;

      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5; // Slower speed
      }
    }, 20); // Slower interval
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
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const scrollRight = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    setIsAutoScrolling(false);
    scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => setIsAutoScrolling(true), 2000);
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

        {/* Navigation Controls */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </button>
          <button
            onClick={scrollRight}
            className="group relative p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-pink-500/30 hover:border-pink-400 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </button>
        </motion.div>

        {/* Scrolling Skills Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          {/* Skills Scroll Container */}
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
                  {/* 3D Card Effect with enhanced shadows */}
                  <div className={`w-28 h-28 bg-gradient-to-br ${skill.color} rounded-3xl flex items-center justify-center shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-pink-500/50 group-hover:shadow-3xl relative overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-3xl"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    
                    {/* Icon container */}
                    <div className="relative z-10 text-white filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    
                    {/* 3D border effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0.5 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Skill Name */}
                  <div className="mt-4 text-center">
                    <span className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text group-hover:text-transparent">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 delay-150"></div>
                  
                  {/* Reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Controls Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            Use arrow buttons or hover to control • Auto-scrolling enabled
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
          </p>
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
        `
      }} />
    </section>
  );
};

export default Skills;
