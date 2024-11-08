import React from 'react';

// import data
import { navData } from '../data'

// import icons
import { CgClose } from 'react-icons/cg'

const NavMobile = ({ setNavMobile }) => {
  return <nav className='lg:hidden bg-violet h-full top-0 bottom-0 w-80  flex items-center justify-center'>
    {/* close btn */}
    <div
      onClick={() => setNavMobile(false)}
      className='absolute top-4 left-3 cursor-pointer hover:text-red-500'>
      <CgClose className='text-3xl' />
    </div>

    {/* menu list */}
    <ul className='text-xl flex flex-col items-center justify-center gap-y-12 '>
      {navData.map((item, index) => {
        return <li key={index}>
          <a href={item.href}> {item.name} </a>

        </li>
      })}
      {/* login & register */}
      <div className='flex items-center font-medium absolute bottom-12'>

        {/* link btn */}
        <a className='hover:text-blue transition' href="#"> Login </a>

        {/* separator */}
        <span className='mx-6 text-white/20 font-thin'>|</span>

        {/* register btn */}
        <button className='btn h-[52px] text-base px-8'>Register</button>
      </div>
    </ul>
  </nav>
};

export default NavMobile;
