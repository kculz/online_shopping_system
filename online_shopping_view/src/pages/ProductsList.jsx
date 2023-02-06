import React from 'react'
import { useGetAllProductsQuery } from '../redux/features/productsApi'

const ProductsList = () => {
    const {error, isLoading, data} = useGetAppProductsQuery()
  return (
    <div>
      
    </div>
  )
}

export default ProductsList
