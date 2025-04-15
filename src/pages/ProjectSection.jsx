import { motion } from 'framer-motion'
import { SiGit, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiMongodb, SiPostgresql, SiPostman, SiPrisma, SiReact, SiTailwindcss, SiCss3, SiTypescript, SiNextdotjs } from 'react-icons/si'
import { FaNodeJs, FaCode } from 'react-icons/fa'
import StaggeredContainer from '../components/StaggeredContainer'

const ProjectSection = () => {
  const projects = [
    {
      image: '/public/talknote.png',
      title: 'Talknote',
      description: 'AI Note-Taking app built with pure CSS and Vanilla JS.',
      githubLink: 'https://github.com/sushwesinwin/talknote.git',
      demo: 'https://sushwesinwin.github.io/talknote/'
    },
    {
      image: '/public/todo.png',
      title: 'Todo List',
      description: 'A simple todo list app built with pure CSS and Vanilla JS.',
      githubLink: 'https://github.com/sushwesinwin/quicklist.git',
      demo: 'https://sushwesinwin.github.io/quicklist/'
    },
    {
      image: '/public/popcornnite.png',
      title: 'PopcornNite',
      description: 'A movie streaming platform built with a React frontend and Express.js backend, featuring movie browsing and user authentication, integrated with The Movie Database (TMDB) API.',
      githubLink: 'https://github.com/sushwesinwin/PopcornNite.git',
      demo: 'Not available'
    },
    {
      image: '/public/blog.png',
      title: 'Blog',
      description: 'A Laravel blog with article management, comments, user auth, and categories.',
      githubLink: 'https://github.com/sushwesinwin/blog.git',
      demo: 'Not available'
    },


  ]

  return (
    <section id='projects' className="min-h-screen py-20 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-left"
      >
        <h1 className='text-5xl font-bold text-center'>Projects</h1>
        <StaggeredContainer>
          <div className='mt-9 text-md text-gray-500 space-y-2 md:grid md:grid-cols-4 gap-4'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: index * 1
                }}
                className="space-y-2 shadow-md min-h-[400px]"
              >
                <h2 className='text-lg text-black dark:text-white font-bold'>{project.title}</h2>
                <div className='flex flex-col gap-4 text-left border border-gray-500 border-opacity-20 rounded p-5 h-[350px]'>
                  <img src={project.image} alt={project.title} className='w-full h-[150px] object-cover rounded-t' />
                  <p className='text-xs text-gray-500 dark:text-white h-[100px] overflow-hidden' style={{fontFamily: '"Poppins", sans-serif'}}>{project.description}</p>
                  <div className='flex flex-col gap-2'>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 p-2 text-gray-200 rounded hover:text-blue-600 transition-colors'>
                      <SiGithub className='text-xl' />
                      <span className='text-xs'>View on GitHub</span>
                    </a>
                    {project.demo !== 'Not available' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 p-2 text-gray-200 rounded hover:text-blue-600 transition-colors'>
                        <FaCode className='text-xl' />
                        <span className='text-xs'>View Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggeredContainer>
      </motion.div>
    </section>
  )
}

export default ProjectSection