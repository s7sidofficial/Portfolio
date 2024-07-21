import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";


import html from '../assets/tech/html2.svg'
import css from '../assets/tech/css2.svg'
import js from '../assets/tech/js.svg'
import cpp from '../assets/tech/cpp.png'
import react from '../assets/tech/react.svg'
import mongodb from '../assets/tech/mongodb.png'
import nodejs from '../assets/tech/nodejs.png'
import tailwind from '../assets/tech/tailwind.png'
import redux from '../assets/tech/redux.png'
import typescript from '../assets/tech/typescript.png'
import framer from '../assets/tech/framer.svg'
import mysql from '../assets/tech/mysql.svg'
import java from '../assets/tech/java.png'
import python from '../assets/tech/python.svg'
import spring from '../assets/tech/spring.svg'
import django from '../assets/tech/django.svg'
import bootstrap from '../assets/tech/bootstrap.svg'
import postman from '../assets/tech/postman.svg'
import git from '../assets/tech/git.svg'
import github from '../assets/tech/github.png'
import aws from '../assets/tech/aws.svg'
import google from '../assets/tech/google.svg'
import figma from '../assets/tech/figma.png'
import adobe from '../assets/tech/adobe.svg'
import vs  from '../assets/tech/vs.svg'
import c from '../assets/tech/c.svg'
import canva from '../assets/tech/canva.svg'



const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
});

const Tech = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="border-b border-neutral-900"
        variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          <b>Crafting Apps with Cutting-Edge</b>
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 80, height: 85 }} src={html} alt='logo'/>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 80, height: 85 }} src={css} alt='logo'/>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 78, height: 80 }} src={js} alt='logo' />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 84, height: 90 }} src={react} alt='logo' />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 88, height: 95 }} src={mongodb} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 93, height: 93}} src={nodejs} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 85, height: 95 }} src={tailwind} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 98, height: 150 }} src={mysql} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 83, height: 85}} src={redux} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 80, height: 78 }} src={typescript} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 77, height: 80 }} src={framer} alt='logo' />
        </motion.div>
        </div>


        <div className='mt-2 flex flex-wrap items-center justify-center gap-5'>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 92, height: 93 }} src={c} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 92, height: 93 }} src={cpp} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 100, height: 100}} src={java} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 85, height: 82}} src={python} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 96, height: 100}} src={spring} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width:78, height: 83}} src={django} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 95, height: 95}} src={bootstrap} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 100, height: 110}} src={postman} alt='logo' />
        </motion.div>
        </div>

        <div className='mt-5 flex flex-wrap items-center justify-center gap-6'>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 93, height: 100}} src={git} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 100, height: 110}} src={aws} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 98, height: 100}} src={google} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 98, height: 100}} src={github} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 70, height: 88}} src={figma} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 92, height: 100}} src={canva} alt='logo' />
        </motion.div>
        </div>
        <div className='mt-5 flex flex-wrap items-center justify-center gap-5'>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width:88, height: 92}} src={adobe} alt='logo' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" >
          <img style={{ width: 90, height: 70}} src={vs} alt='logo' />
        </motion.div>
          </div>




    </>
  );
};

export default SectionWrapper(Tech, "");