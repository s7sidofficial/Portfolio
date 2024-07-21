import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => {
  return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img
                src={icon}
                alt='web-development'
                className='w-16 h-16 object-contain'
              />
      
              <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      
      
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <motion.div 
          whileInView={{opacity: 1, y: 0}}
          initial= {{opacity: 0, y: -100}}
          transition={{duration: 1}}
          className="border-b border-neutral-900">
          <p className={styles.sectionSubText}><b>Introduction</b></p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>
      </motion.div>

      <motion.p
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity: 0, x: 100}}
        transition= {{duration: 0.7}}
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with expertise in
        frameworks like React, Node.js, Spring boot and Django.
        I'm a quick learner that create efficient, scalable 
        and user-friendly solutions to solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")