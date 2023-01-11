import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true 
        },
        loginSuccess: (state,action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state,action) => {
            state.isFetching = false
            state.error = true
        }, 

    }
})

export const { loginStart, loginSuccess, loginFailure } = userReducer.actions
export default userReducer.reducer