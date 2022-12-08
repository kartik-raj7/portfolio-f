import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import quoteioimg from '../public/images/quoteio.png';
import Voyagerimg from '../public/images/voyager.png'
import moviesea from '../public/images/MovieSea.png'
import Todolist from '../public/images/todolist.png'
import Portfolio from '../public/images/portfolio-f.png'
import Blog from '../public/images/Blog.png'
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
            title='Quoteio'
            backgroundImg={quoteioimg}
            projectUrl='https://github.com/kartik-raj7/quoteio'
            tech='React JS, SASS , Javascript'
          />
          <ProjectCard
            title='Voyager'
            backgroundImg={Voyagerimg}
            projectUrl='https://github.com/kartik-raj7/voyager'
            tech='React JS, SASS , Javascript , EmailJs'

          />
          <ProjectCard
            title='MovieSea'
            backgroundImg={moviesea}
            projectUrl='https://github.com/kartik-raj7/moviesea'
            tech='HTML , SCSS , React JS , Redux , Thunk , OmdbAPI '

          />
           <ProjectCard
            title='Blog'
            backgroundImg={Blog}
            projectUrl='https://github.com/kartik-raj7/blog'
            tech='ReactJS ,  MongoDbCompass ,ExpressJS , NodeJS , MaterialUI , JavaScript , EmailJS ,'

          />
           <ProjectCard
            title='Portfolio'
            backgroundImg={Portfolio}
            projectUrl='https://kartikeygupta-folio.netlify.app/'
            tech='Next JS , TailwindCSS , ReactJs , React-Icons , EmailJs'

          />
          <ProjectCard
            title='TodoList'
            backgroundImg={Todolist}
            projectUrl='https://github.com/kartik-raj7/Todo-List'
            tech='HTML , CSS ,JavaScript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;