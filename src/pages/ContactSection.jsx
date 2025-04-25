import { motion } from 'framer-motion'
import StaggeredContainer from '../components/StaggeredContainer'

const ProjectSection = () => {
  const timeZone = () => {
    return new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Yangon', hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date());
  };
  
  return (
    <section id='contact' className="min-h-screen py-20 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-left"
      >
        <h1 className='text-5xl font-bold text-center'>Contact</h1>
        <StaggeredContainer>
        <div className="mt-9 text-md text-gray-500 flex justify-center items-center gap-10 flex-wrap text-center p-10">
            <div>📞 09-789315733</div>
            <a href="mailto:sushwesinwin@gmail.com" className="hover:text-blue-500">
                ✉️ sushwesinwin@gmail.com
            </a>
            <div>📍 Based in Myanmar {timeZone()}</div>
        </div>

        </StaggeredContainer>
      </motion.div>
    </section>
  )
}

export default ProjectSection