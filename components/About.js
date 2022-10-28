import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avimg from '../public/images/image.png'
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
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
          <p className='py-8 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, NextJs  I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <Link href='/#projects'>
            <p className='py-10 text-[#61dafb] cursor-pointer hover:text-white'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='shadow-xl px-12 shadow-[#61dafb] rounded-full  flex items-center justify-center hover:scale-105 ease-in duration-300 '>
        <Image src={Avimg} className='rounded-xl' alt='/' width={300} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default About;