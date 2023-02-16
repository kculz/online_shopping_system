import React from 'react'
import Loading from '../components/Loading'
import { useGetAllProductsQuery } from '../redux/features/productsApi'

const ProductsList = () => {
    const {error, isLoading, data} = useGetAllProductsQuery()
    
  return (
    <div className='w-screen h-90vh bg-white px-10'>
      <h1 className="text-start text-2xl text-gray-700 my-5">Products</h1>
      {
        isLoading? <Loading /> : error? <Error /> : <>
          <div className='grid grid-cols-4 place-items-center justify-center items-center gap-10'>
            {
              data?.map((item) => {
                const base64String = btoa(
                  String.fromCharCode(...new Uint32Array(item.img.data))
                )
                return(
                  <div key={item._id} className='border shadow-2xl rounded-xl flex flex-col justify-center items-center p-5 mt-3'>
                    <img src={`data:image/png;base64, ${base64String}`} alt="product"  />
                    <div className="flex px-2 gap-2 my-2">
                      <h1>{item.title}</h1>
                      <p>{item.price}</p>
                    </div>
                    <p>{item.desc}</p>
                    <button className='btn-full'>Add to cart</button>
                  </div>
                )
              })
            }
          </div>
        </>
      }
    </div>
  )
}

export default ProductsList
