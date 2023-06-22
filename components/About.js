import Image from 'next/image';
import Link from 'next/link';
import Avimg from '../public/images/image.png'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './About.module.css';
const AboutSection = () => {
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
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX * 3 - rect.left;
      buttonRef.current.style.setProperty('--x', `${x}deg`);
    };

    buttonRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      buttonRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <center>
            <p className='uppercase text-xl tracking-widest text-[#61dafb]'>
              About
            </p>
          </center>
          <center>
            <h2 className=' py-8'>Who I Am</h2>
          </center>
          <p className='py-10 text-gray-600'>
          I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, NextJs  I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <Link href="/#projects" ref={buttonRef} className={styles.a}>
      <i className={styles.i}></i>
      <i className={styles.i}></i>
      <span>Checkout Some of the Latest Projects</span>
    </Link>
        </div>
        <motion.div
  ref={containerRef}
  className='shadow-xl px-12 my-10 shadow-[#61dafb] rounded-full  flex items-center justify-center hover:scale-105 ease-in duration-300 '
  style={{ transform: 'scale(0)' }}
  initial='hidden'
  animate={controls}
  variants={{
    visible: { rotate: 360, scale: 1 },
    hidden: { rotate: 0, scale: 0 }
  }}
  transition={{
    type: "spring",
    stiffness: 700,
    damping: 100
  }}
>
  <motion.div
    drag
    dragConstraints={containerRef}
    dragElastic={0.7}
  >
    <div>
    <Image src={Avimg} className='rounded-xl' alt='/' width={200} height={80} />
    </div>
  </motion.div>
</motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
