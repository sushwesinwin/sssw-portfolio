import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const AboutSection = () => {


  const aboutTexts = [
        { text: 'Name: Su Shwe Sin Win' },
        { text: 'Education: Bachelor of Engineering in Electronics' },
        { text: 'Coming from a non-traditional path, I bring not only coding knowledge but also real-world logic and adaptability.' },
        { text: 'I am a Full-Stack Developer, coming from a non-traditional path, skilled in JavaScript, React.js, Next.js, and Express.' },
        { text: 'I have experience in working with databases such as MongoDB and PostgreSQL.' },
        { text: 'I’m building my career with a clear goal _constantly seeking opportunities to learn, grow and level-up.' },
    ]

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        className='text-center'
      >
        <h1 className='text-5xl font-bold'>About Me</h1>
        <div className='mt-9 text-md text-gray-500 space-y-1'>
          {aboutTexts.map((text, index) => (
            <AnimatedText key={index} delay={index * 0.5}>
              <motion.p
                style={{ fontFamily: '"Poppins", sans-serif' }}
                className={text.text.includes("📍") ? "text-xs font-bold mt-10" : ""}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeOut", 
                  delay: index * 0.5 
                }}
              >
                {text.text}
              </motion.p>
            </AnimatedText>
          ))}
        </div>
      </motion.div>
      
    </section>
  );
};

export default AboutSection;