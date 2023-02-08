import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => "users"
        }),
        userLogin: builder.query({
            query: (email) => ({
                url: `users/${email}`,
                headers: ''
            }),
        }),
        registerUser: builder.mutation({
            query: ({firstname, lastname, username, email, password}) => ({
                url: "users/register",
                method: "POST",
                body: {firstname,lastname,username,email,password}
            })
        }),
        updateUser: builder.mutation({
            query: ({id,...rest}) =>({
                url: "users/edit",
                method: "PUT",
                body: {...rest}
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/remove/${id}`,
                method: "PUT",
            })
        })
    })
})


export const { useGetAllUserQuery, useUserLoginQuery, useRegisterUserMutation, useUpdateUserMutation, useDeleteUserMutation } = usersApi
