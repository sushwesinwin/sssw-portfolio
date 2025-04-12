import React from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiDownload } from 'react-icons/fi'

/**
 * A component that renders a simple "HomePage" message.
 *
 * @returns {React.ReactElement} A div containing the "HomePage" message.
 */
const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
          <h1 className='text-5xl font-bold'>Full-Stack Developer</h1>
          <p className='mt-5 text-md'> I'm a full-stack developer with a diverse background. <br />I bring both technical and business insight to the table.</p>

          <button className='
            flex items-center gap-2
            text-sm text-blue-600 font-bold
            group
            mt-5
            p-2
            mx-auto
            '>
            <span>CV</span>
            <FiDownload className='
              w-5 h-5
              opacity-0
              group-hover:opacity-100
              ml-0
              group-hover:ml-1
              transistion-all
              duration-500
              ' />
          </button>
        
      <motion.div className="absolute bottom-10 left-1/2 flex flex-col items-center transform -translate-x-1/2" 
        onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
        <h2 className='mt-5 text-md'>Scroll down</h2>
        <FiChevronDown className='w-6 h-6 animate-bounce mt-2' />
      </motion.div>
       
        
      </motion.div>
    </section>
  )
}

export default HomeSection