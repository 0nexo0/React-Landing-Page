import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] p-2 font-bold text-xl'>Growing with data anylatics.</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Grow with data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl py-2'>Fast, flexible, financing for</p>
                <Typed 
                    className='md:text-4xl sm:text-3xl text-xl pl-3 text-gray-400'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop 
                    />
            </div>
            <p className='md:text-2xl text-[18px] pt-2 font-bold text-gray-500'>Monitor your data anylatics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] hover:bg-[#00df8a] duration-300 rounded-md py-3 font-medium mx-auto my-6 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero