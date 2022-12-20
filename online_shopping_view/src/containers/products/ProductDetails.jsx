import React from 'react'

import product from '../assets/images/product.jpeg'

import {ImPriceTag} from 'react-icons/im'
import {MdOutlineAddShoppingCart,MdOutlineRemoveShoppingCart} from 'react-icons/md'
import { FaBoxes } from 'react-icons/fa'

const ProductDetails = () => {
  return (
    <div className='flex flex-row px-10 py-10 '>
      <div className="overflow-hidden basis-1/2">
        <img src={product} alt="product" />
      </div>
      <div className='basis-1/2'>
        <h1 className='font-bold text-2xl text-blue-500'>Wireless Router</h1>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, quia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure nisi laudantium!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos maxime velit?
        </p>
       <div className="flex gap-2 mt-8">
       <ImPriceTag  size={30} color='#309CFB'/>
        <p className='text-3xl text-blue-500 font-bold'>$ 20.00</p>
        <FaBoxes size={30} color='#309CFB' className='ml-10'/>
        <p className='text-3xl text-blue-500 font-bold'>5 in-stock</p>
        
       </div>

       <div className='mt-10 flex gap-6 w-44  shadow-lg h-auto px-2 py-1 rounded-lg '>
        <MdOutlineRemoveShoppingCart size={40} color='#309CFB' className='overflow-hidden cursor-pointer '/>
        <p className="text-2xl text-blue-500">1</p>
        <MdOutlineAddShoppingCart size={40} color='#309CFB' className='overflow-hidden cursor-pointer '/>
       </div>
      </div>

      <div className="basket">

      </div>
    </div>
  )
}

export default ProductDetails
