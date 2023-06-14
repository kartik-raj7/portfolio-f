import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center flex justify-center items-center lg:flex-row sm:flex-col'>
    <div className=' h-screen text-center'>
      <div className='max-w-[1040px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase mt-20 text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING AWESOME
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#61dafb]'>Kartikey Gupta</span>
          </h1>
          <h1 className='py-2 text-gray-700 '>
          <Typewriter className='py-2 text-gray-700 ' options={{ strings: ['Competitive Programmer', 'Full Stack Developer'],autoStart: true,loop: true,}}/>
          </h1>
          <p className='py-10 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            as well as integrating back-end technologies.
          </p>
          <div className='flex items-center  justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/kartikey20gupta/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-[#61dafb] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/kartik-raj7'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-[#61dafb] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-[#61dafb] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-[#61dafb] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
       
      </div>
      
    </div>
    <div className="h-screen flex justify-center items-center">
    <div className="max-w-[600px] h-full flex justify-center items-center">
      <Spline style={{display:'flex',justifyContent:'center',alignItems:'center'}}scene="https://prod.spline.design/mr93lLYd1-lHCmlv/scene.splinecode" />
    </div>
  </div>
    </div>
  );
};

export default Main;