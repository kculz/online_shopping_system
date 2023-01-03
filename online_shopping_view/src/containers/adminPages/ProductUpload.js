import React from 'react'

const ProductUpload = () => {
  return (
    <form>
      <div className="px-10 py-10 bg-white border-2 border-blue-500 rounded-3xl w-[900px] my-10 mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          <div className="flex flex-col gap-4">

          <input type="text" name="" id="" className="border border-blue-500 p-3 rounded-lg outline-none focus:border-2"  placeholder='Title'/>

          <input type="text" name="price" id="price" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2' placeholder='$ 00.00' />
          </div>

          <textarea name="desc" id="desc" cols="48" rows="4" className="border border-blue-500 p-3 rounded-lg outline-none focus:border-2" placeholder='Product Desc'></textarea>

        </div>

        <div className="flex gap-4">
          <input type="text" name="quantity" id="quantity" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2' placeholder='0 units' />

          <input type="text" name="color" id="color" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2' placeholder='Available color' />
        </div>
        
        <div className="flex gap-4">
          <select name="category" id="category" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2 w-[390px]' >
            <option value="" selected>Category</option>
            <option value="Product">Product</option>
            <option value="Service">Service</option>
          </select>

          <select name="category" id="category" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2 w-[390px]' >
            <option value="" selected>Sub Category</option>
            <option value="Product">Networking</option>
            <option value="Service">Computer Services</option>
            <option value="Service">Accessories</option>
          </select>
        </div>

        <div className="flex gap-4">
          <input type="file" name="image" id="image" placeholder='Choose Product Image' className='' />
          <input type="submit" value="Submit" className='border border-blue-500 p-3 rounded-lg outline-none focus:border-2 ' />
        </div>
        

      </div>
    </form>
  )
}

export default ProductUpload
