import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or OS preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(savedTheme ? JSON.parse(savedTheme) : prefersDark);
  }, []);

  // Apply dark mode class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      {/* This div is used to center the navbar content and set the max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container to hold the navbar links and logo/name */}
        <div className="flex justify-between h-16">
          {/* Left side - Logo/Name */}
          <div className="flex items-center
          ">
            <a 
              href="#home" 
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              <span className="text-indigo-600 dark:text-indigo-400">Port</span>folio
            </a>
          </div>

          {/* Center - Desktop Navigation (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side - Icons and dark */}
          <div className="flex items-center space-x-4">
            {/* Social Icons (hidden on mobile) */}
            <div className="hidden md:flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Menu (shown when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center space-x-4 pt-4 pb-2">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;