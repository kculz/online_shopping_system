import React from 'react'
import Shopping_svg from '../assets/shopping.svg'

const Hero = () => {
  return (
    <div className='bg-white w-screen h-90vh '>
      <div className="flex gap-12 px-10 justify-center items-center">
          <div className='grid justify-center items-center'>
            <img src={Shopping_svg} alt="" />
          </div>
          <div className='flex flex-col gap-5 px-3'>
            <h1></h1>
          </div>
      </div>
    </div>
  )
}

export default Hero
