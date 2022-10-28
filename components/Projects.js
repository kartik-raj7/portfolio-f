import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/images/quoteio.png';
import cryptoImg from '../public/images/voyager.png'
import netflixImg from '../public/images/weather.png'
import twitchImg from '../public/images/todolist.png'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <center><p className='text-xl tracking-widest uppercase text-[#61dafb] pb-10'>
          Projects
        </p>
        </center>
        <center><h2 className=' border-white pb-20'>What I&apos;ve Built</h2></center>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectCard
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectCard
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectCard
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectCard
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
          <ProjectCard
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
          <ProjectCard
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;