import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        createProduct: builder.mutation({
            query: ({title,desc,img,category,weight,lenght,width,color,price}) => ({
                url: `/products/add`,
                method: `POST`,
                body: {title,desc,img,category,weight,lenght,width,color,price}
            })
        }),
        updateProduct: builder.mutation({
            query: ({id,title,desc,img,category,weight,lenght,width,color,price}) => ({
                url: `/products/update/${id}`,
                method: `PUT`,
                body: {title,desc,img,category,weight,lenght,width,color,price}
            })
        }),
        deleteProduct: builder.mutation({
            query: ({id}) => ({
                url: `/products/remove/$id`,
                method: `DELETE`,
            })
        }),
    })
})

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi