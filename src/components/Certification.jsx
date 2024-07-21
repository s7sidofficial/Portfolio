import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { credly } from "../assets";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-8 rounded-2xl'
      >
        <div className='relative w-full h-[300px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={credly}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'></h3>
          {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
        </div>

        {/* <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};

const Certification = () => {
  return (
    <>
      <motion.div 
      whileInView={{opacity: 1, y: 0}}
      initial= {{opacity: 0, y: -100}}
      transition={{duration: 1}}
      variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}><b>What i have achieved so far</b></p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          whileInView={{opacity: 1, x: 0}}
          initial= {{opacity: 0, x: 100}}
          transition= {{duration: 1}}
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following certifications shows my necessary knowledge, skills and 
          verifies that I have achieved a baseline level of competence in a complicated 
          subject area. Each certification is described with credential link.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certifications.map((certification, index) => (
          <ProjectCard key={`certification-${index}`} index={index} {...certification} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "");