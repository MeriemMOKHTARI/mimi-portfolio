
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AnimatedBackground from "../components/AnimatedBackground";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
