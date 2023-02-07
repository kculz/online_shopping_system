import React from 'react'
import { useGetAllProductsQuery } from '../redux/features/productsApi'

const Error = () => {
    const {error} = useGetAllProductsQuery()
  return (
    <div>
      <h1>An Error occured</h1>{error.data}
    </div>
  )
}

export default Error
