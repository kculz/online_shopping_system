import axios from 'axios'
import React, { useState, useEffect } from 'react'

const AddProduct = () => {
  const [products,setProducts] = useState({

  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setProducts(product => ({...product, [name]: value}))

  
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/products/add',products,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((response)=> {
      console.log('good' + response.data)
    }).catch(err=> console.log(err))

  }
  return (
    <div className='px-10 flex flex-col justify-center items-center'>
      <h1 className="text-center text-3xl text-gray-700">Add new product</h1>
      <form encType='multipart/form-data' className=" border shadow-2xl bg-white rounded-3xl px-7 mt-10 w-[500px] h-auto flex flex-col gap-6 py-5 justify-center items-center " onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-3">
          <input type="text" name="title" id="title" placeholder="Title" className='input-style' onChange={handleChange}/>
          <input type="text" name="desc" id="desc" placeholder="Desc" className='input-style' onChange={handleChange}/>
        </div>
        <div className="flex justify-center items-center gap-3">
          <input type="number" name="price" id="price" placeholder="Price" className='input-style' onChange={handleChange}/>
          <input type="text" name="category" id="category" placeholder="Category" className='input-style' onChange={handleChange}/>
        </div>
        <div className="flex justify-center items-center gap-3">
          <input type="text" name="color" id="color" placeholder="Color" className='input-style' onChange={handleChange}/>
          <input type="number" name="weight" id="weight" placeholder="Weight" className='input-style' onChange={handleChange}/>
        </div>
        <div className="flex justify-center items-center gap-3">
          <input type="number" name="len" id="len" placeholder="Length" className='input-style' onChange={handleChange}/>
          <input type="number" name="width" id="width" placeholder="Width" className='input-style' onChange={handleChange}/>
        </div>
        <div className="flex justify-center items-center gap-3">
          <legend>
          <input type="file" name="img" id="img" placeholder="Image Upload" className='' onChange={handleChange}/>
          </legend>
        </div>
       
        <input type="submit" value="Add" className='bg-blue-600 rounded-xl px-8 py-3 text-white text-xl w-full'/>
      </form>
    </div>
  )
}

export default AddProduct
