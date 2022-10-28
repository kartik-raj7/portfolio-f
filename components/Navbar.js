import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-lg shadow-[#61dafb] z-[100]">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        {/* <Image class='px-5 py-5'src='/../public/images/logo.png' alt='/' width='200' height='50' py-20/> */}
        <h2 className="px-2 py-5">
          <span>&lt;</span>
          Kartikey/
          <span>&gt;</span>
        </h2>
        <div >
            <ul className="hidden md:flex">
            <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">Project</li>
            </Link>
            <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
            </Link>
            </ul>
            <div className="md:hidden">
                <AiOutlineClose/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
