import React from 'react'
import Loading from '../components/Loading'
import { useGetAllProductsQuery } from '../redux/features/productsApi'

const ProductsList = () => {
    const {error, isLoading, data} = useGetAllProductsQuery()
    console.log(data)
    const data2 = data
    console.log(data2)
  return (
    <div className='w-screen h-90vh bg-white px-10'>
      {
        isLoading? <Loading /> : error? <Error /> : <>
          <div className='grid justify-center items-center gap-10'>
            {
              data2?.map((item) => {
                return(
                  <div key={item._id}>
                    <h1>{item.title}</h1>
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
