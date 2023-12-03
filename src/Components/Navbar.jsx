import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [nav,setNav] = useState(true)

    const mobileNav = () => {
        setNav(!nav)
    };
 
  return (
    <div className='flex justify-between h-24 items-center text-white max-w-[1240px] mx-auto px-4'>
        <h1 className='w-auto text-3xl font-bold text-[#00df9a]'>ZenoxtiC</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#00df9a] duration-300 cursor-pointer'>Home</li>
            <li className='p-4 hover:text-[#00df9a] duration-300 cursor-pointer'>About Us</li>
            <li className='p-4 hover:text-[#00df9a] duration-300 cursor-pointer'>Services</li>
            <li className='p-4 hover:text-[#00df9a] duration-300 cursor-pointer'>Portfolio</li>
            <li className='p-4 hover:text-[#00df9a] duration-300 cursor-pointer'>Contact Us</li>
        </ul>
        <div onClick={mobileNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}    
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#05050c] ease-in-out duration-500 block md:hidden': 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ZenoxtiC</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About Us</li>
                <li className='p-4 border-b border-gray-600'>Services</li>
                <li className='p-4 border-b border-gray-600'>Portfolio</li>
                <li className='p-4'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar