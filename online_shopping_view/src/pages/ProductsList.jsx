import React from 'react'
import Loading from '../components/Loading'
import { useGetAllProductsQuery } from '../redux/features/productsApi'

const ProductsList = () => {
    const {error, isLoading, data} = useGetAllProductsQuery()
  return (
    <div className='w-screen h-90vh bg-white px-10'>
      {
        isLoading? <Loading /> : error? <Error /> : <>
          <div className='grid justify-center items-center gap-10'>
            {
              data?.map(item => {
                <div key={item.id}>
                  <h1>{data.desc}</h1>
                </div>
              })
            }
          </div>
        </>
      }
    </div>
  )
}

export default ProductsList
