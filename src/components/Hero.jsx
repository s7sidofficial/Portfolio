import { motion } from "framer-motion";

import { TypeAnimation } from 'react-type-animation';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 0.5, delay: delay},
  },
})


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shashank</span>
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent "><b>
                    
            {/*  This is used to add animation in FULL STACK DEVELOPER and SOFTWARE ENIGINEER */}
            <TypeAnimation
            sequence={[
              '{ Full Stack Developer }',
              1000, 
              'Cloud Enthusiast ☁️',
              1000,
              'Software Engineer 🧑‍💻',
              1000,
            ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '3xl', display: 'inline-block' }}
              repeat={Infinity}
            /></b>
          </motion.span>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero