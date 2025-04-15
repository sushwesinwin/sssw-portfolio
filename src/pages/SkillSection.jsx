import { motion } from 'framer-motion'
import { SiGit, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiLaravel, SiMongodb, SiPhp, SiPostgresql, SiPostman, SiPrisma, SiReact, SiTailwindcss, SiCss3, SiTypescript, SiNextdotjs } from 'react-icons/si'
import { FaNodeJs, FaCode } from 'react-icons/fa'
import StaggeredContainer from '../components/StaggeredContainer'

const SkillSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript className='text-yellow-400' /> },
        { name: 'TypeScript', icon: <SiTypescript className='text-blue-500' /> },
        { name: 'HTML5', icon: <SiHtml5 className='text-orange-600' /> },
        { name: 'CSS3', icon: <SiCss3 className='text-blue-600' /> },
        { name: 'PHP', icon: <SiPhp className='text-blue-500' /> }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <SiReact className='text-blue-500' /> },
        { name: 'Next.js', icon: <SiNextdotjs className='text-black dark:text-white' /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-sky-400' /> },
        { name: 'Laravel', icon: <SiLaravel className='text-red-500' /> }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className='text-blue-700' /> },
        { name: 'MongoDB', icon: <SiMongodb className='text-green-600' /> },
        { name: 'Prisma', icon: <SiPrisma className='text-gray-800 dark:text-white' /> }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: <SiGit className='text-orange-500' /> },
        { name: 'GitHub', icon: <SiGithub className='text-black dark:text-white' /> },
        { name: 'Postman', icon: <SiPostman className='text-orange-600' /> },
        { name: 'VS Code', icon: <FaCode className='text-blue-500' /> }
      ]
    }
  ]

  return (
    <section className="min-h-screen py-20 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-left"
      >
        <h1 className='text-5xl font-bold text-center'>Skills</h1>
        <StaggeredContainer>
          <div className='mt-9 text-md text-gray-500 space-y-2 grid grid-cols-2 gap-4'>
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: index * 1 // Increased delay between categories
                }}
                className="space-y-2 shadow-md"
              >
                <h2 className='text-lg text-black dark:text-white font-bold'>{category.title}</h2>
                <div className='flex flex-wrap flex-col gap-4 text-left border border-gray-500 border-opacity-20 rounded p-5'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: skillIndex * 0.2 // Increased delay between skills
                      }}
                      className='flex items-center gap-2 p-2 text-gray-200 rounded'
                    >
                      {skill.icon}
                      <span className='text-xs text-gray-500 dark:text-white' style={{fontFamily: '"Poppins", sans-serif'}}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggeredContainer>
      </motion.div>
    </section>
  )
}

export default SkillSection