import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useUserLoginQuery } from '../redux/features/usersApi'

const Login = () => {
    const [user,setUser] = useState({})
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        const {name,value} = e.target
        setUser(userInfo => ({...userInfo, [name]:value}))
    }

    const navigate = useNavigate()
    const notify = () => toast("Login Successful")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(`http://localhost:5000/users/login`, user)
        .then((response)=> {
          console.log(response.data)
          navigate("/products")
          notify()
        })
        .catch(err => {
          console.log(err.data)
        })
    }
  return (
    <div className='px-10 flex flex-col justify-center items-center'>
      <ToastContainer />
      <h1 className="text-center text-3xl text-gray-700">User Login</h1>
      <form className=" border shadow-2xl bg-white rounded-3xl px-7 mt-10 w-[500px] h-auto flex flex-col gap-6 py-5 justify-center items-center " onSubmit={handleSubmit}>
        <div className="flex  justify-center items-center gap-3">
          <input type="email" name="email" id="email" placeholder="Email" className='input-style' onChange={handleChange}/>
          <input type="password" name="password" id="password" placeholder="Enter password" className='input-style' onChange={handleChange}/>
        </div>
        
        <input type="submit" value="Add" className='btn-full'/>
      </form>
    </div>
  )
}

export default Login
