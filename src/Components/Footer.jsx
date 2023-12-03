import React from 'react'
import {
     FaFacebook,
     FaInstagram,
     FaTwitter,
     FaGithub,
     FaLinkedinIn
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-auto text-3xl font-bold text-[#00df9a]'>ZenoxtiC</h1>
            <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis cupiditate commodi distinctio perferendis pariatur corrupti iste amet sed? Officiis explicabo laudantium consequuntur aut, voluptate mollitia veritatis ducimus aliquam eum beatae, voluptas debitis! Libero sed, odio praesentium alias aspernatur eligendi.</p>
            <div className='flex justify-between md:w-[75%] my-5'>
                <FaFacebook size={30} className='hover:text-blue-500 duration-300 cursor-pointer' />
                <FaInstagram size={30} className='hover:text-pink-500 duration-300 cursor-pointer' />
                <FaTwitter size={30} className='hover:text-blue-700 duration-300 cursor-pointer' />
                <FaGithub size={30} className='hover:text-pink-700 duration-300 cursor-pointer' />
                <FaLinkedinIn size={30} className='hover:text-blue-900 duration-300 cursor-pointer'/>
            </div>
        </div>
        <div className='lg:col-span-2 pt-16 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Analytics</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Marketing</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Commerce</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Pricing</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Documentaion</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Guides</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>About</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Blogs</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Job</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Press</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Leagal</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Claim</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Policy</li>
                    <li className='py-2 text-sm hover:text-gray-100 duration-300 cursor-pointer'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer