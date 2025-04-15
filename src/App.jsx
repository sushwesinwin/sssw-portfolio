import React from 'react';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';
import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import SkillSection from './pages/SkillSection';
import ProjectSection from './pages/ProjectSection';
import ContactSection from './pages/ContactSection';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import AnimatedText from './components/AnimatedText';

const App = () => {
  const { isDarkMode } = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <div className={`relative ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} cursor-none `}>
      <CustomCursor />

      {/* Progress bar - fixed at top */}
      <Navbar />
      <motion.div 
        className="fixed top-16 left-0 right-0 h-1 bg-blue-500 z-50" 
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }} 
      />
      
      {/* Main content container - ensures scrollable area */}
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText>
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default App;