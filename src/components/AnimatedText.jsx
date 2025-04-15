import { motion } from "framer-motion";

const AnimatedText = ({ children, delay = 2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: delay, duration: 1 }
      }}
      viewport={{ once: true }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText

