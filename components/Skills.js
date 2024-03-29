import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import {AiOutlineHtml5,AiOutlineGithub, AiFillGithub} from 'react-icons/ai'
import {DiCss3,DiJavascript1,DiReact} from 'react-icons/di'
import {SiTailwindcss,SiFirebase,SiCplusplus,SiMaterialui,SiChakraui, SiRedux} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {GiSkills} from 'react-icons/gi'
import { motion, useAnimation } from 'framer-motion';
const Skills = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
 
  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > containerTop) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <div ref={containerRef}  id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <center><p className='text-xl tracking-widest uppercase text-[#61dafb]'>
          Skills
        </p>
        </center>
        <center><h1 className='py-4 mb-20'>What I Can Do</h1></center>
        <motion.div  variants={container}
    initial="hidden"
    animate={controls} className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <AiOutlineHtml5 size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item} className='p-6    shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <DiCss3 size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6    shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiCplusplus size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C++</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item} className='p-6 shadow-[#61dafb]  shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <DiJavascript1 size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <DiReact size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiTailwindcss size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiFirebase size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiMaterialui size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MaterialUI</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiChakraui size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ChakraUI</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiRedux size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Redux</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <AiFillGithub size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}  className='p-6  shadow-[#61dafb] shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <TbBrandNextjs size={80}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;