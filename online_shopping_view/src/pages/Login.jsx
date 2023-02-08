import React, { useState } from 'react'

const Login = () => {
    const [user,setUser] = useState({})
    const handleChange = (e) => {
        const {name,value} = e.target
        setUser(userInfo => ({...userInfo, [name]:value}))
    }
    const handleSubmit = () => {
        
    }
  return (
    <div className='px-10 flex flex-col justify-center items-center'>
      <h1 className="text-center text-3xl text-gray-700">Add new product</h1>
      <form className=" border shadow-2xl bg-white rounded-3xl px-7 mt-10 w-[500px] h-auto flex flex-col gap-6 py-5 justify-center items-center " onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-3">
          <input type="email" name="email" id="email" placeholder="Email" className='input-style' onChange={handleChange}/>
          <input type="password" name="password" id="password" placeholder="Enter password" className='input-style' onChange={handleChange}/>
        </div>
        
        <input type="submit" value="Add" className='bg-blue-600 rounded-xl px-8 py-3 text-white text-xl w-full'/>
      </form>
    </div>
  )
}

export default Login
