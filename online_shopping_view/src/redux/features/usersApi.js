import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const usersApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "users"
        }),
        userLogin: builder.query({
            query: (email) => ({
                url: `users/${email}`,
                headers: ''
            }) 
        }),
        userRegistration: builder.mutation({
            query: (data) => ({
                url: "users/registration",
                method: "POST",
                body: {data}
            })
        }),
        deleteuser: builder.mutation({
            query: (id) => ({
                url: `users/remove/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useGetAllUsersQuery, useDeleteuserMutation, useUserLoginQuery, useUserRegistrationMutation} = usersApi