import {React} from 'react'
import Shopping_svg from '../assets/shopping.svg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='bg-white w-screen h-90vh '>
      <div className="grid grid-cols-2 px-10 place-content-center">
          <div className='mt-10'>
            <img src={Shopping_svg} alt="" />
          </div>
          <div className='flex flex-col px-10 justify-center items-center'>
            <h1 className='capitalize text-[50px] font-bold text-center text-gray-700'>Welcome <br/>to <br /> GreyTech Shop</h1>
            <div className='bg-blue-600 rounded-xl px-8 py-3 text-white text-xl'>
              <Link to='/'>Get Started</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
