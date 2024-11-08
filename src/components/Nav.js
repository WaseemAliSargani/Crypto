import React from 'react';

// import data
import { navData } from '../data'

const Nav = () => {
  return <nav className='flex items-center'>
    <ul className='text-xl flex gap-x-10'>
      {navData.map((item, index) => {
        return <li
        className='border-b-2 border-transparent hover:border-blue transition-all'
          key={index} >
          <a className='' href={item.href}> {item.name} </a>
        </li>
      })}
    </ul>
  </nav>
};

export default Nav;
