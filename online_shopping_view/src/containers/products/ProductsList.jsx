import React from 'react'
import { BiDollar } from 'react-icons/bi'

const ProductsList = () => {
    
  return (
    <div className='grid grid-cols-4 place-items-stretch px-10 py-5'>
      <div className='shadow-2xl rounded-2xl'>
        <img src="https://assets.stickpng.com/images/5f49277468ecc70004ae7083.png" alt="" className=''/>
        <div className='px-3 flex flex-col '>
          <h1 className='text-2xl text-gray-900'>Buy iPhone SE</h1>
          <p className='text-gray-700 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className='flex  items-center my-3 text-2xl'>
          <BiDollar  size={30}/> <p>200.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList
