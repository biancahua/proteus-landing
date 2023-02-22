import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline' 



export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBGColor] = useState(false);
  
  const handleClick = () => setNav(!nav);

  const changeNavbar = () => {
    if (window.scrollY >= 80) setBGColor(true);
    else setBGColor(false);
  };

  window.addEventListener('scroll', changeNavbar);

  return (
    <div className={`${!bgColor ? "transparent" : "bg-pink opacity-75 text-white"} w-full my-0 mx-auto z-10 ease-in duration-300 h-[80px] drop-shadow-xl py-14 fixed`}>
      <div className='px-2 flex justify-between items-center w-full h-full'>
          <a href="http://www.proteus.app" className='w-48 flex flex-col md:visible invisible md: w-60 lg:w-72'>
            {!bgColor ? <img className="h-25" src="src/assets/PROTEUS2.png" alt="solid_proteus"></img> : <img className="h-25" src="src/assets/PROTEUS3.png" alt="solid_proteus"></img> }
          </a> 
          <ul className='text-lg hidden md:flex justify-items-end pl-24'>
            <li className='text-center'>Getting Started</li>
            <li className='text-center'>Docs</li>
            <li className='text-center'>Meet the Team</li>
            <li className='text-center'>Contact Us</li>
            <li className='text-center'>Updates</li>
          </ul>
      </div>
      <div className='md:hidden px-2 flex flex-row justify-end items-center absolute bottom-10 right-5' onClick={handleClick}>
        {!nav ? <Bars3Icon className='w-10' /> : <XMarkIcon className='w-10' />}
      </div>
      <div className="inline-block mt-14">
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'>Getting Started</li>
          <li className='border-b-2 border-zinc-300 w-full'>Docs</li>
          <li className='border-b-2 border-zinc-300 w-full'>Meet the Team</li>
          <li className='border-b-2 border-zinc-300 w-full'>Contact Us</li>
          <li className='border-b-2 border-zinc-300 w-full'>Updates</li>
        </ul>
      </div>
    </div>
  )
}

