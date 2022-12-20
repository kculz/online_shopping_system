import React from 'react'

import {FaApple} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {TiArrowBackOutline} from 'react-icons/ti'

const sign_up = () => {
  return (
    <div className='flex bg-white px-10 py-10  justify-center items-center'>
      <div className='rounded-lg p-10 flex flex-col gap-5 w-[650px] shadow-gray-700 shadow-2xl'>
        <h1 className='text-2xl font-bold text-center'>User registration page</h1>
        <div className='md:flex gap-3 p-2 justify-center items-center'>
        <input type="text" name="Firstname" id="Firstname" className='border md:mb-0 mb-1 border-blue-600 px-3 py-2 rounded-lg ' placeholder='Firstname' />
        <input type="text" name="Lastname" id="Lastname" className='border md:mb-0 mb-1 border-blue-600 px-3 py-2 rounded-lg ' placeholder='Lastname' />
        </div>
        <div className='md:flex gap-3 p-2 justify-center items-center'>
        <input type="text" name="username" id="username" className='border md:mb-0 mb-1 border-blue-600 px-3 py-2 rounded-lg ' placeholder='Username' />
        <input type="email" name="Email" id="Email" className='border md:mb-0 mb-1 border-blue-600 px-3 py-2 rounded-lg ' placeholder='example@gmail.com' />
        </div>
        <div className='md:flex gap-3 p-2 justify-center items-center'>
        <input type="password" name="password" id="password" className='border md:mb-0 mb-1 border-blue-600 px-3 py-2 rounded-lg ' placeholder='Password' />
        <input type="password" name="confirm_password" id="confirm_password" className='border md:mb-0 mb-1 border-blue-600 px-3 py-2 rounded-lg ' placeholder='Confirm Password' />
        </div>
        
       
        
        <button className='px-2 py-2  bg-blue-500 rounded-lg text-2xl mt-3 capitalize text-white'>sign up</button>
        <div className='mx-5 w-full h-auto'>
            <h1 className='text-center'>Or <br /> Sign in with:</h1>
            <div className='flex justify-center items-center gap-3'>
                <FaApple size={35} color='gray' />
                <FcGoogle size={32} color='gray' />
            </div>
        </div>
      </div>

      <div className='flex justify-center items-center  top-10 right-0 left-10 shadow-gray-600 shadow-2xl rounded-full w-14 h-auto  p-3 cursor-pointer z-50 fixed'>
        <TiArrowBackOutline  size={35} color='#4290EC'/>
      </div>
    </div>
  )
}

export default sign_up