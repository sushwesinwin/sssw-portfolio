import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const { isDarkMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      const section = ['about', 'skills', 'projects', 'contact']
        .find(id => document.getElementById(id) &&
            scrollY >= document.getElementById(id).offsetTop &&
            scrollY < document.getElementById(id).offsetTop + document.getElementById(id).offsetHeight
          );
          
            section && setActiveLink(section);

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: '#home', text: ''},
    { href: '#about', text:  'About'},
    { href: '#skills', text: 'Skills'},
    { href: '#projects', text: 'Projects'},
    { href: '#contact', text: 'Contact'},
  ]

  return (
    <nav className={`fixed top-0 z-50 bg-black shadow-md w-full  ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className={`text-sm font-medium hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              📦 &lt;  Su Shwe Sin Win / &gt;
            </a>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={`${link.href}`}
                className={`text-sm font-medium hover:text-blue-600 transition-colors 
                ${isDarkMode ? 'text-white' : 'text-gray-900'} 
                ${activeLink === link.href ? 'text-blue-600' : ''}`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <div className='hidden p-2 md:flex space-x-4'>
              <a href="https://github.com/sushwesinwin" target='_blank' rel='noreferrer'>
                <FaGithub className={`h-5 w-5 hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
              </a>
              <a href="https://www.linkedin.com/in/su-shwe-sin-win/" target='_blank' rel='noreferrer'>
                <FaLinkedin className={`h-5 w-5 hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
              </a>
            </div>

            <ThemeToggle />

            <div className='md:hidden flex'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                {isOpen ? <FiX className='h-5 w-5' /> : <FiMenu className='h-5 w-5' />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar