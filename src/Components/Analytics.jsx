import React from 'react'
import AnalyticsData from '../assets/analytics.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={AnalyticsData} alt="Laptop image" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Manage Data Analytics Centrally</h1>
              <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ratione sed nesciunt dolore esse voluptas
                 provident tenetur ut saepe, magnam, rem, dolorem sapiente accusamus nulla sint quas. 
                 Explicabo, dolor nihil!provident tenetur ut saepe, magnam, rem, dolorem sapiente accusamus nulla sint quas</p>
                 <button className='bg-black w-[200px] rounded-md hover:text-white duration-300 py-3 font-medium my-8 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics