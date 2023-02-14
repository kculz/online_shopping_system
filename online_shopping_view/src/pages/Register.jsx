import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [user, setUser] = useState({})
  const handleChange = (e) => {
    const {name,value} = e.target
    setUser((userInfo)=> ({...userInfo, [name]: value}))
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
    console.log(user)
    const res = await axios.post('http://localhost:5000/users/register',user)
    .then(()=> {
      console.log(res)
    })
    .catch(err => {
      console.log(err.data)
    })
    
  }
  return (
    <div className='px-10 flex flex-col justify-center items-center'>
    <h1 className="text-center text-3xl text-gray-700">Add new product</h1>
    <form className=" border shadow-2xl bg-white rounded-3xl px-7 mt-10 w-[500px] h-auto flex flex-col gap-6 py-5 justify-center items-center ">
      <div className="flex justify-center items-center gap-3">
        <input type="text" name="firstname" id="firstname" placeholder="firstname" className='input-style' onChange={handleChange}/>
        <input type="text" name="lastname" id="lastname" placeholder="lastname" className='input-style' onChange={handleChange}/>
      </div>
      <div className="flex justify-center items-center gap-3">
        <input type="text" name="username" id="username" placeholder="username" className='input-style' onChange={handleChange}/>
        <input type="email" name="email" id="email" placeholder="email" className='input-style' onChange={handleChange}/>
      </div>
      <div className="flex justify-center items-center gap-3">
        <input type="password" name="password" id="password" placeholder="password" className='input-style' onChange={handleChange}/>
      </div>
      
      
     
      <input type="submit" value="Register" className='bg-blue-600 rounded-xl px-8 py-3 text-white text-xl w-full' onClick={handleSubmit}/>
    </form>
  </div>
  )
}

export default Register
