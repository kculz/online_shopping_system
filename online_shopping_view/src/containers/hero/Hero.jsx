import React from 'react'

import hero from '../assets/images/hero.svg'
// const hero = require("../assets/images/hero.svg".default)

const Hero = () => {
  return (
    <div className='px-10 py-10 w-full h-screen text-blue-900 font-bold'>
      <div className="flex justify-center items-center gap-10  ">
        <div className='md:flex flex-col  md:w-[50%] w-full h-auto'>
            <h1 className="text-4xl md:mt-0 mt-32">The world's most advanced online shop and delivery platform...</h1>
           <div>
           <button className='px-5 py-3 border border-blue-500 rounded-lg mr-10 text-2xl mt-3 capitalize hover:bg-blue-500 hover:text-white'>Start Shopping</button>
           </div>
        </div>
        <div className='md:flex hidden'>
            <img src={hero} alt="not found" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
