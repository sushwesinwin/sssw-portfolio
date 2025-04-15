import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp, FiDownload } from 'react-icons/fi'
import AnimatedText from '../components/AnimatedText'

/**
 * A component that renders a simple "HomePage" message.
 *
 * @returns {React.ReactElement} A div containing the "HomePage" message.
 */
const HomeSection = () => {
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    const checkScrollPosition = () => {
      const isAtBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      setIsBottom(isAtBottom)
    }

    window.addEventListener('scroll', checkScrollPosition)
    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, [])

  const handleDownload = () => {
    const fileUrl = './sssw.dev-cv.pdf'

    const link = document.createElement('a')
    link.href = fileUrl

    link.download = 'sssw.dev-cv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 1
        }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Full-Stack Developer</h1>
        <AnimatedText>
          <div className="mt-9 text-md text-gray-500 space-y-1">
            <p style={{fontFamily: '"Poppins", sans-serif'}}>I'm a full-stack developer with a diverse background.</p>
            <p style={{fontFamily: '"Poppins", sans-serif'}}>I bring both technical and business insight to the table.</p>
          </div>
        </AnimatedText>

        <button className="flex items-center gap-2 text-sm text-blue-600 font-bold group mt-5 p-2 mx-auto"
          onClick={handleDownload}>
          <span>CV</span>
          <FiDownload className="w-5 h-5 opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-1 transition-all duration-500" />
        </button>
      </motion.div>
      <motion.div className="fixed bottom-10 left-1/2 flex flex-col items-center transform -translate-x-1/2"
        onClick={() => {isBottom ? window.scrollTo({ top: 0, behavior: 'smooth' }) : window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}}>
        <h2 className="mt-5 text-md">
          {isBottom ? 'Scroll up' : 'Scroll down'}
        </h2>
        {isBottom ? <FiChevronUp className="w-6 h-6 animate-bounce mt-2" /> : <FiChevronDown className="w-6 h-6 animate-bounce mt-2" />}
      </motion.div>
    </section>
  )
}

export default HomeSection