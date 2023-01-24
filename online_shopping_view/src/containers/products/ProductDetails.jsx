import React from 'react'
import { useSelector } from 'react-redux'

import {BiDollar} from 'react-icons/bi'
import { BsCartDash } from 'react-icons/bs'
import { BsCartPlus } from 'react-icons/bs'

import pic from '../assets/images/product.jpeg'

const ProductDetails = () => {
    // const products = useSelector((state) => state.allProducts.products)
    // const {id,title,cat} = products
    // console.log(products)
  return (
    <div className='flex gap-5 justify-center px-10'>
      <div className='px-10 w-1/3' >
        <img src="https://assets.stickpng.com/images/5f49277468ecc70004ae7083.png" alt="" className=''/>
      </div>
      <div className='flex flex-col gap-y-4 '>
        
        <div>
          <h1 className='text-3xl mt-3 text-gray-900'>Buy iPhone SE</h1>
          <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p className="text-lg text-blue-400 mb-4">Products, Phones, Accessories</p>
          <h3 className='text-2xl text-gray-700'>
            <div className="flex items-center "><BiDollar /> <p>200.00</p></div>
          </h3>
        </div>
        <div className=''>
          <h4 className='text-3xl text-gray-900'>Quantity</h4>
          <div className='flex gap-3 items-center'>
            <div className='cursor-pointer'>
            <BsCartDash size={30} />
            </div>
            <div className='shadow-xl rounded-lg bg-white w-32 p-4 text-gray-700 text-2xl text-center'>
            1
            </div>
            <div className='cursor-pointer'>
            <BsCartPlus size={30} />
            </div>
          </div>
        </div>
        <div>
          <button className='shadow-2xl bg-blue-700 rounded-xl text-white text-xl px-5 py-3 w-52'> Add to cart </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
