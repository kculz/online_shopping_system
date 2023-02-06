import React from 'react'
import {BsCart2, BsTwitter,BsFacebook} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links = [
        {
            id:1,
            name: 'home',
            link: '/'
        },
        {
            id:2,
            name: 'products',
            link: '/products'
        },
        {
            id:3,
            name: 'cart',
            link: '/cart'
        },
        // {
        //     id:1,
        //     name: 'Home',
        //     link: '/'
        // },
    ]
  return (
    <div className='h-20 fixed bg-blue-700 w-screen '>
      <ul className='flex flex-row-reverse gap-4 px-10 bg-blue-500 py-1'>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter color='white'/></a>
        </li>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <BsFacebook color='white'/></a>
        </li>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <GrMail color='white'/></a>
        </li>
        
       
      </ul>
      <div>
        <h1 className='text-2xl text-white font-bold'></h1>
      </div>
      
      <div className='flex justify-between items-center px-10'>
        <h1 className="text-white text-2xl mt-3">GreyTech Shop</h1>
        <div>
        <ul className='text-white capitalize flex justify-center items-center gap-5 px-5 mt-3 text-xl'>
                {
                    links.map(link => 
                    <li key={link.id}>   
                    <Link  to={link.link}>{link.name}</Link>
                    </li>
                    )
                }
        </ul>
      </div>
      <div>
        <Link to='/cart'>
            <BsCart2  size={35} color="white"/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
