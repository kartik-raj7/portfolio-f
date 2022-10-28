import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({title, backgroundImg, tech, projectUrl,techcont}) => {
  return (
    <div className='relative flex items-center flex-col justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#61dafb] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} width={500} height={200}alt='/' /> 
    <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectCard