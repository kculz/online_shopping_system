import React, { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const ProductUpload = () => {
  
  const [product, setProduct] = useState({
    title: '',
    desc: '',
    image: '',
    category: '',
    subCategory: '',
    weight: 0,
    length: 0,
    width: 0,
    color: '',
    price: 0
  })

  const handleProductChange = (e) => {
    const {name,value} = e.target
    setProduct((prev)=> {
      return { ...prev, [name]: value}
    })
  }

  const url = `http://localhost:5000/products/add`
  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(url,product)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }

    e.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-10 py-10 bg-white border-2 border-blue-500 rounded-3xl w-[900px] my-10 mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          <div className="flex flex-col gap-4">

          <input type="text" name="title" id="" className="border border-blue-500 p-3 rounded-lg outline-none focus:border-2"  placeholder='Title' onChange={handleProductChange}/>

          <input type="text" name="price" id="price" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2' placeholder='$ 00.00' onChange={handleProductChange}/>
          </div>

          <textarea name="desc" id="desc" cols="48" rows="4" className="border border-blue-500 p-3 rounded-lg outline-none focus:border-2" placeholder='Product Desc' onChange={handleProductChange}></textarea>

        </div>

        <div className="flex gap-4">
          <input type="text" name="quantity" id="quantity" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2' placeholder='0 units' onChange={handleProductChange} />

          <input type="text" name="color" id="color" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2' placeholder='Available color' onChange={handleProductChange} />
        </div>
        
        <div className="flex gap-4">
          <select name="category" id="category" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2 w-[390px]' onChange={handleProductChange} >
            <option value="" defaultValue={''}>Category</option>
            <option value="Product">Product</option>
            <option value="Service">Service</option>
          </select>

          <select name="subCategory" id="category" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2 w-[390px]' onChange={handleProductChange}>
            <option value="">Sub Category</option>
            <option value="Networking">Networking</option>
            <option value="Computers">Computers</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="flex gap-4">
          <input type="file" name="image" id="image" placeholder='Choose Product Image' className=''onChange={handleProductChange} />
          <input type="submit" value="Submit" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2 ' />
        </div>
        

      </div>
    </form>
  )
}

export default ProductUpload
