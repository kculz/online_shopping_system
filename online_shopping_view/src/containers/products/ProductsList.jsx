import React from 'react'
import { useSelector } from 'react-redux'

import {TbBuildingWarehouse} from 'react-icons/tb'
import { IoPricetags } from 'react-icons/io5'

import pic from '../assets/images/product.jpeg'

const ProductsList = () => {
    const products = useSelector((state) => state.allProducts.products)
    const {id,title,cat} = products
    console.log(products)
  return (
    <div className='flex flex-wrap gap-5 justify-center my-5'>
    <div  className='shadow-gray-400 shadow-2xl w-72  rounded-2xl mt-3 overflow-hidden cursor-pointer'>
           <img src={pic} alt="product" />
           <div className='px-2 py-3'>
           <p className="text-gray-500 text-lg">{title}</p>
          <div className="flex flex-col justify-start items-start px-2 py-2">
              <div className="flex gap-2">
                {/* <TbBuildingWarehouse size={30} color='#309CFB' /> */}
                <div className="flex gap-4 ">
                {/* <p className='text-xl text-blue-500'>Quantity </p> */}
                <p className="text-xl text-blue-500">Available in-stock</p>
                </div>
              </div>
              <div className='flex gap-2 mt-1'>
                <IoPricetags size={25} color='#309CFB' />
                <p className='text-lg text-blue-500'>$ 20.00</p>
              </div>
          </div>
           </div>
          </div>
    </div>
  )
}

export default ProductsList
