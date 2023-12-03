import React from 'react'
import Single from  '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const CardJs = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/* First Card */}
            <div className='w-full flex flex-col shadow-xl rounded-lg p-4 my-4 hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Singale Pakage image" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$140</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b my-8 mx-8'>500GB Storage</p>
                    <p className='py-2 border-b my-8'>Granted User</p>
                    <p className='py-2 border-b my-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md py-3 font-medium mx-auto my-6 text-black hover:bg-[#00df8a] duration-300'>Start Trial</button>
            </div>
            {/* Second Card */}
            <div className='w-full flex flex-col bg-gray-100 shadow-xl rounded-lg p-4 my-4 hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[-2.1rem] bg-transparent' src={Double} alt="Singale Pakage image" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-4xl font-bold text-center'>$280</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b my-8 mx-8'>500GB Storage</p>
                    <p className='py-2 border-b my-8'>Granted User</p>
                    <p className='py-2 border-b my-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[#000000] w-[200px] rounded-md py-3 font-medium mx-auto my-6 text-[#00df9a] hover:text-white duration-300'>Start Trial</button>
            </div>
            {/* Third Card */}
            <div className='w-full flex flex-col shadow-xl rounded-lg p-4 my-4 hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[-2.1rem] bg-white' src={Triple} alt="Singale Pakage image" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-4xl font-bold text-center'>$400</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b my-8 mx-8'>500GB Storage</p>
                    <p className='py-2 border-b my-8'>Granted User</p>
                    <p className='py-2 border-b my-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md py-3 font-medium mx-auto my-6 text-black hover:bg-[#00df8a] duration-300'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default CardJs