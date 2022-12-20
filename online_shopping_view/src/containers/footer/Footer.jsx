import React from 'react'
import { FaAppStore, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='w-full h-auto px-10 py-8 flex flex-wrap justify-center items-start bg-blue-600'>
      <div className='flex gap-10'>
        <div>
            <h1 className='text-xl font-bold'>Customer Service</h1>
            <ul className=' text-sm text-white'>
                <li>FAQ</li>
                <li>Returns & refunds</li>
                <li>Terms & conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <h1 className='text-xl font-bold'>Greycode Store</h1>
            <ul className=' text-sm text-white'>
                <li>Location</li>
                <li>Store hours</li>
                <li>Store events </li>
                <li>Greycode store events</li>
            </ul>
        </div>
        <div>
            <h1 className='text-xl font-bold'>About Us</h1>
            <ul className=' text-sm text-white'>
                <li>Our story</li>
                <li>Carriers with Greycode Technologies</li>
                <li>News</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>Follow us on</h1>
        <div className='flex gap-10 items-start'>
            <FaFacebook size={30} color='white'/>
            <FaTwitter size={30} color='white'/>
            <FaInstagram size={30} color='white'/>
        </div>
        <h1 className='text-xl font-bold'>Mobile Apps</h1>
        <div className="flex gap-10">
          <IoLogoGooglePlaystore size={30} color='white' />
          <FaAppStore size={30} color='white' />
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
