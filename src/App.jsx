import React from 'react'
import Navbar from './components/Navbar'
import { useTheme } from './context/ThemeContext'
import HomeSection from './pages/HomeSection'
import AboutSection from './pages/AboutSection'
import SkillSection from './pages/SkillSection'
import ProjectSection from './pages/ProjectSection'
import ExperienceSection from './pages/ExperienceSection'
import ContactSection from './pages/ContactSection'

const App = () => {
  const { isDarkMode } = useTheme()
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}

export default App