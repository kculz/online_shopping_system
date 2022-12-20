import React from 'react'
import { Link } from 'react-router-dom'


import {FaAppStore, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const Header = () => {
  return (
    <div className=' bg-blue-500 h-10 '>
       <div className="flex justify-end item-end pt-3 gap-5 px-10">
        
        <Link to='/'>
        <FaInstagram size={18} className='cursor-pointer' color='white'/>
        </Link>
        <FaTwitter size={18} className='cursor-pointer' color='white'/>
        <FaWhatsapp size={18} className='cursor-pointer' color='white'/>
        <FaFacebook size={18} className='cursor-pointer' color='white'/>
        <IoLogoGooglePlaystore size={18} className='cursor-pointer' color='white' />
        <FaAppStore size={18} className='cursor-pointer' color='white' />
       </div>
       
    </div>
  )
}

export default Header
