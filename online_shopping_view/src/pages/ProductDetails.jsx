import {React, useParams} from 'react'
import { useGetSingleProductQuery } from '../redux/features/productsApi'


const ProductDetails = (id) => {
  const {id} = useParams()
  const {data, isLoading,error, isFetching} = useGetSingleProductQuery()
  return (
    <div>
      Product deta
    </div>
  )
}

export default ProductDetails
