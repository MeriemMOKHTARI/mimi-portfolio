
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-400 to-blue-600" },
    { name: "Python", icon: "🐍", color: "from-green-400 to-blue-500" },
    { name: "Flutter", icon: "🦋", color: "from-blue-300 to-cyan-400" },
    { name: "Firebase", icon: "🔥", color: "from-orange-400 to-red-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "HTML5", icon: "🌐", color: "from-orange-400 to-red-500" },
    { name: "CSS3", icon: "🎨", color: "from-blue-400 to-purple-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
    { name: "Git", icon: "📝", color: "from-orange-400 to-red-500" },
    { name: "Linux", icon: "🐧", color: "from-yellow-400 to-orange-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
    { name: "TensorFlow", icon: "🧠", color: "from-orange-400 to-red-500" },
    { name: "OpenCV", icon: "👁️", color: "from-blue-400 to-green-500" },
    { name: "Figma", icon: "🎯", color: "from-purple-400 to-pink-500" },
    { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-400 to-black" },
    { name: "GraphQL", icon: "📊", color: "from-pink-400 to-purple-500" },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      const newInterval = setInterval(scroll, 30);
      return () => clearInterval(newInterval);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
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
            className="flex gap-8 overflow-x-hidden py-8 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative">
                  {/* 3D Card Effect */}
                  <div className={`w-24 h-24 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-2xl transform-gpu transition-all duration-300 group-hover:shadow-pink-500/50 group-hover:shadow-2xl`}>
                    {/* Inner Glow */}
                    <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                    
                    {/* Icon */}
                    <span className="text-3xl relative z-10 filter drop-shadow-lg">
                      {skill.icon}
                    </span>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="absolute inset-0.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl"></div>
                    <div className={`absolute inset-0.5 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center`}>
                      <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                      <span className="text-3xl relative z-10 filter drop-shadow-lg">
                        {skill.icon}
                      </span>
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <div className="mt-3 text-center">
                    <span className="text-sm font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-150"></div>
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
            Hover to pause • Auto-scrolling animation
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
