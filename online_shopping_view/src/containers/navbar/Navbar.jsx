import React from 'react'
import { useState } from 'react'

import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [singedIn, setSignedIn] = useState(false)
    const navLinks= [
        {
            id:1,
            link:'Home',
            to:'/'
,        },
        {
            id:2,
            link:'shop',
            to:'/shop'
        },
        {
            id:3,
            link:'Account Manager',
            to:'/account'
        },
        
    ]
  return (
    <div className='h-20 w-full  flex justify-between items-center bg-blue-600 text-white z-50'>
      <div className="logo text-4xl font-bold capitalize mx-4 px-4">Greycode Technologies</div>
      <ul className="hidden md:flex  justify-center items-center pr-4">
       {
        navLinks.map(({id,link,to,icon})=>{
            return(
        <Link to={to} className="capitalize font-2xl mx-3 cursor-pointer hover:scale-105 duration-300" key={id}>{link}</Link>
            )
        })
       }
      </ul>

      <div className='cursor-pointer px-8 md:hidden' onClick={()=> setNav(!nav)}>
        {
            (nav ? <FaTimes size={25}/> : <FaBars size={25}/>)
        }
      </div>

        {
            nav && <ul className="flex flex-col justify-center items-center absolute top-20 left-0  w-full h-screen bg-gradient-to-b from-blue-600 to-blue-400 text-white">

            {
            navLinks.map(({id,link,to,icon})=>{
              return(
                <Link to={to} key={id} className="cursor-pointer text-3xl py-4 capitalize">{link}</Link>
              )
            })
          }
            </ul>
        }
        
        {
            !singedIn && <div className='md:flex hidden'>
                <Link to='/signin' className='px-2 py-3 border border-white rounded-lg mr-10'>Sign In</Link>
            </div>
        }

    </div>
  )
}

export default Navbar
